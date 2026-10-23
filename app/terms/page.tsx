import type { Metadata } from "next";
import WarrantyTermsContent from "@/components/warranty/WarrantyTermsContent";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Garansi Servis | MobiCare",
  description: "Pelajari cakupan, pengecualian, dan ketentuan klaim garansi servis MobiCare.",
  alternates: { canonical: "/terms", languages: { en: "/en/terms" } },
};

export default function TermsPage() {
  return <WarrantyTermsContent />;
}
