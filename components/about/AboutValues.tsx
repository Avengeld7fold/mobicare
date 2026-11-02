"use client";

import Image from "next/image";
import { BadgeCheck, ClipboardCheck, MessageSquareText, Repeat2, Crosshair, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import styles from "./AboutPageContent.module.css";

export default function AboutValues() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const missionItems = isEn
    ? [
        { icon: ClipboardCheck, text: "Provide examinations and repairs responsibly." },
        { icon: BadgeCheck, text: "Maintain workmanship quality and check functions according to the service provided." },
        { icon: TrendingUp, text: "Develop technical capabilities and the quality of the customer experience." },
      ]
    : [
        { icon: ClipboardCheck, text: "Memberikan pemeriksaan dan perbaikan secara bertanggung jawab." },
        { icon: BadgeCheck, text: "Menjaga kualitas pengerjaan dan memeriksa fungsi sesuai jenis layanan." },
        { icon: TrendingUp, text: "Mengembangkan kemampuan teknis dan kualitas pengalaman pelanggan." },
      ];

  const visionItems = isEn
    ? [
        { icon: Crosshair, text: "Technical quality you can verify" },
        { icon: Repeat2, text: "Consistent service standards" },
        { icon: MessageSquareText, text: "Transparent communication" },
      ]
    : [
        { icon: Crosshair, text: "Kualitas teknis yang terukur" },
        { icon: Repeat2, text: "Standar pelayanan yang konsisten" },
        { icon: MessageSquareText, text: "Komunikasi yang transparan" },
      ];

  const values = isEn
    ? [
        { title: "Integrity", description: "Honest in diagnosis and recommendations." },
        { title: "Quality", description: "Careful at every stage of service." },
        { title: "Care", description: "Respectful of customer time and needs." },
        { title: "Continuous improvement", description: "Continuously improving skills and processes." },
      ]
    : [
        { title: "Integritas", description: "Jujur dalam diagnosis dan rekomendasi." },
        { title: "Kualitas", description: "Teliti dalam setiap tahapan layanan." },
        { title: "Kepedulian", description: "Menghargai waktu dan kebutuhan pelanggan." },
        { title: "Perbaikan berkelanjutan", description: "Terus meningkatkan keterampilan dan proses." },
      ];

  return (
    <section className={`${styles.section} ${styles.values}`} aria-label={isEn ? "Vision, mission and values" : "Visi, misi, dan nilai"}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{isEn ? "Principles that guide the work." : "Prinsip yang memandu kerja."}</h2>
          <p className={styles.sectionLead}>
            {isEn
              ? "The principles that guide MobiCare’s service and customer experience."
              : "Prinsip yang menjadi arah layanan dan pengalaman pelanggan MobiCare."}
          </p>
        </header>

        {/* Misi: kolase gambar di kiri, teks di kanan */}
        <div className={styles.storyBlock}>
          <div className={styles.collage}>
            <div className={styles.collageBase}>
              <Image
                src="/images/mobishop2.webp"
                alt={isEn ? "MobiCare workshop & service store" : "Suasana workshop dan gerai servis MobiCare"}
                fill
                sizes="(max-width: 720px) 88vw, 44vw"
                className={styles.collageImage}
              />
            </div>
            <div className={styles.collageInset}>
              <Image
                src="/images/mobi-cust.webp"
                alt={isEn ? "Customer consultation at MobiCare" : "Konsultasi pelanggan bersama tim MobiCare"}
                fill
                sizes="(max-width: 720px) 42vw, 20vw"
                className={styles.collageImage}
              />
            </div>
          </div>

          <div className={styles.storyText}>
            <h3 className={styles.storyTitle}>{isEn ? "Our mission" : "Misi kami"}</h3>
            <p className={styles.storyLead}>
              {isEn
                ? "Three directions that guide how MobiCare works."
                : "Tiga arah yang memandu cara MobiCare bekerja."}
            </p>
            <ul className={styles.storyList}>
              {missionItems.map((item) => (
                <li className={styles.storyItem} key={item.text}>
                  <item.icon className={styles.storyIcon} size={20} strokeWidth={1.8} aria-hidden="true" />
                  <p className={styles.storyItemText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visi: teks di kiri, kolase gambar di kanan */}
        <div className={`${styles.storyBlock} ${styles.storyBlockFlip}`}>
          <div className={styles.storyText}>
            <h3 className={styles.storyTitle}>{isEn ? "Our vision" : "Visi kami"}</h3>
            <p className={styles.storyLead}>
              {isEn
                ? "To be a service center trusted by customers through technical quality, consistent service, and clear communication."
                : "Menjadi service center yang dipercaya pelanggan melalui kualitas teknis, pelayanan konsisten, dan komunikasi yang transparan."}
            </p>
            <ul className={styles.storyList}>
              {visionItems.map((item) => (
                <li className={styles.storyItem} key={item.text}>
                  <item.icon className={styles.storyIcon} size={20} strokeWidth={1.8} aria-hidden="true" />
                  <p className={styles.storyItemText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.collage} ${styles.collageFlip}`}>
            <div className={styles.collageBase}>
              <Image
                src="/images/mobi-team.webp"
                alt={isEn ? "MobiCare Service Center team" : "Tim MobiCare Service Center"}
                fill
                sizes="(max-width: 720px) 88vw, 44vw"
                className={styles.collageImage}
              />
            </div>
            <div className={styles.collageInset}>
              <Image
                src="/images/mobi-cs.webp"
                alt={isEn ? "Customer service representative at MobiCare" : "Customer service MobiCare melayani pelanggan"}
                fill
                sizes="(max-width: 720px) 42vw, 20vw"
                className={styles.collageImage}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className={styles.valueHeading}>{isEn ? "Our values" : "Nilai utama"}</h3>
          <ol className={styles.valueList}>
            {values.map((value) => (
              <li className={styles.valueItem} key={value.title}>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
