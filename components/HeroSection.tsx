"use client";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  const scrollNext = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background — deep radial gold glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "#0D0D0D" }} />
        {/* Gold center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(212,175,55,0.09) 0%, transparent 70%)",
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{ background: "linear-gradient(180deg, #0D0D0D 0%, transparent 100%)" }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{ background: "linear-gradient(0deg, #0D0D0D 0%, transparent 100%)" }}
        />

        {/* Decorative Japanese wave lines */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-[0.04]"
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 C360 100 720 300 1080 150 C1260 75 1350 200 1440 150 L1440 300 L0 300 Z"
            fill="#D4AF37"
          />
          <path
            d="M0 230 C300 150 600 280 900 180 C1100 110 1300 220 1440 180 L1440 300 L0 300 Z"
            fill="#D4AF37"
            opacity="0.5"
          />
        </svg>

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Kanji decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="float-anim">
            <div
              className="text-7xl md:text-9xl font-thin opacity-10 select-none"
              style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif", letterSpacing: "0.1em" }}
            >
              寿司
            </div>
          </div>
        </motion.div>

        {/* Brand label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="h-px w-10 md:w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
          <span
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-light"
            style={{ color: "#D4AF37" }}
          >
            HASHA SUSHI & GRILL
          </span>
          <div className="h-px w-10 md:w-16" style={{ background: "linear-gradient(270deg, transparent, #D4AF37)" }} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-playfair text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
          style={{ color: "#F5F2EA" }}
        >
          Luxury Japanese
          <br />
          <span className="italic text-gold-gradient">Dining Experience</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-cormorant text-lg md:text-xl lg:text-2xl font-light italic mb-4"
          style={{ color: "#D4AF37" }}
        >
          First All You Can Eat Sushi, Sashimi and Grill in Yogyakarta
        </motion.p>

        {/* Description */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: "#A89A7A" }}
        >
          Fresh sushi, premium sashimi, and authentic Japanese grill served in a warm luxurious dining atmosphere.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-3.5 text-sm tracking-widest uppercase font-semibold overflow-hidden transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #D4AF37, #E6C878)", color: "#0D0D0D" }}
          >
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #E6C878, #D4AF37)" }} />
          </button>
          <button
            onClick={() => document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-white/5"
            style={{
              border: "1px solid rgba(212,175,55,0.5)",
              color: "#D4AF37",
            }}
          >
            Reserve Table
          </button>
        </motion.div>

        {/* Package teaser */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex justify-center gap-6 md:gap-12"
        >
          {[
            { label: "Gold Menu", price: "265K++", sub: "Adult" },
            { label: "Platinum Menu", price: "365K++", sub: "Adult" },
            { label: "Combo Package", price: "399K++", sub: "Sushi + Grill" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "#A89A7A" }}>{item.sub}</div>
              <div className="font-playfair text-lg md:text-xl font-semibold" style={{ color: "#D4AF37" }}>Rp {item.price}</div>
              <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "#F5F2EA", opacity: 0.5 }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A89A7A] hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
