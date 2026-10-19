import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Tentang MobiCare — Solusi Perbaikan Gadget & Layanan Profesional",
  description:
    "Profil resmi MobiCare Service Center: Solusi perbaikan perangkat digital dengan layanan profesional, komunikasi yang jelas, dan perhatian pada kepercayaan pelanggan.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Tentang MobiCare — Solusi Perbaikan Gadget & Layanan Profesional",
    description:
      "Profil resmi MobiCare Service Center: Solusi perbaikan perangkat digital dengan layanan profesional, komunikasi yang jelas, dan perhatian pada kepercayaan pelanggan.",
    url: "/about",
    images: [
      {
        url: "/images/iphone.webp",
        width: 1200,
        height: 630,
        alt: "MobiCare Service Center",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
