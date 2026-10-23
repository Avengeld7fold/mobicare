import type { Metadata } from "next";
import WarrantyClaimContent from "@/components/warranty/WarrantyClaimContent";

export const metadata: Metadata = {
  title: "Service Warranty Claim | MobiCare",
  description: "Prepare a MobiCare service warranty claim and continue the review through WhatsApp.",
  alternates: { canonical: "/en/warranty-claim", languages: { id: "/warranty-claim" } },
};

export default function EnglishWarrantyClaimPage() {
  return <WarrantyClaimContent />;
}
