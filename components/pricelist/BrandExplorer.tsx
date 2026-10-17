"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import ServiceAccordion from "./ServiceAccordion";
import ServiceIcon from "./ServiceIcon";
import { brandImage, type ServiceType } from "@/lib/data";

interface BrandExplorerProps {
  services: ServiceType[]; // hanya service ber-Brand
  categoryName: string;
  brandIcons?: Record<string, string>;
}

/**
 * Penjelajah bertingkat pola fixmibali.com: Merk → Series → jenis service.
 * Level daun memakai ServiceAccordion yang sudah ada (judul + tabel harga).
 * Single-open per level; animasi tinggi sama dengan ServiceAccordion
 * (grid-template-rows) agar bahasanya konsisten.
 */
export default function BrandExplorer({ services, categoryName, brandIcons }: BrandExplorerProps) {
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  const [openSeries, setOpenSeries] = useState<string | null>(null);
  const [openedBrands, setOpenedBrands] = useState<Set<string>>(() => new Set());
  const [openedSeries, setOpenedSeries] = useState<Set<string>>(() => new Set());

  // Kelompokkan: Map<Brand, Map<Series, ServiceType[]>> — memoized untuk performa tinggi.
  const brands = useMemo(() => {
    const map = new Map<string, Map<string, ServiceType[]>>();
    for (const svc of services) {
      const brand = svc.Brand!;
      const series = svc.Series ?? "Semua Model";
      if (!map.has(brand)) map.set(brand, new Map());
      const seriesMap = map.get(brand)!;
      if (!seriesMap.has(series)) seriesMap.set(series, []);
      seriesMap.get(series)!.push(svc);
    }
    return map;
  }, [services]);

  const toggleBrand = (brand: string) => {
    setOpenBrand((prev) => (prev === brand ? null : brand));
    setOpenedBrands((prev) => new Set(prev).add(brand));
    setOpenSeries(null); // ganti merk = tutup series lama
  };

  const toggleSeries = (seriesKey: string) => {
    setOpenSeries((prev) => (prev === seriesKey ? null : seriesKey));
    setOpenedSeries((prev) => new Set(prev).add(seriesKey));
  };

  return (
    <div className="space-y-2.5 lg:space-y-4">
      {[...brands.entries()].map(([brand, seriesMap]) => {
        const brandOpen = openBrand === brand;
        const customBrandIcon = brandIcons?.[brand];
        // Counter merk: jumlah series bernama; merk tanpa series → jumlah service.
        const namedSeries = [...seriesMap.keys()].filter((k) => k !== "Semua Model").length;
        const svcTotal = [...seriesMap.values()].reduce((n, l) => n + l.length, 0);
        return (
          <div
            key={brand}
            data-reveal
            className="service-disclosure"
          >
            {/* ── Level 1: Merk ── */}
            <button
              type="button"
              onClick={() => toggleBrand(brand)}
              aria-expanded={brandOpen}
              className="service-trigger"
            >
              <span className="service-symbol">
                {customBrandIcon ? (
                  <ServiceIcon
                    name={customBrandIcon}
                    className="h-6 w-6 lg:h-7 lg:w-7 object-contain"
                  />
                ) : brandImage(brand) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={brandImage(brand)!}
                    alt={`Logo ${brand}`}
                    className="h-6 w-6 lg:h-7 lg:w-7 object-contain"
                    loading="lazy"
                  />
                ) : (
                  brand.charAt(0)
                )}
              </span>
              <span className="service-name">
                {brand}
              </span>
              <span className="service-count">
                {namedSeries > 0 ? `${namedSeries} series` : `${svcTotal} service`}
              </span>
              {brandOpen ? <Minus size={22} aria-hidden="true" /> : <Plus size={22} aria-hidden="true" />}
            </button>

            <div
              className="service-panel grid transition-[grid-template-rows] duration-300 ease-out"
              inert={!brandOpen}
              style={{ gridTemplateRows: brandOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                {/* Mobile: indentasi tipis (px-1.5) agar tabel di level terdalam
                    tetap lebar hampir selebar layar (pola fixmibali). */}
                <div className="service-nested space-y-2 border-t border-panel-border">
                  {openedBrands.has(brand) && [...seriesMap.entries()].map(([series, svcList]) => {
                    const seriesKey = `${brand}::${series}`;
                    const seriesOpen = openSeries === seriesKey;
                    // Merk tanpa series (Realme, Oppo, dll — pola fixmibali):
                    // service langsung di bawah merk, tanpa akordeon series.
                    if (series === "Semua Model") {
                      return (
                        <ServiceAccordion
                          key={seriesKey}
                          services={svcList}
                          categoryName={categoryName}
                          sub
                        />
                      );
                    }
                    return (
                      <div
                        key={seriesKey}
                        className="service-disclosure"
                      >
                        {/* ── Level 2: Series — chevron berputar ke bawah saat
                            terbuka (indikator panah ala fixmibali); ukuran baris
                            SAMA dengan level merk & service agar konsisten. ── */}
                        <button
                          type="button"
                          onClick={() => toggleSeries(seriesKey)}
                          aria-expanded={seriesOpen}
                          className="service-trigger"
                        >
                          <span className="service-symbol">
                            <ChevronRight
                              className={`h-[1.125rem] w-[1.125rem] lg:h-5 lg:w-5 text-primary transition-transform duration-300 ease-out ${
                                seriesOpen ? "rotate-90" : "group-hover:translate-x-0.5"
                              }`}
                              aria-hidden="true"
                            />
                          </span>
                          <span className="service-name">
                            {series}
                          </span>
                          {seriesOpen ? <Minus size={22} aria-hidden="true" /> : <Plus size={22} aria-hidden="true" />}
                        </button>

                        <div
                          className="service-panel grid transition-[grid-template-rows] duration-300 ease-out"
                          inert={!seriesOpen}
                          style={{ gridTemplateRows: seriesOpen ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            {/* ── Level 3: jenis service (ikon ↳ ala fixmibali) ── */}
                            <div className="border-t border-panel-border p-1.5 lg:p-3">
                              {openedSeries.has(seriesKey) && (
                                <ServiceAccordion
                                  services={svcList}
                                  categoryName={categoryName}
                                  sub
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
