# Apple HIG Color System — macOS Admin Specification

> *"Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information."*  
> — **Apple Human Interface Guidelines (Color)** ([developer.apple.com/design/human-interface-guidelines/color](https://developer.apple.com/design/human-interface-guidelines/color))

Dokumen ini mendefinisikan prinsip, arsitektur token, aturan aksesibilitas, dan palet warna resmi **Apple Human Interface Guidelines (HIG)** yang diadaptasikan untuk antarmuka backend/admin MobiCare.

---

## 1. Prinsip Utama Apple HIG: "Judicious Use of Color"

1. **Gunakan Warna Secara Terukur & Bijaksana (*Restraint & Purpose*)**:
   - Warna tidak boleh digunakan hanya sebagai hiasan. Setiap warna harus membawa makna fungsional (menunjukkan interaktivitas, status proses, atau hierarki informasi).
   - Antarmuka yang terlalu banyak warna jenuh (*saturated colors*) membuat mata cepat lelah dan merusak hierarki visual. Sebagian besar antarmuka macOS didominasi oleh material netral (*frosted glass*, kanvas putih/abu-abu halus, teks hitam kontras tinggi), sehingga saat warna aksen muncul, pengguna langsung tahu ke mana harus melihat.

2. **Konsistensi Makna Warna (*Consistent Color Meaning*)**:
   - Jangan gunakan warna yang sama untuk dua maksud yang berbeda.
   - Jangan gunakan warna aksen interaktif (misal `systemBlue`) untuk teks non-interaktif atau header dekoratif.
   - Pemetaan makna warna standar Apple:
     - **Biru (`systemBlue`)**: Interaksi primer, tautan aktif, pemilihan baris tabel (*selection*), fokus input.
     - **Hijau (`systemGreen`)**: Status sukses, servis selesai, perangkat siap diambil, toggle aktif.
     - **Oranye (`systemOrange`)**: Status pending, menunggu sparepart, peringatan ringan.
     - **Merah (`systemRed`)**: Tindakan destruktif (Hapus data, Batalkan), pesan error validasi, peringatan kritis.
     - **Kuning (`systemYellow`)**: Bintang rating, peringatan perhatian.
     - **Abu-abu Netral (`systemGray`)**: Kontrol sekunder, tombol dismiss/cancel, teks pembantu.

3. **Jangan Mengandalkan Warna Semata (*Never Rely on Color Alone*)**:
   - Untuk mematuhi standar aksesibilitas WCAG 2.1 AA/AAA dan pedoman Apple, setiap informasi status **wajib** menyertakan indikator ganda: **Warna + Ikon/Bentuk + Teks Deskriptif**.
   - Contoh: Badge error tidak boleh hanya berupa lingkaran merah, melainkan kapsul merah lembut dengan ikon tanda seru `!` dan teks *"Gagal menyimpan"*.

4. **Kontras & Keterbacaan (*Contrast & Legibility*)**:
   - Teks utama (`labelColor`) terhadap latar belakang wajib memenuhi rasio kontras minimal **4.5:1** (level AA) dan dianjurkan **7:1** (level AAA).
   - Elemen interaktif dan kontrol formulir wajib memenuhi rasio kontras minimal **3:1**.
   - Tidak menempatkan teks putih di atas warna aksen pudar.

5. **Dukungan Tampilan Adaptif (Light & Dark Mode)**:
   - Warna didefinisikan secara semantik melalui CSS Variables yang memiliki nilai terkalibrasi otomatis untuk *Light Mode* dan *Dark Mode*.

---

## 2. Palet Token Warna Sistem macOS (Light & Dark Mode)

### A. System Accent & Functional Colors

| Token CSS | Nama Semantic Apple | Nilai Light Mode | Nilai Dark Mode | Penerapan di Backend MobiCare |
| :--- | :--- | :--- | :--- | :--- |
| `--mac-blue` | `systemBlue` | `#007AFF` | `#0A84FF` | Tombol primer, baris tabel terpilih, focus ring input, tautan navigasi. |
| `--mac-green` | `systemGreen` | `#34C759` | `#30D158` | Status servis selesai, tombol switch on, konfirmasi sukses. |
| `--mac-red` | `systemRed` | `#FF3B30` | `#FF453A` | Tombol hapus data, modal destructive, banner pesan error. |
| `--mac-orange` | `systemOrange` | `#FF9500` | `#FF9F0A` | Status pengerjaan servis (*in-progress*), warning badge. |
| `--mac-yellow` | `systemYellow` | `#FFCC00` | `#FFD60A` | Review rating bintang, badge draft. |
| `--mac-mint` | `systemMint` | `#00C7BE` | `#63E6E2` | Status diagnosa hardware normal. |
| `--mac-teal` | `systemTeal` | `#59ADC4` | `#6AC4DC` | Sub-kategori sparepart aksesori. |
| `--mac-cyan` | `systemCyan` | `#32ADE6` | `#64D2FF` | Highlight info garansi resmi. |
| `--mac-indigo` | `systemIndigo` | `#5856D6` | `#5E5CE6` | Kategori diagnostik software/logic board. |
| `--mac-purple` | `systemPurple` | `#AF52DE` | `#BF5AF2` | Tag kategori media galeri promo. |
| `--mac-pink` | `systemPink` | `#FF2D55` | `#FF375F` | Penawaran voucher spesial / diskon. |
| `--mac-brown` | `systemBrown` | `#A2845E` | `#AC8E68` | Log histori arsip servis lama. |
| `--mac-gray` | `systemGray` | `#8E8E93` | `#98989D` | Ikon netral, tombol dismiss/cancel. |

---

### B. Hierarki Isian Kontainer (*Fills Hierarchy*)

Apple mendefinisikan 5 tingkatan isian kontainer transparan (*Fills*) untuk menampung elemen-elemen internal tanpa menambah garis border:

| Token CSS | Nama Semantic Apple | Nilai Light Mode | Nilai Dark Mode | Peruntukan Isian |
| :--- | :--- | :--- | :--- | :--- |
| `--mac-fill-primary` | `primaryFill` | `rgba(0, 0, 0, 0.12)` | `rgba(255, 255, 255, 0.18)` | Latar tombol pill sekunder, track kontrol aktif. |
| `--mac-fill-secondary` | `secondaryFill` | `rgba(0, 0, 0, 0.08)` | `rgba(255, 255, 255, 0.14)` | Latar input pencarian (*search field*), tag kapsul. |
| `--mac-fill-tertiary` | `tertiaryFill` | `rgba(0, 0, 0, 0.05)` | `rgba(255, 255, 255, 0.10)` | Latar segmented control yang tidak aktif, progress bar track. |
| `--mac-fill-quaternary` | `quaternaryFill` | `rgba(0, 0, 0, 0.03)` | `rgba(255, 255, 255, 0.06)` | Arsir baris tabel selang-seling (*zebra striping*). |
| `--mac-fill-quinary` | `quinaryFill` | `rgba(0, 0, 0, 0.015)`| `rgba(255, 255, 255, 0.03)` | Bayangan batas pemisah sangat samar. |

---

### C. Dynamic Label / Typography Colors

Menggunakan sistem opasitas Apple SF Pro untuk menciptakan kedalaman hierarki teks yang natural:

| Token CSS | Nama Semantic Apple | Definisi Light Mode | Definisi Dark Mode | Peruntukan Tipografi |
| :--- | :--- | :--- | :--- | :--- |
| `--mac-label-primary` | `labelColor` (Primary A) | `rgba(0, 0, 0, 0.88)` (`#1D1D1F`) | `rgba(255, 255, 255, 0.92)` | Judul halaman, label form utama, nilai data tabel, judul alert modal. |
| `--mac-label-secondary` | `secondaryLabelColor` (Secondary A) | `rgba(0, 0, 0, 0.55)` (`#6E6E73`) | `rgba(255, 255, 255, 0.58)` | Deskripsi modal, timestamp notifikasi `now`, breadcrumb path. |
| `--mac-label-tertiary` | `tertiaryLabelColor` (Tertiary A) | `rgba(0, 0, 0, 0.28)` (`#AEAEB2`) | `rgba(255, 255, 255, 0.32)` | Placeholder kolom input, status non-aktif (*disabled*), ikon pelengkap. |
| `--mac-label-quaternary` | `quaternaryLabelColor` (Quaternary A) | `rgba(0, 0, 0, 0.12)` | `rgba(255, 255, 255, 0.15)` | Garis pemisah ultra-halus, watermark, dekorasi nomor urut. |
| `--mac-label-quinary` | `quinaryLabelColor` (Quinary A) | `rgba(0, 0, 0, 0.06)` | `rgba(255, 255, 255, 0.08)` | Glyph dekoratif latar belakang. |

---

### D. Sistem Ketebalan Material Kaca (*Liquid Glass Thickness Hierarchy*)

Berdasarkan spesifikasi resmi Apple Design Resources (Ref 17):

| Tingkat Ketebalan | Token CSS | Nilai Backdrop Blur & Opasitas | Peruntukan UI |
| :--- | :--- | :--- | :--- |
| **UltraThick** | `--mac-material-ultra-thick` | `backdrop-filter: blur(50px) saturate(200%); background: rgba(255, 255, 255, 0.92);` | Modal penuh atau backdrop guard yang mengunci seluruh interaksi. |
| **Thick** | `--mac-material-thick` | `backdrop-filter: blur(35px) saturate(180%); background: rgba(255, 255, 255, 0.82);` | Kanvas jendela utama aplikasi macOS (Window Frame). |
| **Medium** | `--mac-material-medium` | `backdrop-filter: blur(25px) saturate(170%); background: rgba(255, 255, 255, 0.72);` | Toolbar jendela, attached sheet dialog, panel formulir mengambang. |
| **Thin** | `--mac-material-thin` | `backdrop-filter: blur(20px) saturate(160%); background: rgba(255, 255, 255, 0.60);` | Popover, context menu klik kanan, dropdown menu navigasi. |
| **UltraThin** | `--mac-material-ultra-thin` | `backdrop-filter: blur(15px) saturate(150%); background: rgba(255, 255, 255, 0.40);` | Menubar transparan 28px atas, macOS dock bawah, highlight seleksi baris. |

---

### E. Surfaces, Canvas & Material Colors

| Token CSS | Nama Semantic Apple | Nilai Light Mode | Nilai Dark Mode | Peruntukan Material |
| :--- | :--- | :--- | :--- | :--- |
| `--mac-window-bg` | `windowBackgroundColor` | `#F5F5F7` | `#1E1E1E` | Kanvas jendela utama macOS di belakang konten. |
| `--mac-surface` | `controlBackgroundColor` | `#FFFFFF` | `#2D2D2D` | Latar belakang kartu data, tabel putih, form control wrapper. |
| `--mac-surface-elevated` | `elevatedSurface` | `#FFFFFF` | `#383838` | Kartu Sheet modal, popover, dan dropdown menu. |
| `--mac-glass-bg` | `liquidGlass` | `rgba(255, 255, 255, 0.72)` | `rgba(38, 38, 38, 0.75)` | Latar Menubar atas, dock, dan toast banner (`backdrop-filter: blur(30px)`). |
| `--mac-sidebar-bg` | `sidebarBackgroundColor` | `rgba(246, 246, 246, 0.65)` | `rgba(30, 30, 30, 0.65)` | Sidebar navigasi kiri (`backdrop-filter: blur(25px)`). |
| `--mac-separator` | `separatorColor` | `rgba(0, 0, 0, 0.08)` | `rgba(255, 255, 255, 0.12)` | Garis batas kolom tabel, divider menu, hairline window border. |
| `--mac-selection` | `selectedContentBackground` | `#007AFF` | `#0A84FF` | Latar belakang baris tabel yang sedang dipilih. |
| `--mac-selection-text` | `selectedContentText` | `#FFFFFF` | `#FFFFFF` | Teks di atas baris tabel yang sedang dipilih. |

---

### D. Window Controls (Traffic Lights)

| Kontrol Window | Token CSS | Warna Normal | Warna Hover / Border |
| :--- | :--- | :--- | :--- |
| **Close (Tutup)** | `--mac-traffic-close` | `#FF5F56` / `#FF736A` | `border: 1px solid rgba(0, 0, 0, 0.12);` |
| **Minimize (Minimalkan)** | `--mac-traffic-minimize` | `#FFBD2E` / `#FEBC2E` | `border: 1px solid rgba(0, 0, 0, 0.12);` |
| **Zoom / Fullscreen (Layar Penuh)** | `--mac-traffic-zoom` | `#27C93F` / `#19C332` | `border: 1px solid rgba(0, 0, 0, 0.12);` |

---

## 3. Implementasi CSS Variables Siap Pakai

```css
:root {
  /* Apple HIG Accent & Status Colors */
  --mac-blue: #007AFF;
  --mac-green: #34C759;
  --mac-red: #FF3B30;
  --mac-orange: #FF9500;
  --mac-yellow: #FFCC00;
  --mac-mint: #00C7BE;
  --mac-teal: #59ADC4;
  --mac-cyan: #32ADE6;
  --mac-indigo: #5856D6;
  --mac-purple: #AF52DE;
  --mac-pink: #FF2D55;
  --mac-brown: #A2845E;
  --mac-gray: #8E8E93;

  /* Destructive & Warning Soft Tints */
  --mac-red-tint: rgba(255, 59, 48, 0.12);
  --mac-blue-tint: rgba(0, 122, 255, 0.10);
  --mac-green-tint: rgba(52, 199, 89, 0.12);
  --mac-orange-tint: rgba(255, 149, 0, 0.12);

  /* Apple Container Fills Hierarchy */
  --mac-fill-primary: rgba(0, 0, 0, 0.12);
  --mac-fill-secondary: rgba(0, 0, 0, 0.08);
  --mac-fill-tertiary: rgba(0, 0, 0, 0.05);
  --mac-fill-quaternary: rgba(0, 0, 0, 0.03);
  --mac-fill-quinary: rgba(0, 0, 0, 0.015);

  /* Light Mode Semantic Typography */
  --mac-label-primary: rgba(0, 0, 0, 0.88);
  --mac-label-secondary: rgba(0, 0, 0, 0.55);
  --mac-label-tertiary: rgba(0, 0, 0, 0.28);
  --mac-label-quaternary: rgba(0, 0, 0, 0.12);
  --mac-label-quinary: rgba(0, 0, 0, 0.06);

  /* Light Mode Surfaces & Canvas */
  --mac-window-bg: #F5F5F7;
  --mac-surface: #FFFFFF;
  --mac-surface-elevated: #FFFFFF;
  --mac-glass-bg: rgba(255, 255, 255, 0.75);
  --mac-sidebar-bg: rgba(246, 246, 246, 0.65);
  --mac-separator: rgba(0, 0, 0, 0.08);

  /* Selection & Focus */
  --mac-selection: #007AFF;
  --mac-selection-text: #FFFFFF;
  --mac-focus-ring: 0 0 0 3px rgba(0, 122, 255, 0.25);

  /* Window Controls */
  --mac-traffic-close: #FF5F56;
  --mac-traffic-minimize: #FFBD2E;
  --mac-traffic-zoom: #27C93F;

  /* Liquid Glass Material Thickness Hierarchy */
  --mac-material-ultra-thick: blur(50px) saturate(200%);
  --mac-material-thick: blur(35px) saturate(180%);
  --mac-material-medium: blur(25px) saturate(170%);
  --mac-material-thin: blur(20px) saturate(160%);
  --mac-material-ultra-thin: blur(15px) saturate(150%);

  /* Apple UI Radii System */
  --mac-radius-window: 14px;
  --mac-radius-modal: 20px;
  --mac-radius-pill: 9999px;
  --mac-radius-control: 6px;
  --mac-radius-card: 10px;
}

/* Dark Mode Appearance (Opsional / Terpadu) */
[data-theme="dark"] {
  --mac-blue: #0A84FF;
  --mac-green: #30D158;
  --mac-red: #FF453A;
  --mac-orange: #FF9F0A;
  --mac-yellow: #FFD60A;

  --mac-label-primary: rgba(255, 255, 255, 0.92);
  --mac-label-secondary: rgba(255, 255, 255, 0.58);
  --mac-label-tertiary: rgba(255, 255, 255, 0.32);
  --mac-label-quaternary: rgba(255, 255, 255, 0.15);

  --mac-window-bg: #1E1E1E;
  --mac-surface: #2D2D2D;
  --mac-surface-elevated: #383838;
  --mac-glass-bg: rgba(38, 38, 38, 0.75);
  --mac-sidebar-bg: rgba(30, 30, 30, 0.65);
  --mac-separator: rgba(255, 255, 255, 0.10);
}
```

---

## 4. Checklist Penerapan Pada Backend Admin MobiCare

- [x] **Hierarki Aksen**: Hanya tombol aksi utama (`Save`, `Submit`, `Tambah Baru`) yang menggunakan solid `--mac-blue`. Tombol netral menggunakan kapsul abu-abu semi-transparan (`rgba(0, 0, 0, 0.05)`).
- [x] **Peringatan & Tindakan Destruktif**: Tombol hapus memakai latar merah pudar `--mac-red-tint` (`rgba(255, 59, 48, 0.12)`) dengan teks `--mac-red` agar tidak terlalu agresif namun jelas terlihat berbahaya (Ref 04 & Ref 10).
- [x] **Seleksi Baris Tabel**: Saat baris tabel dipilih, seluruh baris berubah menjadi latar `--mac-blue` solid dan teks berubah menjadi putih murni `--mac-selection-text` (Ref 07).
- [x] **Focus Ring Input**: Setiap kontrol form yang aktif mendapat focus ring menyala `--mac-focus-ring` (Ref 05 & Ref 11).
- [x] **Pemisah Tanpa Border Tebal**: Menghindari kotak-kotak border tebal; batas visual dibuat oleh `--mac-separator` (`rgba(0, 0, 0, 0.08)`) dan perbedaan material kaca netral.
