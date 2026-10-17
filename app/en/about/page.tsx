import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About MobiCare — Repair Excellence & Quality Standards",
  description:
    "Official profile of MobiCare Service Center: trusted smart device repair center in Bali. Microsoldering lab, certified technicians, and official warranty.",
  alternates: {
    canonical: "/en/about",
  },
  openGraph: {
    title: "About MobiCare — Repair Excellence & Quality Standards",
    description:
      "Official profile of MobiCare Service Center: trusted smart device repair center in Bali. Microsoldering lab, certified technicians, and official warranty.",
    url: "/en/about",
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

export default function EnglishAboutPage() {
  return <AboutPageContent />;
}
