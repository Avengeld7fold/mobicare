"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import CategoryCards from "./CategoryCards";
import ServiceAccordion from "./ServiceAccordion";
import BrandExplorer from "./BrandExplorer";
import WarrantyModal from "./WarrantyModal";
import { useI18n } from "@/lib/i18n/context";
import { whatsappUrl } from "@/lib/constants";
import type { Category } from "@/lib/data";

export default function PricelistExplorer({
  categories,
  activeCategory,
  lastUpdated,
}: {
  categories: Pick<Category, "Name" | "Slug" | "Image">[];
  activeCategory: Category;
  lastUpdated?: string;
}) {
  const router = useRouter();
  const { dict, getLocalizedPath } = useI18n();
  const [warrantyOpen, setWarrantyOpen] = useState(false);

  const activeSlug = activeCategory.Slug;

  // Backward compatibility: jika user mengakses url lama ?device=slug, redirect mulus ke clean path tanpa butuh useSearchParams hook
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      const legacyParam = sp.get("device");
      if (legacyParam && categories.some((category) => category.Slug === legacyParam)) {
        router.replace(getLocalizedPath(`/pricelist/${legacyParam}`), { scroll: false });
      }
    }
  }, [categories, router, getLocalizedPath]);

  const hasPricingData = activeCategory.service_types.length > 0;

  const selectCategory = (slug: string) => {
    if (slug === activeSlug) return;
    router.push(getLocalizedPath(`/pricelist/${slug}`), { scroll: false });
  };

  return (
    <div className="mobi-container mobi-pricelist">
      <header className="price-opening">
        <h1 className="price-opening-title">
          {dict.locale === "en" ? "REPAIR COSTS." : "BIAYA SERVIS."}
          <br />
          <span>{dict.locale === "en" ? "MADE CLEAR." : "LEBIH JELAS."}</span>
        </h1>
        <div className="price-opening-copy">
          <p>{dict.locale === "en"
            ? "Find the repair price for your device. Choose a category, explore services, then search for your model."
            : "Cari tahu biaya perbaikan perangkatmu. Pilih perangkat, lihat layanan, lalu temukan harga untuk modelmu."}</p>
          <button type="button" className="price-opening-warranty" onClick={() => setWarrantyOpen(true)}>
            <ShieldCheck size={20} aria-hidden="true" />
            <span>{dict.pricelist.warrantyDetailsBtn}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          {lastUpdated && <p className="price-opening-date">{lastUpdated}</p>}
        </div>
      </header>

      <section className="price-device-gallery" aria-labelledby="price-category-title">
        <div className="price-gallery-heading">
          <h2 id="price-category-title">{dict.locale === "en" ? "Which device needs care?" : "Perangkat mana yang perlu dirawat?"}</h2>
          <p>{dict.locale === "en" ? "Choose yours to explore repair prices." : "Pilih perangkatmu untuk melihat daftar layanan."}</p>
        </div>
        <CategoryCards categories={categories} activeSlug={activeSlug} onSelect={selectCategory} />
      </section>

      {/* Daftar jenis service / empty-state. Service ber-Brand (pola Android
          fixmibali.com) dirender bertingkat Merk → Series → service; service
          tanpa Brand tetap daftar akordeon datar. Keduanya bisa hidup
          berdampingan dalam satu kategori. */}
      <div key={activeSlug} className="price-services">
        <div className="price-section-heading">
          <h2>{dict.locale === "en" ? "Care for your" : "Perawatan untuk"}<br /><span>{activeCategory.Name}{dict.locale === "en" ? "." : "-mu."}</span></h2>
          <p>{dict.locale === "en"
            ? "Choose a repair to see prices for your model."
            : "Pilih perbaikan yang kamu butuhkan, lalu temukan harga untuk model perangkatmu."}</p>
        </div>
        {hasPricingData ? (
          <>
            {activeCategory.service_types.some((s) => s.Brand) && (
              <BrandExplorer
                services={activeCategory.service_types.filter((s) => Boolean(s.Brand))}
                categoryName={activeCategory.Name}
                brandIcons={activeCategory.brand_icons}
              />
            )}
            {activeCategory.service_types.some((s) => !s.Brand) && (
              <div className={activeCategory.service_types.some((s) => s.Brand) ? "mt-2 lg:mt-2.5" : ""}>
                <ServiceAccordion
                  services={activeCategory.service_types.filter((s) => !s.Brand)}
                  categoryName={activeCategory.Name}
                />
              </div>
            )}
          </>
        ) : (
          /* ── Empty State Banner (Signature MobiCare System) ── */
          <div className="mobi-unlisted-card">
            <div className="mobi-unlisted-glow" aria-hidden="true" />
            <div className="mobi-unlisted-mark" aria-hidden="true">
              <Image
                src="/mobicare-mark.png"
                alt=""
                width={140}
                height={140}
                unoptimized
              />
            </div>

            <div className="mobi-unlisted-inner">
              <div className="mobi-unlisted-copy">
                {/* Status Pill Badge */}
                <div className="mobi-unlisted-kicker">
                  <span className="mobi-unlisted-dot" aria-hidden="true" />
                  <span>{dict.pricelist.emptyTitle}</span>
                </div>

                <h3 className="mobi-unlisted-title">
                  {dict.locale === "en" ? (
                    <>
                      {activeCategory?.Name ?? "Device"} Price List{" "}
                      <span className="mobi-unlisted-highlight">Coming Soon</span>
                    </>
                  ) : (
                    <>
                      Daftar Harga {activeCategory?.Name ?? "Perangkat"}{" "}
                      <span className="mobi-unlisted-highlight">Belum Tersedia</span>
                    </>
                  )}
                </h3>

                <p className="mobi-unlisted-desc">
                  {dict.pricelist.emptyDescription}
                </p>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={whatsappUrl(
                  dict.locale === "en"
                    ? `Hello MobiCare Service Center, I would like to inquire about repair costs for ${activeCategory?.Name ?? "Gadget"}:\n\n• Model: \n• Issue / Damage: `
                    : `Halo MobiCare Service Center, saya ingin menanyakan estimasi biaya servis untuk kategori ${activeCategory?.Name ?? "Gadget"}:\n\n• Tipe / Model: \n• Kendala / Kerusakan: `
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mobi-unlisted-btn"
              >
                <MessageCircle className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                <span>{dict.pricelist.emptyCtaBtn}</span>
                <ArrowRight
                  className="h-4 w-4 mobi-unlisted-arrow"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        )}
      </div>

      <WarrantyModal open={warrantyOpen} onClose={() => setWarrantyOpen(false)} />
    </div>
  );
}
