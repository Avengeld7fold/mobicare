import type { StoreHoursConfig } from "./storeStatus";

export interface Store {
  key: string;
  name: string;
  region: string;
  address: string;
  phone: string;
  mapUrl: string;
  lat: number;
  lng: number;
  schedule: StoreHoursConfig | null;
  googleRatingSnapshot: {
    rating: number;
    reviewCount: number;
    checkedAt: string;
    sourceUrl: string;
  };
}

// Addresses/contacts supplied by Erwin; coordinates verified against the
// supplied Google Maps listings on 2026-10-20, not inherited from Fixmi.
export const STORES: Store[] = [
  {
    key: "teuku-umar", name: "Teuku Umar", region: "Denpasar",
    address: "Jl. Teuku Umar No.57, Dauh Puri Kauh, Kec. Denpasar Barat, Kota Denpasar, Bali 80113",
    phone: "08991099999", mapUrl: "https://share.google/6c6c2hDtJye4EdXhJ",
    lat: -8.6705254, lng: 115.2095412, schedule: null,
    googleRatingSnapshot: { rating: 4.4, reviewCount: 167, checkedAt: "2026-10-20", sourceUrl: "https://www.google.com/maps/place/Mobicare+Service+Center/data=!4m2!3m1!1s0x0:0x7e4bf1c703f4a420" },
  },
  {
    key: "canggu", name: "Canggu", region: "Badung",
    address: "Jl. Raya Canggu No.60, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    phone: "081999334664", mapUrl: "https://share.google/W6ZCTd5R5sQA2J2nr",
    lat: -8.6440305, lng: 115.1572175, schedule: null,
    googleRatingSnapshot: { rating: 5, reviewCount: 1, checkedAt: "2026-10-20", sourceUrl: "https://www.google.com/maps/place/Mobicare+Service+Center+Canggu/data=!4m2!3m1!1s0x0:0xb83411c0921f4f35" },
  },
  {
    key: "gatot-subroto", name: "Gatot Subroto", region: "Denpasar",
    address: "Jl. Gatot Subroto Tengah No.60, Dangin Puri Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80234",
    phone: "08133351114", mapUrl: "https://share.google/LvGIBpCNA1VzBTT34",
    lat: -8.6361525, lng: 115.2205558, schedule: null,
    googleRatingSnapshot: { rating: 4.9, reviewCount: 61, checkedAt: "2026-10-20", sourceUrl: "https://www.google.com/maps/place/Mobicare+Service+Center+-+Gatot+Subroto/data=!4m2!3m1!1s0x0:0xb733a96a473a7ebb" },
  },
];

// Geographic bounds, not branch locations; includes Bali and Lombok in full.
export const STORE_OVERVIEW_BOUNDS: [[number, number], [number, number]] = [
  [-9.05, 114.4], [-8.05, 116.85],
];

export const storeWhatsAppUrl = (store: Store) =>
  `https://wa.me/${store.phone.replace(/^0/, "62")}`;

export const storeDirectionsUrl = (store: Store) =>
  `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;
