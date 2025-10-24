"use client";

import styles from "./ReviewSection.module.css";

type Review = {
  id: number;
  stars: number;
  title: string;
  excerpt: string;
  author: string;
  verified?: boolean;
};

const REVIEWS: Review[] = [
  {
    id: 1,
    stars: 5,
    title: "FÜR UNSER NEUES EIGENHEIM WOLLTEN WIR EINE SCHÖNE NEUE KÜCHE.",
    excerpt: "DABEI SIND WIR BEI PROPLAN GELANDET",
    author: "– Angela Klimek",
    verified: true,
  },
  {
    id: 2,
    stars: 5,
    title: "VOM AUFMASS BIS ZUR PLANUNG DER KÜCHE SOWIE DEM SPÄTEREN EINBAU",
    excerpt: "EINFACH NUR PERFEKT. WIR HATTEN",
    author: "– Kerstin Spitzley",
    verified: true,
  },
  {
    id: 3,
    stars: 5,
    title: "SCHÖNER VERKAUFSRAUM, SUPER TOLLE BERATUNG VON HERRN NEITZERT.",
    excerpt: "NICHT AUFDRINGLICH. ER GIBT",
    author: "– W. 60",
    verified: true,
  },
];

export default function ReviewSection() {
  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      {/* Background Elements matching your design */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header Row - Title left, Button right */}
        <div className={styles.headerRow}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span className={styles.titleMain}>KUNDENSTIMMEN</span>
              <span className={styles.titleSub}>Was unsere Kunden sagen</span>
            </h2>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineMain} />
              <div className={styles.underlineAccent} />
            </div>
          </div>

          <a href="#kontakt" className={styles.squareCta}>
            <span className={styles.ctaIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 4v16m8-8H4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className={styles.ctaHover} />
          </a>
        </div>

        {/* Reviews Grid - 3 cards below */}
        <div className={styles.grid}>
          {REVIEWS.map((review) => (
            <article key={review.id} className={styles.card}>
              {/* Stars */}
              <div
                className={styles.stars}
                aria-label={`${review.stars} von 5 Sternen`}
              >
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>

              {/* Review Content */}
              <div className={styles.reviewContent}>
                <h3 className={styles.reviewTitle}>{review.title}</h3>
                <p className={styles.reviewExcerpt}>{review.excerpt}</p>
              </div>

              {/* Read More Link */}
              <a href="#referenzen" className={styles.readMore}>
                <span className={styles.readMoreText}>WEITERLESEN</span>
                <div className={styles.readMoreArrow}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

              {/* Divider */}
              <div className={styles.divider} />

              {/* Meta Information */}
              <div className={styles.meta}>
                {review.verified && (
                  <div className={styles.verified}>
                    <div className={styles.verifiedIcon}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 11.08V12a10 10 0 11-5.93-9.14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 4L12 14.01l-3-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className={styles.verifiedText}>
                      Verifizierte Bewertung
                    </span>
                  </div>
                )}
                <p className={styles.author}>{review.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
