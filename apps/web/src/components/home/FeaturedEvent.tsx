import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./FeaturedEvent.module.css";

export default function FeaturedEvent() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="srOnly">
        Featured event
      </h2>
      <article className={styles.eventCard}>
        <div className={styles.eventDate} aria-label="September 26">
          <span>SEP</span>
          <strong>26</strong>
        </div>
        <div className={styles.details}>
          <p className={styles.type}>Limited time</p>
          <h3>Pre-loved clothing sale</h3>
          <p className={styles.location}>Setapak</p>
        </div>
      </article>
      <div className={styles.controls} aria-label="Featured event controls">
        <button type="button" aria-label="Previous event">
          <ChevronLeft aria-hidden="true" />
        </button>
        <span className={styles.dots} aria-hidden="true">
          ● ● ● ● ● ● ●
        </span>
        <button type="button" aria-label="Next event">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
