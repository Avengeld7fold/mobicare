"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Plus, Minus } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import PriceTable from "./PriceTable";
import type { ServiceType } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedServiceName } from "@/lib/i18n/service-translation";

interface ServiceAccordionProps {
  services: ServiceType[];
  categoryName: string;
  /** true = level anak di dalam series/merk (pola fixmibali): ikon ↳ tanpa chip. */
  sub?: boolean;
}

export default function ServiceAccordion({ services, categoryName, sub = false }: ServiceAccordionProps) {
  const { locale } = useI18n();
  // Single-open. State lokal di sini; parent me-remount lewat key={activeSlug}
  // saat kategori berganti → akordeon otomatis tertutup tanpa effect (§3.1.3).
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  // Lazy Mount + State Retention: lacak slug mana saja yang pernah dibuka 1x.
  const [openedSlugs, setOpenedSlugs] = useState<Set<string>>(() => new Set());

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
    if (!openedSlugs.has(slug)) {
      setOpenedSlugs((prev) => new Set(prev).add(slug));
    }
  };

  // Animate only the initially visible rows; keep sticky cells in their native scroll context.
  const listRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (!openSlug || !listRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rows = [...listRef.current.querySelectorAll(`#svc-panel-${openSlug} tbody tr`)].slice(0, 10);
      if (!rows.length) return;
      gsap.fromTo(
        rows,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.28,
          stagger: 0.015,
          delay: 0.08,
          ease: "power2.out",
          clearProps: "opacity",
        }
      );
    },
    { dependencies: [openSlug], scope: listRef, revertOnUpdate: true }
  );

  if (services.length === 0) return null;

  return (
    <div ref={listRef} className="space-y-2 lg:space-y-2.5">
      {services.map((service) => {
        const open = openSlug === service.Slug;
        const hasBeenOpened = openedSlugs.has(service.Slug);
        const btnId = `svc-btn-${service.Slug}`;
        const panelId = `svc-panel-${service.Slug}`;

        return (
          <div
            key={service.Slug}
            data-reveal
            className="service-disclosure"
          >
            <button
              id={btnId}
              type="button"
              onClick={() => toggle(service.Slug)}
              aria-expanded={open}
              aria-controls={panelId}
              className="service-trigger"
            >
              <span
                className="service-symbol"
              >
                <ServiceIcon name={service.icon} className="h-4 w-4 lg:h-[1.125rem] lg:w-[1.125rem] text-primary" />
              </span>
              <span className="service-name">
                {getLocalizedServiceName(service, locale)}
              </span>
              <span className="service-action" aria-hidden="true">
                <span>{open ? (locale === "en" ? "Close" : "Tutup") : (locale === "en" ? "View prices" : "Lihat harga")}</span>
                {open ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            {/* Panel ekspansi — Lazy Mount + State Retention: PriceTable hanya di-mount jika pernah dibuka 1x */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              inert={!open}
              className="service-panel grid transition-[grid-template-rows] duration-300 ease-out"
              style={{
                gridTemplateRows: open ? "1fr" : "0fr",
                contentVisibility: open ? "visible" : "auto",
              }}
            >
              <div className="overflow-hidden">
                {hasBeenOpened && (
                  <div
                    className="service-panel-content px-2 pb-2.5 lg:px-4 lg:pb-4"
                  >
                    <PriceTable service={service} categoryName={categoryName} sub={sub} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
