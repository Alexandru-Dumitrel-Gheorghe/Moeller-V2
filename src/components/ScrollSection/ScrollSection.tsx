"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./ScrollSection.module.css";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  threshold?: number;
}

export function ScrollSection({
  children,
  className = "",
  stagger = false,
  threshold = 0.1,
}: ScrollSectionProps) {
  const [ref, isVisible] = useScrollAnimation(threshold);

  return (
    <section
      ref={ref}
      className={`${styles.scrollSection} ${stagger ? styles.stagger : ""} ${
        isVisible ? styles.visible : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
