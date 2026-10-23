"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { SOCIAL_LINKS } from "@/lib/constants";
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

        {/* Kolom 2: Contact */}
        <div className="footer-contact">
          <span className="footer-label">{isEn ? "contact" : "kontak"}</span>
          <a href="tel:081999336722">
            0819<span className="footer-sym">-</span>9933<span className="footer-sym">-</span>6722
          </a>
          <a href="mailto:team@mobicare.id">
            team<span className="footer-sym">@</span>mobicare.id
          </a>
          <Link href={getLocalizedPath("/contact")}>
            {isEn ? "Ask A Question" : "Tanya Teknisi"}
          </Link>
        </div>

        {/* Kolom 3: Follow */}
        <div className="footer-social">
          <span className="footer-label">{isEn ? "follow" : "ikuti"}</span>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>

        {/* Kolom 4: Services */}
        <div className="footer-apps">
          <span className="footer-label">
            {isEn ? "repair services" : "layanan servis"}
          </span>
          <Link href={getLocalizedPath("/pricelist")}>
            Apple iPhone<span className="footer-sym-amp">&amp;</span>iPad
          </Link>
          <Link href={getLocalizedPath("/pricelist")}>
            MacBook<span className="footer-sym-amp">&amp;</span>Android
          </Link>
        </div>
      </div>

      {/* Bagian Copywriting Editorial Dua Kolom */}
      <div className="footer-copy">
        <p>
          {isEn
            ? "MobiCare Service Center is redefining modern gadget repair by combining professional presentation, precision laboratory technology, and comprehensive service reach. Our digital platform makes it easy to service smartphones and laptops with confidence through transparent diagnostics, premium components, and clear upfront pricing. Whether you're looking for fast same-day screen replacements or advanced logic board microsoldering, MobiCare connects you with premier technical care. For customers, our streamlined workflow keeps every phase, from initial inspection to final quality assurance, clear and efficient."
            : "MobiCare Service Center mendefinisikan ulang perbaikan gadget modern dengan memadukan standar kerja profesional, teknologi lab presisi, dan jangkauan layanan menyeluruh. Layanan digital kami memudahkan Anda memperbaiki smartphone dan laptop dengan penuh keyakinan melalui diagnosa terbuka, suku cadang berkualitas tinggi, dan informasi biaya yang transparan. Baik Anda membutuhkan perbaikan kilat di hari yang sama maupun penanganan mikrosolder logic board tingkat lanjut, MobiCare menghadirkan solusi servis terbaik secara cepat dan terpercaya. Bagi pelanggan, alur kerja terstruktur kami menjaga setiap tahapan, mulai dari inspeksi hingga uji kendali mutu, tetap transparan dan efisien."}
        </p>
        <p>
          {isEn
            ? "For device owners, every repair comes with an official store warranty of up to 90 days and real-time live service tracking, giving you total peace of mind in every visit. MobiCare Service Center delivers what the modern tech industry needs: speed, technical precision, and proven results."
            : "Bagi setiap pemilik gadget, setiap pengerjaan servis disertai garansi resmi toko hingga 90 hari dan pemantauan progres pengerjaan secara langsung, memberikan rasa tenang dalam setiap layanan. MobiCare Service Center menghadirkan apa yang dibutuhkan dunia teknologi modern: kecepatan, ketelitian teknis, dan hasil nyata."}
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
            {isEn ? "Accessibility" : "Aksesibilitas"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
