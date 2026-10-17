export interface PriceEvidence {
  date: string;
  premiseCode: number;
  premise: string;
  address: string;
  state: string;
  district: string;
  itemCode: number;
  item: string;
  unit: string;
  itemGroup: string;
  itemCategory: string;
  priceRm: number;
  source: { name: string; url: string; licence: string };
}

/** Selected observations from the September 2026 PriceCatcher CSV. */
export const priceEvidence: PriceEvidence[] = [
  {
    date: "2026-09-29",
    premiseCode: 183,
    premise: "GIANT SUPERMARKET KELANA JAYA",
    address: "JALAN SS 6/3, PUSAT BANDAR KELANA JAYA, 47301 PETALING JAYA, SELANGOR",
    state: "Selangor",
    district: "Petaling Jaya",
    itemCode: 1,
    item: "AYAM BERSIH - STANDARD",
    unit: "1kg",
    itemGroup: "BARANGAN SEGAR",
    itemCategory: "AYAM",
    priceRm: 8.59,
    source: {
      name: "PriceCatcher — data.gov.my",
      url: "https://storage.data.gov.my/pricecatcher/pricecatcher_2026-09.csv",
      licence: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
    },
  },
  {
    date: "2026-09-29",
    premiseCode: 183,
    premise: "GIANT SUPERMARKET KELANA JAYA",
    address: "JALAN SS 6/3, PUSAT BANDAR KELANA JAYA, 47301 PETALING JAYA, SELANGOR",
    state: "Selangor",
    district: "Petaling Jaya",
    itemCode: 104,
    item: "KUBIS BULAT IMPORT (CHINA)",
    unit: "1kg",
    itemGroup: "BARANGAN SEGAR",
    itemCategory: "SAYUR-SAYURAN",
    priceRm: 1.89,
    source: {
      name: "PriceCatcher — data.gov.my",
      url: "https://storage.data.gov.my/pricecatcher/pricecatcher_2026-09.csv",
      licence: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
    },
  },
  {
    date: "2026-09-29",
    premiseCode: 3211,
    premise: "PASAR HARIAN SELAYANG ( KL )",
    address: "SELAYANG, KUALA LUMPUR",
    state: "W.P. Kuala Lumpur",
    district: "Batu",
    itemCode: 1,
    item: "AYAM BERSIH - STANDARD",
    unit: "1kg",
    itemGroup: "BARANGAN SEGAR",
    itemCategory: "AYAM",
    priceRm: 9.8,
    source: {
      name: "PriceCatcher — data.gov.my",
      url: "https://storage.data.gov.my/pricecatcher/pricecatcher_2026-09.csv",
      licence: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
    },
  },
  {
    date: "2026-09-29",
    premiseCode: 3211,
    premise: "PASAR HARIAN SELAYANG ( KL )",
    address: "SELAYANG, KUALA LUMPUR",
    state: "W.P. Kuala Lumpur",
    district: "Batu",
    itemCode: 104,
    item: "KUBIS BULAT IMPORT (CHINA)",
    unit: "1kg",
    itemGroup: "BARANGAN SEGAR",
    itemCategory: "SAYUR-SAYURAN",
    priceRm: 3,
    source: {
      name: "PriceCatcher — data.gov.my",
      url: "https://storage.data.gov.my/pricecatcher/pricecatcher_2026-09.csv",
      licence: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
    },
  },
];
