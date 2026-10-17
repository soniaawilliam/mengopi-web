import Link from "next/link";
import BottomNavigation from "@/components/home/BottomNavigation";
import SiteHeader from "@/components/home/SiteHeader";
import styles from "./page.module.css";

type Resource = {
  id: string;
  name: string;
  description: string;
  category: "food" | "social" | "clothing";
  priceLabel: string;
  location: string;
  address: string;
  source: { name: string; url: string };
};

type ResourcesResponse = {
  data: Resource[];
  meta: { count: number; total: number };
};

async function getResources(): Promise<ResourcesResponse | null> {
  const apiUrl = process.env.API_URL ?? "http://localhost:3001";

  try {
    const response = await fetch(`${apiUrl}/resources`, { cache: "no-store" });
    if (!response.ok) return null;
    return (await response.json()) as ResourcesResponse;
  } catch {
    return null;
  }
}

export default async function BrowsePage() {
  const result = await getResources();

  return (
    <main className={styles.shell}>
      <SiteHeader />
      <section className={styles.content} aria-labelledby="browse-heading">
        <Link className={styles.backLink} href="/">
          ← Back home
        </Link>
        <h1 id="browse-heading">What&apos;s up, buttercup?</h1>
        <p className={styles.intro}>
          Find community spaces, clothing shops, and other useful places around you.
        </p>

        {result === null ? (
          <div className={styles.message} role="alert">
            Resources are temporarily unavailable. Please try again soon.
          </div>
        ) : result.data.length === 0 ? (
          <div className={styles.message}>No resources are available yet.</div>
        ) : (
          <>
            <p className={styles.resultCount}>
              {result.meta.count} {result.meta.count === 1 ? "resource" : "resources"} available
            </p>
            <div className={styles.resourceList}>
              {result.data.map((resource) => (
                <article className={styles.card} key={resource.id}>
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{resource.category}</span>
                    <span className={styles.cost}>{resource.priceLabel}</span>
                  </div>
                  <h2>{resource.name}</h2>
                  <p>{resource.description}</p>
                  <dl>
                    <div>
                      <dt>Location</dt>
                      <dd>{resource.location}</dd>
                    </div>
                    <div>
                      <dt>Address</dt>
                      <dd>{resource.address}</dd>
                    </div>
                  </dl>
                  <p className={styles.source}>
                    Source: <a href={resource.source.url}>{resource.source.name}</a>
                  </p>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
      <BottomNavigation />
    </main>
  );
}
