"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle, X, ZoomIn } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { whatsappUrl } from "@/lib/constants";
import type { PromoImageItem } from "@/lib/promo-server";

interface PromoViewerProps { promos: PromoImageItem[]; }

export default function PromoViewer({ promos }: PromoViewerProps) {
  const { dict, locale } = useI18n();
  const isEn = locale === "en";
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedPromo = selectedIndex === null ? null : promos[selectedIndex];

  const close = () => {
    const returnIndex = selectedIndex;
    setSelectedIndex(null);
    if (returnIndex !== null) requestAnimationFrame(() => triggerRefs.current[returnIndex]?.focus());
  };
  const previous = () => setSelectedIndex((current) => current === null ? null : current > 0 ? current - 1 : promos.length - 1);
  const next = () => setSelectedIndex((current) => current === null ? null : current < promos.length - 1 ? current + 1 : 0);

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
  }, [promos.length, selectedIndex]);

  if (promos.length === 0) {
    return (
      <div className="media-empty">
        <span className="media-empty-index" aria-hidden="true">00</span>
        <div>
          <h3>{isEn ? "No active offers" : "Belum ada promo"}<span>{isEn ? " right now." : " aktif saat ini."}</span></h3>
          <p>{dict.promo.emptyPromo}</p>
        </div>
        <a
          className="media-primary-action"
          href={whatsappUrl(isEn
            ? "Hello MobiCare Service Center, I would like to ask about current service offers for my device."
            : "Halo MobiCare Service Center, saya ingin menanyakan penawaran servis untuk perangkat saya.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} aria-hidden="true" />
          {isEn ? "Ask on WhatsApp" : "Tanya via WhatsApp"}
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="promo-grid">
        {promos.map((item, index) => (
          <button
            ref={(element) => { triggerRefs.current[index] = element; }}
            type="button"
            key={item.id || index}
            className="promo-item"
            onClick={() => setSelectedIndex(index)}
            aria-label={`${isEn ? "Open promo" : "Buka promo"} ${item.Title || index + 1}`}
          >
            <span className="media-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.Image} alt={item.altText || item.Title || `Promo MobiCare ${index + 1}`} loading={index < 2 ? "eager" : "lazy"} />
              <span className="media-zoom" aria-hidden="true"><ZoomIn size={20} /></span>
              {item.badge && <span className="promo-badge">{item.badge}</span>}
            </span>
            {(item.Title || item.validUntil) && (
              <span className="promo-meta">
                <span className="promo-meta-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.Title || (isEn ? "MobiCare offer" : "Penawaran MobiCare")}</strong>
                {item.validUntil && <time>{item.validUntil}</time>}
              </span>
            )}
          </button>
        ))}
      </div>

      {selectedPromo && selectedIndex !== null && (
        <div className="media-lightbox" role="dialog" aria-modal="true" aria-label={isEn ? "Promo preview" : "Pratinjau promo"} onClick={close}>
          <button ref={closeButtonRef} type="button" className="media-lightbox-close" onClick={close} aria-label={dict.common.close}><X size={22} /></button>
          {promos.length > 1 && <button type="button" className="media-lightbox-nav media-lightbox-nav--prev" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label={isEn ? "Previous promo" : "Promo sebelumnya"}><ChevronLeft size={24} /></button>}
          <div className={`media-lightbox-shell${selectedPromo.waNote ? " media-lightbox-shell--whatsapp" : ""}`} onClick={(event) => event.stopPropagation()}>
            <div className="media-lightbox-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedPromo.Image} alt={selectedPromo.altText || selectedPromo.Title || (isEn ? "MobiCare promo" : "Promo MobiCare")} />
            </div>
            <div className="media-lightbox-caption">
              <span>{String(selectedIndex + 1).padStart(2, "0")} / {String(promos.length).padStart(2, "0")}</span>
              {selectedPromo.Title && <span>{selectedPromo.Title}</span>}
            </div>
            {selectedPromo.waNote && (
              <a
                className="media-lightbox-whatsapp"
                href={whatsappUrl(selectedPromo.waNote)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                <MessageCircle size={17} aria-hidden="true" />
                {isEn ? "Ask about this offer on WhatsApp" : "Tanyakan promo ini via WhatsApp"}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
          {promos.length > 1 && <button type="button" className="media-lightbox-nav media-lightbox-nav--next" onClick={(event) => { event.stopPropagation(); next(); }} aria-label={isEn ? "Next promo" : "Promo berikutnya"}><ChevronRight size={24} /></button>}
        </div>
      )}
    </>
  );
}
