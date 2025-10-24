"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./StudioSection.module.css";
import Modal from "@/components/Modal/Modal";

type Props = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function StudioSection({
  imageSrc = "/images/KFM.avif",
  imageAlt = "Möller Küchen Studio – Handwerkliche Perfektion seit über 25 Jahren",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={styles.section} aria-labelledby="studio-title">
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.backgroundGrid} />
          <div className={styles.cornerAccent} />
          <div className={styles.cornerAccent} />
        </div>

        {/* Red Accent Line */}
        <div className={styles.redAccent} />

        <div className={styles.grid}>
          {/* LEFT – Image */}
          <figure className={styles.figure}>
            <div className={styles.imageWrapper}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.image}
                priority
              />
              <div className={styles.imageOverlay} />
            </div>
          </figure>

          {/* RIGHT – Content Panel */}
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              {/* Header */}
              <div className={styles.header}>
                <h2 id="studio-title" className={styles.title}>
                  <span className={styles.titleMain}>UNSER STUDIO</span>
                  <span className={styles.titleSub}>Möller Küchen</span>
                </h2>
                <div className={styles.titleUnderline}>
                  <div className={styles.underlineMain} />
                  <div className={styles.underlineAccent} />
                </div>
              </div>

              {/* Lead */}
              <div className={styles.leadWrapper}>
                <p className={styles.lead}>
                  Handwerkliche Perfektion und individuelle Beratung in Kissing
                </p>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <p className={styles.paragraph}>
                  Unter der Leitung von <strong>Klaudia & Frank Möller</strong>{" "}
                  und einem erfahrenen Team verwirklicht{" "}
                  <strong>Möller Küchen</strong> anspruchsvolle Projekte auf
                  höchstem Niveau. Dabei ist die Küche zwar das Herzstück des
                  Zuhauses, doch wird sie als Gesamtkonzept mit dem dazu
                  passenden Wohn- und Essbereich sowie intelligenten
                  Lichtlösungen geplant.
                </p>

                <div className={styles.highlight}>
                  <p className={styles.highlightText}>
                    Denn Eleganz und Harmonie entstehen nur dann, wenn die
                    Details passen.
                  </p>
                </div>

                <p className={styles.paragraph}>
                  Wir von <strong>Möller Küchen</strong> sind Ihr Experte für
                  individuelle Küchenkonzepte, die wir mit über 25 Jahren
                  Erfahrung, erstklassigen Materialien und handwerklicher
                  Präzision umsetzen. So entstehen ganzheitliche Raumkonzepte
                  aus einer Hand, die zu einem harmonischen Ganzen verschmelzen.
                </p>
              </div>

              {/* CTA Button */}
              <div className={styles.ctaWrapper}>
                <button
                  type="button"
                  className={styles.cta}
                  onClick={() => setIsOpen(true)}
                  aria-haspopup="dialog"
                  aria-controls="studio-modal"
                >
                  <span className={styles.ctaText}>Termin vereinbaren</span>
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
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <figcaption className={styles.caption}>
          <strong className={styles.person}>KLAUDIA & FRANK MÖLLER</strong>
          <span className={styles.role}>Inhaber · Möller Küchen</span>
        </figcaption>
      </section>

      {/* Modal Component */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Kostenlose Beratung anfordern"
        description="Füllen Sie das Formular aus und wir kontaktieren Sie schnellstmöglich für Ihren persönlichen Termin."
      />
    </>
  );
}
