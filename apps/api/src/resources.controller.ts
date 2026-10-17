import { Controller, Get, Query } from "@nestjs/common";
import { seedResources, type ResourceCategory, type CostType } from "./data/seed-resources";

const categories = new Set<ResourceCategory>(["food", "social", "clothing"]);
const costTypes = new Set<CostType>(["free", "affordable", "variable"]);

@Controller("resources")
export class ResourcesController {
  @Get()
  list(
    @Query("q") query?: string,
    @Query("category") category?: string,
    @Query("location") location?: string,
    @Query("cost") cost?: string,
  ) {
    const normalisedQuery = query?.trim().toLowerCase();
    const normalisedLocation = location?.trim().toLowerCase();
    const validCategory = categories.has(category as ResourceCategory)
      ? (category as ResourceCategory)
      : undefined;
    const validCost = costTypes.has(cost as CostType) ? (cost as CostType) : undefined;

    const data = seedResources.filter((resource) => {
      const searchableText = `${resource.name} ${resource.description} ${resource.location} ${resource.address}`.toLowerCase();

      return (
        (!normalisedQuery || searchableText.includes(normalisedQuery)) &&
        (!normalisedLocation || resource.location.toLowerCase().includes(normalisedLocation)) &&
        (!validCategory || resource.category === validCategory) &&
        (!validCost || resource.costType === validCost)
      );
    });

    return {
      data,
      meta: {
        count: data.length,
        total: seedResources.length,
        dataset: "Mengopi seed resources",
      },
    };
  }
}
