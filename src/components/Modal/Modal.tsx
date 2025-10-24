"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

type ModalSize = "sm" | "md" | "lg" | "xl";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Titlu afişat în header-ul modalului */
  title?: string;
  /** Dimensiune modal: afectează lățimea maximă */
  size?: ModalSize;
  /** Conținutul modalului (formularul tău etc.) */
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title = "Kontaktieren Sie uns",
  size = "lg",
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

  // Lățime în funcție de size (fără să-ți cer update în CSS)
  const maxWidth =
    size === "sm" ? 520 : size === "md" ? 680 : size === "lg" ? 820 : 1040;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        ref={modalRef}
        className={styles.modal}
        style={{ maxWidth, width: "100%" }}
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.modalTitle}>{title}</h2>
            {/* poți adăuga/substitui subtitlul dacă vrei */}
          </div>

          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Popup schließen"
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

        {/* Body – conținutul din props.children (ex. <ContactForm />) */}
        <div className={styles.modalBody}>
          {children ?? (
            <p style={{ margin: 0 }}>
              (Aici poți plasa un formular sau conținutul dorit.)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
