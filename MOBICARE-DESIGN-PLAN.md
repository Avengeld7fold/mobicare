# MobiCare Design Plan

> Revisi 16 Oktober 2026: navbar dan hero mengikuti ukuran langsung FastTrack, dengan palet MobiCare hijau/hitam/putih. Oranye CTA dan rencana entrance lama di bawah sudah dibatalkan pengguna. `DESIGN.md` dan `app/mobicare.css` adalah acuan implementasi terbaru.

## Design reference

Visual direction terinspirasi oleh [FastTrack Sales](https://fastracksales.com/): sinematik, editorial, penuh kontras, dan memakai aksen warna untuk mengarahkan tindakan. MobiCare tidak menyalin konten, foto, identitas, atau elemen brand FastTrack.

## Core direction — Precision in motion

MobiCare hadir sebagai service center gadget yang cepat dan kompeten. Pengalaman awal perlu membuat pengunjung segera memahami tiga hal: perangkat apa yang bisa ditangani, estimasi harga tersedia secara transparan, dan konsultasi dapat dimulai cepat.

- **Mode:** Persuade untuk Home; Operate untuk Price List dan admin.
- **Visual world:** editorial workshop modern—latar hitam yang tenang, foto repair yang nyata dan bertekstur, tipografi display tinggi/condensed, garis tipis sebagai struktur, serta ruang kosong yang besar.
- **Brand expression:** hijau logo MobiCare menjadi penanda identitas dan status positif; oranye hangat menjadi warna tindakan/CTA yang langka. Keduanya tidak dipakai sebagai gradien dekoratif.

## Palette awal

| Peran | Warna | Pemakaian |
| --- | --- | --- |
| Ink | `#10110F` | Header, hero overlay, panel gelap |
| Surface | `#191B18` | Kartu, tabel, navigation state |
| Paper | `#F4F1E8` | Section terang, teks pada panel gelap bila diperlukan |
| Mobi Green | `#00A651` | Brand cue, status, detail aktif non-CTA |
| Signal Orange | `#FF8A2A` | CTA utama, indikator progres, highlight prioritas |
| Muted | `#A8AAA4` | Meta, label, garis sekunder |

## Typography dan responsive type system

MobiCare mengikuti sistem tipografi FastTrack secara langsung: `Gobold` sebagai display dan `Greycliff` sebagai sans-serif utilitarian. Keduanya adalah font komersial/proprietary; implementasi wajib memakai lisensi yang sah sebelum file font ditambahkan ke repo. Jangan menyalin file font dari website FastTrack.

| Role MobiCare | Family | Desktop ≥1051px | iPad 721–1050px | Mobile ≤720px | Karakter FastTrack yang dipertahankan |
| --- | --- | --- | --- | --- | --- |
| Hero headline | Gobold, Arial, sans-serif | `112px / 1`, `-0.025em` | `clamp(64px, 7vw, 86px) / 1`, `-0.025em` | `clamp(54px, 15vw, 62px) / 1`, `-0.025em` | Uppercase, blok besar, komposisi dua baris |
| Section headline | Gobold, Arial, sans-serif | `66px / 1.08`, `-0.015em` | `42px / 1.08`, `-0.015em` | `48px / 1.08`, `-0.015em` | Editorial, tegas, tanpa weight berlebih |
| Card/data headline | Gobold, Arial, sans-serif | `36px / 1.02` | `25px / 1.02` | `28–32px / 1.02` | Ringkas untuk kategori, promo, dan service block |
| Navigation & CTA | Greycliff, Arial, sans-serif | `14px / 1.58`, `700`, `0.10em` | `14px / 1`, `700`, `0.12em` | `12px / 1`, `700`, `0.12em` | Uppercase, padat, mudah dipindai |
| Kicker/eyebrow | Greycliff, Arial, sans-serif | `14px / 1.45`, `400`, `0.18em` | `14px / 1.45`, `400`, `0.18em` | `13px / 1.5`, `400`, `0.12em` | Label kecil dengan tracking lebar |
| Body | Greycliff, Arial, sans-serif | `16px / 1.65`, `400` | `16px / 1.65`, `400` | `16px / 1.6`, `400` | Tenang, readable, normal case |
| Price/metadata | Greycliff, Arial, sans-serif | `14px / 1.45`, `700`, `0.08em` | sama | `13px / 1.45`, `700`, `0.06em` | Angka dan status tetap tajam; gunakan tabular numbers |

Ukuran di atas mengadopsi hasil pengukuran halaman FastTrack pada viewport 1920px, 834px, dan 390px. MobiCare akan memakai role-based tokens ini agar konsisten di seluruh route, bukan memasang satu ukuran global pada setiap tag `h1`, `h2`, atau `h3`.

### Breakpoint dan layout

- **Desktop (≥1051px):** navigation penuh, 12-column grid, hero typography maksimal, section data dapat tiga kolom.
- **iPad (721–1050px):** navigation berubah menjadi drawer pada titik `1050px`, hero headline memakai clamp, grid editorial turun ke dua atau satu kolom sesuai kepadatan konten.
- **Mobile (≤720px):** header `76px`, padding horizontal sekitar `5vw`, hero minimal `calc(100svh - 76px)`, typography dan CTA mengikuti scale tabel di atas.
- **Small mobile (≤420px):** content tidak diperkecil lagi secara agresif; yang diubah adalah grid, gap, dan wrapping agar target sentuh tetap nyaman.

## Typography dan layout

- Navbar pendek, wordmark MobiCare di kiri, link penting di kanan, dan satu CTA kontras: **Cek Harga**.
- Container desktop lebar dengan grid 12 kolom; mobile tetap single-column dengan headline besar, CTA jelas, dan tabel Price List dapat discroll secara terkendali.
- Border 1px dan divider tipis membentuk hirarki; radius kecil hingga sedang agar terasa presisi, bukan “soft SaaS”.

## Home — urutan pengalaman

1. **Hero sinematik:** satu foto macro perbaikan gadget nyata dengan overlay gelap, wordmark/eyebrow, headline tegas, dan CTA `Cek Harga` + `Konsultasi`.
2. **Service navigator:** pilihan perangkat (iPhone, iPad, MacBook, Android) sebagai jalur langsung menuju kategori Price List yang sudah ada.
3. **Proof strip:** tiga bukti ringkas—estimasi transparan, teknisi berpengalaman, dan garansi layanan—tanpa klaim angka yang belum terverifikasi.
4. **Price List spotlight:** ringkasan kategori + waktu pembaruan data; CTA tetap membawa user ke route Price List existing.
5. **Promo/Galeri:** konten backend existing ditampilkan dengan frame editorial dan navigasi sederhana.
6. **Closing CTA:** blok gelap/terang kontras untuk konsultasi dan lokasi, kemudian footer yang ringkas.

## Price List — tetap fungsional, tampil baru nanti

- Data, kategori, route, server logic, dan admin editor tidak berubah.
- Re-skin bertahap akan memprioritaskan pencarian, pemilihan kategori, tabel harga, status kosong, dan CTA konsultasi.
- Tabel memakai angka tabular dan kontras tinggi; filter/kategori mendapat state aktif hijau, sedangkan CTA menggunakan oranye.

## Motion dan interaction

- Navbar berubah dari transparan ke solid ketika meninggalkan hero.
- Hero menggunakan satu reveal terorkestrasi untuk headline dan CTA; tidak ada efek 3D/scroll spectacle Fixmi.
- Section masuk dengan fade + vertical translate halus; garis/timeline dapat meluas saat masuk viewport.
- Hover kartu bersifat fisik dan singkat: border/warna berubah serta perpindahan 2–4px. Semua motion menghormati `prefers-reduced-motion`.

## Guardrails

- Jangan memakai foto, copy, ikon kotak-kotak, logo, atau desain spesifik FastTrack.
- Jangan membawa kembali visual Fixmi, orange diagnostic lama, 3D hero, atau scrolling spare-part.
- Jangan mengubah backend Price List, Galeri, Promo, admin, atau API ketika membangun tampilan baru.
- Foto repair asli diperlukan untuk hero; sebelum tersedia, gunakan neutral media placeholder yang tidak mengklaim hasil layanan.

## Build sequence

1. Konfirmasi arah visual ini dan pilih/siapkan foto hero repair.
2. Bangun design tokens, header/footer, dan Home desktop/mobile.
3. Re-skin Price List tanpa perubahan kontrak data/backend.
4. Adaptasi Galeri dan Promo ke sistem yang sama.
5. QA desktop/mobile, accessibility, motion-reduction, lalu implementasi metadata dan konten MobiCare final.
