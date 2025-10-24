import type { Metadata } from "next";
import Script from "next/script";
import Client from "./client";

export const metadata: Metadata = {
  title: "Referenzen | Echte Küchenprojekte & Kundenstimmen",
  description:
    "Ausgewählte Küchenreferenzen: moderne Inselküchen, zeitlose Designküchen und smarte Stauraumlösungen – inkl. Materialien, Geräten und kurzen Projektinfos.",
  alternates: { canonical: "/referenzen" },
  openGraph: {
    title: "Referenzen – Küchenprojekte & Kundenstimmen",
    description:
      "Einblicke in reale Küchenprojekte: Materialien, Funktionen und Looks, die auch im Alltag überzeugen.",
    url: "/referenzen",
    type: "website",
    images: [
      { url: "/images/referenzen/og-referenzen.jpg", width: 1200, height: 630 },
    ],
  },
  robots: { index: true, follow: true },
  keywords: [
    "Küchen Referenzen",
    "Küchenprojekte",
    "Designküche Beispiele",
    "Inselküche Referenz",
    "Nobilia Referenzen",
    "Schüller Referenzen",
    "LEICHT Küche Projekte",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Referenzen – Küchenprojekte",
  description:
    "Sammlung realisierter Küchenprojekte mit kurzen Eckdaten zu Materialien, Geräten und Funktionen.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Referenzen",
        item: "/referenzen",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="schema-referenzen"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Client />
    </>
  );
}
