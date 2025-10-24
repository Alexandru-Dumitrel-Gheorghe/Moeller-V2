"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Studiokuechen.module.css";
import { StudioGrid } from "./components/StudioGrid";

const tiles = [
  {
    id: "schueller",
    src: "/images/küche1.png",
    title: "SHOWKÜCHE | SCHÜLLER",
    description: "Moderne Küche mit innovativen Stauraumlösungen",
  },
  {
    id: "leicht-insel",
    src: "/images/Hero-gg1.png",
    title: "INSELKÜCHE | LEICHT",
    description: "Elegante Kochinsel mit integrierter Barzone",
  },
  {
    id: "leicht-design",
    src: "/images/küchebackground.png",
    title: "DESIGNKÜCHE | LEICHT",
    description: "Minimalistisches Design meets Funktionalität",
  },
  {
    id: "nobilia-wohn",
    src: "/images/küche2.png",
    title: "WOHNKÜCHE | NOBILIA",
    description: "Gemütliche Wohnküche mit Essbereich",
  },
  {
    id: "proplan-bemust",
    src: "/images/küche3.png",
    title: "BEMUSTERUNG | PROPLAN",
    description: "Materialauswahl und Oberflächenberatung",
  },
  {
    id: "proplan-beratung",
    src: "/images/Hero-gg.png",
    title: "BERATUNGSTISCH | PROPLAN",
    description: "Persönliche Planungsberatung",
  },
  {
    id: "proplan-ess",
    src: "/images/küche1.png",
    title: "ESSZIMMER | PROPLAN",
    description: "Moderne Esszimmerlösungen",
  },
  {
    id: "garderobe",
    src: "/images/Hero-gg.png",
    title: "GARDEROBE",
    description: "Stilsichere Eingangsbereiche",
  },
  {
    id: "dekton",
    src: "/images/Hero-gg.png",
    title: "KERAMIK OBERFLÄCHE | DEKTON",
    description: "Hochwertige Arbeitsplatten und Oberflächen",
  },
  {
    id: "bad-nobilia",
    src: "/images/Hero-gg.png",
    title: "BAD | NOBILIA",
    description: "Moderne Badezimmerlösungen",
  },
];

export default function Client() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className={`${styles.page} ${isVisible ? styles.visible : ""}`}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>STUDIOKÜCHEN</span>
            <span className={styles.titleSub}>Unsere Ausstellung</span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>

          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              Entdecken Sie 10 einzigartige Küchenlandschaften in unserer
              Ausstellung. Von modernen Inselküchen bis zu gemütlichen
              Wohnküchen – Inspiration pur.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section - Full Width */}
      <div className={styles.galleryContainer}>
        <StudioGrid tiles={tiles} />
      </div>

      {/* Info Section */}
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>
              Inspiration für Ihre Traumküche
            </h3>
            <p className={styles.infoDescription}>
              In unserem Showroom in Kissing präsentieren wir auf über 200m² die
              Vielfalt moderner Küchengestaltung. Jede unserer 10 Studioküchen
              wurde mit Liebe zum Detail inszeniert und zeigt verschiedene
              Stilrichtungen, Materialkombinationen und innovative Funktionen.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10</span>
                <span className={styles.statLabel}>Studioküchen</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200m²</span>
                <span className={styles.statLabel}>Ausstellungsfläche</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>Jahre Erfahrung</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaWrapper}>
            <a href="#beratung" className={styles.cta}>
              <span className={styles.ctaText}>
                Beratungstermin vereinbaren
              </span>
              <div className={styles.ctaArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
