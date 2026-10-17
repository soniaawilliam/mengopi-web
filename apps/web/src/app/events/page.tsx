import Link from "next/link";
import SiteHeader from "@/components/home/SiteHeader";
import BottomNavigation from "@/components/home/BottomNavigation";
import styles from "./page.module.css";

type EventCategory = "food" | "social" | "clothing";

type Event = {
  id: string;
  name: string;
  description: string;
  category: EventCategory;
  priceLabel: string;
  startsAt: string;
  endsAt: string;
  location: string;
  address: string;
  source: { name: string; url: string };
  verification: { lastVerified: string | null };
};

type EventsResponse = {
  data: Event[];
  meta: { count: number; total: number; dataset: string };
};

type SearchParams = Promise<{
  q?: string;
  category?: string;
  location?: string;
  from?: string;
}>;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-MY", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kuala_Lumpur",
  }).format(new Date(date));
}

function formatTimeRange(start: string, end: string) {
  const formatter = new Intl.DateTimeFormat("en-MY", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kuala_Lumpur",
  });

  return `${formatter.format(new Date(start))}–${formatter.format(new Date(end))}`;
}

async function getEvents(params: Record<string, string>) {
  const apiUrl = process.env.API_URL ?? "http://localhost:3001";
  const search = new URLSearchParams(params);

  try {
    const response = await fetch(`${apiUrl}/events?${search.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) return null;
    return (await response.json()) as EventsResponse;
  } catch {
    return null;
  }
}

export default async function EventsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const apiParams = Object.fromEntries(
    Object.entries(params).filter((entry): entry is [string, string] => Boolean(entry[1])),
  );
  const result = await getEvents(apiParams);
  const queryString = new URLSearchParams(apiParams).toString();

  return (
    <main className={styles.shell}>
      <SiteHeader />
      <section className={styles.content} aria-labelledby="events-heading">
        <Link className={styles.backLink} href="/">
          ← Back home
        </Link>
        <p className={styles.eyebrow}>Meet your community</p>
        <h1 id="events-heading">Events near you</h1>
        <p className={styles.intro}>
          Find free and affordable activities, gatherings, and local events.
        </p>

        <form className={styles.filters} method="get">
          <label>
            Search
            <input name="q" defaultValue={params.q} placeholder="Try clothing swap" />
          </label>
          <label>
            Category
            <select name="category" defaultValue={params.category ?? ""}>
              <option value="">All categories</option>
              <option value="food">Food</option>
              <option value="social">Social</option>
              <option value="clothing">Clothing</option>
            </select>
          </label>
          <label>
            Location
            <input name="location" defaultValue={params.location} placeholder="Kuala Lumpur" />
          </label>
          <button type="submit">Find events</button>
        </form>

        {result === null ? (
          <div className={styles.message} role="alert">
            Events are temporarily unavailable. Please try again soon.
          </div>
        ) : result.data.length === 0 ? (
          <div className={styles.message}>
            No events matched your search. Try another category or location.
          </div>
        ) : (
          <>
            <p className={styles.resultCount}>
              {result.data.length} {result.data.length === 1 ? "event" : "events"} found
            </p>
            <div className={styles.eventList}>
              {result.data.map((event) => (
                <article className={styles.card} key={event.id}>
                  <div className={styles.date} aria-label={formatDate(event.startsAt)}>
                    <span>{new Date(event.startsAt).toLocaleDateString("en-MY", { month: "short", timeZone: "Asia/Kuala_Lumpur" })}</span>
                    <strong>{new Date(event.startsAt).toLocaleDateString("en-MY", { day: "numeric", timeZone: "Asia/Kuala_Lumpur" })}</strong>
                  </div>
                  <div className={styles.details}>
                    <p className={styles.category}>{event.category}</p>
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
                    <dl>
                      <div>
                        <dt>Date</dt>
                        <dd>{formatDate(event.startsAt)}</dd>
                      </div>
                      <div>
                        <dt>Time</dt>
                        <dd>{formatTimeRange(event.startsAt, event.endsAt)}</dd>
                      </div>
                      <div>
                        <dt>Location</dt>
                        <dd>{event.location}</dd>
                      </div>
                      <div>
                        <dt>Cost</dt>
                        <dd>{event.priceLabel}</dd>
                      </div>
                    </dl>
                    <p className={styles.provenance}>
                      Source: <a href={event.source.url}>{event.source.name}</a>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {queryString ? <Link href="/events">Clear filters</Link> : null}
      </section>
      <BottomNavigation />
    </main>
  );
}
