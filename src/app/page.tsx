import { Nav } from "../components/ui/nav";
import { Footer } from "../components/homeSections/footer/footer";
import { FAQ } from "../components/homeSections/FAQ/FAQ";
import { Services } from "../components/homeSections/services/Services";
import { About } from "../components/homeSections/about/about";
import { CTA } from "../components/homeSections/CTA/CTA";
import { Features } from "../components/homeSections/features/Features";
import { Hero } from "../components/homeSections/hero/hero";
import { Reviews } from "@/components/homeSections/reviews/page";
import dynamic from "next/dynamic";
import GallerySectionClient from "../components/GallerySectionClient";
import { Metadata } from "next";
const GallerySection = dynamic(
  () => import("../components/testimonialSections/GallerySection")
);


export default function Page() {

  return (
    <div className="w-full bg-[#F7F7F5]">
      <Nav />
      <div className="relative">
        <div className="w-full bg-[#F7F7F5] overflow-hidden">
          {/* Header Section */}
          <div className="w-full">
            <Hero />
          </div>
          {/* Testimonials Section */}
          <About />
          {/* <GallerySectionClient /> */}
          <Features />
          <Services />
          <Reviews />
          <FAQ />
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
export const metadata : Metadata = {
  title: "Dentiste à Annaba – Dentisterie Naturelle & Soins Doux | BioDental",
  description:
    "Cabinet dentaire BioDental à Annaba. Soins dentaires naturels, implants, orthodontie et prothèses. Priorité au patient.",
  alternates: {
    canonical:"https://biodental-dr-fetnaci.com"
  }
}

