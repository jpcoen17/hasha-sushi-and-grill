"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(13, 13, 13, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNav("#home")} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image src="/images/logo.jpg" alt="HASHA Logo" fill className="object-contain" />
            </div>
            <div>
              <div className="font-playfair font-bold text-lg md:text-xl tracking-widest" style={{ color: "#D4AF37" }}>
                HASHA
              </div>
              <div className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#A89A7A" }}>
                Sushi & Grill
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="relative text-sm tracking-widest uppercase text-[#A89A7A] hover:text-[#D4AF37] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNav("#reservation")}
              className="ml-2 px-5 py-2 text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #E6C878)",
                color: "#0D0D0D",
              }}
            >
              Book Table
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#D4AF37] p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            style={{
              background: "rgba(13, 13, 13, 0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-base tracking-widest uppercase text-[#A89A7A] hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNav("#reservation")}
                className="mt-2 px-6 py-3 text-sm tracking-widest uppercase font-semibold text-center"
                style={{ background: "linear-gradient(135deg, #D4AF37, #E6C878)", color: "#0D0D0D" }}
              >
                Book Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
