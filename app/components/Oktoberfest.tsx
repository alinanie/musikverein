"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Oktoberfest() {
  return (
    <section id="oktoberfest" className="bg-white py-16 min-[720px]:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="flex flex-col items-center text-center">
            {/* Poster image */}
            <div className="w-full max-w-[800px] mb-8">
              <Image
                src="/images/oktoberfest_poster.png"
                alt="Oktoberfest Hellmonsödt - Sa, 10.10.2026"
                width={1200}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            {/* Info section */}
            <div className="max-w-2xl">
              <h2 className="text-[40px] min-[720px]:text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)] mb-4">
                Oktoberfest Hellmonsödt
              </h2>

              <p className="text-[20px] text-[#1e88e5] font-[family-name:var(--font-birthstone-bounce)] mb-6">
                Mit LISA & THE MELLOWS
              </p>

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

              {/* Coming soon message */}
              <div className="inline-block bg-gradient-to-r from-[#1e88e5] to-[#1565c0] text-white px-8 py-4 rounded-full">
                <p className="text-[16px] font-semibold">
                  ✨ Weitere Informationen folgen in Kürze ✨
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
