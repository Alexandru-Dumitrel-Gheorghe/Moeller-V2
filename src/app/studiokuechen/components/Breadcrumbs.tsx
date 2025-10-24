"use client";

import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

type Item = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav className={styles.nav} aria-label="Brotkrumen">
      <ol
        className={styles.list}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, idx) => (
          <li
            key={item.href}
            className={styles.item}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link href={item.href} itemProp="item">
              <span itemProp="name">{item.label}</span>
            </Link>
            <meta itemProp="position" content={String(idx + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
