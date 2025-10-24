"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./AboutMoeller.module.css";

export default function AboutMoeller() {
  const sectionRef = useRef(null);
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
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Persönliche Beratung",
      description:
        "Von der ersten Idee bis zur finalen Umsetzung an Ihrer Seite.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Hochwertige Materialien",
      description:
        "Oberflächen und Geräte von LEICHT, Schüller, Gaggenau und BORA.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Individuelle Planung",
      description: "Jede Küche ist so einzigartig wie ihre Besitzer.",
    },
  ];

  const references = [
    {
      client: "Hartkorn Gewürze",
      project: "Mitarbeiter- & Testküchen inklusive Ess- & Sitzbereichen",
    },
    {
      client: "Familie Schulte",
      project: "Komplette Neuplanung des Küchenbereichs",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about-moeller"
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      aria-label="Über Möller Küchen"
    >
      {/* Background Elements */}
      <div className={styles.background}>
        <div className={styles.gridPattern} />
        <div className={styles.gradientOverlay} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              <span className={styles.titleMain}>Über Möller Küchen</span>
              <span className={styles.titleSub}>Unsere Philosophie</span>
            </h2>
            <div className={styles.titleLine} />
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.content}>
          {/* Left Column - Philosophy */}
          <div className={styles.column}>
            <div className={styles.contentCard}>
              <h3 className={styles.columnTitle}>
                Individuelles Raumdesign nach Maß
              </h3>

              <p className={styles.columnText}>
                Ob moderne Designküche, gemütliche Wohnküche oder funktionale
                Familienküche – bei <strong>MÖLLER KÜCHEN</strong> planen wir
                bis ins kleinste Detail und entwickeln mit Ihnen Lösungen, die
                langlebig und alltagstauglich sind.
              </p>

              {/* Quote */}
              <div className={styles.quote}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>
                  Wir denken die Küche als Lebensraum – mit Wärme, Licht und
                  intelligenten Funktionen.
                </p>
                <cite className={styles.quoteAuthor}>— Team MÖLLER</cite>
              </div>

              {/* References */}
              <div className={styles.references}>
                <h4 className={styles.referencesTitle}>
                  Ausgewählte Referenzen
                </h4>
                <div className={styles.referencesList}>
                  {references.map((ref, index) => (
                    <div key={index} className={styles.referenceItem}>
                      <div className={styles.referenceClient}>{ref.client}</div>
                      <div className={styles.referenceProject}>
                        {ref.project}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className={styles.column}>
            <div className={styles.contentCard}>
              <h3 className={styles.columnTitle}>Warum MÖLLER KÜCHEN?</h3>

              <p className={styles.columnText}>
                Wir realisieren anspruchsvolle Projekte mit höchstem
                Qualitätsanspruch und enger Abstimmung.
              </p>

              {/* Features */}
              <div className={styles.features}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.feature}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <div className={styles.featureContent}>
                      <h4 className={styles.featureTitle}>{feature.title}</h4>
                      <p className={styles.featureDescription}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className={styles.additionalInfo}>
                <h4 className={styles.additionalTitle}>Mehr als nur Küchen</h4>
                <p className={styles.additionalText}>
                  Auf Wunsch planen wir ganzheitliche Raumkonzepte – von der
                  Küche bis zu individuellen Wohnmöbeln und Beleuchtung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
