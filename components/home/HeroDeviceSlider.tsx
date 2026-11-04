"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

interface HeroDeviceSliderProps {
  className?: string;
}

export default function HeroDeviceSlider({ className = "" }: HeroDeviceSliderProps) {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  // Subtle peek cue on initial load if user hasn't interacted yet
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const t1 = setTimeout(() => {
      if (hasInteracted.current) return;
      setSliderPos(43);
      const t2 = setTimeout(() => {
        if (hasInteracted.current) return;
        setSliderPos(57);
        const t3 = setTimeout(() => {
          if (hasInteracted.current) return;
          setSliderPos(50);
        }, 500);
        return () => clearTimeout(t3);
      }, 500);
      return () => clearTimeout(t2);
    }, 1200);

    return () => clearTimeout(t1);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0) return;
    const rawPos = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, Math.round(rawPos * 10) / 10));
    setSliderPos(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    hasInteracted.current = true;
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // safe fallback for synthetic events / browsers
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    hasInteracted.current = true;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`mobi-hero__slider-container ${isDragging ? "is-dragging" : ""} ${className}`.trim()}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="region"
      aria-label={
        isEn
          ? "Interactive device repair comparison slider"
          : "Slider perbandingan interaktif perbaikan perangkat"
      }
    >
      {/* Layer 1 (Base - Right Side): Perangkat Sesudah Servis (Fixed / Mulus) */}
      <div className="mobi-hero__slider-base" aria-hidden="true">
        <Image
          src="/images/iphone-fixed-2000.webp"
          alt=""
          width={2000}
          height={1500}
          priority
          sizes="(max-width: 767px) 100vw, min(100vw, 133.333vh)"
          className="mobi-hero__device-img"
        />
      </div>

      {/* Layer 2 (Overlay - Left Side): Perangkat Sebelum Servis (Broken / Rusak) */}
      <div
        className="mobi-hero__slider-overlay"
        style={{ clipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)` }}
        aria-hidden="true"
      >
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

      {/* Editorial Comparison Tags (Clean, Minimal, Non-AI-Slop) */}
      <div
        className="mobi-hero__slider-tag mobi-hero__slider-tag--before"
        style={{ opacity: sliderPos < 18 ? 0 : 1 }}
        aria-hidden="true"
      >
        <span className="mobi-hero__slider-tag-idx">01</span>
        <span className="mobi-hero__slider-tag-divider">/</span>
        <span className="mobi-hero__slider-tag-text">
          {isEn ? "BEFORE" : "SEBELUM"}
        </span>
      </div>

      <div
        className="mobi-hero__slider-tag mobi-hero__slider-tag--after"
        style={{ opacity: sliderPos > 82 ? 0 : 1 }}
        aria-hidden="true"
      >
        <span className="mobi-hero__slider-tag-idx">02</span>
        <span className="mobi-hero__slider-tag-divider">/</span>
        <span className="mobi-hero__slider-tag-text">
          {isEn ? "AFTER" : "SESUDAH"}
        </span>
      </div>

      {/* Divider Bar & Frosted Glass Handle */}
      <div
        className="mobi-hero__slider-line"
        style={{ left: `${sliderPos}%` }}
        aria-hidden="true"
      >
        <div
          role="slider"
          tabIndex={0}
          aria-valuenow={sliderPos}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={
            isEn
              ? "Slide to compare device before and after repair"
              : "Geser untuk membandingkan perangkat sebelum dan sesudah servis"
          }
          className="mobi-hero__slider-handle"
          onKeyDown={handleKeyDown}
        >
          <svg
            className="mobi-hero__slider-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="8 7 3 12 8 17" />
            <polyline points="16 7 21 12 16 17" />
          </svg>
        </div>
      </div>
    </div>
  );
}
