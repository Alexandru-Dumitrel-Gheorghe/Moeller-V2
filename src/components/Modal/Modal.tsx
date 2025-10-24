"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title = "Kostenlose Beratung anfordern",
  description = "Vereinbaren Sie noch heute einen Termin in unserem Showroom oder lassen Sie sich von unseren Experten beraten.",
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // evită flicker SSR/CSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // open/close + body scroll lock
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    } else {
      setIsVisible(false);
      const t = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: trimite datele la API-ul tău
    console.log("Form submitted");
    handleClose();
  };

  // Escape
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    if (isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  const ui = (
    <div
      className={`${styles.modalOverlay} ${isVisible ? styles.visible : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className={`${styles.modal} ${isVisible ? styles.visible : ""}`}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Modal schließen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.closeText}>Schließen</span>
          </button>
        </div>

        {/* Body */}
        <div className={styles.modalContent}>
          {/* Formular */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.input}
                  placeholder="Vorname *"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={styles.input}
                  placeholder="Nachname *"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="E-Mail *"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.input}
                  placeholder="Telefon"
                />
              </div>

              <div className={styles.formGroupFull}>
                <select id="subject" name="subject" className={styles.select}>
                  <option value="">Betreff auswählen</option>
                  <option value="beratung">Küchenberatung</option>
                  <option value="planung">3D-Planung</option>
                  <option value="montage">Montageservice</option>
                  <option value="wartung">Wartung & Service</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className={styles.formGroupFull}>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={styles.textarea}
                  placeholder="Erzählen Sie uns von Ihrem Projekt... *"
                  required
                />
              </div>

              <div className={styles.formGroupFull}>
                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className={styles.checkbox}
                    required
                  />
                  <label htmlFor="privacy" className={styles.checkboxLabel}>
                    Ich stimme der{" "}
                    <a href="/datenschutz" className={styles.link}>
                      Datenschutzerklärung
                    </a>{" "}
                    zu *
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.submitWrapper}>
              <button type="submit" className={styles.submitButton}>
                <span className={styles.submitText}>
                  Jetzt unverbindlich anfragen
                </span>
                <span className={styles.submitArrow}>→</span>
              </button>
            </div>
          </form>

          {/* Info (păstrat identic) */}
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoValue}>+49 (0) 8233 794 900</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoValue}>
                  info@kuechen-moeller.de
                </span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoValue}>
                  Hauptstraße 123, 86438 Kissing
                </span>
              </div>
            </div>
          </div>

          {/* Buton close suplimentar (mobile) */}
          <div className={styles.mobileClose}>
            <button className={styles.mobileCloseButton} onClick={handleClose}>
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Randare în portal => modalul nu mai e tăiat/sub componentă
  return createPortal(ui, document.body);
}
