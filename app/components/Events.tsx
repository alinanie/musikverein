import Image from "next/image";
import AnimateIn from "./AnimateIn";

const events = [
  {
    image: "/images/wertung.jpg",
    title: "Konzert- & Marschwertungen",
    description:
      "Ob Marsch- oder Konzertwertung, wir nehmen wenn möglich an beiden Wertungen des Blasmusikverbandes für den Bezirk Urfahr-Umgebung teil.",
  },
  {
    image: "/images/konzert.png",
    title: "Konzerte",
    description:
      "Jedes Jahr wird es neu geplant: Ein Kinderkonzert, ein Frühjahrskonzert oder ein Herbstkonzert. Auch abseits von Polka und Marsch zeigen wir unser Können z.B. mit Filmmusik oder Wiener Klassikern.",
  },
  {
    image: "/images/ausrueckung.jpg",
    title: "Ausrückung",
    description:
      "Ob das Maibaumaufstellen, das Kürbisfest oder der Abschluss des Kindersommers: Wir geben den verschiedenen Feierlichkeiten unserer Gemeinde einen musikalischen Rahmen.",
  },
  {
    image: "/images/kirche1.jpg",
    title: "Begleitung kirchlicher Festlichkeiten",
    description:
      "Ob Kommunion, Firmung oder die musikalische Umrahmung durch unsere Turmbläser zur Weihnachtszeit: auch die kirchlichen Feste unserer Gemeinde begleiten wir mit viel Freude.",
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
            Ob Frühjahrskonzert, Dorffest oder Kirchweih – überall wo Hellmonsödt feiert, sind wir mit dabei.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {events.map((event, i) => (
            <AnimateIn key={event.title} delay={i * 120}>
            <div
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
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
