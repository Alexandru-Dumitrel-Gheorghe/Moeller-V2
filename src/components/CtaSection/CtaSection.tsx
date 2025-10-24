"use client";

import styles from "./CtaSection.module.css";

const CtaSection: React.FC = () => {
  return (
    <section className={styles.ctaSection} aria-label="Call to Action">
      {/* Imagine de fundal (din proiectul tău) */}
      <div className={styles.backgroundImage} />

      {/* Overlay cu gradient */}
      <div className={styles.overlay} />

      {/* Conținut central */}
      <div className={styles.content}>
        <h2 className={styles.title}>Starten Sie Ihr Projekt mit uns</h2>

        <a href="#kontakt" className={styles.ctaButton}>
          <span>Kontakt aufnehmen</span>
          <div className={styles.ctaLine} />
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
