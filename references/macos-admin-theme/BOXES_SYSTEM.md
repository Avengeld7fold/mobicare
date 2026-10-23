# Apple HIG Boxes System — macOS Admin Specification

> *"A box creates a visually distinct group of logically related information and components."*  
> — **Apple Human Interface Guidelines (Boxes)** ([developer.apple.com/design/human-interface-guidelines/boxes](https://developer.apple.com/design/human-interface-guidelines/boxes))

Dokumen ini mendefinisikan standar pengelompokan komponen (*grouping containers*), spesifikasi visual, radius sudut (`rx="12"`), tingkat isian transparan, serta aturan anti-nesting resmi Apple untuk antarmuka backend/admin MobiCare.

---

## 1. Prinsip Utama Apple HIG untuk Boxes (`NSBox` / `GroupBox`)

1. **Pemisahan Visual yang Halus (*Subtle Visual Separation*)**:
   - Komponen Box digunakan untuk mengelompokkan sekumpulan informasi dan kontrol formulir yang berkaitan secara logis (contoh: kelompok pengaturan harga dasar, kelompok opsi garansi, atau kelompok kontak cabang).
   - Apple menggunakan pendekatan minimalis: Box **tidak menggunakan border tebal atau bayangan berat**, melainkan isian ultra-halus (*subtle background wash*) dengan spesifikasi resmi SVG:
     ```svg
     <rect width="200" height="200" rx="12" fill="black" fill-opacity="0.03" />
     ```
     atau hairline stroke `1px solid rgba(0, 0, 0, 0.05)` yang tenang dan menyatu dengan kanvas jendela.

2. **Ukuran Relatif Kompak (*Keep Boxes Relatively Small*)**:
   - Box harus berukuran proporsional terhadap kontainer induknya. Jangan membuat Box membentang selebar satu jendela penuh karena akan kehilangan fungsinya sebagai pengelompok informasi dan menimbulkan kesan sesak (*layout congestion*).

3. **Larangan Kotak di Dalam Kotak (*Avoid Nesting Boxes*)**:
   - **Hindari pola "box-ception"** (meletakkan box di dalam box lain). Garis batas ganda membuat antarmuka terlihat sempit, berantakan, dan kaku.
   - Jika membutuhkan sub-kategori di dalam Box, gunakan **spasi vertikal (*whitespace*)**, **garis pemisah ultra-tipis (`separatorColor`)**, atau **hirarki tipografi SF Pro** (`Headline` vs `Body`), bukan membuat kotak baru.

4. **Judul Pengantar (*Box Title*)**:
   - Setiap Box dapat memiliki judul pengantar singkat untuk memperjelas tujuan grup sekaligus mempermudah navigasi pembaca layar (VoiceOver).
   - Gunakan gaya kapitalisasi kalimat (*sentence-style capitalization*) tanpa tanda titik penutup (contoh: *"Pengaturan Notifikasi Servis"*, *"Detail Garansi Resmi"*).

---

## 2. Metrik Visual & Spesifikasi Token CSS

| Properti | Nilai Spesifikasi Apple | Token CSS |
| :--- | :--- | :--- |
| **Radius Sudut** | `rx="12"` (`12px` squircle) | `--mac-radius-box: 12px` |
| **Latar Belakang (Light)** | `fill="black" fill-opacity="0.03"` | `background: rgba(0, 0, 0, 0.03)` / `var(--mac-fill-tertiary)` |
| **Latar Belakang (Dark)** | `fill="white" fill-opacity="0.04"` | `background: rgba(255, 255, 255, 0.04)` |
| **Border / Garis Tepi** | Hairline ultra-halus (opsional) | `border: 1px solid rgba(0, 0, 0, 0.05)` |
| **Padding Internal** | Atas/Bawah: 14px–16px, Kiri/Kanan: 16px | `padding: 14px 16px` |
| **Jarak Antar-Elemen (Gap)**| Spasi vertikal antar-baris 10px–12px | `gap: 12px` |
| **Judul Box (Header)** | SF Pro Headline / Subhead Semibold 12px–13px | `font: var(--mac-text-headline); color: var(--mac-label-primary)` |

---

## 3. Implementasi CSS Box Component (Siap Pakai)

```css
/* Container Box Standar Apple macOS */
.mac-box {
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: var(--mac-radius-box, 12px);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  transition: background 150ms ease-out, border-color 150ms ease-out;
}

/* Dukungan Mode Gelap */
[data-theme="dark"] .mac-box {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}

/* Judul Bagian di Atas / Dalam Box */
.mac-box__title {
  font: var(--mac-text-headline); /* 13px Semibold */
  letter-spacing: var(--mac-text-headline-tracking);
  color: var(--mac-label-primary);
  margin-bottom: 2px;
}

/* Deskripsi Penjelas di Bawah Judul */
.mac-box__description {
  font: var(--mac-text-callout); /* 12px Regular */
  color: var(--mac-label-secondary);
  line-height: 1.4;
  margin-top: -8px;
  margin-bottom: 4px;
}

/* Baris Kontrol di Dalam Box (Contoh: Form Row) */
.mac-box__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid var(--mac-separator);
}
.mac-box__row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Pemisah Internal Tanpa Membuat Box Baru */
.mac-box__divider {
  height: 1px;
  background: var(--mac-separator);
  margin: 4px 0;
  border: none;
}
```

---

## 4. Pola Penerapan di Backend Admin MobiCare

### Skenario 1: Halaman Pengaturan & Detail Servis (`/admin/settings` & `/admin/pricelist`)
- Mengelompokkan field formulir ke dalam kartu Box mandiri:
  - **Box 1 (Informasi Utama)**: Input Nama Model HP, Brand, Tipe Layanan.
  - **Box 2 (Kalkulasi Biaya)**: Input Harga Modal Sparepart, Ongkos Kerja, Harga Jual Akhir (`tabular-nums`).
  - **Box 3 (Garansi & Klaim)**: Switch Toggle Garansi Aktif, Dropdown Masa Garansi (30 Hari / 90 Hari).

### Skenario 2: Attached Save Sheet Dialog (Ref 05 & Ref 11)
- Di dalam Sheet dialog, kolom isian tag dan opsi format file dikelompokkan ke dalam satu `.mac-box` yang bersih tanpa bingkai tebal.
