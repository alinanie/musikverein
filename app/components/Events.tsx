import Image from "next/image";

const events = [
  {
    image: "/images/event1.jpg",
    title: "Konzert- & Marschwertungen",
    description:
      "Ob Marsch- oder Konzertwertung, wir nehmen wenn möglich an beiden Wertungen des Blasmusikverbandes für den Bezirk Urfahr-Umgebung teil.",
  },
  {
    image: "/images/event2.jpg",
    title: "Konzerte",
    description:
      "Jedes Jahr wird es neu geplant: Ein Kinderkonzert, ein Frühjahrskonzert oder ein Herbstkonzert. Auch abseits von Polka und Marsch zeigen wir unser Können z.B. mit Filmmusik oder Wiener Klassikern.",
  },
  {
    image: "/images/event3.jpg",
    title: "Ausrückung",
    description:
      "Ob das Maibaumaufstellen, das Kürbisfest oder der Abschluss des Kindersommers: Wir geben den verschiedenen Feierlichkeiten unserer Gemeinde einen musikalischen Rahmen.",
  },
];

export default function Events() {
  return (
    <section className="bg-[#faf3ea] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)]">
            Hier ist jede Menge Musik drin
          </h2>
          <p className="text-[18px] text-[#252525] mt-2 max-w-2xl">
            Wir spielen zu verschiedenen Gelegenheiten, aber auch gemeinsame
            Unternehmungen kommen nicht zu kurz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-bold text-[#252525] mb-3 font-[family-name:var(--font-palanquin)]">
                  {event.title}
                </h3>
                <p className="text-[16px] text-[#575756] leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
