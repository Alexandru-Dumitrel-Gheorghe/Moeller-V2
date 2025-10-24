"use client";

import { useRef, useState } from "react";
import styles from "./ReviewSection.module.css";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export default function ReviewSection() {
  const [activeReview, setActiveReview] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Familie Schmidt",
      location: "Berlin",
      rating: 5,
      text: "Die Küche von Möller übertrifft alle unsere Erwartungen. Die Qualität der Materialien und die Verarbeitung sind erstklassig. Der Service war durchgängig professionell.",
      date: "November 2024",
    },
    {
      id: 2,
      name: "Thomas Weber",
      location: "München",
      rating: 5,
      text: "Von der Beratung bis zur Montage - ein perfekter Service! Die Küche ist nicht nur schön, sondern auch extrem funktional. Absolute Empfehlung!",
      date: "Oktober 2024",
    },
    {
      id: 3,
      name: "Maria Fischer",
      location: "Hamburg",
      rating: 5,
      text: "Wir sind begeistert von der zeitlosen Eleganz unserer neuen Küche. Das Team hat unsere Vorstellungen perfekt umgesetzt. Vielen Dank für diese herausragende Arbeit!",
      date: "September 2024",
    },
  ];

  const nextReview = () => setActiveReview((p) => (p + 1) % reviews.length);
  const prevReview = () =>
    setActiveReview((p) => (p - 1 + reviews.length) % reviews.length);

  // Touch swipe handlers (mobile UX)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (touchDeltaX.current > threshold) prevReview();
    else if (touchDeltaX.current < -threshold) nextReview();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className={styles.section} aria-label="Kundenbewertungen">
      {/* Background */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>BEWERTUNGEN</span>
            <span className={styles.titleSub}>Was unsere Kunden sagen</span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>
        </div>

        {/* ====== Content ====== */}
        <div className={styles.reviewContainer}>
          {/* SIDE ARROWS (desktop/tablet) */}
          <button
            type="button"
            className={`${styles.navButton} ${styles.navSide}`}
            onClick={prevReview}
            aria-label="Vorherige Bewertung"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* CARD */}
          <div
            className={styles.reviewCard}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className={styles.reviewHeader}>
              <div className={styles.rating} aria-label="Bewertung: 5 von 5">
                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                  <span key={i} className={styles.star} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <span className={styles.date}>{reviews[activeReview].date}</span>
            </div>

            <blockquote className={styles.reviewText}>
              “{reviews[activeReview].text}”
            </blockquote>

            <div className={styles.reviewFooter}>
              <div className={styles.author}>
                <h3 className={styles.name}>{reviews[activeReview].name}</h3>
                <p className={styles.location}>
                  {reviews[activeReview].location}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navSide}`}
            onClick={nextReview}
            aria-label="Nächste Bewertung"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
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

        {/* MOBILE ARROWS (apare doar pe mobil, într-un singur rând) */}
        <div className={styles.navRowMobile} aria-hidden>
          <button
            type="button"
            className={styles.navButton}
            onClick={prevReview}
            aria-label="Vorherige Bewertung"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={nextReview}
            aria-label="Nächste Bewertung"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
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

        {/* Dots */}
        <div className={styles.dots} role="tablist" aria-label="Bewertungen">
          {reviews.map((_, index) => {
            const active = index === activeReview;
            return (
              <button
                key={index}
                role="tab"
                aria-selected={active}
                aria-current={active ? "true" : undefined}
                className={`${styles.dot} ${active ? styles.active : ""}`}
                onClick={() => setActiveReview(index)}
                aria-label={`Bewertung ${index + 1} anzeigen`}
              />
            );
          })}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrapper}>
          <a href="#kontakt" className={styles.primaryCta}>
            <span className={styles.ctaText}>Eigene Erfahrung teilen</span>
            <div className={styles.ctaArrow} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24">
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
