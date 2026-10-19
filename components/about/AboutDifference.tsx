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
          title: "Device Intake & Consultation",
          desc: "Recording device symptoms, initial operating condition, and specific customer requirements thoroughly as the foundation of the repair.",
        },
        {
          num: "02",
          title: "Inspection & Diagnosis",
          desc: "Conducting comprehensive hardware and software testing to accurately identify root causes and evaluate viable repair paths.",
        },
        {
          num: "03",
          title: "Clear Options & Estimates",
          desc: "Presenting diagnosis findings, repair options, itemized transparent costs, and expected turnaround times before any work is authorized.",
        },
        {
          num: "04",
          title: "Targeted Repair Execution",
          desc: "Performing meticulous repairs strictly according to agreed customer scope and established technical craftsmanship standards.",
        },
        {
          num: "05",
          title: "Comprehensive Quality Check",
          desc: "Testing all related device functions post-repair to verify full operational stability, responsiveness, and performance.",
        },
        {
          num: "06",
          title: "Handover & Service Warranty",
          desc: "Explaining repair results clearly, providing documented warranty coverage, and sharing vital care tips as the device is returned.",
        },
      ]
    : [
        {
          num: "01",
          title: "Penerimaan Perangkat",
          desc: "Mencatat keluhan, kondisi awal, dan kebutuhan spesifik pelanggan dengan teliti sebagai dasar penanganan perbaikan.",
        },
        {
          num: "02",
          title: "Pemeriksaan & Diagnosis",
          desc: "Mengecek perangkat secara menyeluruh untuk mengidentifikasi kemungkinan penyebab masalah dan opsi perbaikan terbaik.",
        },
        {
          num: "03",
          title: "Penjelasan & Estimasi",
          desc: "Menyampaikan temuan diagnosis, opsi tindakan, rincian estimasi biaya transparan, dan perkiraan waktu pengerjaan sebelum perbaikan disetujui.",
        },
        {
          num: "04",
          title: "Pengerjaan Terarah",
          desc: "Melakukan perbaikan sesuai persetujuan pelanggan dan ruang lingkup pekerjaan dengan ketelitian teknis standar profesional.",
        },
        {
          num: "05",
          title: "Pemeriksaan Kualitas",
          desc: "Memeriksa fungsi menyeluruh perangkat terkait setelah pengerjaan selesai sesuai jenis perbaikan guna memastikan performa optimal.",
        },
        {
          num: "06",
          title: "Serah Terima & Garansi",
          desc: "Menjelaskan hasil layanan, memberikan jaminan garansi resmi tertulis, dan menyampaikan informasi penting saat perangkat dikembalikan.",
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
          <p className="kicker">{isEn ? "03 / service experience" : "03 / standar pelayanan"}</p>
          <h2>{isEn ? "Service Process" : "Proses Pelayanan"}</h2>
        </div>
        <p>
          {isEn
            ? "We make every stage of the repair experience clear and transparent, from initial device intake to final verified handover."
            : "Kami berupaya membuat proses servis mudah dipahami, dari penerimaan perangkat hingga serah terima setelah pengerjaan."}
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
