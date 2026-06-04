import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ServicesGallery from "@/components/ServicesGallery";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServicesGallery />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
