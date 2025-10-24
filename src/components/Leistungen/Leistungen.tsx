"use client";

import { useState } from "react";
import styles from "./Leistungen.module.css";
import Modal from "@/components/Modal/Modal";

type ServiceItem = {
  percentage: string;
  title: string;
  description: string;
};

const SERVICES: ServiceItem[] = [
  {
    percentage: "100%",
    title: "INDIVIDUELL",
    description: "Maßgeschneiderte Küchenlösungen",
  },
  {
    percentage: "100%",
    title: "QUALITÄT",
    description: "Hochwertige Materialien & Verarbeitung",
  },
  { percentage: "100%", title: "SERVICE", description: "Alles aus einer Hand" },
  {
    percentage: "100%",
    title: "KREATIV",
    description: "Innovative Designkonzepte",
  },
];

const KITCHEN_TYPES = [
  {
    name: "MODERN",
    description: "Zeitlose Eleganz mit klaren Linien",
    features: [
      "Hochglanzfronten",
      "Integrierte Geräte",
      "Minimalistisches Design",
    ],
  },
  {
    name: "KLASSISCH",
    description: "Traditionelle Handwerkskunst",
    features: ["Massivholz", "Zierleisten", "Warmes Farbkonzept"],
  },
  {
    name: "LANDHAUS",
    description: "Gemütlicher Landhausstil",
    features: ["Antik-Optik", "Natürliche Materialien", "Romantische Details"],
  },
  {
    name: "INDUSTRIE",
    description: "Urbanes Loft-Feeling",
    features: ["Metall-Akzente", "Robuste Oberflächen", "Offene Regalsysteme"],
  },
];

export default function Leistungen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.section} aria-labelledby="leistungen-title">
        {/* Simplified Background */}
        <div className={styles.backgroundElements}>
          <div className={styles.backgroundGrid} />
        </div>

        <div className={styles.redAccent} />

        <div className={styles.container}>
          {/* Main Header */}
          <div className={styles.header}>
            <h1 id="leistungen-title" className={styles.title}>
              <span className={styles.titleMain}>UNSERE LEISTUNGEN</span>
              <span className={styles.titleSub}>
                Ihr Küchentraum wird Wirklichkeit
              </span>
            </h1>
          </div>

          {/* Werte Section */}
          <section id="werte" className={styles.werteSection}>
            <h2 className={styles.sectionTitle}>Unsere Werte</h2>
            <div className={styles.servicesGrid}>
              {SERVICES.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.percentageWrapper}>
                    <div className={styles.percentageCircle}>
                      <span className={styles.percentage}>
                        {service.percentage}
                      </span>
                    </div>
                  </div>
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
          </section>

          {/* Single CTA Section */}
          <section id="beratung" className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Starte Ihre Küchenplanung</h2>
              <p className={styles.ctaDescription}>
                Vereinbaren Sie jetzt Ihr unverbindliches Beratungsgespräch
              </p>
              <button
                type="button"
                className={styles.ctaButton}
                onClick={() => setIsModalOpen(true)}
                aria-haspopup="dialog"
                aria-controls="leistungen-modal"
              >
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
          </section>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Kostenlose Beratung anfordern"
        description="Vereinbaren Sie noch heute einen Termin in unserem Showroom oder lassen Sie sich von unseren Experten beraten."
      />
    </>
  );
}
