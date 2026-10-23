# Apple HIG Typography System — macOS Admin Specification

> *"Apple provides two typeface families that support an extensive range of weights, sizes, styles, and languages: San Francisco and New York, which you can download here. The system defines a set of typographic attributes — called text styles — that work with both typeface families. Dynamic Type is a system-level feature that lets people adjust the size of visible text on their device to ensure readability and comfort."*  
> — **Apple Human Interface Guidelines (Typography)** ([developer.apple.com/design/human-interface-guidelines/typography](https://developer.apple.com/design/human-interface-guidelines/typography))

Dokumen ini mendefinisikan arsitektur tipografi resmi Apple Human Interface Guidelines (HIG) yang dikalibrasi khusus untuk platform **macOS**, ditranslasikan secara presisi ke dalam CSS Design Tokens untuk antarmuka backend/admin MobiCare.

---

## 1. Fondasi Tipografi Apple macOS

### A. Dua Keluarga Rupa Huruf Utama (*Two Typeface Families*)
1. **San Francisco (SF Pro)** — *System Font*:
   - Font sans-serif resmi Apple yang dirancang khusus untuk keterbacaan optimal di layar Retina.
   - **SF Pro Display** ($\ge 20\text{pt}$): Kontras guratan lebih anggun, rasio lebih ramping, dan tracking rapat (*tighter letter-spacing*) untuk judul besar.
   - **SF Pro Text** ($< 20\text{pt}$): Bukaan huruf lebih lebar (*looser tracking* & *larger x-height*) agar teks body, label form, dan tabel sangat mudah dibaca pada ukuran kecil.
   - **SF Mono**: Font monospaced resmi untuk angka keuangan, nomor serial perangkat, dan tabel data perbaikan.
2. **New York (NY)** — *Editorial Serif*:
   - Rupa huruf serif transisional khas Apple untuk sentuhan editorial, elegan, atau kutipan resmi (misal: kartu garansi premium atau sertifikat teknisi).

---

### B. Prinsip Kunci Keterbacaan & Metrik macOS
- **Standar Ukuran Teks Utama macOS**: **`13 pt`** (`13px` / `0.8125rem`). Berbeda dengan iOS (17pt), antarmuka desktop macOS dirancang rapat dan padat data (*information-dense*).
- **Batas Keterbacaan Minimum macOS**: **`10 pt`** (`10px`). Teks 9pt hanya digunakan secara eksklusif untuk `Caption 2` (stempel waktu atau nomor urut sekunder).
- **Bobot Huruf yang Dianjurkan**: Hindari bobot terlalu tipis (*Ultralight / Thin / Light*) pada teks kecil karena menurunkan keterbacaan. Gunakan **Regular (400), Medium (500), Semibold (600), atau Bold (700)**.
- **Tabular Figures (`tnum`)**: Seluruh angka harga servis, durasi pengerjaan, dan stok sparepart wajib menggunakan angka berlebar seragam (`font-variant-numeric: tabular-nums;`) agar kolom tabel sejajar lurus vertikal tanpa bergeser.
- **Tracking / Letter Spacing Optis**: Ukuran besar membutuhkan tracking negatif (misal `-0.015em`), sedangkan ukuran kecil membutuhkan tracking positif (misal `+0.015em`) untuk mencegah huruf saling menempel.

---

## 2. Tabel Spesifikasi Tipografi Resmi macOS (Apple HIG)

| Gaya Teks (*Text Style*) | Bobot Default | Ukuran (Points / Px) | Line Height (Leading) | Bobot Emphasized | Tracking (Letter Spacing) | Penerapan di Backend MobiCare |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Large Title** | Regular / Bold | **26 pt** (26px) | 32 pt (1.23) | **Bold (700)** | `-0.018em` | Judul utama dashboard, header ringkasan statistik. |
| **Title 1** | Regular | **22 pt** (22px) | 26 pt (1.18) | **Bold (700)** | `-0.014em` | Judul halaman modul (`Pricelist`, `Gallery`, `Promo`). |
| **Title 2** | Regular | **17 pt** (17px) | 22 pt (1.29) | **Bold (700)** | `-0.008em` | Header bagian besar, judul modal Sheet "Save As". |
| **Title 3** | Regular | **15 pt** (15px) | 20 pt (1.33) | **Semibold (600)** | `-0.005em` | Judul dialog Alert Modal ("Save this message?"). |
| **Headline** | **Semibold (600)** | **13 pt** (13px) | 18 pt (1.38) | **Bold (700)** | `-0.003em` | Header kolom tabel data, label input formulir, judul toast. |
| **Body** | **Regular (400)** | **13 pt** (13px) | 18 pt (1.38) | **Semibold (600)** | `0.000em` | Isi baris tabel master data, teks paragraf penjelasan. |
| **Callout** | Regular (400) | **12 pt** (12px) | 16 pt (1.33) | **Semibold (600)** | `+0.003em` | Teks keterangan modal, callout tips teknisi. |
| **Subhead** | Regular (400) | **11 pt** (11px) | 15 pt (1.36) | **Semibold (600)** | `+0.006em` | Breadcrumb path navigasi, label kategori sekunder. |
| **Footnote** | Regular (400) | **10 pt** (10px) | 14 pt (1.40) | **Semibold (600)** | `+0.012em` | Catatan kaki syarat servis, teks bantuan input form. |
| **Caption 1** | Regular (400) | **10 pt** (10px) | 13 pt (1.30) | **Semibold (600)** | `+0.012em` | Timestamp `now` notifikasi, badge status kecil. |
| **Caption 2** | Regular (400) | **9 pt** (9px) | 12 pt (1.33) | **Semibold (600)** | `+0.016em` | Shortcut keyboard badge (`⌘Z`, `⌘S`), label hak cipta. |

---

## 3. Implementasi CSS Design Tokens (Siap Pakai)

```css
:root {
  /* Font Family Stacks (Apple System Native Fallbacks) */
  --mac-font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mac-font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mac-font-serif: "New York", -apple-system-ui-serif, Georgia, "Times New Roman", serif;
  --mac-font-mono: "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* Font Weights */
  --mac-weight-regular: 400;
  --mac-weight-medium: 500;
  --mac-weight-semibold: 600;
  --mac-weight-bold: 700;

  /* macOS Text Styles: Font-size / Line-height / Letter-spacing / Weight */
  --mac-text-large-title: 700 26px/32px var(--mac-font-display);
  --mac-text-large-title-tracking: -0.018em;

  --mac-text-title-1: 700 22px/26px var(--mac-font-display);
  --mac-text-title-1-tracking: -0.014em;

  --mac-text-title-2: 700 17px/22px var(--mac-font-sans);
  --mac-text-title-2-tracking: -0.008em;

  --mac-text-title-3: 600 15px/20px var(--mac-font-sans);
  --mac-text-title-3-tracking: -0.005em;

  --mac-text-headline: 600 13px/18px var(--mac-font-sans);
  --mac-text-headline-tracking: -0.003em;

  --mac-text-body: 400 13px/18px var(--mac-font-sans);
  --mac-text-body-tracking: 0.000em;

  --mac-text-callout: 400 12px/16px var(--mac-font-sans);
  --mac-text-callout-tracking: 0.003em;

  --mac-text-subhead: 400 11px/15px var(--mac-font-sans);
  --mac-text-subhead-tracking: 0.006em;

  --mac-text-footnote: 400 10px/14px var(--mac-font-sans);
  --mac-text-footnote-tracking: 0.012em;

  --mac-text-caption-1: 400 10px/13px var(--mac-font-sans);
  --mac-text-caption-1-tracking: 0.012em;

  --mac-text-caption-2: 400 9px/12px var(--mac-font-sans);
  --mac-text-caption-2-tracking: 0.016em;

  /* Tabular Figures for Numbers & Prices */
  --mac-font-tabular: "SF Mono", var(--mac-font-sans);
}

/* Utilitas Kelas Tipografi macOS */
.mac-large-title {
  font: var(--mac-text-large-title);
  letter-spacing: var(--mac-text-large-title-tracking);
  color: var(--mac-label-primary);
}

.mac-title-1 {
  font: var(--mac-text-title-1);
  letter-spacing: var(--mac-text-title-1-tracking);
  color: var(--mac-label-primary);
}

.mac-title-2 {
  font: var(--mac-text-title-2);
  letter-spacing: var(--mac-text-title-2-tracking);
  color: var(--mac-label-primary);
}

.mac-title-3 {
  font: var(--mac-text-title-3);
  letter-spacing: var(--mac-text-title-3-tracking);
  color: var(--mac-label-primary);
}

.mac-headline {
  font: var(--mac-text-headline);
  letter-spacing: var(--mac-text-headline-tracking);
  color: var(--mac-label-primary);
}

.mac-body {
  font: var(--mac-text-body);
  letter-spacing: var(--mac-text-body-tracking);
  color: var(--mac-label-primary);
}

.mac-callout {
  font: var(--mac-text-callout);
  letter-spacing: var(--mac-text-callout-tracking);
  color: var(--mac-label-secondary);
}

.mac-subhead {
  font: var(--mac-text-subhead);
  letter-spacing: var(--mac-text-subhead-tracking);
  color: var(--mac-label-secondary);
}

.mac-footnote {
  font: var(--mac-text-footnote);
  letter-spacing: var(--mac-text-footnote-tracking);
  color: var(--mac-label-tertiary);
}

.mac-caption {
  font: var(--mac-text-caption-1);
  letter-spacing: var(--mac-text-caption-1-tracking);
  color: var(--mac-label-secondary);
}

/* Seluruh Angka Keuangan & Tabel Menggunakan Tabular Nums */
.mac-tabular-num {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum";
}
```

---

## 4. Checklist Penerapan Tipografi pada Backend Admin MobiCare

- [x] **Ukuran Default 13pt**: Semua baris tabel data (`/admin/pricelist`, `/admin/gallery`, `/admin/promo`) menggunakan ukuran body 13px (bukan 14px atau 16px standar web), menjamin densitas informasi yang presisi khas macOS Finder.
- [x] **Tabular Figures pada Harga**: Semua nilai nominal uang (contoh: `Rp 1.450.000`) menggunakan `font-variant-numeric: tabular-nums;` sehingga posisi ribuan dan jutaan rata vertikal sempurna.
- [x] **Optical Tracking**: Teks judul besar (`Title 1` dan `Title 2`) menggunakan tracking ketat (`-0.014em` s.d. `-0.018em`), sedangkan stempel waktu atau shortcut badge kecil menggunakan tracking renggang (`+0.012em` s.d. `+0.016em`).
- [x] **Pemisahan Semantik Teks**: Tidak ada teks judul yang memakai warna aksen biru. Warna biru murni untuk aksi (`Save`, link, seleksi); hierarki teks murni diatur oleh kombinasi `mac-headline` / `mac-body` dengan `mac-label-primary` dan `mac-label-secondary`.
