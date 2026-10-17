import Link from "next/link";
import BottomNavigation from "@/components/home/BottomNavigation";
import SiteHeader from "@/components/home/SiteHeader";
import MapView from "./MapView";
import styles from "./page.module.css";

type Resource = {
  id: string;
  name: string;
  description: string;
  category: string;
  priceLabel: string;
  location: string;
  address: string;
  latitude: number;
  longitude: number;
  source: { name: string; url: string };
};

type ResourcesResponse = { data: Resource[] };

async function getResources(): Promise<Resource[] | null> {
  const apiUrl = process.env.API_URL ?? "http://localhost:3001";

  try {
    const response = await fetch(`${apiUrl}/resources`, { cache: "no-store" });
    if (!response.ok) return null;
    return ((await response.json()) as ResourcesResponse).data;
  } catch {
    return null;
  }
}

export default async function MapPage() {
  const resources = await getResources();

  return (
    <main className={styles.shell}>
      <SiteHeader />
      <section className={styles.content} aria-labelledby="map-heading">
        <Link className={styles.backLink} href="/">
          ← Back home
        </Link>
        <p className={styles.eyebrow}>Explore nearby</p>
        <h1 id="map-heading">Find resources around you</h1>
        <p className={styles.intro}>
          Choose a place on the map or use the list below. Location access is optional.
        </p>

        {resources === null ? (
          <div className={styles.message} role="alert">
            The map is temporarily unavailable. Try Browse instead.
          </div>
        ) : resources.length === 0 ? (
          <div className={styles.message}>No mapped resources are available yet.</div>
        ) : (
          <>
            <MapView resources={resources} />
            <section className={styles.listSection} aria-labelledby="map-list-heading">
              <div className={styles.listHeading}>
                <h2 id="map-list-heading">Resources on the map</h2>
                <span>{resources.length} places</span>
              </div>
              <div className={styles.resourceList}>
                {resources.map((resource) => (
                  <article className={styles.card} key={resource.id}>
                    <div>
                      <p className={styles.category}>{resource.category}</p>
                      <h3>{resource.name}</h3>
                      <p>{resource.address}</p>
                    </div>
                    <a href={resource.source.url}>Source</a>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </section>
      <BottomNavigation />
    </main>
  );
}
