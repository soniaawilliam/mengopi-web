import Image from "next/image";
import Link from "next/link";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="not-found-title">
        <div className={styles.artwork}>
          <Image
            src="/images/malay-batik-pattern.svg"
            alt="A colorful Malay batik pattern"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 560px"
          />
          <p className={`${styles.attribution} imageAttribution`}>
            Batik pattern by{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Malay_batik_pattern_-_Sekalianan.svg"
              target="_blank"
              rel="noreferrer"
            >
              EmpAhmadK
            </a>{" "}
            · CC0
          </p>
        </div>

        <div className={styles.content}>
          <h1 id="not-found-title">Alamak!</h1>
          <p className={styles.message}>
            We couldn&apos;t find the page you were looking for. Let&apos;s get
            you back to something useful.
          </p>
          <Link className={styles.homeLink} href="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
