"use client";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import Link from "next/link";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { FacebookLogo, InstagramLogo, TiktokLogo } from "phosphor-react";

export const Footer = () => {
  // Footer navigation data
  const footerSections = [
    {
      title: "Services",
      links: ["Préservation des dents", "Implants dentaires", "Prothèses dentaires", "Chirurgie orale"],
    },
    {
      title: "Liens",
      links: ["Accueil", "À propos", "Services", "témoignages"],
    },
    {
      title: "Contact",
      links: ["+213 7 87 90 78 32", "biodental.dr.fetnaci@gmail.com"],
    },
    {
      title: "Social",
      isIconSection: true,
    },
  ];

  // Social media icons (Facebook, Instagram, TikTok)
  const socialIcons = [
    { src: "/icon.svg", alt: "Facebook" },
    { src: "/icon-9.svg", alt: "Instagram" },
    { src: "/icon-3.svg", alt: "TikTok" },
  ];

  // State for phone panel
  const [showPhonePanel, setShowPhonePanel] = useState(false);
  const phoneNumbers = [
    { number: "07 87 90 78 32", href: "tel:0787907832" },
    { number: "06 59 77 27 37", href: "tel:0659772737" },
  ];

  return (
    <>
      <footer className="w-full  overflow-hidden bg-[#F7F7F5] border border-[#83967b] rounded-[8px] px-[30px] md:px-[80px]   py-9  mx-auto">
        <div className="flex flex-col md:flex-row justify-between item-center gap-[32px] md:gap-0">
          {/* Main CTA Button */}
          <div className="flex align-center justify-center order-last md:order-first">
            <div className="flex flex-col items-center justify-center md:hidden xl:flex  order-last md:order-first">
              <button className="w-[250px] h-[40px] bg-[#263820] text-white rounded-[6px] shadow font-bold text-[20px] flex items-center justify-center">
                Prendre rendez-vous
              </button>
            </div>
          </div>
          {/* Footer Navigation Sections */}  
          <div className="flex flex-col md:flex-row w-full   pl-3 justify-between md:justify-center md:gap-[65px] gap-8 order-first md:order-last">
            {/* lines and contact section*/}
            <div className="flex gap-2 justify-between w-[333px]">
              {/* lines */}
              <div className="flex flex-col ">
                <h3 className="text-[22px] text-[#51634B]  font-[500] mb-1 text-left">
                  Liens
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  <li>
                    <a
                      href="/"
                      className="text-[16px] text-[#0F1F0D] font-normal underline tracking-[-0.8px] hover:underline"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px] hover:underline"
                    >
                      À propos
                    </a>
                  </li>
                  <li>
                    <a
                      href="./services"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px] hover:underline"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/testimonials"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px] hover:underline"
                    >
                      témoignages
                    </a>
                  </li>
                </ul>
              </div>
              {/* contact */}
              <div className="flex flex-col">
                <h3 className="text-[22px] text-[#51634B]  font-[500] mb-1 text-left">
                  Contact
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    +213 7 87 90 78 32
                  </li>
                  <li>
                    <a
                      href="mailto:biodental.dr.fetnaci@gmail.com"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.95px] hover:underline"
                    >
                      biodental.dr.fetnaci@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* services and social section*/}
            <div className="flex justify-start md:justify-between  md:item-center  w-[310px] ">
              {/* services */}
              <div className="flex flex-col w-[125px]">
                <h3 className="text-[22px] text-[#51634B] font-[500]  text-left">
                  Services
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  <li className="text-[16px] text-[#0F1F0D] font-[500] tracking-[-0.8px]">
                    Préservation des dents
                  </li>
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    Implants dentaires
                  </li>
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    Prothèses dentaires
                  </li>
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    Chirurgie orale
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-[16px] text-[#2266ff] font-medium tracking-[-0.8px] hover:underline mt-2"
                >
                  Autres services →
                </Link>
              </div>

              {/* Social */}
              <div className="flex flex-col ">
                <h3 className="text-[22px] text-[#51634B]  font-[500] mb-1 text-left">
                  Social
                </h3>
                <div className="flex gap-4 mt-1">
                  {/* Facebook */}
                  <a href="https://web.facebook.com/Biodental.Dr.Fetnaci.S/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Visiter notre page Facebook BioDental">
                    <FacebookLogo size={40} weight="duotone" color="#222" />
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/dr.fetnaci_sofiane?igsh=MW12N3YwZmh5ajBqdA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Visiter notre page Instagram BioDental">
                    <InstagramLogo size={40} weight="duotone" color="#222" />
                  </a>
                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@biodental_dr.fetnaci?_t=8W1xx07WI0E&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Visiter notre page TikTok BioDental">
                    <TiktokLogo size={40} weight="duotone" color="#222" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex justify-center items-center ">
          <div className="flex flex-col md:flex-row justify-between font-[460] items-center mt-6 text-[15px] w-full">
            <div className="mb-2 md:mb-0 flex flex-wrap items-center gap-1 tracking-[-0.77px] text-[#51634B]">
              <span className="">© BioDental clinic 2024 |</span>
              <a href="#" className=" hover:underline">
                Privacy Policy
              </a>
              <span className="">|</span>
              <a
                href="#"
                className="text-[#2266ff] hover:underline hidden md:block"
              >
                Accessibility Statement
              </a>
            </div>
            <div className="flex items-center gap-2 font-normal text-right underline">
              <a href="#" className="text-[#2266ff] hover:underline">
                Made <span className="text-black  no-underline">by</span> Ayoub
                SADAOUI
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Fixed phone button and panel for mobile */}
      <div className="md:hidden">
        {/* Phone panel */}
        {showPhonePanel && (
          <div className="fixed bottom-[180px] right-6 z-50 flex flex-col rounded-xl border border-[#b2c2a6] bg-[#83967b] 83967b  min-w-[180px]">
            {phoneNumbers.map((item, idx) => (
              <a
                key={item.number}
                href={item.href}
                className={`flex items-center gap-2 ${idx === 0 ? "border-b-[1.5px] border-white" : ""} px-4 py-2 text-[#000]  h-[52px] text-base font-medium ${idx === 0 ? "rounded-t-xl" : ""} ${idx === phoneNumbers.length - 1 ? "rounded-b-xl" : "border-t border-white"}`}
                style={{ minWidth: 160 }}
              >
                <FiPhone className="text-[#fff]" size={18} />
                <span>{item.number}</span>
              </a>
            ))}
          </div>
        )}
        {/* Floating phone button */}
        <motion.button
          className="fixed bottom-[120px] right-6 z-50 flex items-center justify-center w-[47px] h-[47px] rounded-full bg-[#243520] hover:bg-[#222] transition-colors duration-150 focus:outline-none shadow-lg"
          aria-label="Afficher les numéros de téléphone"
          type="button"
          onClick={() => setShowPhonePanel((v) => !v)}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
          whileDrag={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          dragSnapToOrigin
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            mass: 1,
          }}
        >
          <FiPhone className="text-[#F7F7F5]" size={28} />
        </motion.button>
      </div>
    </>
  );
};
