// browser-side helper to encrypt a link destination
// before POSTing it to the API. The plaintext URL never leaves the
// browser; only the AES-GCM ciphertext + IV (and optional PBKDF2 salt)
// flow over the wire.
//
// THIS HELPER IS BROWSER-ONLY — it depends on the Web Crypto API
// (`crypto.subtle`) which Node ships behind a different surface
// (`node:crypto.webcrypto`). The dashboard imports it directly from a
// "use client" component; do NOT import it from a server-side path.
//
// Supported browsers (tested in the field, not the test suite):
//   - Safari 16+
//   - Firefox 115+
//   - Chrome / Edge — all evergreen releases
//   - Mobile WebKit (iOS 16+) — same as desktop Safari
//
// No polyfills are loaded; if `crypto.subtle` is unavailable we throw
// a clear error so the dashboard can surface a graceful fallback.

import type {
  EncryptedLinkBundle,
  EncryptLinkDestinationOptions,
} from "./types.js";

/**
 * Encrypt a destination URL for an Elido E2E encrypted link.
 *
 * Generates a fresh 256-bit AES-GCM key and 96-bit IV via
 * `crypto.getRandomValues`, encrypts the UTF-8 bytes of `url`, and
 * returns the wire payload + the URL fragment that carries the key.
 * The plaintext URL never leaves the browser.
 *
 * @example
 *   const { body, urlFragment } = await encryptLinkDestination(
 *     "https://docs.example.com/secret-spec.pdf",
 *   );
 *   const link = await elido.links.create(wsId, { domain_id: 1, ...body });
 *   // Share `https://elido.me/<slug>${urlFragment}` — the part after #
 *   // is what makes the link decryptable; without it the URL is dead.
 *
 * With a passphrase:
 *
 * @example
 *   const { body, urlFragment } = await encryptLinkDestination(
 *     "https://docs.example.com/secret-spec.pdf",
 *     { passphrase: "correct horse battery staple" },
 *   );
 *   // urlFragment is "#p=1" — the recipient is prompted on the
 *   // interstitial and must type the passphrase to unlock.
 */
export async function encryptLinkDestination(
  url: string,
  opts: EncryptLinkDestinationOptions = {},
): Promise<EncryptedLinkBundle> {
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("encryptLinkDestination: url must be a non-empty string");
  }
  if (!/^https?:\/\//i.test(url)) {
    throw new Error(
      "encryptLinkDestination: url must start with http:// or https://",
    );
  }
  if (url.length > 8192) {
    throw new Error("encryptLinkDestination: url exceeds 8192 chars");
  }
  const subtle = getSubtle();

  const iv = new Uint8Array(12);
  crypto.getRandomValues(iv);

  let key: CryptoKey;
  let rawKeyForFragment: Uint8Array | null = null;
  let salt: Uint8Array | null = null;
  let kdfIters: number | null = null;

  if (opts.passphrase && opts.passphrase.length > 0) {
    // PBKDF2-SHA256(passphrase, salt, iters). The salt is random per
    // link so two links with the same passphrase don't share key
    // material. 16 bytes is enough — the salt's purpose is uniqueness,
    // not secrecy.
    salt = new Uint8Array(16);
    crypto.getRandomValues(salt);
    kdfIters = Math.max(100_000, opts.kdfIters ?? 100_000);
    const base = await subtle.importKey(
      "raw",
      new TextEncoder().encode(opts.passphrase),
      { name: "PBKDF2" },
      false,
      ["deriveKey"],
    );
    key = await subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt as BufferSource,
        iterations: kdfIters,
        hash: "SHA-256",
      },
      base,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt"],
    );
  } else {
    // Fresh 256-bit random key. We keep the raw bytes around so we
    // can emit them as base64url in the URL fragment — importKey with
    // extractable=false would prevent that, so we don't go through
    // exportKey at all.
    rawKeyForFragment = new Uint8Array(32);
    crypto.getRandomValues(rawKeyForFragment);
    key = await subtle.importKey(
      "raw",
      rawKeyForFragment as BufferSource,
      { name: "AES-GCM" },
      false,
      ["encrypt"],
    );
  }

  const plaintext = new TextEncoder().encode(url);
  const ciphertext = new Uint8Array(
    await subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext),
  );

  const body: EncryptedLinkBundle["body"] = {
    is_encrypted: true,
    encrypted_target: bytesToBase64(ciphertext),
    enc_iv: bytesToBase64(iv),
    enc_alg: "aes-256-gcm",
  };

  let urlFragment: string;
  if (salt && kdfIters) {
    body.enc_passphrase_salt = bytesToBase64(salt);
    body.enc_kdf = "pbkdf2-sha256";
    body.enc_kdf_iters = kdfIters;
    // No key in the URL — the recipient types the passphrase on the
    // interstitial. The `p=1` marker tells the in-page JS to skip
    // fragment parsing and show the passphrase prompt.
    urlFragment = "#p=1";
  } else {
    // The fragment is the ONLY place the key lives. Browsers do not
    // forward the `#…` part of a URL when navigating, so the Elido
    // server never sees it.
    urlFragment = "#k=" + bytesToBase64Url(rawKeyForFragment!);
  }

  return { body, urlFragment };
}

function bytesToBase64(b: Uint8Array): string {
  // String.fromCharCode is faster than incremental concat for the
  // sub-KiB blobs we deal with (URLs + 16-byte tag). For very large
  // buffers we'd chunk to avoid the args-list limit; we cap at 64KiB
  // server-side so this is fine.
  let bin = "";
  for (let i = 0; i < b.length; i++) bin += String.fromCharCode(b[i]!);
  return btoa(bin);
}

function bytesToBase64Url(b: Uint8Array): string {
  return bytesToBase64(b)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function getSubtle(): SubtleCrypto {
  if (
    typeof crypto === "undefined" ||
    typeof crypto.subtle === "undefined" ||
    typeof crypto.getRandomValues !== "function"
  ) {
    throw new Error(
      "encryptLinkDestination: Web Crypto API is unavailable. This helper " +
        "is browser-only — modern Safari 16+ / Firefox 115+ / Chromium ship it. " +
        "Do not call it from server-side Node code.",
    );
  }
  return crypto.subtle;
}
