import type { Metadata } from "next";
import Script from "next/script";
import Client from "./client";

export const metadata: Metadata = {
  title: "Über uns | KÜCHEN BY MÖLLER",
  description:
    "Erfahren Sie mehr über unsere Werte, unser Studio und unsere Leidenschaft für Küchen mit Charakter.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns – MÖLLER KÜCHEN",
    description:
      "Wir planen, gestalten und bauen Küchen, die Design und Funktion vereinen.",
    url: "/ueber-uns",
    type: "website",
    images: [{ url: "/images/ueber-uns-og.jpg", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Über uns – MÖLLER KÜCHEN",
  description:
    "Studio, Werte und Team – erfahren Sie mehr über unsere Arbeitsweise.",
  url: "/ueber-uns",
  publisher: { "@type": "Organization", name: "MÖLLER KÜCHEN" },
};

export default function Page() {
  return (
    <>
      <Script
        id="schema-ueber-uns"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Client />
    </>
  );
}
