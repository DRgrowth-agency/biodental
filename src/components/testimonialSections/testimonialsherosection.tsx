"use client";
import { useRef, useState } from "react";
import { Button } from "../../components/ui/button";

import Image from "next/image";
import { motion } from "framer-motion";

import { FiPhone } from "react-icons/fi";
const PHONE_NUMBERS = ["07 87 90 78 32", "06 59 77 27 37"];

export function PhonePopup({ open }: { open: boolean }) {
  return (
    <div
      className={`fixed w-[192px] border border-white top-[70px] right-[100px]  z-[100] flex flex-col rounded-xl shadow-lg bg-[#9aad92]/90 min-w-[192px] h-[100px] `}
      style={{ boxShadow: "0 4px 24px 0 #0002" }}
    >
      {PHONE_NUMBERS.map((num, idx) => (
        <a
          key={num}
          href={`tel:${num.replace(/\s/g, "")}`}
          className={`flex border border-white items-center gap-2 px-6 h-1/2 text-[17px] text-[#000] font-medium ${idx === 0 ? "rounded-t-xl" : ""} ${idx === PHONE_NUMBERS.length - 1 ? "rounded-b-xl" : "border-t border-[#e0e7db]"}`}
        >
          <FiPhone className="text-[#fff]" size={18} />
          {num}
        </a>
      ))}
    </div>
  );
}
const initialImages = [
  {
    id: 1,
    src: "/TESI-PAGE/t-hero-1.avif",
    alt: "Sourire patient témoignage résultat soins dentaires BioDental Annaba",
    style: "z-30 left-1/2 -translate-x-1/2 top-0 rotate-[15deg] shadow-2xl",
    width: 180,
    height: 180,
  },
  {
    id: 2,
    src: "/TESI-PAGE/t-hero-2.avif",
    alt: "Sourire patient transformation soins dentaires BioDental Annaba",
    style: "z-20 left-[10%] top-[120px] rotate-[-12deg] shadow-xl",
    width: 170,
    height: 170,
  },
  {
    id: 3,
    src: "/TESI-PAGE/t-hero-3.avif",
    alt: "Sourire patient résultat traitement dentaire BioDental Annaba",
    style: "z-10 left-[55%] top-[150px] rotate-[8deg] shadow-lg",
    width: 170,
    height: 170,
  },
];

export default function TestimonialHeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  return (
    <section className="w-full bg-[#9aae92] flex justify-center items-center pt-[140px] pb-[60px]  xl:py-[40px] h-full xl:h-[100vh] overflow-hidden">
      <div className="max-w-6xl  xl:pt-10 w-full mx-auto flex flex-col xl:flex-row gap-8 xl:gap-0 px-[24px]  items-center justify-center ">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center xl:justify-start xl:pt-11 z-10 text-center xl:text-left">
          <div className="w-full xl:max-w-xl xl:lg:max-w-2xl">
            <h1 className="font-playfair-important font-black text-[34px] xl:text-[50px] leading-[1.2] tracking-[-0.8px] md:tracking-[0px] text-[#2B3029] text-center xl:text-left mb-5">
              Sourires authentiques,
              <br />
              histoires <span className="text-[#f7f7f5]">vraies</span> et de
              <br />
              nouvelles vies
            </h1>
            <p className="text-[#F7F7F5] text-[24px]  leading-[1.2]  mb-8 font-medium">
              <span className="text-[#2B3029]"> Découvrez</span> le confort et
              la confiance que nos soins dentaires personnalisés ont apportés à
              des personnes de tous âges.
            </p>
            <div
              className="relative flex flex-col items-center xl:items-start p-1"
              onMouseLeave={() => setShowPopup(false)}
            >
              <Button
                ref={btnRef}
                className="mt-4 relative bg-[#243520]  w-[192px] hover:bg-[#222] text-white rounded-lg py-2 shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] transition-colors duration-[400ms]"
                onClick={() => setShowPopup((v) => !v)}
              >
                <span className="text-[16px] leading-[16.8px]  font-semibold">
                  Prendre rendez-vous
                </span>
                {showPopup && (
                  <div
                    ref={popupRef}
                    className="absolute z-[200] top-[-180px] right-[-100px] -translate-x-1/2"
                  >
                    <PhonePopup open={showPopup} />
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
        {/* Right: Static Images */}
        <div className="relative flex-1 flex items-center justify-center w-full h-full min-h-[350px] md:w-[350px]   xl:min-h-[420px]">
          {/* Top image (child) */}
          <motion.div
            className="absolute w-[205px] xl:w-[190px] h-[160px] xl:h-[236px] rounded-[32px] z-30 left-1/2 top-6 -translate-x-1/2 rotate-[-13deg] shadow-2xl cursor-grab overflow-hidden"
            style={{ boxShadow: "0 8px 32px 0 rgba(60, 80, 60, 0.18)" }}
            drag
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            dragSnapToOrigin
          >
            <Image
              src="/TESI-PAGE/t-hero-1.webp"
              alt="Sourire patient témoignage résultat soins dentaires BioDental Annaba"
              width={190}
              height={236}
              className="w-full h-full object-cover pointer-events-none"
              priority
              draggable={false}
            />
          </motion.div>
          {/* Bottom left image (teeth) */}
          <motion.div
            className="absolute w-[230px] xl:w-[295px] h-[100px] xl:h-[140px] z-20 left-[-10px] xl:left-[40px] bottom-[48px] xl:bottom-4 rotate-[304deg] xl:rotate-[-30deg] rounded-t-[50px] rounded-br-[50px] shadow-xl cursor-grab overflow-hidden"
            style={{ boxShadow: "0 8px 32px 0 rgba(60, 80, 60, 0.18)" }}
            drag
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            dragSnapToOrigin
          >
            <Image
              src="/TESI-PAGE/t-hero-2.webp"
              alt="Sourire patient transformation soins dentaires BioDental Annaba"
              width={295}
              height={140}
              className="w-full h-full object-cover pointer-events-none"
              priority
              draggable={false}
            />
          </motion.div>
          {/* Bottom right image (braces) */}
          <motion.div
            className="absolute w-[200px] xl:w-[260px]  h-[90px] xl:h-[140px] z-10 right-0 bottom-[49px] xl:bottom-7 rotate-[25deg] xl:rotate-[25deg] rounded-tr-[50px] rounded-bl-[50px] shadow-xl cursor-grab overflow-hidden"
            style={{ boxShadow: "0 8px 32px 0 rgba(60, 80, 60, 0.18)" }}
            drag
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileTap={{ scale: 0.95, cursor: "grabbing" }}
            dragSnapToOrigin
          >
            <Image
              src="/TESI-PAGE/t-hero-3.webp"
              alt="Sourire patient résultat traitement dentaire BioDental Annaba"
              width={260}
              height={140}
              className="w-full h-full object-cover pointer-events-none"
              priority
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
