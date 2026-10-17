import { Search } from "lucide-react";
import styles from "./WelcomeSearch.module.css";

export default function WelcomeSearch() {
  return (
    <section className={styles.section} aria-labelledby="welcome-heading">
      <p className={styles.greeting}>Good morning, Kuala Lumpur</p>
      <h2 id="welcome-heading">What do you need today?</h2>
      <form className={styles.form} role="search" action="/search">
        <label className="srOnly" htmlFor="site-search">
          Search initiatives
        </label>
        <div className={styles.searchRow}>
          <input
            id="site-search"
            name="q"
            placeholder="Search initiatives..."
          />
          <button type="submit" aria-label="Search">
            <Search aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  );
}
