"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${isLoaded ? styles.loaded : ""}`}
      aria-label="Referenzen – Unsere Projekte & Küchenlösungen"
    >
      {/* Background Image */}
      <div className={styles.bgWrap}>
        <Image
          src="/images/Hero-gg.png"
          alt="Moderne Küche – Referenzen Möller Küchen"
          fill
          priority
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className={styles.overlay} />
        <div className={styles.redGlow} />

        {/* Red Accent Line */}
        <div className={styles.redAccent} />
      </div>

      {/* Enhanced Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Content - Poziția originală jos-stânga */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>REFERENZEN</span>
              <span className={styles.titleSub}>Unsere Projekte</span>
            </h1>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineMain} />
              <div className={styles.underlineAccent} />
            </div>
          </div>

          {/* Description */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              Unsere Projekte & Referenzen finden Sie hier an einem Ort. Egal ob
              eine hochwertige Küche für den Privathaushalt oder ein
              ganzheitliches Raumdesign für Unternehmen – wir sind Ihr perfekter
              Ansprechpartner für alle Belange.
            </p>
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
