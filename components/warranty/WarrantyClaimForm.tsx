"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, RotateCcw } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";
import { useI18n } from "@/lib/i18n/context";

type FieldName = "name" | "phone" | "invoice" | "serviceDate" | "device" | "issue" | "agreement";
type Errors = Partial<Record<FieldName, string>>;

const fieldIds: Record<FieldName, string> = {
  name: "claim-name",
  phone: "claim-phone",
  invoice: "claim-invoice",
  serviceDate: "claim-service-date",
  device: "claim-device",
  issue: "claim-issue",
  agreement: "claim-agreement",
};

export default function WarrantyClaimForm() {
  const { locale, getLocalizedPath } = useI18n();
  const isEn = locale === "en";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [invoice, setInvoice] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [preparedUrl, setPreparedUrl] = useState("");
  const today = new Date().toISOString().slice(0, 10);

  const reset = () => {
    setName("");
    setPhone("");
    setInvoice("");
    setServiceDate("");
    setDevice("");
    setIssue("");
    setAgreement(false);
    setErrors({});
    setPreparedUrl("");
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Errors = {};

    if (!name.trim()) next.name = isEn ? "Enter the name used during service." : "Isi nama yang digunakan saat servis.";
    const digits = phone.replace(/\D/g, "");
    if (!phone.trim()) next.phone = isEn ? "Enter your registered WhatsApp number." : "Isi nomor WhatsApp yang terdaftar.";
    else if (digits.length < 8) next.phone = isEn ? "Enter at least 8 digits." : "Masukkan minimal 8 digit.";
    if (!invoice.trim()) next.invoice = isEn ? "Enter the invoice or service number." : "Isi nomor invoice atau nomor servis.";
    if (!serviceDate) next.serviceDate = isEn ? "Select the service date." : "Pilih tanggal servis.";
    else if (serviceDate > today) next.serviceDate = isEn ? "Service date cannot be in the future." : "Tanggal servis tidak boleh di masa depan.";
    if (!device.trim()) next.device = isEn ? "Enter the device and model." : "Isi perangkat dan modelnya.";
    if (!issue.trim()) next.issue = isEn ? "Describe the issue that reappeared." : "Jelaskan kendala yang muncul kembali.";
    if (!agreement) next.agreement = isEn ? "Confirm that you have read the warranty terms." : "Konfirmasi bahwa Anda telah membaca syarat garansi.";

    setErrors(next);
    const firstInvalid = (Object.keys(fieldIds) as FieldName[]).find((field) => next[field]);
    if (firstInvalid) {
      document.getElementById(fieldIds[firstInvalid])?.focus();
      return;
    }

    const message = isEn
      ? [
          "Hello MobiCare Service Center, I would like to submit a service warranty claim:",
          "",
          `• Name: ${name.trim()}`,
          `• Registered WhatsApp: ${phone.trim()}`,
          `• Invoice / Service No.: ${invoice.trim()}`,
          `• Service Date: ${serviceDate}`,
          `• Device / Model: ${device.trim()}`,
          `• Current Issue: ${issue.trim()}`,
          "",
          "I understand that this claim requires technician inspection and follows the coverage stated on my service invoice.",
        ].join("\n")
      : [
          "Halo MobiCare Service Center, saya ingin mengajukan klaim garansi servis:",
          "",
          `• Nama: ${name.trim()}`,
          `• WhatsApp terdaftar: ${phone.trim()}`,
          `• No. Invoice / Servis: ${invoice.trim()}`,
          `• Tanggal Servis: ${serviceDate}`,
          `• Perangkat / Model: ${device.trim()}`,
          `• Kendala Saat Ini: ${issue.trim()}`,
          "",
          "Saya memahami bahwa klaim perlu diperiksa teknisi dan mengikuti cakupan yang tertulis pada invoice servis.",
        ].join("\n");

    const url = whatsappUrl(message);
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const errorProps = (field: FieldName) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${fieldIds[field]}-error` : undefined,
  });

  return (
    <form className="mobi-claim-form" onSubmit={submit} noValidate>
      {preparedUrl && (
        <div className="mobi-claim-ready" role="status">
          <Check aria-hidden="true" />
          <div>
            <h2>{isEn ? "Your claim message is ready." : "Pesan klaim Anda sudah siap."}</h2>
            <p>{isEn ? "Review and send it in WhatsApp. Nothing has been sent automatically." : "Periksa dan kirim melalui WhatsApp. Belum ada pesan yang dikirim otomatis."}</p>
            <a href={preparedUrl} target="_blank" rel="noopener noreferrer">{isEn ? "Open WhatsApp again" : "Buka WhatsApp kembali"}</a>
          </div>
        </div>
      )}

      <div className="mobi-claim-step">
        <div className="mobi-claim-step-copy">
          <p className="mobi-warranty-kicker">01</p>
          <h2>{isEn ? "Service reference" : "Referensi servis"}</h2>
          <p>{isEn ? "Use the same details recorded when the device was repaired." : "Gunakan data yang sama seperti saat perangkat diservis."}</p>
        </div>
        <div className="mobi-claim-fields mobi-claim-grid-2">
          <ClaimField id="claim-name" label={isEn ? "Customer name" : "Nama pelanggan"} error={errors.name}>
            <input id="claim-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} autoComplete="name" placeholder={isEn ? "Name on the service record" : "Nama pada data servis"} {...errorProps("name")} />
          </ClaimField>
          <ClaimField id="claim-phone" label={isEn ? "Registered WhatsApp" : "WhatsApp terdaftar"} error={errors.phone}>
            <input id="claim-phone" type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={24} autoComplete="tel" placeholder="08xx xxxx xxxx" {...errorProps("phone")} />
          </ClaimField>
          <ClaimField id="claim-invoice" label={isEn ? "Invoice / service number" : "Nomor invoice / servis"} error={errors.invoice}>
            <input id="claim-invoice" value={invoice} onChange={(e) => setInvoice(e.target.value)} maxLength={80} placeholder={isEn ? "Example: MC-2026-00123" : "Contoh: MC-2026-00123"} {...errorProps("invoice")} />
          </ClaimField>
          <ClaimField id="claim-service-date" label={isEn ? "Service date" : "Tanggal servis"} error={errors.serviceDate}>
            <input id="claim-service-date" type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} max={today} {...errorProps("serviceDate")} />
          </ClaimField>
        </div>
      </div>

      <div className="mobi-claim-divider" />

      <div className="mobi-claim-step">
        <div className="mobi-claim-step-copy">
          <p className="mobi-warranty-kicker">02</p>
          <h2>{isEn ? "Device condition" : "Kondisi perangkat"}</h2>
          <p>{isEn ? "Describe the device precisely so the team can review your claim faster." : "Jelaskan perangkat dengan tepat agar tim dapat meninjau klaim lebih cepat."}</p>
        </div>
        <div className="mobi-claim-fields">
          <ClaimField id="claim-device" label={isEn ? "Device and model" : "Perangkat dan model"} error={errors.device}>
            <input id="claim-device" value={device} onChange={(e) => setDevice(e.target.value)} maxLength={120} placeholder={isEn ? "Example: iPhone 14 Pro" : "Contoh: iPhone 14 Pro"} {...errorProps("device")} />
          </ClaimField>
          <ClaimField id="claim-issue" label={isEn ? "Issue that reappeared" : "Kendala yang muncul kembali"} error={errors.issue}>
            <textarea id="claim-issue" value={issue} onChange={(e) => setIssue(e.target.value)} maxLength={1000} rows={5} placeholder={isEn ? "Tell us when the issue appeared and what happens now..." : "Ceritakan kapan kendala muncul dan kondisi perangkat saat ini..."} {...errorProps("issue")} />
          </ClaimField>
          <p className="mobi-claim-upload-note">{isEn ? "You can attach the invoice and device photos after WhatsApp opens." : "Invoice dan foto kondisi perangkat dapat dilampirkan setelah WhatsApp terbuka."}</p>
        </div>
      </div>

      <div className="mobi-claim-divider" />

      <div className="mobi-claim-consent">
        <label htmlFor="claim-agreement">
          <input id="claim-agreement" type="checkbox" checked={agreement} onChange={(e) => setAgreement(e.target.checked)} {...errorProps("agreement")} />
          <span>
            {isEn ? "I have read and understand the " : "Saya telah membaca dan memahami "}
            <Link href={getLocalizedPath("/terms")}>{isEn ? "service warranty terms" : "syarat garansi servis"}</Link>.
          </span>
        </label>
        {errors.agreement && <p id="claim-agreement-error" className="mobi-claim-error" role="alert">{errors.agreement}</p>}
      </div>

      <div className="mobi-claim-actions">
        <div>
          <p>{isEn ? "This form only prepares your claim message." : "Form ini hanya menyiapkan pesan klaim Anda."}</p>
          <span>{isEn ? "Your claim is reviewed after you send it in WhatsApp." : "Klaim mulai ditinjau setelah Anda mengirimkannya di WhatsApp."}</span>
        </div>
        <div className="mobi-claim-buttons">
          {preparedUrl && <button type="button" className="mobi-claim-reset" onClick={reset}><RotateCcw aria-hidden="true" />{isEn ? "Reset" : "Reset"}</button>}
          <button type="submit" className="mobi-claim-submit"><MessageCircle aria-hidden="true" /><span>{isEn ? "Continue in WhatsApp" : "Lanjutkan ke WhatsApp"}</span><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
    </form>
  );
}

function ClaimField({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="mobi-claim-field">
      <label htmlFor={id}>{label} <span aria-hidden="true">*</span></label>
      {children}
      {error && <p id={`${id}-error`} className="mobi-claim-error" role="alert">{error}</p>}
    </div>
  );
}
