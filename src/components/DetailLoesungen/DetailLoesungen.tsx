"use client";

import Image from "next/image";
import styles from "./DetailLoesungen.module.css";

export default function DetailLoesungen() {
  return (
    <section className={styles.section} aria-labelledby="detail-headline">
      {/* Background Elements matching your design */}
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

            <p className={styles.lead}>
              Unsere Küche ist weit mehr als nur ein funktionaler Raum – sie ist
              das Herz unseres Zuhauses.
            </p>

            <div className={styles.paragraphs}>
              <p className={styles.p}>
                Bei proplan KÜCHEN- UND RAUMDESIGN in Straßenhaus haben wir es
                uns zur Aufgabe gemacht, anspruchsvolle Projekte auf höchstem
                Niveau zu realisieren.
              </p>
              <p className={styles.p}>
                Unsere Kernkompetenz liegt darin, eine Wohlfühlatmosphäre zu
                schaffen – in modernstem Design und mit höchster Funktionalität.
              </p>
              <p className={styles.p}>
                Denn Eleganz und Harmonie entstehen nur dann, wenn die Details
                passen.
              </p>
            </div>

            <a href="#team" className={styles.cta}>
              <span className={styles.ctaText}>Team kennenlernen</span>
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

          {/* RIGHT - Image */}
          <figure className={styles.figure}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/KFM.avif"
                alt="Jonas Neitzert – Geschäftsführer proplan KÜCHEN- UND RAUMDESIGN"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
                priority
              />
              <span className={styles.imageGlow} aria-hidden />
            </div>

            <figcaption className={styles.caption}>
              <strong className={styles.person}>JONAS NEITZERT</strong>
              <span className={styles.role}>
                Geschäftsführer proplan KÜCHEN- UND RAUMDESIGN
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
