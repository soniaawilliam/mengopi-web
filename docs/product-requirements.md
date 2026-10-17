# Product Requirements Document

## 1. Document Information

| Field              | Value                     |
| ------------------ | ------------------------- |
| Product name       | `PROJECT_NAME`            |
| Working name       | TBD                       |
| Product type       | Mobile-first web platform |
| Primary market     | Malaysia                  |
| Primary language   | Malay                     |
| Secondary language | English                   |
| Future languages   | Mandarin, Tamil           |
| Status             | Draft                     |
| Version            | 0.1                       |
| Last updated       | 2026-09-24                |

---

# 2. Product Overview

`PROJECT_NAME` is a free, mobile-first platform that helps people in Malaysia discover **free and affordable resources, services, activities, facilities, and events** available in their communities.

The platform combines:

- A searchable directory
- Interactive maps
- An accessible list-based alternative to maps
- Optional location-based discovery
- Cost and eligibility information
- Community submissions and corrections
- Verification and data-quality controls
- A calendar for time-limited events
- Multilingual content
- Accessibility-first design

The platform should make it easy for someone to answer:

> **"What free or affordable things are available near me?"**

without requiring an account or requiring the user to share their location.

---

# 3. Problem Statement

Information about free and affordable resources in Malaysia is fragmented.

Users may have difficulty determining:

1. What resources exist.
2. Which resources are genuinely free or affordable.
3. Whether they are eligible.
4. Where they are located.
5. Whether the information is still current.
6. How to get there.
7. What is available nearby.
8. What events are happening within a limited time period.

Existing services may provide information about particular types of assistance, but users often need to search across multiple services to understand what is available to them.

`PROJECT_NAME` aims to provide a single, accessible discovery layer over these resources.

---

# 4. Product Vision

Create a trusted, accessible and easy-to-use **community resource map for Malaysia**.

The platform should help people discover opportunities and resources that improve everyday life without requiring significant financial expenditure.

The product should be useful to:

- People looking to save money
- Students
- Families
- Seniors
- People new to an area
- People looking for community activities
- People looking for public facilities
- People looking for free events
- People seeking affordable essential services
- Anyone curious about what is available in their local community

The platform should not position itself primarily as a welfare or aid platform.

It should instead be positioned as a **general-purpose community discovery platform**.

---

# 5. Product Principles

## 5.1 Accessibility first

The platform must be designed according to WCAG 2.2 AA principles.

Accessibility must not depend on the map.

Every important piece of information available through the map must also be available through an accessible list or page.

---

## 5.2 Location is optional

Users must never be required to provide GPS/location access to use the platform.

Users can:

- Allow location access
- Search for a location manually
- Browse a map
- Select a state/city/area
- Search by postcode or address where supported

---

## 5.3 Information before interaction

Users should be able to discover useful information without:

- Creating an account
- Granting location access
- Downloading an app
- Interacting with a map
- Enabling JavaScript for basic content

---

## 5.4 Trust and freshness

Information should clearly communicate:

- Where it came from
- When it was last verified
- Whether it has been reported as outdated
- Whether it is official, community-submitted or otherwise sourced

---

## 5.5 Free and affordable

Cost must be a first-class property of a resource.

The platform should distinguish between:

- Free
- Under RM5
- Under RM10
- Subsidised
- Donation-based
- Exchange/free market
- Variable pricing
- Eligibility-dependent

---

## 5.6 Privacy by default

The platform should minimise collection of personal data.

In particular:

- Location should not be stored unnecessarily.
- Users should not need accounts to browse.
- Precise location history should not be collected.
- Analytics should avoid unnecessary tracking.
- Personal information submitted through forms should be limited to what is required.

---

# 6. Target Users

## 6.1 General public

People looking for free or affordable resources and activities.

Example needs:

> "Where is the nearest library?"

> "Are there any free activities this weekend?"

> "Where can I get affordable food?"

---

## 6.2 Students

Potential needs:

- Libraries
- Study spaces
- Free Wi-Fi
- Free events
- Educational resources
- Affordable food
- Free workshops
- Community activities

---

## 6.3 Families

Potential needs:

- Free children's activities
- Libraries
- Public parks
- Community events
- Affordable healthcare
- Free educational programmes

---

## 6.4 Seniors

Potential needs:

- Healthcare
- Community activities
- Public facilities
- Accessible locations
- Social programmes

---

## 6.5 People new to an area

Potential needs:

- Libraries
- Healthcare
- Community centres
- Food resources
- Public facilities
- Local activities
- Events

---

## 6.6 Organisations

Organisations may use the platform to:

- Submit initiatives
- Promote free/affordable services
- Update information
- Submit events
- Request corrections
- Maintain their organisation profile

---

# 7. Core User Stories

## Discovery

- As a visitor, I want to search for free or affordable resources.
- As a visitor, I want to browse resources by category.
- As a visitor, I want to browse resources by location.
- As a visitor, I want to see resources near a selected location.
- As a visitor, I want to see how much something costs.
- As a visitor, I want to know whether I am eligible.
- As a visitor, I want to know when a resource is open.
- As a visitor, I want to know when information was last verified.

## Location

- As a visitor, I want to optionally use my current location.
- As a visitor, I want to manually select a location.
- As a visitor, I want to browse the map without sharing my location.
- As a visitor, I want to see resources in a list as well as on a map.
- As a visitor, I want to understand how to reach a resource.

## Events

- As a visitor, I want to discover upcoming events.
- As a visitor, I want to filter events by date.
- As a visitor, I want to see free events.
- As a visitor, I want to see events near a selected location.

## Community contributions

- As a visitor, I want to submit a resource.
- As a visitor, I want to suggest an update.
- As a visitor, I want to report incorrect information.
- As an organisation, I want to submit my own initiative.
- As an organisation, I want to update my information.

## Accessibility

- As a keyboard user, I want to navigate the entire platform without a mouse.
- As a screen-reader user, I want to access the same information available through the map.
- As a user with location services disabled, I want to use the platform normally.
- As a user with reduced-motion preferences, I want the interface to respect those preferences.

## Language

- As a user, I want to use the platform in Malay.
- As a user, I want to switch to English.
- As a future user, I want to use Mandarin.
- As a future user, I want to use Tamil.

---

# 8. MVP Scope

The MVP should focus on providing a trustworthy resource directory and discovery experience.

## 8.1 Resource directory

The platform must support resources such as:

- Food
- Healthcare
- Libraries
- Clothing
- Education
- Community services
- Social activities
- Public facilities
- Free/affordable services

---

## 8.2 Resource pages

Each resource should provide, where available:

- Name
- Description
- Category
- Cost
- Eligibility
- Address
- Location
- Opening hours
- Contact information
- Website
- Accessibility information
- Languages supported
- Source
- Verification status
- Last verified date

---

## 8.3 Search

Users must be able to search resources using keywords.

Examples:

- "free food"
- "library"
- "free activities"
- "cheap healthcare"
- "study space"

Search should support relevant filters.

---

## 8.4 Filtering

MVP filters should include:

- Category
- Location
- Cost
- Distance
- Eligibility where practical
- Open now where practical

Future filters may include:

- Accessibility
- Age group
- Language
- Family-friendly
- Indoor/outdoor
- Transport accessibility

---

# 9. Map Requirements

## 9.1 Map

The platform should provide an interactive map showing resource locations.

Users should be able to:

- Zoom
- Pan
- Select markers
- View resource summaries
- Open resource pages
- Filter visible resources

---

## 9.2 List alternative

A list view must provide equivalent discovery functionality.

Example:

```text
Free Libraries Near Kuala Lumpur

1. Kuala Lumpur Library
   2.4 km
   Free
   Open today

2. ...
```

The list must remain usable without the map.

---

## 9.3 GPS

GPS/location access must:

- Be optional
- Require explicit browser permission
- Provide a clear explanation of why location is requested
- Work when permission is denied
- Not permanently store precise location unless explicitly required by a future feature

---

# 10. Future Public Transport Integration

A future version should provide transport options from the user's selected location to a resource.

Potential information:

- Walking
- Bus
- Rail
- Public transport combinations
- Estimated journey time
- Distance

Potential integrations may include Google Maps or other mapping/transit providers.

Public transport integration is not required for MVP.

---

# 11. Events and Calendar

A future MVP/Phase 2 feature should support time-limited events.

Events should contain:

- Event name
- Description
- Start date/time
- End date/time
- Location
- Cost
- Eligibility
- Organiser
- Registration information
- Source
- Verification status

Users should be able to browse:

- Today
- Tomorrow
- This week
- This weekend
- This month

---

# 12. Submission System

Users should be able to submit new resources.

Submission form should support:

- Resource name
- Organisation
- Category
- Description
- Cost
- Eligibility
- Address
- Contact information
- Website
- Opening hours
- Location
- Supporting source
- Submitter contact information where required

Submissions must not automatically become publicly visible.

---

# 13. Update Request System

Users should be able to request corrections to existing information.

Examples:

- Incorrect opening hours
- Incorrect address
- Resource has closed
- Price has changed
- Website is broken
- Resource is no longer available
- Eligibility information is incorrect

Updates must enter a moderation workflow.

---

# 14. Bug/Issue Reporting

Users should be able to report:

- Broken links
- Broken pages
- Incorrect map location
- Incorrect information
- Accessibility problems
- Technical bugs
- Duplicate resources
- Other issues

Reports should be categorised and tracked internally.

---

# 15. Moderation

All user-submitted resources and significant edits should pass through moderation before publication where appropriate.

Possible statuses:

```text
PENDING
NEEDS_INFORMATION
APPROVED
PUBLISHED
REJECTED
ARCHIVED
```

Moderators should be able to:

- Review submissions
- Request more information
- Approve submissions
- Reject submissions
- Edit information
- Merge duplicates
- Archive closed resources
- Review reports
- Record verification information

---

# 16. Verification

Each published resource should have a verification state.

Possible states:

```text
VERIFIED
UNVERIFIED
NEEDS_REVIEW
STALE
CLOSED
```

The system should record:

- Verification date
- Verification source
- Verification method
- Verifier
- Relevant notes

A future automated process may flag resources that have not been verified within a defined period.

---

# 17. Data Sources

Potential data sources include:

- Government agencies
- Local councils
- Public institutions
- NGOs
- Community organisations
- Libraries
- Official organisation websites
- Public datasets
- Community submissions

The platform should record the source of important information.

Source information should include:

- Source name
- Source URL
- Source type
- Date accessed
- Verification status

Information must not be presented as official if it has not been verified as official.

---

# 18. Organisation Profiles

Future functionality should allow organisations to have profiles.

An organisation profile may contain:

- Name
- Logo
- Description
- Website
- Contact information
- Social links
- Locations
- Initiatives
- Events

Verified organisations may eventually be able to manage their own listings.

---

# 19. Internationalisation

## Initial languages

### Malay

Default language.

### English

Available as an alternative.

## Future languages

- Mandarin
- Tamil

The data model and URL architecture must support additional languages without requiring a database redesign.

---

# 20. Accessibility Requirements

The platform should target **WCAG 2.2 AA**.

Requirements include:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Appropriate heading hierarchy
- Accessible forms
- Accessible error messages
- Sufficient colour contrast
- Non-colour-dependent information
- Screen-reader compatibility
- Accessible dialogs
- Accessible menus
- Reduced-motion support
- Appropriate touch target sizes
- Accessible map alternative
- Accessible language selector
- Accessible filtering controls

The map must never be the sole method of accessing resource information.

---

# 21. SEO Requirements

SEO is a primary product requirement.

Public resource information must be available as crawlable HTML.

Important pages should have:

- Server-rendered content
- Unique titles
- Meta descriptions
- Canonical URLs
- Structured data where appropriate
- Open Graph metadata
- Semantic headings
- Internal links
- XML sitemap
- Robots.txt
- Breadcrumbs where appropriate

Potential indexable URL structures:

```text
/initiatives/[slug]
/categories/[slug]
/locations/[slug]
/locations/[location]/[category]
/events/[slug]
```

The platform must avoid uncontrolled indexing of every possible filter combination.

---

# 22. Performance Requirements

The platform should be optimised for mobile users and potentially slower connections.

Goals:

- Fast first contentful render
- Minimal JavaScript for content pages
- Optimised images
- Lazy-loaded interactive maps
- Server-rendered content
- CDN caching
- Efficient database queries
- Appropriate database indexes
- Pagination for large result sets

Target Core Web Vitals:

| Metric | Target        |
| ------ | ------------- |
| LCP    | < 2.5 seconds |
| INP    | < 200 ms      |
| CLS    | < 0.1         |

These targets should be measured on representative mobile devices and connections.

---

# 23. Privacy Requirements

The platform should follow a privacy-by-default approach.

The system should minimise:

- Personal data collection
- Location data retention
- Tracking
- Unnecessary cookies
- Unnecessary account requirements

Users should be able to browse public resources without creating an account.

Location should generally be used transiently for nearby searches rather than stored as a user history.

---

# 24. Security Requirements

The platform must protect:

- User accounts
- Submission data
- Moderator information
- Organisation accounts
- Administrative functions

Requirements include:

- Secure authentication
- Role-based access control
- Input validation
- Output encoding
- CSRF protection where applicable
- Rate limiting
- Abuse prevention
- Secure secrets management
- Database access controls
- Audit logging for administrative actions

Administrative functions must never be accessible through client-side role checks alone.

---

# 25. AI Crawler Policy

The platform should distinguish between:

- Search engine crawlers
- AI training crawlers
- Malicious crawlers
- API clients

The goal is to maintain search engine discoverability while limiting unwanted AI training/data harvesting where technically and legally appropriate.

The policy should be documented separately and implemented through:

- `robots.txt`
- HTTP headers where applicable
- Rate limiting
- API access controls
- Terms of use
- Appropriate crawler policies

The platform should not block legitimate search engine indexing solely to prevent AI crawlers.

---

# 26. Donations / Maintenance

The platform may include an optional contribution feature.

Example:

> ☕ Help keep this project running
> RM3

Contributions must:

- Be optional
- Not obstruct the user experience
- Clearly state their purpose
- Not affect access to information

The contribution system is not part of the core discovery functionality.

---

# 27. Analytics

Analytics should focus on product usefulness rather than extensive user tracking.

Potential metrics:

### Discovery

- Searches
- Resource views
- Category views
- Location searches
- Map usage
- List usage
- Filter usage

### Community

- Submissions
- Update requests
- Reports
- Approved submissions
- Verification activity

### Events

- Event views
- Event searches
- Outbound registration clicks

### Technical

- Performance
- Errors
- Failed searches
- API errors

Precise user location should not be retained solely for analytics.

---

# 28. Success Metrics

Initial metrics should include:

## User success

- Percentage of searches resulting in a resource view
- Resource-to-external-action click rate
- Search refinement rate
- Event discovery rate

## Data quality

- Percentage of listings verified
- Average age of listing verification
- Number of stale listings
- Report resolution time

## Community contribution

- Number of submissions
- Approval rate
- Number of corrections
- Organisation participation

## Performance

- Core Web Vitals
- Page load performance
- API response latency
- Error rate

---

# 29. Non-Functional Requirements

## Scalability

The architecture must support growth from:

```text
Hundreds of resources
       ↓
Thousands
       ↓
Hundreds of thousands
```

without requiring a complete architectural rewrite.

---

## Maintainability

The system should:

- Prefer managed infrastructure
- Minimise unnecessary services
- Use clear domain boundaries
- Use automated testing
- Use automated deployments
- Maintain documentation
- Avoid premature microservices

---

## Developer Experience

The project should use:

- TypeScript
- Next.js
- Prisma
- PostgreSQL
- PostGIS
- Automated linting
- Type checking
- Unit tests
- End-to-end tests
- CI/CD

---

# 30. MVP Out of Scope

The following should not be required for the initial launch:

- Native iOS application
- Native Android application
- Public transport routing
- Mandarin
- Tamil
- Personalised recommendations
- Complex social networking
- User-to-user messaging
- Full organisation dashboards
- Automated AI verification
- Advanced recommendation algorithms
- Dedicated search infrastructure
- Cryptocurrency or blockchain functionality

These may be considered later based on actual usage.

---

# 31. Future Roadmap

## Phase 0 — Foundation

- Product design
- Architecture
- Database design
- ERD
- Accessibility system
- Internationalisation architecture
- SEO architecture
- Design system

## Phase 1 — MVP

- Resource directory
- Search
- Categories
- Locations
- Map
- List view
- Cost filters
- Resource pages
- Submission system
- Reports
- Moderation
- Verification

## Phase 2 — Community

- User accounts
- Saved resources
- Organisation profiles
- Organisation-managed listings
- Events/calendar
- Improved verification workflows

## Phase 3 — Mobility

- Public transport
- Route planning
- Improved location discovery
- PWA enhancements

## Phase 4 — Multilingual

- Mandarin
- Tamil
- Expanded translated content

## Phase 5 — Intelligence

Potential future functionality:

- Automated data quality checks
- Duplicate detection
- Resource recommendations
- Natural-language search
- Automated categorisation
- Data ingestion from public datasets

---

# 32. Technical Architecture Direction

The initial application should use:

```text
Frontend / Application
Next.js
TypeScript

Data Access
Prisma

Database
PostgreSQL
PostGIS

Maps
MapLibre / compatible map provider

Object Storage
Object storage provider such as Cloudflare R2

Email
Transactional email provider

Monitoring
Application monitoring provider

Testing
Vitest
Playwright
axe-core
```

The exact hosting and third-party providers should remain implementation decisions rather than hard product requirements.

---

# 33. Key Architectural Decisions

## Decision 1: Map is an enhancement

The map must not be the primary data representation.

Resource information must remain available through crawlable pages and accessible lists.

---

## Decision 2: Location is optional

The platform must function without GPS.

---

## Decision 3: Public browsing requires no account

For now it will not include account creation. In the future, account creation should only be required for functionality that genuinely benefits from an account.

---

## Decision 4: Data provenance is first-class

Important information should have an identifiable source and verification status.

---

## Decision 5: Verification is part of the product

Data freshness should be treated as a core feature rather than an administrative afterthought.

---

## Decision 6: Start as a modular monolith

The initial system should be a single Next.js application backed by PostgreSQL/Prisma.

Microservices should only be introduced when a specific scaling or organisational requirement justifies them.

---

## Decision 7: Design for Malaysia first

The initial geographic scope should be the Klang Valley and later Malaysia, while the underlying data model should support expansion without major architectural changes.

---

# 34. MVP Definition of Done

The MVP is considered ready for public beta when a user can:

1. Open the site without an account.
2. Search for a resource.
3. Browse by category.
4. Browse by location.
5. View results in a list.
6. View results on a map.
7. Use the site without granting GPS permission.
8. Optionally use GPS to find nearby resources.
9. View cost information.
10. View eligibility information where available.
11. View opening hours where available.
12. View the resource's source.
13. See when the resource was last verified.
14. Submit a new resource.
15. Report incorrect information.
16. Request an update.
17. Navigate the site using a keyboard.
18. Use the essential functionality with a screen reader.
19. Use the site in Malay.
20. Switch to English.
21. Access crawlable resource pages through search engines.
22. Use the site successfully on a mobile device.

---

These should be resolved before the relevant implementation phase rather than prematurely locking them into the architecture.

---

# 36. Product North Star

The product should ultimately make this possible:

> **A person in Malaysia can open the site, choose or share a location, and within seconds discover trustworthy free or affordable resources, activities and events nearby — without needing an account or giving up unnecessary personal information.**

The platform succeeds when users no longer have to know **which government agency, NGO, library, council, community group or website** provides something useful.

They simply need to know:

> **"What is available?"**
