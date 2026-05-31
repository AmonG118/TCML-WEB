import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import TaiwanVibe from "@/components/TaiwanVibe";
import OurMission from "@/components/OurMission";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <LatestNews />
        <TaiwanVibe />
        <OurMission />
      </main>
      <Footer />
    </>
  );
}
