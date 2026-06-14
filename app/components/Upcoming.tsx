import Image from "next/image";
import AnimateIn from "./AnimateIn";

const featured = {
  image: "/images/freibadfest.jpg",
  title: "Auftakt in den Sommer",
  date: "Freitag, 10. Juli",
  location: "Freibadfest Hellmonsödt",
  note: "Nur bei Schönwetter",
  invite: "Ein Sommertag mit Musik, Sonne und guter Laune – kommt vorbei!",
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
    icon: "🎶",
    events: [
      { date: "Sa. 20. Juni", name: "Sonnwendfeuer" },
      { date: "So. 5. Juli", name: "Pfarrfest" },
      { date: "Fr. 10. Juli", name: "Auftakt in den Sommer – Freibadfest" },
      { date: "Sa. 1. August", name: "Hellmonsödter Marktfestchen" },
      { date: "So. 13. September", name: "Abschluss des Kindersommers & Herbstfest" },
      { date: "Sa. 10. Oktober", name: "Oktoberfest" },
      { date: "Sa. 21. November", name: "Herbstkonzert" },
    ],
  },
  {
    title: "Bewerb",
    color: "#cb6615",
    bg: "#fdf0e6",
    icon: "🏆",
    events: [
      { date: "Sa. 27. Juni", name: "Bezirksmusikfest Schenkenfelden – Marschwertung" },
      { date: "Sa. 7. November", name: "Konzertwertung" },
    ],
  },
  {
    title: "Kirchliche Feierlichkeiten",
    color: "#3d7a3a",
    bg: "#eaf3e9",
    icon: "⛪",
    events: [
      { date: "So. 20. September", name: "Jubelhochzeiten" },
      { date: "So. 27. September", name: "Erntedankfest" },
      { date: "So. 1. November", name: "Allerheiligen" },
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
              Kommende Veranstaltungen 2026
            </h2>
            <p className="text-[18px] text-[#575756] mt-2 max-w-[65ch]">
              Von Konzerten über Ausrückungen bis zu kirchlichen Festen – das ganze Jahr Musik in Hellmonsödt.
            </p>
            <p className="text-[28px] text-[#cb6615] font-[family-name:var(--font-birthstone-bounce)] mt-3">
              Kommt vorbei – wir spielen für euch!
            </p>
          </div>
        </AnimateIn>

        {/* Featured event */}
        <AnimateIn>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-16 flex flex-col lg:flex-row">
            {/* Poster */}
            <div className="lg:w-[360px] shrink-0">
              <Image
                src={featured.image}
                alt={featured.title}
                width={1414}
                height={2000}
                className="w-full h-auto"
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
                <p className="text-[17px] text-[#575756] italic mt-3 leading-snug">{featured.invite}</p>
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
          {categories.map(({ title, color, bg, icon, events }, i) => (
            <AnimateIn key={title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                <div
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold px-3 py-1 rounded-full mb-5"
                  style={{ background: bg, color }}
                >
                  <span>{icon}</span>
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
