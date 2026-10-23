"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import StoreDetails from "./StoreDetails";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { STORES, STORE_OVERVIEW_BOUNDS } from "@/lib/stores";

interface Props {
  activeKey: string | null;
  viewRequest: number;
  isEnglish: boolean;
  onSelect: (key: string) => void;
  detailOpen: boolean;
  onCloseDetails: () => void;
}

function fitOverview(map: L.Map, animate: boolean) {
  const mobile = window.matchMedia("(max-width: 720px)").matches;
  const bounds = mobile
    ? L.latLngBounds(STORES.map((store) => [store.lat, store.lng]))
    : L.latLngBounds(STORE_OVERVIEW_BOUNDS);
  map.fitBounds(bounds, {
    padding: mobile ? [52, 52] : [18, 18],
    maxZoom: mobile ? 12 : 11,
    animate,
    duration: 0.45,
  });
}

export default function StoreMap({ activeKey, viewRequest, isEnglish, onSelect, detailOpen, onCloseDetails }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const selection = useRef<string | null>(activeKey);
  const markers = useRef(new Map<string, L.Marker>());
  const [tileError, setTileError] = useState(false);
  const [popupHost] = useState(() => document.createElement("div"));
  const activeStore = STORES.find(store => store.key === activeKey);

  useEffect(() => {
    if (!container.current) return;
    const map = L.map(container.current, {
      scrollWheelZoom: false, zoomControl: false, minZoom: 2, maxZoom: 19,
      zoomSnap: 0.5,
    });
    mapRef.current = map;
    map.attributionControl.setPrefix(false);
    const markerRegistry = markers.current;
    const zoom = L.control.zoom({
      position: "bottomright",
      zoomInTitle: isEnglish ? "Zoom in" : "Perbesar",
      zoomOutTitle: isEnglish ? "Zoom out" : "Perkecil",
    }).addTo(map);
    const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19, keepBuffer: 0, updateWhenIdle: true,
    });
    let disposed = false;
    let vector: L.MaplibreGL | undefined;
    let fallbackActive = false;
    let timeout: number | undefined;
    const fallback = () => {
      if (disposed || fallbackActive) return;
      fallbackActive = true;
      window.clearTimeout(timeout);
      if (vector && map.hasLayer(vector)) map.removeLayer(vector);
      tiles.addTo(map);
      timeout = window.setTimeout(() => setTileError(true), 12000);
    };
    tiles.on("tileerror", () => setTileError(true));
    tiles.on("tileload", () => {
      window.clearTimeout(timeout);
      setTileError(false);
    });
    const layer = L.layerGroup().addTo(map);
    function keyboardActivate(marker: L.Marker, activate: () => void) {
      marker.getElement()?.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          activate();
        }
      });
    }

    STORES.forEach((store) => {
      const icon = L.divIcon({
        className: "store-pin",
        html: `<svg viewBox="0 0 48 60" aria-hidden="true"><path d="M24 58C22 48 19 42 13 34C8 27.5 6 24 6 19C6 9.1 14.1 1 24 1S42 9.1 42 19C42 24 40 27.5 35 34C29 42 26 48 24 58Z"/><circle cx="24" cy="19" r="9.5"/></svg>`,
        iconSize: [48, 60], iconAnchor: [24, 58],
      });
      const marker = L.marker([store.lat, store.lng], { icon, title: store.name, alt: store.name });
      marker.on("add", () => {
        keyboardActivate(marker, () => onSelect(store.key));
        const element = marker.getElement();
        element?.setAttribute("aria-label", `${isEnglish ? "Select" : "Pilih"} ${store.name}`);
        element?.setAttribute("aria-pressed", String(selection.current === store.key));
        element?.classList.toggle("is-selected", selection.current === store.key);
      });
      marker.addTo(layer);
      marker.on("click", () => onSelect(store.key));
      markerRegistry.set(store.key, marker);
    });

    fitOverview(map, false);
    timeout = window.setTimeout(fallback, 15000);
    void Promise.all([import("maplibre-gl"), import("@maplibre/maplibre-gl-leaflet")]).then(([gl, binding]) => {
      if (disposed || fallbackActive) return;
      gl.setWorkerUrl("/maps/worker/maplibre-gl-worker.mjs");
      vector = binding.maplibreGL({
        style: "/maps/mobicare-light.json",
        attributionControl: { customAttribution: '&copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' },
        interactive: false,
      });
      vector.addTo(map);
      const renderer = vector.getMaplibreMap();
      renderer.once("load", () => {
        window.clearTimeout(timeout);
        setTileError(false);
      });
      renderer.on("error", fallback);
      renderer.on("webglcontextlost", fallback);
    }).catch(fallback);
    const observer = new ResizeObserver(() => {
      map.invalidateSize({ pan: false });
      if (!selection.current) fitOverview(map, false);
    });
    observer.observe(container.current);
    return () => {
      disposed = true;
      observer.disconnect();
      window.clearTimeout(timeout);
      zoom.remove();
      map.remove();
      markerRegistry.clear();
      mapRef.current = null;
    };
  }, [isEnglish, onSelect]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    selection.current = activeKey;
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const store = STORES.find((entry) => entry.key === activeKey);
    map.stop();
    if (store) {
      map.flyTo([store.lat, store.lng], 16, { animate, duration: 0.65 });
    } else {
      fitOverview(map, animate);
    }
    markers.current.forEach((marker, key) => {
      marker.getElement()?.classList.toggle("is-selected", key === activeKey);
      marker.getElement()?.setAttribute("aria-pressed", String(key === activeKey));
    });
  }, [activeKey, viewRequest]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !activeStore || !detailOpen) return;
    const mobile = window.matchMedia("(max-width: 720px)");
    const popup = L.popup({
      className: "store-detail-popup", maxWidth: 300, minWidth: 250,
      closeButton: false, closeOnClick: false, closeOnEscapeKey: false, autoPan: true,
      autoPanPadding: L.point(16, 16), offset: L.point(0, -48),
    }).setLatLng([activeStore.lat, activeStore.lng]).setContent(popupHost);
    const sync = () => {
      if (mobile.matches || map.getZoom() < 12) popup.remove();
      else if (!map.hasLayer(popup)) popup.openOn(map);
    };
    const resize = () => {
      sync();
      if (map.hasLayer(popup)) popup.update();
    };
    // Wait for the selected location to settle before auto-panning its popup.
    map.on("moveend", sync);
    map.on("resize", resize);
    mobile.addEventListener("change", sync);
    if (map.getCenter().distanceTo([activeStore.lat, activeStore.lng]) < 10) sync();
    return () => {
      map.off("moveend", sync);
      map.off("resize", resize);
      mobile.removeEventListener("change", sync);
      popup.remove();
    };
  }, [activeStore, detailOpen, viewRequest, popupHost]);

  return (
    <>
      {detailOpen && activeStore && createPortal(<StoreDetails store={activeStore} isEnglish={isEnglish} onClose={onCloseDetails} />, popupHost)}
      <div ref={container} className="store-map-canvas" role="region" aria-label={isEnglish ? "Interactive map of MobiCare branches" : "Peta interaktif cabang MobiCare"} />
      {tileError && <p className="store-map-error" role="status">{isEnglish
        ? "Map imagery is unavailable. You can still use each branch’s directions link."
        : "Gambar peta belum tersedia. Tautan petunjuk arah tiap cabang tetap dapat digunakan."}</p>}
    </>
  );
}
