"use client";
import Image from "next/image";
import CabinetImages from "./CabinetImages";
import { motion } from "framer-motion";

const Cabinet = () => {
  return (
    <section className="w-full p-[20px] md:py-20 bg-[#9aae92]">
      <div className="max-w-[1050px] mx-auto">
        <motion.div 
         className="w-full text-center"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, type: "spring" }}
         viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-playfair-important  font-bold text-[#2b3029] text-[34px] md:text-[50px] md:tracking-[-0.8px] leading-tight">
            Où le confort rencontre l'art.
          </h2>
        </motion.div>
        {/* Cabinet images */}
       <CabinetImages/>
      </div>
    </section>
  );
};

export default Cabinet;