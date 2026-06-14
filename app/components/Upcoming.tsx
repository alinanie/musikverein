import Image from "next/image";
import AnimateIn from "./AnimateIn";

const featured = {
  image: "/images/freibadfest.jpg",
  title: "Auftakt in den Sommer",
  date: "Freitag, 10. Juli",
  location: "Freibadfest Hellmonsödt",
  note: "Nur bei Schönwetter",
  program: [
    { time: "ab 15:00 Uhr", label: "Weinbar" },
    { time: "ab 17:00 Uhr", label: "Dämmerschoppen" },
    { time: "ab 21:00 Uhr", label: "DJ" },
  ],
  admission: "Eintritt frei ab 15:00 Uhr",
};

const categories = [
  {
    title: "Auftritte",
    color: "#00628e",
    bg: "#e8f2f8",
    events: [
      { date: "20. Juni", name: "Sonnwendfeuer" },
      { date: "5. Juli", name: "Pfarrfest" },
      { date: "10. Juli", name: "Auftakt in den Sommer – Freibadfest" },
      { date: "1. August", name: "Hellmonsödter Marktfestchen" },
      { date: "13. September", name: "Abschluss des Kindersommers & Herbstfest" },
      { date: "10. Oktober", name: "Oktoberfest" },
      { date: "21. November", name: "Herbstkonzert" },
    ],
  },
  {
    title: "Bewerb",
    color: "#cb6615",
    bg: "#fdf0e6",
    events: [
      { date: "27. Juni", name: "Bezirksmusikfest Schenkenfelden – Marschwertung" },
      { date: "7. November", name: "Konzertwertung" },
    ],
  },
  {
    title: "Kirchliche Feierlichkeiten",
    color: "#3d7a3a",
    bg: "#eaf3e9",
    events: [
      { date: "20. September", name: "Jubelhochzeiten" },
      { date: "27. September", name: "Erntedankfest" },
      { date: "1. November", name: "Allerheiligen" },
    ],
  },
];

export default function Upcoming() {
  return (
    <section className="bg-[#faf3ea] py-16 min-[720px]:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <AnimateIn>
          <div className="mb-14">
            <h2 className="text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)]">
              Veranstaltungen 2025
            </h2>
            <p className="text-[18px] text-[#575756] mt-2 max-w-[65ch]">
              Von Konzerten über Ausrückungen bis zu kirchlichen Festen – das ganze Jahr Musik in Hellmonsödt.
            </p>
          </div>
        </AnimateIn>

        {/* Featured event */}
        <AnimateIn>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-16 flex flex-col lg:flex-row">
            {/* Poster */}
            <div className="relative lg:w-[400px] shrink-0 aspect-[3/4] lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-8 min-[720px]:p-12 gap-5">
              <span className="inline-block self-start bg-[#00628e] text-white text-[13px] font-semibold px-3 py-1 rounded-full">
                Nächste Veranstaltung
              </span>

              <div>
                <h3 className="text-[32px] min-[720px]:text-[40px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)] leading-tight">
                  {featured.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                  <p className="text-[18px] font-semibold text-[#00628e]">{featured.date}</p>
                  <span className="text-[#e8ddd0]">·</span>
                  <p className="text-[18px] text-[#575756]">{featured.location}</p>
                </div>
                <p className="text-[14px] text-[#cb6615] font-medium mt-1">⛅ {featured.note}</p>
              </div>

              {/* Program */}
              <div className="flex flex-col gap-2">
                {featured.program.map(({ time, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-[14px] font-mono text-[#575756] w-28 shrink-0">{time}</span>
                    <span className="text-[16px] font-semibold text-[#252525]">{label}</span>
                  </div>
                ))}
              </div>

              {/* Admission */}
              <div className="inline-flex items-center gap-2 self-start bg-[#e8f2f8] text-[#00628e] font-semibold text-[15px] px-4 py-2 rounded-full">
                <TicketIcon />
                {featured.admission}
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Event list by category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(({ title, color, bg, events }, i) => (
            <AnimateIn key={title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                <div
                  className="inline-block text-[13px] font-bold px-3 py-1 rounded-full mb-5"
                  style={{ background: bg, color }}
                >
                  {title}
                </div>
                <ul className="flex flex-col gap-3">
                  {events.map(({ date, name }) => (
                    <li key={date + name} className="flex gap-3 items-start">
                      <span
                        className="text-[13px] font-semibold shrink-0 mt-0.5 w-24"
                        style={{ color }}
                      >
                        {date}
                      </span>
                      <span className="text-[15px] text-[#252525] leading-snug">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

function TicketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      <path d="M13 5v2M13 17v2M13 11v2"/>
    </svg>
  );
}
