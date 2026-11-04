"use client";

import { useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n/context";
import styles from "./AboutPageContent.module.css";

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

interface NarrativePoint {
  number: string;
  title: string;
  description: string;
}

export default function AboutCards() {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const rightStackRef = useRef<HTMLDivElement>(null);

  const stackPhotos: StackPhoto[] = [
    {
      id: 1,
      tag: isEn ? "TECHNICAL MASTERY" : "LAYANAN PROFESIONAL",
      title: isEn ? "Master Technical Team" : "Tim Teknis Berpengalaman",
      subtitle: isEn
        ? "In-depth hardware diagnostics & precision workbench"
        : "Pemeriksaan teliti & pengerjaan terarah di meja servis",
      src: "/images/teknisi-mobi2.webp",
      desktopOffset: "lg:self-end lg:z-10 lg:sm:-translate-x-2",
      tiltClass: "-rotate-2 sm:-rotate-3 lg:-rotate-[3.5deg]",
    },
    {
      id: 2,
      tag: isEn ? "CLEAR WORKFLOW" : "PROSES JELAS",
      title: isEn ? "Structured Device Intake & Testing" : "Alur Perbaikan Rapi & Terarah",
      subtitle: isEn
        ? "From device registration to complete multi-point verification"
        : "Dari registrasi unit hingga pengujian menyeluruh sebelum serah terima",
      src: "/images/teknisi-mobi3.webp",
      desktopOffset: "lg:self-start lg:-ml-12 lg:z-20",
      tiltClass: "",
    },
    {
      id: 3,
      tag: isEn ? "DOCUMENTED PARTS" : "ESTIMASI TRANSPARAN",
      title: isEn ? "Transparent Estimates & Tested Parts" : "Diagnosis Terbuka & Komponen Teruji",
      subtitle: isEn
        ? "Clear options explained before work begins with official warranty"
        : "Pilihan perbaikan dan rincian biaya dipaparkan sebelum disetujui",
      src: "/images/cs-mobi.webp",
      desktopOffset: "lg:self-end lg:z-30",
      tiltClass: "",
    },
    {
      id: 4,
      tag: isEn ? "DATA PRIVACY" : "KEPERCAYAAN & PRIVASI",
      title: isEn ? "Customer Trust & Confidentiality" : "Keamanan Data & Tanggung Jawab",
      subtitle: isEn
        ? "Handling devices and sensitive data with strict responsibility"
        : "Perangkat dan informasi pelanggan dijaga dengan standar integritas tinggi",
      src: "/images/mobishop.webp",
      desktopOffset: "lg:self-start lg:-ml-8 lg:z-40",
      tiltClass: "",
    },
  ];

  const narrativePoints: NarrativePoint[] = isEn
    ? [
        {
          number: "01",
          title: "Technical Team",
          description:
            "Proven technical and operational experience behind MobiCare's service. Every hardware diagnosis and precision repair is executed by trained technicians on dedicated benches.",
        },
        {
          number: "02",
          title: "Clear Process",
          description:
            "A structured journey from intake registration, diagnostic bench examination, through to final multi-point functional verification before handover.",
        },
        {
          number: "03",
          title: "Transparent Estimates",
          description:
            "Open diagnostics with no hidden costs. Repair options, parts grades, and itemized fee estimates are explained and approved upfront.",
        },
        {
          number: "04",
          title: "Privacy Respected",
          description:
            "Customer devices, sensitive files, and personal data are handled with rigorous confidentiality, care, and documented accountability.",
        },
      ]
    : [
        {
          number: "01",
          title: "Tim Teknis",
          description:
            "Pengalaman teknis dan operasional nyata di balik layanan MobiCare. Setiap diagnosa komponen dan perbaikan presisi dikerjakan langsung oleh teknisi terlatih.",
        },
        {
          number: "02",
          title: "Proses Jelas",
          description:
            "Alur kerja terstruktur sejak penerimaan unit, pemeriksaan di meja servis, hingga pengujian fungsional menyeluruh sebelum serah terima kepada pelanggan.",
        },
        {
          number: "03",
          title: "Estimasi Transparan",
          description:
            "Diagnosis terbuka tanpa biaya tersembunyi. Opsi tindakan perbaikan, kualitas komponen, dan estimasi biaya dirinci jelas sebelum pengerjaan disetujui.",
        },
        {
          number: "04",
          title: "Privasi Terjaga",
          description:
            "Perangkat, data penting, dan informasi privasi pelanggan dijaga dengan penuh tanggung jawab, kehati-hatian, serta standar keamanan ketat.",
        },
      ];

  // GSAP Stacking & Parallax Animation on Desktop (≥ 1024px)
  useGSAP(
    () => {
      gsap.ticker.lagSmoothing(0);
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
            },
            {
              y: 0,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "top 40%",
                scrub: 0.5,
                fastScrollEnd: true,
              },
            }
          );
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className={styles.cards}
      aria-label={isEn ? "Inside MobiCare" : "Di balik MobiCare"}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className={styles.cardsBloom} />
      </div>
      <div className={styles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* ── Left Column: Sticky Editorial Narrative (Words from MobiCare) ── */}
          <div
            className="about-cards-sticky lg:col-span-6 flex flex-col justify-start lg:pr-6"
            style={{
              alignSelf: "flex-start",
            }}
          >
            <h2 className={styles.cardsTitle}>
              {isEn ? "Inside MobiCare." : "Di balik MobiCare."}
            </h2>

            <p className={styles.cardsLead}>
              {isEn
                ? "Four foundational pillars that shape how MobiCare serves device owners across every repair and technical consultation."
                : "Empat komitmen fondasi yang membentuk cara MobiCare melayani pemilik perangkat dalam setiap perbaikan dan konsultasi."}
            </p>

            {/* 4 Pilar Poin Narasi MobiCare */}
            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-7 border-t border-white/[0.12] pt-6 sm:pt-8">
              {narrativePoints.map((point) => (
                <div key={point.number} className="group">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-xs font-semibold text-[var(--about-green)] tracking-wider">
                      {point.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-[-0.01em]">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--about-fade-2)] pl-7">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Mobile Horizontal Slider (< lg) / Desktop Vertical Overlapping Stack (lg:) ── */}
          <div ref={rightStackRef} className="lg:col-span-6 w-full mt-6 lg:mt-0">
            {/* Mobile & Tablet Horizontal Scroll Notice */}
            <div className="flex lg:hidden items-center justify-between mb-4 text-[var(--about-fade-3)] font-mono text-xs uppercase tracking-wider px-1">
              <span>{isEn ? "WORKSHOP DOCUMENTATION" : "DOKUMENTASI WORKSHOP"}</span>
              <span className="text-[var(--about-green)] font-semibold flex items-center gap-1.5">
                <span>{isEn ? "Swipe Horizontal" : "Geser Horizontal"}</span>
                <MoveRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>

            {/* Cards Container: Horizontal Snap on Mobile/Tablet (<lg), Overlapping Vertical Stack on Desktop (lg:) */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none gap-4 sm:gap-6 lg:gap-0 lg:space-y-[-130px] pb-6 lg:pb-0 pt-1 lg:pt-2 -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 scrollbar-none items-stretch">
              {stackPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className={`stack-photo-item relative w-[80vw] sm:w-[52vw] md:w-[44vw] lg:w-[84%] shrink-0 lg:shrink snap-center lg:snap-align-none will-change-transform transform-gpu ${photo.desktopOffset}`}
                >
                  <div
                    className={`stack-photo-card group relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[var(--about-card-bg)] shadow-[var(--about-card-shadow)] transition-[border-color,box-shadow,transform] duration-500 ease-out hover:border-[var(--about-green)]/60 hover:shadow-[var(--about-card-shadow-hover)] hover:rotate-0 origin-center ${photo.tiltClass}`}
                  >
                    {/* Photo Image: Grayscale by default, Full Color & Scale on Hover */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover grayscale contrast-105 transition-[transform,filter] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 will-change-transform transform-gpu"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                      />

                      {/* Vignette Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                      {/* Top Tag Badge */}
                      <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 rounded-full border border-white/20 bg-black/60 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[0.625rem] sm:text-[0.6875rem] tracking-wider text-white backdrop-blur-md transform-gpu">
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
      </div>
    </section>
  );
}
