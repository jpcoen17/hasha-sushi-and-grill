"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const signatures = [
  {
    name: "Salmon Sushi",
    kanji: "鮭",
    desc: "Salmon segar premium di atas nasi sushi yang sempurna",
    tag: "Fan Favorite",
  },
  {
    name: "Wagyu Grill",
    kanji: "和牛",
    desc: "Wagyu marbling tinggi dibakar sempurna di atas arang",
    tag: "Platinum",
  },
  {
    name: "Volcano Roll",
    kanji: "火山",
    desc: "Salmon roll dengan sriracha mayo dan tobiko yang melimpah",
    tag: "Signature",
  },
  {
    name: "Beef Yakiniku",
    kanji: "焼肉",
    desc: "Daging sapi pilihan dengan marinade saus yakiniku spesial",
    tag: "Best Seller",
  },
  {
    name: "Chicken Katsu Curry",
    kanji: "カツ",
    desc: "Ayam katsu crispy dengan kari Jepang yang kaya rempah",
    tag: "Must Try",
  },
];

export default function SignatureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0D0D0D" }} ref={ref}>
      {/* Background gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>シグネチャー</span>
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold" style={{ color: "#F5F2EA" }}>
            Signature <span className="italic text-gold-gradient">Dishes</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {signatures.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-default"
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(212,175,55,0.12)",
              }}
            >
              {/* Kanji bg */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                style={{ opacity: 0.06 }}
              >
                <span
                  className="font-playfair text-[100px] md:text-[120px]"
                  style={{ color: "#D4AF37" }}
                >
                  {item.kanji}
                </span>
              </div>

              {/* Gold top line */}
              <div
                className="absolute top-0 inset-x-0 h-px transition-all duration-500 group-hover:opacity-100 opacity-30"
                style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
              />

              {/* Hover gold glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-7 flex flex-col h-full min-h-[200px]">
                {/* Tag */}
                <div className="mb-auto">
                  <span
                    className="inline-block px-2.5 py-0.5 text-[9px] tracking-[0.25em] uppercase mb-4"
                    style={{
                      border: "1px solid rgba(212,175,55,0.35)",
                      color: "#D4AF37",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-playfair text-lg md:text-xl font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300" style={{ color: "#F5F2EA" }}>
                    {item.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#A89A7A" }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10 text-xs tracking-widest uppercase"
          style={{ color: "#A89A7A" }}
        >
          Dan ratusan menu lainnya menanti Anda ✦ Tersedia di semua paket
        </motion.p>
      </div>
    </section>
  );
}
