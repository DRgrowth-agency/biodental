"use client";
import Image from "next/image";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";

const moreImgs = [
  "/more-imgs/more1.avif",
  "/more-imgs/more2.avif",
  "/more-imgs/more3.avif",
  // Add more images if needed
];

const MoreImagesSection = () => {
  const video1 = useElementOnScreen({ threshold: 0.5 });
  const video2 = useElementOnScreen({ threshold: 0.5 });

  return (
    <section className="w-full py-[24px] px-[34px] md:p-[20px] md:py-20 bg-[#9aae92]">
      <div className="max-w-[1100px] mx-auto">
        <div className="w-full text-center ">
          <h2 className="font-playfair-important  font-bold text-[#2b3029] text-[34px] md:text-[2.6rem] md:tracking-[-0.8px] leading-tight">
            Et plus…
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[50px] py-10">
          {/* Left: Video */}
          <div
            ref={video1.containerRef}
            className="w-full md:col-span-2 h-fit  md:h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
            style={{ marginRight: "100px" }}
          >
            <video
              ref={video1.videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
              loop
              poster="/video/vid-img-2.png"
            >
              <source src="/video/vid-simle-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            <Image
              src="/TESI-PAGE/t-hero-5.png"
              alt="Sourire patient témoignage résultat soins dentaires BioDental Annaba"
              width={600}
              height={270}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12">
          <div className="w-full h-[630px] md:row-span-2 rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            <Image
              src="/TESI-PAGE/t-hero-1.png"
              alt="Sourire patient transformation soins dentaires BioDental Annaba"
              width={600}
              height={270}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="w-full md:col-span-2 h-fit  md:h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            <Image
              src="/TESI-PAGE/t-hero-4.png"
              alt="Sourire patient résultat traitement dentaire BioDental Annaba"
              width={600}
              height={270}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div
            ref={video2.containerRef}
            className="w-full md:col-span-2  h-fit  md:h-[300px] rounded-[32px]  overflow-hidden bg-[#F7F7F5]/10 shadow-md"
          >
            <video
              ref={video2.videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
              loop
              poster="/video/vid-img-1.png"
            >
              <source src="/video/vid-smile-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreImagesSection;
