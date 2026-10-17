"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n/context";
import AboutHero from "./AboutHero";
import AboutDifference from "./AboutDifference";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StackPhoto {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  src: string;
  desktopOffset: string;
  tiltClass: string;
}

export default function AboutPageContent() {
  const { dict, locale } = useI18n();
  const isEn = locale === "en";

  const containerRef = useRef<HTMLDivElement>(null);
  const leftStickyRef = useRef<HTMLDivElement>(null);
  const rightStackRef = useRef<HTMLDivElement>(null);

  const stackPhotos: StackPhoto[] = [
    {
      id: 1,
      tag: dict.about.cards[0]?.tag || "SERVICE CENTER",
      title: dict.about.cards[0]?.title || (isEn ? "Certified Master Technicians" : "Teknisi Ahli & Bersertifikasi"),
      subtitle: dict.about.cards[0]?.subtitle || (isEn ? "Industry Experience Since August 2014" : "Pengalaman Sejak Agustus 2014"),
      src: "/images/teknisi-2.webp",
      desktopOffset: "lg:self-end lg:z-10 lg:sm:-translate-x-2",
      tiltClass: "-rotate-2 sm:-rotate-3 lg:-rotate-[3.5deg]",
    },
    {
      id: 2,
      tag: dict.about.cards[1]?.tag || "MICROSOLDER LAB",
      title: dict.about.cards[1]?.title || (isEn ? "Hardware Lab & Microsoldering" : "Hardware Lab & Mikrosolder"),
      subtitle: dict.about.cards[1]?.subtitle || (isEn ? "Chip-Level & Motherboard Recovery" : "Penanganan Motherboard & Chip-Level"),
      src: "/images/fixmi-lab1.webp",
      desktopOffset: "lg:self-start lg:-ml-12 lg:z-20",
      tiltClass: "",
    },
    {
      id: 3,
      tag: dict.about.cards[2]?.tag || "INTEGRATED ECOSYSTEM",
      title: dict.about.cards[2]?.title || (isEn ? "Bali Smart Device Hub" : "Pusat Solusi Gadget Bali"),
      subtitle: dict.about.cards[2]?.subtitle || (isEn ? "Kedonganan, Kuta, and Denpasar" : "Kedonganan, Kuta, dan Denpasar"),
      src: "/images/toko1.webp",
      desktopOffset: "lg:self-end lg:z-30",
      tiltClass: "",
    },
    {
      id: 4,
      tag: dict.about.cards[3]?.tag || "QUALITY ASSURANCE",
      title: dict.about.cards[3]?.title || (isEn ? "Precision & Official Warranty" : "Presisi & Garansi Resmi"),
      subtitle: dict.about.cards[3]?.subtitle || (isEn ? "iPhone, Android, and MacBook" : "iPhone, Android, dan MacBook"),
      src: "/images/spareparts.webp",
      desktopOffset: "lg:self-start lg:-ml-8 lg:z-40",
      tiltClass: "",
    },
  ];

  // GSAP Desktop Stacking & Parallax Animation
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        if (!rightStackRef.current) return;

        const items = rightStackRef.current.querySelectorAll(".stack-photo-item");
        if (!items.length) return;

        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              y: 50 * (index + 1),
              opacity: 0.85,
              scale: 0.95,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "top 40%",
                scrub: 1.2,
              },
            }
          );
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <main className="min-h-screen bg-white text-[#080c09] overflow-x-clip">
      {/* ── Section 1: Fastrack-inspired Hero Section with Team Photo ── */}
      <AboutHero />

      {/* ── Section 2: 2-Column Grid (Sticky Editorial Story & 4 Workshop Cards) ── */}
      <section
        ref={containerRef}
        className="about-editorial relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-28"
      >
        {/* ── 2-Column Grid Layout: Left Sticky Narrative & Right Scrolling Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* ── Left Column: Sticky Editorial Story & Dummy Information ── */}
          <div
            ref={leftStickyRef}
            className="lg:col-span-6 lg:sticky lg:top-28 flex flex-col justify-start lg:pr-4"
          >
            {/* Category Pill / Eyebrow */}
            <div className="mb-4 flex items-center gap-2.5">
              <span
                className="inline-block h-2 w-2 rounded-full bg-[var(--mobi-green)]"
                aria-hidden="true"
              />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mobi-green)] font-bold">
                {isEn ? "EXPERTISE & REPUTATION" : "KEAHLIAN & REPUTASI"}
              </span>
            </div>

            {/* Display Headline */}
            <h2
              style={{
                fontFamily: "var(--font-gobold), sans-serif",
                fontWeight: 400,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
              }}
              className="text-[clamp(2.125rem,5.5vw,3.75rem)] text-[#080c09] mb-6"
            >
              {isEn ? (
                <>
                  <span className="block text-[#080c09]">DEDICATION TO</span>
                  <span className="block accent-green">PRECISION.</span>
                </>
              ) : (
                <>
                  <span className="block text-[#080c09]">DEDIKASI UNTUK</span>
                  <span className="block accent-green">PRESISI.</span>
                </>
              )}
            </h2>

            {/* Narrative Overview */}
            <p className="editorial-copy text-base sm:text-lg leading-relaxed text-[#2e332f] mb-8 font-sans">
              {isEn
                ? "MobiCare is your premier smart device service center in Bali. We combine transparent diagnostics, certified micro-electronics craftsmanship, and genuine-grade components to keep your technology performing at its highest potential."
                : "MobiCare hadir sebagai pusat perbaikan dan pemeliharaan perangkat pintar terpercaya di Bali. Kami memadukan diagnosa terbuka, ketelitian teknisi bersertifikasi, serta kepastian suku cadang bergaransi resmi untuk menjaga performa optimal gadget Anda."}
            </p>

            {/* Action CTA Button */}
            <div className="mb-10 sm:mb-12">
              <Link
                className="mobi-button mobi-button--primary inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold tracking-wider uppercase transition-transform hover:-translate-y-0.5"
                href={isEn ? "/en/pricelist" : "/pricelist"}
              >
                <span>{isEn ? "View price list" : "Lihat price list"}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* ── Dummy Editorial Points Below CTA Button ── */}
            <div className="editorial-points-border space-y-7 pt-6 border-t border-[#e5e8e5]">
              {/* Point 01: Transparent Diagnostics */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="editorial-point-kicker font-mono text-xs uppercase tracking-[0.14em] text-[var(--mobi-green)] font-bold">
                    01 / {isEn ? "THE DRIVE" : "STANDAR DIAGNOSA TERBUKA"}
                  </span>
                </div>
                <h3 className="editorial-point-title text-base sm:text-lg font-bold text-[#080c09] tracking-tight">
                  {isEn
                    ? "Upfront Diagnostics & Zero Hidden Surcharges"
                    : "Pemeriksaan Menyeluruh Tanpa Biaya Tersembunyi"}
                </h3>
                <p className="editorial-point-desc text-xs sm:text-sm leading-relaxed text-[#4f5752]">
                  {isEn
                    ? "Every repair at MobiCare begins with a thorough inspection in front of the customer. We outline the core hardware issue, determine cost estimates upfront, and safeguard the absolute privacy of your device data."
                    : "Setiap pengerjaan di MobiCare berlandaskan kejujuran teknis. Kami memeriksa perangkat langsung di hadapan Anda, memberikan rincian estimasi biaya secara transparan sebelum pengerjaan dimulai, dan menjamin keamanan penuh data pribadi Anda."}
                </p>
              </div>

              {/* Point 02: Hardware Lab & Microsoldering */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="editorial-point-kicker font-mono text-xs uppercase tracking-[0.14em] text-[var(--mobi-green)] font-bold">
                    02 / {isEn ? "HARDWARE LAB" : "LAB MIKROSOLDER & CHIP-LEVEL"}
                  </span>
                </div>
                <h3 className="editorial-point-title text-base sm:text-lg font-bold text-[#080c09] tracking-tight">
                  {isEn
                    ? "Microsoldering Lab & Cleanroom Equipment"
                    : "Rekonstruksi Motherboard & Penanganan IC Presisi"}
                </h3>
                <p className="editorial-point-desc text-xs sm:text-sm leading-relaxed text-[#4f5752]">
                  {isEn
                    ? "Equipped with high-precision digital microscopes and ESD-safe cleanroom tools, our certified technicians solve logic board issues, IC replacements, and circuit repairs beyond ordinary repair shops."
                    : "Didukung stasiun mikroskop digital dan instrumen elektrostatik standar industri, tim teknisi kami menguasai perbaikan tingkat komponen pada logic board iPhone, Android, dan MacBook yang membutuhkan ketelitian tingkat mikron."}
                </p>
              </div>

              {/* Point 03: Documented Warranty */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="editorial-point-kicker font-mono text-xs uppercase tracking-[0.14em] text-[var(--mobi-green)] font-bold">
                    03 / {isEn ? "WARRANTY & TRUST" : "JAMINAN GARANSI & INTEGRITAS"}
                  </span>
                </div>
                <h3 className="editorial-point-title text-base sm:text-lg font-bold text-[#080c09] tracking-tight">
                  {isEn
                    ? "Certified Spare Parts & Official Post-Service Guarantee"
                    : "Suku Cadang Teruji & Jaminan Perlindungan Resmi"}
                </h3>
                <p className="editorial-point-desc text-xs sm:text-sm leading-relaxed text-[#4f5752]">
                  {isEn
                    ? "We strictly source durable, original-specification spare parts accompanied by documented warranty terms. Peace of mind and post-repair confidence remain our uncompromised promise."
                    : "Kami hanya menyediakan komponen pilihan bersertifikasi dengan daya tahan teruji. Setiap perbaikan dilindungi jaminan garansi resmi tertulis, memberikan ketenangan dan kepastian bagi setiap pemilik perangkat."}
                </p>
              </div>
            </div>

          </div>

          {/* ── Right Column: 4 Scrolling Cards (Mobile Slider / Desktop Vertical Parallax Stack) ── */}
          <div
            ref={rightStackRef}
            className="lg:col-span-6 w-full"
          >
            {/* Mobile / Tablet Horizontal Scroll Notice */}
            <div className="workshop-hint flex lg:hidden items-center justify-between mb-4 text-[#68726b] font-mono text-xs uppercase tracking-wider px-1">
              <span>{dict.about.workshopHint || (isEn ? "WORKSHOP DOCUMENTATION" : "DOKUMENTASI WORKSHOP")}</span>
              <span className="hint-accent text-[var(--mobi-green)] font-semibold flex items-center gap-1.5">
                <span>{dict.about.swipeHint || (isEn ? "Swipe Horizontal" : "Geser Horizontal")}</span>
                <MoveRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>

            {/* Cards Container: Horizontal Snap on Mobile/Tablet (<lg), Overlapping Vertical Stack on Desktop (lg:) */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none gap-4 sm:gap-6 lg:gap-0 lg:space-y-[-130px] pb-6 lg:pb-0 pt-1 lg:pt-8 -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 scrollbar-none items-stretch">
              {stackPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className={`stack-photo-item relative w-[80vw] sm:w-[52vw] md:w-[44vw] lg:w-[84%] shrink-0 lg:shrink snap-center lg:snap-align-none ${photo.desktopOffset}`}
                >
                  <div
                    className={`stack-photo-card group relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0c0c] shadow-[0_16px_40px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out hover:border-[var(--mobi-green)]/60 hover:shadow-[0_24px_60px_rgba(0,166,81,0.22)] hover:rotate-0 origin-center ${photo.tiltClass}`}
                  >
                    {/* Photo Image: Grayscale by default, Full Color & Scale on Hover */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover grayscale contrast-105 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                        priority={photo.id === 1}
                      />

                      {/* Vignette Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                      {/* Top Tag Badge */}
                      <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 rounded-full border border-white/20 bg-black/60 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[0.625rem] sm:text-[0.6875rem] tracking-wider text-white backdrop-blur-md">
                        {photo.tag}
                      </div>

                      {/* Bottom Title & Subtitle */}
                      <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                        <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-[-0.01em] leading-snug">
                          {photo.title}
                        </h4>
                        <p className="mt-0.5 text-[0.6875rem] sm:text-xs text-neutral-300">
                          {photo.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── Built Different / Our Difference Section (from fastracksales.com) ── */}
      <AboutDifference />
    </main>
  );
}
