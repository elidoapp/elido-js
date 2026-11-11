# elido-js

Official JavaScript / TypeScript client libraries for [Elido](https://elido.app), the EU-first URL shortener.

| Package | npm | Path |
| --- | --- | --- |
| [`@elido/sdk`](./packages/sdk) | API client (Node 18+, browsers, Workers, Deno, Bun) | `packages/sdk` |
| [`@elido/api-types`](./packages/api-types) | TypeScript types for the API | `packages/api-types` |

Other languages: [Python](https://github.com/elidoapp/elido-python), [Go](https://github.com/elidoapp/elido-go), [Ruby](https://github.com/elidoapp/elido-ruby), [MCP server](https://github.com/elidoapp/mcp-server).

Docs: <https://elido.app/docs>. Licensed under the [MIT License](./LICENSE).

## Develop

```bash
npm install
npm run build      # api-types first, then sdk
npm run typecheck
```
