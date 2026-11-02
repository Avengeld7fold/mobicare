import type { Metadata } from "next";
import PricelistPage from "../../pricelist/page";

// ISR: HTML di-generate secara statis dan di-revalidate tiap 30 detik, atau instan via revalidatePath() / sync button.
export const revalidate = 30;

export const metadata: Metadata = {
  title: "iPhone, iPad, MacBook & Android Repair Price List — MobiCare Service Center Bali",
  description:
    "Check transparent repair price estimates for iPhone, iPad, MacBook, Apple Watch, and Android at MobiCare Service Center in Bali. LCD, battery, camera, and more.",
  alternates: {
    canonical: "/en/pricelist",
    languages: { id: "/pricelist", en: "/en/pricelist" },
  },
};

export default PricelistPage;
