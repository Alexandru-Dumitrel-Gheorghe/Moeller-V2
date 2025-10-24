"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function UeberUnsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${isLoaded ? styles.loaded : ""}`}
      aria-label="Über Möller Küchen – Unsere Geschichte & Philosophie"
    >
      {/* Background Image */}
      <div className={styles.bgWrap}>
        <Image
          src="/images/Hero-gg1.png"
          alt="Möller Küchen Team – Handwerkliche Perfektion seit über 25 Jahren"
          fill
          priority
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className={styles.overlay} />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      {/* Content - Aligned to Left */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>ÜBER UNS</span>
              <span className={styles.titleSub}>Möller Küchen</span>
            </h1>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineMain} />
              <div className={styles.underlineAccent} />
            </div>
          </div>

          {/* Description */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              Seit über 25 Jahren stehen wir für handwerkliche Perfektion,
              individuelle Beratung und zeitloses Küchendesign. Erfahren Sie
              mehr über unsere Geschichte und Philosophie.
            </p>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Jahre Erfahrung</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>Zufriedene Kunden</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10</span>
              <span className={styles.statLabel}>Ausstellungs-küchen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scrollen</span>
      </div>
    </section>
  );
}
