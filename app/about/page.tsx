import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Tentang MobiCare — Profil Perusahaan",
  description:
    "Kenali MobiCare Service Center, visi, nilai, proses pelayanan, dan komitmen kami pada komunikasi yang jelas serta kepercayaan pelanggan.",
  alternates: {
    canonical: "/about",
    languages: { id: "/about", en: "/en/about" },
  },
  openGraph: {
    title: "Tentang MobiCare — Profil Perusahaan",
    description:
      "Kenali MobiCare Service Center, visi, nilai, proses pelayanan, dan komitmen kami pada komunikasi yang jelas serta kepercayaan pelanggan.",
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
