import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <About />
      <Credentials />
      <CTA />
      <Footer />
    </>
  );
}
