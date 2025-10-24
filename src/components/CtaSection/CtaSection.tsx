"use client";

import styles from "./CtaSection.module.css";

const CtaSection: React.FC = () => {
  return (
    <section className={styles.ctaSection} aria-label="Call to Action">
      {/* Background Image */}
      <div className={styles.backgroundImage} />

      {/* Simple Overlay */}
      <div className={styles.overlay} />

      {/* Clean Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>Starten Sie Ihr Projekt mit uns</h2>
        <a href="#kontakt" className={styles.ctaButton}>
          <span className={styles.buttonText}>Kontakt aufnehmen</span>
          <div className={styles.buttonArrow}>
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
    </section>
  );
};

export default CtaSection;
