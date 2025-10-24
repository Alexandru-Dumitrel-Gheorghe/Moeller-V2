"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./VideoHero.module.css";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.wrap} ${isLoaded ? styles.loaded : ""}`}
      aria-label="Küchen Hero Video"
    >
      {/* Enhanced Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
      </div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternLine}></div>
        <div className={styles.patternLine}></div>
        <div className={styles.patternLine}></div>
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      {/* Video Background */}
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-2-poster.jpg"
      >
        <source src="/videos/video4.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Overlay */}
      <div className={styles.overlay} />
      <div className={styles.videoGradient} />

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {/* Title */}
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>KÜCHEN</span>
              <span className={styles.titleSub}>by MÖLLER</span>
            </h1>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineMain} />
              <div className={styles.underlineAccent} />
            </div>
          </div>

          {/* Description */}
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>Zeitlose Eleganz</p>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaWrapper}>
            <a href="#kollektion" className={styles.primaryCta}>
              <span className={styles.ctaText}>Kollektion entdecken</span>
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
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scrollen</span>
      </div>
    </section>
  );
}
