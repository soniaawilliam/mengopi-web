import Link from "next/link";
import styles from "./BottomNavigation.module.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Map", href: "/map" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
];

export default function BottomNavigation() {
  return (
    <nav className={styles.navigation} aria-label="Primary navigation">
      {navigation.map((item) => (
        <Link
          className={item.label === "Home" ? styles.active : ""}
          href={item.href}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
