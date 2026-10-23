import type { Metadata } from "next";
import WarrantyTermsContent from "@/components/warranty/WarrantyTermsContent";

export const metadata: Metadata = {
  title: "Service Warranty Terms & Conditions | MobiCare",
  description: "Review MobiCare service warranty coverage, exclusions, and claim requirements.",
  alternates: { canonical: "/en/terms", languages: { id: "/terms" } },
};

export default function EnglishTermsPage() {
  return <WarrantyTermsContent />;
}
