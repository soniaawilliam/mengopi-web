# Mengopi

Mengopi is a multilingual directory for discovering community resources, initiatives, events, and organisations in Malaysia.

## Project structure

```text
apps/
  web/   # Next.js web client
  api/   # NestJS API
packages/ # Shared packages as the product grows
docs/     # Product, architecture, and development documentation
```

## Getting started

Requirements: Node.js 20+ and npm 10+.

```bash
npm install
npm run dev:web
```

The web client runs on `http://localhost:3000`.

To run the API in a second terminal:

```bash
npm run dev:api
```

The API runs on `http://localhost:3001`.

## Current scope

The initial scaffold provides a minimal web shell and API health endpoint. Feature work should follow [the Phase 1 task list](./docs/phase-1-task-list.md), using the documented vertical-slice approach.
