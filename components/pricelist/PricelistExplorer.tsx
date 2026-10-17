"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
              <div className={activeCategory.service_types.some((s) => s.Brand) ? "mt-2.5 lg:mt-4" : ""}>
                <ServiceAccordion
                  services={activeCategory.service_types.filter((s) => !s.Brand)}
                  categoryName={activeCategory.Name}
                />
              </div>
            )}
          </>
        ) : (
          /* ── Ultra-Clean Snug Banner (Model 1: Minimalist, No AI Slop, In Harmony with Category Cards) ── */
          <div className="relative overflow-hidden rounded-[16px] lg:rounded-[20px] border border-panel-border bg-panel p-5 sm:p-6 lg:py-7 lg:px-8 transition-colors duration-200">
            <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                {/* Status Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[0.6875rem] font-mono tracking-wider text-neutral-300 uppercase mb-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{dict.pricelist.emptyTitle}</span>
                </div>

                <h3
                  className="font-display text-xl sm:text-2xl lg:text-[1.75rem] text-white uppercase tracking-tight leading-tight"
                  style={{ fontFamily: "var(--mobi-text)" }}
                >
                  {dict.locale === "en" ? (
                    <>
                      {activeCategory?.Name ?? "Device"} Price List{" "}
                      <span className="text-primary">Coming Soon</span>
                    </>
                  ) : (
                    <>
                      Daftar Harga {activeCategory?.Name ?? "Perangkat"}{" "}
                      <span className="text-primary">Belum Tersedia</span>
                    </>
                  )}
                </h3>

                <p
                  className="mt-2 text-xs sm:text-sm leading-relaxed text-text-secondary max-w-xl"
                  style={{ fontFamily: "var(--mobi-text)" }}
                >
                  {dict.pricelist.emptyDescription}
                </p>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={whatsappUrl(
                  dict.locale === "en"
                    ? `Hello FIXMI Service Center, I would like to inquire about repair costs for ${activeCategory?.Name ?? "Gadget"}:\n\n• Model: \n• Issue / Damage: `
                    : `Halo FIXMI Service Center, saya ingin menanyakan estimasi biaya servis untuk kategori ${activeCategory?.Name ?? "Gadget"}:\n\n• Tipe / Model: \n• Kendala / Kerusakan: `
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2.5 rounded-xl bg-primary px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-white tracking-[-0.01em] transition-all duration-150 ease-out hover:bg-primary-light hover:brightness-105 active:scale-[0.98] shadow-[0_4px_16px_rgba(255,107,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <MessageCircle className="h-4 w-4 text-white stroke-[2]" aria-hidden="true" />
                <span>{dict.pricelist.emptyCtaBtn}</span>
                <ArrowRight
                  className="h-3.5 w-3.5 text-white/80 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:text-white"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ── CTA Konversi — Snug Banner Style (Seragam dengan Model 1, HANYA tampil bila daftar layanan ADA di atasnya) ── */}
      {hasPricingData && (
        <div
          className="relative mt-10 sm:mt-14 md:mt-16 lg:mt-20 overflow-hidden rounded-[16px] lg:rounded-[20px] border border-panel-border bg-panel p-5 sm:p-6 lg:py-7 lg:px-8 transition-colors duration-200"
        >
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[0.6875rem] font-mono tracking-wider text-neutral-300 uppercase mb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{dict.pricelist.unlistedBadge}</span>
              </div>

              <h3
                className="font-display text-xl sm:text-2xl lg:text-[1.75rem] text-white uppercase tracking-tight leading-tight"
                style={{ fontFamily: "var(--mobi-text)" }}
              >
                {dict.locale === "en" ? (
                  <>
                    Device Model{" "}
                    <span className="text-primary">Not Listed Above?</span>
                  </>
                ) : (
                  <>
                    Tipe Perangkat Anda{" "}
                    <span className="text-primary">Belum Tercantum di Atas?</span>
                  </>
                )}
              </h3>

              <p
                className="mt-2 text-xs sm:text-sm leading-relaxed text-text-secondary max-w-xl"
                style={{ fontFamily: "var(--mobi-text)" }}
              >
                {dict.pricelist.unlistedDescription}
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={whatsappUrl(
                dict.locale === "en"
                  ? `Hello FIXMI Service Center, my device model is not listed in the website pricelist. I would like to inquire about repair costs:\n\n• Category: ${activeCategory?.Name ?? "Gadget"}\n• Device Model: \n• Issue / Damage: `
                  : `Halo FIXMI Service Center, tipe perangkat saya belum ada di daftar harga website. Saya mau tanya estimasi biaya servis:\n\n• Kategori: ${activeCategory?.Name ?? "Gadget"}\n• Tipe / Seri Model: \n• Kendala / Kerusakan: `
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2.5 rounded-xl bg-primary px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-white tracking-[-0.01em] transition-all duration-150 ease-out hover:bg-primary-light hover:brightness-105 active:scale-[0.98] shadow-[0_4px_16px_rgba(255,107,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <MessageCircle className="h-4 w-4 text-white stroke-[2]" aria-hidden="true" />
              <span>{dict.pricelist.unlistedCtaBtn}</span>
              <ArrowRight
                className="h-3.5 w-3.5 text-white/80 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:text-white"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      )}

      <WarrantyModal open={warrantyOpen} onClose={() => setWarrantyOpen(false)} />
    </div>
  );
}
