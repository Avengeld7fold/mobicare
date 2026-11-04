"use client";

import { useState, useEffect } from "react";
import FixmiLoader from "./FixmiLoader";
import { useAssetPreloader } from "./useAssetPreloader";

/**
 * LoadingGate — bungkus aplikasi.
 *
 * Loader dikendalikan oleh environment variable `NEXT_PUBLIC_ENABLE_LOADER === "1"`.
 * Secara default nonaktif untuk efisiensi render dan performa instant.
 */
const ENABLE_LOADER = process.env.NEXT_PUBLIC_ENABLE_LOADER === "1";
const DISABLE_LOADER = !ENABLE_LOADER;

const CRITICAL_ASSETS: string[] = [];

export default function LoadingGate({ children }: { children: React.ReactNode }) {
  const { progress } = useAssetPreloader(DISABLE_LOADER ? [] : CRITICAL_ASSETS, {
    waitForFonts: ENABLE_LOADER,
    waitForWindowLoad: false,
  });
  const [revealed, setRevealed] = useState(DISABLE_LOADER);

  useEffect(() => {
    if (DISABLE_LOADER) {
      (window as unknown as Record<string, unknown>).__fixmiLoaded = true;
      window.dispatchEvent(new Event("fixmi:loaded"));
    }
  }, []);

  return (
    <>
      {children}
      {!revealed && (
        <FixmiLoader
          progress={progress}
          onDone={() => {
            setRevealed(true);
            // Sinyal global untuk splash intro hero
            (window as unknown as Record<string, unknown>).__fixmiLoaded = true;
            window.dispatchEvent(new Event("fixmi:loaded"));
          }}
          background="#080c09"
          minDuration={800}
        />
      )}
    </>
  );
}
