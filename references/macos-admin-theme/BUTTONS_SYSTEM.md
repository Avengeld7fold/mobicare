# Apple HIG Buttons System — macOS Admin Specification

> *"A button initiates an instantaneous action."*  
> — **Apple Human Interface Guidelines (Buttons)** ([developer.apple.com/design/human-interface-guidelines/buttons](https://developer.apple.com/design/human-interface-guidelines/buttons))

Dokumen ini mendefinisikan standar hierarki tombol (*Button Hierarchy*), gaya varian (*Default, Colored, Secondary, Destructive, Primary, Borderless*), status interaktif (*Normal, Pressed/Hover, Disabled*), serta spesifikasi tombol lingkaran / stepper resmi Apple untuk antarmuka backend/admin MobiCare.

---

## 1. Prinsip Utama Apple HIG untuk Buttons

1. **Inisiasi Tindakan Seketika (*Instantaneous Action*)**:
   - Tombol dirancang untuk mengeksekusi perintah secara instan saat diklik atau ditekan (misal: menyimpan formulir, membuka modal, memfilter data, membatalkan transaksi).
   - Berikan feedback langsung pada peristiwa `pointer-down` (micro-interaction scale `0.97` atau perubahan warna latar belakang). Jangan menunda feedback hingga mouse dilepas.

2. **Hierarki Tombol Berdasarkan Kepentingan (*Visual Hierarchy*)**:
   - **Primary (Prominent)**: Tombol solid Apple Blue (`#007AFF`) dengan teks putih tebal. **Hanya boleh ada SATU tombol Primary per tampilan/tabel** (misal: tombol *"Simpan Perubahan"* atau *"Tambah Layanan Baru"*).
   - **Default**: Tombol netral terang (`rgba(0, 0, 0, 0.06)`) untuk tindakan standar operasional.
   - **Colored**: Tombol berlatar aksen lembut dengan warna teks `systemBlue` untuk tindakan kontekstual.
   - **Secondary**: Tombol abu-abu lembut untuk aksi pendukung atau pembatalan sekunder.
   - **Destructive**: Tombol dengan latar *soft red tint* (`rgba(255, 59, 48, 0.12)`) dan teks merah Apple (`#FF3B30`) untuk aksi berbahaya/permanen (misal: *"Hapus Layanan"*).
   - **Borderless (Tertiary)**: Tombol teks atau ikon murni tanpa latar belakang untuk aksi ringan dengan bobot visual minimal (misal: *"Lihat Detail"*, *"Tutup Panel"*).
   - **Circular Icon Button / Stepper (⇅)**: Tombol lingkaran kompak dengan simbol panah ganda untuk pemilih dropdown, stepper angka harga, dan navigasi pagination.

3. **Tiga Status Interaktif Konsisten (*Interactive States*)**:
   - **Normal (Idle)**: Penampilan standar dengan kontras seimbang.
   - **Pressed / Active**: Latar belakang menjadi lebih gelap (+10% hingga +15% opasitas) disertai skala tekan mikro `scale(0.97)`.
   - **Disabled**: Opasitas redup (30% - 35%), kursor `not-allowed`, dan interaksi diblokir (*pointer-events: none*).

4. **Label Berbasis Kata Kerja (*Action Verbs*)**:
   - Gunakan kata kerja langsung dan singkat: *"Simpan"*, *"Ekspor"*, *"Tambah"*, *"Ubah"*, *"Batal"*, *"Hapus"*.
   - Hindari kata yang terlalu panjang atau kalimat pasif.

---

## 2. Matriks Gaya & Token CSS Buttons (Ref 19 & Ref 20)

| Gaya Tombol | Latar Normal (Idle) | Latar Pressed / Active | Warna Teks / Ikon | Bobot & Radius |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | `var(--mac-blue)` (`#007AFF`) | `#0066D6` (`scale(0.97)`) | `#FFFFFF` (Putih) | Bold 600, `radius: 6px` / `9999px` |
| **Default** | `rgba(0, 0, 0, 0.06)` | `rgba(0, 0, 0, 0.12)` | `var(--mac-label-primary)` | Medium 500, `radius: 6px` |
| **Colored** | `rgba(0, 122, 255, 0.10)` | `rgba(0, 122, 255, 0.18)` | `var(--mac-blue)` (`#007AFF`) | Semibold 600, `radius: 6px` |
| **Secondary** | `rgba(0, 0, 0, 0.04)` | `rgba(0, 0, 0, 0.09)` | `var(--mac-label-secondary)`| Regular 400, `radius: 6px` |
| **Destructive** | `var(--mac-red-tint)` (`rgba(255, 59, 48, 0.12)`) | `rgba(255, 59, 48, 0.22)` | `var(--mac-red)` (`#FF3B30`) | Semibold 600, `radius: 6px` |
| **Borderless** | `transparent` | `rgba(0, 0, 0, 0.05)` | `var(--mac-blue)` atau `label` | Medium 500, `radius: 4px` |

---

## 3. Matriks Ukuran Tombol Lingkaran / Stepper (Ref 21 & Ref 22)

Tombol lingkaran dengan simbol panah ganda (⇅) atau ikon SF Symbols memiliki 5 skala ukuran resmi Apple:

| Ukuran Apple | Diameter Lingkaran | Ukuran Ikon (Caret) | Peruntukan di Backend MobiCare |
| :--- | :--- | :--- | :--- |
| **Mini** | `18px` | `10px` | Stepper kecil di dalam tabel data harga yang sangat rapat. |
| **Small** | `22px` | `12px` | Dropdown selector di dalam toolbar atau filter table. |
| **Regular** | `26px` | `14px` | Tombol navigasi pagination tabel dan kontrol stepper standar. |
| **Large** | `32px` | `16px` | Tombol kontrol media galeri dan toolbar jendela utama. |
| **Extra Large** | `40px` | `20px` | Tombol upload foto galeri dan aksi hero admin. |

---

## 4. Implementasi CSS Komponen Buttons (Siap Pakai)

```css
/* Base Button Properties */
.mac-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 28px;
  padding: 0 12px;
  font: var(--mac-text-headline); /* 13px Semibold/Medium */
  border-radius: var(--mac-radius-control, 6px);
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 100ms ease-out, transform 100ms ease-out, border-color 100ms ease-out;
}
.mac-btn:active:not(:disabled) {
  transform: scale(0.97);
}
.mac-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  pointer-events: none;
}

/* 1. Primary Action */
.mac-btn--primary {
  background: var(--mac-blue);
  color: #FFFFFF;
  box-shadow: 0 1px 2px rgba(0, 122, 255, 0.25);
}
.mac-btn--primary:hover:not(:disabled) {
  background: #0066D6;
}

/* 2. Default Neutral */
.mac-btn--default {
  background: rgba(0, 0, 0, 0.06);
  color: var(--mac-label-primary);
  border-color: rgba(0, 0, 0, 0.04);
}
.mac-btn--default:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.10);
}

/* 3. Colored Accent */
.mac-btn--colored {
  background: rgba(0, 122, 255, 0.10);
  color: var(--mac-blue);
}
.mac-btn--colored:hover:not(:disabled) {
  background: rgba(0, 122, 255, 0.16);
}

/* 4. Destructive Warning */
.mac-btn--destructive {
  background: var(--mac-red-tint);
  color: var(--mac-red);
  border-color: rgba(255, 59, 48, 0.15);
}
.mac-btn--destructive:hover:not(:disabled) {
  background: rgba(255, 59, 48, 0.20);
}

/* 5. Borderless Action */
.mac-btn--borderless {
  background: transparent;
  color: var(--mac-blue);
  padding: 0 8px;
}
.mac-btn--borderless:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.05);
}

/* 6. Pill Button (Khusus Modal / Toolbar) */
.mac-btn--pill {
  border-radius: var(--mac-radius-pill, 9999px);
  height: 32px;
  padding: 0 16px;
}

/* 7. Circular Button / Stepper (Panah Ganda ⇅) */
.mac-btn-circular {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.06);
  color: var(--mac-label-primary);
  border: 1px solid rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 100ms ease-out;
}
.mac-btn-circular:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.12);
}
.mac-btn-circular:active:not(:disabled) {
  transform: scale(0.94);
}
.mac-btn-circular:disabled {
  opacity: 0.30;
  cursor: not-allowed;
}

/* Ukuran Circular Button */
.mac-btn-circular--mini    { width: 18px; height: 18px; font-size: 10px; }
.mac-btn-circular--small   { width: 22px; height: 22px; font-size: 12px; }
.mac-btn-circular--regular { width: 26px; height: 26px; font-size: 14px; }
.mac-btn-circular--large   { width: 32px; height: 32px; font-size: 16px; }
.mac-btn-circular--xlarge  { width: 40px; height: 40px; font-size: 20px; }

/* Dark Mode Overrides */
[data-theme="dark"] .mac-btn--default {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.06);
}
[data-theme="dark"] .mac-btn-circular {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.06);
}
```

---

## 5. Pola Penerapan di Backend Admin MobiCare

- **Header / Action Toolbar (`/admin/pricelist`)**:
  - Tombol Primer: `[+ Tambah Layanan]` (`mac-btn--primary`)
  - Tombol Sekunder: `[Ekspor CSV]` (`mac-btn--default`)
  - Tombol Filter / Tag: `[Filter Kategori ⇅]` (`mac-btn--colored`)
  - Tombol Hapus Massal: `[Hapus Terpilih]` (`mac-btn--destructive`)
- **Tabel Data Rows**:
  - Kolom Aksi Cepat: `[Edit]` (`mac-btn--borderless`) dan tombol stepper bulat (`mac-btn-circular--small`) untuk menaikkan/menurunkan urutan baris.
