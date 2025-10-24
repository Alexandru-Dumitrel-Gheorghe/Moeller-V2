"use client";

import styles from "./Header.module.css";
import { FiGrid, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Küchen", href: "#kuechen" },
    { name: "Referenzen", href: "#referenzen" },
    { name: "Qualität", href: "#qualitat" },
    { name: "Ehrlichkeit", href: "#ehrlichkeit" },
    { name: "Showroom", href: "#showroom" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      aria-label="Site header"
    >
      <div className={styles.headerBackground} />
      <div className={styles.redAccent} />

      <div className={styles.headerContent}>
        {/* Stânga: Menu Icon */}
        <button
          className={styles.menuIcon}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-pressed={menuOpen}
        >
          <FiGrid size={20} />
          <div className={styles.menuHover} />
        </button>

        {/* Centru: Logo */}
        <div className={styles.logoWrap} aria-label="Küchen by Möller">
          <div className={styles.logoBox}>
            <div className={styles.logoImage}>
              <img
                src="/images/logo-Möller.avif"
                alt="Möller"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.logoTextContent}>
              <span className={styles.logoText}>KÜCHEN</span>
              <span className={styles.logoSub}>BY MÖLLER</span>
            </div>
            <div className={styles.logoAccent} />
            <div className={styles.logoGlow} />
          </div>
        </div>

        {/* Dreapta: CTA pătrat */}
        <a
          href="#kontakt"
          className={styles.cta}
          aria-label="Termin vereinbaren"
        >
          <span className={styles.ctaText}>Termin vereinbaren</span>
          <span className={styles.ctaIcon} aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m-7-7 7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className={styles.ctaHover} />
          <div className={styles.ctaLine} />
        </a>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`${styles.dropdownMenu} ${menuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.menuContent}>
          {/* Buton X în panou (vizibil deasupra overlay-ului) */}
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>

          <nav className={styles.menuNav} aria-label="Main navigation">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.menuItem}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.menuNumber}>0{index + 1}</span>
                <span className={styles.menuText}>{item.name}</span>
                <div className={styles.menuLine} />
              </a>
            ))}
          </nav>

          <div className={styles.menuFooter}>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>Kontakt</p>
              <a href="tel:+49123456789" className={styles.contactLink}>
                +49 123 456 789
              </a>
              <a
                href="mailto:info@moeller-kuechen.de"
                className={styles.contactLink}
              >
                info@moeller-kuechen.de
              </a>
            </div>
          </div>
        </div>

        {/* overlay care închide meniul la click */}
        <div
          className={styles.menuOverlay}
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
}
