# Laporan Singkat Web Portofolio (index.html & style.css)

## 1. Selector yang Dipakai & Lokasinya
| Jenis Selector | Contoh | Lokasi di style.css |
|---|---|---|
| Element | `*`, `body`, `h1, h2, h3`, `img`, `a`, `ul` | Bagian "RESET & BOX MODEL DASAR" |
| Class | `.btn`, `.skill-card`, `.project-card`, `.contact__form` | Tersebar di semua bagian (Hero, Keahlian, Proyek, Kontak) |
| Id | `#navbar` | Bagian "NAVBAR" — dipakai untuk perilaku unik (sticky + bayangan saat scroll) yang hanya berlaku untuk satu elemen ini |
| Descendant | `.navbar__nav a`, `.skill-card h3`, `.contact__form input, .contact__form textarea` | Bagian "NAVBAR" dan "KONTAK" |
| Group | `h1, h2, h3 { ... }`, `.thumb--one, .thumb--two, .thumb--three { ... }` | Bagian "RESET" dan "PORTOFOLIO" |

## 2. Format Warna yang Dipakai & Lokasinya
| Format | Variabel / Contoh | Lokasi |
|---|---|---|
| HEX | `--color-bg: #FBF8F4`, `--color-ink: #33302C`, `--color-sage: #A9C2B0` | Bagian `:root` (Design Tokens) |
| HSL | `--color-bg-alt: hsl(35, 45%, 95%)`, `--color-sage-dark: hsl(150, 18%, 42%)`, `--color-clay: hsl(24, 40%, 82%)` | Bagian `:root` |
| RGB | `--color-text: rgb(70, 65, 60)` | Bagian `:root` |
| RGBA | `--color-rose: rgba(214, 160, 165, 0.9)`, bayangan kartu `rgba(51, 48, 44, 0.1)` | Bagian `:root` dan efek hover `.skill-card`, `.project-card` |
| Named Color | `white`, `gainsboro` | Dipakai langsung pada `border`, `background-color` di `#navbar`, `.stat-card`, `.skill-card`, `.project-card`, `.contact__form` |

## 3. Penerapan Background
1. **`.hero`** — menggunakan `background-image: linear-gradient(...)` sebagai transisi warna latar yang lembut.
2. **`.skills`** — menggunakan `background-image` berupa pola titik SVG (data URI), dilengkapi `background-repeat: repeat`, `background-position: center`, dan `background-size: 24px 24px`, sesuai ketentuan tugas.
3. **`.footer`**, **`#navbar`** — menggunakan `background-color` solid sebagai elemen background tambahan.

## 4. Box Model
- **box-sizing**: dipilih **`border-box`** dan diterapkan secara global (`*`).
  **Alasan:** dengan `border-box`, padding dan border ikut dihitung ke dalam lebar/tinggi yang sudah ditentukan, sehingga ukuran kartu (`.skill-card`, `.project-card`), tombol (`.btn`), dan grid tetap presisi walau ditambah padding atau border — jauh lebih mudah dikontrol saat menyesuaikan layout untuk berbagai ukuran layar (responsif), dibanding `content-box` yang membuat elemen membengkak melebihi ukuran yang direncanakan.
- **Padding & margin**: konsisten menggunakan skala spasi (`--space-1` s.d. `--space-6`) yang didefinisikan di `:root`, dipakai berulang di seluruh section agar jarak antar elemen selaras.
- **Border** diterapkan pada lebih dari 2 elemen, contoh: `#navbar` (border-bottom), `.btn--ghost`, `.stat-card`, `.skill-card`, `.project-card`, `.contact__form`.
- **Border-radius** diterapkan pada lebih dari 2 elemen, contoh: `.btn` (tombol), `.project-card` (kartu proyek), `.stat-card`, `.contact__form`, `.footer__top` (tombol bulat).
- **Outline** diterapkan pada elemen interaktif saat `:hover`/`:focus-visible`, contoh: `.navbar__nav a`, `.btn:focus-visible`, `.contact__form input:focus`, `.footer__socials a:hover`.
