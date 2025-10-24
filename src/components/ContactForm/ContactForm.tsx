"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className={styles.section} aria-label="Kontaktformular">
      {/* Background Elements matching your design */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>KONTAKT</span>
            <span className={styles.titleSub}>Ihr Ansprechpartner</span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>
        </div>

        <div className={styles.content}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>Showroom</h3>
                <div className={styles.infoLine} />
              </div>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Adresse</span>
                    <span className={styles.infoValue}>
                      Bahnhofsallee 13, 86438 Kissing
                    </span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Telefon</span>
                    <a href="tel:+4982337799654" className={styles.infoValue}>
                      +49 (0) 8233 7799654
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6l-10 7L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Fax</span>
                    <span className={styles.infoValue}>
                      +49 (0) 8233 7799657
                    </span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6l-10 7L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Email</span>
                    <a
                      href="mailto:info@moeller-kuechen.de"
                      className={styles.infoValue}
                    >
                      info@moeller-kuechen.de
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Öffnungszeiten</span>
                    <div className={styles.hours}>
                      <span className={styles.infoValue}>
                        Mo-Fr: 9:00-18:00
                      </span>
                      <span className={styles.infoValue}>Sa: 10:00-14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="beratung">Küchenberatung</option>
                    <option value="angebot">Angebot anfordern</option>
                    <option value="service">Service & Reparatur</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <span className={styles.buttonText}>Nachricht senden</span>
                <div className={styles.buttonArrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.buttonLine} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
