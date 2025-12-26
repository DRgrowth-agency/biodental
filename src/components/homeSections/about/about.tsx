'use client'
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import "animate.css";

export const About = () => {
  const doctorInfo = {
    name: "Dr.Fetnaci Sofian",
    clinicName: "BioDental",
    philosophy:
      " mettez les gens avant les procédures, et visez toujours un résultat naturel et durable.",
    description: [
      "Chez Biodental, nous pensons que la grande dentisterie commence par l'écoute. ",
      "Depuis l'obtention de mon diplôme en 2019 à Annaba, j'ai poursuivi une formation avancée en petite chirurgie, en endodontie mécanisée et en implantologie — mais ce qui définit véritablement mon travail, c'est le lien humain derrière chaque cas.",
    ],
  };

  return (
    <section className="w-full py-20 bg-[#9aae92] px-8 md:px-8 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container flex flex-col md:flex-row items-start gap-[50px] max-w-[1000px] mx-auto"
      >
        <div className="relative w-full md:w-[358px] mt-[20px]  min-h-[440px] item-end h-full rounded-[1000px_1000px_8px_8px] bg-cover  order-2 md:order-1">
          <Image
            src={"/image-7.webp"}
            alt="Dr Fetnaci Sofian dentiste cabinet BioDental Annaba"
            fill
            className="object-cover rounded-[1000px_1000px_8px_8px]   "
          />
        </div>

        <div className="flex flex-col w-full md:w-[592px] items-start gap-[34px] order-1 md:order-2">
          <div className="w-full ">
            <h2 className="font-playfair-important font-bold text-[#2b3029] text-[34px] md:text-[50px] tracking-[-0.80px] text-center md:text-left">
              Derrière chaque sourire confiant
            </h2>
          </div>

          <Card className="w-full bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-6 hidden md:block">
              <div className="space-y-1">
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.03px] leading-[25.2px] font-[var(--font-manrope)]">
                  Chez{" "}
                  <span className="font-bold text-[17.9px] font-[var(--font-manrope)]">
                    BioDental
                  </span>
                  , nous croyons qu'une excellente dentisterie commence par
                  l'écoute.
                </p>
                <div className="space-y-1">
                  <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                    Je suis{" "}
                    <span className="font-bold text-[#2b3029] text-[24.2px] tracking-[0.24px] leading-[33.6px] ml-1.5 font-[var(--font-manrope)]">
                      Dr.Fetnaci Sofian
                    </span>{" "}
                    — un dentiste animé par une philosophie simple&nbsp;:
                  </p>
                  <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                    <span className="font-bold text-[17.9px] font-[var(--font-manrope)]">
                      placer l'humain avant les procédures
                    </span>
                    , et toujours viser un résultat naturel et durable.
                  </p>
                </div>
              </div>

              <div className="space-y-0 md:space-y-1">
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.18px] leading-[25.2px] font-[var(--font-manrope)]">
                  Diplômé en 2019 d'Annaba, j'ai suivi une formation avancée en
                  petite chirurgie, endodontie mécanisée et implantologie — mais
                  ce qui définit vraiment mon travail, c'est le lien humain
                  derrière chaque patient.
                </p>
              </div>
            </CardContent>
            <CardContent className="p-0 space-y-6  block md:hidden">
              <p className="text-[#f7f7f5] text-[16px] tracking-[0.18px] leading-[25.2px] ">
                Chez <span className="font-bold">BioDental</span>, nous croyons
                qu'une excellente dentisterie commence par l'écoute. Je suis{" "}
                <span className="font-bold">Dr.Fetnaci Sofian</span> — un
                dentiste animé par une philosophie simple&nbsp;:{" "}
                <span className="font-bold">
                  placer l'humain avant les procédures
                </span>
                , et toujours viser un résultat naturel et durable. Diplômé en
                2019 d'Annaba, j'ai suivi une formation avancée en petite
                chirurgie, endodontie mécanisée et implantologie — mais ce qui
                définit vraiment mon travail, c'est le lien humain derrière
                chaque patient.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
