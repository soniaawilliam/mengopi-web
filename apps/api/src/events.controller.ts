import { Controller, Get, Query } from "@nestjs/common";
import { seedEvents, type EventCategory } from "./data/seed-events";

const categories = new Set<EventCategory>(["food", "social", "clothing"]);

@Controller("events")
export class EventsController {
  @Get()
  list(
    @Query("q") query?: string,
    @Query("category") category?: string,
    @Query("location") location?: string,
    @Query("from") from?: string,
  ) {
    const normalisedQuery = query?.trim().toLowerCase();
    const normalisedLocation = location?.trim().toLowerCase();
    const validCategory = categories.has(category as EventCategory)
      ? (category as EventCategory)
      : undefined;
    const fromDate = from ? new Date(from) : null;
    const hasValidFromDate = fromDate && !Number.isNaN(fromDate.valueOf());

    const data = seedEvents
      .filter((event) => {
        const searchableText = `${event.name} ${event.description} ${event.location} ${event.address}`.toLowerCase();

        return (
          (!normalisedQuery || searchableText.includes(normalisedQuery)) &&
          (!normalisedLocation || event.location.toLowerCase().includes(normalisedLocation)) &&
          (!validCategory || event.category === validCategory) &&
          (!hasValidFromDate || new Date(event.startsAt) >= fromDate)
        );
      })
      .sort((first, second) => first.startsAt.localeCompare(second.startsAt));

    return {
      data,
      meta: {
        count: data.length,
        total: seedEvents.length,
        dataset: "Mengopi seed events",
        note: "No events are published until they come from an organiser or authorised feed.",
      },
    };
  }
}
