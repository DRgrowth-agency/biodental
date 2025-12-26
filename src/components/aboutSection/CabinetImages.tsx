import Image from "next/image";
const CabinetImages = () => {
  return (
    <div className="w-full py-0 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[40px] py-10">
        <div
          className="w-full md:col-span-2 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
          style={{ marginRight: "100px" }}
        >
          <Image
            src="/cabinet/cabinet1.png"
            alt="Cabinet dentaire équipement moderne traitement BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet2.png"
            alt="Salle d'attente confortable cabinet dentaire BioDental Annaba"
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
            src="/cabinet/cabinet3.png"
            alt="Cabinet dentaire salle traitement équipement BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-span-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet4.png"
            alt="Cabinet dentaire équipement soins dentaires BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-2 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet5.png"
            alt="Salle traitement cabinet dentaire équipement BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet6.png"
            alt="Cabinet dentaire fauteuil équipement moderne BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[50px] py-10">
        {/* Left: Images stacked vertically */}
        <div className="w-full md:col-span-2 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet6.png"
            alt="Cabinet dentaire fauteuil équipement moderne BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet7.png"
            alt="Salle d'attente réception cabinet dentaire BioDental Annaba"
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
            src="/cabinet/cabinet8.png"
            alt="Cabinet dentaire équipement technologie soins BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-span-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet9.png"
            alt="Cabinet dentaire salle soins équipement BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-2 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet10.png"
            alt="Cabinet dentaire fauteuil équipement traitement BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src="/cabinet/cabinet11.png"
            alt="Cabinet dentaire équipement professionnel BioDental Annaba"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default CabinetImages;
