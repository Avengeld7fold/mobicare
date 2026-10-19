"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function HomeSmarterWay() {
  const { locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!isVideoOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <section className="home-smarter" aria-labelledby="home-smarter-heading">
      {/* Top green speed line inspired by Fastrack */}
      <span className="smarter-speed-line" aria-hidden="true" />

      <div className="home-smarter-inner">
        {/* Left Column: Heading and Action */}
        <div className="smarter-copy">
          <p className="smarter-kicker">
            <span>
              {isEn ? "PROFESSIONAL LAB STANDARDS" : "STANDAR LAB & TEKNISI PROFESIONAL"}
            </span>
            {isEn
              ? "Handled directly by certified specialists using digital microscopes and precision diagnostic instruments."
              : "Ditangani langsung oleh teknisi berpengalaman dengan instrumen mikrosolder dan alat diagnosa presisi."}
          </p>

          <h2 id="home-smarter-heading" aria-label={isEn ? "A Smarter Way to Repair." : "Cara Cerdas Servis Gadget."}>
            <span>{isEn ? "A SMARTER" : "CARA CERDAS"}</span>
            <span>{isEn ? "WAY TO REPAIR." : "SERVIS GADGET."}</span>
          </h2>

          <Link href={getLocalizedPath("/pricelist")} className="smarter-btn">
            {isEn ? "Check Price List" : "Cek Price List"}{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* Right Column: Workshop Cinematic Showcase */}
        <div
          className="smarter-poster"
          role="button"
          tabIndex={0}
          aria-label={isEn ? "Play MobiCare Workshop Standard Video" : "Putar Video Standar Workshop MobiCare"}
          onClick={() => setIsVideoOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsVideoOpen(true);
            }
          }}
        >
          <Image
            src="/images/mobi-team.webp"
            alt={isEn ? "MobiCare Workshop Team in Bali" : "Tim Teknisi MobiCare Service Center Bali"}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="smarter-poster-shade" aria-hidden="true" />

          {/* Interactive Play Button */}
          <button
            type="button"
            className="smarter-play-btn"
            aria-label={isEn ? "Play Video" : "Putar Video"}
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(true);
            }}
          >
            &#9654;
          </button>

          {/* Poster Badge */}
          <div className="smarter-watch">
            <b>{isEn ? "WORKSHOP REPAIR STANDARD" : "STANDAR KERJA WORKSHOP"}</b>
            <small>MobiCare Service Center Bali</small>
          </div>
        </div>

        {/* Modal Lightbox Video Player */}
        {isVideoOpen && (
          <div
            className="smarter-modal"
            role="dialog"
            aria-modal="true"
            aria-label={isEn ? "MobiCare Workshop Video" : "Video Standar Kerja Workshop MobiCare"}
          >
            <div
              className="smarter-modal-backdrop"
              onClick={() => setIsVideoOpen(false)}
              aria-hidden="true"
            />
            <button
              type="button"
              className="smarter-modal-close"
              onClick={() => setIsVideoOpen(false)}
              aria-label={isEn ? "Close video" : "Tutup video"}
            >
              <X size={22} strokeWidth={2} />
            </button>
            <div className="smarter-modal-dialog">
              <video
                src="/images/mobi-video.mp4"
                controls
                autoPlay
                playsInline
                className="smarter-modal-video"
              />
            </div>
          </div>
        )}

        {/* Bottom Technical Rail */}
        <div className="smarter-rail" aria-hidden="true">
          <span>{isEn ? "Transparency" : "Transparansi"}</span>
          <i />
          <span>{isEn ? "Precision" : "Presisi"}</span>
          <i />
          <span>{isEn ? "Warranty" : "Garansi Resmi"}</span>
          <i />
          <span>{isEn ? "Data Security" : "Keamanan Data"}</span>
        </div>
      </div>
    </section>
  );
}
