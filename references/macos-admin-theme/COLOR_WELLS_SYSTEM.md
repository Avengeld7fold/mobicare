# Apple HIG Color Wells System — macOS Admin Specification

> *"A color well lets people adjust the color of text, shapes, guides, and other onscreen elements."*  
> — **Apple Human Interface Guidelines (Color Wells)** ([developer.apple.com/design/human-interface-guidelines/color-wells](https://developer.apple.com/design/human-interface-guidelines/color-wells))

Dokumen ini mendefinisikan standar kontrol pemilih warna (*Color Well / Color Picker*), anatomi roda spektrum kerucut (*conical gradient color wheel*), status aktif konsentris, dan implementasi komponen untuk antarmuka backend/admin MobiCare.

---

## 1. Prinsip Utama Apple HIG untuk Color Wells (`NSColorWell` / `ColorPicker`)

1. **Pemilihan & Penyesuaian Warna Langsung**:
   - Color Well adalah kontrol interaktif khusus yang menampilkan warna yang sedang terpilih saat ini dan membuka panel/popover pemilih warna (*color picker*) ketika diklik atau ditekan.
   - Digunakan di antarmuka kreatif dan administratif untuk memilih warna badge promo, label tag kategori, warna penanda status garansi, atau kustomisasi branding.

2. **Dua Status Visual Utama (Ref 23)**:
   - **Default (Closed / Unselected Color)**:
     - Berbentuk cakram roda warna spektrum kerucut (*conic gradient spectrum wheel*).
     - Menunjukkan ketersediaan spektrum warna penuh yang siap dipilih.
   - **Active / Selected (Warna Terpilih)**:
     - Berbentuk cincin konsentris:
       - **Cincin Luar (*Outer Ring*)**: Cincin spektrum pelangi kerucut tipis.
       - **Pemisah (*Gap/Stroke*)**: Cincin putih kontras setebal `1.5px - 2px`.
       - **Pusat (*Inner Color Disc*)**: Lingkaran solid berisi warna yang sedang aktif terpilih (misal: Merah `#FF3B30`, Biru `#007AFF`, atau Hijau `#34C759`).

3. **Umpan Balik Visual Instan (*Immediate Feedback*)**:
   - Begitu pengguna memilih warna baru di popover/panel, Color Well langsung memperbarui lingkaran dalamnya seketika (*real-time preview*).
   - Elemen yang terhubung di antarmuka (misal: badge tag promo di tabel) ikut berganti warna secara sinkron tanpa perlu menunggu reload.

4. **Dekat dengan Elemen Terkait (*Proximity*)**:
   - Letakkan Color Well tepat di samping teks atau elemen yang dipengaruhinya (misal: di baris *"Warna Badge Promo"*, berdampingan dengan kolom teks nama promo).

---

## 2. Anatomi & Metrik Visual CSS (Ref 23)

| Komponen | Spesifikasi Visual Apple | Nilai CSS |
| :--- | :--- | :--- |
| **Diameter Kontrol** | `26px - 28px` (lingkaran penuh) | `width: 26px; height: 26px; border-radius: 50%` |
| **Spektrum Pelangi Kerucut** | Conic gradient 360° mencakup seluruh rona (*hues*) | `conic-gradient(red, yellow, lime, aqua, blue, magenta, red)` |
| **Cincin Pemisah (Active)** | Hairline stroke putih murni | `border: 2px solid #FFFFFF` |
| **Cakram Warna Pusat** | Warna solid aktif yang dipilih | `background: var(--selected-color)` |
| **Bayangan Halus (Shadow)** | Drop shadow lembut melayang | `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2)` |
| **Status Hover / Active** | Skala interaksi mikro | `transform: scale(0.95)` saat ditekan |

---

## 3. Implementasi CSS `.mac-color-well` (Siap Pakai)

```css
/* 1. Base Color Well (Default / Spectrum Wheel) */
.mac-color-well {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: conic-gradient(
    from 90deg,
    #ff0000 0%,
    #ffff00 17%,
    #00ff00 33%,
    #00ffff 50%,
    #0000ff 67%,
    #ff00ff 83%,
    #ff0000 100%
  );
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18), inset 0 0 1px rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 100ms ease-out, box-shadow 100ms ease-out;
  user-select: none;
}

.mac-color-well:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.mac-color-well:active {
  transform: scale(0.93);
}

/* 2. Active / Selected State (Concentric Ring + Inner Color Disc) */
.mac-color-well--selected {
  padding: 3px; /* Jarak untuk cincin luar pelangi */
  border: none;
}

.mac-color-well--selected::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--mac-well-color, #ff3b30);
  border: 2px solid #ffffff; /* Garis pemisah putih khas Apple */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: background-color 120ms ease-out;
}

/* Input Color Native Tersembunyi untuk Aksesibilitas Web */
.mac-color-well input[type="color"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  border: none;
  padding: 0;
}
```

---

## 4. Pola Penerapan di Backend Admin MobiCare

1. **Manajemen Promo & Diskon (`/admin/promo`)**:
   - Pemilihan warna tag badge promo (misal: Badge "Diskon Spesial 20%" dengan warna merah, "Free Glass" dengan warna hijau, "Member VIP" dengan warna ungu).
   - Color Well diletakkan di samping kolom input *"Label Promo"* di dalam form editor atau modal sheet.
2. **Kategori Sparepart & Layanan (`/admin/pricelist`)**:
   - Menetapkan warna penanda untuk kategori servis: LCD (Biru), Baterai (Hijau), Motherboard (Indigo), Kamera (Ungu).
   - Di baris tabel, titik indikator warna (*color dot*) langsung mencerminkan warna yang dipilih melalui Color Well.
