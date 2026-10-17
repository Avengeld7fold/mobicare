import type { Metadata } from "next";
import MobiCarePlaceholder from "@/components/MobiCarePlaceholder";

export const metadata: Metadata = {
  title: "Konsultasi MobiCare",
  description: "Halaman konsultasi MobiCare sedang disiapkan.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Konsultasi MobiCare",
    description: "Halaman konsultasi MobiCare sedang disiapkan.",
    url: "/contact",
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

export default function ContactPage() {
  return <MobiCarePlaceholder title="MULAI KONSULTASI" description="Kanal konsultasi MobiCare sedang disiapkan. Sementara itu, Anda dapat melihat estimasi melalui Price List." action="Cek harga" />;
}

