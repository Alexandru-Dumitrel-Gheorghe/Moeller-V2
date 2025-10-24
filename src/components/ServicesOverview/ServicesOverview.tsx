"use client";

import Image from "next/image";
import styles from "./ServicesOverview.module.css";

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: "Leicht Design Küche mit Insel und Berbel Dunstabzug",
      category: "Küchen",
      description:
        "Entdecken Sie die schönsten Küchen und Einrichtungsideen für die gesamte Region Koblenz.",
      ctaText: "Jetzt entdecken",
      link: "#kuechen",
      image: "/images/Hero-gg1.png",
    },
    {
      title: "Interior Design",
      category: "Design",
      description:
        "Exzellentes interior Design aus einer Hand mit Ihrem Wohn- oder Küchenkonzept.",
      ctaText: "Jetzt entdecken",
      link: "#design",
      image: "/images/D4-900x500.png",
    },
    {
      title: "Sie haben Fragen?",
      category: "Beratung",
      description:
        "Sprechen Sie uns gerne an. Wir stehen Ihnen bei all Ihren Ideen und Fragen vertrauensvoll zur Seite.",
      ctaText: "Jetzt stellen",
      link: "#kontakt",
      image: "/images/faq1.png",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="services-title">
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGrid} />
        <div className={styles.cornerAccent} />
        <div className={styles.cornerAccent} />
      </div>

      {/* Red Accent Line */}
      <div className={styles.redAccent} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 id="services-title" className={styles.title}>
            <span className={styles.titleMain}>IHRE BEREICHE</span>
            <span className={styles.titleSub}>
              Ihre wichtigsten Bereiche auf einen Blick
            </span>
          </h2>
          <div className={styles.titleUnderline}>
            <div className={styles.underlineMain} />
            <div className={styles.underlineAccent} />
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article key={index} className={styles.serviceCard}>
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  priority={index === 0}
                />
                <div className={styles.imageOverlay} />

                {/* Category Badge pe imagine */}
                <div className={styles.categoryBadge}>{service.category}</div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                {/* Title with Red Underline */}
                <div className={styles.titleWrapper}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <div className={styles.titleLine} />
                </div>

                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                {/* CTA Button with Border */}
                <a href={service.link} className={styles.ctaLink}>
                  <span className={styles.ctaText}>{service.ctaText}</span>
                  <div className={styles.ctaArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={styles.buttonBorder} />
                </a>
              </div>

              {/* Card Accent Line */}
              <div className={styles.cardAccent} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
