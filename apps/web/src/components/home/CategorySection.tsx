import Link from "next/link";
import styles from "./CategorySection.module.css";

const categories = [
  { count: 24, label: "Food", className: styles.orange },
  { count: 6, label: "Social", className: styles.white },
  { count: 7, label: "Clothing", className: styles.cream },
];

export default function CategorySection() {
  return (
    <section
      className={styles.section}
      id="nearby"
      aria-labelledby="nearby-heading"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>Explore nearby</p>
          <h2 id="nearby-heading">Find support around you</h2>
        </div>
        <Link href="/categories">View all</Link>
      </div>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link
            className={`${styles.card} ${category.className}`}
            href={`/categories/${category.label.toLowerCase()}`}
            key={category.label}
          >
            <span>{category.count} near you</span>
            <strong>{category.label}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
