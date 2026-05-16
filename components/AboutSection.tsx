"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils, Star, Flame, Coffee } from "lucide-react";

const features = [
  { icon: Utensils, title: "Fresh Sushi Daily", desc: "Sushi segar disiapkan setiap hari oleh chef berpengalaman" },
  { icon: Star, title: "Premium Sashimi", desc: "Sashimi grade premium dengan salmon, tuna, dan tako pilihan" },
  { icon: Flame, title: "Japanese Grill", desc: "Wagyu, karubi, dan berbagai pilihan grill authentik Jepang" },
  { icon: Coffee, title: "Cozy Fine Dining", desc: "Suasana hangat dan elegan untuk momen special Anda" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32" style={{ background: "#0D0D0D" }}>
      {/* Gold accent line top */}
      <div className="gold-divider mb-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative frame */}
            <div
              className="absolute -inset-3 md:-inset-4 z-0"
              style={{ border: "1px solid rgba(212,175,55,0.15)" }}
            />
            <div className="relative z-10 overflow-hidden" style={{ background: "#1A1A1A" }}>
              {/* Interior visual — luxury dark aesthetic */}
              <div className="relative h-[400px] md:h-[520px] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)",
                  }}
                />
                {/* Gold radial */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
                  }}
                />
                {/* Kanji art */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="font-playfair italic text-[120px] md:text-[180px] font-light leading-none select-none"
                      style={{ color: "rgba(212,175,55,0.08)", lineHeight: 1 }}
                    >
                      寿司
                    </div>
                    <div
                      className="font-playfair italic text-[60px] md:text-[90px] font-light leading-none select-none -mt-4"
                      style={{ color: "rgba(212,175,55,0.05)", lineHeight: 1 }}
                    >
                      覇者
                    </div>
                  </div>
                </div>
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 opacity-60">
                    <div className="w-16 h-px mx-auto" style={{ background: "#D4AF37" }} />
                  </div>
                  <div className="font-playfair text-2xl md:text-3xl italic mb-3" style={{ color: "#D4AF37" }}>
                    Since 2020
                  </div>
                  <div className="text-sm tracking-[0.25em] uppercase" style={{ color: "#A89A7A" }}>
                    Yogyakarta's Finest AYCE
                  </div>
                  <div className="mt-6 flex gap-4">
                    {["265K", "365K", "399K"].map((p) => (
                      <div key={p} className="text-center px-4 py-2" style={{ border: "1px solid rgba(212,175,55,0.2)" }}>
                        <div className="font-playfair text-base font-semibold" style={{ color: "#D4AF37" }}>Rp {p}++</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-xs tracking-[0.2em] uppercase" style={{ color: "#A89A7A" }}>
                    Open Daily 11.00 – 22.00 WIB
                  </div>
                </div>
              </div>
            </div>

            {/* Gold corner accent */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 z-20">
              <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: "#D4AF37" }} />
              <div className="absolute bottom-0 right-0 w-px h-full" style={{ background: "#D4AF37" }} />
            </div>
            <div className="absolute -top-2 -left-2 w-16 h-16 z-20">
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: "#D4AF37" }} />
              <div className="absolute top-0 left-0 w-px h-full" style={{ background: "#D4AF37" }} />
            </div>
          </motion.div>

          {/* RIGHT — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#D4AF37" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>Our Story</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: "#F5F2EA" }}>
                Japanese Dining
                <br />
                <span className="italic text-gold-gradient">Reimagined</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#A89A7A" }}>
                Hasha Sushi & Grill menghadirkan pengalaman dining Japanese modern dengan sushi segar, sashimi premium, dan grilled menu pilihan dalam suasana hangat dan elegan.
              </p>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "#A89A7A", opacity: 0.7 }}>
                Sebagai restoran AYCE pertama di Yogyakarta yang menawarkan konsep sushi, sashimi, dan grill, kami berkomitmen menghadirkan kualitas premium dengan harga yang terjangkau — tanpa kompromi pada cita rasa.
              </p>
            </motion.div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  className="gold-border-glow p-4 md:p-5 cursor-default"
                  style={{ background: "#1A1A1A" }}
                >
                  <f.icon size={20} className="mb-3" style={{ color: "#D4AF37" }} />
                  <div className="text-sm font-semibold tracking-wide mb-1" style={{ color: "#F5F2EA" }}>
                    {f.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "#A89A7A" }}>
                    {f.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="gold-divider mt-24 md:mt-32" />
    </section>
  );
}
