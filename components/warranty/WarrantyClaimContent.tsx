"use client";

import { useI18n } from "@/lib/i18n/context";
import WarrantyClaimForm from "./WarrantyClaimForm";
import "./warranty.css";

export default function WarrantyClaimContent() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  return (
    <main className="mobi-warranty">
      <header className="mobi-warranty-hero mobi-container">
        <h1 className="mobi-warranty-title">
          {isEn ? "Claim your" : "Klaim garansi"}
          <span>{isEn ? "service warranty." : "servis Anda."}</span>
        </h1>
        <p className="mobi-warranty-intro">
          {isEn
            ? "Tell us about the previous repair and the issue you are experiencing. We will prepare a structured claim message for WhatsApp review."
            : "Ceritakan servis sebelumnya dan kendala yang Anda alami. Kami akan menyiapkan pesan klaim terstruktur untuk diperiksa melalui WhatsApp."}
        </p>
      </header>

      <section className="mobi-warranty-surface" aria-label={isEn ? "Warranty claim form" : "Form klaim garansi"}>
        <div className="mobi-container">
          <WarrantyClaimForm />
        </div>
      </section>
    </main>
  );
}
