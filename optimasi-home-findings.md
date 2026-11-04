# Optimasi Halaman Home — Temuan & Panduan Implementasi

Dokumen ini hanya berisi temuan dan cara perbaikan. Belum ada yang dieksekusi.
Target: halaman Home (`app/page.tsx` + `components/MobiCareHero.tsx`, `components/MobiCareDivider.tsx`, `components/home/*`).

## Prinsip yang wajib dipegang saat perbaikan
1. Jangan mengubah konten, teks ID/EN, link, atau tampilan visual yang disengaja (label uppercase/tracking adalah gaya referensi FastTrack — biarkan).
2. Perbaikan harus nol perubahan visual atau hanya nudge ≤2px.
3. Jangan hapus `window.__mobicareLottieAnim` (dipakai `tests/hero-autoplay.mjs`).
4. Jangan set `scroll-behavior: smooth` di CSS (konflik dengan Lenis).
5. Setelah selesai jalankan verifikasi di bagian bawah.

---

## A. Dead code

### A1. LoadingGate & loader selalu nonaktif
- Lokasi: `components/loader/LoadingGate.tsx` (`DISABLE_LOADER_IN_DEV = true`, `CRITICAL_ASSETS = []`), dipakai di `app/layout.tsx:124`.
- Temuan: `FixmiLoader` + `useAssetPreloader` tidak pernah render. Sinyal `window.__fixmiLoaded` / event `fixmi:loaded` dikirim di `LoadingGate.tsx` tapi **tidak ada listener** di seluruh kode (sudah dicek).
- Implementasi (pilih salah satu):
  - (a) Hapus `<LoadingGate>` dari `app/layout.tsx`, hapus folder `components/loader/`, dan dispatch sinyal dari tempat lain bila benar dibutuhkan; ATAU
  - (b) Ubah flag jadi env-driven: `const ENABLE_LOADER = process.env.NEXT_PUBLIC_ENABLE_LOADER === "1"` dan kembalikan daftar asset kritis bila loader akan dipakai saat launch.
- Catatan: jika loader direncanakan untuk produksi, jangan dihapus — cukup ubah ke env-driven (b).

### A2. Duplikasi `gsap.ticker.lagSmoothing(0)`
- Lokasi: `components/SmoothScrolling.tsx` (global, benar) dan `components/about/AboutCards.tsx` (redundan).
- Implementasi: hapus baris `gsap.ticker.lagSmoothing(0);` dari `AboutCards.tsx` (ini bagian About, boleh dikerjakan di tahap ini juga).

---

## B. Performa / smoothness

### B1. Animasi `left` di `.smarter-speed-line::after` (layout thrash) — PRIORITAS
- Lokasi: `app/mobicare.css` baris ~1113-1120 (`@keyframes smarter-speed-line` menganimasi `left: -28% → 128%`).
- Implementasi: ubah ke transform-only:
  ```css
  .smarter-speed-line::after {
    left: 0;
    width: 28%;
    animation: 4s cubic-bezier(.65,0,.35,1) infinite smarter-speed-line;
  }
  @keyframes smarter-speed-line {
    0% { transform: translate3d(-128%, 0, 0); }
    55%, 100% { transform: translate3d(460%, 0, 0); }
  }
  ```
  (460% ≈ 128%/28% agar posisi akhir sama.)

### B2. Marquee tanpa pause saat hover
- Lokasi: `.mobi-divider__track` (`mobiDividerMarquee`, 40s, baris ~470-480) dan `.signup-marquee-track` (`mobi-signup-marquee`, 22s, baris ~1564-1572).
- Implementasi: tambah pause:
  ```css
  .mobi-divider-wrap:hover .mobi-divider__track,
  .signup-marquee:hover .signup-marquee-track { animation-play-state: paused; }
  ```
- Reduced-motion untuk keduanya sudah ada — pertahankan.

### B3. Divider merender 4 segmen SVG berat
- Lokasi: `components/MobiCareDivider.tsx` (4× `DividerSegment`, tiap segmen berisi `MobiCareWordmark` SVG kompleks + logo Fixmi).
- Implementasi: kurangi jadi 2× `DividerSegment` (loop `translate3d(-50%)` tetap mulus). Nol perubahan visual.

### B4. `width: 100vw` pada `.mobi-divider-stripe--flow`
- Lokasi: `app/mobicare.css` baris ~503-504.
- Implementasi: ganti `width: 100vw; min-width: 100vw` menjadi nilai tetap berbasis viewport yang aman, mis. `width: 100svw; min-width: 100svw` atau `width: 100%; min-width: 100%` pada wrapper (wrapper `.mobi-divider-wrap` sudah `overflow:hidden`, jadi stripe cukup `width: 100%`).

### B5. `overflow-x: hidden` pada body
- Lokasi: `app/globals.css` baris ~141 (`body { overflow-x: hidden }`).
- Implementasi: ganti ke `overflow-x: clip` pada `html, body` (lebih aman untuk sticky/fixed; Hallmark gate 34).

### B6. Video modal autoplay tanpa `muted`
- Lokasi: `components/home/HomeSmarterWay.tsx` baris ~146-152 (`<video controls autoPlay playsInline>`).
- Implementasi: tambah `muted` (autoplay bersuara diblokir browser). Video 3.8MB sudah dimuat hanya saat modal terbuka — tidak perlu diubah. Opsional: `preload="metadata"`.

### B7. `priority` pada gambar kecil di bawah fold
- Lokasi: `components/home/HomeAlertsSignup.tsx` baris ~54-61 (`signup-action-mark` Image: `unoptimized priority`).
- Implementasi: hapus `priority` (biarkan `unoptimized` — asset kecil 36px).

### B8. Guard `prefers-reduced-motion` belum menutup animasi smarter
- Lokasi: `app/mobicare.css` — `.smarter-speed-line::after` (1113) dan `@keyframes smarter-play-pulse` (1248) tidak masuk blok reduced-motion mana pun (blok yang ada: 122, 443, 595, 1596).
- Implementasi: tambah blok:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .smarter-speed-line::after,
    .smarter-play-pulse { animation: none !important; }
  }
  ```
  (cek nama class tombol play di CSS — pakai selector yang sudah ada.)

### B9. Feedback hover pada gambar poster (opsional, estetika)
- Lokasi: `app/mobicare.css` baris ~1209 (`.smarter-poster:hover img` scale).
- Implementasi opsional: pindahkan scale/feedback ke container `.smarter-poster`, jangan pada `<img>` (Hallmark gate 11). Hanya jika tidak mengubah kesan visual yang disukai.

### B10. Catatan performa yang SUDAH benar (jangan diubah)
- `SmoothScrolling.tsx`: Lenis native untuk touch/reduced-motion, `gsap.ticker` sinkron ScrollTrigger, ResizeObserver body — sudah optimal.
- `MobiCareLottiePlayer.tsx`: dynamic import `lottie-web`, `progressiveLoad`, pause saat offscreen/tab hidden, reduced-motion ke frame 350 — sudah optimal. `.who-media { min-height: 610px }` mencegah CLS.
- Hero image `priority` + `sizes` sudah benar; `mobiHeroFloat` transform-only dengan `will-change`.
- Video 3.8MB dan Lottie 365KB tidak memblokir jalur kritis.

---

## C. Aksesibilitas ringan

### C1. Poster video pakai `div onClick`
- Lokasi: `components/home/HomeSmarterWay.tsx` baris ~87-90 (`.smarter-poster` div clickable).
- Implementasi: hapus `onClick` dari div (tombol `smarter-play-btn` sudah menyediakan akses keyboard), atau ubah poster jadi `<button type="button">` penuh dengan konten di dalamnya. Pilih yang tidak merusak layout.

---

## D. Catatan Hallmark (jangan dijadikan blocker)
- Banyak literal warna + label uppercase/tracking di `app/mobicare.css` adalah gaya lama/referensi FastTrack yang disengaja. Refactor ke token hanya bila diminta terpisah, bertahap, dan pastikan `git diff` visual nol.
- Jika menjalankan `sloplint` terhadap `app/mobicare.css`, ekspektasi banyak FAIL legacy — perbaiki hanya yang mekanis dari daftar B di atas.

---

## E. Verifikasi setelah implementasi
1. `npm run lint && npx tsc --noEmit && npm run build && git diff --check`
2. Hallmark (opsional): `node ~/.commandcode/skills/hallmark/scripts/sloplint.mjs components/home components/MobiCareHero.tsx components/MobiCareDivider.tsx app/mobicare.css --genre editorial --scope component`
3. Browser (agent-browser, port dev 3000):
   - Lebar 2560/1920/1440/1024/834/720/390/320: `document.documentElement.scrollWidth === clientWidth` (tanpa overflow).
   - Marquee divider & signup: berhenti saat hover, jalan saat tidak.
   - `prefers-reduced-motion: reduce`: semua animasi mati.
   - Modal video: buka via tombol play, tutup via X/backdrop/Escape, scroll terkunci saat terbuka.
   - Scroll penuh: tinggi dokumen stabil (tidak ada jump; bandingkan `scrollHeight` sebelum/sesudah scroll).
   - Hero, divider, device gallery, who-we-are (lottie), smarter way, signup: semua tampil dan berfungsi sama seperti sebelum perbaikan.
