"use client";

import Image from "next/image";
import styles from "./GalleryGrid.module.css";
import { useState } from "react";

type Img = { src: string; alt: string; title?: string };

export function GalleryGrid({ images }: { images: Img[] }) {
  const [active, setActive] = useState<Img | null>(null);

  return (
    <>
      <section className={styles.wrap}>
        {images.map((img, i) => (
          <figure className={styles.card} key={img.src}>
            <button
              className={styles.thumbBtn}
              onClick={() => setActive(img)}
              aria-label={`Bild vergrößern: ${img.title ?? img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.img}
                priority={i < 2}
              />
            </button>
            {(img.title || img.alt) && (
              <figcaption className={styles.cap}>
                {img.title ?? img.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </section>

      {active && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className={styles.lbInner} onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1066}
              sizes="100vw"
              className={styles.lbImg}
            />
            <button
              className={styles.close}
              onClick={() => setActive(null)}
              aria-label="Schließen"
            >
              ×
            </button>
            {(active.title || active.alt) && (
              <p className={styles.lbCap}>{active.title ?? active.alt}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
