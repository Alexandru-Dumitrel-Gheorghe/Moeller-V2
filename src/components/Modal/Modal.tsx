"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

type ModalSize = "sm" | "md" | "lg" | "xl";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title = "Kontaktieren Sie uns",
  size = "md",
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Blochează scroll-ul body când modalul e deschis
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Închide pe Escape
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  // Închide la click pe backdrop
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div ref={modalRef} className={`${styles.modal} ${styles[size]}`}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.modalTitle}>{title}</h2>
          </div>

          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Modal schließen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          {children ?? (
            <p style={{ margin: 0, color: "var(--text-color)" }}>
              (Aici poți plasa un formular sau conținutul dorit.)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
