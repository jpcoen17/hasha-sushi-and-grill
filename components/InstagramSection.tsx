"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const IgIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

// Pakai 6 foto asli HASHA terbaik untuk IG section
const igPosts = [
  { src: "/images/gallery/g1-family-dining.png",  caption: "Family time at HASHA 🍣✨",    likes: "1.2K" },
  { src: "/images/gallery/g7-grill-spread.png",   caption: "Grill night is the best night 🔥", likes: "987" },
  { src: "/images/gallery/g4-sushi-plate.png",    caption: "Sushi & sashimi premium 💛",   likes: "2.1K" },
  { src: "/images/gallery/g2-interior-wide.png",  caption: "Suasana yang selalu bikin kangen 🌟", likes: "1.5K" },
  { src: "/images/gallery/g9-grill-action.png",   caption: "Grill action at its finest 🥩", likes: "876"  },
  { src: "/images/gallery/g3-food-spread.png",    caption: "Meja penuh nikmat 🎉",          likes: "1.8K" },
];

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0D0D0D" }} ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 70%)" }}
      />

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
            <span style={{ color: "#D4AF37" }}><IgIcon size={16} /></span>
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F2EA" }}>
            Follow Our <span className="italic text-gold-gradient">Journey</span>
          </h2>
          <p className="text-sm md:text-base max-w-md mx-auto mb-2" style={{ color: "#A89A7A" }}>
            Tag kami di Instagram dan dapatkan promo Buy 1 Get 1 untuk Paket Gold!
          </p>
          <p className="font-playfair italic text-lg" style={{ color: "#D4AF37" }}>
            @hashasushiandgrill
          </p>
        </motion.div>

        {/* IG Grid — 2x3 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {igPosts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/hashasushiandgrill"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group relative aspect-square overflow-hidden block"
              style={{ border: "1px solid rgba(212,175,55,0.1)" }}
            >
              <Image
                src={post.src}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center"
                style={{ background: "rgba(13,13,13,0.78)" }}
              >
                <span style={{ color: "#D4AF37" }}><IgIcon size={28} /></span>
                <p className="text-xs text-center px-3 font-light mt-3 leading-relaxed" style={{ color: "#F5F2EA" }}>
                  {post.caption}
                </p>
                <div className="mt-2 text-xs" style={{ color: "#D4AF37" }}>♥ {post.likes}</div>
              </div>

              {/* Gold corner accents */}
              <div
                className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37" }}
              />
              <div
                className="absolute bottom-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37" }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/hashasushiandgrill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            style={{ background: "transparent", border: "1px solid #D4AF37", color: "#D4AF37" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #D4AF37, #E6C878)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#0D0D0D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#D4AF37";
            }}
          >
            <IgIcon size={16} />
            Visit Instagram
          </a>

          {/* Buy 1 Get 1 promo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="mt-6 inline-flex flex-wrap justify-center items-center gap-2 px-5 py-2.5"
            style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#D4AF37" }}>
              🎉 Buy 1 Get 1
            </span>
            <span className="text-xs" style={{ color: "#A89A7A" }}>
              — Buat Instagram Story & tag @hashasushiandgrill untuk Paket Gold
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
