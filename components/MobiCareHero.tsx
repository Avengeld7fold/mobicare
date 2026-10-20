import Image from "next/image";
import MobiCareWordmark from "./MobiCareWordmark";
import { SOCIAL_LINKS, whatsappUrl } from "@/lib/constants";

const SOCIAL_ITEMS = [
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.12v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.51a8.27 8.27 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: whatsappUrl(),
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function MobiCareHero() {
  return (
    <section className="mobi-hero" aria-labelledby="mobicare-hero-title">
      {/* Ambient background glow */}
      <div className="mobi-hero__ambient" aria-hidden="true">
        <div className="mobi-hero__ambient-glow" />
      </div>

      {/* 3D Exploded iPhone Stage Layer — Fullscreen Center Stage persis Fixmi */}
      <div className="mobi-hero__device-layer" aria-hidden="true">
        <div className="mobi-hero__device-stage">
          <Image
            src="/images/iphone-broken-2000.webp"
            alt=""
            width={2000}
            height={1500}
            priority
            sizes="(max-width: 767px) 100vw, min(100vw, 133.333vh)"
            className="mobi-hero__device-img"
          />
        </div>
      </div>

      {/* Content overlay — 12-column Grid Layout persis Fixmi */}
      <div className="mobi-hero__content-overlay">
        <div className="mobi-hero__top-spacer" aria-hidden="true" />

        <div className="mobi-hero__grid">
          {/* Kolom Kiri: Judul Pembuka (Self Start / Top-Left) */}
          <div className="mobi-hero__col-left">
            <h1 id="mobicare-hero-title" className="mobi-hero__headline mobi-hero__headline--left">
              <span className="mobi-hero__line-white">DEVICE KAMU</span>
              <span className="mobi-hero__line-green">RUSAK?</span>
            </h1>
          </div>

          {/* Kolom Tengah: Ruang 3D iPhone (Spacer 6 Kolom di Grid) */}
          <div className="mobi-hero__col-center" aria-hidden="true" />

          {/* Kolom Kanan: Tagline, Logo MobiCare & Judul Solusi (Shifted Downwards / Translate Y) */}
          <div className="mobi-hero__col-right">
            <p className="mobi-hero__tagline">
              YOUR TRUSTED GADGET REPAIR SERVICE!
            </p>

            <div className="mobi-hero__brand-mark">
              <MobiCareWordmark />
            </div>

            <h2 className="mobi-hero__headline mobi-hero__headline--right">
              <span className="mobi-hero__line-green">SOLUSINYA!</span>
            </h2>
          </div>
        </div>

        {/* Pojok Kiri Bawah: Social Links Melingkar */}
        <div className="mobi-hero__socials">
          {SOCIAL_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mobi-hero__social-btn"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
