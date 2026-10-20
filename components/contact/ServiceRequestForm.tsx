"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle, ArrowRight, RotateCcw } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/context";

const DEVICES = [
  {
    key: "iphone",
    label: "iPhone",
    image: "/images/iphone.webp",
    placeholderId: "Misal: iPhone 15 Pro Max / 13 Mini",
    placeholderEn: "E.g., iPhone 15 Pro Max / 13 Mini",
  },
  {
    key: "ipad",
    label: "iPad",
    image: "/images/ipad.webp",
    placeholderId: "Misal: iPad Pro 11\" M2 / iPad Air 5",
    placeholderEn: "E.g., iPad Pro 11\" M2 / iPad Air 5",
  },
  {
    key: "macbook",
    label: "MacBook",
    image: "/images/macbook.webp",
    placeholderId: "Misal: MacBook Air M2 / Pro 14\"",
    placeholderEn: "E.g., MacBook Air M2 / Pro 14\"",
  },
  {
    key: "iwatch",
    label: "Apple Watch",
    image: "/images/iwatch.webp",
    placeholderId: "Misal: Apple Watch Series 8 / Ultra",
    placeholderEn: "E.g., Apple Watch Series 8 / Ultra",
  },
  {
    key: "android",
    label: "Android",
    image: "/images/android.webp",
    placeholderId: "Misal: Samsung S24 Ultra / Pixel 8",
    placeholderEn: "E.g., Samsung S24 Ultra / Pixel 8",
  },
];

const COMMON_SYMPTOMS_ID = [
  "Layar Pecah / Retak",
  "Baterai Drop / Kembung",
  "Mati Total",
  "Kena Air (Water Damage)",
  "Kamera Bermasalah",
  "Tidak Bisa Dicas",
  "Sinyal / Wi-Fi Eror",
  "Ganti Kaca Belakang",
];

const COMMON_SYMPTOMS_EN = [
  "Cracked Screen / Display",
  "Battery Drain / Replacement",
  "Dead Unit / No Power",
  "Water / Liquid Damage",
  "Camera Malfunction",
  "Charging Port Fault",
  "Signal / Wi-Fi Glitch",
  "Back Glass Replacement",
];

type Errors = Partial<Record<"name" | "phone" | "issue", string>>;

export default function ServiceRequestForm() {
  const { dict, getLocalizedPath } = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [device, setDevice] = useState("iphone");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState("");

  const isEn = dict.locale === "en";
  const commonSymptoms = isEn ? COMMON_SYMPTOMS_EN : COMMON_SYMPTOMS_ID;
  const selectedDeviceObj = DEVICES.find((d) => d.key === device) ?? DEVICES[0];

  const toggleSymptom = (symptom: string) => {
    const current = issue.trim();
    if (!current) {
      setIssue(symptom);
      return;
    }

    const escaped = symptom.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(^|,\\s*)${escaped}(,\\s*|$)`, "i");

    if (regex.test(current)) {
      const cleaned = current
        .replace(regex, "$1")
        .replace(/^,\s*|,\s*$/g, "")
        .replace(/,\s*,/g, ", ")
        .trim();
      setIssue(cleaned);
    } else {
      setIssue(`${current}, ${symptom}`);
    }
  };

  const isSymptomActive = (symptom: string) => {
    return issue.toLowerCase().includes(symptom.toLowerCase());
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setDevice("iphone");
    setModel("");
    setIssue("");
    setErrors({});
    setSent(false);
    setPreparedUrl("");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) {
      next.name = isEn ? "Please enter your full name." : "Isi nama lengkap Anda.";
    }
    if (!phone.trim()) {
      next.phone = isEn ? "Please enter your WhatsApp number." : "Isi nomor WhatsApp Anda.";
    } else if (phone.replace(/\D/g, "").length < 8) {
      next.phone = isEn
        ? "WhatsApp number too short (minimum 8 digits)."
        : "Nomor WhatsApp terlalu pendek (minimal 8 digit).";
    }
    if (!issue.trim()) {
      next.issue = isEn
        ? "Please describe the issue or symptoms."
        : "Tuliskan keluhan atau kendala perangkat Anda.";
    }

    setErrors(next);

    if (next.name) {
      document.getElementById("req-name")?.focus();
      return;
    }
    if (next.phone) {
      document.getElementById("req-phone")?.focus();
      return;
    }
    if (next.issue) {
      document.getElementById("req-issue")?.focus();
      return;
    }

    const deviceLabel = selectedDeviceObj.label;
    const fullDevice = model.trim() ? `${deviceLabel} (${model.trim()})` : deviceLabel;

    const message = isEn
      ? [
          "Hello MobiCare Service Center, I would like to consult regarding my device repair:",
          "",
          `• Full Name: ${name.trim()}`,
          `• WhatsApp No.: ${phone.trim()}`,
          `• Device: ${fullDevice}`,
          `• Issue & Symptoms: ${issue.trim()}`,
          "",
          "Please let me know the estimated cost and technical solution. Thank you.",
        ].join("\n")
      : [
          "Halo MobiCare Service Center, saya mau konsultasi perbaikan gadget:",
          "",
          `• Nama: ${name.trim()}`,
          `• No. WhatsApp: ${phone.trim()}`,
          `• Perangkat: ${fullDevice}`,
          `• Kendala / Keluhan: ${issue.trim()}`,
          "",
          "Mohon info estimasi biaya dan penanganan teknisnya. Terima kasih.",
        ].join("\n");

    const waUrl = whatsappUrl(message);
    setPreparedUrl(waUrl);
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={submit} noValidate className="mobi-contact-card">
      {/* Success / Sent Confirmation Banner */}
      {sent && (
        <div className="mobi-contact-success" role="status">
          <div className="mobi-contact-success-icon">
            <Check size={14} strokeWidth={2.5} />
          </div>
          <div>
            <p className="mobi-contact-success-title">
              {isEn ? "Your message is ready." : "Pesan konsultasi siap."}
            </p>
            <p>
              {isEn ? "Continue in WhatsApp to review and send it. Nothing has been sent automatically." : "Lanjutkan di WhatsApp untuk memeriksa dan mengirim pesan. Belum ada pesan yang dikirim otomatis."}
            </p>
            <a href={preparedUrl} target="_blank" rel="noopener noreferrer">{isEn ? "Open WhatsApp again" : "Buka WhatsApp kembali"}</a>
          </div>
        </div>
      )}

      {/* Seksi 1: Informasi Kontak */}
      <div className="mobi-form-step">
        <div className="mobi-form-step-header">
          <h2 className="mobi-form-step-title">
            {isEn ? "1. Contact Information" : "1. Informasi Kontak"}
          </h2>
          <p className="mobi-form-step-desc">
            {isEn
              ? "To confirm your device diagnostic and repair cost estimate."
              : "Untuk memudahkan konfirmasi estimasi biaya dan waktu pengerjaan."}
          </p>
        </div>

        <div className="mobi-form-controls mobi-form-grid-2">
          <div className="mobi-form-field">
            <div className="mobi-form-field-head">
              <label htmlFor="req-name" className="mobi-form-label">
                {dict.contact.form.nameLabel} <span className="text-red-400">*</span>
              </label>
            </div>
            <input
              id="req-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={dict.contact.form.namePlaceholder}
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-required="true"
              aria-describedby={errors.name ? "req-name-error" : undefined}
              className={`mobi-form-input ${errors.name ? "is-error" : ""}`}
            />
            {errors.name && (
              <p id="req-name-error" className="mobi-form-error" role="alert">
                • {errors.name}
              </p>
            )}
          </div>

          <div className="mobi-form-field">
            <div className="mobi-form-field-head">
              <label htmlFor="req-phone" className="mobi-form-label">
                {dict.contact.form.phoneLabel} <span className="text-red-400">*</span>
              </label>
            </div>
            <input
              id="req-phone"
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={dict.contact.form.phonePlaceholder}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-required="true"
              aria-describedby={errors.phone ? "req-phone-error" : undefined}
              className={`mobi-form-input ${errors.phone ? "is-error" : ""}`}
            />
            {errors.phone && (
              <p id="req-phone-error" className="mobi-form-error" role="alert">
                • {errors.phone}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mobi-form-divider" />

      {/* Seksi 2: Perangkat & Model */}
      <div className="mobi-form-step">
        <div className="mobi-form-step-header">
          <h2 className="mobi-form-step-title">
            {isEn ? "2. Device & Model Series" : "2. Perangkat & Seri Model"}
          </h2>
          <p className="mobi-form-step-desc">
            {isEn
              ? "Select gadget category and specify your model."
              : "Pilih kategori gadget dan tuliskan tipe spesifik jika diketahui."}
          </p>
        </div>

        <div className="mobi-form-controls">
        <fieldset className="mobi-device-fieldset">
          <legend className="sr-only">
            {isEn ? "Select device category" : "Pilih kategori perangkat"}
          </legend>
          <div className="mobi-devices-grid">
            {DEVICES.map((d) => {
              const isActive = d.key === device;
              return (
                <label
                  key={d.key}
                  className={`mobi-device-card ${isActive ? "is-active" : ""}`}
                >
                  <input
                    type="radio"
                    name="device"
                    value={d.key}
                    checked={isActive}
                    onChange={() => setDevice(d.key)}
                    className="sr-only"
                  />
                  <div className="mobi-device-image-wrapper">
                    <Image
                      src={d.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 110px"
                      className="mobi-device-image"
                    />
                  </div>
                  <span className="mobi-device-label">{d.label}</span>
                  {isActive && <Check className="mobi-device-check" size={16} aria-hidden="true" />}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mobi-form-field">
          <div className="mobi-form-field-head">
            <label htmlFor="req-model" className="mobi-form-label">
              {dict.contact.form.modelLabel ?? (isEn ? "Model / Series Type" : "Tipe / Seri Model")}
            </label>
            <span className="mobi-form-hint">
              {isEn ? "optional" : "opsional"}
            </span>
          </div>
          <input
            id="req-model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder={isEn ? selectedDeviceObj.placeholderEn : selectedDeviceObj.placeholderId}
            className="mobi-form-input"
          />
        </div>
        </div>
      </div>

      <div className="mobi-form-divider" />

      {/* Seksi 3: Detail Kerusakan */}
      <div className="mobi-form-step">
        <div className="mobi-form-step-header">
          <h2 className="mobi-form-step-title">
            {isEn ? "3. Issue & Fault Details" : "3. Detail Kerusakan"}
          </h2>
          <p className="mobi-form-step-desc">
            {isEn
              ? "Select common faults below or describe your specific problem."
              : "Pilih kendala umum di bawah atau jelaskan keluhan Anda."}
          </p>
        </div>

        {/* Quick Symptom Chips */}
        <div className="mobi-form-controls">
        <div>
          <span className="mobi-symptoms-help">
            {isEn ? "Common symptoms (tap to add):" : "Kendala yang sering terjadi (klik untuk menambahkan):"}
          </span>
          <div className="mobi-symptoms-wrap">
            {commonSymptoms.map((symptom) => {
              const active = isSymptomActive(symptom);
              return (
                <button
                  key={symptom}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleSymptom(symptom)}
                  className={`mobi-symptom-chip ${active ? "is-active" : ""}`}
                >
                  <span>{symptom}</span>
                  {active && (
                    <Check size={12} strokeWidth={2.5} className="mobi-symptom-check" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mobi-form-field">
          <div className="mobi-form-field-head">
            <label htmlFor="req-issue" className="mobi-form-label">
              {dict.contact.form.issueLabel} <span className="text-red-400">*</span>
            </label>
          </div>
          <textarea
            id="req-issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            rows={3}
            placeholder={dict.contact.form.issuePlaceholder}
            aria-invalid={!!errors.issue}
            aria-required="true"
            aria-describedby={errors.issue ? "req-issue-error" : undefined}
            className={`mobi-form-textarea ${errors.issue ? "is-error" : ""}`}
          />
          {errors.issue && (
            <p id="req-issue-error" className="mobi-form-error" role="alert">
              • {errors.issue}
            </p>
          )}
        </div>
        </div>
      </div>

      {/* Bottom CTA Footer */}
      <div className="mobi-contact-footer">
        <div className="mobi-contact-hours">
          <p className="mobi-contact-next">{isEn ? "This form prepares your message. Review and send it in WhatsApp." : "Form ini menyiapkan pesan Anda. Periksa dan kirim melalui WhatsApp."}</p>
          <p className="mobi-contact-sublink">
            {isEn ? "Direct options: " : "Opsi langsung: "}
            <a
              href={whatsappUrl(isEn ? "Hello MobiCare, I would like to consult about a device repair." : "Halo MobiCare, saya ingin konsultasi perbaikan perangkat.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isEn ? "Direct WhatsApp" : "WhatsApp Langsung"}
            </a>
            {" · "}
            <Link href={getLocalizedPath("/pricelist")}>
              {isEn ? "Price List" : "Daftar Harga"}
            </Link>
          </p>
        </div>

        <div className="mobi-contact-actions">
          {sent && (
            <button
              type="button"
              onClick={resetForm}
              className="mobi-btn-reset"
              title={isEn ? "Reset form" : "Reset formulir"}
            >
              <RotateCcw size={14} />
              <span>{dict.contact.form.resetBtn ?? (isEn ? "Reset" : "Reset Form")}</span>
            </button>
          )}

          <button type="submit" className="mobi-btn-submit">
            {sent ? (
              <Check size={16} strokeWidth={2.5} />
            ) : (
              <MessageCircle size={16} strokeWidth={2} />
            )}
            <span>
              {sent
                ? dict.contact.form.resendBtn ?? (isEn ? "Resend to WhatsApp" : "Kirim Ulang ke WA")
                : dict.contact.form.submitBtn}
            </span>
            <ArrowRight size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </form>
  );
}
