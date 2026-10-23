"use client";

import { useI18n } from "@/lib/i18n/context";
import GalleryViewer from "@/components/gallery/GalleryViewer";
import type { GalleryImage } from "@/lib/gallery-server";
import { ArrowDownRight } from "lucide-react";
import "../media-pages.css";

interface GalleryPageContentProps {
  images: GalleryImage[];
}

export default function GalleryPageContent({ images }: GalleryPageContentProps) {
  const { dict, locale } = useI18n();
  const isEn = locale === "en";

  return (
    <main className="media-page">
      <header className="media-intro mobi-container">
        <h1>{isEn ? "Real process." : "Proses nyata."}<span>{isEn ? "Visible results." : "Hasil terlihat."}</span></h1>
        <div className="media-intro-copy">
          <p>{dict.gallery.subtitle}</p>
          <a href="#gallery-list">
            {isEn ? "View documentation" : "Lihat dokumentasi"}
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </header>
      <section className="media-surface" id="gallery-list" aria-label={isEn ? "MobiCare repair documentation" : "Dokumentasi servis MobiCare"}>
        <div className="mobi-container">
          <div className="media-heading">
            <h2>{isEn ? "Service documentation" : "Dokumentasi servis"}</h2>
            <span>{String(images.length).padStart(2, "0")} {isEn ? "photos" : "foto"}</span>
          </div>
          <GalleryViewer images={images} />
        </div>
      </section>
    </main>
  );
}
