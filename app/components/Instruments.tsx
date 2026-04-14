import Image from "next/image";
import AnimateIn from "./AnimateIn";

const groups = [
  {
    label: "Holzbläser",
    instruments: [
      { name: "Querflöte", image: "/images/instruments/querflöte.jpg" },
      { name: "Klarinette", image: "/images/instruments/klarinette.jpg" },
      { name: "Oboe", image: "/images/instruments/oboe.jpg" },
      { name: "Saxophon", image: "/images/instruments/saxophon.jpg" },
    ],
  },
  {
    label: "Blechbläser",
    instruments: [
      { name: "Trompete", image: "/images/instruments/trompete.jpg" },
      { name: "Flügelhorn", image: "/images/instruments/fluegelhorn.jpg" },
      { name: "Tenorhorn", image: "/images/instruments/tenorhorn.jpg" },
      { name: "Posaune", image: "/images/instruments/posaune.jpg" },
      { name: "Horn", image: "/images/instruments/horn.jpg" },
      { name: "Tuba", image: "/images/instruments/tuba.jpg" },
    ],
  },
  {
    label: "Schlagwerk",
    instruments: [
      { name: "Schlagwerk", image: "/images/instruments/schlagwerk.jpg" },
    ],
  },
];

export default function Instruments() {
  return (
    <section className="bg-[#fff8f0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)]">
            Unsere Instrumente
          </h2>
          <p className="text-[18px] text-[#252525] mt-2">Jedes Instrument hat seine Stimme. Zusammen ergeben sie unsere.</p>
        </div>

        <div className="flex flex-col gap-10">
          {groups.map(({ label, instruments }) => (
            <div key={label}>
              <AnimateIn>
                <h3 className="text-[22px] font-semibold text-[#00628e] mb-4 font-[family-name:var(--font-palanquin)]">
                  {label}
                </h3>
              </AnimateIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {instruments.map(({ name, image }, i) => (
                  <AnimateIn key={name} delay={i * 80}>
                    <div className="bg-white rounded-2xl px-5 py-3 flex items-center gap-4 shadow-sm">
                      <div className="relative w-10 h-10 shrink-0">
                        <Image
                          src={image}
                          alt={name}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <span className="text-[18px] font-medium text-[#252525]">{name}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
