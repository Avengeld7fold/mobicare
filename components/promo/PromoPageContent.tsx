"use client";

import { useI18n } from "@/lib/i18n/context";
import PromoViewer from "@/components/promo/PromoViewer";
import type { PromoImageItem } from "@/lib/promo-server";
import { ArrowDownRight } from "lucide-react";
import "../media-pages.css";

interface PromoPageContentProps {
  promos: PromoImageItem[];
}

export default function PromoPageContent({ promos }: PromoPageContentProps) {
  const { dict, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <main className="media-page">
      <header className="media-intro mobi-container">
        <h1>{isEn ? "Offers for" : "Promo untuk"}<span>{isEn ? "your device." : "gadgetmu."}</span></h1>
        <div className="media-intro-copy">
          <p>{dict.promo.subtitle}</p>
          <a href="#promo-list">
            {isEn ? "See current offers" : "Lihat penawaran"}
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </header>
      <section className="media-surface" id="promo-list" aria-label={isEn ? "MobiCare offers" : "Penawaran MobiCare"}>
        <div className="mobi-container">
          <div className="media-heading">
            <h2>{isEn ? "Current offers" : "Daftar penawaran"}</h2>
            <span>{String(promos.length).padStart(2, "0")} {isEn ? "offers" : "promo"}</span>
          </div>
          <PromoViewer promos={promos} />
        </div>
      </section>
    </main>
  );
}
