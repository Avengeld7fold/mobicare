"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n/context";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface DifferencePrinciple {
  num: string;
  title: string;
  desc: string;
}

export default function AboutDifference() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const principles: DifferencePrinciple[] = isEn
    ? [
        {
          num: "01",
          title: "Direct & Open Diagnostics",
          desc: "All inspections are conducted openly in front of the customer. We outline the exact hardware condition, provide fixed cost estimates upfront, and ensure zero surprise surcharges.",
        },
        {
          num: "02",
          title: "Chip-Level Microsoldering Lab",
          desc: "Equipped with industrial-grade digital microscopes and ESD-safe cleanroom stations, our lab recovers complex logic boards, chip-level IC faults, and water-damaged devices that standard shops turn down.",
        },
        {
          num: "03",
          title: "Certified Component Repository",
          desc: "Displays, battery cells, camera modules, and flex sensors are vetted against strict manufacturer specifications to preserve TrueTone, touch fidelity, and factory-level reliability.",
        },
        {
          num: "04",
          title: "Customer & Data-First Approach",
          desc: "Less downtime, zero data risk, better reliability. We safeguard internal storage and user privacy throughout the repair cycle without arbitrary factory resets.",
        },
        {
          num: "05",
          title: "Proven Decade of Experience",
          desc: "Master technicians with over a decade of dedicated Apple and Android expertise in Bali since 2014, bringing deep technical insight, speed, and trust to every repair bench.",
        },
        {
          num: "06",
          title: "Streamlined Warranty Process",
          desc: "Clear coverage terms, rapid post-service support, and hassle-free warranty fulfillment. We make post-service protection effortless without compromising quality.",
        },
      ]
    : [
        {
          num: "01",
          title: "Diagnosa Terbuka & Transparan",
          desc: "Pemeriksaan perangkat dikerjakan langsung di hadapan Anda. Kami menjelaskan akar permasalahan hardware, memberikan estimasi biaya pasti di awal, dan tanpa biaya tersembunyi.",
        },
        {
          num: "02",
          title: "Lab Mikrosolder Chip-Level",
          desc: "Didukung stasiun mikroskop presisi dan instrumen elektrostatik (ESD), kami menangani logic board kompleks, perbaikan IC, dan pemulihan sirkuit yang tidak dapat ditangani bengkel umum.",
        },
        {
          num: "03",
          title: "Suku Cadang Bersertifikasi",
          desc: "Komponen layar, baterai, sensor, dan flexibel dipilih secara ketat dengan standar spesifikasi pabrikan tertinggi guna menjamin stabilitas, TrueTone, dan daya tahan jangka panjang.",
        },
        {
          num: "04",
          title: "Customer & Data-First Approach",
          desc: "Keamanan data pribadi Anda adalah prioritas mutlak. Seluruh proses perbaikan memprioritaskan keamanan informasi internal perangkat tanpa perlu reset data kecuali atas persetujuan Anda.",
        },
        {
          num: "05",
          title: "Pengalaman Lebih Dari Satu Dekade",
          desc: "Tim teknisi spesialis kami telah berdedikasi melayani perbaikan ekosistem Apple dan Android di Bali sejak 2014, menggabungkan jam terbang ribuan perangkat dengan ketelitian tinggi.",
        },
        {
          num: "06",
          title: "Garansi Resmi Tertulis",
          desc: "Proses klaim mudah, transparan, dan tanpa birokrasi berbelit. Setiap unit yang selesai diperbaiki dilindungi jaminan garansi resmi tertulis untuk kenyamanan jangka panjang Anda.",
        },
      ];

  // GSAP ScrollTrigger Animations
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!sectionRef.current) return;

        // Reveal header
        if (headerRef.current) {
          gsap.from(headerRef.current.children, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        }

        // Stagger articles in principles list
        if (listRef.current) {
          const articles = listRef.current.querySelectorAll("article");
          if (articles.length) {
            gsap.from(articles, {
              opacity: 0,
              y: 24,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.06,
              scrollTrigger: {
                trigger: listRef.current,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            });
          }
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="about-difference">
      <header ref={headerRef}>
        <div>
          <p className="kicker">built different</p>
          <h2>Our Difference</h2>
        </div>
        <p>
          {isEn
            ? "Our standards of technical excellence, transparent diagnostics, and lasting warranties that set MobiCare apart."
            : "Standar keunggulan layanan, transparansi pengerjaan, dan dedikasi teknis yang membedakan kualitas perbaikan MobiCare."}
        </p>
      </header>

      <div ref={listRef} className="about-principles">
        {principles.map((item) => (
          <article key={item.num} className="group">
            <span className="transition-transform duration-200 group-hover:scale-110">
              {item.num}
            </span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
