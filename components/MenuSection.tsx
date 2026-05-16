"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const categories = [
  { id: "sushi", label: "Sushi Menu", image: "/images/menu-sushi-1.jpg" },
  { id: "sushi2", label: "Nigiri & Sashimi", image: "/images/menu-sushi-2.jpg" },
  { id: "grill", label: "Grill Menu", image: "/images/menu-grill.jpg" },
  { id: "sukiyaki", label: "Sukiyaki & Ramen", image: "/images/menu-sukiyaki.jpg" },
  { id: "combo", label: "Paket Combo", image: "/images/paket-combo.png" },
  { id: "rules", label: "AYCE Rules", image: "/images/ayce-rules.jpg" },
];

const packages = [
  {
    name: "GOLD",
    subtitle: "金 Menu",
    prices: [
      { label: "Adult", price: "265K++" },
      { label: "Kids (100-130cm)", price: "99K++" },
      { label: "Senior (≥65th)", price: "140K++" },
    ],
    includes: ["Sushi & Maki", "Nigiri & Gunkan", "Appetizer & Salad", "Sukiyaki", "Minuman", "Dessert & Ice Cream"],
    accent: "#D4AF37",
    popular: false,
  },
  {
    name: "PLATINUM",
    subtitle: "白金 Menu",
    prices: [
      { label: "Adult", price: "365K++" },
      { label: "Kids (100-130cm)", price: "140K++" },
      { label: "Senior (≥65th)", price: "210K++" },
    ],
    includes: ["Semua Gold Menu", "Sashimi Premium", "Wagyu Grill", "Aburi Sushi", "Gyu Skirt & Yaki Galbi", "Lamb & Rib Finger"],
    accent: "#E6C878",
    popular: true,
  },
  {
    name: "COMBO",
    subtitle: "Sushi + Grill",
    prices: [
      { label: "Gold Combo", price: "399K++" },
      { label: "Platinum Combo", price: "569K++" },
    ],
    includes: ["Sushi AYCE", "Grill AYCE", "Sukiyaki", "Minuman", "Dessert", "Best Value!"],
    accent: "#D4AF37",
    popular: false,
  },
];

export default function MenuSection() {
  const [activeMenu, setActiveMenu] = useState("sushi");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const current = categories.find((c) => c.id === activeMenu);

  return (
    <section id="menu" className="relative py-24 md:py-32" style={{ background: "#0D0D0D" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>メニュー</span>
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F2EA" }}>
            Our <span className="italic text-gold-gradient">Menu</span>
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto" style={{ color: "#A89A7A" }}>
            Pilihan menu lengkap dengan cita rasa autentik Jepang — segar, premium, dan memuaskan.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex gap-2 md:gap-3 overflow-x-auto hide-scrollbar pb-4 mb-8 justify-start md:justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveMenu(cat.id)}
              className="flex-shrink-0 px-4 md:px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                background: activeMenu === cat.id ? "linear-gradient(135deg, #D4AF37, #E6C878)" : "rgba(255,255,255,0.03)",
                color: activeMenu === cat.id ? "#0D0D0D" : "#A89A7A",
                border: activeMenu === cat.id ? "none" : "1px solid rgba(212,175,55,0.2)",
                fontWeight: activeMenu === cat.id ? "600" : "400",
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Image Display */}
        <motion.div
          key={activeMenu}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
          style={{ border: "1px solid rgba(212,175,55,0.15)" }}
        >
          <div className="relative w-full" style={{ minHeight: 400 }}>
            <Image
              src={current!.image}
              alt={current!.label}
              width={1200}
              height={900}
              className="w-full h-auto"
              style={{ display: "block" }}
              priority
            />
          </div>
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
            style={{ background: "linear-gradient(0deg, rgba(13,13,13,0.8) 0%, transparent 60%)" }}
          >
            <span className="font-playfair italic text-xl" style={{ color: "#D4AF37" }}>
              {current!.label}
            </span>
          </div>
        </motion.div>

        {/* View full menu link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <a
            href="https://linktr.ee/sushihasha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#D4AF37]"
            style={{ color: "#A89A7A" }}
          >
            <span>Lihat Full Menu</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Package Cards */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: "#D4AF37" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>Paket AYCE</span>
              <div className="h-px w-10" style={{ background: "#D4AF37" }} />
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold" style={{ color: "#F5F2EA" }}>
              Pilih <span className="italic text-gold-gradient">Paket Anda</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
                className="relative p-6 md:p-7 transition-all duration-400 group"
                style={{
                  background: "#1A1A1A",
                  border: `1px solid ${pkg.popular ? pkg.accent : "rgba(212,175,55,0.15)"}`,
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] tracking-widest uppercase font-semibold"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #E6C878)", color: "#0D0D0D" }}
                  >
                    Best Value
                  </div>
                )}
                <div className="mb-5">
                  <div
                    className="font-playfair text-2xl font-bold tracking-wider mb-1"
                    style={{ color: pkg.accent }}
                  >
                    {pkg.name}
                  </div>
                  <div className="text-xs tracking-widest" style={{ color: "#A89A7A" }}>
                    {pkg.subtitle}
                  </div>
                </div>

                <div className="mb-5 space-y-2">
                  {pkg.prices.map((p) => (
                    <div key={p.label} className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: "#A89A7A" }}>{p.label}</span>
                      <span className="font-playfair font-semibold text-sm" style={{ color: "#F5F2EA" }}>
                        Rp {p.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="gold-divider mb-5" />

                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "#A89A7A" }}>
                      <span style={{ color: pkg.accent }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 w-full py-3 text-xs tracking-widest uppercase font-semibold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  style={{
                    background: "transparent",
                    border: `1px solid ${pkg.accent}`,
                    color: pkg.accent,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `linear-gradient(135deg, ${pkg.accent}, #E6C878)`;
                    (e.currentTarget as HTMLButtonElement).style.color = "#0D0D0D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = pkg.accent;
                  }}
                >
                  Pesan Sekarang
                </button>
              </motion.div>
            ))}
          </div>

          {/* Duration note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center text-xs leading-relaxed"
            style={{ color: "#A89A7A" }}
          >
            ⏱ Durasi 90 menit • Last order menit ke-75 • Perpanjangan +30 menit Rp 50.000/orang
            <br />
            Sisa makanan dikenakan Rp 1.000/gram
          </motion.div>
        </div>
      </div>
    </section>
  );
}
