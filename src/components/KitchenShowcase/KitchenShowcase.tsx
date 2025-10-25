"use client";

import React from "react";
import styles from "./KitchenShowcase.module.css";

const KitchenShowcase: React.FC = () => {
  const kitchens = [
    {
      id: 1,
      title: "MODERN",
      subtitle: "Zeitlose Eleganz",
      image: "images/Hero-gg.png",
    },
    {
      id: 2,
      title: "KLASSISCH",
      subtitle: "Traditionelle Handwerkskunst",
      image: "/images/küche2.png",
    },
    {
      id: 3,
      title: "LANDHAUS",
      subtitle: "Gemütliche Atmosphäre",
      image: "images/Hero-gg1.png",
    },
    {
      id: 4,
      title: "INDUSTRIE",
      subtitle: "Urbanes Loft-Feeling",
      image: "images/gallery-hero.png",
    },
  ];

  return (
    <section
      className={styles.section}
      aria-labelledby="kitchen-showcase-title"
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
          <h2 id="kitchen-showcase-title" className={styles.title}>
            <span className={styles.titleMain}>UNSERE KÜCHEN</span>
            <span className={styles.titleSub}>
              Entdecken Sie unsere Vielfalt
            </span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>
        </div>

        {/* Kitchen Grid */}
        <div className={styles.grid}>
          {kitchens.map((kitchen) => (
            <div key={kitchen.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={kitchen.image}
                  alt={kitchen.title}
                  className={styles.image}
                />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{kitchen.title}</h3>
                  <p className={styles.cardSubtitle}>{kitchen.subtitle}</p>
                  <button className={styles.viewButton}>
                    <span className={styles.buttonText}>Mehr ansehen</span>
                    <div className={styles.buttonArrow}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h14m-7-7l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Starte Ihre Küchenplanung</h3>
            <p className={styles.ctaDescription}>
              Vereinbaren Sie jetzt Ihr unverbindliches Beratungsgespräch
            </p>
            <button className={styles.ctaButton}>
              <span className={styles.buttonText}>Kostenlose Beratung</span>
              <div className={styles.buttonArrow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenShowcase;
