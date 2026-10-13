"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Herbstkonzert() {
  return (
    <section id="herbstkonzert" className="bg-white py-16 min-[720px]:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <AnimateIn>
          <div className="w-full mb-8">
            <Image
              src="/images/herbstkonzert.png"
              alt="Herbstkonzert des Musikvereins"
              width={1200}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </AnimateIn>

        {/* Info boxes section */}
        <AnimateIn>
          <div className="flex flex-col items-center text-center">
            <div className="max-w-2xl">
              <div className="grid grid-cols-2 gap-6 mb-8 min-[720px]:grid-cols-3">
                <div className="bg-[#fff8f0] rounded-lg p-4">
                  <p className="text-[12px] text-[#d4a574] font-semibold mb-2">DATUM</p>
                  <p className="text-[18px] font-bold text-[#252525]">Sa, 21.11.2026</p>
                </div>
                <div className="bg-[#fff8f0] rounded-lg p-4">
                  <p className="text-[12px] text-[#d4a574] font-semibold mb-2">BEGINN</p>
                  <p className="text-[18px] font-bold text-[#252525]">20:00 Uhr</p>
                </div>
                <div className="bg-[#fff8f0] rounded-lg p-4">
                  <p className="text-[12px] text-[#d4a574] font-semibold mb-2">ORT</p>
                  <p className="text-[18px] font-bold text-[#252525]">Pfarrkirche</p>
                </div>
              </div>
              <p className="text-center text-[15px] text-[#575756] mt-6 max-w-[500px] mx-auto leading-relaxed">
                Erleben Sie ein wunderschönes Herbstkonzert mit unserem Musikverein. Wir freuen uns auf Sie!
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
