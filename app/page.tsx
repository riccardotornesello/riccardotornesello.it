import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background scanline">
      <Navbar />
      <HeroSection />
    </div>
  );
}
