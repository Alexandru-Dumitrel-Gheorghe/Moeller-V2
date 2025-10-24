"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./PartnersSection.module.css";

const PARTNERS = [
  {
    id: "leicht",
    name: "LEICHT",
    description: "Führend im Bereich moderner Küchendesigns und Innovation",
  },
  {
    id: "schueller",
    name: "SCHÜLLER",
    description: "Premium-Möbel für anspruchsvolle Einrichtungskonzepte",
  },
  {
    id: "nobilia",
    name: "NOBILIA",
    description: "Deutschlands meistverkaufte Küche mit höchster Qualität",
  },
  {
    id: "gaggenau",
    name: "GAGGENAU",
    description: "Exklusive Hausgeräte für die anspruchsvolle Küche",
  },
  {
    id: "bora",
    name: "BORA",
    description: "Innovative Dunstabzugssysteme und Kochfelder",
  },
  {
    id: "siemens",
    name: "SIEMENS",
    description: "Hochwertige Hausgeräte mit modernster Technologie",
  },
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-slide pentru mobile
  useEffect(() => {
    if (window.innerWidth >= 768) return; // Doar pe mobile

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PARTNERS.length);
    }, 3000); // Schimbă la fiecare 3 secunde

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PARTNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PARTNERS.length) % PARTNERS.length);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      aria-labelledby="partners-title"
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 id="partners-title" className={styles.title}>
            <span className={styles.titleMain}>UNSERE PARTNER</span>
            <span className={styles.titleSub}>Marken & Hersteller</span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>
        </div>

        {/* Description */}
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Wir arbeiten ausschließlich mit renommierten Markenherstellern
            zusammen, um Ihnen höchste Qualität, innovative Technologien und
            langlebige Materialien zu garantieren.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className={styles.desktopGrid}>
          {PARTNERS.map((partner, index) => (
            <div
              key={partner.id}
              className={styles.partnerCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.partnerContent}>
                <h3 className={styles.partnerName}>{partner.name}</h3>
                <p className={styles.partnerDescription}>
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className={styles.mobileSlider}>
          <div
            ref={sliderRef}
            className={styles.sliderContainer}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {PARTNERS.map((partner) => (
              <div key={partner.id} className={styles.slide}>
                <div className={styles.partnerCard}>
                  <div className={styles.partnerContent}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <p className={styles.partnerDescription}>
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className={styles.sliderControls}>
            <button
              onClick={prevSlide}
              className={styles.sliderButton}
              aria-label="Vorheriger Partner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.sliderDots}>
              {PARTNERS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`${styles.dot} ${
                    index === currentSlide ? styles.active : ""
                  }`}
                  aria-label={`Gehe zu Partner ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className={styles.sliderButton}
              aria-label="Nächster Partner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Individuelle Beratung zu allen Marken
            </h3>
            <p className={styles.ctaDescription}>
              Wir helfen Ihnen bei der Auswahl der perfekten Marke für Ihre
              Bedürfnisse und beraten Sie umfassend zu allen
              Produkteigenschaften.
            </p>
            <a href="#beratung" className={styles.ctaButton}>
              <span className={styles.ctaText}>
                Beratungstermin vereinbaren
              </span>
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
      </div>
    </section>
  );
}
