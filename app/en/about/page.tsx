import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About MobiCare — Professional Gadget Repair & Technical Solutions",
  description:
    "Official profile of MobiCare Service Center: Digital device repair solutions with professional service, clear communication, and customer trust.",
  alternates: {
    canonical: "/en/about",
  },
  openGraph: {
    title: "About MobiCare — Professional Gadget Repair & Technical Solutions",
    description:
      "Official profile of MobiCare Service Center: Digital device repair solutions with professional service, clear communication, and customer trust.",
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
