# 🍣 HASHA Sushi & Grill — Website

Premium luxury Japanese restaurant website untuk **HASHA SUSHI & GRILL**, Yogyakarta.

---

## ✨ Tech Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animasi ringan & elegan
- **Google Fonts** — Playfair Display + Cormorant Garamond + Inter

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build production

```bash
npm run build
npm start
```

---

## 📁 Folder Structure

```
hasha-website/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page (semua section)
├── components/
│   ├── Navbar.tsx           # Sticky navbar + mobile menu
│   ├── HeroSection.tsx      # Hero fullscreen cinematic
│   ├── AboutSection.tsx     # About split layout
│   ├── MenuSection.tsx      # Menu showcase + paket harga
│   ├── SignatureSection.tsx # Signature dishes cards
│   ├── AyceRulesSection.tsx # AYCE rules
│   ├── GallerySection.tsx   # Masonry gallery
│   ├── InstagramSection.tsx # IG feed + CTA
│   ├── ReservationSection.tsx # Booking form (WA integration)
│   ├── Footer.tsx           # Luxury minimal footer
│   └── WhatsAppButton.tsx   # Floating WA button
├── public/
│   └── images/
│       ├── logo.jpg
│       ├── menu-sushi-1.jpg
│       ├── menu-sushi-2.jpg
│       ├── menu-grill.jpg
│       ├── menu-sukiyaki.jpg
│       ├── paket-combo.png
│       └── ayce-rules.jpg
└── next.config.ts
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background Primary | `#0D0D0D` |
| Background Secondary | `#1A1A1A` |
| Gold Primary | `#D4AF37` |
| Gold Light | `#E6C878` |
| Text Primary | `#F5F2EA` |
| Text Muted | `#A89A7A` |

---

## 📲 WhatsApp Integration

Ubah nomor WA di dua file:

- `components/WhatsAppButton.tsx` — line 7
- `components/ReservationSection.tsx` — line 40

Ganti `6281234567890` dengan nomor WA restoran.

---

## 🔧 Customization

- **Warna**: ubah CSS variables di `app/globals.css`
- **Menu**: edit array `categories` di `MenuSection.tsx`
- **Gambar gallery**: ganti URL Unsplash di `GallerySection.tsx`
- **Harga paket**: edit array `packages` di `MenuSection.tsx`

---

## 📦 Deploy

### Vercel (Rekomendasi)
```bash
npx vercel
```

### Netlify / lainnya
```bash
npm run build
# upload folder .next/
```

---

**HASHA Sushi & Grill**  
JL. Demangan Baru No. 29, DI Yogyakarta  
Open Daily: 11.00 – 22.00 WIB  
📸 [@hashasushiandgrill](https://www.instagram.com/hashasushiandgrill)  
🔗 [linktr.ee/sushihasha](https://linktr.ee/sushihasha)
