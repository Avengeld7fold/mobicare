import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Tentang MobiCare — Pusat Perbaikan & Standar Kualitas Gadget",
  description:
    "Profil resmi MobiCare Service Center: laboratorium perbaikan perangkat pintar terpercaya di Bali. Spesialis mikrosolder, teknisi bersertifikasi, dan garansi resmi.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Tentang MobiCare — Pusat Perbaikan & Standar Kualitas Gadget",
    description:
      "Profil resmi MobiCare Service Center: laboratorium perbaikan perangkat pintar terpercaya di Bali. Spesialis mikrosolder, teknisi bersertifikasi, dan garansi resmi.",
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
