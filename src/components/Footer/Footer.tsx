"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const quickLinks = [
    { href: "#start", label: "Startseite" },
    { href: "#leistungen", label: "Leistungen" },
    { href: "#galerie", label: "Galerie" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const services = [
    "Maßanfertigungen",
    "Küchenplanung",
    "Montage Service",
    "Beratung & Support",
  ];

  return (
    <footer ref={footerRef} className={styles.footer} aria-label="Footer">
      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image
                src="/images/logo-Möller.avif"
                alt="Möller Küchen"
                width={80}
                height={80}
                className={styles.logoImage}
              />
              <div className={styles.logoTextGroup}>
                <span className={styles.logoText}>KÜCHEN</span>
                <span className={styles.logoSubtitle}>BY MÖLLER</span>
              </div>
            </div>

            <p className={styles.tagline}>
              Maßgeschneiderte Küchenlösungen mit höchster Präzision und Liebe
              zum Detail – von der Planung bis zur Übergabe.
            </p>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span>FB</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span>IG</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Pinterest">
                <span>PT</span>
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Showroom</h3>
            <address className={styles.address}>
              <p className={styles.addressLine}>Bahnhofsallee 13</p>
              <p className={styles.addressLine}>86438 Kissing</p>

              <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <span className={styles.contactLabel}>Tel.:</span>
                  <a href="tel:+4982337799654" className={styles.contactLink}>
                    +49 (0) 8233 7799654
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.contactLabel}>Fax.:</span>
                  <span className={styles.contactText}>
                    +49 (0) 8233 7799657
                  </span>
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email:</span>
                  <a
                    href="mailto:info@moeller-kuechen.de"
                    className={styles.contactLink}
                  >
                    info@moeller-kuechen.de
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Schnellzugriff</h3>
            <nav className={styles.linksNav}>
              <ul className={styles.linksList}>
                {quickLinks.map((link) => (
                  <li key={link.href} className={styles.linksItem}>
                    <a href={link.href} className={styles.linksLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services Column */}
          <div className={styles.servicesColumn}>
            <h3 className={styles.columnTitle}>Leistungen</h3>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index} className={styles.servicesItem}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <span className={styles.copyrightText}>
                © {new Date().getFullYear()} Küchen by Möller. Alle Rechte
                vorbehalten.
              </span>
            </div>

            <div className={styles.legalLinks}>
              <a href="#impressum" className={styles.legalLink}>
                Impressum
              </a>
              <a href="#datenschutz" className={styles.legalLink}>
                Datenschutz
              </a>
              <a href="#agb" className={styles.legalLink}>
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
