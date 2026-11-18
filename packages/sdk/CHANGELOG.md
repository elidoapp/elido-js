# Changelog

All notable changes to the TypeScript/JavaScript SDK (@elido/sdk) are documented here.
This project follows [Semantic Versioning](https://semver.org/).

## 0.1.1

- Fixed: analytics calls sent no `Authorization` header unless `analyticsToken` was set, so an API key passed as `token` got 401 on every `analytics.*` method. When `analyticsBaseUrl` is not set, `token` is now used for analytics too.

## 0.1.0

- First public release.
- Includes `isEmailVerificationError(err)` and the `EMAIL_NOT_VERIFIED` / `WORKSPACE_OWNER_EMAIL_NOT_VERIFIED` constants. Workspace writes return HTTP 403 with these codes until a workspace owner has verified their email (`ElidoApiError.code`). Workspaces expose `owner_email_verified`.
