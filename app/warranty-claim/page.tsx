import type { Metadata } from "next";
import WarrantyClaimContent from "@/components/warranty/WarrantyClaimContent";

export const metadata: Metadata = {
  title: "Klaim Garansi Servis | MobiCare",
  description: "Siapkan pengajuan klaim garansi servis MobiCare dan lanjutkan pemeriksaan melalui WhatsApp.",
  alternates: { canonical: "/warranty-claim", languages: { en: "/en/warranty-claim" } },
};

export default function WarrantyClaimPage() {
  return <WarrantyClaimContent />;
}
