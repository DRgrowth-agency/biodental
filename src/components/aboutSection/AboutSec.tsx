"use client";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import "../../styles/scrollbar.css";

export const AboutSec = () => {
  const doctorInfo = {
    name: "Dr.Fetnaci Sofian",
    clinicName: "BioDental",
    philosophy:
      "put people before procedures, and always aim for a natural, lasting result.",
    description: [
      "At BioDental, we believe great dentistry starts with listening. I'm Dr.Fetnaci Sofian — a dentist driven by a simple philosophy:",
      "Since graduating in 2019 from Annaba, I've pursued advanced training in small surgeries, mechanized endodontics, and implantology — but what truly defines my work is the human connection behind every case.",
    ],
  };

  return (
    <section className="w-full py-20 bg-[#9aae92] px-8 md:px-8 lg:px-0">
      <motion.div 
       className="container flex flex-col md:flex-row items-start gap-[50px] max-w-[1000px] mx-auto"
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1.2, type: "spring" }}
       viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative w-full md:w-[358px] h-[440px] rounded-[1000px_1000px_8px_8px] overflow-hidden order-2 md:order-1">
          <img
            src="..//image-7.webp"
            alt="Dr Fetnaci Sofian dentiste cabinet BioDental Annaba"
            className="w-full h-full object-cover rounded-[1000px_1000px_8px_8px]"
          />
        </div>

        <div className="flex flex-col w-full md:w-[592px] items-start gap-[34px] order-1 md:order-2">
          <div className="w-full ">
            <h2 className="font-playfair-important font-bold text-[#2b3029] text-[34px] md:text-[50px] tracking-[-0.80px] text-center md:text-left leading-[60px]">
              Derrière chaque sourire confiant
            </h2>
          </div>

          <Card className="w-full bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-6 hidden md:block">
              <div
                className="space-y-1 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-2 md:pr-4"
                style={{ scrollbarGutter: "stable" }}
              >
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.03px] leading-[25.2px] font-[var(--font-manrope)] whitespace-pre-line">
                  {`Chez `}
                  <span className="font-bold">BioDental</span>
                  {`, nous croyons qu'une excellente dentisterie commence par l'écoute.\n\nJe suis le `}
                  <span className="font-bold text-black ">Dr Sofian</span>
                  {` — un dentiste animé par une philosophie simple :\n\n`}
                  <span className="font-bold">
                    Placer l'humain avant les procédures, et toujours viser un résultat naturel et durable.
                  </span>
                  {`\n\nDiplômé d'Annaba en 2019, j'ai suivi une formation avancée en petite chirurgie, endodontie mécanisée et implantologie. Mais ce qui définit mon travail, c'est le lien humain derrière chaque patient.\n\nNous ne suivons pas les modes ni ne cherchons à vendre des traitements superflus. Nous guidons, conseillons et faisons toujours ce qui est le mieux pour vous : votre santé, votre confort, votre confiance.\n\nVoilà ce que représente le nom `}
                  <span className="font-bold text-[#b8ccaf] special-biodental">BioDental</span>
                  {` : une dentisterie plus saine et plus réfléchie.\n\nUne dentisterie qui respecte votre sourire, au lieu de simplement le redessiner.\n\nNotre clinique allie des outils de pointe — comme la radiographie panoramique, le laser à iode et l'implantologie — à une atmosphère chaleureuse et accueillante où vous n'êtes ps qu'un patient… vous êtes la priorité`}
                </p>
              </div>
            </CardContent>
            <CardContent className="p-0 space-y-6 block md:hidden">
              <div
                className="space-y-1 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-2 md:pr-4"
                style={{ scrollbarGutter: "stable" }}
              >
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.03px] leading-[25.2px] font-[var(--font-manrope)] whitespace-pre-line">
                  {`Chez `}
                  <span className="font-bold">BioDental</span>
                  {`, nous croyons qu'une excellente dentisterie commence par l'écoute.\n\nJe suis le `}
                  <span className="font-bold text-black ">Dr Sofian</span>
                  {` — un dentiste animé par une philosophie simple :\n\n`}
                  <span className="font-bold">
                    Placer l'humain avant les procédures, et toujours viser un résultat naturel et durable.
                  </span>
                  {`\n\nDiplômé d'Annaba en 2019, j'ai suivi une formation avancée en petite chirurgie, endodontie mécanisée et implantologie. Mais ce qui définit mon travail, c'est le lien humain derrière chaque patient.\n\nNous ne suivons pas les modes ni ne cherchons à vendre des traitements superflus. Nous guidons, conseillons et faisons toujours ce qui est le mieux pour vous : votre santé, votre confort, votre confiance.\n\nVoilà ce que représente le nom `}
                  <span className="font-bold text-[#b8ccaf] special-biodental">BioDental</span>
                  {` : une dentisterie plus saine et plus réfléchie.\n\nUne dentisterie qui respecte votre sourire, au lieu de simplement le redessiner.\n\nNotre clinique allie des outils de pointe — comme la radiographie panoramique, le laser à iode et l'implantologie — à une atmosphère chaleureuse et accueillante où vous n'êtes pas qu'un patient… vous êtes la priorité`}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
