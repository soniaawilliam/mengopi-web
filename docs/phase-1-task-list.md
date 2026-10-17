# Phase 1 Task List — MVP Implementation

Phase 1 turns the foundation into a working MVP. Implementation should proceed backend-first, then expose each completed capability through a minimal frontend. Visual polish and final design-system decisions are intentionally deferred.

## Implementation approach

- Build and verify one vertical slice at a time: data model → backend logic/API → minimal page → tests.
- Keep the UI semantic, accessible, responsive, and usable, but avoid investing in branding, visual polish, or final component styling.
- Use seeded data and realistic fixtures from the beginning.
- Keep public browsing account-free.
- Treat the list view as the primary discovery experience; add the map after the list and location flows work.

## 1. Project and development setup

- [ ] Initialise the Next.js App Router web client with TypeScript.
- [ ] Initialise the NestJS API with TypeScript.
- [ ] Define the API contract between Next.js and NestJS.
- [ ] Configure linting, formatting, strict type checking, and local environment variables.
- [ ] Add Prisma and configure PostgreSQL with PostGIS support.
- [ ] Integrate Prisma into the NestJS API and expose shared database services to the API modules.
- [ ] Add Vitest, Playwright, and axe-core test infrastructure.
- [ ] Configure local development, database migrations, and seed commands.
- [ ] Add CI checks for linting, type checking, unit tests, end-to-end tests, and builds.
- [ ] Add a minimal Next.js application shell with a plain header, navigation, main content area, and footer.
- [ ] Add a development-only `/dev-tools` page for endpoint testing.
- [ ] Document local setup and the development workflow.

**Done when:** a new developer can install the project, start the app, run migrations and seed data, and execute the quality checks.

## 2. Developer endpoint testing page

- [ ] Restrict `/dev-tools` to development environments or protect it from public access.
- [ ] Configure `/dev-tools` in Next.js to call the NestJS API rather than bypassing the API boundary.
- [ ] Add a simple endpoint catalogue grouped by domain: resources, categories, locations, submissions, reports, moderation, and verification.
- [ ] Add controls for HTTP method, URL/query parameters, and request body where applicable.
- [ ] Add one-click example requests for the common seeded-data scenarios.
- [ ] Display request status, response headers where useful, response body, and request duration.
- [ ] Add clear success, validation-error, not-found, and server-error states.
- [ ] Make responses readable for JSON and other supported response types.
- [ ] Add a way to copy the request URL and response payload.
- [ ] Prevent the page from exposing secrets, private credentials, or production data.
- [ ] Add end-to-end coverage for the dev-tools page in a development/test environment.
- [ ] Document how new endpoints should be added to the catalogue.

**Done when:** developers can use `/dev-tools` locally to exercise every implemented endpoint and quickly inspect success and failure responses.

## 3. Backend foundation and database

- [ ] Implement the Prisma schema based on `docs/data-model.md` and `docs/ERD.md`.
- [ ] Create migrations for:
  - [ ] organisations
  - [ ] initiatives/resources
  - [ ] categories
  - [ ] locations and addresses
  - [ ] eligibility
  - [ ] costs
  - [ ] opening hours
  - [ ] source records
  - [ ] verification records
  - [ ] submissions
  - [ ] reports
  - [ ] translated content
- [ ] Add status and moderation fields for draft, pending, published, rejected, archived, and stale records as appropriate.
- [ ] Add source, verification method, verifier, verification date, and notes fields.
- [ ] Add slugs and uniqueness constraints for public pages.
- [ ] Add geographic fields and indexes required for location queries.
- [ ] Add indexes for status, category, location, cost, language, and common search paths.
- [ ] Create seed data covering multiple categories, locations, cost types, verification states, and languages.
- [ ] Add repository/service functions for resource and category access.
- [ ] Add unit tests for database access and important state rules.

**Done when:** the schema migrates cleanly, seed data loads, and backend tests cover the core resource model.

## 4. Resource directory backend

- [ ] Implement a published-resource query with pagination.
- [ ] Implement category filtering.
- [ ] Implement location filtering.
- [ ] Implement cost filtering.
- [ ] Implement optional eligibility and open-now filtering where practical.
- [ ] Implement keyword search across resource names, descriptions, categories, and locations.
- [ ] Define consistent sorting and relevance behavior.
- [ ] Validate and normalise query parameters.
- [ ] Return only records appropriate for public visibility.
- [ ] Add tests for filtering, pagination, search, invalid input, and empty results.

**Done when:** backend queries can power the directory, search, and filter pages without page-specific database logic.

## 5. Resource and category read APIs

- [ ] Implement a resource list endpoint or server-side query interface.
- [ ] Implement a resource detail endpoint or server-side query interface.
- [ ] Implement category listing and category detail queries.
- [ ] Implement location listing and location detail queries.
- [ ] Return source and verification information with public resources.
- [ ] Return translated fields with the defined fallback behavior.
- [ ] Add stable error responses for missing, unpublished, and invalid resources.
- [ ] Add unit and integration tests for all read paths.

**Done when:** the frontend can consume stable, tested interfaces for all non-map discovery pages.

## 6. Minimal frontend: directory, search, and filters

- [ ] Build a plain, functional resource directory page.
- [ ] Build a keyword search form.
- [ ] Build category, location, and cost filters.
- [ ] Add pagination or another simple mechanism for large result sets.
- [ ] Build a resource card showing name, category, location, cost, opening state, and verification state.
- [ ] Build loading, empty, error, and no-results states.
- [ ] Preserve filters and search terms in the URL where practical.
- [ ] Ensure the directory works without JavaScript where feasible.
- [ ] Add responsive behavior for mobile and desktop without final visual styling.
- [ ] Add end-to-end tests for searching, filtering, pagination, and opening a result.

**Done when:** a user can find resources through a usable list without needing an account or map.

## 7. Minimal frontend: resource pages

- [ ] Build a crawlable resource detail page.
- [ ] Display available name, description, categories, cost, eligibility, address, opening hours, contact details, website, accessibility information, and supported languages.
- [ ] Display source, verification status, and last verified date.
- [ ] Add links to related category and location pages.
- [ ] Add basic metadata, canonical URL, and semantic headings.
- [ ] Add not-found and unpublished-resource handling.
- [ ] Add end-to-end coverage for the resource page and its important links.

**Done when:** a resource page exposes trustworthy, crawlable information in a plain but accessible layout.

## 8. Categories and locations

- [ ] Build category index and category result pages.
- [ ] Build location index and location result pages.
- [ ] Add internal links between categories, locations, and resources.
- [ ] Add basic breadcrumbs where useful.
- [ ] Add page titles and descriptions derived from the current category or location.
- [ ] Test empty and unknown category/location states.

**Done when:** users and search engines can discover resources through category and location routes.

## 9. Map and location support

- [ ] Choose and configure the initial MapLibre-compatible map provider.
- [ ] Define the provider adapter so map implementation details do not leak into domain logic.
- [ ] Implement a basic map view for resources with valid coordinates.
- [ ] Add marker selection and a link from a marker summary to the resource page.
- [ ] Add a list alternative with equivalent resource access.
- [ ] Add the map/list toggle.
- [ ] Add optional GPS permission flow with a clear explanation.
- [ ] Support useful behavior when GPS is denied or unavailable.
- [ ] Avoid storing precise location unless explicitly required.
- [ ] Add tests for the list alternative and location-permission behavior.

**Done when:** users can optionally use a map, while all discovery remains possible through the list.

## 10. Submission backend and minimal form

- [ ] Implement submission validation for resource name, organisation, category, description, cost, eligibility, address, contact details, website, opening hours, location, source, and submitter contact where required.
- [ ] Store submissions separately from published resources.
- [ ] Set new submissions to `PENDING` by default.
- [ ] Add spam and malformed-input protections appropriate for the MVP.
- [ ] Add a minimal submission form with accessible labels and errors.
- [ ] Add confirmation and failure states.
- [ ] Add tests proving submissions cannot become publicly visible automatically.

**Done when:** a user can submit a resource and the submission enters moderation without direct publication.

## 11. Reports and update requests

- [ ] Implement report categories for incorrect information, broken links/pages, incorrect map location, accessibility problems, duplicate resources, closed resources, and technical bugs.
- [ ] Implement report validation and storage.
- [ ] Implement update requests against an existing resource.
- [ ] Add a minimal report form and update-request form.
- [ ] Link reports and update requests to the affected resource where applicable.
- [ ] Add confirmation, error, and abuse-protection behavior.
- [ ] Add unit and integration tests.

**Done when:** users can report issues and request corrections without editing public data directly.

## 12. Moderation and verification backend

- [ ] Implement moderation state transitions: `PENDING`, `NEEDS_INFORMATION`, `APPROVED`, `PUBLISHED`, `REJECTED`, and `ARCHIVED`.
- [ ] Implement verification states: `VERIFIED`, `UNVERIFIED`, `NEEDS_REVIEW`, `STALE`, and `CLOSED`.
- [ ] Implement server-side rules preventing invalid transitions.
- [ ] Store moderation and verification history where needed for auditability.
- [ ] Add a minimal internal moderation interface, even if visually plain.
- [ ] Support reviewing submissions, approving/rejecting them, requesting information, and publishing approved resources.
- [ ] Support reviewing reports and update requests.
- [ ] Support recording verification source, method, date, verifier, and notes.
- [ ] Restrict moderation operations to authorised users or a development-only protected route until authentication is implemented.
- [ ] Add tests for permissions and state transitions.

**Done when:** submitted and reported data has a safe review path and published resources have explicit verification state.

## 13. Internationalisation and accessibility implementation

- [ ] Implement Malay (`ms`) as the default locale and English (`en`) as the initial alternative.
- [ ] Implement the language switcher while preserving the current route and relevant query parameters.
- [ ] Implement translation-key fallback and translated database-field fallback.
- [ ] Add locale-aware metadata to public pages.
- [ ] Use semantic HTML and a consistent heading hierarchy.
- [ ] Ensure all forms have labels, instructions, validation, and accessible error messages.
- [ ] Ensure keyboard navigation and visible focus states.
- [ ] Ensure status is not conveyed by color alone.
- [ ] Ensure the map has an accessible list alternative.
- [ ] Add automated axe-core checks to key pages and manually test keyboard navigation.

**Done when:** the core MVP flows are usable in Malay and English and meet the agreed baseline accessibility checks.

## 14. SEO and performance implementation

- [ ] Server-render public resource, category, and location content.
- [ ] Add unique titles, descriptions, canonical URLs, headings, and Open Graph metadata.
- [ ] Add structured data where appropriate.
- [ ] Generate `robots.txt` and an XML sitemap.
- [ ] Prevent uncontrolled indexing of arbitrary filter combinations.
- [ ] Add pagination and efficient database queries for large result sets.
- [ ] Optimise images and lazy-load the interactive map.
- [ ] Measure Core Web Vitals on representative mobile conditions.
- [ ] Add basic caching where safe.

**Done when:** public pages are crawlable, duplicate indexing is controlled, and performance issues are measurable.

## 15. MVP verification and handoff

- [ ] Run the full lint, type-check, unit-test, end-to-end, accessibility, and production-build checks.
- [ ] Test the core flow: browse → search → filter → view resource → submit/report.
- [ ] Test mobile layouts and slower network conditions.
- [ ] Test GPS allowed, denied, and unavailable states.
- [ ] Test Malay and English flows.
- [ ] Test unpublished, stale, closed, missing, and empty data states.
- [ ] Review privacy and security behavior for submissions, reports, location, and moderation.
- [ ] Record known limitations and deferred visual-design work.
- [ ] Confirm the MVP is ready for internal or public beta review.

## Phase 1 exit criteria

Phase 1 is complete when:

- [ ] Users can browse, search, filter, and view resources.
- [ ] Developers can test implemented endpoints through the protected `/dev-tools` page.
- [ ] Categories and locations provide working discovery paths.
- [ ] A list view works independently of the map.
- [ ] The map is available as an optional enhancement.
- [ ] Users can submit resources, report issues, and request updates.
- [ ] Submissions and changes pass through moderation.
- [ ] Published resources expose source and verification information.
- [ ] Malay and English are available for the core flows.
- [ ] Core pages are keyboard accessible and have an automated accessibility check.
- [ ] Public pages are server-rendered and crawlable.
- [ ] CI and the agreed quality gates pass.
- [ ] The remaining work is primarily visual design, polish, and later-phase features.
