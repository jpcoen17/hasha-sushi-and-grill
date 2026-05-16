"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Real HASHA photos — masonry layout dengan aspect ratio bervariasi
const galleryItems = [
  {
    src: "/images/gallery/g1-family-dining.png",
    alt: "Family Dining at HASHA",
    caption: "Family Time",
    aspect: "3/4",   // portrait — tall
  },
  {
    src: "/images/gallery/g2-interior-wide.png",
    alt: "HASHA Restaurant Interior",
    caption: "Elegant Interior",
    aspect: "4/3",   // landscape
  },
  {
    src: "/images/gallery/g3-food-spread.png",
    alt: "Food Spread HASHA",
    caption: "Full Spread",
    aspect: "4/3",
  },
  {
    src: "/images/gallery/g4-sushi-plate.png",
    alt: "Sushi & Sashimi Plating",
    caption: "Sushi & Sashimi",
    aspect: "4/3",
  },
  {
    src: "/images/gallery/g5-interior-decor.png",
    alt: "HASHA Interior Decor",
    caption: "Unique Décor",
    aspect: "4/3",
  },
  {
    src: "/images/gallery/g6-interior-bar.png",
    alt: "HASHA Bar Area",
    caption: "Restaurant Vibes",
    aspect: "4/3",
  },
  {
    src: "/images/gallery/g7-grill-spread.png",
    alt: "Grill & BBQ Spread",
    caption: "Grill Night",
    aspect: "4/3",
  },
  {
    src: "/images/gallery/g8-outdoor-dining.png",
    alt: "Outdoor Dining Area",
    caption: "Night Dining",
    aspect: "3/4",   // portrait — tall
  },
  {
    src: "/images/gallery/g9-grill-action.png",
    alt: "Grill Action",
    caption: "Grill Action",
    aspect: "4/3",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative py-24 md:py-32" style={{ background: "#0D0D0D" }} ref={ref}>
      <div className="gold-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-24 md:pt-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>ギャラリー</span>
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F2EA" }}>
            A Glimpse of <span className="italic text-gold-gradient">HASHA</span>
          </h2>
          <p className="text-sm md:text-base max-w-md mx-auto" style={{ color: "#A89A7A" }}>
            Suasana hangat, makanan premium, momen tak terlupakan — semuanya ada di sini.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="break-inside-avoid mb-3 md:mb-4 group relative overflow-hidden cursor-pointer"
              style={{ border: "1px solid rgba(212,175,55,0.08)" }}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: item.aspect }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
                  style={{
                    background: "linear-gradient(0deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.2) 60%, transparent 100%)",
                  }}
                >
                  <div>
                    <div className="w-6 h-px mb-2" style={{ background: "#D4AF37" }} />
                    <p className="text-xs font-light tracking-widest uppercase" style={{ color: "#F5F2EA" }}>
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Gold corner borders on hover */}
                <div
                  className="absolute top-0 left-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/hashasushiandgrill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#D4AF37]"
            style={{ color: "#A89A7A" }}
          >
            <span>Lihat lebih banyak di</span>
            <span style={{ color: "#D4AF37" }} className="font-playfair italic">@hashasushiandgrill</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
