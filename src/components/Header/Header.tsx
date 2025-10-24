"use client";

import styles from "./Header.module.css";
import { FiGrid, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // progresul AFIȘAT (0..1), animat cu rAF
  const [displayedProgress, setDisplayedProgress] = useState(0);

  // --- refs (trebuie declarate la top-level, nu în useEffect!) ---
  const targetRef = useRef(0); // ținta 0..1 pe baza scrollului
  const displayedRef = useRef(0); // shadow pentru displayedProgress
  const animRef = useRef<number | null>(null); // id-ul rAF curent

  const router = useRouter();

  useEffect(() => {
    const FILL_END_AT = 0.9;
    const START_AFTER_HERO = false;
    const HERO_SELECTOR = "#hero";

    let heroStart = 0;

    const computeHeroStart = () => {
      if (!START_AFTER_HERO) {
        heroStart = 0;
        return;
      }
      const hero = document.querySelector(HERO_SELECTOR) as HTMLElement | null;
      heroStart = hero ? hero.offsetHeight : 0;
    };

    const computeTargetFromScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);

      const maxScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      let norm = 0;
      if (maxScrollable > 0) {
        const end = maxScrollable * FILL_END_AT;
        norm = (y - heroStart) / end;
      }
      norm = Math.min(1, Math.max(0, norm));
      const eased = Math.pow(norm, 0.9);
      targetRef.current = eased; // 0..1
      startAnimLoop();
    };

    const startAnimLoop = () => {
      if (animRef.current !== null) return; // deja rulează
      const tick = () => {
        const current = displayedRef.current;
        const target = targetRef.current;
        const next = current + (target - current) * 0.12; // smoothness

        displayedRef.current = next;
        setDisplayedProgress(next);

        if (Math.abs(target - next) < 0.001) {
          displayedRef.current = target;
          setDisplayedProgress(target);
          if (animRef.current) cancelAnimationFrame(animRef.current);
          animRef.current = null;
          return;
        }
        animRef.current = requestAnimationFrame(tick);
      };
      animRef.current = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      computeHeroStart();
      computeTargetFromScroll();
    };

    // init
    computeHeroStart();
    computeTargetFromScroll();

    window.addEventListener("scroll", computeTargetFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", computeTargetFromScroll);
      window.removeEventListener("resize", handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
      animRef.current = null;
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setMenuOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const menuItems = [
    { name: "Küchen", href: "/studiokuechen" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Über Uns", href: "/ueber-uns" },
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
        <button
          className={styles.menuIcon}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-pressed={menuOpen}
        >
          <FiGrid size={20} />
          <div className={styles.menuHover} />
        </button>

        {/* Logo */}
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

            {/* contur alb + roșu (progres 0..1 prin --p) */}
            <svg
              className={styles.logoSvgBorder}
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
              style={{ ["--p" as any]: displayedProgress }} // 0..1 animat
            >
              {/* contur alb fix */}
              <rect x="2" y="2" width="196" height="56" rx="8" ry="8" />
              {/* contur roșu progresiv */}
              <rect
                x="2"
                y="2"
                width="196"
                height="56"
                rx="8"
                ry="8"
                pathLength={1}
              />
            </svg>
          </div>
        </div>

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

      {/* Menu */}
      <div
        className={`${styles.dropdownMenu} ${menuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.menuContent}>
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
        </div>

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
        <ContactForm />
      </Modal>
    </header>
  );
}
