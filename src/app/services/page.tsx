import { CTA } from "@/components/homeSections/CTA/CTA";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/homeSections/footer"
import { Features } from "@/components/homeSections/features/Features";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load the ServicesSec component
const ServicesSec = dynamic(
  () => import("@/components/ServicesSections/ServicesSec"),
  { 
    ssr: true,
    loading: () => (
      <div className="max-w-[1000px] mx-auto bg-transparent px-[20px] md:px-0 py-16 flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-[#243520] text-xl">Chargement des services...</div>
      </div>
    )
  }
);
export default function Services() {
  return (
    <div className="relative w-full bg-[#9aae92] ">
      <Nav />
      <Features issevice={true} />
      <ServicesSec />
      <CTA />
      <Footer />
    </div>
  );
}
export const metadata : Metadata = {
  title: "Soins Dentaires à Annaba – Services Complets | BioDental",
  description:
    "BioDental propose des soins dentaires complets à Annaba : préservation des dents, implants, prothèses, orthodontie et esthétique.",
  alternates: {
    canonical: "https://biodental-dr-fetnaci.com/services"
  }
}
