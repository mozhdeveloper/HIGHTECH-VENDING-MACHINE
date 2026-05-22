import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedStrip from "@/components/FeaturedStrip";
import Expertise from "@/components/Expertise";
import Products from "@/components/Products";
import SmartTech from "@/components/SmartTech";
import About from "@/components/About";
import Industries from "@/components/Industries";
import LeadBanner from "@/components/LeadBanner";
import FaqNews from "@/components/FaqNews";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <FeaturedStrip />
      <Expertise />
      <Products />
      <SmartTech />
      <About />
      <Industries />
      <LeadBanner />
      <FaqNews />
      <Footer />
      <FloatingChat />
    </main>
  );
}
