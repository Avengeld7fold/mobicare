import type { Metadata } from "next";
import OurStoreContent from "@/components/store/OurStoreContent";

const title = "Our Store — Cabang MobiCare Bali";
const description = "Temukan MobiCare di Teuku Umar, Canggu, dan Gatot Subroto. Lihat lokasi cabang, petunjuk arah, dan kontak tim kami.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/our-store", languages: { id: "/our-store", en: "/en/our-store" } },
  openGraph: { title, description, url: "/our-store" },
};

export default function OurStorePage() {
  return <OurStoreContent />;
}
