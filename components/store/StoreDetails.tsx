"use client";

import { ArrowUpRight, Star, X } from "lucide-react";
import { type Store, storeDirectionsUrl, storeWhatsAppUrl } from "@/lib/stores";

export default function StoreDetails({ store, isEnglish, onClose }: {
  store: Store; isEnglish: boolean; onClose: () => void;
}) {
  const snapshot = store.googleRatingSnapshot;
  const locale = isEnglish ? "en-GB" : "id-ID";
  const date = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${snapshot.checkedAt}T00:00:00Z`));
  return (
    <section className="store-details" aria-label={`${isEnglish ? "Branch details" : "Detail cabang"} ${store.name}`} onKeyDown={(event) => {
      if (event.key === "Escape") { event.stopPropagation(); onClose(); }
    }}>
      <button className="store-details-close" type="button" onClick={onClose} aria-label={isEnglish ? "Close branch details" : "Tutup detail cabang"}><X size={18} aria-hidden="true" /></button>
      <h3>MobiCare<br />{store.name}</h3>
      <div className="store-rating">
        <strong>{snapshot.rating.toLocaleString(locale, { minimumFractionDigits: 1 })}</strong>
        <span className="store-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, index) => (
          <span className="store-star" key={index}>
            <Star size={16} />
            <span style={{ width: `${Math.max(0, Math.min(1, snapshot.rating - index)) * 100}%` }}><Star size={16} fill="currentColor" /></span>
          </span>
        ))}</span>
        <span>{snapshot.reviewCount} {isEnglish ? (snapshot.reviewCount === 1 ? "review" : "reviews") : "ulasan"}</span>
        <span className="store-sr-only">{isEnglish ? "out of 5 stars" : "dari 5 bintang"}</span>
      </div>
      <p className="store-snapshot">Rating Google Maps · {isEnglish ? "Checked" : "Diperiksa"} {date}</p>
      <p className="store-details-address">{store.address}</p>
      <a className="store-details-phone" href={`tel:${store.phone}`}>{store.phone}</a>
      <div className="store-details-actions">
        <a href={storeDirectionsUrl(store)} target="_blank" rel="noopener noreferrer">{isEnglish ? "Directions" : "Petunjuk Arah"}</a>
        <a href={storeWhatsAppUrl(store)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <a className="store-details-source" href={snapshot.sourceUrl} target="_blank" rel="noopener noreferrer">{isEnglish ? "View on Google Maps" : "Lihat di Google Maps"}<ArrowUpRight size={16} aria-hidden="true" /></a>
    </section>
  );
}
