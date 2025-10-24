"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Wie lange dauert die Planung und der Einbau einer Küche?",
      answer:
        "Die Planungsphase dauert in der Regel 2-4 Wochen, abhängig von der Komplexität Ihrer Küche. Der Einbau selbst erfolgt innerhalb von 3-7 Werktagen. Wir legen großen Wert auf termintreue Umsetzung.",
    },
    {
      id: 2,
      question: "Welche Materialien und Marken verwenden Sie?",
      answer:
        "Wir arbeiten ausschließlich mit premium Materialien von Markenherstellern wie Nobilia, Alno und Nolte. Von hochwertigen Fronten über langlebige Arbeitsplatten bis zu innovativer Elektronik - jede Komponente wird sorgfältig ausgewählt.",
    },
    {
      id: 3,
      question: "Bieten Sie auch individuelle Anpassungen an?",
      answer:
        "Ja, jede Küche wird nach Ihren individuellen Bedürfnissen geplant. Von speziellen Stauraumlösungen bis zu maßgefertigten Fronten - wir setzen Ihre Vorstellungen präzise um.",
    },
    {
      id: 4,
      question: "Wie sieht es mit Garantie und Service nach dem Einbau aus?",
      answer:
        "Wir bieten 5 Jahre Garantie auf alle Einbauten und 2 Jahre auf die Elektrogeräte. Unser Service-Team steht Ihnen auch nach der Übergabe jederzeit zur Verfügung - ein Küchenleben lang.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={styles.section} aria-label="Häufig gestellte Fragen">
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header Row - Title left, Button right */}
        <div className={styles.headerRow}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span className={styles.titleMain}>HÄUFIG GESTELLTE FRAGEN</span>
              <span className={styles.titleSub}>
                Alles, was Sie über unsere Küchen, Planung und Services wissen
                möchten.
              </span>
            </h2>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineMain} />
              <div className={styles.underlineAccent} />
            </div>
          </div>

          <a href="#kontakt" className={styles.squareCta}>
            <span className={styles.ctaIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4v16m8-8H4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className={styles.ctaHover} />
          </a>
        </div>

        {/* Content Layout - FAQ left, Contact Card right */}
        <div className={styles.contentLayout}>
          {/* FAQ Items - Left side */}
          <div className={styles.faqContainer}>
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.faqItem} ${
                  openItem === item.id ? styles.active : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                >
                  <div className={styles.questionContent}>
                    <span className={styles.questionNumber}>0{index + 1}</span>
                    <span className={styles.questionText}>{item.question}</span>
                  </div>
                  <div className={styles.arrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <div className={styles.answer}>
                  <div className={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Card - Right side */}
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className={styles.contactTitle}>Haben Sie Fragen?</h3>

            <p className={styles.contactText}>
              Wir beraten Sie gerne persönlich und finden gemeinsam die perfekte
              Lösung für Ihre Traumküche.
            </p>

            <a href="#kontakt" className={styles.contactButton}>
              <span>Kontakt aufnehmen</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+49 123 456 789</span>
              </div>
              <div className={styles.contactInfoItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>info@kuechenstudio.de</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
