import React from "react";
import styles from "./ServiceBanner.module.css";

const ServiceBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        {/* Cardul din stânga - Percentage */}
        <div className={styles.leftCard}>
          <div className={styles.leftContent}>
            <h1 className={styles.percentage}>100 %</h1>
            <h2 className={styles.title}>SERVICE</h2>
            <p className={styles.subtitle}>Alles aus einer Hand.</p>
            <button className={styles.detailsButton}>Details</button>
          </div>
        </div>

        {/* Cardul din dreapta - Text */}
        <div className={styles.rightCard}>
          <div className={styles.rightContent}>
            <h3 className={styles.featureTitle}>WIR MACHEN, DAS ALLES PASST</h3>
            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                Bei unserem Service können Sie sich auf hohe Termintreue, die
                Einhaltung des vereinbarten Budgets, eine sorgfältige Umsetzung
                und natürlich erstklassige Ergebnisse verlassen.
              </p>
              <p className={styles.highlight}>
                Während der gesamten (Um)Bauphase steht Ihnen ein
                Ansprechpartner zur Verfügung, an den Sie sich jederzeit wenden
                können.
                <br />
                <strong>Ein Küchenleben lang.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
