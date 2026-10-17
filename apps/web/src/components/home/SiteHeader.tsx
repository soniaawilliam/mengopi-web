import Link from "next/link";
import { Bookmark, Globe2 } from "lucide-react";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Mengopi home">
        mengopi<span>.</span>
      </Link>
      <div className={styles.actions} aria-label="Quick actions">
        <Link
          href="/saved"
          aria-label="Saved resources"
          className={styles.icon}
        >
          <Bookmark aria-hidden="true" />
        </Link>
        <Link
          href="/languages"
          aria-label="Change language"
          className={`${styles.icon} ${styles.globe}`}
        >
          <Globe2 aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
