import React from "react";
import styles from "./HeroStudiokuechen.module.css";
import Link from "next/link";

type Props = {
  leftImage?: string;
  rightImage?: string;
};

export default function HeroStudiokuechen({
  leftImage = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  rightImage = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80",
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="studio-headline">
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        <div className={styles.contentCol}>
          {/* Header */}
          <div className={styles.header}>
            <h1 id="studio-headline" className={styles.title}>
              <span className={styles.titleMain}>STUDIOKÜCHEN</span>
              <span className={styles.titleSub}>Unsere Ausstellung</span>
            </h1>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineMain} />
              <div className={styles.underlineAccent} />
            </div>
          </div>

          {/* Lead Text */}
          <p className={styles.lead}>
            Entdecken Sie 10 einzigartige Küchenlandschaften – von modernen
            Inselküchen bis zu gemütlichen Wohnküchen. Pure Inspiration,
            meisterhaft geplant und präzise umgesetzt.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaRow}>
            <Link href="/termin" className={styles.ctaPrimary}>
              <span className={styles.buttonText}>Termin vereinbaren</span>
              <div className={styles.buttonArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <Link href="#galerie" className={styles.ctaGhost}>
              <span className={styles.buttonText}>Ausstellung ansehen</span>
              <div className={styles.buttonArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Meta Information */}
          <ul className={styles.meta}>
            <li>
              <strong>10</strong> Studios
            </li>
            <li>
              <strong>Premium</strong> Marken
            </li>
            <li>
              <strong>Individuell</strong> geplant
            </li>
          </ul>
        </div>

        {/* Visual Column */}
        <div className={styles.visualCol}>
          <figure className={`${styles.card} ${styles.cardLeft}`}>
            <img src={leftImage} alt="Warme Studioküche mit Holzfronten" />
            <div className={styles.cardOverlay} />
          </figure>
          <figure className={`${styles.card} ${styles.cardRight}`}>
            <img src={rightImage} alt="Dunkle, moderne Studioküche" />
            <div className={styles.cardOverlay} />
          </figure>
        </div>
      </div>
    </section>
  );
}
