import type { Metadata } from "next";
import MobiCarePlaceholder from "@/components/MobiCarePlaceholder";

export const metadata: Metadata = {
  title: "Tentang MobiCare",
  description: "Halaman tentang MobiCare sedang disiapkan.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Tentang MobiCare",
    description: "Halaman tentang MobiCare sedang disiapkan.",
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
  return <MobiCarePlaceholder title="TENTANG MOBICARE" description="Halaman ini sedang kami siapkan sebagai bagian dari identitas MobiCare yang baru." action="Lihat price list" />;
}
