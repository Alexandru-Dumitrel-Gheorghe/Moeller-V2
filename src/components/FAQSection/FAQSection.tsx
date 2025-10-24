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
      {/* Background Elements matching VideoHero */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line matching Header */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header matching VideoHero title style */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>Häufige Fragen</span>
            <span className={styles.titleSub}>
              Echte Erfahrungen und zufriedene Kunden
            </span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>
        </div>

        {/* FAQ Items */}
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

        {/* CTA matching VideoHero button style */}
        <div className={styles.ctaWrapper}>
          <a href="#kontakt" className={styles.primaryCta}>
            <span className={styles.ctaText}>Weitere Fragen?</span>
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
            <div className={styles.ctaLine} />
          </a>
        </div>
      </div>
    </section>
  );
}
