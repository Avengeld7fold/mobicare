"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import MobiCareLottiePlayer from "@/components/home/MobiCareLottiePlayer";

export default function HomeWhoWeAre() {
  const { locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="home-who" aria-labelledby="home-who-heading">
      <div className="home-who-inner">
        {/* Left Column: Dynamic MobiCare Lottie Motion Graphic with Vertical Type */}
        <div className="who-media">
          <MobiCareLottiePlayer />
          <span className="who-vertical-type" aria-hidden="true">
            {isEn ? "DEDICATED EXPERTISE & INTEGRITY" : "DEDIKASI TEKNIK & KEPERCAYAAN"}
          </span>
        </div>

        {/* Right Column: Editorial Copy */}
        <div className="who-copy">
          <p className="who-kicker">
            {isEn ? "who we are" : "siapa kami"}
          </p>

          <h2 id="home-who-heading">
            {isEn
              ? "MobiCare Service Center is a modern device repair specialist built on precision and trust"
              : "MobiCare Service Center adalah spesialis servis gadget modern dengan standar presisi dan transparansi"}
          </h2>

          <p>
            {isEn
              ? "We make it easy to repair smartphones and laptops while ensuring every device is handled with open diagnostics and care."
              : "Kami memudahkan perbaikan smartphone dan laptop Anda, memastikan setiap perangkat ditangani dengan diagnosa terbuka dan ketelitian tinggi."}
          </p>

          <p>
            {isEn
              ? "Combining technical expertise with integrity, MobiCare delivers transparency, precision, and trust."
              : "Memadukan keahlian teknis dan integritas, MobiCare menghadirkan transparansi, presisi, dan garansi."}
          </p>

          <p>
            {isEn
              ? "Your home for precision."
              : "Pusat servis presisi Anda."}
          </p>

          <Link href={getLocalizedPath("/about")} className="who-btn">
            {isEn ? "About MobiCare" : "Tentang MobiCare"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
