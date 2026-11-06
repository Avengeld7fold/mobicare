"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { SOCIAL_LINKS, whatsappUrl } from "@/lib/constants";
import MobiCareWordmark from "./MobiCareWordmark";

export default function Footer() {
  const pathname = usePathname();
  const { locale, getLocalizedPath } = useI18n();

  if (pathname.startsWith("/admin")) return null;

  const isEn = locale === "en";

  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Kolom 1: Brand */}
        <Link
          href={getLocalizedPath("/")}
          className="footer-brand"
          aria-label="MobiCare Service Center"
        >
          <MobiCareWordmark className="footer-brand-img" />
        </Link>

        {/* Kolom 2: Kontak */}
        <div className="footer-contact">
          <span className="footer-label">{isEn ? "contact" : "kontak"}</span>
          <a href="tel:08991099999">
            0899<span className="footer-sym">-</span>109<span className="footer-sym">-</span>9999
          </a>
          <a
            href={whatsappUrl("Halo MobiCare, saya ingin konsultasi perbaikan gadget.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Chat
          </a>
          <a href="mailto:team@mobicare.id">
            team<span className="footer-sym">@</span>mobicare.id
          </a>
          <Link href={getLocalizedPath("/our-store")}>
            {isEn ? "Store Locations" : "Lokasi Workshop"}
          </Link>
        </div>

        {/* Kolom 3: Media Sosial */}
        <div className="footer-social">
          <span className="footer-label">{isEn ? "social media" : "media sosial"}</span>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>

        {/* Kolom 4: Layanan Servis Spesialis */}
        <div className="footer-apps">
          <span className="footer-label">
            {isEn ? "repair services" : "layanan servis"}
          </span>
          <Link href={getLocalizedPath("/pricelist/iphone")}>
            {isEn ? "iPhone Repair" : "Servis iPhone"}
          </Link>
          <Link href={getLocalizedPath("/pricelist/ipad")}>
            {isEn ? "iPad Repair" : "Servis iPad"}
          </Link>
          <Link href={getLocalizedPath("/pricelist/macbook")}>
            {isEn ? "MacBook Repair" : "Servis MacBook"}
          </Link>
          <Link href={getLocalizedPath("/pricelist/android")}>
            {isEn ? "Android Smartphone" : "Servis Android"}
          </Link>
          <Link href={getLocalizedPath("/pricelist")}>
            {isEn ? "All Price Lists" : "Semua Biaya Servis"}
          </Link>
        </div>
      </div>

      {/* Bagian Copywriting Editorial Dua Kolom: Ringkas, Padat, & Selaras Company Profile */}
      <div className="footer-copy">
        <p>
          {isEn
            ? "MobiCare Service Center delivers professional device repairs with dedicated workbench standards, open diagnostics, and transparent upfront estimates. From screen and battery replacements to advanced logic board microsoldering, every device is handled directly by trained technicians using verified premium parts."
            : "MobiCare Service Center menghadirkan layanan perbaikan gadget profesional dengan standar meja servis teruji, diagnosa terbuka, dan estimasi biaya transparan tanpa biaya tersembunyi. Dari penggantian layar dan baterai hingga penanganan mikrosolder logic board, setiap perangkat ditangani langsung oleh teknisi terlatih dengan suku cadang berkualitas tinggi."}
        </p>
        <p>
          {isEn
            ? "Every repair is backed by an official store warranty of up to 90 days, rigorous multi-point functional verification before handover, and strict protection for your personal data. We ensure your device returns to peak performance through a clear, dependable, and efficient workflow."
            : "Setiap perbaikan dilindungi garansi resmi toko hingga 90 hari, pengujian fungsional menyeluruh sebelum serah terima, serta komitmen ketat menjaga kerahasiaan data pribadi pelanggan. Kami memastikan perangkat Anda kembali beroperasi optimal dengan alur kerja yang jelas, cepat, dan terpercaya."}
        </p>
      </div>

      {/* Bagian Legal & Bottom Bar */}
      <div className="footer-legal">
        <span><span className="footer-sym">©</span> 2026 MOBICARE SERVICE CENTER</span>
        <div className="footer-legal-links">
          <Link href={getLocalizedPath("/warranty-claim")}>
            {isEn ? "Warranty Claim" : "Klaim Garansi"}
          </Link>
          <Link href={getLocalizedPath("/terms")}>
            {isEn ? "Terms & Conditions" : "Syarat & Ketentuan"}
          </Link>
          <Link href={getLocalizedPath("/contact")}>
            {isEn ? "Support & Contact" : "Pusat Bantuan"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
