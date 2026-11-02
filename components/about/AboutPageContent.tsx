"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import AboutHero from "./AboutHero";
import AboutCards from "./AboutCards";
import AboutValues from "./AboutValues";
import AboutDifference from "./AboutDifference";
import AboutFoundation from "./AboutFoundation";
import styles from "./AboutPageContent.module.css";

export default function AboutPageContent() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const commitments = isEn
    ? [
        {
          title: "Professional service",
          description: "A directed process with attention to detail and each device’s needs.",
        },
        {
          title: "Clear communication",
          description: "Diagnosis, repair options, and estimates explained before work begins.",
        },
        {
          title: "Customer trust",
          description: "Responsibility, careful handling, and respect for customer privacy.",
        },
      ]
    : [
        {
          title: "Layanan profesional",
          description: "Proses kerja terarah dengan perhatian pada detail dan kebutuhan perangkat.",
        },
        {
          title: "Komunikasi jelas",
          description: "Diagnosis, opsi perbaikan, dan estimasi dijelaskan sebelum pengerjaan.",
        },
        {
          title: "Kepercayaan pelanggan",
          description: "Mengutamakan tanggung jawab, kehati-hatian, dan privasi pelanggan.",
        },
      ];

  return (
    <main className={styles.page}>
      <AboutHero />

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeItem}>{isEn ? "MobiCare Service Center" : "MobiCare Service Center"}</span>
          <span className={styles.marqueeItem}>{isEn ? "Clear service" : "Servis jelas"}</span>
          <span className={styles.marqueeItem}>{isEn ? "Device care" : "Perawatan perangkat"}</span>
          <span className={styles.marqueeItem}>{isEn ? "MobiCare Service Center" : "MobiCare Service Center"}</span>
          <span className={styles.marqueeItem}>{isEn ? "Clear service" : "Servis jelas"}</span>
          <span className={styles.marqueeItem}>{isEn ? "Device care" : "Perawatan perangkat"}</span>
        </div>
      </div>

      <section className={styles.profile} aria-labelledby="mobi-about-profile-title">
        <div className={styles.container}>
          <header className={styles.profileHeader}>
            <h2 className={styles.profileTitle} id="mobi-about-profile-title">
              {isEn ? "Service begins with clarity." : "Servis dimulai dari kejelasan."}
            </h2>
            <p className={styles.profileDescription}>
              {isEn
                ? "MobiCare Service Center is a digital device repair and technical support brand. We are committed to a professional, informative experience shaped around customer needs. Good service not only addresses a device issue; it helps customers understand the process and available options."
                : "MobiCare Service Center merupakan brand layanan perbaikan dan dukungan teknis perangkat digital. Kami berkomitmen menghadirkan pengalaman servis yang profesional, informatif, dan berorientasi pada kebutuhan pelanggan. Layanan yang baik bukan hanya menyelesaikan masalah perangkat, tetapi juga membantu pelanggan memahami proses dan pilihan yang tersedia."}
            </p>
          </header>

          <ol className={styles.commitments}>
            {commitments.map((item) => (
              <li className={styles.commitment} key={item.title}>
                <h3 className={styles.commitmentTitle}>{item.title}</h3>
                <p className={styles.commitmentDescription}>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AboutCards />
      <AboutValues />
      <AboutDifference />
      <AboutFoundation />

      <section className={styles.close} aria-label={isEn ? "Explore MobiCare" : "Jelajahi MobiCare"}>
        <span className={styles.closeGhost} aria-hidden="true">MobiCare</span>
        <div className={`${styles.container} ${styles.closeInner}`}>
          <h2 className={styles.closeTitle}>
            {isEn ? "Find the information you need." : "Temukan informasi yang kamu butuhkan."}
          </h2>
          <nav className={styles.closeActions} aria-label={isEn ? "MobiCare pages" : "Halaman MobiCare"}>
            <Link className={styles.closeAction} href={isEn ? "/en/pricelist" : "/pricelist"}>
              {isEn ? "Explore price list" : "Lihat price list"}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className={`${styles.closeAction} ${styles.closeActionSecondary}`} href={isEn ? "/en/our-store" : "/our-store"}>
              {isEn ? "Find a branch" : "Temukan cabang"}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
