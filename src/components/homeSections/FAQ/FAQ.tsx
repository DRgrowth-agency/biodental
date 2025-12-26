"use client";
import * as React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Card, CardContent } from "../../ui/card";
import { motion, AnimatePresence } from "framer-motion";

const MotionContent = motion(CardContent);
const MotionAccordionContent = motion(AccordionContent);

export const FAQ = () => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Quel est le coût d'un bridge dentaire en Algérie ?",
      answer: "Les prix varient de 20 000 DZD à 80 000 DZD, selon les matériaux et le nombre de dents manquantes. Chez BioDental, nous proposons des bridges biocompatibles avec des tarifs clairs après une première consultation.",
    },
    {
      question: "À quelle fréquence dois-je consulter mon dentiste pendant le traitement orthodontique ?",
      answer: "Il est important de continuer à consulter votre dentiste pour des contrôles et des nettoyages réguliers pendant le traitement orthodontique. Votre dentiste peut aider à surveiller votre santé bucco-dentaire et s'assurer que vos dents et vos gencives restent en bonne santé pendant le traitement. Il peut également fournir des conseils sur la façon de bien prendre soin de vos dents et de vos appareils orthodontiques ou aligneurs.",
    },
    {
      question: "Quels appareils dentaires me conviennent ?",
      answer: "Cela dépend de votre âge, de vos objectifs et de votre budget. BioDental propose un scan complet et un plan de traitement personnalisé pour recommander les appareils les plus adaptés à votre sourire.",
    },
  ];

  return (
    <div className="w-full py-[60px] md:py-20 bg-[#9aae92] px-[20px] md:px-[30px] lg:px-0">
      <div className="max-w-[1050px] mx-auto relative">
        {/* FAQ Title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9aae92] px-3">
          <h2 className="font-playfair-important font-bold text-[#2b3029] text-[45.5px] tracking-[-0.80px] leading-[60px]">
            Questions fréquentes
          </h2>
        </div>

        {/* FAQ Card */}
        <Card className="rounded-2xl border-2 border-solid border-[#f7f7f5] mt-0   md:mt-8  pt-5 md:pt-14">
          <MotionContent
            className="p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-t border-[#f7f7f5] py-2"
                >
                  <AccordionTrigger className="flex items-center gap-6 hover:no-underline group">
                    <span className="relative flex items-center justify-center">
                      <AiOutlinePlus className="h-[30px] w-[30px] flex-shrink-0 text-white transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </span>
                    <span className="text-left text-[20px] md:text-[22px] font-medium text-[#2b3029]">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="relative text-[16px] md:text-[17.3px] md:tracking-[0.18px] md:leading-[25.2px] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden"
                  >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                         className="pt-4 border-t border-[#f7f7f5]"
                      >
                    <div className="pl-[54px]">
                        {item.answer || "Content not provided"}
                    </div>
                      </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </MotionContent>
        </Card>
      </div>
    </div>
  );
};
