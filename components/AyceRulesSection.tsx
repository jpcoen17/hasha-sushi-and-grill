"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Timer, Utensils, AlertCircle, Gift } from "lucide-react";

const rules = [
  {
    icon: Timer,
    title: "Durasi 90 Menit",
    desc: "Maksimal 90 menit sejak pesanan pertama datang. Last order menit ke-75. Perpanjangan +30 menit: Rp 50.000/orang.",
  },
  {
    icon: Utensils,
    title: "Pemesanan Menu",
    desc: "Bebas pesan sepuasnya sesuai paket. Paket Platinum bisa pesan semua menu di Paket Gold.",
  },
  {
    icon: AlertCircle,
    title: "Sisa Makanan",
    desc: "Sisa makanan akan dikenakan biaya Rp 1.000 per gram. Jaga makanan Anda agar tidak terbuang.",
  },
  {
    icon: Gift,
    title: "Buy 1 Get 1",
    desc: "Berlaku untuk Paket Gold. Syarat: Buat Instagram Story dan tag @hashasushiandgrill.",
  },
];

export default function AyceRulesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#1A1A1A" }} ref={ref}>
      <div className="gold-divider mb-0" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-20 md:pt-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>AYCE Rules</span>
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
          </div>
          <h2 className="font-playfair text-2xl md:text-4xl font-bold" style={{ color: "#F5F2EA" }}>
            Ketentuan <span className="italic text-gold-gradient">All You Can Eat</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 gold-border-glow"
              style={{ background: "#0D0D0D" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-4"
                style={{ border: "1px solid rgba(212,175,55,0.3)" }}
              >
                <rule.icon size={18} style={{ color: "#D4AF37" }} />
              </div>
              <h3 className="font-playfair font-semibold text-base mb-2" style={{ color: "#F5F2EA" }}>
                {rule.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#A89A7A" }}>
                {rule.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="gold-divider mt-20 md:mt-28" />
    </section>
  );
}
