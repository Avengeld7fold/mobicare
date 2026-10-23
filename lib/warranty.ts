import type { Locale } from "@/lib/i18n/types";

export interface WarrantyTerm {
  id: string;
  title: string;
  description: string;
}

const TERMS: Record<Locale, WarrantyTerm[]> = {
  id: [
    {
      id: "01",
      title: "Suku Cadang & Jasa Teknisi",
      description: "Garansi mencakup suku cadang yang diganti dan jasa teknisi terkait, sesuai periode serta detail perlindungan yang tercantum pada invoice servis.",
    },
    {
      id: "02",
      title: "Klaim Praktis Tanpa Nota Fisik",
      description: "Klaim dapat diajukan menggunakan invoice digital, nomor servis, atau nomor WhatsApp yang terdaftar saat perbaikan.",
    },
    {
      id: "03",
      title: "Keamanan & Kerahasiaan Data",
      description: "Data pribadi pada perangkat tetap menjadi tanggung jawab pemilik. Cadangkan data sebelum pemeriksaan klaim bila perangkat masih dapat diakses.",
    },
    {
      id: "04",
      title: "Integritas Segel Garansi",
      description: "Garansi tidak berlaku apabila segel MobiCare rusak atau dilepas, atau perangkat telah dibongkar maupun diperbaiki pihak lain setelah servis.",
    },
    {
      id: "05",
      title: "Pengecualian Kerusakan Fisik & Cairan",
      description: "Garansi tidak mencakup kerusakan baru akibat benturan, terjatuh, retak, tekanan, cairan, korosi, atau penggunaan yang tidak sesuai setelah serah terima.",
    },
  ],
  en: [
    {
      id: "01",
      title: "Parts & Technician Labour",
      description: "Coverage applies to replaced parts and related technician labour according to the warranty period and protection details stated on the service invoice.",
    },
    {
      id: "02",
      title: "Paperless Claim",
      description: "A claim can be started using the digital invoice, service number, or WhatsApp number registered during the repair.",
    },
    {
      id: "03",
      title: "Data & Privacy",
      description: "Personal data on the device remains the owner’s responsibility. Back up accessible data before the claim inspection whenever possible.",
    },
    {
      id: "04",
      title: "Warranty Seal Integrity",
      description: "Coverage becomes invalid if the MobiCare seal is damaged or removed, or if the device has been opened or repaired by another party after service.",
    },
    {
      id: "05",
      title: "Physical & Liquid Damage Exclusions",
      description: "Coverage excludes new damage caused by impact, drops, cracks, pressure, liquid, corrosion, or improper use after the device was returned.",
    },
  ],
};

export function getWarrantyTerms(locale: Locale): WarrantyTerm[] {
  return TERMS[locale];
}
