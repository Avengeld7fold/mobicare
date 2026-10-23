"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight, Check, MapPin, MessageCircle, Phone, RotateCcw } from "lucide-react";
import { STORES, storeDirectionsUrl, storeWhatsAppUrl } from "@/lib/stores";
import "./our-store.css";
import StoreDetails from "./StoreDetails";

const StoreMap = dynamic(() => import("./StoreMap").catch(() => ({
  default: function MapUnavailable({ isEnglish }: { isEnglish: boolean }) {
    return <p className="store-map-unavailable" role="status">{isEnglish
      ? "The map could not load. Use the directions link for your branch below."
      : "Peta belum bisa dimuat. Gunakan tautan petunjuk arah pada cabang pilihanmu."}</p>;
  },
})), { ssr: false, loading: () => <div className="store-map-loading" aria-hidden="true" /> });

export default function OurStoreContent({ isEnglish = false }: { isEnglish?: boolean }) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [viewRequest, setViewRequest] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const activeStore = STORES.find((store) => store.key === activeKey);
  const selectStore = useCallback((key: string) => {
    setActiveKey(key);
    setDetailOpen(true);
    setViewRequest((value) => value + 1);
  }, []);
  function selectFromList(key: string) {
    selectStore(key);
    if (window.matchMedia("(max-width: 1050px)").matches) {
      document.getElementById("store-map")?.scrollIntoView({
        block: "center",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    }
  }

  function resetMap() {
    setDetailOpen(false);
    setActiveKey(null);
    setViewRequest((value) => value + 1);
  }
  const closeDetails = useCallback(() => {
    setDetailOpen(false);
    document.querySelector<HTMLButtonElement>('.store-select[aria-pressed="true"]')?.focus({ preventScroll: true });
  }, []);

  return (
    <div className="store-page" onKeyDown={(event) => {
      if (event.key === "Escape" && detailOpen) { event.stopPropagation(); closeDetails(); }
    }}>
      <header className="store-intro mobi-container">
        <h1>{isEnglish ? "Find MobiCare" : "Temukan MobiCare"}<span>{isEnglish ? "near you." : "di dekatmu."}</span></h1>
        <div className="store-intro-copy">
          <p>{isEnglish
            ? "Visit us in Teuku Umar, Canggu, or Gatot Subroto. Choose a branch to find your way and talk to our team."
            : "Kunjungi kami di Teuku Umar, Canggu, atau Gatot Subroto. Pilih cabang untuk melihat lokasi dan menghubungi tim kami."}</p>
          <a href="#store-directory">{isEnglish ? "Explore our branches" : "Jelajahi cabang kami"}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </header>

      <section className="store-directory" id="store-directory" aria-label={isEnglish ? "MobiCare branches" : "Cabang MobiCare"}>
        <div className="mobi-container store-directory-grid">
          <div className="store-list">
            <div className="store-list-heading">
              <h2>{isEnglish ? "Our branches" : "Cabang kami"}</h2>
              <span>{isEnglish ? "3 locations in Bali" : "3 lokasi di Bali"}</span>
            </div>
            <ol className="store-rows">
              {STORES.map((store, index) => {
                const selected = activeKey === store.key;
                return (
                  <li key={store.key} className={selected ? "store-row is-selected" : "store-row"}>
                    <div className="store-row-title">
                      <span className="store-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{store.name}</h3>
                        <span className="store-region">{store.region}</span>
                      </div>
                      <button
                        type="button"
                        className="store-select"
                        aria-label={isEnglish ? `Show ${store.name} on map` : `Lihat ${store.name} di peta`}
                        aria-pressed={selected}
                        aria-controls="store-map"
                        onClick={() => selectFromList(store.key)}
                      >
                        {selected ? <Check size={18} aria-hidden="true" /> : <MapPin size={18} aria-hidden="true" />}
                        <span>{selected ? (isEnglish ? "Selected" : "Dipilih") : (isEnglish ? "Map" : "Peta")}</span>
                      </button>
                    </div>
                    <div className="store-row-body">
                      <p>{store.address}</p>
                      <a className="store-phone" href={`tel:${store.phone}`} aria-label={`${isEnglish ? "Call" : "Telepon"} ${store.name}: ${store.phone}`}>
                        <Phone size={15} aria-hidden="true" />{store.phone}
                      </a>
                      <div className="store-actions">
                        <a className="store-directions" href={storeDirectionsUrl(store)} target="_blank" rel="noopener noreferrer" aria-label={`${isEnglish ? "Directions to" : "Petunjuk arah ke"} ${store.name} (Google Maps)`}>
                          {isEnglish ? "Directions" : "Petunjuk arah"}<ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                        <a className="store-whatsapp" href={storeWhatsAppUrl(store)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${store.name}`}>
                          <MessageCircle size={17} aria-hidden="true" />WhatsApp
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="store-visit-note">{isEnglish ? "Planning a visit? Contact your branch to confirm opening hours." : "Sebelum berkunjung, hubungi cabang untuk memastikan jam operasional."}</p>
          </div>

          <div className="store-map-column">
            <div className="store-map-toolbar">
              <p aria-live="polite" aria-atomic="true">{activeStore ? activeStore.name : (isEnglish ? "Explore our Bali branches" : "Jelajahi cabang kami di Bali")}</p>
              <button type="button" onClick={resetMap}><RotateCcw size={16} aria-hidden="true" />{isEnglish ? "View all" : "Lihat semua"}</button>
            </div>
            <div id="store-map" className="store-map-frame">
              <StoreMap isEnglish={isEnglish} activeKey={activeKey} viewRequest={viewRequest} onSelect={selectStore} detailOpen={detailOpen} onCloseDetails={closeDetails} />
            </div>
            {detailOpen && activeStore && <div className="store-mobile-details"><StoreDetails store={activeStore} isEnglish={isEnglish} onClose={closeDetails} /></div>}
            <p className="store-map-caption">{isEnglish
              ? "All three MobiCare branches are shown in the Bali overview. Choose a pin or branch for details."
              : "Ketiga cabang MobiCare tampil langsung di peta Bali. Pilih pin atau cabang untuk melihat detail."}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
