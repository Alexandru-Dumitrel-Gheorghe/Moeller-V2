"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./AboutMoeller.module.css";

export default function AboutMoeller() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-moeller"
      className={`${styles.wrap} ${isVisible ? styles.visible : ""}`}
      aria-label="Über Möller Küchen"
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
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>ÜBER MÖLLER KÜCHEN</span>
            <span className={styles.titleSub}>Unsere Philosophie</span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {/* Left Column */}
          <article className={styles.col}>
            <div className={styles.colContent}>
              <h3 className={styles.colTitle}>
                Individuelles Raumdesign nach Maß
              </h3>

              <p className={styles.colText}>
                Ob moderne Designküche, gemütliche Wohnküche oder funktionale
                Familienküche – bei <strong>MÖLLER KÜCHEN</strong> planen wir
                bis ins kleinste Detail und entwickeln mit Ihnen Lösungen, die
                langlebig und alltagstauglich sind.
              </p>

              <div className={styles.highlight}>
                <p className={styles.highlightText}>
                  „Wir denken die Küche als Lebensraum – mit Wärme, Licht und
                  intelligenten Funktionen.“
                </p>
                <cite className={styles.highlightCite}>— Team MÖLLER</cite>
              </div>

              <div className={styles.references}>
                <h4 className={styles.referencesTitle}>
                  Ausgewählte Referenzen
                </h4>
                <div className={styles.referenceItem}>
                  <strong className={styles.referenceStrong}>
                    Hartkorn Gewürze:
                  </strong>
                  <span>
                    Mitarbeiter- & Testküchen inklusive Ess- & Sitzbereichen
                  </span>
                </div>
                <div className={styles.referenceItem}>
                  <strong className={styles.referenceStrong}>
                    Familie Schulte:
                  </strong>
                  <span>Komplette Neuplanung des Küchenbereichs</span>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column */}
          <article className={styles.col}>
            <div className={styles.colContent}>
              <h3 className={styles.colTitle}>Warum MÖLLER KÜCHEN?</h3>

              <p className={styles.colText}>
                Wir realisieren anspruchsvolle Projekte mit höchstem
                Qualitätsanspruch und enger Abstimmung.
              </p>

              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.featureContent}>
                    <strong className={styles.featureTitle}>
                      Persönliche Beratung
                    </strong>
                    <p className={styles.featureText}>
                      Von der ersten Idee bis zur finalen Umsetzung an Ihrer
                      Seite.
                    </p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4M4 6v12c0 1.1.9 2 2 2h14v-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.featureContent}>
                    <strong className={styles.featureTitle}>
                      Hochwertige Materialien
                    </strong>
                    <p className={styles.featureText}>
                      Oberflächen und Geräte von LEICHT, Schüller, Gaggenau und
                      BORA.
                    </p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.featureContent}>
                    <strong className={styles.featureTitle}>
                      Individuelle Planung
                    </strong>
                    <p className={styles.featureText}>
                      Jede Küche ist so einzigartig wie ihre Besitzer.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.extraInfo}>
                <h4 className={styles.extraTitle}>Mehr als nur Küchen</h4>
                <p className={styles.extraText}>
                  Auf Wunsch planen wir ganzheitliche Raumkonzepte – von der
                  Küche bis zu individuellen Wohnmöbeln und Beleuchtung.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
