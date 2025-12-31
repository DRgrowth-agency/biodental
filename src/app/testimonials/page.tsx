import { Footer } from "../../components/homeSections/footer/footer";
import { Nav } from "../../components/ui/nav";
import { Reviews } from "@/components/homeSections/reviews/page";

import {
  TestimonialHeroSection,
  GallerySection,
  MoreImagesSection,
} from "../../components/testimonialSections";
import { CTA } from "../../components/homeSections/CTA/CTA";
import { Metadata } from "next";
export default function TestimonialsPage() {
  return (
    <div className="relative w-full bg-[#F7F7F5]">
      <Nav />
      <main>
        <TestimonialHeroSection />
        <Reviews />
        <GallerySection />
        <MoreImagesSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
export const metadata : Metadata = {
  title: "Avis Patients & Résultats – Dentiste à Annaba | BioDental",
  description:
    "Découvrez les avis de patients et les résultats avant/après des soins dentaires réalisés chez BioDental à Annaba.",
  alternates: {
    canonical: "https://biodental-dr-fetnaci.com/testimonials"
  }
}
