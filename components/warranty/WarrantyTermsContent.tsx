"use client";

import Link from "next/link";
import { ArrowRight, FileCheck2, SearchCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { getWarrantyTerms } from "@/lib/warranty";
import "./warranty.css";

export default function WarrantyTermsContent() {
  const { locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";
  const terms = getWarrantyTerms(locale);

  return (
    <main className="mobi-warranty">
      <header className="mobi-warranty-hero mobi-container">
        <h1 className="mobi-warranty-title">
          {isEn ? "Clear warranty" : "Syarat garansi"}
          <span>{isEn ? "terms." : "yang jelas."}</span>
        </h1>
        <p className="mobi-warranty-intro">
          {isEn
            ? "Understand the service coverage before submitting a claim. Your invoice remains the primary reference for the applicable period and repair details."
            : "Pahami cakupan servis sebelum mengajukan klaim. Invoice tetap menjadi acuan utama untuk masa berlaku dan detail perbaikan Anda."}
        </p>
      </header>

      <section className="mobi-warranty-surface" aria-labelledby="warranty-rules-title">
        <div className="mobi-container">
          <div className="mobi-warranty-section-head">
            <div>
              <p className="mobi-warranty-kicker">{isEn ? "Service warranty" : "Garansi servis"}</p>
              <h2 id="warranty-rules-title">
                {isEn ? "Coverage and exclusions" : "Cakupan dan pengecualian"}
              </h2>
            </div>
            <p>
              {isEn
                ? "These terms apply together with the service information recorded on your MobiCare invoice."
                : "Ketentuan ini berlaku bersama informasi servis yang tercatat pada invoice MobiCare Anda."}
            </p>
          </div>

          <ol className="mobi-warranty-rules">
            {terms.map((term) => (
              <li key={term.id}>
                <span className="mobi-warranty-index" aria-hidden="true">{term.id}</span>
                <h3>{term.title}</h3>
                <p>{term.description}</p>
              </li>
            ))}
          </ol>

          <div className="mobi-warranty-guidance">
            <div className="mobi-warranty-guidance-item">
              <FileCheck2 aria-hidden="true" />
              <div>
                <h3>{isEn ? "Prepare your service reference" : "Siapkan referensi servis"}</h3>
                <p>
                  {isEn
                    ? "Use your digital invoice, service number, or the WhatsApp number registered during repair."
                    : "Gunakan invoice digital, nomor servis, atau nomor WhatsApp yang terdaftar saat perbaikan."}
                </p>
              </div>
            </div>
            <div className="mobi-warranty-guidance-item">
              <SearchCheck aria-hidden="true" />
              <div>
                <h3>{isEn ? "Inspection comes first" : "Pemeriksaan dilakukan lebih dulu"}</h3>
                <p>
                  {isEn
                    ? "Every claim is reviewed by a technician. Submission does not automatically confirm approval or replacement."
                    : "Setiap klaim diperiksa oleh teknisi. Pengajuan tidak otomatis berarti klaim disetujui atau komponen langsung diganti."}
                </p>
              </div>
            </div>
          </div>

          <div className="mobi-warranty-cta">
            <div>
              <p className="mobi-warranty-kicker">{isEn ? "Ready to continue?" : "Siap melanjutkan?"}</p>
              <h2>{isEn ? "Start your warranty claim." : "Ajukan klaim garansi Anda."}</h2>
            </div>
            <Link href={getLocalizedPath("/warranty-claim")} className="mobi-warranty-primary-link">
              <span>{isEn ? "Start a claim" : "Mulai klaim"}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
