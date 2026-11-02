"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function HomeAlertsSignup() {
  const { locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";

  const marqueeItem = isEn
    ? "MOBICARE SERVICE CENTER  ◆  DIRECT CONSULTATION  ◆  OPEN DIAGNOSTICS  ◆  TRANSPARENT ESTIMATES  ◆  FAST WHATSAPP RESPONSE  ◆  "
    : "MOBICARE SERVICE CENTER  ◆  KONSULTASI LANGSUNG  ◆  DIAGNOSA TERBUKA  ◆  ESTIMASI TRANSPARAN  ◆  RESPON WHATSAPP CEPAT  ◆  ";

  return (
    <div className="mobi-signup-wrapper">
      {/* Running Marquee Ticker Tape — Adapted from Fastrack .social-marquee */}
      <div className="signup-marquee" aria-hidden="true">
        <div className="signup-marquee-track">
          <span>{marqueeItem}</span>
          <span>{marqueeItem}</span>
          <span>{marqueeItem}</span>
          <span>{marqueeItem}</span>
        </div>
      </div>

      <section className="mobi-signup signup-band" id="signup" aria-labelledby="signup-heading">
        {/* Ghost Number Watermark */}
        <span className="signup-ghost" aria-hidden="true">
          01
        </span>

      {/* Left Column: Heading and Editorial Deck */}
      <div className="signup-copy">
        <p className="kicker kicker-light">
          {isEn ? "direct consultation" : "konsultasi langsung"}
        </p>

        <h2 id="signup-heading">
          <span>{isEn ? "Talk to us" : "Konsultasi"}</span>
          <span>{isEn ? "directly." : "langsung."}</span>
        </h2>

        <p className="signup-deck">
          {isEn
            ? "Tell us what's wrong with your device and get clear next steps, transparent estimates, and the right service options before any work begins."
            : "Ceritakan kendala perangkatmu dan dapatkan langkah selanjutnya yang jelas, estimasi transparan, serta opsi servis yang tepat sebelum pengerjaan dimulai."}
        </p>
      </div>

      {/* Right Column: High-Impact Action Card */}
      <div className="signup-action">
        <div className="signup-action-mark">
          <Image
            src="/mobicare-mark.png"
            alt="MobiCare Mark"
            width={36}
            height={36}
            unoptimized
            priority
          />
        </div>

        <p>
          <strong>
            {isEn ? "TALK FIRST. REPAIR WITH CONFIDENCE." : "KONSULTASI DULU. SERVIS TENANG."}
          </strong>
          <span>
            {isEn
              ? "Chat our team on WhatsApp or head to the contact page to describe your device problem."
              : "Ngobrol dengan tim kami via WhatsApp atau buka halaman kontak untuk menjelaskan kendala perangkatmu."}
          </span>
        </p>

        <Link
          href={getLocalizedPath("/contact")}
          className="button button-white signup-button"
        >
          <span>{isEn ? "Start a consultation" : "Mulai Konsultasi"}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Bottom Ticker / Benefits Bar */}
      <div className="signup-benefits" aria-hidden="true">
        <span>{isEn ? "Open Diagnostics" : "Diagnosa Terbuka"}</span>
        <i />
        <span>{isEn ? "Transparent Estimates" : "Estimasi Transparan"}</span>
        <i />
        <span>{isEn ? "Fast WhatsApp Response" : "Respon WhatsApp Cepat"}</span>
        <i />
      </div>
    </section>
  </div>
);
}
