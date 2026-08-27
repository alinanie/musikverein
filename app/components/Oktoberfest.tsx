"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Oktoberfest() {
  return (
    <section id="oktoberfest" className="bg-white">
      {/* Full-width banner */}
      <AnimateIn>
        <div className="w-full">
          <Image
            src="/images/oktoberfest-poster.png"
            alt="Oktoberfest Hellmonsödt - Sa, 10.10.2026"
            width={1920}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </AnimateIn>

      {/* Info boxes section */}
      <div className="py-16 min-[720px]:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="flex flex-col items-center text-center">
              <div className="max-w-2xl">
                <div className="grid grid-cols-2 gap-6 mb-8 min-[720px]:grid-cols-4">
                  <div className="bg-[#fff8f0] rounded-lg p-4">
                    <p className="text-[12px] text-[#d4a574] font-semibold mb-2">DATUM</p>
                    <p className="text-[18px] font-bold text-[#252525]">Sa, 10.10.2026</p>
                  </div>
                  <div className="bg-[#fff8f0] rounded-lg p-4">
                    <p className="text-[12px] text-[#d4a574] font-semibold mb-2">BEGINN</p>
                    <p className="text-[18px] font-bold text-[#252525]">19:15 Uhr</p>
                  </div>
                  <div className="bg-[#fff8f0] rounded-lg p-4">
                    <p className="text-[12px] text-[#d4a574] font-semibold mb-2">ORT</p>
                    <p className="text-[18px] font-bold text-[#252525]">Turnsaal der Schulen</p>
                  </div>
                  <div className="bg-[#f0e5d4] rounded-lg p-4">
                    <p className="text-[12px] text-[#d4a574] font-semibold mb-2">TICKETS</p>
                    <p className="text-[18px] font-bold text-[#252525]">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
