import type { Metadata } from "next";
import Script from "next/script";
import Client from "./client";

export const metadata: Metadata = {
  title: "Studioküchen | Ausstellung & Planung im Küchenstudio",
  description:
    "Galerie mit 10 Studioküchen: Inselküche, Designküche, Wohnküche und Materialbibliothek. Beratung & Planung im Studio.",
  alternates: { canonical: "/studiokuechen" },
  openGraph: {
    title: "Studioküchen – Ausstellung & Planung",
    description:
      "Inspiration im Showroom: 10 Studioküchen mit Holz, Keramik, Beleuchtung und Stauraumideen.",
    url: "/studiokuechen",
    type: "website",
    images: [
      { url: "/images/studio/og-studiokuechen.jpg", width: 1200, height: 630 },
    ],
  },
  robots: { index: true, follow: true },
  keywords: [
    "Studioküche",
    "Küchenstudio Ausstellung",
    "Inselküche",
    "Designküche",
    "Nobilia",
    "Schüller",
    "LEICHT",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Studioküchen – Ausstellung & Planung",
  description: "Galerie mit 10 zeitgemäßen Studioküchen aus unserem Showroom.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Studioküchen",
        item: "/studiokuechen",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="schema-studiokuechen"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Client />
    </>
  );
}
