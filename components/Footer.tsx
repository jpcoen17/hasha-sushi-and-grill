"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const IgIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const footerNav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0D0D0D", borderTop: "1px solid rgba(212,175,55,0.15)" }}>
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.jpg" alt="HASHA Logo" fill className="object-contain" />
              </div>
              <div>
                <div className="font-playfair font-bold text-xl tracking-widest" style={{ color: "#D4AF37" }}>HASHA</div>
                <div className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#A89A7A" }}>Sushi & Grill</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#A89A7A" }}>
              First All You Can Eat Sushi, Sashimi and Grill in Yogyakarta. Pengalaman dining Japanese premium yang tak terlupakan.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/hashasushiandgrill"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37" }}
              >
                <IgIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold" style={{ color: "#D4AF37" }}>Navigasi</h4>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <button onClick={() => scrollTo(item.href)} className="text-sm hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group" style={{ color: "#A89A7A" }}>
                    <span className="w-0 h-px group-hover:w-4 transition-all duration-300" style={{ background: "#D4AF37" }} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold" style={{ color: "#D4AF37" }}>Informasi</h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "#A89A7A" }}>Jam Buka</div>
                <div className="text-sm font-semibold" style={{ color: "#F5F2EA" }}>Buka Setiap Hari</div>
                <div className="text-sm" style={{ color: "#A89A7A" }}>11.00 – 22.00 WIB</div>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "#A89A7A" }}>Lokasi</div>
                <div className="text-sm" style={{ color: "#F5F2EA" }}>JL. Demangan Baru No. 29</div>
                <div className="text-sm" style={{ color: "#A89A7A" }}>DI Yogyakarta</div>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "#A89A7A" }}>Link</div>
                <a href="https://linktr.ee/sushihasha" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:text-[#D4AF37] transition-colors" style={{ color: "#F5F2EA" }}>
                  linktr.ee/sushihasha <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#A89A7A" }}>© {new Date().getFullYear()} HASHA Sushi & Grill. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4AF37" }} />
            <p className="text-xs font-playfair italic" style={{ color: "#D4AF37" }}>First AYCE Sushi, Sashimi & Grill in Yogyakarta</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
