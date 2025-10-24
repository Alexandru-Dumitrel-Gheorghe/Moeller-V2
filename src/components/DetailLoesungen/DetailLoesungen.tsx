"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./DetailLoesungen.module.css";

export default function DetailLoesungen() {
  return (
    <section className={styles.section} aria-labelledby="detail-headline">
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT - Text Content */}
          <div className={styles.copy}>
            <h2 id="detail-headline" className={styles.title}>
              <span className={styles.titleMain}>DETAILLÖSUNGEN</span>
              <span className={styles.titleSub}>Die begeistern</span>
            </h2>

            <div className={styles.titleUnderline}>
              <div className={styles.underlineMain} />
              <div className={styles.underlineAccent} />
            </div>

            {/* LEAD replaced */}
            <p className={styles.lead}>
              Wir lieben Küchen – und Ihre ganz besonders!
            </p>

            {/* PARAGRAPHS replaced (3 ca înainte) */}
            <div className={styles.paragraphs}>
              <p className={styles.p}>
                Genau deshalb setzen wir Ihre Wünsche und Ansprüche
                professionell und zuverlässig um.
              </p>
              <p className={styles.p}>
                Unsere Küchen sind individuell und nicht von der Stange –
                präzise geplant, hochwertig umgesetzt.
              </p>
              <p className={styles.p}>
                Vor allem schenken sie Ihnen ein großes Maß an Lebensqualität –
                zu 100&nbsp;%. <br />
                <em>Klaudia &amp; Frank Möller</em>
              </p>
            </div>

            <Link href="/ueber-uns" className={styles.cta}>
              <span className={styles.ctaText}>MEHR ERFAHREN</span>
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
            </Link>
          </div>

          {/* RIGHT - Image */}
          <figure className={styles.figure}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/KFM.avif"
                  alt="Klaudia & Frank Möller in moderner Küche"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.image}
                  priority
                />
                <span className={styles.imageGlow} aria-hidden />
              </div>

              {/* Floating elements for 3D effect */}
              <div className={styles.floatingShadow} aria-hidden />
              <div className={styles.floatingAccent} aria-hidden />
            </div>

            <figcaption className={styles.caption}>
              <strong className={styles.person}>KLAUDIA & FRANK MÖLLER</strong>
              <span className={styles.role}>Inhaber · Möller Küchen</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
