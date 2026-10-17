import { Controller, Get, Query } from "@nestjs/common";
import { priceEvidence } from "./data/price-evidence";

@Controller("price-evidence")
export class PriceEvidenceController {
  @Get()
  list(@Query("state") state?: string, @Query("item") item?: string) {
    const normalisedState = state?.trim().toLowerCase();
    const normalisedItem = item?.trim().toLowerCase();
    const data = priceEvidence.filter(
      (record) =>
        (!normalisedState || record.state.toLowerCase().includes(normalisedState)) &&
        (!normalisedItem || record.item.toLowerCase().includes(normalisedItem)),
    );

    return {
      data,
      meta: {
        count: data.length,
        dataset: "PriceCatcher September 2026 selected observations",
        sourceUrl: "https://data.gov.my/data-catalogue/pricecatcher",
        note: "Price observations are point-in-time evidence, not a guarantee of current prices.",
      },
    };
  }
}
