import Link from "next/link";
import styles from "./FeaturedEvent.module.css";

export default function FeaturedEvent() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="srOnly">
        Community events
      </h2>
      <article className={styles.emptyState}>
        <p className={styles.type}>Coming soon</p>
        <h3>No events listed yet</h3>
        <p className={styles.location}>
          We will add events when organisers provide verified details.
        </p>
        <Link href="/events">Browse events</Link>
      </article>
    </section>
  );
}
