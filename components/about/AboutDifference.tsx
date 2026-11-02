"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useI18n } from "@/lib/i18n/context";
import styles from "./AboutPageContent.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceStep {
  title: string;
  description: string;
}

export default function AboutDifference() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  const steps: ServiceStep[] = isEn
    ? [
        { title: "Device intake", description: "We record the reported issue, the device’s initial condition, and the customer’s needs." },
        { title: "Inspection & diagnosis", description: "The device is checked to identify possible causes of the issue." },
        { title: "Explanation & estimate", description: "Findings, available options, estimated cost, and expected repair time are explained before approval." },
        { title: "Repair", description: "Work proceeds according to the customer’s approval and agreed scope." },
        { title: "Quality check", description: "Relevant functions are checked after the repair according to the service provided." },
        { title: "Handover", description: "We explain the service outcome and important information when returning the device." },
      ]
    : [
        { title: "Penerimaan perangkat", description: "Mencatat keluhan, kondisi awal, dan kebutuhan pelanggan." },
        { title: "Pemeriksaan & diagnosis", description: "Mengecek perangkat untuk mengidentifikasi kemungkinan penyebab masalah." },
        { title: "Penjelasan & estimasi", description: "Menyampaikan temuan, opsi tindakan, estimasi biaya, dan waktu pengerjaan sebelum perbaikan disetujui." },
        { title: "Pengerjaan", description: "Melakukan perbaikan sesuai persetujuan pelanggan dan ruang lingkup pekerjaan." },
        { title: "Pemeriksaan kualitas", description: "Memeriksa fungsi terkait setelah pengerjaan sesuai jenis perbaikan." },
        { title: "Serah terima", description: "Menjelaskan hasil layanan dan informasi penting saat perangkat dikembalikan." },
      ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!sectionRef.current) return;

        // Reveal berurutan untuk baris 01–06
        if (listRef.current) {
          const rows = listRef.current.querySelectorAll(`.${styles.processItem}`);
          gsap.from(rows, {
            opacity: 0,
            y: 24,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.process}`} aria-label={isEn ? "Service experience" : "Proses pelayanan"}>
      <div className={styles.container}>
        <header className={styles.processHeader}>
          <div>
            <p className={styles.processKicker}>{isEn ? "Service experience" : "Standar pelayanan"}</p>
            <h2 className={styles.processTitle}>{isEn ? "Service process" : "Proses pelayanan"}</h2>
          </div>
          <p className={styles.processLead}>
            {isEn
              ? "A service process designed to be easy to understand, from device intake through handover."
              : "Kami berupaya membuat proses servis mudah dipahami, dari penerimaan perangkat hingga serah terima setelah pengerjaan."}
          </p>
        </header>

        <ol ref={listRef} className={styles.processList}>
          {steps.map((step, index) => (
            <li className={styles.processItem} key={step.title}>
              <span className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.processName}>{step.title}</h3>
              <p className={styles.processDescription}>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.privacy}>
          <strong>{isEn ? "Privacy & security" : "Privasi & keamanan"}</strong>
          <p>
            {isEn
              ? "We handle devices and customer information carefully. Data access and device handling follow customer consent and applicable operating procedures."
              : "Kami mengedepankan kehati-hatian terhadap perangkat dan informasi pelanggan. Akses data serta penanganan perangkat mengikuti persetujuan pelanggan dan prosedur operasional yang berlaku."}
          </p>
        </div>
      </div>
    </section>
  );
}
