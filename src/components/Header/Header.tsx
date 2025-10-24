"use client";

import styles from "./Header.module.css";
import { FiGrid, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// 🔽 importă Modal + (opțional) ContactForm
import Modal from "@/components/Modal/Modal";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 🔴 control modal
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setMenuOpen(false);
  };

  const closeModal = () => setIsModalOpen(false);

  const menuItems = [
    { name: "Küchen", href: "/studiokuechen" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Über Uns", href: "/ueber-uns" },
    { name: "Ehrlichkeit", href: "#ehrlichkeit" },
    { name: "Showroom", href: "#showroom" },
    // Notă: Kontakt va deschide modalul (interceptăm click-ul)
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
        <div
          className={styles.logoWrap}
          aria-label="Küchen by Möller"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
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

        {/* Dreapta: CTA pătrat → deschide modal */}
        <button
          type="button"
          onClick={openModal}
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
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`${styles.dropdownMenu} ${menuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.menuContent}>
          {/* Buton X în panou */}
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
                onClick={(e) => {
                  // Kontakt deschide modalul
                  if (item.href === "#kontakt") {
                    e.preventDefault();
                    openModal();
                    return;
                  }
                  setMenuOpen(false);
                }}
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

        {/* Overlay care închide meniul la click */}
        <div
          className={styles.menuOverlay}
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Termin vereinbaren"
        size="lg"
      >
        {/* conținutul modalului: poți înlocui cu altceva */}
        <ContactForm />
      </Modal>
    </header>
  );
}
