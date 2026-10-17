```text
┌──────────────────────────────────────────────┐
│                  CLIENTS                     │
│                                              │
│     Web                Future Mobile         │
│      │                     │                 │
│      ▼                     ▼                 │
│   Next.js                Mobile              │
└───────┬─────────────────────┬────────────────┘
        │                     │
        └──────────┬──────────┘
                   │
                   ▼
          ┌─────────────────┐
          │     NestJS      │
          │      API        │
          ├─────────────────┤
          │ Auth            │
          │ Resources       │
          │ Organisations   │
          │ Events          │
          │ Search          │
          │ Submissions     │
          │ Moderation      │
          │ Verification    │
          │ Locations       │
          └────────┬────────┘
                   │
                Prisma
                   │
                   ▼
          ┌─────────────────┐
          │   PostgreSQL    │
          │    + PostGIS    │
          └─────────────────┘
```

The Next.js application is the web client and the NestJS application is the shared API boundary for the web client and future mobile clients.

## Technology Stack

| Layer                 | Technology                             | Purpose                                                       |
| --------------------- | -------------------------------------- | ------------------------------------------------------------- |
| Frontend              | Next.js (App Router)                   | SSR/SSG, SEO, UI, and routing                                 |
| API                   | NestJS                                 | Shared API for web and future mobile clients                  |
| Language              | TypeScript                             | Type safety across the frontend and API                       |
| UI                    | React                                  | Component-based frontend                                      |
| Styling               | Tailwind CSS                           | Responsive, mobile-first UI                                   |
| Database              | PostgreSQL                             | Primary relational database                                   |
| Geospatial            | PostGIS                                | Coordinates, radius searches, and nearest-resource queries    |
| ORM                   | Prisma                                 | Type-safe database access and migrations                      |
| Validation            | Zod                                    | Validation for forms, API inputs, and external data           |
| Maps                  | MapLibre GL JS                         | Interactive maps without locking the UI to Google Maps        |
| Map data/provider     | TBD                                    | Tiles, geocoding, and routing; Google Maps can be added later |
| Authentication        | TBD                                    | Initially needed only for contributor and admin features      |
| File storage          | Object storage (e.g. R2/S3-compatible) | Logos, images, and other uploads                              |
| Testing               | Vitest + Playwright                    | Unit/integration and end-to-end testing                       |
| Accessibility testing | axe-core                               | Automated WCAG checks                                         |
| Linting/formatting    | ESLint + Prettier                      | Code quality and consistency                                  |
| CI/CD                 | GitHub Actions                         | Tests, type checking, and deployment pipeline                 |
| Hosting               | TBD                                    | Next.js frontend and NestJS API hosting                       |
| Monitoring            | TBD                                    | Errors, performance, and uptime                               |
| Analytics             | TBD                                    | Privacy-conscious product analytics                           |
