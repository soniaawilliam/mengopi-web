export type EventCategory = "food" | "social" | "clothing";
export type EventCostType = "free" | "affordable";

export interface SeedEvent {
  id: string;
  name: string;
  description: string;
  category: EventCategory;
  costType: EventCostType;
  priceLabel: string;
  startsAt: string;
  endsAt: string;
  location: string;
  address: string;
  source: { name: string; type: string; url: string; licence: string };
  verification: { lastVerified: string | null };
}

// Events remain empty until they come from an organiser or an authorised feed.
export const seedEvents: SeedEvent[] = [];
