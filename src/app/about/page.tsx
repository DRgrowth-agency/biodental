import { CTA } from "@/components/homeSections/CTA/CTA";
import { Nav } from "@/components/ui/nav";
import { About } from "../../components/homeSections/about/about";
import { Footer } from "@/components/homeSections/footer";
import AboutHero from "@/components/aboutSection/AboutHero";
import { AboutSec } from "@/components/aboutSection/AboutSec";
import Cabinet from './../../components/aboutSection/Cabinet';
import OurHome from './../../components/aboutSection/OurHome';
import Contact from "@/components/aboutSection/Contact";
import SendMessage from "@/components/aboutSection/SendMessage";
import { Metadata } from "next";
export default function AboutPage() {
  return (
    <div className=" w-full bg-white ">
      <Nav />
      <AboutHero />
      <AboutSec />
      <OurHome />
      <Cabinet />
      <Contact />
      <SendMessage />
      <CTA />
      <Footer />
    </div>
  );
} 
export const metadata : Metadata = {
  title: "À propos du cabinet BioDental – Dentiste à Annaba",
  description:
    "Découvrez BioDental et le Dr. Fetnaci Sofian, dentiste à Annaba. Une approche humaine et naturelle pour des soins durables.",
  alternates: {
    canonical: "https://biodental-dr-fetnaci.com/about"
  }
}
