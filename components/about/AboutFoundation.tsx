"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import { whatsappUrl } from "@/lib/constants";
import styles from "./AboutPageContent.module.css";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.49v8.37h2.78z"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <g transform="rotate(-45 12 12)">
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </g>
    </svg>
  );
}

export default function AboutFoundation() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  return (
    <section className={styles.foundation} aria-label={isEn ? "MobiCare foundation" : "Dukungan untuk MobiCare"}>
      <div className={`${styles.container} ${styles.foundationInner}`}>
        <div className={styles.foundationBody}>
          <h2 className={styles.foundationTitle}>
            <span className={styles.foundationTitleTop}>{isEn ? "Powered by" : "Powered by"}</span>
            <span className={styles.foundationTitleBrand}>Fixmi</span>
          </h2>
          <p className={styles.foundationLead}>
            {isEn
              ? "MobiCare has its own brand identity, with technical and operational experience supported by Fixmi Service Center under the applicable collaboration."
              : "MobiCare menggunakan identitas brand sendiri, dengan dukungan pengalaman teknis dan operasional dari Fixmi Service Center sesuai bentuk kerja sama yang berlaku."}
          </p>
          <p className={styles.foundationNote}>
            {isEn
              ? "The phrase “Powered by Fixmi Service Center” describes brand and operational support without replacing MobiCare’s identity. The nature of the relationship, ownership, and legal responsibilities follow the applicable documents and agreements."
              : "Frasa “Powered by Fixmi Service Center” menandai dukungan brand dan operasional tanpa menghilangkan identitas MobiCare. Bentuk hubungan, kepemilikan, dan tanggung jawab hukum kedua brand mengikuti dokumen serta kesepakatan yang berlaku."}
          </p>
        </div>

        <div className={styles.foundationRight}>
          <div className={styles.foundationCards}>
            <figure className={styles.foundationCard}>
              <div className={styles.foundationCardPhotoWrap}>
                <Image
                  src="/images/teknisi-mobi.webp"
                  alt="Teknisi MobiCare"
                  fill
                  sizes="(max-width: 720px) 45vw, 25vw"
                  className={styles.foundationCardPhotoImage}
                />
              </div>
              <figcaption className={styles.foundationCardCaption}>
                <p className={styles.foundationCardName}>MobiCare</p>
                <p className={styles.foundationCardRole}>{isEn ? "Service center" : "Service center"}</p>
                <div className={styles.foundationCardSocials} role="list" aria-label="MobiCare links">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.foundationSocialLink}
                    aria-label="X MobiCare"
                    role="listitem"
                  >
                    <XIcon />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.foundationSocialLink}
                    aria-label="LinkedIn MobiCare"
                    role="listitem"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={whatsappUrl("Halo MobiCare, saya ingin konsultasi servis gadget.")}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.foundationSocialLink}
                    aria-label="Website & Chat MobiCare"
                    role="listitem"
                  >
                    <LinkIcon />
                  </a>
                </div>
              </figcaption>
            </figure>

            <figure className={styles.foundationCard}>
              <div className={styles.foundationCardPhotoWrap}>
                <Image
                  src="/images/teknisi-fixmi.webp"
                  alt="Teknisi Fixmi"
                  fill
                  sizes="(max-width: 720px) 45vw, 25vw"
                  className={styles.foundationCardPhotoImage}
                />
              </div>
              <figcaption className={styles.foundationCardCaption}>
                <p className={styles.foundationCardName}>Fixmi</p>
                <p className={styles.foundationCardRole}>
                  {isEn ? "Technical & operational support" : "Dukungan teknis & operasional"}
                </p>
                <div className={styles.foundationCardSocials} role="list" aria-label="Fixmi links">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.foundationSocialLink}
                    aria-label="X Fixmi"
                    role="listitem"
                  >
                    <XIcon />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.foundationSocialLink}
                    aria-label="LinkedIn Fixmi"
                    role="listitem"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://fixmi.co.id"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.foundationSocialLink}
                    aria-label="Website Fixmi"
                    role="listitem"
                  >
                    <LinkIcon />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
