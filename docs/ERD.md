┌────────────────────┐
│ Organisation │
├────────────────────┤
│ id │
│ slug │
│ name │
│ description │
│ website │
│ email │
│ phone │
│ status │
└─────────┬──────────┘
│
│ 1:N
▼
┌────────────────────┐
│ Initiative │
├────────────────────┤
│ id │
│ organisation_id │
│ slug │
│ type │
│ status │
│ cost_type │
│ price_min │
│ price_max │
│ description │
└──────┬──────┬──────┘
│ │
│ │
▼ ▼
Category Location
│ │
│ ▼
│ Address
│
▼
InitiativeCategory

Initiative
│
├────< InitiativeEligibility
│
├────< InitiativeLanguage
│
├────< OpeningHours
│
├────< Event
│
├────< Source
│
├────< Verification
│
└────< Submission

User
│
├────< Submission
├────< Report
├────< Verification
└────< SavedInitiative
