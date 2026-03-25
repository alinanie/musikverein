import Image from "next/image";

const instruments = [
  [
    { name: "Querflöte", image: "/images/instruments/querflöte.jpg" },
    { name: "Klarinette", image: "/images/instruments/klarinette.jpg" },
    { name: "Oboe", image: "/images/instruments/oboe.jpg" },
  ],
  [
    { name: "Trompete", image: "/images/instruments/trompete.jpg" },
    { name: "Posaune", image: "/images/instruments/posaune.jpg" },
    { name: "Horn", image: "/images/instruments/horn.jpg" },
  ],
  [
    { name: "Tuba", image: "/images/instruments/tuba.jpg" },
    { name: "Saxophon", image: "/images/instruments/saxophon.jpg" },
    { name: "Schlagwerk", image: "/images/instruments/schlagwerk.jpg" },
  ],
];

export default function Instruments() {
  return (
    <section className="bg-[#fff8f0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)]">
            Unsere Instrumente
          </h2>
          <p className="text-[18px] text-[#252525] mt-2">Vielfalt in jedem Register</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {instruments.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map(({ name, image }) => (
                <div
                  key={name}
                  className="bg-white rounded-2xl px-5 py-3 flex items-center gap-4 shadow-sm"
                >
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
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
