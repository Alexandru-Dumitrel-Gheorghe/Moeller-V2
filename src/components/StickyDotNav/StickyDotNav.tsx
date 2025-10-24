"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StickyDotNav.module.css";

type Item = {
  id: string;
  label: string;
};

const DEFAULT_ITEMS: Item[] = [
  { id: "showroom", label: "SHOWROOM" },
  { id: "referenzen", label: "REFERENZEN" },
  { id: "kuechen", label: "KÜCHEN" },
  { id: "interior", label: "INTERIOR" },
];

interface Props {
  items?: Item[];
  offset?: number;
  className?: string;
}

export default function StickyDotNav({
  items = DEFAULT_ITEMS,
  offset = 0,
  className,
}: Props) {
  const [active, setActive] = useState(items[0]?.id);
  const [isHovered, setIsHovered] = useState(false);
  const observers = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    observers.current?.disconnect();

    observers.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: `-${Math.max(offset, 0)}px 0px -40% 0px`,
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((el) => observers.current!.observe(el));

    return () => observers.current?.disconnect();
  }, [items, offset]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Sektionen"
      className={`${styles.sticky} ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div
        className={`${styles.navGlow} ${isHovered ? styles.glowActive : ""}`}
      />

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <ul className={styles.list} role="tablist">
        {items.map((item, idx) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className={styles.node}>
              {/* Text Label */}
              <button
                className={`${styles.label} ${
                  isActive ? styles.activeLabel : ""
                } ${isHovered ? styles.labelHovered : ""}`}
                onClick={handleClick(item.id)}
                aria-current={isActive ? "true" : undefined}
                role="tab"
              >
                <span className={styles.labelText}>{item.label}</span>
                <div className={styles.labelLine} />
              </button>

              {/* Dot & Line */}
              <div className={styles.lineWrap} aria-hidden>
                {/* Connecting Line */}
                {idx < items.length - 1 && (
                  <div className={styles.lineContainer}>
                    <span className={styles.line} />
                    <span
                      className={`${styles.lineProgress} ${
                        isActive ? styles.lineActive : ""
                      }`}
                    />
                  </div>
                )}

                {/* Dot */}
                <div className={styles.dotContainer}>
                  <span
                    className={`${styles.dot} ${
                      isActive ? styles.dotActive : ""
                    }`}
                  >
                    <span className={styles.dotInner} />
                    <span className={styles.dotGlow} />
                  </span>

                  {/* Active Pulse */}
                  {isActive && <span className={styles.dotPulse} />}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Scroll Progress */}
      <div className={styles.scrollProgress}>
        <div className={styles.progressBar} />
      </div>
    </nav>
  );
}
