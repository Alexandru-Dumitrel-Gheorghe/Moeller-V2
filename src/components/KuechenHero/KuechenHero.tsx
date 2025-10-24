"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./KuechenHero.module.css";

const KuechenVideo: React.FC = () => {
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
      className={`${styles.hero} ${isLoaded ? styles.loaded : ""}`}
      aria-label="Küchen Video Hero"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/kuechen-poster.jpg"
      >
        <source src="/videos/video-hero.mp4" type="video/mp4" />
        {/* Fallback pentru browsere care nu suportă video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay pentru contrast */}
      <div className={styles.overlay} />

      {/* Gradient overlay pentru text */}
      <div className={styles.gradientOverlay} />

      {/* Conținut principal */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {/* Titlu principal */}
          <div className={styles.titleWrapper}>
            <h1 className={styles.mainTitle}>KÜCHEN</h1>
            <div className={styles.titleLine} />
          </div>

          {/* Buton CTA */}
          <div className={styles.buttonWrapper}>
            <a href="#kuechen" className={styles.ctaButton}>
              <span className={styles.buttonText}>Mehr erfahren</span>
              <div className={styles.buttonIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.buttonHover} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator subtil */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default KuechenVideo;
