import React from "react";
import { IoMdStopwatch, IoMdMail } from "react-icons/io";
import { MdLocalPhone as PhoneIcon } from "react-icons/md";


const Contact = () => {
  return (
    <section className="w-full  bg-[#fff] flex flex-col items-center justify-center py-20 px-4">
      {/* Title */}
      <h2 className="font-playfair-important  text-[34px] md:text-[50px] text-[#243520] font-bold mb-10 text-center">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row w-full max-w-[1100px] gap-10 md:gap-20 items-start justify-center px-4">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6 min-w-[300px] max-w-[400px] mt-10 mx-auto md:mx-0">
          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="text-[18px] text-[#222] leading-snug">
              8 mars, plaine ouest, cité 1172 lgts,
              <br />
              bloc 60, Annaba, Algeria
            </div>
          </div>
          {/* Email & Phone in the same row */}
          <div>
            {/* Email */}
            <div className="flex items-center gap-3 my-2">
              <span className="mt-1">
                <IoMdMail style={{ color: "#697C63" }} fontSize={18} />
              </span>
              <a
                href="mailto:biodental.dr.fetnaci@gmail.com"
                className="text-[18px] text-[#222] hover:underline"
              >
                biodental.dr.fetnaci@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-baseline  gap-3">
              <span className="mt-1">
                <PhoneIcon style={{ color: "#697C63" }} fontSize={18} />
              </span>
              <a
                href="tel:+2130659772737"
                className="text-[18px] text-[#222] hover:underline"
              >
                +213 0659 77 27 37
              </a>
            </div>
          </div>
          {/* Working hours */}
          <div className="flex items-start gap-3 mt-2">
            <span className="mt-1">
              <IoMdStopwatch style={{ color: "#2B3029", fontSize: 25 }} />
            </span>
            <div>
              <div className="text-[24px] font-medium text-[#243520] mb-1">
                Horaires d'ouverture :
              </div>
              <div className="text-[18px] text-[#222]">
                Samedi – Jeudi
                <br />
                9h00 à 18h00
              </div>
            </div>
          </div>
        </div>
        {/* Right: Google Map */}
        <div className="flex-1 flex items-center justify-center w-full min-w-[320px]">
          <div className="rounded-[24px] overflow-hidden shadow-lg border border-[#e5e5e5] w-full h-[320px]  md:h-[340px] bg-[#f7f7f5]">
            <iframe
              title="Localisation cabinet dentaire BioDental Annaba carte Google Maps"
              src="https://www.google.com/maps?q=Cabinet+Dentaire+BioDental+Dr.Fetnaci,+36.8887816,7.7332525&hl=en-GB&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
