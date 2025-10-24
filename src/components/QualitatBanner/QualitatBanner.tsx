import React from "react";
import styles from "./Qualitat.module.css";

const QualitatBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        {/* Cardul din stânga - Text */}
        <div className={styles.leftCard}>
          <div className={styles.leftContent}>
            <h3 className={styles.featureTitle}>
              QUALITÄT FÜR HÖCHSTE ANSPRÜCHE
            </h3>

            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                Diese fängt bereits beim ersten Kontakt an.
              </p>
              <p className={styles.paragraph}>
                Zieht sich wie ein Faden durch die gesamte Planungs-phase, den
                professionellen Einbau und endet erst nach Übergabe der Küche an
                Sie persönlich.
              </p>
              <p className={styles.highlight}>
                Auch bei der Wahl der Materialien legen wir großen Wert darauf,
                das diese Ihren und unseren Ansprüchen gerecht werden. - Ohne
                Wenn und Aber !
              </p>
            </div>
          </div>
        </div>

        {/* Cardul din dreapta - Percentage */}
        <div className={styles.rightCard}>
          <div className={styles.rightContent}>
            <h1 className={styles.percentage}>100 %</h1>
            <h2 className={styles.title}>QUALITÄT</h2>
            <p className={styles.subtitle}>Bei Material und Leistung</p>
            <button className={styles.detailsButton}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitatBanner;
