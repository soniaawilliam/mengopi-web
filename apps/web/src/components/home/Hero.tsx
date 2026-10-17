import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.visual} aria-hidden="true">
        <Image
          className={styles.image}
          src="/images/kl-skyline-lake.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 720px) 1120px, 100vw"
        />
      </div>
      <div className={styles.content}>
        <h1 id="hero-heading">Don&apos;t want to break the bank?</h1>
        <Link className={styles.button} href="#nearby">
          We&apos;ve got you <ArrowUp aria-hidden="true" />
        </Link>
      </div>
      <p className={`${styles.attribution} imageAttribution`}>
        Photo by{" "}
        <a
          href="https://www.pexels.com/@indragunawan"
          target="_blank"
          rel="noreferrer"
        >
          Indra Gunawan
        </a>{" "}
        on Pexels
      </p>
    </section>
  );
}
