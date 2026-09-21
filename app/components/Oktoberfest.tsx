"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Oktoberfest() {
  return (
    <section id="oktoberfest" className="bg-white py-16 min-[720px]:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <AnimateIn>
          <div className="w-full mb-8">
            <Image
              src="/images/Tisch-banner.png"
              alt="Tisch reservieren"
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
                  <div className="bg-[#f0e5d4] rounded-lg p-4 flex flex-col items-center justify-center">
                    <a
                      href="https://vorverkauf.mvhellmonsoedt.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#cb6615] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#b55a12] transition-colors text-[16px]"
                    >
                      Tickets kaufen
                    </a>
                  </div>
                </div>
                <p className="text-center text-[15px] text-[#575756] mt-6 max-w-[500px] mx-auto leading-relaxed">
                  Tischreservierung ab 6 Personen bitte an <a href="mailto:RK_3@gmx.at" className="text-[#00628e] font-semibold hover:underline">RK_3@gmx.at</a>
                </p>
              </div>
            </div>
          </AnimateIn>
      </div>
    </section>
  );
}
