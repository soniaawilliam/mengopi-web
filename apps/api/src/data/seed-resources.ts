export type ResourceCategory = "food" | "social" | "clothing";
export type CostType = "free" | "affordable" | "variable";

export interface SeedResource {
  id: string;
  name: string;
  description: string;
  category: ResourceCategory;
  costType: CostType;
  priceLabel: string;
  location: string;
  address: string;
  latitude: number;
  longitude: number;
  website: string | null;
  source: { name: string; type: "open-data"; url: string; licence: string };
  verification: { lastVerified: string | null };
}

/** Real records imported from a small central-KL OpenStreetMap extract. */
export const seedResources: SeedResource[] = [
  {
    id: "osm-node-5110735576",
    name: "Rumah Attap Library & Collective",
    description: "Library and cultural space listed in OpenStreetMap.",
    category: "social",
    costType: "variable",
    priceLabel: "Check with venue",
    location: "Kampung Attap, Kuala Lumpur",
    address: "84c Jalan Rotan, Kuala Lumpur, Malaysia",
    latitude: 3.1379738,
    longitude: 101.6973052,
    website: "https://rumahattap.wixsite.com/rumahattap",
    source: {
      name: "OpenStreetMap",
      type: "open-data",
      url: "https://www.openstreetmap.org/node/5110735576",
      licence: "Open Database License (ODbL)",
    },
    verification: { lastVerified: "2026-10-17" },
  },
  {
    id: "osm-node-7309205418",
    name: "RUANG by Think City",
    description: "Community centre listed in OpenStreetMap.",
    category: "social",
    costType: "variable",
    priceLabel: "Check with venue",
    location: "Pasar Seni, Kuala Lumpur",
    address: "2 Jalan Hang Kasturi, Kuala Lumpur, Malaysia",
    latitude: 3.1471199,
    longitude: 101.6972881,
    website: null,
    source: {
      name: "OpenStreetMap",
      type: "open-data",
      url: "https://www.openstreetmap.org/node/7309205418",
      licence: "Open Database License (ODbL)",
    },
    verification: { lastVerified: "2026-10-17" },
  },
  {
    id: "osm-node-12102046307",
    name: "Kedai Kaki Lelong",
    description: "Second-hand shop listed in OpenStreetMap.",
    category: "clothing",
    costType: "variable",
    priceLabel: "Prices vary",
    location: "Brickfields, Kuala Lumpur",
    address: "67, Kuala Lumpur, Malaysia",
    latitude: 3.1348756,
    longitude: 101.6938955,
    website: null,
    source: {
      name: "OpenStreetMap",
      type: "open-data",
      url: "https://www.openstreetmap.org/node/12102046307",
      licence: "Open Database License (ODbL)",
    },
    verification: { lastVerified: "2026-10-17" },
  },
  {
    id: "osm-node-4945459921",
    name: "Gerson Batik",
    description: "Clothing shop listed in OpenStreetMap.",
    category: "clothing",
    costType: "variable",
    priceLabel: "Prices vary",
    location: "Pasar Seni, Kuala Lumpur",
    address: "6 Jalan Panggung, Kuala Lumpur, Malaysia",
    latitude: 3.1419797,
    longitude: 101.69721,
    website: null,
    source: {
      name: "OpenStreetMap",
      type: "open-data",
      url: "https://www.openstreetmap.org/node/4945459921",
      licence: "Open Database License (ODbL)",
    },
    verification: { lastVerified: "2026-10-17" },
  },
  {
    id: "osm-node-9906855622",
    name: "Family Bundle",
    description: "Clothing shop listed in OpenStreetMap.",
    category: "clothing",
    costType: "variable",
    priceLabel: "Prices vary",
    location: "Pasar Seni, Kuala Lumpur",
    address: "61 Jalan Petaling, Kuala Lumpur, Malaysia",
    latitude: 3.1440382,
    longitude: 101.6975752,
    website: null,
    source: {
      name: "OpenStreetMap",
      type: "open-data",
      url: "https://www.openstreetmap.org/node/9906855622",
      licence: "Open Database License (ODbL)",
    },
    verification: { lastVerified: "2026-10-17" },
  },
  {
    id: "osm-node-13146224485",
    name: "Goodwill Shoppe",
    description: "Clothing shop listed in OpenStreetMap.",
    category: "clothing",
    costType: "variable",
    priceLabel: "Prices vary",
    location: "Pasar Seni, Kuala Lumpur",
    address: "Kuala Lumpur, Malaysia",
    latitude: 3.1441424,
    longitude: 101.6991791,
    website: null,
    source: {
      name: "OpenStreetMap",
      type: "open-data",
      url: "https://www.openstreetmap.org/node/13146224485",
      licence: "Open Database License (ODbL)",
    },
    verification: { lastVerified: "2026-10-17" },
  },
];
