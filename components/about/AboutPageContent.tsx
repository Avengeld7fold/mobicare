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
      tag: dict.about.cards[0]?.tag || (isEn ? "PROFESSIONAL SERVICE" : "LAYANAN PROFESIONAL"),
      title: dict.about.cards[0]?.title || (isEn ? "Structured & Precise Workflows" : "Proses Kerja Terarah & Teliti"),
      subtitle: dict.about.cards[0]?.subtitle || (isEn ? "Attention to Detail & Device Requirements" : "Perhatian Pada Detail & Kebutuhan Perangkat"),
      src: "/images/teknisi1.webp",
      desktopOffset: "lg:self-end lg:z-10 lg:sm:-translate-x-2",
      tiltClass: "-rotate-2 sm:-rotate-3 lg:-rotate-[3.5deg]",
    },
    {
      id: 2,
      tag: dict.about.cards[1]?.tag || "ADVANCED HARDWARE",
      title: dict.about.cards[1]?.title || (isEn ? "In-Depth Component Inspection" : "Pemeriksaan Kerusakan Lanjutan"),
      subtitle: dict.about.cards[1]?.subtitle || (isEn ? "Targeted Diagnostics & Technical Expertise" : "Diagnosis Mendalam & Kapabilitas Teknisi"),
      src: "/images/fixmi-lab1.webp",
      desktopOffset: "lg:self-start lg:-ml-12 lg:z-20",
      tiltClass: "",
    },
    {
      id: 3,
      tag: dict.about.cards[2]?.tag || "POWERED BY FIXMI",
      title: dict.about.cards[2]?.title || (isEn ? "Powered by Fixmi Service Center" : "Didukung Fixmi Service Center"),
      subtitle: dict.about.cards[2]?.subtitle || (isEn ? "Proven Technical Experience & Operational Standards" : "Pengalaman Teknis & Standar Operasional Teruji"),
      src: "/images/toko1.webp",
      desktopOffset: "lg:self-end lg:z-30",
      tiltClass: "",
    },
    {
      id: 4,
      tag: dict.about.cards[3]?.tag || (isEn ? "TRUST & DATA PRIVACY" : "KEPERCAYAAN & PRIVASI"),
      title: dict.about.cards[3]?.title || (isEn ? "Data Safety & Quality Assurance" : "Keamanan Data & Kontrol Kualitas"),
      subtitle: dict.about.cards[3]?.subtitle || (isEn ? "Accountability, Care & Service Warranty" : "Tanggung Jawab, Kehati-hatian & Garansi Resmi"),
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
                {isEn ? "01 / WHO WE ARE" : "01 / TENTANG MOBICARE"}
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
                  <span className="block text-[#080c09]">PROFESSIONAL GADGET REPAIR &</span>
                  <span className="block accent-green">TECHNICAL SOLUTIONS.</span>
                </>
              ) : (
                <>
                  <span className="block text-[#080c09]">SOLUSI PERBAIKAN GADGET &</span>
                  <span className="block accent-green">DUKUNGAN TEKNIS.</span>
                </>
              )}
            </h2>

            {/* Narrative Overview */}
            <p className="editorial-copy text-base sm:text-lg leading-relaxed text-[#2e332f] mb-8 font-sans">
              {isEn
                ? "MobiCare Service Center is a digital device repair and technical support brand. We are committed to delivering professional, informative, and customer-oriented service experiences. Great service not only resolves device issues, but also ensures customers understand the process and options available."
                : "MobiCare Service Center merupakan brand layanan perbaikan dan dukungan teknis perangkat digital. Kami berkomitmen menghadirkan pengalaman servis yang profesional, informatif, dan berorientasi pada kebutuhan pelanggan. Layanan yang baik bukan hanya menyelesaikan masalah perangkat, tetapi juga membuat pelanggan memahami proses dan pilihan yang tersedia."}
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

            {/* ── 3 Core Pillars From Company Profile ── */}
            <div className="editorial-points-border space-y-7 pt-6 border-t border-[#e5e8e5]">
              {/* Point 01: Professional Service */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="editorial-point-kicker font-mono text-xs uppercase tracking-[0.14em] text-[var(--mobi-green)] font-bold">
                    01 / {isEn ? "PROFESSIONAL SERVICE" : "LAYANAN PROFESIONAL"}
                  </span>
                </div>
                <h3 className="editorial-point-title text-base sm:text-lg font-bold text-[#080c09] tracking-tight">
                  {isEn
                    ? "Structured Workflows & Meticulous Attention to Detail"
                    : "Proses Kerja Terarah & Perhatian Pada Detail"}
                </h3>
                <p className="editorial-point-desc text-xs sm:text-sm leading-relaxed text-[#4f5752]">
                  {isEn
                    ? "Structured workflows with thorough attention to detail and device specifications, ensuring targeted diagnostics and meticulous handling from intake to final handover."
                    : "Setiap tahapan servis dijalankan dengan terarah dan teliti, memperhatikan kondisi awal, kebutuhan spesifik perangkat, serta kehati-hatian penuh dari pemeriksaan hingga serah terima."}
                </p>
              </div>

              {/* Point 02: Clear Communication */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="editorial-point-kicker font-mono text-xs uppercase tracking-[0.14em] text-[var(--mobi-green)] font-bold">
                    02 / {isEn ? "CLEAR COMMUNICATION" : "KOMUNIKASI JELAS"}
                  </span>
                </div>
                <h3 className="editorial-point-title text-base sm:text-lg font-bold text-[#080c09] tracking-tight">
                  {isEn
                    ? "Upfront Diagnostics, Repair Options & Clear Estimates"
                    : "Penjelasan Diagnosis, Opsi & Estimasi Sebelum Pengerjaan"}
                </h3>
                <p className="editorial-point-desc text-xs sm:text-sm leading-relaxed text-[#4f5752]">
                  {isEn
                    ? "Explaining diagnostic findings and estimates in straightforward language. We provide clear repair options, exact cost estimates, and timelines before any work begins."
                    : "Menjelaskan hasil diagnosis dan estimasi biaya secara transparan dengan bahasa yang mudah dipahami. Pelanggan mendapatkan opsi tindakan dan estimasi waktu sebelum perbaikan disetujui."}
                </p>
              </div>

              {/* Point 03: Trust & Data Privacy */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="editorial-point-kicker font-mono text-xs uppercase tracking-[0.14em] text-[var(--mobi-green)] font-bold">
                    03 / {isEn ? "TRUST & PRIVACY" : "KEPERCAYAAN & KEAMANAN DATA"}
                  </span>
                </div>
                <h3 className="editorial-point-title text-base sm:text-lg font-bold text-[#080c09] tracking-tight">
                  {isEn
                    ? "Prioritizing Accountability, Care & Customer Privacy"
                    : "Mengutamakan Tanggung Jawab, Kehati-hatian & Privasi Pelanggan"}
                </h3>
                <p className="editorial-point-desc text-xs sm:text-sm leading-relaxed text-[#4f5752]">
                  {isEn
                    ? "We prioritize rigorous care for customer devices and personal information. Data access and device handling strictly adhere to customer consent and standard operating procedures."
                    : "Kami mengedepankan kehati-hatian terhadap perangkat dan informasi pelanggan. Penanganan perangkat serta akses data selalu mengikuti persetujuan pelanggan dan prosedur operasional yang berlaku."}
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
