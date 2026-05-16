"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, ExternalLink, CheckCircle } from "lucide-react";

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function ReservationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", guests: "", date: "", time: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo Hasha! Saya ingin reservasi meja.\n\nNama: ${form.name}\nJumlah Tamu: ${form.guests} orang\nTanggal: ${form.date}\nWaktu: ${form.time}\nNo. HP: ${form.phone}\n\nTerima kasih! 🍣`
    );
    window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const timeOptions = [
    "11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30",
    "15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
    "19:00","19:30","20:00","20:30","21:00","21:30",
  ];

  const contactInfos = [
    {
      type: "clock",
      label: "Jam Operasional",
      value: "Buka Setiap Hari",
      sub: "11.00 – 22.00 WIB",
      link: null,
    },
    {
      type: "map",
      label: "Lokasi",
      value: "JL. Demangan Baru No. 29",
      sub: "DI Yogyakarta",
      link: "https://maps.google.com/?q=JL+Demangan+Baru+No+29+Yogyakarta",
    },
    {
      type: "ig",
      label: "Instagram",
      value: "@hashasushiandgrill",
      sub: "Follow untuk promo & info terbaru",
      link: "https://www.instagram.com/hashasushiandgrill",
    },
  ];

  return (
    <section id="reservation" className="relative py-24 md:py-32" style={{ background: "#0D0D0D" }} ref={ref}>
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
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>予約</span>
            <div className="h-px w-10" style={{ background: "#D4AF37" }} />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4" style={{ color: "#F5F2EA" }}>
            Reserve Your <span className="italic text-gold-gradient">Table</span>
          </h2>
          <p className="text-sm md:text-base max-w-md mx-auto" style={{ color: "#A89A7A" }}>
            Pastikan kursi terbaik tersedia untuk Anda. Reservasi mudah via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-7 md:p-10"
            style={{ background: "#1A1A1A", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                  <CheckCircle size={56} style={{ color: "#D4AF37" }} className="mx-auto mb-4" />
                </motion.div>
                <h3 className="font-playfair text-2xl font-semibold mb-2" style={{ color: "#F5F2EA" }}>Terima Kasih!</h3>
                <p className="text-sm" style={{ color: "#A89A7A" }}>Reservasi Anda telah dikirim via WhatsApp. Kami akan segera mengkonfirmasi.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#A89A7A" }}>Nama Lengkap</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Masukkan nama Anda" className="luxury-input w-full px-4 py-3 text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#A89A7A" }}>Jumlah Tamu</label>
                    <select name="guests" value={form.guests} onChange={handleChange} required className="luxury-input w-full px-4 py-3 text-sm">
                      <option value="" disabled style={{ background: "#1A1A1A" }}>Pilih</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} style={{ background: "#1A1A1A" }}>{n} Orang</option>)}
                      <option value="10+" style={{ background: "#1A1A1A" }}>10+ Orang</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#A89A7A" }}>Waktu</label>
                    <select name="time" value={form.time} onChange={handleChange} required className="luxury-input w-full px-4 py-3 text-sm">
                      <option value="" disabled style={{ background: "#1A1A1A" }}>Pilih Waktu</option>
                      {timeOptions.map(t => <option key={t} value={t} style={{ background: "#1A1A1A" }}>{t} WIB</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#A89A7A" }}>Tanggal</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split("T")[0]} className="luxury-input w-full px-4 py-3 text-sm" style={{ colorScheme: "dark" }} />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#A89A7A" }}>No. WhatsApp</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="08xxxxxxxxxx" className="luxury-input w-full px-4 py-3 text-sm" />
                </div>
                <button type="submit" className="w-full py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]" style={{ background: "linear-gradient(135deg, #D4AF37, #E6C878)", color: "#0D0D0D" }}>
                  Reserve Now
                </button>
                <p className="text-center text-xs" style={{ color: "#A89A7A" }}>Reservasi akan dikonfirmasi via WhatsApp</p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{ background: "#D4AF37" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>Hasha Sushi & Grill</span>
              </div>
              <p className="font-cormorant text-lg italic" style={{ color: "#A89A7A" }}>First All You Can Eat Sushi, Sashimi and Grill in Yogyakarta</p>
            </div>

            {contactInfos.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="flex items-start gap-4 p-5"
                style={{ background: "#1A1A1A", border: "1px solid rgba(212,175,55,0.1)" }}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ border: "1px solid rgba(212,175,55,0.25)" }}>
                  {info.type === "clock" && <Clock size={16} style={{ color: "#D4AF37" }} />}
                  {info.type === "map" && <MapPin size={16} style={{ color: "#D4AF37" }} />}
                  {info.type === "ig" && <IgIcon />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "#A89A7A" }}>{info.label}</div>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold text-sm hover:text-[#D4AF37] transition-colors" style={{ color: "#F5F2EA" }}>
                      {info.value} <ExternalLink size={12} />
                    </a>
                  ) : (
                    <div className="font-semibold text-sm" style={{ color: "#F5F2EA" }}>{info.value}</div>
                  )}
                  <div className="text-xs mt-0.5" style={{ color: "#A89A7A" }}>{info.sub}</div>
                </div>
              </motion.div>
            ))}

            <a href="https://linktr.ee/sushihasha" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:text-[#D4AF37] transition-colors" style={{ color: "#A89A7A" }}>
              <span>linktr.ee/sushihasha</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
