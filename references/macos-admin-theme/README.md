# macOS Theme Style System — Admin & Backend References

Folder ini didedikasikan sebagai repositori aset acuan dan referensi visual untuk perombakan dashboard/backend admin MobiCare mengadopsi **Theme Style System macOS (Apple Design Resources / Tahoe & Sonoma)**.

---

## 1. Indeks Referensi Gambar

| No | File Referensi | Komponen / Area macOS | Fitur Kunci / Karakteristik Visual |
| :---: | :--- | :--- | :--- |
| **01** | [`01-cover-macos-tahoe-ui-kit.png`](./01-cover-macos-tahoe-ui-kit.png) | **Cover & Brand Identity** | Judul *"macOS Tahoe UI Kit"*, logo  Apple Design Resources, kurva ribbon gelombang dinamis Tahoe (Deep Cobalt `#0B47D9`, Cyan `#1CC4E8`, Soft Gold `#E8D3A2`, Pearl Sky `#EDF3FA`). |
| **02** | [`02-getting-started-typography-guidelines.png`](./02-getting-started-typography-guidelines.png) | **Typography & Editorial Layout** | Hirarki tipografi SF Pro resmi Apple: Title 38px Bold `#000000`, Lead text 16px Semibold, Body text 15px Regular `#1D1D1F`, Interactive links Apple Blue `#007AFF`, Footer copyright `#86868B`. Spasi paragraf lega 24px tanpa border berlebih. |
| **03** | [`03-alert-modal-side-by-side.png`](./03-alert-modal-side-by-side.png) | **Alert Modal (Side-by-side)** | Kartu modal frosted glass mengambang (`width: ~300px`, `radius: 20px`, `blur: 40px`, deep shadow). Title 14px bold, deskripsi 12px muted, dan 2 pill button berdampingan (Cancel neutral glass + Save Apple Blue `#007AFF`). |
| **04** | [`04-alert-modal-stacked.png`](./04-alert-modal-stacked.png) | **Alert Modal (Stacked 3 Buttons)** | Kartu modal frosted glass dengan 3 tombol vertikal bertumpuk hierarkis: Primary Save di atas (`#007AFF`), Destructive warning di tengah (*soft red tint* `#FF3B30`), dan Cancel di bawah. |
| **05** | [`05-window-sheet-save-dialog.png`](./05-window-sheet-save-dialog.png) | **Window Anatomy + Sheet Dialog** | Window lengkap dengan Traffic Lights (Red, Yellow, Green), titlebar terintegrasi search & breadcrumb path, serta Sheet Dialog mengambang berisi input teks ber-border biru, dropdown format file panah ganda, Delete destructive, Cancel, dan Save. |
| **06** | [`06-window-form-controls-settings.png`](./06-window-form-controls-settings.png) | **Window Controls & Settings Rows** | Split sidebar kiri (icon folder + status aktif rounded) dan panel formulir kanan dengan komponen kontrol native: Checkboxes biru, Dropdown pop-up button ⇅, Stepper angka, Switch toggle, Radio buttons, dan grouped rows. |
| **07** | [`07-window-table-list-view.png`](./07-window-table-list-view.png) | **Data Table / Finder List View** | Header kolom (`Name`, `Date Modified` dengan sort caret, `Size`, `Kind`), baris tabel bertingkat/expandable, seleksi baris aktif solid Apple Blue (`#007AFF`) dengan teks putih, dan tinggi baris rapat data-dense (24-28px). |
| **08** | [`08-menubar-and-context-menus.png`](./08-menubar-and-context-menus.png) | **Menubar & Context Menus** | Menubar transparan atas ( + status bar), dropdown menu bertingkat (*cascading flyout submenus*) dengan ikon SF Symbols dan shortcut badge keyboard (`⌘Z`, `⌘C`), serta klik kanan context menu dengan seleksi biru. |
| **09** | [`09-desktop-modal-alert-side-by-side.png`](./09-desktop-modal-alert-side-by-side.png) | **Desktop View — Side-by-side Alert** | Komposisi desktop penuh: Menubar atas, macOS Dock transparan di bawah, Window backdrop, dan Alert Modal 2 tombol di tengah layar memperlihatkan proporsi dan fokus modal pada skala layar penuh. |
| **10** | [`10-desktop-modal-alert-stacked.png`](./10-desktop-modal-alert-stacked.png) | **Desktop View — Stacked Alert** | Komposisi desktop penuh menampilkan Alert Modal 3 tombol bertumpuk (Save `#007AFF`, Don't Save *red tint*, Cancel) dengan Dock dan Window backdrop sebagai penjaga perubahan yang belum disimpan (*unsaved changes guard*). |
| **11** | [`11-window-sheet-file-browser-save.png`](./11-window-sheet-file-browser-save.png) | **Advanced Sheet — Two-Pane File Browser** | Sheet Save As tingkat lanjut dengan field input, view switcher (icon/list/columns), dan split browser dua kolom: sidebar Favorites/Locations di kiri + tabel file di kanan, serta tombol New Document, Cancel, dan Save. |
| **12** | [`12-window-split-sidebar-toolbar-actions.png`](./12-window-split-sidebar-toolbar-actions.png) | **Split Window — Toolbar Action Group** | Jendela utama dengan Traffic Lights, tombol toggle sidebar `[ |]`, sidebar kategori bertingkat dengan collapsable section header, titlebar navigasi `< >`, action button grup (folder, delete, archive, tag, compose), dan search bar. |
| **13** | [`13-window-monobar-compact-titlebar.png`](./13-window-monobar-compact-titlebar.png) | **Monobar — Unified Compact Titlebar** | Varian jendela dengan titlebar dan toolbar terpadu menjadi satu baris kompak: Traffic Lights langsung bersanding dengan judul jendela `Folder 2`, riwayat `< >`, dan tombol aksi tanpa pemisah vertikal. |
| **14** | [`14-window-compact-utility-panel.png`](./14-window-compact-utility-panel.png) | **Compact Utility Panel / Inspector** | Panel jendela kecil melayang di tengah layar: Traffic Lights di kiri, judul tengah `📁 Title`, dan segmented control baris 5 tombol utility di bawahnya (sangat cocok untuk Quick Inspector / Palet Aset). |
| **15** | [`15-notifications-stacked-toast-banners.png`](./15-notifications-stacked-toast-banners.png) | **Push Notification Banners / Toasts** | Kartu notifikasi bertumpuk di pojok kanan atas desktop: frosted glass capsule (`radius: 16px`, `blur: 40px`), app icon di kiri, judul tebal 13px, deskripsi 12px, dan timestamp `now` di pojok kanan atas. |
| **16** | [`16-apple-hig-accents-fills-text-vibrancy.png`](./16-apple-hig-accents-fills-text-vibrancy.png) | **Accents, Fills, Text & Vibrancy Matrix** | Matriks resmi Apple Design Tokens: 13 Accents (Solid & Vibrant), 5 tingkat Fills (Primary s.d. Quinary), dan 6 tingkat Text hierarchy (Primary s.d. Senary) diuji di atas latar terang dan gelap transparan. |
| **17** | [`17-apple-materials-liquid-glass-thickness.png`](./17-apple-materials-liquid-glass-thickness.png) | **Liquid Glass Materials & Thickness Hierarchy** | Sistem material kaca macOS lengkap: Skala Small UI (pills/toggles), Medium UI (cards), Large UI (sheets/windows) serta 5 tingkat ketebalan material (*UltraThick, Thick, Medium, Thin, UltraThin*) diuji di atas wallpaper Tahoe Light dan Dark. |
| **18** | [`18-alerts-stacked-side-by-side-buttons.png`](./18-alerts-stacked-side-by-side-buttons.png) | **Alert Components & Button Variations** | Matriks resmi komponen alert dialog: Alert 3-tombol bertumpuk vertikal (Save `#007AFF`, Don't Save soft red tint `#FF3B30`, Cancel), Alert 2-tombol berdampingan (Cancel gray pill + Primary blue pill), dan spesifikasi 3 varian tombol pill Apple. |
| **19** | [`19-apple-buttons-hierarchy-states-matrix.png`](./19-apple-buttons-hierarchy-states-matrix.png) | **Button Hierarchy & Interactive States** | Matriks resmi gaya tombol Apple: Default, Colored, Secondary, Destructive, Primary, Borderless teks & ikon, diuji di 3 status interaksi: Normal/Idle, Pressed/Active, dan Disabled. |
| **20** | [`20-apple-buttons-component-set.png`](./20-apple-buttons-component-set.png) | **Button Component Variant Set** | Master set komponen tombol macOS Tahoe dari Apple Design Resources menampilkan variasi pill rounded, aksen biru, dan aksen netral abu-abu. |
| **21** | [`21-apple-buttons-stepper-circular-states.png`](./21-apple-buttons-stepper-circular-states.png) | **Circular Stepper Button States** | Tombol lingkaran dengan ikon panah ganda (⇅) dalam 3 status interaktif: Default, Pressed/Darkened, dan Disabled transparan. |
| **22** | [`22-apple-buttons-stepper-circular-sizes.png`](./22-apple-buttons-stepper-circular-sizes.png) | **Circular Stepper Button 5-Size Matrix** | Matriks 5 skala ukuran tombol lingkaran Apple (Mini, Small, Regular, Large, Extra Large) di 3 status interaktif untuk kontrol dropdown dan pagination. |
| **23** | [`23-apple-color-well-wheel-states.png`](./23-apple-color-well-wheel-states.png) | **Color Well Component States** | Kontrol pemilih warna resmi macOS (`NSColorWell`): status Default (cakram spektrum roda warna pelangi kerucut) dan status Active/Selected (cincin luar spektrum + pemisah putih + lingkaran warna solid terpilih). |
| **24** | [`24-apple-combo-box-states-single.png`](./24-apple-combo-box-states-single.png) | **Combo Box Component States** | Kontrol hibrida input teks + pull-down button resmi macOS (`NSComboBox`): 4 status interaktif (Default/Resting, Focused dengan Apple Blue ring & caret kursor, Pressed dengan button kapsul abu-abu gelap, dan Disabled). |
| **25** | [`25-apple-combo-box-sizes-and-states-matrix.png`](./25-apple-combo-box-sizes-and-states-matrix.png) | **Combo Box 5-Size & States Matrix** | Matriks lengkap 5 skala ukuran (Mini 20px, Small 24px, Regular 28px standar macOS, Large 34px, Extra Large 40px) di 4 status interaksi untuk efisiensi entri data padat. |
| **26** | [`26-apple-save-dialog-compact-and-expanded.png`](./26-apple-save-dialog-compact-and-expanded.png) | **Save Dialog: Compact vs Expanded Sheet** | Lembar dialog penyimpanan resmi macOS: Varian Compact (Save As input, tags, format, location, dan tombol destruktif Delete di kiri bawah) vs Varian Expanded (terintegrasi Finder file browser lengkap dengan sidebar favorit/lokasi). |
| **27** | [`27-apple-disclosure-button-states.png`](./27-apple-disclosure-button-states.png) | **Disclosure Button Component States** | Kontrol tombol lingkaran pengungkapan bertahap (`pushDisclosure`): pasangan panah ke bawah (`⌄` saat tertutup) dan ke atas (`⌃` saat terbuka) di 3 status interaktif (Default, Pressed, Disabled). |
| **28** | [`28-apple-disclosure-button-sizes-and-states-matrix.png`](./28-apple-disclosure-button-sizes-and-states-matrix.png) | **Disclosure Button 5-Size Matrix** | Matriks lengkap 5 skala ukuran tombol lingkaran (Mini 18px, Small 22px, Regular 26px standar macOS, Large 32px, Extra Large 40px) di status tertutup dan terbuka. |
| **29** | [`29-apple-form-controls-collection-matrix.png`](./29-apple-form-controls-collection-matrix.png) | **Forms & Settings Controls Compendium** | Master set komponen formulir dan pengaturan macOS Tahoe dari Apple Design Resources: Checkboxes, Radio Groups, Numeric Steppers ⇅, Pop-Up Buttons, Toggle Switches, serta deretan squircle badge ikon dalam 13 warna sistem Apple. |
| **30** | [`30-apple-image-well-states.png`](./30-apple-image-well-states.png) | **Image Well Component States** | Kontrol preview dan upload gambar interaktif resmi macOS (`NSImageView` editable): status Active/Editable (atas, tajam) vs status Disabled/Non-Editable (bawah, redup). |
| **31** | [`31-apple-lists-and-tables-selection-states.png`](./31-apple-lists-and-tables-selection-states.png) | **Lists & Tables Selection States** | Matriks resmi seleksi baris tabel dan daftar macOS: status Active Selection Solid Apple Blue `#007AFF` vs Inactive Window Selection Gray `#D1D1D6`, hierarki pohon (*outline view*) bertingkat, serta gaya seleksi persegi vs kapsul pill. |
| **32** | [`32-apple-macos-app-icons-collection.png`](./32-apple-macos-app-icons-collection.png) | **macOS App Icons Collection (Light & Dark)** | Koleksi master ikon squircle aplikasi macOS Tahoe resmi dari Apple Design Resources dalam mode terang dan gelap. |
| **33** | [`33-apple-menubar-full-strip-light-dark.png`](./33-apple-menubar-full-strip-light-dark.png) | **The Menu Bar Full Strip (Light & Dark)** | Strip penuh bilah menu 28px macOS Tahoe menampilkan Apple Logo , App Name (tebal), Menu Items, dan Menu Bar Extras (Wi-Fi, Spotlight, Profil, Control Center, Jam Digital). |
| **34** | [`34-apple-menubar-logo-states-light.png`](./34-apple-menubar-logo-states-light.png) | **Apple Menu Logo States (Light Mode)** | Status interaktif logo Apple di bilah menu terang: status default vs status aktif terbungkus kapsul pill abu-abu oval. |
| **35** | [`35-apple-menubar-logo-states-dark.png`](./35-apple-menubar-logo-states-dark.png) | **Apple Menu Logo States (Dark Mode)** | Status interaktif logo Apple di bilah menu gelap: status default vs status aktif bercahaya lembut. |
| **36** | [`36-apple-menubar-app-name-states.png`](./36-apple-menubar-app-name-states.png) | **Menu Bar App Name Title States** | Status judul nama aplikasi di bilah menu: status default teks tebal vs status aktif terbuka terbungkus kapsul pill abu-abu. |
| **37** | [`37-apple-menu-items-anatomy-and-states.png`](./37-apple-menu-items-anatomy-and-states.png) | **Menu Items Anatomy & Interactive States** | Anatomi item menu dan popover dropdown macOS: status Hover/Selected Solid Apple Blue `#007AFF`, toggle checkmark `✓`, garis pemisah (separator), sub-menu chevron `›`, serta simbol tombol pengubah shortcut (`⌃`, `⌥`, `⇧`, `⌘`). |
| **38** | [`38-apple-menu-widths-and-truncation-matrix.png`](./38-apple-menu-widths-and-truncation-matrix.png) | **Menu Widths & Text Truncation Matrix** | Matriks adaptasi 5 skala lebar kartu menu popover macOS Tahoe, menampilkan perilaku pemotongan teks elipsis di tengah (*middle truncation*) untuk menjaga keterbacaan pintasan keyboard. |
| **39** | [`39-apple-notification-banner-single.png`](./39-apple-notification-banner-single.png) | **Desktop Notification Toast Banner** | Anatomi resmi banner notifikasi push desktop macOS Tahoe: kapsul frosted glass beradius 18px (`backdrop-filter: blur(40px)`), app icon squircle 36px di kiri, judul tebal 13.5px, pesan deskripsi 12px, dan timestamp relatif `now` di kanan atas. |
| **40** | [`40-apple-pointing-devices-cursor-matrix.png`](./40-apple-pointing-devices-cursor-matrix.png) | **Pointing Devices & System Cursors Matrix** | Katalog lengkap kursor resmi sistem macOS (`NSCursor`): Arrow pointer, I-Beam, crosshair, pointing hand, open/closed hand (`grab`/`grabbing`), col-resize (`◀|▶`), row-resize, diagonal resize, zoom in/out, dan spinning wait pinwheel. |
| **41** | [`41-apple-popup-vs-pulldown-side-by-side.png`](./41-apple-popup-vs-pulldown-side-by-side.png) | **Pop-Up vs Pull-Down Buttons Comparison** | Komparasi resmi Apple berdampingan: Pop-Up Button (panah ganda `⇅`, pilihan tunggal mutually exclusive, tanda centang `✓`, judul dinamis) vs Pull-Down Button (panah tunggal `⌄`, daftar tindakan terkait, judul statis konstan). |
| **42** | [`42-apple-popup-and-pulldown-sizes-matrix.png`](./42-apple-popup-and-pulldown-sizes-matrix.png) | **Pop-Up & Pull-Down Buttons 5-Size Matrix** | Matriks lengkap 5 skala ukuran tombol Pop-Up (`⇅`) dan Pull-Down (`⌄`) (Mini 20px, Small 24px, Regular 28px standar macOS, Large 34px, Extra Large 40px) di 3 status interaktif. |
| **43** | [`43-apple-popover-arrow-positions-matrix.png`](./43-apple-popover-arrow-positions-matrix.png) | **Popover 12-Anchor Arrow Positions Matrix** | Matriks resmi 12 konfigurasi posisi panah penunjuk (*beak/arrow*) popover macOS Tahoe dari Apple Design Resources: 3 panah atas (Leading, Center, Trailing), 3 panah bawah, 3 panah kiri, dan 3 panah kanan menyatu mulus pada kontainer liquid glass. |
| **44** | [`44-apple-progress-indicators-bars-matrix.png`](./44-apple-progress-indicators-bars-matrix.png) | **Progress Indicators: Bars Matrix** | Matriks resmi indikator progres linear macOS Tahoe dari Apple Design Resources: Determinate vs Indeterminate bars dalam 2 skala ketebalan resmi (Regular 6px dan Small 3.5px) dengan animasi pulsa meluncur bergradasi lembut. |
| **45** | [`45-apple-search-field-interactive-states.png`](./45-apple-search-field-interactive-states.png) | **Search Field Interactive States** | Enam status interaktif kontrol pencarian macOS Tahoe: Resting/Empty, Focused dengan Apple Blue ring & caret biru di awal, Resting/Filled dengan tombol silang `(x)`, Hover, Focused dengan caret di akhir, dan Filled pasif. |
| **46** | [`46-apple-search-button-circular-states.png`](./46-apple-search-button-circular-states.png) | **Search Button Circular States** | Matriks status tombol pencarian lingkaran toolbar macOS Tahoe: Resting cakram putih, Focused dengan cincin biru, dan Disabled translucent. |
| **47** | [`47-apple-search-clear-buttons.png`](./47-apple-search-clear-buttons.png) | **Search Clear Buttons (xmark.circle.fill)** | Tombol hapus instan resmi Apple: lingkaran hitam pekat dengan simbol silang putih di tengahnya untuk pengosongan query seketika. |
| **48** | [`48-apple-search-field-sizes-and-states-matrix.png`](./48-apple-search-field-sizes-and-states-matrix.png) | **Search Field 5-Size & States Matrix** | Matriks lengkap 5 skala ukuran (Mini 20px, Small 24px, Regular 28px standar macOS, Large 34px, Extra Large 40px) di 6 status interaksi untuk efisiensi navigasi dan pencarian instan. |
| **49** | [`49-apple-segmented-controls-variants-and-counts-matrix.png`](./49-apple-segmented-controls-variants-and-counts-matrix.png) | **Segmented Controls Variants & Counts Matrix** | Matriks master kontrol bersegmen macOS Tahoe dari 2 hingga 8 segmen dalam 2 varian gaya resmi: Solid Apple Blue Accent (`#007AFF`) dan Neutral Frosted Capsule dengan pergeseran pill terangkat. |
| **50** | [`50-apple-segmented-control-interactive-states.png`](./50-apple-segmented-control-interactive-states.png) | **Segmented Control Interactive States** | Tiga status interaktif detail segmen kontrol: Resting/Default, Pressed/Active Click dengan kompresi mikro, dan Disabled/Translucent. |
| **51** | [`51-apple-scrollbars-vertical-thumbs-matrix.png`](./51-apple-scrollbars-vertical-thumbs-matrix.png) | **Vertical Scrollbars Thumbs Matrix** | Matriks resmi jempol gulir vertikal macOS Tahoe dari Apple Design Resources: Panjang (Long), Sedang (Medium), dan Minimum Pill di 3 posisi gulir (Awal, Tengah, Akhir) dengan model floating dynamic overlay. |
| **52** | [`52-apple-scrollbars-horizontal-thumbs-matrix.png`](./52-apple-scrollbars-horizontal-thumbs-matrix.png) | **Horizontal Scrollbars Thumbs Matrix** | Matriks resmi jempol gulir horizontal macOS Tahoe: variasi panjang proporsional dan posisi gulir horizontal berbalut kapsul membulat penuh (*pill-shape caps*). |
| **53** | [`53-apple-sheet-modal-container-geometry.png`](./53-apple-sheet-modal-container-geometry.png) | **Sheet Modal Container Geometry Canvas** | Kanvas geometri dasar kontainer Sheet Modal macOS Tahoe resmi dari Apple Design Resources: radius squircle 22px, hairline border 0.5px, dan bayangan atmosferik bawah dalam (deep shadow). |
| **54** | [`54-apple-sidebars-master-collection-matrix.png`](./54-apple-sidebars-master-collection-matrix.png) | **Sidebars Master Collection Matrix** | Master set komponen sidebar macOS Tahoe dari Apple Design Resources: 3 varian shell jendela lengkap (Traffic lights & toggle `[ |]`), collapsible section headers, gaya kapsul seleksi baris (Neutral vs Blue), dan pohon hierarki berjenjang (multi-level tree outline view). |
| **55** | [`55-apple-sliders-master-collection-matrix.png`](./55-apple-sliders-master-collection-matrix.png) | **Sliders Master Collection Matrix** | Master matriks kontrol penggeser (sliders) macOS Tahoe dari Apple Design Resources: Unidirectional Continuous (0% s.d. 100%), Centered Bi-directional (-50% s.d. +50%), varian bertangga (tick marks), dan anatomi cakram jempol (thumb knob 16px). |
| **56** | [`56-apple-steppers-standalone-and-integrated-matrix.png`](./56-apple-steppers-standalone-and-integrated-matrix.png) | **Steppers Standalone & Integrated Matrix** | Matriks kontrol stepper dua segmen vertikal (⌃/⌄) macOS Tahoe dari Apple Design Resources: varian Standalone vs Integrated Text Field di 4 status interaksi. |
| **57** | [`57-apple-steppers-states-overview.png`](./57-apple-steppers-states-overview.png) | **Steppers States Horizontal Overview** | Komparasi horisontal lengkap status interaktif stepper (Default, Top Pressed, Bottom Pressed, Disabled) pada kontrol mandiri dan input teks. |
| **58** | [`58-apple-text-field-interactive-states.png`](./58-apple-text-field-interactive-states.png) | **Text Field Interactive States** | Enam status interaktif kontrol input teks macOS Tahoe: Resting kosong (placeholder), Focused awal dengan Apple Blue ring & caret biru, Hover, Resting terisi teks (Filled), Focused terisi, dan Disabled pudar. |
| **59** | [`59-apple-text-field-square-cells-matrix.png`](./59-apple-text-field-square-cells-matrix.png) | **Text Field Square Cells Matrix (PIN & OTP)** | Matriks rounded square cells / PIN code input di 3 status untuk kode OTP verifikasi WhatsApp serah terima servis dan PIN otorisasi transaksi kasir. |
| **60** | [`60-apple-text-field-sizes-and-states-matrix.png`](./60-apple-text-field-sizes-and-states-matrix.png) | **Text Field 5-Size & States Matrix** | Matriks lengkap 5 skala ukuran (Mini 20px, Small 24px, Regular 28px standar form macOS, Large 34px, Extra Large 40px) di 6 status interaksi untuk efisiensi formulir administratif. |
| **61** | [`61-apple-toggles-checkboxes-states-matrix.png`](./61-apple-toggles-checkboxes-states-matrix.png) | **Toggles: Checkboxes States Matrix** | Matriks status kotak centang: Checked (`✓`), Mixed/Indeterminate (`-`), dan Unchecked di varian Solid Apple Blue `#007AFF`, Outline, Default, Pressed, dan Disabled pudar. |
| **62** | [`62-apple-toggles-radio-buttons-states-matrix.png`](./62-apple-toggles-radio-buttons-states-matrix.png) | **Toggles: Radio Buttons States Matrix** | Matriks status tombol radio: Selected (`◉` dengan inner dot 6px), Indeterminate (`-`), dan Unselected di varian Solid Blue, Outline, Default, Pressed, dan Disabled. |
| **63** | [`63-apple-toggles-switch-states-matrix.png`](./63-apple-toggles-switch-states-matrix.png) | **Toggles: Switch States Matrix** | Matriks sakelar switch lengkap di berbagai status (On, Off, Mixed `-`, Active, Pressed, Hover, Disabled, serta aksen Blue `#007AFF` dan System Green `#34C759`). |
| **64** | [`64-apple-toggles-switch-knobs-states.png`](./64-apple-toggles-switch-knobs-states.png) | **Toggles: Switch Knobs States** | Tiga status cakram jempol switch: cakram putih solid datar, berbayang mikro saat pressed/active, dan pudar saat disabled. |
| **65** | [`65-apple-toolbars-master-collection-matrix.png`](./65-apple-toolbars-master-collection-matrix.png) | **Toolbars Master Collection Matrix** | Master set komponen toolbar macOS Tahoe: Titlebar terpadu Traffic lights, action item groups (1 s.d. 8 tombol), segmented control view switchers, pill search fields, dan layout Monobar kompak. |
| **66** | [`66-apple-windows-traffic-lights-active-inactive-matrix.png`](./66-apple-windows-traffic-lights-active-inactive-matrix.png) | **Windows: Traffic Lights Active vs Inactive Matrix** | Matriks status tombol lampu kontrol jendela (Traffic Lights): status Active Window (Merah `#FF5F56`, Kuning `#FFBD2E`, Hijau `#27C93F`) vs status Inactive Window (abu-abu monokromatik netral `rgba(0, 0, 0, 0.20)`). |
| **67** | [`67-apple-windows-container-geometry-and-shadows.png`](./67-apple-windows-container-geometry-and-shadows.png) | **Windows: Container Geometry & Dual-Layer Shadows** | Kanvas geometri kontainer jendela macOS Tahoe: kurvatur squircle 18px, hairline border 1px, dan hierarki bayangan ganda melayang (*ambient diffusion* + *contact occlusion*). |
| **68** | [`68-apple-windows-traffic-lights-compact-matrix.png`](./68-apple-windows-traffic-lights-compact-matrix.png) | **Windows: Traffic Lights Compact Matrix** | Varian Traffic Lights untuk panel utilitas dan modal ringkas dengan diameter 12px dan jarak 8px. |
| **69** | [`69-apple-windows-complete-frame-anatomy.png`](./69-apple-windows-complete-frame-anatomy.png) | **Windows: Complete Frame Anatomy** | Anatomi utuh frame jendela macOS Tahoe: Traffic Lights di kiri atas, Document Proxy Icon `📁` bersama judul jendela `Title` di tengah, slot grup tombol aksi di kanan, hairline separator horizontal, dan kanvas konten putih melayang. |

---

## 2. Analisis Rinci Tiap Aset

### Ref 01 — Cover macOS Tahoe UI Kit
- **Tipografi**: `SF Pro Display`, Bold 700, warna putih `#FFFFFF` dengan bayangan lembut dan refleksi gradien cyan pada teks *"UI Kit"*.
- **Aksen Visual Latar Belakang**: Latar dinamis multi-layer gelombang sutra (*silk ribbon wave*) dengan transisi warna halus dari langit pagi mutiara ke biru laut Tahoe pekat. Cocok untuk inspirasi login screen admin, header branding, atau backdrop dashboard.

### Ref 02 — Getting Started (Apple Editorial Typography)
- **Hirarki Tipografi Resmi**:
  - `Display / H1`: `font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif; font-size: 38px; font-weight: 700; color: #000000; letter-spacing: -0.025em;`
  - `Lead / Notice`: `font-size: 16px; font-weight: 600; line-height: 1.45; color: #1D1D1F;`
  - `Body Text`: `font-size: 15px; font-weight: 400; line-height: 1.55; color: #1D1D1F;`
  - `Interactive Links`: `color: #007AFF; font-weight: 500; text-decoration: none; &:hover { text-decoration: underline; }`
  - `Muted / Footnote`: `font-size: 13px; color: #86868B;`
- **Prinsip Spasi Apple**:
  - Padding kontainer yang lega dan lapang.
  - Bebas dari garis pemisah kotak-kotak (*card clutter*), murni menggunakan kontras tipografi dan *whitespace* sebagai pemisah informasi.

### Ref 03 — Alert Modal (Side-by-side Buttons)
- **Komponen**: Dialog Konfirmasi / Peringatan Standar macOS (2 Tombol).
- **Anatomi Visual**:
  - **Dimensi & Bentuk**: Lebar ringkas `~280px - 320px`, sudut membulat elegan `border-radius: 20px`, padding internal `20px - 24px`.
  - **Material & Bayangan**: Mengambang di tengah layar dengan latar *frosted glass* mutakhir (`background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(40px) saturate(180%);`), garis batas mikro `1px solid rgba(255, 255, 255, 0.45)`, dan bayangan dalam `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28)`.
  - **Tipografi**:
    - Title: `14px - 15px Bold`, teks rata tengah (`text-align: center`), warna `#000000`.
    - Description: `12px Regular`, warna `#4D4D4D`, jarak baris `line-height: 1.4`.
  - **Tombol Pill (*Side-by-side*)**:
    - Tombol Kiri (Dismiss / Cancel): Kapsul abu-abu semi-transparan (`background: rgba(0, 0, 0, 0.06); color: #000000; border-radius: 9999px; font-weight: 500;`).
    - Tombol Kanan (Primary / Confirm): Kapsul Apple Blue solid (`background: #007AFF; color: #FFFFFF; border-radius: 9999px; font-weight: 600;`).
  - **Kegunaan di Backend MobiCare**: Modal konfirmasi cepat seperti "Hapus draft perubahan?", "Reset filter pencarian?", atau "Keluar tanpa menyimpan?".

### Ref 04 — Alert Modal (Stacked 3 Buttons)
- **Komponen**: Dialog Peringatan Keputusan Kompleks (3 Tombol Bertumpuk).
- **Anatomi Visual**:
  - Menggunakan modul card yang sama dengan Ref 03 namun menampung tiga baris tombol aksi vertikal.
  - **Hierarki Tombol Bertumpuk**:
    1. **Atas (Primary Action)**: `Save` / `Simpan` $\to$ Apple Blue solid (`#007AFF`), teks putih tebal.
    2. **Tengah (Destructive / Warning Action)**: `Don't Save` / `Jangan Simpan` $\to$ Warna aksen merah pudar Apple (`background: rgba(255, 59, 48, 0.12); color: #FF3B30; border-radius: 9999px; font-weight: 600;`).
    3. **Bawah (Cancel / Dismiss)**: `Cancel` / `Batal` $\to$ Abu-abu netral semi-transparan (`background: rgba(0, 0, 0, 0.05); color: #000000; border-radius: 9999px;`).
  - **Kegunaan di Backend MobiCare**: Modal perlindungan perubahan data: saat admin mengedit Pricelist atau Promo dan ingin berpindah halaman sebelum menyimpan, muncul dialog: *"Simpan perubahan pada iPhone 15 Pro Max?"* [Simpan] [Buang Perubahan (Merah)] [Batal].

### Ref 05 — Window Anatomy + Sheet Modal (Save As Dialog)
- **Komponen**: Struktur Jendela Utama macOS + Attached Modal Sheet.
- **Anatomi Window Utama**:
  - **Traffic Lights (Kiri Atas)**: 3 tombol lampu kontrol berdiameter 12px berjarak 8px:
    - Tutup (*Close*): Merah `#FF5F56` / `#FF736A`
    - Minimalkan (*Minimize*): Kuning `#FFBD2E` / `#FEBC2E`
    - Layar Penuh (*Zoom/Fullscreen*): Hijau `#27C93F` / `#19C332`
  - **Titlebar & Toolbar Terpadu**: Jalur breadcrumb lokasi folder, kolom pencarian rounded dengan ikon kaca pembesar, dan tombol segmentasi.
- **Anatomi Sheet Dialog**:
  - Muncul meluncur dari bawah titlebar jendela utama (*attached sheet*).
  - Kolom input nama file dengan border biru Apple menyala saat fokus (`border: 2px solid #007AFF; box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);`).
  - Pemilih tag warna dan dropdown folder tujuan (*Where*).
  - Pop-up Button format file dengan simbol panah ganda (⇅).
  - Baris aksi bawah: Tombol `Delete` merah di pojok kiri, tombol `Cancel` dan `Save` di pojok kanan.
  - **Kegunaan di Backend MobiCare**: Form tambah/edit item (seperti "Tambah Tipe HP Baru" atau "Tambah Promo Baru") yang muncul sebagai Sheet elegan dari atas tabel tanpa berpindah halaman (*in-context editing*).

### Ref 06 — Window Controls & Form Settings Rows
- **Komponen**: Tampilan Pengaturan / Formulir Sistem Dua Kolom (*Two-Pane Layout*).
- **Anatomi Visual**:
  - **Sidebar Navigasi Kiri (`width: ~220px - 260px`)**:
    - Item menu dengan ikon SF Symbols di kiri + teks nama kategori.
    - Item aktif berlatar rounded abu-abu lembut (`background: rgba(0, 0, 0, 0.08); border-radius: 6px; font-weight: 600;`).
  - **Form Controls di Panel Kanan**:
    - **Checkboxes**: Kotak rounded dengan tanda centang biru Apple saat aktif (`accent-color: #007AFF`).
    - **Combo Box / Pop-up Button**: Tombol dropdown dengan label pilihan aktif dan simbol panah ganda ⇅ di kanan.
    - **Numeric Stepper**: Kotak angka disertai tombol segmen panah atas/bawah untuk penyesuaian nilai diskon/urutan.
    - **Switch Toggle**: Toggle switch khas iOS/macOS (`background: #007AFF` saat aktif, knob lingkaran putih berbayang halus).
    - **Radio Buttons**: Lingkaran pilihan opsi tunggal dengan titik biru terisi di tengah.
    - **Section Grouping**: Label grup huruf kapital lembut dengan spasi vertikal presisi tanpa garis kotak berlebihan.
  - **Kegunaan di Backend MobiCare**: Halaman pengaturan sistem backend (`/admin/settings`), konfigurasi WhatsApp kontak servis, manajemen status cabang toko, dan toggle visibilitas promo.

### Ref 07 — Data Table / Finder Hierarchical List View
- **Komponen**: Tabel Data macOS Native (Finder-style List).
- **Anatomi Visual**:
  - **Header Kolom**:
    - Label kolom: `Name`, `Date Modified`, `Size`, `Kind`.
    - Indikator pengurutan (*Sort indicator*): Panah caret kecil (`^` atau `v`) yang menandakan kolom aktif pengurutan.
    - Garis pembatas kolom halus vertikal (`1px solid rgba(0, 0, 0, 0.06)`).
  - **Baris Data (Row Items)**:
    - Dukungan hirarki pohon data (*expandable tree* dengan panah disclosure `>` / `v`).
    - Ikon tipe file/perangkat di sebelah nama item.
    - **Seleksi Baris Aktif (*Active Selection*)**: Baris terpilih mendapat latar belakang penuh Apple Blue solid (`background: #007AFF; color: #FFFFFF; font-weight: 500;`).
    - Kerapatan Baris (*Data Density*): Tinggi baris kompak `26px - 30px`, memungkinkan puluhan baris data terlihat dalam satu layar tanpa scroll berlebih.
  - **Kegunaan di Backend MobiCare**: Komponen tabel master data paling krusial untuk `/admin/pricelist` (hirarki Brand $\to$ Model $\to$ Tipe Servis $\to$ Harga), `/admin/gallery` (daftar aset media, ukuran, tanggal upload), dan `/admin/promo`.

### Ref 08 — Menubar & Cascading Context Menus
- **Komponen**: Menubar Desktop Utama + Submenu Bertingkat (*Cascading Flyouts*) + Context Menu Klik Kanan.
- **Anatomi Visual**:
  - **Menubar Atas**:
    - Tinggi ramping `24px - 28px` membentang horizontal di puncak layar.
    - Material kaca transparan lembut (`backdrop-filter: blur(30px) saturate(180%); background: rgba(255, 255, 255, 0.45);`).
    - Sisi Kiri: Ikon  Apple, nama aplikasi aktif (`Finder`), dan menu navigasi (`File`, `Edit`, `View`, `Go`, `Window`, `Help`).
    - Sisi Kanan: Status tray icon (Wi-Fi, Spotlight search, Siri/Control Center, Profile/Battery, Jam digital & hari `Mon Jun 10 9:41 AM`).
  - **Dropdown & Cascading Flyout Menu**:
    - Lebar standar `~220px - 260px`, sudut membulat `border-radius: 8px - 10px`, bayangan drop shadow tajam dan lembut (`0 10px 30px rgba(0, 0, 0, 0.2)`).
    - Item menu dilengkapi ikon di sisi kiri dan label shortcut keyboard di sisi kanan (`⌘Z`, `⇧⌘Z`, `⌘X`, `⌘C`, `⌘V`, `⌘A`).
    - Item dengan panah `>` membuka menu pop-out tingkat dua (seperti `Find >` yang membuka flyout menu `Find...`, `Find and Replace...`, `Find Next`).
    - State Hover / Aktif: Baris disorot dengan latar belakang Apple Blue penuh (`#007AFF`) dan teks putih murni.
  - **Context Menu (Klik Kanan)**:
    - Panel menu melayang di kursor mouse dengan pemisah kategori section (`New Folder`, `Get Info`, `Clean Up By >`, dll.).
  - **Kegunaan di Backend MobiCare**:
    - Menubar atas dashboard admin: menampilkan jam kerja operasional bengkel, status koneksi database/server, spotlight quick search untuk mencari nomor invoice servis atau tipe HP secara instan, dan menu profil admin.
    - Context Menu klik kanan pada tabel: klik kanan pada baris harga HP untuk "Duplikat Harga", "Edit Cepat", atau "Nonaktifkan".

### Ref 09 & Ref 10 — Desktop View Scale & Composition (Modal Alerts in Situ)
- **Komponen**: Komposisi Utuh Ruang Desktop (Layar 16:10 / 1440px), Dock Transparan, Window Backdrop, dan Centered Alert Modal.
- **Anatomi Visual**:
  - **Perspektif Skala Penuh**: Memperlihatkan ukuran relatif modal alert (`~300px`) di tengah jendela aplikasi desktop yang membentang luas.
  - **macOS Dock di Bawah Layar**:
    - Bar aplikasi melayang di tengah bawah layar dengan latar frosted glass melengkung (`border-radius: 18px - 22px`).
    - Ikon-ikon aplikasi native dengan pantulan bayangan halus di latar belakang wallpaper Tahoe.
  - **Perbandingan Ref 09 vs Ref 10**:
    - `Ref 09`: Modal 2-tombol berdampingan (`[Label]` netral + `[Label]` Blue `#007AFF`) untuk dialog konfirmasi biner yang tidak merusak data.
    - `Ref 10`: Modal 3-tombol vertikal (`[Save]` Blue `#007AFF` + `[Don't Save]` soft red tint `rgba(255, 59, 48, 0.15)` teks `#FF3B30` + `[Cancel]` netral) sebagai penjaga protektif perubahan (*unsaved state guard*).
  - **Kegunaan di Backend MobiCare**:
    - Acuan skala visual viewport: Memastikan ukuran modal, padding, dan efek pengaburan jendela belakang (*backdrop glass blur*) memiliki proporsi yang akurat dan nyaman di mata saat admin bekerja di monitor laptop maupun desktop.

### Ref 11 — Advanced Window Sheet with Two-Pane File Browser
- **Komponen**: Attached Sheet Modal Tingkat Lanjut dengan File Navigator & Picker Dua Kolom.
- **Anatomi Visual**:
  - **Attached Top Anchor**: Bagian atas modal menempel langsung di bawah titlebar jendela utama folder, menciptakan kesan integrasi fisik yang mulus (*physical sheet pull-down*).
  - **Form Input Sheet Header**:
    - `Save As: [Untitled       ]` $\to$ Input teks dengan focus ring biru Apple menyala (`box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.25)`).
    - `Tags: [                 ]` $\to$ Input penanda tag kategori.
    - `File Format: [Rich Text Document ⇅]` $\to$ Dropdown format dengan simbol panah ganda khas macOS.
  - **Sub-Toolbar Navigasi**:
    - Tombol riwayat navigasi `< >`, Segmented View Switcher (Icon View, List View, Column View), dropdown path (`Desktop ⇅`), dan kolom pencarian lokal dengan ikon search.
  - **Two-Pane File Browser**:
    - Panel Kiri (Sidebar Direktori): Bagian `Favorites` (`Desktop`, `Documents`, `Downloads`), `Locations` (`iCloud Drive`, hard drive), dan `Tags`.
    - Panel Kanan (Tabel Berkas): Daftar file dalam bentuk tabel hierarkis (`Name`, kolom atribut, tanggal).
  - **Action Footer**:
    - Sisi Kiri: Tombol aksi sekunder `[New Document]` dan `[Show Options]`.
    - Sisi Kanan: Tombol pembatalan `[Cancel]` dan tombol aksi utama `[Save]` (Apple Blue `#007AFF`).
  - **Kegunaan di Backend MobiCare**:
    - Media Asset Manager di `/admin/gallery`: Sangat ideal saat admin mengunggah atau memilih gambar bukti servis/sparepart; admin dapat menavigasi folder kategori gambar di panel kiri dan melihat preview berkas di panel kanan sebelum menyematkannya ke konten galeri atau promo.

### Ref 12 — Split Window with Sidebar Toggle & Toolbar Action Group
- **Komponen**: Jendela Standar macOS dengan Sidebar Navigasi Collapsible & Toolbar Tindakan Lengkap.
- **Anatomi Visual**:
  - **Sidebar Header**: Traffic Lights (merah, kuning, hijau) dipadukan dengan tombol Sidebar Toggle `[ |]` di ujung kanan kolom sidebar.
  - **Sidebar Navigasi**: Item menu folder (`Folder 1` s.d. `Folder 5`) dengan kapsul seleksi aktif abu-abu rounded (`rgba(0, 0, 0, 0.08)`), ditambah Section Header yang dapat dilipat (*collapsible*) berindikator chevron `v` untuk kategori `Folder 6` & `Folder 7`.
  - **Main Toolbar Kanan**:
    - Tombol riwayat `< >` dalam segmented pill control.
    - Judul jalur/halaman aktif tebal `Folder 2`.
    - **Action Group Icons**: Kumpulan tombol aksi cepat terpadu (New Folder, Trash/Hapus, Archive/Arsip, Tag Kategori, dan Compose/Tulis Baru).
    - **Pill Search Bar**: Kolom pencarian rounded dengan ikon loop kaca pembesar.
  - **Kegunaan di Backend MobiCare**: Struktur dasar layout dashboard admin (`/admin/layout`) yang mendukung penyembunyian sidebar saat butuh fokus dan menyediakan tombol aksi massal di toolbar.

### Ref 13 — Monobar (Unified Compact Header)
- **Komponen**: Varian Jendela Monobar macOS (Header Terpadu Satu Baris Kompak).
- **Anatomi Visual**:
  - Menggabungkan titlebar dan toolbar ke dalam satu baris horizontal tanpa garis batas vertikal pemisah sidebar (*borderless unified monobar*).
  - Traffic lights langsung berjejer dengan judul jendela `Folder 2`, riwayat navigasi `< >`, action group icons, dan search field di baris yang sama.
  - Menghemat ruang vertikal secara drastis (*vertical space optimization*).
  - **Kegunaan di Backend MobiCare**: Mode ringkas (*compact mode*) saat admin membuka tabel data master dengan ratusan baris di `/admin/pricelist`.

### Ref 14 — Compact Utility Panel / Inspector Window
- **Komponen**: Panel Utilitas Kompak / Floating Quick Inspector.
- **Anatomi Visual**:
  - Ukuran jendela melayang ringkas `~360px x 320px` di tengah layar.
  - Titlebar minimalis: Traffic Lights di kiri, judul tengah `📁 Title`.
  - Utility Segmented Bar: 5 tombol segmen fungsi utilitas berjejer rapi di bawah titlebar.
  - Area kerja bersih dan terisolasi.
  - **Kegunaan di Backend MobiCare**: Panel Quick Look / Inspector saat admin menekan tombol `Spacebar` pada baris tabel harga untuk melihat rincian breakdown kalkulasi harga servis (biaya sparepart, estimasi pengerjaan, garansi) tanpa harus membuka formulir penuh.

### Ref 15 — macOS Native Push Notification Banners (Sonner Toast)
- **Komponen**: Banner Notifikasi Sistem Bertumpuk (*Stacked Push Notifications / Toasts*).
- **Anatomi Visual**:
  - **Posisi Layar**: Melayang anggun di pojok kanan atas desktop (`top: ~36px; right: 16px;`), sejajar tepat di bawah jam menubar.
  - **Material & Bentuk**: Kapsul melayang rounded (`width: ~340px - 360px`, `border-radius: 16px - 18px`), material frosted glass mutakhir (`background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(40px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);`).
  - **Struktur Konten**:
    - Kiri: App icon persegi membulat (MobiCare emblem).
    - Tengah: Judul tebal `Notification Title` (13px/14px Bold) dan deskripsi `Notification description lorem ipsum dolor sit amet.` (12px Regular).
    - Kanan Atas: Timestamp relatif `now` berwarna muted (#8E8E93).
  - **Interaksi Stacked**: Notifikasi baru meluncur mulus dari kanan atas, notifikasi sebelumnya bergeser ke bawah dengan animasi pegas (*fluid spring animation*).
  - **Kegunaan di Backend MobiCare**: Sistem toast feedback real-time (menggunakan library Sonner yang ditransformasikan dengan CSS macOS Tahoe): memberi konfirmasi *"Harga iPhone 15 Pro berhasil diperbarui"*, *"Aset gambar galeri berhasil diunggah"*, *"Sinkronisasi data selesai"*.

### Ref 16 — Apple Design Resources: Accents, Fills, Text & Vibrancy Matrix
- **Komponen**: Matriks Token Desain Resmi Apple — 13 Accents, 5 Tingkat Fills, dan 6 Tingkat Text Hierarchy.
- **Anatomi Visual**:
  - **13 System Accents (Solid & Vibrant)**:
    - Palet: `Red`, `Orange`, `Yellow`, `Green`, `Mint`, `Teal`, `Cyan`, `Blue`, `Indigo`, `Purple`, `Pink`, `Brown`, `Gray`.
    - Menampilkan adaptasi visual dua sisi: separuh atas di atas permukaan terang (*Light Mode*), separuh bawah di atas kisi gelap (*Dark Mode*).
    - Baris **Accents - Vibrant**: Versi translusen berpadu dengan efek material kaca (vibrancy filter) yang membiarkan cahaya latar belakang tembus tanpa menghilangkan intensitas warna aksen.
  - **5 Tingkat Fills**:
    - `Primary Fill` (latar input aktif/pill solid), `Secondary Fill` (latar kontrol sekunder), `Tertiary Fill` (latar track progress bar), `Quaternary Fill` (garis pemisah kolom), `Quinary Fill` (arsir halus).
    - Varian **Fills - Vibrant**: Isian yang beradaptasi secara fisik terhadap wallpaper desktop di baliknya.
  - **6 Tingkat Text Hierarchy (A Symbols)**:
    - `Primary A` (100% / 88% kontras tinggi untuk judul/data).
    - `Secondary A` (55% kontras sedang untuk label/deskripsi).
    - `Tertiary A` (28% untuk placeholder input dan status non-aktif).
    - `Quaternary A` (15% untuk nomor urut dan watermark).
    - `Quinary A` & `Senary A` (untuk garis aksen tipis).
    - Varian **Text - Vibrant**: Tipografi dengan filter vibrancy Apple yang menjamin huruf tetap terbaca kontras tinggi di atas material kaca bergradien.
  - **Kegunaan di Backend MobiCare**: Acuan definitif untuk seluruh token CSS warna aksen, warna teks bertingkat, dan isian kontainer di dashboard admin.

### Ref 17 — Liquid Glass Materials & Thickness Hierarchy
- **Komponen**: Sistem Material Kaca macOS (Liquid Glass) & Skala Komponen Antarmuka.
- **Anatomi Visual**:
  - **Skala Komponen UI (Small, Medium, Large UI)**:
    - **Small UI Dynamic**: Kapsul tombol kecil, toggle switch, pill filter (`border-radius: 9999px`). Diperlihatkan dalam varian kaca netral dan varian aksen (Blue, Orange, Red, Green).
    - **Medium UI**: Kartu ringkasan data, dialog popover, card modal alert (`border-radius: ~14px - 16px`).
    - **Large UI**: Jendela kerja penuh, Sheet dialog terpadu, sidebar lebar (`border-radius: ~20px - 24px`).
  - **5 Tingkat Ketebalan Material (Thickness Hierarchy)**:
    1. **UltraThick**: Translusensi sangat rendah (~95% opak), blur intensif. Digunakan untuk modal penuh atau backdrop penutup yang membutuhkan isolasi konten mutlak.
    2. **Thick**: Standar jendela kerja utama (jendela Finder/Settings).
    3. **Medium**: Toolbars, floating cards, dialog sheet yang menempel di bawah titlebar.
    4. **Thin**: Popover menu, dropdown menu, context menu klik kanan.
    5. **UltraThin**: Sangat tembus pandang (~35% opak), menubar transparan atas, floating dock bawah, dan sorotan baris aktif.
  - Diuji secara nyata di atas dua wallpaper resmi: **Tahoe Daylight** (biru muda cerah) dan **Tahoe Night** (biru tua pekat) membuktikan ketahanan keterbacaan materi di kedua suasana.
  - **Kegunaan di Backend MobiCare**: Arsitektur styling `backdrop-filter` dan opasitas untuk seluruh tingkatan jendela, card, sidebar, dan popover di `/admin`.

### Ref 18 — Alert Components & Button Variations (Apple Design Resources)
- **Komponen**: Matriks Lengkap Komponen Dialog Peringatan (*Alerts*) & Variasi Tombol Pill Apple.
- **Anatomi Visual**:
  - **Alert 3-Tombol Vertikal (*Stacked Alert*)**:
    - Lebar modal ringkas `~300px - 320px`, sudut rounded `border-radius: 20px`, padding `24px 20px 20px`.
    - Judul tebal 15px *"Save this message as a draft?"*, deskripsi muted 12px *"This message has not been sent and contains unsaved changes..."*.
    - Tiga baris tombol vertikal (gap 8px):
      1. Atas: `[Save]` solid Apple Blue (`#007AFF`).
      2. Tengah: `[Don't Save]` soft red tint (`rgba(255, 59, 48, 0.15)`) dengan teks `#FF3B30`.
      3. Bawah: `[Cancel]` netral gray pill (`rgba(0, 0, 0, 0.08)`).
  - **Alert 2-Tombol Berdampingan (*Side-by-side Alert*)**:
    - Tata letak biner: Sisi kiri (*leading*) tombol `[Cancel]` netral, sisi kanan (*trailing*) tombol utama `[Save]` / `[Action]` Apple Blue.
  - **Variasi Tombol Pill Mandiri**:
    - Tiga kapsul kontrol: Primary Blue, Secondary Neutral Gray, dan Destructive Red Tint, masing-masing dengan tinggi 34px dan `border-radius: 9999px`.
  - **Kegunaan di Backend MobiCare**: Standar mutlak untuk modal konfirmasi hapus data dan dialog penjaga perubahan (*unsaved changes blocker*).

---

## 3. Rencana Penerapan ke Backend Admin MobiCare

| Area / Halaman Admin | Referensi Utama | Komponen macOS yang Diterapkan |
| :--- | :--- | :--- |
| **Menubar Topbar (`/admin/layout`)** | Ref 08 | Menubar transparan 28px di atas layar: logo  / MobiCare, jam operasional, spotlight quick search invoice/HP, dan status koneksi server. |
| **Layout Shell Utama (`/admin/layout`)** | Ref 12 & Ref 13 | macOS Window Wrapper dengan Traffic Lights di pojok kiri atas, Sidebar toggle `[ |]`, Action Group Toolbar (tambah, hapus massal, tag), dan dukungan mode Monobar terpadu. |
| **Toast Feedback & Notifikasi** | Ref 15 | macOS Native Stacked Notification Banners di pojok kanan atas (Sonner) dengan frosted glass capsule, icon aplikasi, dan animasi spring. |
| **Login Screen (`/admin/login`)** | Ref 01 & Ref 09 | Background ambient Tahoe ribbon wave + Card Frosted Glass mengambang di tengah layar dengan input rounded dan tombol kapsul Apple Blue. |
| **Daftar Master Data (`/admin/pricelist`, `/admin/gallery`, `/admin/promo`)** | Ref 07 | Finder-style Data Table dengan kolom sortable, baris seleksi aktif Apple Blue `#007AFF`, expandable tree view untuk kategori brand/model, dan high data density. |
| **Context Actions (Klik Kanan Baris)** | Ref 08 | Context Menu klik kanan untuk aksi cepat pada baris data (Edit, Duplikat, Nonaktifkan, Hapus). |
| **Quick Inspector / Detail Cepat** | Ref 14 | Floating Compact Utility Panel (Quick Look) saat menekan Spacebar pada baris data untuk melihat breakdown harga / info garansi cepat. |
| **Form Tambah / Edit Standar** | Ref 05 & Ref 06 | Attached Sheet Modal yang turun halus dari toolbar window dengan form controls macOS native (Switch toggle, Stepper, Pop-up dropdown panah ganda, Checkbox biru). |
| **Media & Asset Selector (`/admin/gallery`)** | Ref 11 | Advanced Two-Pane Sheet Modal: navigasi folder kategori di sidebar kiri + tabel/grid file gambar di kanan dengan format picker WebP/PNG. |
| **Konfirmasi Hapus / Unsaved Guard** | Ref 03, Ref 04, Ref 10 | Alert Modals 2-tombol (Side-by-side) atau 3-tombol (Stacked Save/Don't Save/Cancel) dengan frosted glass card dan tombol pill. |

---

## 4. Sistem Warna Apple HIG (*Judicious Use of Color*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Color](https://developer.apple.com/design/human-interface-guidelines/color):
> *"Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information."*

Spesifikasi lengkap, token CSS, rasio kontras WCAG, dan pemetaan palet Light & Dark Mode didokumentasikan secara mandiri di:
👉 **[`COLOR_SYSTEM.md`](./COLOR_SYSTEM.md)**

### Prinsip Eksekusi Inti:
1. **Restraint & Meaning**: Sebagian besar antarmuka admin menggunakan kanvas netral (`#F5F5F7` / `#FFFFFF` / material kaca). Warna aksen (`#007AFF`) hanya diaplikasikan pada tindakan interaktif primer dan status seleksi baris aktif, bukan untuk hiasan.
2. **Never Color Alone**: Status peringatan dan error selalu memadukan warna + bentuk kapsul + ikon simbol + teks deskriptif untuk menjamin aksesibilitas penuh.
3. **Destructive Restraint**: Tombol hapus dan tindakan kritis tidak menggunakan warna merah solid pekat yang menyilaukan, melainkan *soft red tint* (`rgba(255, 59, 48, 0.12)`) dengan teks merah Apple (`#FF3B30`), menjaga ketenangan antarmuka.
4. **Dynamic Depth**: Hierarki tipografi memanfaatkan skala opasitas Apple (`labelColor` 88%, `secondaryLabel` 55%, `tertiaryLabel` 28%) sehingga informasi bertingkat dapat dipindai seketika.

---

## 5. Sistem Tipografi Apple HIG (*macOS Specifications*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Typography](https://developer.apple.com/design/human-interface-guidelines/typography):
> *"Apple provides two typeface families that support an extensive range of weights, sizes, styles, and languages: San Francisco and New York... The system defines a set of typographic attributes — called text styles — that work with both typeface families."*

Spesifikasi lengkap ukuran poin, bobot, leading, optical tracking, dan kelas utilitas CSS didokumentasikan secara mandiri di:
👉 **[`TYPOGRAPHY_SYSTEM.md`](./TYPOGRAPHY_SYSTEM.md)**

### Standar Tipografi macOS di Backend MobiCare:
1. **Standar Body 13pt**: Semua baris data tabel dan teks paragraf admin berukuran `13px` / `0.8125rem` (bukan 14/16px standar web), menghadirkan densitas informasi khas macOS Finder.
2. **Keterbacaan Minimum 10pt**: Batas teks terkecil untuk catatan kaki dan timestamp adalah `10px` (Caption 2 `9px` hanya untuk badge shortcut `⌘Z`).
3. **Tabular Numbers (`tnum`)**: Seluruh nilai harga servis (misal: `Rp 1.450.000`) dan counter kuantitas wajib menggunakan `font-variant-numeric: tabular-nums` agar sejajar lurus secara vertikal.
4. **Optical Letter-Spacing**: Judul besar menggunakan tracking rapat negatif (`-0.014em` s.d. `-0.018em`), sedangkan teks kecil menggunakan tracking renggang positif (`+0.012em` s.d. `+0.016em`).

---

## 6. Sistem Alert & Dialog Apple HIG (*Alerts & Modals*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts):
> *"An alert gives people critical information they need right away."*

Spesifikasi lengkap tata letak tombol, teks aksi kerja (*action-oriented verbs*), interaksi keyboard (`Enter`/`Escape`), dan implementasi CSS/React didokumentasikan secara mandiri di:
👉 **[`ALERTS_SYSTEM.md`](./ALERTS_SYSTEM.md)**

### Standar Alerts macOS di Backend MobiCare:
1. **Critical Information Only**: Alert hanya digunakan untuk mengonfirmasi tindakan berisiko (menghapus data harga/promo) atau menahan perubahan yang belum disimpan saat berpindah halaman. Untuk info pasif, gunakan Notification Toast (Ref 15).
2. **Button Hierarchy**:
   - Varian 2-tombol: Kiri (*Leading*) `Cancel` netral, Kanan (*Trailing*) tindakan utama Apple Blue.
   - Varian 3-tombol: Atas (*Top*) `Save` Apple Blue, Tengah (*Middle*) `Don't Save` soft red tint, Bawah (*Bottom*) `Cancel` netral.
3. **Kata Kerja Langsung**: Menghindari kata "OK", "Yes", atau "No". Wajib menggunakan kata kerja tegas: *"Simpan"*, *"Jangan Simpan"*, *"Hapus"*, *"Batal"*.
4. **Keyboard Accessibility**: `Return`/`Enter` memicu tindakan utama, `Escape` memicu pembatalan tanpa mutasi data.

---

## 7. Sistem Pengelompokan Apple HIG (*Boxes & GroupBox*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Boxes](http://developer.apple.com/design/human-interface-guidelines/boxes):
> *"A box creates a visually distinct group of logically related information and components."*

Spesifikasi resmi SVG Apple (`rx="12"` dengan isian `fill="black" fill-opacity="0.03"`), aturan anti-nesting, dan implementasi CSS/React didokumentasikan secara mandiri di:
👉 **[`BOXES_SYSTEM.md`](./BOXES_SYSTEM.md)**

### Standar Boxes macOS di Backend MobiCare:
1. **Subtle Separation**: Pengelompokan field form menggunakan radius `12px` (`--mac-radius-box`) dan latar transparan ultra-halus (`rgba(0, 0, 0, 0.03)` Light / `rgba(255, 255, 255, 0.04)` Dark), bukan border tebal atau bayangan berat.
2. **Anti Box-ception (No Nested Boxes)**: Dilarang meletakkan box di dalam box. Pembagian sub-grup diatur menggunakan spasi (*whitespace*), garis pemisah tipis (`separatorColor`), dan tipografi.
3. **Ukuran Terkontrol**: Box berukuran proporsional mengelompokkan 3–6 baris kontrol logis, tidak membentang selebar satu layar penuh.

---

## 8. Sistem Tombol & Kontrol Aksi Apple HIG (*Buttons & Steppers*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons):
> *"A button initiates an instantaneous action."*

Spesifikasi lengkap hierarki tombol (*Primary, Default, Colored, Secondary, Destructive, Borderless*), tombol stepper lingkaran 5-ukuran, dan implementasi CSS didokumentasikan secara mandiri di:
👉 **[`BUTTONS_SYSTEM.md`](./BUTTONS_SYSTEM.md)**

### Standar Tombol macOS di Backend MobiCare:
1. **Primary Prominence**: Hanya ada satu tombol Primary solid Apple Blue (`#007AFF`) per tampilan atau formulir (misal: *"Simpan Perubahan"* atau *"Tambah Layanan"*).
2. **Instant Feedback**: Respons klik seketika pada peristiwa `pointer-down` dengan efek tekan mikro `scale(0.97)` dan perubahan opasitas latar belakang.
3. **Destructive Restraint**: Tombol hapus/reset menggunakan *soft red tint* (`rgba(255, 59, 48, 0.12)`) dengan teks `#FF3B30` agar tidak menimbulkan kecemasan visual namun tetap tegas.
4. **Circular Steppers (⇅)**: Tombol lingkaran 5 ukuran (Mini 18px s.d. XL 40px) untuk navigasi pagination, pengatur urutan baris, dan dropdown selector.

---

## 9. Sistem Color Well Apple HIG (*Color Wells & Pickers*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Color Wells](http://developer.apple.com/design/human-interface-guidelines/color-wells):
> *"A color well lets people adjust the color of text, shapes, guides, and other onscreen elements."*

Spesifikasi lengkap anatomi roda spektrum kerucut (*conical gradient spectrum wheel*), status aktif konsentris, dan implementasi CSS/React didokumentasikan secara mandiri di:
👉 **[`COLOR_WELLS_SYSTEM.md`](./COLOR_WELLS_SYSTEM.md)**

### Standar Color Wells macOS di Backend MobiCare:
1. **Dua Status Visual (Ref 23)**:
   - Status Default: Cakram spektrum pelangi kerucut (`conic-gradient`) 26px.
   - Status Active/Selected: Cincin luar spektrum pelangi tipis + cincin pemisah putih murni 2px + lingkaran tengah berisi warna yang sedang aktif terpilih.
2. **Kustomisasi Badge Promo & Tag Layanan**:
   - Color Well digunakan pada formulir tambah/edit promo di `/admin/promo` untuk memilih warna latar badge penawaran spesial secara interaktif.
   - Digunakan di `/admin/pricelist` untuk menetapkan kode warna kategori servis (LCD, Baterai, Mesin).
3. **Immediate Feedback**: Pemilihan warna baru langsung memutakhirkan warna lingkaran dalam dan badge preview seketika.

---

## 10. Sistem Combo Box Apple HIG (*Combo Boxes & Dual Inputs*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Combo Boxes](https://developer.apple.com/design/human-interface-guidelines/combo-boxes):
> *"A combo box combines a text field with a pull-down button in a single control."*

Spesifikasi lengkap anatomi kontrol, 4 status interaksi (Default, Focused dengan Focus Ring biru, Pressed dengan menu terbuka, Disabled), matriks 5 skala ukuran, dan implementasi CSS didokumentasikan secara mandiri di:
👉 **[`COMBO_BOXES_SYSTEM.md`](./COMBO_BOXES_SYSTEM.md)**

### Standar Combo Box macOS di Backend MobiCare:
1. **Fleksibilitas Ganda (Input Bebas vs Opsi Siap Pakai)**:
   - Admin dapat memilih opsi populer yang sudah ada ATAU mengetikkan nilai baru secara bebas tanpa dipaksa memilih dari daftar kaku.
   - Nilai kustom yang diketik tidak mengubah atau mengotori daftar opsi standar sistem.
2. **Eksklusif macOS Desktop Native**: Kontrol ini adalah ciri khas desktop AppKit (`NSComboBox`) yang dioptimalkan untuk entri data cepat dan alur kerja administratif berdensitas tinggi.
3. **Penerapan Nyata di Admin MobiCare**:
   - Pemilihan **Model Perangkat** di `/admin/pricelist` (pilih seri populer atau ketik tipe khusus).
   - Penentuan **Durasi Garansi** di `/admin/garansi` (pilih preset 30/90/180 hari atau ketik durasi kustom).
   - Filter cepat di toolbar tabel data `AdminDataTable`.

---

## 11. Sistem Save Dialog Apple HIG (*Save Dialogs & File Management*)

Sesuai arahan resmi [Apple Human Interface Guidelines — File Management](https://developer.apple.com/design/human-interface-guidelines/file-management):
> *"Provide a save interface to let people change a file’s name, format, or location. By default, a new document’s title is 'Untitled' until people choose a custom name."*

Spesifikasi perbandingan varian kompak vs penuh, isolasi tombol destruktif `Delete` di kiri bawah (*leading edge*), alur pencegahan kehilangan data (*unsaved changes blocker*), dan implementasi CSS didokumentasikan secara mandiri di:
👉 **[`SAVE_DIALOGS_SYSTEM.md`](./SAVE_DIALOGS_SYSTEM.md)**

### Standar Save Dialog macOS di Backend MobiCare:
1. **Window-Attached Sheet Modal**: Save dialog melekat tepat di bawah titlebar jendela utama dengan transisi slide-down halus, bukan mengambang bebas tanpa jangkar.
2. **Pemisahan Spasial Tombol Destruktif**:
   - Tombol **`Delete` / `Buang Perubahan`** diletakkan sendiri di pojok kiri bawah menggunakan *soft red tint* (`rgba(255, 59, 48, 0.12)`, teks `#FF3B30`).
   - Tombol aman **`Cancel`** dan **`Save`** (Primary Blue `#007AFF`) diletakkan di sisi kanan bawah.
3. **Penerapan Nyata di Admin MobiCare**:
   - Lembar ekspor data katalog dan laporan backup (`ExportModal.tsx`).
   - Dialog pelindung perubahan belum disimpan (*Unsaved Changes Guard*) ketika admin mencoba keluar dari halaman editor tanpa menekan simpan.

---

## 12. Sistem Disclosure Controls Apple HIG (*Disclosure Triangles & Buttons*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Disclosure Controls](https://developer.apple.com/design/human-interface-guidelines/disclosure-controls):
> *"Disclosure controls reveal and hide information and functionality related to specific controls or views."*

Spesifikasi perbedaan Disclosure Triangle (`▶` / `▼`) vs Disclosure Button (`⌄` / `⌃`), aturan ketat satu tombol per view, dan implementasi CSS didokumentasikan secara mandiri di:
👉 **[`DISCLOSURE_CONTROLS_SYSTEM.md`](./DISCLOSURE_CONTROLS_SYSTEM.md)**

### Standar Disclosure Controls macOS di Backend MobiCare:
1. **Progressive Disclosure**: Sembunyikan detail lanjutan sampai benar-benar relevan untuk menjaga antarmuka tetap bersih dan fokus.
2. **Orientasi Panah yang Konsisten**:
   - **Disclosure Triangle**: Menghadap ke kanan (`▶`) saat tertutup, dan menghadap ke bawah (`▼`) saat terbuka (untuk pohon kategori sparepart).
   - **Disclosure Button**: Menghadap ke bawah (`⌄`) saat tertutup, dan menghadap ke atas (`⌃`) saat terbuka (untuk ekspansi panel formulir).
3. **Maksimal Satu Tombol per View**: Tidak menumpuk banyak tombol pengungkapan dalam satu panel dialog.
4. **Penerapan Nyata di Admin MobiCare**:
   - Pohon kategori perangkat & suku cadang di `/admin/pricelist`.
   - Tombol ekspansi rincian kalkulasi harga (*cost breakdown*).
   - Tombol ekspansi pemilihan lokasi pada sheet ekspor dokumen (`ExportModal.tsx`).

---

## 13. Sistem Formulir & Pengaturan Apple HIG (*Forms & Settings Controls*)

Sesuai standar resmi Apple Human Interface Guidelines dan macOS Tahoe Design Resources untuk formulir administratif:
> *"Forms and settings create visually distinct groups of logically related information and interactive controls, allowing people to efficiently view, configure, and modify parameters."*

Spesifikasi lengkap kartu grup formulir (`.mac-box`), ekosistem kontrol (Checkboxes, Radio Groups, Numeric Stepper `[ 3.00 ] ⇅`, Pop-Up Menus, Toggle Switches), dan deretan squircle badge ikon 13 warna sistem Apple didokumentasikan secara mandiri di:
👉 **[`FORMS_SYSTEM.md`](./FORMS_SYSTEM.md)**

### Standar Formulir macOS di Backend MobiCare:
1. **Pengelompokan Kartu 12px**: Formulir dibagi dalam kartu logis 3–5 baris kontrol (`.mac-box`) dengan latar transparan halus, bukan deretan input membentang panjang tanpa jeda.
2. **Kesesuaian Semantik Kontrol**:
   - Pilihan majemuk memakai **Checkboxes (`☑`)**.
   - Pilihan tunggal eksklusif memakai **Radio Buttons (`◉`)**.
   - Pengaktifan fitur instan memakai **Toggle Switches** hijau Apple (`#34C759`).
   - Penyesuaian angka kuota/waktu memakai **Numeric Stepper ⇅** dengan angka tabular.
3. **Leading Icon Squircle 28px**: Penanda visual kiri berwarna sistem Apple terkalibrasi (*systemRed, systemGreen, systemBlue, systemPurple, dll.*) untuk identifikasi instan kategori formulir.

---

## 14. Sistem Image Well Apple HIG (*Image Wells & Media Droppers*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Image Wells](https://developer.apple.com/design/human-interface-guidelines/image-wells):
> *"An image well is an editable version of an image view. After selecting an image well, people can copy and paste its image or delete it. People can also drag a new image into an image well without selecting it first."*

Spesifikasi lengkap kontrol seret-lepas (*drag-and-drop*), dukungan clipboard (`⌘C`, `⌘V`, `⌫`), status normal vs disabled, serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`IMAGE_WELLS_SYSTEM.md`](./IMAGE_WELLS_SYSTEM.md)**

### Standar Image Well macOS di Backend MobiCare:
1. **Drag-and-Drop & Clipboard Native**: Admin dapat langsung menyeret file foto dari Finder atau menempel gambar screenshot (`⌘V`) tanpa harus melalui dialog file input biasa.
2. **Revert to Default**: Jika gambar dihapus (`⌫`), kontrol secara otomatis kembali menampilkan gambar placeholder default sistem.
3. **Penerapan Nyata di Admin MobiCare**:
   - Dokumentasi foto hasil perbaikan Before & After di `/admin/gallery` (`GalleryEditor.tsx`).
   - Upload poster banner promo di `/admin/promo` (`PromoEditor.tsx`).
   - Foto referensi suku cadang di `/admin/pricelist` (`ServiceEditor.tsx`).

---

## 15. Sistem Lists & Tables Apple HIG (*Tables, Outlines & Selection States*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables):
> *"Lists and tables present data in one or more columns of rows. A table or list can represent data that’s organized in groups or hierarchies, and it can support user interactions like selecting, adding, deleting, and reordering."*

Spesifikasi lengkap status seleksi aktif (Solid Apple Blue `#007AFF`) vs inaktif jendela (Netral Gray `#D1D1D6`), tampilan pohon berjenjang (*Outline View*), gaya seleksi persegi vs kapsul pill, serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`LISTS_AND_TABLES_SYSTEM.md`](./LISTS_AND_TABLES_SYSTEM.md)**

### Standar Tabel & Daftar macOS di Backend MobiCare:
1. **Window-Aware Selection Feedback**:
   - Saat jendela aktif, baris tabel terpilih disorot dengan warna **Solid Apple Blue (`#007AFF`)** dan teks putih murni.
   - Saat jendela kehilangan fokus (aplikasi latar belakang), seleksi baris secara dinamis beralih ke warna **Abu-abu Netral (`rgba(0, 0, 0, 0.12)` / `#D1D1D6`)**.
2. **Sortable Multicolumn Headers**: Header kolom dengan teks Title-style nouns, dapat diklik untuk pengurutan dua arah (*sort ascending / descending*), dan resizable.
3. **Kewajiban Tabular Figures (`tnum`)**: Kolom numerik harga dan stok wajib menggunakan keselarasan angka vertikal (`font-variant-numeric: tabular-nums`).
4. **Pill vs Rectangular**: Tabel data menggunakan radius persegi `5px–6px`, sedangkan navigasi sidebar `AdminNav.tsx` menggunakan kapsul pill `radius: 9999px`.

---

## 16. Sistem Menu Bar Apple HIG (*The Menu Bar & Menu Bar Extras*)

Sesuai arahan resmi [Apple Human Interface Guidelines — The menu bar](https://developer.apple.com/design/human-interface-guidelines/the-menu-bar):
> *"On a Mac or an iPad, the menu bar at the top of the screen displays the top-level menus in your app or game. Mac users rely on it to learn what an app does and find the commands they need."*

Spesifikasi lengkap bilah menu 28px terpadu, hierarki menu standar sistem (*Apple Logo , App Name, File, Edit, View, Window, Help*), status interaktif kapsul pill (*hover/open states*), indikator status (*Menu Bar Extras*), serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`MENU_BAR_SYSTEM.md`](./MENU_BAR_SYSTEM.md)**

### Standar Menu Bar macOS di Backend MobiCare:
1. **Bilah Menu 28px Frosted Glass**: Membentang penuh di bagian paling atas desktop dengan efek *backdrop-filter blur 20px* transparan halus.
2. **Hierarki Menu Standar Apple**:
   - ``: Menu sistem cepat (Info MobiCare, Kunci Layar, Log Out).
   - **MobiCare**: Menu aplikasi utama bertebal font 700 (*About, Preferences/Settings ⌘,*).
   - Menu aksi: `File`, `Edit`, `View`, `Katalog`, `Promo`, `Window`, `Help`.
3. **Menu Bar Extras (Sisi Kanan)**: Menampilkan status sync database cloud, tombol pencarian cepat Spotlight (`⌘K`), profil admin aktif, dan jam digital real-time (`WITA`).
4. **Status Kapsul Pill**: Hover dan item aktif menu membuka flyout menu berlatar kapsul oval abu-abu halus.

---

## 17. Sistem Menus Apple HIG (*Flyout & Context Menus*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Menus](https://developer.apple.com/design/human-interface-guidelines/menus):
> *"A menu reveals its options when people interact with it, making it a space-efficient way to present commands in your app or game. Prefer listing important or frequently used menu items first."*

Spesifikasi lengkap anatomi menu popover, status seleksi Solid Apple Blue `#007AFF`, toggle checkmark `✓`, garis pemisah (*separators*), pintasan keyboard (`⌃`, `⌥`, `⇧`, `⌘`), serta skala lebar dan aturan truncation didokumentasikan secara mandiri di:
👉 **[`MENUS_SYSTEM.md`](./MENUS_SYSTEM.md)**

### Standar Menu Flyout macOS di Backend MobiCare:
1. **Prioritas Teratas**: Perintah penting dan paling sering dipakai diletakkan di bagian paling atas grup menu.
2. **Pengelompokan dengan Separator**: Garis pemisah 1px membagi kelompok perintah yang berbeda secara logis (misal: Edit vs Ekspor vs Hapus).
3. **Larangan Menghilangkan Menu Inaktif**: Item menu yang tidak dapat dijalankan wajib tetap ditampilkan dalam status **Disabled** (`opacity: 0.38`), dilarang disembunyikan agar memori spasial pengguna tetap konsisten.
4. **Penerapan Nyata di Admin MobiCare**:
   - Context menu klik kanan baris servis di `PriceGrid.tsx` (Edit `⌘E`, Duplikasi `⌘D`, Hapus `⌫`).
   - Dropdown menu bilah atas (File, Katalog, Tampilan, Bantuan).
   - Menu aksi cepat foto di `GalleryEditor.tsx` (Quick Look `Space`, Hapus `⌫`).

---

## 18. Sistem Notifikasi Apple HIG (*Notifications & Toast Banners*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Notifications](https://developer.apple.com/design/human-interface-guidelines/notifications):
> *"A notification gives people timely, high-value information they can understand at a glance. Provide concise, informative notifications. People turn on notifications to get quick updates, so you want to provide valuable information succinctly."*

Spesifikasi anatomi banner kapsul frosted glass beradius 18px, penempatan non-blocking di pojok kanan atas desktop, perbedaannya dengan modal Alert, serta integrasi feedback Sonner/Toast didokumentasikan secara mandiri di:
👉 **[`NOTIFICATIONS_SYSTEM.md`](./NOTIFICATIONS_SYSTEM.md)**

### Standar Notifikasi macOS di Backend MobiCare:
1. **Non-Blocking Asynchronous Feedback**: Berbeda dengan Alert Modal (yang menuntut klik konfirmasi sebelum lanjut), banner notifikasi meluncur dari kanan atas dan menghilang otomatis (*auto-dismiss*) tanpa menghentikan pekerjaan admin.
2. **Kapsul Frosted Liquid Glass 18px**: Menggunakan blur latar 40px, bayangan atmosferik dalam, app icon squircle 36px di kiri, teks aksi tebal, dan timestamp relatif `now`.
3. **Penerapan Nyata di Admin MobiCare**:
   - Notifikasi sukses simpan katalog servis di `PriceGrid.tsx`.
   - Notifikasi selesai unduh ekspor file Excel/CSV di `ExportModal.tsx`.
   - Notifikasi promo aktif di `PromoEditor.tsx`.
   - Feedback error non-kritis (misal ukuran upload gambar melebihi kuota).

---

## 19. Sistem Pointing Devices & Kursor Apple HIG (*Pointing Devices & Cursors*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices):
> *"People can use a pointing device like a trackpad or mouse to navigate the interface and initiate actions. People appreciate the precision and flexibility that pointing devices offer."*

Katalog lengkap kursor sistem macOS (`NSCursor`), pemetaan properti CSS kursor, seleksi majemuk dengan tombol pengubah keyboard (`Shift`, `Command ⌘`), serta implementasi resize kolom didokumentasikan secara mandiri di:
👉 **[`POINTING_DEVICES_SYSTEM.md`](./POINTING_DEVICES_SYSTEM.md)**

### Standar Pointing Devices macOS di Backend MobiCare:
1. **Konsistensi Semantik Kursor**: Bentuk kursor mencerminkan aksi yang tersedia (Pointer Hand untuk tombol, I-Beam untuk teks, `col-resize` untuk batas kolom tabel, `grab`/`grabbing` untuk seret foto galeri).
2. **Kombinasi Keyboard + Mouse**: Dukungan penuh `⌘ + Click` (toggle item seleksi multi-baris) dan `⇧ + Click` (seleksi rentang baris kontinu) di tabel data `PriceGrid.tsx`.
3. **Resizing Kolom Presisi**: Penyesuaian lebar kolom tabel katalog secara real-time via kursor `col-resize`.

---

## 20. Sistem Pop-Up vs Pull-Down Buttons Apple HIG (*Pop-Up & Pull-Down Buttons*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Pop-up buttons & Pull-down buttons](https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons):
> *"A pop-up button displays a menu of mutually exclusive options. A pull-down button displays a menu of items or actions that directly relate to the button’s purpose."*

Spesifikasi pembedaan visual (panah ganda `⇅` vs panah tunggal `⌄`), perilaku pemutakhiran judul tombol, matriks 5 skala ukuran, serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`POPUP_AND_PULLDOWN_BUTTONS_SYSTEM.md`](./POPUP_AND_PULLDOWN_BUTTONS_SYSTEM.md)**

### Standar Pop-Up vs Pull-Down di Backend MobiCare:
1. **Pop-Up Button (`⇅`)**: Digunakan untuk **pemilihan nilai status tunggal** (Kategori Servis `LCD Original ⇅`, Format Ekspor `Excel (.xlsx) ⇅`). Judul tombol langsung berubah mengikuti nilai aktif dan item di menu memiliki centang `✓`.
2. **Pull-Down Button (`⌄`)**: Digunakan untuk **memicu daftar tindakan atau filter** (Tombol `Tindakan ⌄`, `Urutkan Berdasarkan ⌄`). Judul tombol tetap konstan dan menu berisi perintah aksi.
3. **Penerapan Nyata di Admin MobiCare**:
   - Pemilihan kategori perangkat & tipe part di `ServiceEditor.tsx`.
   - Tombol `Tindakan ⌄` untuk operasi massal tabel di `PriceGrid.tsx`.
   - Pemilihan format file di `ExportModal.tsx`.

---

## 21. Sistem Popover Apple HIG (*Popovers & 12-Anchor Positions*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers):
> *"A popover is a transient view that appears above other content when people click or tap a control or interactive area."*

Spesifikasi matriks 12 posisi panah penunjuk (*beak/arrow*), perilaku transien (*light dismiss*), geometri material kaca cair (*liquid glass medium*), pencegahan nesting popover, serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`POPOVERS_SYSTEM.md`](./POPOVERS_SYSTEM.md)**

### Standar Popover macOS di Backend MobiCare:
1. **Panah Penunjuk Terintegrasi (*Beak/Arrow*)**: Popover menunjuk langsung ke elemen tombol/kontrol pemicu dengan 12 variasi posisi resmi Apple (3 atas, 3 bawah, 3 kiri, 3 kanan).
2. **Perilaku Transien Ringan (*Light Dismiss*)**: Popover menutup instan saat pengguna mengeklik di luar area popover atau menekan tombol `Escape`. Dilarang menampilkan popover di dalam popover (*no nested popovers*).
3. **Penerapan Nyata di Admin MobiCare**:
   - `CustomerQuickCard.tsx`: Kartu info cepat profil pelanggan & riwayat servis saat nama diklik di tabel.
   - `PriceFilterPopover.tsx`: Popover filter multi-slider rentang harga pada header tabel `PriceGrid.tsx`.
   - `DateRangePopover.tsx`: Pemilih kalender mini rentang tanggal pada ringkasan omset dashboard.
   - `MarginCalculatorPopover.tsx`: Kalkulator markup margin keuntungan instan pada input harga modal sparepart.

---

## 22. Sistem Progress Indicators Apple HIG (*Progress Indicators & Linear Bars*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Progress indicators](https://developer.apple.com/design/human-interface-guidelines/progress-indicators):
> *"Progress indicators let people know that your app isn’t stalled while it loads content or performs lengthy operations."*

Spesifikasi matriks Determinate (terukur 0%-100%) vs Indeterminate (tak terukur dengan pulsa meluncur), skala ketebalan Regular (6px) vs Small (3.5px), activity spinner, serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`PROGRESS_INDICATORS_SYSTEM.md`](./PROGRESS_INDICATORS_SYSTEM.md)**

### Standar Progress Indicator macOS di Backend MobiCare:
1. **Pembedaan Determinate vs Indeterminate**: Determinate digunakan saat jumlah data atau durasi terukur (ekspor file Excel di `ExportModal.tsx`, upload gambar di `ImageWell.tsx`); Indeterminate digunakan saat durasi tak terprediksi (loading filter tabel di Monobar, inisialisasi sinkronisasi worker).
2. **Dua Skala Ketebalan**: Regular 6px untuk modal dialog dan lembar form; Small 3.5px untuk monobar, sel tabel, dan statusbar.
3. **Penerapan Nyata di Admin MobiCare**:
   - `ExportModal.tsx`: Determinate Regular Bar (6px) saat mengekspor database pricelist ke Excel `.xlsx`.
   - `ImageWell.tsx`: Determinate Small Bar (3.5px) di bawah foto saat upload foto galeri/promo.
   - `PriceGrid.tsx`: Indeterminate Small Bar (3.5px) di bawah Monobar saat filter query dieksekusi.
   - `AdminButton.tsx`: Inline Activity Spinner (14px) saat mutasi data POST sedang berlangsung.

---

## 23. Sistem Search Fields Apple HIG (*Search Fields & Searching*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Search fields & Searching](https://developer.apple.com/design/human-interface-guidelines/search-fields):
> *"A search field lets people search a collection of content for specific terms they enter."*

Spesifikasi matriks 5 skala ukuran (Mini 20px s.d. XL 40px), 6 status interaksi (fokus cincin biru & caret biru), tombol hapus instan `(x)`, tombol aksi lingkaran, serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`SEARCH_FIELDS_SYSTEM.md`](./SEARCH_FIELDS_SYSTEM.md)**

### Standar Search Field macOS di Backend MobiCare:
1. **Pill-shaped Container & Cincin Fokus Biru**: Kapsul melengkung penuh `9999px` dengan efek glow cincin biru Apple `0 0 0 3px rgba(0, 122, 255, 0.4)` dan caret biru `#007AFF`.
2. **Pencarian Instan & Tombol Clear `(x)`**: Menyaring tabel data secara real-time saat diketik (*debounce 200ms*). Tombol silang `(x)` mengosongkan pencarian seketika tanpa kehilangan fokus.
3. **Penerapan Nyata di Admin MobiCare**:
   - `PriceGrid.tsx`: Search field Regular (28px) di kanan Monobar untuk pencarian instan nama model HP dan suku cadang.
   - `AdminSpotlight.tsx`: Search field Extra Large (40px) untuk pencarian universal `⌘K` lintas nota, pelanggan, dan menu.
   - `GalleryEditor.tsx`: Search field Small (24px) untuk memfilter album Before & After.
   - `ServiceEditor.tsx`: Search field Mini (20px) di dalam dropdown modal SKU.

---

## 24. Sistem Segmented Controls Apple HIG (*Segmented Controls*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Segmented controls](https://developer.apple.com/design/human-interface-guidelines/segmented-controls):
> *"A segmented control is a linear set of two or more segments, each of which functions as a button. Use a segmented control to provide closely related choices that affect an object, state, or view."*

Spesifikasi matriks 2 varian gaya (Solid Blue Accent vs Neutral Frosted Capsule), rentang 2 hingga 8 segmen, 3 status interaksi, 3 mode pemilihan (*Select One, Select Any, Momentary*), serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`SEGMENTED_CONTROLS_SYSTEM.md`](./SEGMENTED_CONTROLS_SYSTEM.md)**

### Standar Segmented Controls macOS di Backend MobiCare:
1. **Dua Gaya Visual Fungsional**:
   - **Neutral Frosted Capsule**: Segmen aktif berupa kapsul putih terangkat (*raised card pill*) dengan drop shadow lembut, ideal untuk **View Switcher** (Tabel vs Grid vs Ringkas) dan skala waktu chart.
   - **Solid Blue Accent (`#007AFF`)**: Segmen aktif solid biru Apple dengan teks putih, ideal untuk **Filter Kategori Utama** (Semua, iPhone, iPad, Mac) dan status tiket garansi.
2. **Lebar Segmen Seragam (*Equal Widths*)**: Setiap segmen memiliki lebar proporsional yang sama dan tidak mencampur teks serta ikon dalam satu kontrol.
3. **Penerapan Nyata di Admin MobiCare**:
   - `PriceGrid.tsx`: Neutral Style 3 Segmen untuk View Switcher `[ ≡ Tabel | ⊞ Grid Kartu | ▤ Ringkas ]`.
   - `PriceGrid.tsx`: Blue Accent 4 Segmen untuk Filter Kategori `[ Semua | iPhone | iPad | MacBook ]`.
   - `Dashboard.tsx`: Neutral Style 3 Segmen untuk Rentang Waktu `[ Hari Ini | 7 Hari Terakhir | Bulan Ini ]`.
   - `WarrantyClaim.tsx`: Blue Accent 4 Segmen untuk Status Tiket `[ Menunggu | Disetujui | Servis | Selesai ]`.
   - `Monobar.tsx`: Momentary 2 Segmen untuk Navigasi Riwayat `[ ‹ Kembali | Maju › ]`.

---

## 25. Sistem Scrollbars Apple HIG (*Scrollbars & Scroll Views*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Scroll views & Scrollbars](https://developer.apple.com/design/human-interface-guidelines/scroll-views):
> *"Scroll views themselves have no inherent appearance, but they display translucent scroll indicators that typically appear after a user begins scrolling. All scroll indicators provide visual feedback about the scrolling action, showing whether the currently visible content is near the beginning, middle, or end of the view."*

Spesifikasi matriks jempol gulir vertikal dan horizontal (panjang proporsional dan batas minimum), perilaku melayang non-intrusif (*floating overlay*), transisi pelebaran interaktif (*6px resting $\to$ 10px hover/drag*), efek elastis (*rubber-banding*), serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`SCROLLBARS_SYSTEM.md`](./SCROLLBARS_SYSTEM.md)**

### Standar Scrollbars macOS di Backend MobiCare:
1. **Floating Dynamic Overlay**: Scrollbar melayang di atas konten tanpa memotong lebar layout atau memicu *layout shift*. Lintasan (*track*) transparan murni tanpa background abu-abu pekat.
2. **Dua Ketebalan Interaktif**: Tebal `6px` saat diam/bergulir biasa, melebar anggun menjadi `10px` saat kursor mendekat atau menyeret jempol gulir.
3. **Penerapan Nyata di Admin MobiCare**:
   - `PriceGrid.tsx`: Tabel katalog data dengan scroll vertikal & horizontal melayang mulus 6px.
   - `AdminNav.tsx` / `Sidebar`: Scrollbar ramping transparan auto-hide pada daftar menu navigasi.
   - `GalleryEditor.tsx`: Strip gulir horizontal untuk thumbnail foto Before & After.
   - `ExportModal.tsx`: Pratinjau data di dalam dialog modal sheet.

---

## 26. Sistem Sheets Apple HIG (*Sheets & Modal Presentation*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets):
> *"A sheet helps people perform a scoped task that’s closely related to their current context. A sheet appears as a card that partially covers the underlying content, often dimming the parent view to maintain context while keeping users focused on the task."*

Spesifikasi kanvas geometri kontainer squircle 22px, material kaca cair tebal (*heavy liquid glass*), elevasi bayangan dalam, modalitas tertaut jendela (*window-modal*), serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`SHEETS_SYSTEM.md`](./SHEETS_SYSTEM.md)**

### Standar Sheets macOS di Backend MobiCare:
1. **Window-Modal Tertaut**: Sheet meluncur dan menempel pada jendela induk tanpa memblokir seluruh aplikasi. Jendela induk diredupkan lembut (*dimming backdrop* `rgba(0, 0, 0, 0.22)`).
2. **Pemisahan Spasial Tombol Aksi**: Tombol destruktif (*Hapus*) di kiri bawah (`#FF3B30`), tombol `Batal` dan tombol utama `Simpan` (`#007AFF`) di kanan bawah.
3. **Penerapan Nyata di Admin MobiCare**:
   - `ServiceEditorSheet.tsx`: Form tambah & edit suku cadang di `/admin/pricelist`.
   - `ExportModal.tsx`: Dialog ekspor data katalog ke Excel/CSV.
   - `PromoEditorSheet.tsx`: Form pembuatan promo baru di `/admin/promo`.
   - `WarrantyClaimSheet.tsx`: Verifikasi klaim garansi di `/admin/garansi`.

---

## 27. Sistem Sidebars Apple HIG (*Sidebars & Outline Views*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars):
> *"A sidebar appears on the leading side of a view and lets people navigate between sections in your app or game. A sidebar can help people understand your app's structure and quickly access key areas."*

Spesifikasi master set sidebar macOS Tahoe (shell jendela dengan Traffic Lights & toggle `[ |]`, seksi pengelompokan collapsible, kapsul seleksi baris 6px, tampilan pohon berjenjang), serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`SIDEBARS_SYSTEM.md`](./SIDEBARS_SYSTEM.md)**

### Standar Sidebars macOS di Backend MobiCare:
1. **Shell Navigasi Kiri 240px**: Berbalut kaca translusen Liquid Glass UltraThin (`blur(30px)`), pemisah vertikal hairline 0.5px, serta tombol Traffic Lights dan Toggle `[ |]` di kiri atas.
2. **Kapsul Seleksi Baris 6px & Pohon Berjenjang**: Item aktif berbalut kapsul membulat netral atau aksen biru dengan indentasi pohon bertingkat (*indented tree levels*) untuk katalog model HP dan sparepart.
3. **Penerapan Nyata di Admin MobiCare**:
   - `AdminSidebar.tsx`: Navigasi utama backend admin MobiCare memuat Seksi Ringkasan (Dashboard, Faktur, Garansi), Seksi Katalog Suku Cadang (dengan tree view per model HP), Seksi Media (Galeri & Promo), dan Pengaturan Toko.

---

## 28. Sistem Sliders Apple HIG (*Sliders & Value Steppers*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Sliders](https://developer.apple.com/design/human-interface-guidelines/sliders):
> *"A slider is a horizontal track with a control, called a thumb, that people can adjust between a minimum and maximum value. A slider lets people make fine adjustments to a value, such as volume, brightness, or percentage."*

Spesifikasi master matriks 3 arsitektur kontrol (Searah Kontinu, Dua Arah Berpusat di Tengah, dan Diskrit dengan Tick Marks), anatomi jempol cakram 16px, umpan balik angka instan, serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`SLIDERS_SYSTEM.md`](./SLIDERS_SYSTEM.md)**

### Standar Sliders macOS di Backend MobiCare:
1. **Tiga Arsitektur Kontrol**:
   - **Searah Kontinu (*Unidirectional*)**: Isian biru solid Apple `#007AFF` di kiri jempol (0% s.d. 80%), untuk pengaturan margin keuntungan sparepart.
   - **Dua Arah Berpusat (*Bi-directional Centered*)**: Titik nol di tengah dengan isian ke kiri/kanan (-30% s.d. +30%), untuk penyesuaian diskon promo fleksibel.
   - **Diskrit Berjenjang (*Step Tick Marks*)**: Mengunci pada titik penanda diskrit (30, 90, 180, 365 hari) untuk durasi garansi servis.
2. **Umpan Balik Real-time & Pasangan Input Numerik**: Nilai diperbarui langsung saat seret (*live onInput*) dan selalu didampingi field angka tabular (`tabular-nums`) untuk pengetikan presisi.
3. **Penerapan Nyata di Admin MobiCare**:
   - `MarginCalculatorPopover.tsx`: Slider persentase markup keuntungan modal suku cadang.
   - `PriceFilterPopover.tsx`: Dual-thumb range slider untuk menyaring rentang harga katalog.
   - `PromoAdjustmentSlider.tsx`: Slider dua arah penyesuaian promo hari libur.
   - `WarrantySelector.tsx`: Slider diskrit penentuan durasi garansi servis.

---

## 29. Sistem Steppers Apple HIG (*Steppers & Numeric Controls*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Steppers](https://developer.apple.com/design/human-interface-guidelines/steppers):
> *"A stepper is a two-segment control that people use to increase or decrease an incremental value. A stepper is most effective when people need to make small changes to an incremental value. Because a stepper doesn’t display a value, make sure people always know which value it affects."*

Spesifikasi Standalone Stepper vs Integrated Stepper Text Field, 4 status interaktif segmen (*Resting, Top Pressed, Bottom Pressed, Disabled*), akselerasi *click-and-hold*, pintasan produktivitas `Shift + Click` ($10\times$ magnitudo), serta implementasi CSS didokumentasikan secara mandiri di:
👉 **[`STEPPERS_SYSTEM.md`](./STEPPERS_SYSTEM.md)**

### Standar Steppers macOS di Backend MobiCare:
1. **Dua Bentuk Penyajian**:
   - **Integrated Stepper Text Field (`[ 3.00 ] ⌃⌄`)**: Format utama entri data formulir (kuantitas stok, estimasi menit servis, persentase markup), memadukan pengetikan angka manual dengan klik bertahap.
   - **Standalone Stepper**: Tombol dua segmen terpisah di samping label angka modal.
2. **Fitur Produktivitas Tinggi Khas macOS**:
   - *Continuous Stepping on Hold*: Angka terus bertambah/berkurang dengan akselerasi halus saat tombol ditahan.
   - *Shift-Click for 10x Magnitude*: Menahan tombol `Shift` saat klik melipatgandakan besaran nilai langkah menjadi $10\times$ lipat.
   - *Pintasan Keyboard Panah `↑` / `↓`*: Menyesuaikan nilai secara instan saat kursor aktif di dalam input.
3. **Penerapan Nyata di Admin MobiCare**:
   - `InventoryStock.tsx`: Input stok suku cadang `[ 15 ] ⌃⌄ Unit` (step 1 unit, Shift-click 10 unit).
   - `ServiceEditor.tsx`: Input estimasi waktu servis `[ 45 ] ⌃⌄ Menit` (step 5 menit, Shift-click 15 menit).
   - `MarginCalculatorPopover.tsx`: Input margin keuntungan `[ 25.0 ] ⌃⌄ %` (step 0.5%, Shift-click 5.0%).
   - `PromoEditor.tsx`: Input persentase diskon promo `[ 10 ] ⌃⌄ %`.

---

## 30. Sistem Text Fields Apple HIG (*Text Fields & PIN Inputs*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Text Fields](https://developer.apple.com/design/human-interface-guidelines/text-fields):
> *"A text field is a rectangular area in which people enter or edit small, specific pieces of text. Use a text field to accept a small amount of text, such as a name, an address, or a search term. If you need to accept a large amount of text, use a text view instead."*

Spesifikasi 6 status interaktif field (*Resting, Focused, Hover, Resting Filled, Focused Filled, Disabled*), matriks 5 skala ukuran resmi macOS (*Mini, Small, Regular 28px, Large, Extra Large*), varian **Square Cells / PIN & OTP Matrix**, penanganan cincin fokus solid Apple Blue (`#007AFF`), teks bantu (*placeholder*), penataan label (*leading vs stacked*), dan implementasi CSS/React didokumentasikan secara mandiri di:
👉 **[`TEXT_FIELDS_SYSTEM.md`](./TEXT_FIELDS_SYSTEM.md)**

### Standar Text Fields macOS di Backend MobiCare:
1. **Ukuran Form Default 28px (Regular)**: Seluruh input pada modal, sheet, dan dialog pengaturan menggunakan ketinggian standar `28px` dengan border radius `6px`.
2. **Cincin Fokus Solid Apple Blue**: Saat field aktif atau dijelajahi dengan keyboard, pancarkan cincin fokus solid Apple Blue `0 0 0 3px rgba(0, 122, 255, 0.40)` dan ubah warna caret kursor menjadi `#007AFF` (*zero-layout-shift*).
3. **Square Cells untuk Otorisasi Kasir & OTP**: Menggunakan sel bujur sangkar `40px × 40px` beradius `8px` dengan mekanisme lompatan otomatis (*auto-advance*) saat digit diinput.
4. **Penerapan Nyata di Admin MobiCare**:
   - Form pendaftaran servis baru: Nama pelanggan, nomor WhatsApp, seri IMEI.
   - Editor master harga (`/admin/pricelist`): Input harga suku cadang ber-prefix `Rp` dan angka tabular monospaced.
   - Modal otorisasi kasir: Input PIN 6-digit untuk void nota atau persetujuan diskon khusus.
   - Filter cepat tabel: Input pencarian mini berukuran `24px` (Small).

---

## 31. Sistem Toggles Apple HIG (*Switches, Checkboxes & Radio Buttons*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles):
> *"A toggle lets people choose between a pair of opposing states, like on and off, using a different appearance to indicate each state."*

Spesifikasi 3 bentuk kontrol biner (Switch `38px × 22px`, Checkbox squircle dengan 3 status: Checked `✓`, Unchecked, dan Indeterminate `-`, serta Radio Buttons lingkaran `◉` untuk pilihan eksklusif), status interaktif, umpan balik pegas dinamis (*fluid spring animation*), dan implementasi CSS/React didokumentasikan secara mandiri di:
👉 **[`TOGGLES_SYSTEM.md`](./TOGGLES_SYSTEM.md)**

### Standar Toggles macOS di Backend MobiCare:
1. **Switch untuk Efek Langsung (*Immediate Action*)**: Toggle status toko buka/tutup cabang Bali dan visibilitas tayang banner promo langsung memutakhirkan state database tanpa perlu menekan tombol simpan terpisah.
2. **Checkbox Tiga Status pada Tabel Data**: Checkbox header tabel mendukung status *Mixed / Indeterminate* (`-`) saat sebagian baris terpilih, dan berubah menjadi *Checked* (`✓`) untuk seleksi massal seluruh inventaris.
3. **Radio Buttons Eksklusif**: Pemilihan metode pembayaran transaksi kasir (QRIS, Transfer, Tunai) dan jenis cakupan garansi servis (90 Hari, 180 Hari, Lifetime).

---

## 32. Sistem Toolbars Apple HIG (*Toolbars & Monobars*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars):
> *"A toolbar provides convenient access to frequently used commands, controls, navigation, and search. A toolbar appears at the top of a window, below or integrated with the title bar, and contains controls that relate to the current view or document."*

Spesifikasi arsitektur **Unified Monobar 42px** (penggabungan titlebar & toolbar tanpa pemisah), integrasi Traffic Lights, Document Proxy Icon & judul jendela, kelompok aksi (*action groups*), Segmented View Switchers, integrasi pill search bar dengan cincin fokus biru, flexible spacer, serta implementasi CSS/React didokumentasikan secara mandiri di:
👉 **[`TOOLBARS_SYSTEM.md`](./TOOLBARS_SYSTEM.md)**

### Standar Toolbars macOS di Backend MobiCare:
1. **Unified Monobar 42px di `/admin/pricelist`**: Menghilangkan header berjenjang yang memakan tempat vertikal, menyatukan Traffic Lights, Sidebar Toggle `[ |]`, judul katalog, filter segmen kategori, kolom pencarian cepat, dan tombol `+ Tambah Servis` ke dalam satu baris kaca cair Liquid Glass translusen (`blur(30px)`).
2. **Flexible Spacing**: Menjaga navigasi jendela di sisi kiri dan tombol aksi/pencarian berlabuh rapi di sisi kanan dengan *flexible spacer* (`flex-grow: 1`).
3. **Umpan Balik Taktil Responsif**: Tombol-tombol aksi di toolbar memberikan micro-press feedback (`transform: scale(0.97)`) saat diklik.

---

## 33. Sistem Windows Apple HIG (*Windows & Window Controls*)

Sesuai arahan resmi [Apple Human Interface Guidelines — Windows](https://developer.apple.com/design/human-interface-guidelines/windows):
> *"A window presents UI views and components in your app or game. A window provides an enclosed area within which an app presents its content, controls, and other interface components. Windows can be minimized, resized, moved, and layered to help people organize their workspaces."*

Spesifikasi kurvatur kontainer squircle 18px, hierarki bayangan ganda melayang (*dual-layer elevation drop shadow*), perilaku sadar status jendela (*Active Key Window vs Inactive Window*), kontrol Traffic Lights (Merah `#FF5F56`, Kuning `#FFBD2E`, Hijau `#27C93F` dan hover glyphs `✕`, `—`, `⤢`), Document Proxy Icon, serta implementasi CSS/React didokumentasikan secara mandiri di:
👉 **[`WINDOWS_SYSTEM.md`](./WINDOWS_SYSTEM.md)**

### Standar Windows macOS di Backend MobiCare:
1. **Frame Utama Shell Admin (`18px Squircle`)**: Shell admin berbalut kontainer rounded squircle 18px dengan bayangan atmosferik dalam (`0 30px 90px rgba(0, 0, 0, 0.28)`) dan border hairline 1px.
2. **Traffic Lights Sadar Status (*State-Aware Controls*)**: Tombol lampu merah, kuning, dan hijau di kiri atas otomatis meredup menjadi abu-abu monokromatik saat jendela browser kehilangan fokus (*window blur*), dan memunculkan glif aksi saat kursor melintas di atasnya.
3. **Penerapan Nyata di Admin MobiCare**:
   - `app/admin/layout.tsx`: Frame jendela utama dashboard dengan titlebar terintegrasi.
   - `components/admin/ItemInspector.tsx`: Panel jendela utilitas melayang 380px untuk inspeksi rincian suku cadang.
   - `components/admin/ConfirmModal.tsx`: Alert window terisolasi untuk konfirmasi kritis.























