import type { Metadata } from "next";
import MobiCarePlaceholder from "@/components/MobiCarePlaceholder";

export const metadata: Metadata = {
  title: "About MobiCare",
  description: "The MobiCare story is being prepared.",
  alternates: {
    canonical: "/en/about",
  },
  openGraph: {
    title: "About MobiCare",
    description: "The MobiCare story is being prepared.",
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
  return <MobiCarePlaceholder title="ABOUT MOBICARE" description="This page is being prepared as part of the new MobiCare identity." action="View price list" />;
}
