"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import type { GalleryImage } from "@/lib/gallery-server";

interface GalleryViewerProps { images: GalleryImage[]; }

export default function GalleryViewer({ images }: GalleryViewerProps) {
  const { dict, locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  const close = () => {
    const returnIndex = selectedIndex;
    setSelectedIndex(null);
    if (returnIndex !== null) requestAnimationFrame(() => triggerRefs.current[returnIndex]?.focus());
  };
  const previous = () => setSelectedIndex((current) => current === null ? null : current > 0 ? current - 1 : images.length - 1);
  const next = () => setSelectedIndex((current) => current === null ? null : current < images.length - 1 ? current + 1 : 0);

  useEffect(() => {
    if (selectedIndex === null) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  // Handlers use current state via functional setters.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, selectedIndex]);

  if (images.length === 0) {
    return (
      <div className="media-empty">
        <span className="media-empty-index" aria-hidden="true">00</span>
        <div>
          <h3>{isEn ? "The gallery is" : "Galeri sedang"}<span>{isEn ? " being prepared." : " kami siapkan."}</span></h3>
          <p>{dict.gallery.emptyGallery}</p>
        </div>
        <a className="media-primary-action" href={getLocalizedPath("/pricelist")}>
          {isEn ? "Explore services" : "Lihat layanan"}
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <button
            ref={(element) => { triggerRefs.current[index] = element; }}
            type="button"
            key={item.id || index}
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
            aria-label={`${isEn ? "Open photo" : "Buka foto"} ${item.Title || index + 1}`}
          >
            <span className="media-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.Image} alt={item.altText || item.Title || `${isEn ? "MobiCare repair documentation" : "Dokumentasi servis MobiCare"} ${index + 1}`} loading={index < 4 ? "eager" : "lazy"} />
              <span className="media-zoom" aria-hidden="true"><ZoomIn size={20} /></span>
            </span>
            {item.Title && <span className="gallery-caption"><span className="gallery-caption-index">{String(index + 1).padStart(2, "0")}</span><strong>{item.Title}</strong></span>}
          </button>
        ))}
      </div>

      {selectedImage && selectedIndex !== null && (
        <div className="media-lightbox" role="dialog" aria-modal="true" aria-label={isEn ? "Gallery preview" : "Pratinjau galeri"} onClick={close}>
          <button ref={closeButtonRef} type="button" className="media-lightbox-close" onClick={close} aria-label={dict.common.close}><X size={22} /></button>
          {images.length > 1 && <button type="button" className="media-lightbox-nav media-lightbox-nav--prev" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label={isEn ? "Previous photo" : "Foto sebelumnya"}><ChevronLeft size={24} /></button>}
          <div className="media-lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <div className="media-lightbox-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedImage.Image} alt={selectedImage.altText || selectedImage.Title || (isEn ? "MobiCare repair documentation" : "Dokumentasi servis MobiCare")} />
            </div>
            <div className="media-lightbox-caption">
              <span>{String(selectedIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
              {selectedImage.Title && <span>{selectedImage.Title}</span>}
            </div>
          </div>
          {images.length > 1 && <button type="button" className="media-lightbox-nav media-lightbox-nav--next" onClick={(event) => { event.stopPropagation(); next(); }} aria-label={isEn ? "Next photo" : "Foto berikutnya"}><ChevronRight size={24} /></button>}
        </div>
      )}
    </>
  );
}
