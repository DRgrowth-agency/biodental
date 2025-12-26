"use client";
import * as React from "react";
// import "../../styles/heroAnimation.css";
import { Button } from "../../ui/button";
import { PhonePopup } from "../../testimonialSections/testimonialsherosection";
import { useRef, useState } from "react";
import "animate.css";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
const PHONE_NUMBERS = ["07 87 90 78 32", "06 59 77 27 37"];

export const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative w-full min-h-[700px] flex flex-col items-center justify-center bg-[#f7f7f5] pt-[50px]  md:pt-24 pb-12">
      {/* website version */}
      <div className=" hidden md:flex  flex-col items-center  w-[900px] mx-auto">
        <div className=" flex flex-col gap-1 font-black font-playfair-important text-[#2b3029] text-center  indent-2 space-y-0.5  ">
          <h1 className="h-[80px] mr-4 relative  text-[66px] ">
            <span
              className="slide-up-fade-in inline-block animate__animated animate__fadeInUp"
              style={
                {
                  animationDelay: "0ms",
                  "--animate-duration": "1.2s",
                  "--animate-timing-function": "ease-out",
                } as React.CSSProperties
              }
            >
              Restaurer votre
            </span>
            <span className="inline-block align-middle ">
              <img
                src="/hero1.avif"
                alt="hero1"
                className="inline h-[70px] w-[130px] rounded-full object-cover align-baseline"
              />
            </span>
            <span
              className="text-[#9aae92] italic font-bold slide-up-fade-in inline-block animate__animated animate__fadeInUp"
              style={
                {
                  animationDelay: "150ms",
                  "--animate-duration": "1.2s",
                  "--animate-timing-function": "ease-out",
                } as React.CSSProperties
              }
            >
              Sourire
            </span>
            <span className=" absolute top-3 -right-11">
              <img
                src="/nedjm.avif"
                alt="sparkle"
                className="inline h-[46px] w-[48px] align-top"
              />
            </span>
          </h1>
          <h2 className="h-[80px] relative flex  text-[70px]  ">
            <span className=" absolute top-0 -left- mr-1 rotate-[-32deg]">
              <img
                src="/leaf.avif"
                alt="leaf"
                className="inline h-[38px] w-[48px] align-top"
              />
            </span>
            <span
              className="slide-up-fade-in inline-block animate__animated animate__fadeInUp"
              style={
                {
                  animationDelay: "300ms",
                  "--animate-duration": "1.2s",
                  "--animate-timing-function": "ease-out",
                } as React.CSSProperties
              }
            >
              Naturel: soins doux,
            </span>
            <span className="inline-block align-middle mx-1">
              <img
                src="/hero2.avif"
                alt="hero2"
                className="inline h-[70px] w-[180px] rounded-full object-cover align-middle"
              />
            </span>
          </h2>
          <h2 className="h-[80px]  text-[70px] ">
            <span className="inline-block align-center mx-1 mt-2">
              <img
                src="/hero3.avif"
                alt="hero3"
                className=" h-[70px] w-[150px] rounded-full object-cover align-middle"
              />
            </span>
            <span
              className="animate-hero-fade-up inline-block animate__animated animate__fadeInUp"
              style={
                {
                  animationDelay: "450ms",
                  "--animate-duration": "1.2s",
                  "--animate-timing-function": "ease-out",
                } as React.CSSProperties
              }
            >
              Priorité au Patient.
            </span>
          </h2>
        </div>
        <div className="flex justify-center  pt-8 w-full">
          <span className="inline-block  align-end mx-1 ml-[50%] rotate-[-17deg]">
            <img
              src="/arrow.avif"
              alt="arrow"
              className="inline h-[73px] w-[74px] align-middle"
            />
          </span>
        </div>
        <div
          className="relative flex flex-col items-center p-1"
          onMouseLeave={() => setShowPopup(false)}
        >
          <Button
            ref={btnRef}
            className="mt-4 relative bg-[#243520] hover:bg-[#222] text-white rounded-lg py-2 shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] transition-colors duration-[400ms]"
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

      {/* mobile version */}
      <div className="flex md:hidden flex-col items-center mx-auto text-[47px]  font-semibold  p-2  text-black">
        {/* Un Sourire (with smile image as O) */}
        <div className="flex items-center justify-center  font-playfair-important text-center">
          <span
            className="animate__animated animate__fadeInUp"
            style={
              {
                "--animate-duration": "1.2s",
                "--animate-timing-function": "ease-out",
              } as React.CSSProperties
            }
          >
            Un Sourire
          </span>
          <span className="inline-block align-middle mx-1">
            <img
              src="/hero1.avif"
              alt="hero1"
              className="inline h-[46px] w-[86px] rounded-full object-cover align-baseline"
              style={{ marginBottom: "-8px" }}
            />
          </span>
        </div>
        {/* Naturel (with leaf as accent) */}
        <div className="relative flex items-center justify-center  font-playfair-important  text-center tracking-wider ">
          <span className="inline-block align-middle  ">
            <img
              src="/hero2.avif"
              alt="hero2"
              className="inline h-[47px] w-[128px] rounded-full object-cover align-baseline  "
              style={{ marginBottom: "-8px" }}
            />
          </span>
          <span
            className="animate__animated animate__fadeInUp"
            style={
              {
                "--animate-duration": "1.2s",
                "--animate-timing-function": "ease-out",
              } as React.CSSProperties
            }
          >
            Naturel
          </span>

          <span className="inline-block align-top ml-1 -mt-3 absolute top-[11px] right-[-9px]">
            <img
              src="/leaf.avif"
              alt="leaf"
              className="inline h-[24px] w-[24px] align-top rotate-[35deg]  "
            />
          </span>
        </div>
        {/* préservé avec */}
        <div className="font-black font-playfair-important text-center tracking-wider">
          <span
            className="animate__animated animate__fadeInUp"
            style={
              {
                "--animate-duration": "1.2s",
                "--animate-timing-function": "ease-out",
              } as React.CSSProperties
            }
          >
            préservé avec
          </span>
        </div>
        {/* Douceur (with sparkle and smile image as O) */}
        <div className="flex items-center justify-center font-playfair-important  text-center">
          <span className="inline-block align-middle -mr-2">
            <img
              src="/nedjm.avif"
              alt="sparkle"
              className="inline h-[21px] w-[25px] align-text-top "
            />
          </span>
          <span
            className="animate__animated animate__fadeInUp"
            style={
              {
                "--animate-duration": "1.2s",
                "--animate-timing-function": "ease-out",
              } as React.CSSProperties
            }
          >
            Douceur
          </span>
          <span className="inline-block align-middle mx-1">
            <img
              src="/hero3.avif"
              alt="hero3"
              className="inline h-[47px] w-[115px] rounded-full object-cover align-baseline shadow-md "
              style={{ marginBottom: "-8px" }}
            />
          </span>
        </div>
        {/* Swirl/arrow accent */}
        <div className="flex justify-end pt-4 w-full">
          <span className="inline-block align-end mx-1  rotate-[-17deg]">
            <img
              src="/arrow.avif"
              alt="arrow"
              className="inline h-[50px] w-[50px] align-middle"
            />
          </span>
        </div>
        {/* Button */}
        <div className="pt-2 h-[40px]">
          <div
            className="relative flex flex-col items-center p-1"
            onMouseLeave={() => setShowPopup(false)}
          >
            <Button
              ref={btnRef}
              className="mt-4 relative bg-[#243520] hover:bg-[#222] text-white rounded-lg py-2 shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] transition-colors duration-[400ms]"
              onClick={() => setShowPopup((v) => !v)}
            >
              <span className="text-[16px] leading-[16.8px]  font-normal">
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
    </section>
  );
};
