"use client";

import styles from "./Leistungen.module.css";

type ServiceItem = {
  percentage: string;
  title: string;
  description: string;
};

const SERVICES: ServiceItem[] = [
  {
    percentage: "100%",
    title: "BEDEUTEN FÜR UNS",
    description: "DASS BESTE FÜR SIE",
  },
  {
    percentage: "100%",
    title: "INDIVIDUELL",
    description: "Küchen so individuell wie Ihr Nutzer.",
  },
  {
    percentage: "100%",
    title: "KREATIV",
    description: "Ideen bis ins Detail.",
  },
  {
    percentage: "100%",
    title: "QUALITÄT",
    description: "Bei Material und Leistung.",
  },
  {
    percentage: "100%",
    title: "SERVICE",
    description: "Alles aus einer Hand.",
  },
];

export default function Leistungen() {
  return (
    <section className={styles.section} aria-labelledby="leistungen-title">
      {/* Simplified Background */}
      <div className={styles.background} />

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 id="leistungen-title" className={styles.title}>
            <span className={styles.titleMain}>LEISTUNGEN</span>
            <span className={styles.titleSub}>Unsere Werte</span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineAccent} />
          </div>
        </div>

        {/* Services Grid - Clean Layout */}
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              {/* Percentage */}
              <div className={styles.percentageWrapper}>
                <span className={styles.percentage}>{service.percentage}</span>
              </div>

              {/* Content */}
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div className={styles.titleLine} />
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a href="#kontakt" className={styles.cta}>
            <span className={styles.ctaText}>Jetzt beraten lassen</span>
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
    </section>
  );
}
