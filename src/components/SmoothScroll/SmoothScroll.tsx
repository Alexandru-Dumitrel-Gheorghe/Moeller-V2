"use client";

import { useEffect, useState } from "react";
import styles from "./SmoothScroll.module.css";

export default function SmoothScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);

      // Show progress bar only after scrolling a bit
      setIsVisible(scrollTop > 100);
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    calculateScrollProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Scroll Progress Bar */}
      <div
        className={`${styles.scrollProgress} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <div
          className={styles.progressBar}
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
        <div className={styles.progressGlow} />
      </div>

      {/* Scroll Indicators */}
      <div className={styles.scrollIndicators}>
        <div className={styles.scrollHint}>
          <div className={styles.mouse}>
            <div className={styles.wheel} />
          </div>
          <div className={styles.arrows}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
