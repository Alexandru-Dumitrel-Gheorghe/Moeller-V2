"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./StudioGrid.module.css";

type Tile = {
  src: string;
  title: string;
  description?: string;
  id?: string;
};

export function StudioGrid({ tiles }: { tiles: Tile[] }) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section className={styles.wrap}>
      {tiles.map((tile, index) => (
        <figure
          className={`${styles.tile} ${loadedImages.has(tile.id || tile.src) ? styles.loaded : ""}`}
          key={tile.id || `${tile.src}-${index}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src={tile.src}
              alt={tile.title}
              width={1920}
              height={1080}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.img}
              priority={index < 4}
              onLoad={() => handleImageLoad(tile.id || tile.src)}
            />

            {/* Gradient Overlays */}
            <div className={styles.overlay}></div>
            <div className={styles.hoverOverlay}></div>

            {/* Content */}
            <figcaption className={styles.caption}>
              <span className={styles.title}>{tile.title}</span>
              {tile.description && (
                <span className={styles.description}>{tile.description}</span>
              )}
            </figcaption>
          </div>
        </figure>
      ))}
    </section>
  );
}
