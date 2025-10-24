import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"; // ✅ Import Footer
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Küchen by Möller",
  description: "Premium Küchen Design – Qualität, Ehrlichkeit, Präzision.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="appMain noHeaderOffset">{children}</main>
        <ScrollToTop />
        <Footer /> {/* ✅ Footer adăugat după conținut */}
      </body>
    </html>
  );
}
