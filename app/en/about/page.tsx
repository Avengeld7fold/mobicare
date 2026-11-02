import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About MobiCare — Company Profile",
  description:
    "Meet MobiCare Service Center, our vision, values, service process, and commitment to clear communication and customer trust.",
  alternates: {
    canonical: "/en/about",
    languages: { id: "/about", en: "/en/about" },
  },
  openGraph: {
    title: "About MobiCare — Company Profile",
    description:
      "Meet MobiCare Service Center, our vision, values, service process, and commitment to clear communication and customer trust.",
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
