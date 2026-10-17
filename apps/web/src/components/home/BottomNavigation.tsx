"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BottomNavigation.module.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Map", href: "/map" },
  { label: "Browse", href: "/browse" },
  { label: "About", href: "/about" },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation} aria-label="Primary navigation">
      {navigation.map((item) => (
        <Link
          aria-current={pathname === item.href ? "page" : undefined}
          className={pathname === item.href ? styles.active : ""}
          href={item.href}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
