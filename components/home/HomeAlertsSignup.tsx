"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function HomeAlertsSignup() {
  const { locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";

  const marqueeItem = isEn
    ? "MOBICARE SERVICE CENTER  ◆  PRECISION GADGET REPAIR  ◆  TRANSPARENT DIAGNOSTICS  ◆  IPHONE IPAD MACBOOK ANDROID  ◆  OFFICIAL WARRANTY  ◆  "
    : "MOBICARE SERVICE CENTER  ◆  SERVIS GADGET PRESISI  ◆  DIAGNOSA TERBUKA  ◆  SPESIALIS IPHONE IPAD MACBOOK  ◆  GARANSI RESMI  ◆  ";

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
          {isEn ? (
            <>
              text <span className="kicker-symbol">+</span> email alerts
            </>
          ) : (
            <>
              whatsapp <span className="kicker-symbol">+</span> email alerts
            </>
          )}
        </p>

        <h2 id="signup-heading">
          <span>Be the first</span>
          <span>to know.</span>
        </h2>

        <p className="signup-deck">
          {isEn
            ? "Open diagnostics. Upfront pricing. Live repair progress. Exclusive perks. Every critical update delivered straight to your screen."
            : "Diagnosa terbuka. Biaya pasti. Progres pengerjaan live. Promo eksklusif. Semua info penting langsung ke genggaman Anda."}
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
            {isEn ? "REAL-TIME UPDATES. RIGHT ON TIME." : "PROGRES LIVE. TEPAT WAKTU."}
          </strong>
          <span>
            {isEn
              ? "Follow every step of your device repair directly via WhatsApp or email."
              : "Pantau setiap tahap perbaikan gadget Anda langsung via WhatsApp atau email."}
          </span>
        </p>

        <Link
          href={getLocalizedPath("/contact")}
          className="button button-white signup-button"
        >
          <span>{isEn ? "Get MobiCare Alerts" : "Aktifkan Notifikasi Servis"}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Bottom Ticker / Benefits Bar */}
      <div className="signup-benefits" aria-hidden="true">
        <span>{isEn ? "Live Repair Progress" : "Progres Servis Live"}</span>
        <i />
        <span>{isEn ? "Open Diagnostics" : "Diagnosa Terbuka"}</span>
        <i />
        <span>{isEn ? "90-Day Warranty" : "Garansi 90 Hari"}</span>
        <i />
      </div>
    </section>
  </div>
);
}
