"use client";

import Image from "next/image";
import styles from "./ProjectPair.module.css";

type Project = {
  id: string;
  image: string; // /public path
  category: string; // ex: "FAMILIE" / "UNTERNEHMEN"
  title: string; // ex: "SCHULTE"
  excerpt: string; // scurt text
  href?: string; // link detalii (optional)
};

const projects: Project[] = [
  {
    id: "schulte",
    image: "/images/küche1.png",
    category: "FAMILIE",
    title: "SCHULTE",
    excerpt:
      "Für Familie Schulte haben wir die Kompletteinrichtung des Küchenbereichs vorgenommen. Das Ergebnis ist besonders geworden.",
    href: "/referenzen/schulte",
  },
  {
    id: "hartkorn",
    image: "/images/gallery-hero.png",
    category: "UNTERNEHMEN",
    title: "HARTKORN GEWÜRZE",
    excerpt:
      "Mehrere Mitarbeiterküchen, Teeküchen, Ess- & Sitzbereiche – inklusive Testküche zum Verkosten von Gewürzen, geplant und umgesetzt.",
    href: "/referenzen/hartkorn-gewuerze",
  },
];

export default function ProjectPair() {
  return (
    <section className={styles.wrap} aria-label="Ausgewählte Referenzen">
      {projects.map((p) => {
        const CardTag = p.href ? "a" : "article";
        return (
          <CardTag
            key={p.id}
            {...(p.href ? { href: p.href } : {})}
            className={styles.card}
            aria-label={`${p.category} – ${p.title}`}
          >
            <div className={styles.media}>
              <Image
                src={p.image}
                alt={`${p.title} – Küchenreferenz`}
                fill
                priority={p.id === "schulte"}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.img}
              />
              <div className={styles.vignette} />
              <div className={styles.tint} />
              <div className={styles.redEdge} />
            </div>

            <div className={styles.content}>
              <span className={styles.category}>{p.category}</span>
              <h2 className={styles.title}>{p.title}</h2>
              <p className={styles.excerpt}>{p.excerpt}</p>
            </div>
          </CardTag>
        );
      })}
    </section>
  );
}
