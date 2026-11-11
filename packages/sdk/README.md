# @elido/sdk — TypeScript SDK

Sync HTTP client for the [Elido](https://elido.app) URL-shortener API. Works in Node 20+, modern browsers, Cloudflare Workers, Deno, and Bun — anywhere `fetch` and `crypto.randomUUID` exist natively.

```ts
import { ElidoApi } from "@elido/sdk";

const sdk = new ElidoApi({
  baseUrl: "https://api.elido.app",
  token: "elido_…",
});

const link = await sdk.links.create(42, {
  domain_id: 1,
  destination_url: "https://example.com/landing",
  tags: ["spring-2026"],
});

console.log(link.slug);
```

## Install

```bash
npm i @elido/sdk
# pnpm add @elido/sdk
# yarn add @elido/sdk
```

Create an API key in the Elido dashboard (it starts with `elido_`), then point the client at `https://api.elido.app`.

## Auth

In order of precedence:

| Constructor field | Header sent               | Use case               |
| ----------------- | ------------------------- | ---------------------- |
| `token`           | `Authorization: Bearer …` | Production / scripting |
| `cookie`          | `Cookie: …`               | Server-side proxies    |

API keys start with the `elido_` prefix and are minted in the dashboard under API keys. They're shown once and stored hashed; rotate via `apiKeys.create` + `apiKeys.revoke(oldId)`.

## Multi-host setups

If you front Elido with separate hostnames per service, pass each base URL explicitly:

```ts
const sdk = new ElidoApi({
  baseUrl: "https://api.elido.app",
  analyticsBaseUrl: "https://analytics.elido.app",
  billingBaseUrl: "https://billing.elido.app",
  token: "elido_…",
});
```

Anything you leave out falls back to `baseUrl`.

## Idempotency

Every `POST` / `PUT` / `PATCH` automatically gets an `Idempotency-Key` header (UUID v4 via `crypto.randomUUID`). The server is free to dedup retries server-side; this keeps the SDK forward-compatible without breaking anything today.

Override per-call when you have a stable upstream id (cron job, message id, …):

```ts
await sdk.links.create(
  42,
  { domain_id: 1, destination_url: "https://example.com/x" },
  { idempotencyKey: "job-2026-05-08-x" },
);
```

Disable it globally if your own middleware already adds the header:

```ts
new ElidoApi({ baseUrl, token, disableIdempotencyKey: true });
```

## Pagination

`links.iterate` and `analytics.recentClicksIterate` return async iterators that page transparently:

```ts
for await (const link of sdk.links.iterate(42, { tags: ["spring"] })) {
  console.log(link.slug);
}

for await (const click of sdk.analytics.recentClicksIterate(42, {
  from: "2026-04-01T00:00:00Z",
  to: "2026-05-01T00:00:00Z",
})) {
  console.log(click.ts, click.country_code);
}
```

`break` from the loop to stop early — no extra page is fetched.

## Retries

Network errors and `502 / 503 / 504` responses are retried up to 3 times with exponential backoff (`250ms`, `750ms`, `2.25s`, ±25 % jitter). `4xx` is never retried — those are caller bugs and should surface immediately.

Tune or disable:

```ts
new ElidoApi({
  baseUrl,
  token,
  maxRetries: 5,
  retryBackoffMs: [200, 1000, 3000],
});
new ElidoApi({ baseUrl, token, maxRetries: 0 }); // off
```

Per-call abort with a standard `AbortSignal`:

```ts
const ctrl = new AbortController();
setTimeout(() => ctrl.abort(), 5_000);
await sdk.links.create(42, input, { signal: ctrl.signal });
```

## Webhook signature verification

`webhooks.verify` checks the signature Elido attaches to each webhook delivery. Two headers are sent:

```
X-Webhook-Signature: v1=<hex(HMAC-SHA256(secret, "<ts>.<body>"))>
X-Webhook-Timestamp: <unix-seconds>
```

Verify them in your handler. **Use the raw body**, not a parsed JSON object — bytes matter.

```ts
import { ElidoApi } from "@elido/sdk";

const sdk = new ElidoApi({ baseUrl: "https://api.elido.app" });

export async function POST(req: Request) {
  const raw = await req.text();
  const ok = await sdk.webhooks.verify(
    raw,
    req.headers.get("X-Webhook-Signature") ?? "",
    req.headers.get("X-Webhook-Timestamp") ?? "",
    process.env.WEBHOOK_SECRET!,
    { maxSkewSec: 300 },
  );
  if (!ok) return new Response("bad signature", { status: 401 });
  // … process JSON.parse(raw) safely
}
```

The comparison is timing-safe; the function returns `false` (never throws) on a malformed signature, hex, or expired timestamp.

## Errors

`ElidoApiError` carries `status`, `body`, `message`. Anything else (transport, abort, malformed JSON) bubbles up as a plain `Error`:

```ts
import { ElidoApi, ElidoApiError } from "@elido/sdk";

try {
  await sdk.workspaces.get(99);
} catch (err) {
  if (err instanceof ElidoApiError && err.status === 404) {
    /* soft-handle */
  } else throw err;
}
```

## Versioning

Hand-written against Elido's public OpenAPI spec (<https://elido.app/openapi.json>). Adding fields to the wire shape stays compatible (the SDK ignores unknown JSON keys); breaking changes bump the SDK minor.

## Links

- Documentation: <https://elido.app/docs>
- Issues: <https://github.com/elidoapp/elido-js/issues>
- Changelog: [CHANGELOG.md](./CHANGELOG.md)

## License

[MIT](./LICENSE) (c) Elido. The Elido service itself is a separate, hosted
product; this repository contains only the client library.
