"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

interface AboutHeroProps {
  imageSrc?: string;
}

export default function AboutHero({ imageSrc = "/images/mobi-team.webp" }: AboutHeroProps) {
  const { locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className="about-hero" aria-label={isEn ? "About MobiCare Hero" : "Tentang MobiCare Hero"}>
      {/* Background Team Photo */}
      <Image
        src={imageSrc}
        alt={isEn ? "MobiCare Service Center Master Technicians Team" : "Tim Teknisi Ahli MobiCare Service Center Bali"}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Gradient Overlay Shade */}
      <div className="about-hero-shade" aria-hidden="true" />

      {/* Hero Typography & Kicker */}
      <div className="about-hero-copy">
        <p className="kicker">
          {isEn ? "about mobicare" : "tentang mobicare"}
        </p>

        <h1>
          <span>MobiCare</span>
          <span>
            Service Center<em>.</em>
          </span>
        </h1>

        <p className="about-hero-sub">
          {isEn ? "Your Device. Our Expertise. Your Trust." : "Your Device. Our Expertise. Your Trust."}
        </p>
      </div>
    </section>
  );
}
