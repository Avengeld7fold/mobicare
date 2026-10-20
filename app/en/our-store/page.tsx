import type { Metadata } from "next";
import OurStoreContent from "@/components/store/OurStoreContent";

const title = "Our Store — MobiCare Bali";
const description = "Find MobiCare in Teuku Umar, Canggu, and Gatot Subroto. View branch locations, directions, and contact details.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/en/our-store", languages: { id: "/our-store", en: "/en/our-store" } },
  openGraph: { title, description, url: "/en/our-store" },
};

export default function OurStorePage() {
  return <OurStoreContent isEnglish />;
}
