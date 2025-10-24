import React from "react";
import styles from "./Ehrlichkeit.module.css";

const EhrlichkeitBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        {/* Cardul din stânga */}
        <div className={styles.leftCard}>
          <div className={styles.leftContent}>
            <h1 className={styles.percentage}>100 %</h1>
            <h2 className={styles.title}>EHRLICHKEIT</h2>
            <p className={styles.subtitle}>
              Bei der Beratung wie bei der Gestaltung
            </p>
            <button className={styles.detailsButton}>Details</button>
          </div>
        </div>

        {/* Cardul din dreapta */}
        <div className={styles.rightCard}>
          <div className={styles.rightContent}>
            <h3 className={styles.featureTitle}>
              WIR LEGEN WERT AUF OFFENHEIT
            </h3>

            <div className={styles.textContent}>
              <p className={styles.paragraph}>
                Sie bringen uns etwas Wertvolles entgegen –{" "}
                <strong>Ihr Vertrauen</strong>.
              </p>
              <p className={styles.paragraph}>
                Bei uns können Sie sicher sein, dass wir Ihnen nicht nur die
                Vorteile verschiedener Materialien schildern, sondern auch
                eventuelle Nachteile. Weil wir Ihnen sehr offen auch abwegig
                erscheinende Ideen nicht vorenthalten. Und weil wir zugunsten
                maximaler Transparenz jeden Planungsschritt und die gesamte
                Kalkulation wie ein offenes Buch vor Ihnen ausbreiten.
              </p>
              <p className={styles.highlight}>
                Diese Ehrlichkeit und gegenseitige Offenheit ist uns besonders
                wichtig.
                <br />
                Denn beides trägt sehr viel bei zu Ihrem – und unserem – guten
                Gefühl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EhrlichkeitBanner;
