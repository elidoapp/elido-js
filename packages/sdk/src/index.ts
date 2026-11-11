export * from "./types.js";
export { ElidoApi, ElidoApiError } from "./client.js";
export type { ElidoApiOptions, RequestOptions } from "./client.js";
// browser-only AES-GCM helper for end-to-end encrypted
// links. Imports `crypto.subtle` so consumers MUST call it from a
// browser context (Next.js "use client" component, mobile WebView, …).
export { encryptLinkDestination } from "./encrypt.js";
