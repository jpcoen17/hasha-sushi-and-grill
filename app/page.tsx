import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import SignatureSection from "@/components/SignatureSection";
import AyceRulesSection from "@/components/AyceRulesSection";
import GallerySection from "@/components/GallerySection";
import InstagramSection from "@/components/InstagramSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SignatureSection />
        <AyceRulesSection />
        <GallerySection />
        <InstagramSection />
        <ReservationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
