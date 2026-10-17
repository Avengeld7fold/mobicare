import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MobiCareWordmark from "./MobiCareWordmark";

export default function MobiCareHero() {
  return (
    <section className="mobi-hero" aria-labelledby="mobicare-hero-title">
      <div className="mobi-hero__device" aria-hidden="true">
        <Image src="/images/mobicare-repair-hero.webp" alt="" fill priority sizes="100vw" />
      </div>
      <div className="mobi-hero__wash" aria-hidden="true" />

      <div className="mobi-hero__content">
        <div className="mobi-hero__logo"><MobiCareWordmark /></div>
        <h1 id="mobicare-hero-title">
          <span>SERVIS YANG</span>
          <span>LEBIH JELAS.</span>
        </h1>
        <p>Temukan harga layanan untuk perangkat Anda</p>
        <div className="mobi-hero__actions">
          <Link className="mobi-button mobi-button--primary" href="/pricelist">
            Cek harga <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
          </Link>
          <Link className="mobi-button mobi-button--secondary" href="/contact">
            Konsultasi
          </Link>
        </div>
      </div>

    </section>
  );
}
