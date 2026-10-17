import type { Metadata } from "next";
import MobiCarePlaceholder from "@/components/MobiCarePlaceholder";

export const metadata: Metadata = {
  title: "Contact MobiCare",
  description: "The MobiCare consultation page is being prepared.",
  alternates: {
    canonical: "/en/contact",
  },
  openGraph: {
    title: "Contact MobiCare",
    description: "The MobiCare consultation page is being prepared.",
    url: "/en/contact",
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

export default function EnglishContactPage() {
  return <MobiCarePlaceholder title="START A CONSULTATION" description="The MobiCare consultation channel is being prepared. You can review estimated prices in the meantime." action="View price list" />;
}
