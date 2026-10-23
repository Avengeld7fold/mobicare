# Apple HIG Alerts System — macOS Admin Specification

> *"An alert gives people critical information they need right away."*  
> — **Apple Human Interface Guidelines (Alerts)** ([developer.apple.com/design/human-interface-guidelines/alerts](https://developer.apple.com/design/human-interface-guidelines/alerts))

Dokumen ini mendefinisikan standar anatomi, tata letak tombol, teks aksi (*action copy*), interaksi keyboard, dan implementasi komponen **macOS Native Alerts** resmi Apple untuk backend admin MobiCare.

---

## 1. Prinsip Utama Apple HIG untuk Alerts

1. **Gunakan Hanya untuk Informasi Kritis (*Critical Information Only*)**:
   - Alert adalah interupsi modal yang menghentikan alur kerja pengguna. Gunakan hanya untuk:
     - Mengonfirmasi tindakan destruktif yang berisiko menghilangkan data (misal: menghapus kategori sparepart, mereset daftar harga).
     - Menjaga perubahan data yang belum disimpan (*unsaved changes blocker*).
     - Melaporkan kegagalan sistem yang membutuhkan keputusan pengguna seketika.
   - **Bukan untuk Informasi Pasif**: Jangan gunakan alert sekadar untuk memberi tahu "Data berhasil disimpan". Untuk feedback pasif, gunakan **Notification Banner / Toast (Ref 15)**.

2. **Aturan Tata Letak & Urutan Tombol (*Button Placement & Stacking Order*)**:
   - **Varian 2-Tombol (Berdampingan / *Side-by-side*)**:
     - **Sisi Kiri (*Leading Side*)**: Tombol alternatif / pembatalan (`Cancel` / Netral gray pill).
     - **Sisi Kanan (*Trailing Side*)**: Tombol tindakan utama yang paling diharapkan dipilih pengguna (`Default Action` / Solid Apple Blue `#007AFF`).
   - **Varian 3-Tombol (Bertumpuk / *Stacked Vertically*)**:
     - **Paling Atas (*Top*)**: Tindakan utama yang paling aman/dianjurkan (`Save` / Solid Apple Blue `#007AFF`).
     - **Di Tengah (*Middle*)**: Tindakan destruktif / alternatif berisiko (`Don't Save` / *Soft red tint* `rgba(255, 59, 48, 0.15)` teks `#FF3B30`).
     - **Paling Bawah (*Bottom*)**: Pembatalan murni tanpa aksi (`Cancel` / Netral gray pill).

3. **Gunakan Kata Kerja Spesifik (*Action-Oriented Verbs*)**:
   - Dilarang keras menggunakan label ambigu seperti *"OK"*, *"Yes"*, atau *"No"*.
   - Gunakan kata kerja langsung yang menjelaskan akibat tindakan: *"Simpan"*, *"Jangan Simpan"*, *"Hapus"*, *"Batal"*, *"Muat Ulang"*.
   - Tombol pembatalan wajib selalu diberi label persis: **"Cancel"** (atau **"Batal"** dalam Bahasa Indonesia).

4. **Judul & Deskripsi yang Ringkas & Jelas**:
   - **Judul (*Title*)**: Satu kalimat pertanyaan singkat atau pernyataan tegas (contoh: *"Simpan pesan ini sebagai draf?"*, *"Hapus 3 data harga terpilih?"*).
   - **Deskripsi (*Body*)**: Penjelasan konteks dan akibat langsung (contoh: *"Data yang dihapus tidak dapat dipulihkan kembali dari sistem."*). Jangan mengulang kata-kata judul.

5. **Interaksi Keyboard & Aksesibilitas**:
   - Tombol `Return` / `Enter`: Secara default mengeksekusi tindakan utama (*Default Action*).
   - Tombol `Escape`: Secara default mengeksekusi pembatalan (*Cancel*).
   - *Focus Trap*: Kursor keyboard terkunci di dalam modal alert hingga pengguna membuat keputusan.
   - *Backdrop Dimming*: Menggunakan scrim semi-transparan `rgba(0, 0, 0, 0.25)` dengan `backdrop-filter: blur(8px)`.

---

## 2. Anatomi Komponen & Metrik Visual (Ref 18)

| Elemen | Spesifikasi Visual macOS | Token CSS |
| :--- | :--- | :--- |
| **Lebar Modal** | `300px - 320px` (ringkas & proporsional) | `width: min(320px, calc(100vw - 32px))` |
| **Sudut Melengkung** | `border-radius: 20px` (squircle khas Apple) | `--mac-radius-modal: 20px` |
| **Material Kaca** | Frosted glass mutakhir berkilau | `background: var(--mac-glass-bg); backdrop-filter: var(--mac-material-ultra-thick)` |
| **Bayangan (Shadow)**| Bayangan dalam lembut melayang | `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.45) inset` |
| **Padding Internal** | Atas: 24px, Kiri/Kanan: 20px, Bawah: 20px | `padding: 24px 20px 20px` |
| **Judul Alert** | SF Pro Display 15px Bold, rata tengah | `font: var(--mac-text-title-3); text-align: center; color: var(--mac-label-primary)` |
| **Deskripsi Alert** | SF Pro Text 12px Regular, rata tengah, line-height 1.4 | `font: var(--mac-text-callout); text-align: center; color: var(--mac-label-secondary)` |
| **Tombol Pill** | Tinggi 34px, radius 9999px (kapsul penuh) | `height: 34px; border-radius: 9999px; font-weight: 600; font-size: 13px` |

---

## 3. Gaya Tiga Varian Tombol Pill macOS

```css
/* 1. Primary Action Pill (Apple Blue) */
.mac-alert-btn-primary {
  background: var(--mac-blue);
  color: #FFFFFF;
  border: none;
  border-radius: var(--mac-radius-pill);
  height: 34px;
  font-weight: 600;
  font-size: 13px;
  box-shadow: 0 1px 2px rgba(0, 122, 255, 0.3);
  transition: all 120ms ease-out;
}
.mac-alert-btn-primary:hover {
  background: #0066D6;
}
.mac-alert-btn-primary:active {
  transform: scale(0.97);
}

/* 2. Destructive Warning Pill (Soft Red Tint) */
.mac-alert-btn-destructive {
  background: var(--mac-red-tint); /* rgba(255, 59, 48, 0.12) */
  color: var(--mac-red);           /* #FF3B30 */
  border: 1px solid rgba(255, 59, 48, 0.15);
  border-radius: var(--mac-radius-pill);
  height: 34px;
  font-weight: 600;
  font-size: 13px;
  transition: all 120ms ease-out;
}
.mac-alert-btn-destructive:hover {
  background: rgba(255, 59, 48, 0.20);
}
.mac-alert-btn-destructive:active {
  transform: scale(0.97);
}

/* 3. Neutral / Cancel Pill (Translucent Gray) */
.mac-alert-btn-neutral {
  background: var(--mac-fill-primary); /* rgba(0, 0, 0, 0.08) */
  color: var(--mac-label-primary);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: var(--mac-radius-pill);
  height: 34px;
  font-weight: 500;
  font-size: 13px;
  transition: all 120ms ease-out;
}
.mac-alert-btn-neutral:hover {
  background: rgba(0, 0, 0, 0.12);
}
.mac-alert-btn-neutral:active {
  transform: scale(0.97);
}
```

---

## 4. Pola Penerapan di Backend Admin MobiCare

### Skenario 1: Konfirmasi Hapus Data (*Destructive 2-Button Alert*)
- **Trigger**: Admin menekan tombol tempat sampah pada baris harga HP di `/admin/pricelist`.
- **Judul**: *"Hapus harga servis iPhone 15 Pro?"*
- **Deskripsi**: *"Tindakan ini akan menghapus data harga servis dari katalog publik seketika."*
- **Tombol**:
  - Kiri (*Leading*): `[Batal]` (Neutral gray pill)
  - Kanan (*Trailing*): `[Hapus]` (Destructive red pill)

### Skenario 2: Penjaga Perubahan Belum Disimpan (*Unsaved Changes 3-Button Stacked Alert*)
- **Trigger**: Admin sedang mengedit data promo atau mengubah rincian harga, lalu mengklik menu lain atau mencoba menutup browser.
- **Judul**: *"Simpan perubahan sebelum keluar?"*
- **Deskripsi**: *"Terdapat perubahan rincian harga yang belum disimpan. Perubahan akan hilang jika Anda tidak menyimpannya."*
- **Tombol (Bertumpuk)**:
  - Atas (*Top*): `[Simpan]` (Primary Apple Blue `#007AFF`)
  - Tengah (*Middle*): `[Buang Perubahan]` (Destructive soft red tint `#FF3B30`)
  - Bawah (*Bottom*): `[Batal]` (Neutral gray pill)
