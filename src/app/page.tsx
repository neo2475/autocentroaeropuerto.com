import CTASection from "@/components/landing/cta";
// import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import ServicesSection from "@/components/landing/services";
import TestimonialsSection from "@/components/landing/testimonials";
import WhyChooseUsSection from "@/components/landing/why-choose-us";
import { Toaster } from "@/components/ui/toaster";
import MobileCTABar from "@/components/cta/MobileCTABar"; // ✅ usa SOLO esta barra

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Barra fija solo en móvil: 2 botones azul corporativo */}
      <MobileCTABar />

      <Toaster />
    </div>
  );
}
