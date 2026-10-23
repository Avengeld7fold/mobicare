"use client";

import { useEffect, useRef } from "react";
import { X, ShieldCheck, ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { useI18n } from "@/lib/i18n/context";
import { whatsappUrl } from "@/lib/constants";
import { getWarrantyTerms } from "@/lib/warranty";

export default function WarrantyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const lenis = useLenis();
  const { dict, locale } = useI18n();
  const isEn = locale === "en";
  const terms = getWarrantyTerms(locale);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const wasStopped = lenis?.isStopped;
    dialog.showModal();
    closeButtonRef.current?.focus();
    lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      if (!wasStopped) lenis?.start();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open, lenis]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="warranty-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      className="fixed inset-0 m-0 flex h-full max-h-none w-full max-w-none items-end justify-center border-0 bg-transparent p-3 backdrop:bg-transparent sm:items-center sm:p-6"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label={dict.common.close}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Surface */}
      <div className="fade-rise relative z-10 flex max-h-[90vh] sm:max-h-[85vh] w-full max-w-[34rem] flex-col overflow-hidden rounded-[20px] border border-panel-border bg-panel shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-primary">
              <ShieldCheck className="h-4.5 w-4.5 stroke-[2]" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="warranty-title"
                className="text-base font-bold text-white tracking-[-0.01em]"
              >
                {dict.pricelist.warrantyModalTitle}
              </h2>
              <p className="font-mono text-[0.625rem] uppercase tracking-wider text-neutral-400">
                {dict.pricelist.warrantyModalSubtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label={dict.common.close}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-neutral-400 transition-colors duration-150 hover:border-white/[0.2] hover:text-white active:scale-95"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* ── Scrollable Body ── */}
        <div
          data-lenis-prevent
          className="flex-1 space-y-5 overflow-y-auto [overscroll-behavior:contain] p-5 sm:p-6"
        >
          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 divide-x divide-white/[0.06] rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-center">
            <div className="px-1">
              <span className="block font-mono text-[0.625rem] uppercase tracking-wider text-neutral-400">
                {isEn ? "Period" : "Masa Garansi"}
              </span>
              <span className="mt-0.5 block text-xs sm:text-sm font-bold text-white">
                {isEn ? "As Invoiced" : "Sesuai Invoice"}
              </span>
            </div>
            <div className="px-1">
              <span className="block font-mono text-[0.625rem] uppercase tracking-wider text-neutral-400">
                {isEn ? "Scope" : "Cakupan"}
              </span>
              <span className="mt-0.5 block text-xs sm:text-sm font-bold text-white">
                {isEn ? "Parts & Labor" : "Part & Jasa"}
              </span>
            </div>
            <div className="px-1">
              <span className="block font-mono text-[0.625rem] uppercase tracking-wider text-neutral-400">
                {isEn ? "Claim" : "Syarat Klaim"}
              </span>
              <span className="mt-0.5 block text-xs sm:text-sm font-bold text-white">
                {isEn ? "Digital Invoice" : "Nota Digital / WA"}
              </span>
            </div>
          </div>

          {/* Editorial Terms List */}
          <div className="divide-y divide-white/[0.06] rounded-xl border border-white/[0.08] bg-white/[0.015] px-4 sm:px-5">
            {terms.map((item) => (
              <div key={item.id} className="flex items-start gap-3.5 py-3.5 first:pt-4 last:pb-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] font-mono text-[0.625rem] text-neutral-400">
                  {item.id}
                </span>
                <div className="flex-1 space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-medium text-white tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.08] bg-white/[0.02] px-5 py-3.5 sm:px-6">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            {isEn
              ? "Need more details about warranty coverage?"
              : "Ada pertanyaan seputar ketentuan garansi?"}
          </p>
          <a
            href={whatsappUrl(
              isEn
                ? "Hello MobiCare Service Center, I would like to ask about warranty terms and claims."
                : "Halo MobiCare Service Center, saya ingin bertanya tentang ketentuan dan klaim garansi servis."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors duration-150 hover:text-primary-light"
          >
            <span>{isEn ? "Ask via WhatsApp" : "Tanya via WhatsApp"}</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </dialog>
  );
}
