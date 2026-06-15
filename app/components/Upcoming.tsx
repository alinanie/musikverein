"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { useEffect, useState } from "react";

const featured = {
  image: "/images/freibadfest.jpg",
  title: "AufTakt in den Sommer",
  date: "Freitag, 10. Juli",
  location: "Freibad Hellmonsödt",
  start: "ab 15:00 Uhr",
  program: ["Weinbar", "Dämmerschoppen", "DJ"],
  targetDate: new Date("2026-07-10"),
};

const leftCategories = [
  {
    title: "Auftritte",
    pillBg: "#4caf72",
    events: [
      { date: "20. Juni, Samstag", name: "Sonnwendfeuer" },
      { date: "5. Juli, Sonntag", name: "Pfarrfest" },
      { date: "10. Juli, Freitag", name: "Auftakt in den Sommer – Freibadfest" },
      { date: "1. August, Samstag", name: "Hellmonsödter Marktfestchen" },
      { date: "13. September, Sonntag", name: "Abschluss des Kindersommers & Herbstfest" },
      { date: "10. Oktober, Samstag", name: "Oktoberfest" },
      { date: "21. November, Samstag", name: "Herbstkonzert" },
    ],
  },
  {
    title: "Bewerbe",
    pillBg: "#cb6615",
    events: [
      { date: "27. Juni, Samstag", name: "Bezirksmusikfest Schenkenfelden – Marschwertung" },
      { date: "7. November, Samstag", name: "Konzertwertung" },
    ],
  },
];

const rightCategories = [
  {
    title: "Kirchliche Feierlichkeiten",
    pillBg: "#7c6bc9",
    events: [
      { date: "20. September, Sonntag", name: "Jubelhochzeiten" },
      { date: "27. September, Sonntag", name: "Erntedankfest" },
      { date: "1. November, Sonntag", name: "Allerheiligen" },
    ],
  },
];

function useCountdown(targetDate: Date) {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, [targetDate]);
  return days;
}

function CategoryBlock({
  title,
  pillBg,
  events,
}: {
  title: string;
  pillBg: string;
  events: { date: string; name: string }[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-[13px] font-bold text-white px-3 py-1 rounded-full whitespace-nowrap shrink-0"
          style={{ background: pillBg }}
        >
          {title}
        </span>
        <div className="flex-1 border-t-2 border-dashed border-[#c4d4e0]" />
      </div>
      <ul className="flex flex-col gap-3">
        {events.map(({ date, name }) => (
          <li key={date + name} className="grid grid-cols-2 gap-2 items-start">
            <span className="text-[13px] text-[#575756] leading-snug">{date}</span>
            <span className="text-[14px] font-bold text-[#252525] leading-snug">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Upcoming() {
  const daysLeft = useCountdown(featured.targetDate);

  return (
    <section className="bg-[#e6eff7] py-16 min-[720px]:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <AnimateIn>
          <div className="mb-12">
            <h2 className="text-[40px] min-[720px]:text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)]">
              Unser Musikprogramm 2026
            </h2>
            <p className="text-[16px] text-[#575756] mt-2 max-w-[70ch]">
              Konzerte, musikalische Begleitung, kirchliche Feierlichkeiten und natürlich unsere Teilnahme an Bewerben.<br />
              Hier sind alle aktuellen Termine des Musikvereins Hellmonsödt auf einen Blick.
            </p>
          </div>
        </AnimateIn>

        {/* Main grid: featured card + event categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Featured event card */}
          <AnimateIn>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <CalendarIcon />
                <h3 className="text-[30px] text-[#cb6615] font-[family-name:var(--font-birthstone-bounce)]">
                  {featured.title}
                </h3>
              </div>

              {/* Poster + details */}
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Poster */}
                <div className="sm:w-[180px] shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={1414}
                    height={2000}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Info + countdown */}
                <div className="flex flex-col flex-1 gap-5">
                  <table className="text-[15px] w-full">
                    <tbody>
                      {[
                        { label: "Wann", value: featured.date },
                        { label: "Wo", value: featured.location },
                        { label: "Beginn", value: featured.start },
                        { label: "Was", value: featured.program.join(", ") },
                      ].map(({ label, value }) => (
                        <tr key={label} className="align-top">
                          <td className="text-[#575756] pr-5 pb-3 whitespace-nowrap">{label}</td>
                          <td className="font-bold text-[#252525] pb-3">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Countdown */}
                  {daysLeft !== null && (
                    <div className="bg-[#cb6615] rounded-2xl p-5 text-white text-center">
                      {daysLeft > 0 ? (
                        <>
                          <p className="text-[11px] font-bold uppercase tracking-widest opacity-75 mb-1">Nur noch</p>
                          <p className="text-[44px] font-bold leading-none">{daysLeft} Tage</p>
                        </>
                      ) : (
                        <p className="text-[24px] font-bold">Heute ist es soweit!</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Weitere Veranstaltungen */}
          <AnimateIn delay={100}>
            <div>
              <h3 className="text-[22px] font-bold text-[#252525] mb-6 font-[family-name:var(--font-palanquin)]">
                Weitere Veranstaltungen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {/* Left: Auftritte + Bewerbe */}
                <div className="flex flex-col gap-8">
                  {leftCategories.map((cat) => (
                    <CategoryBlock key={cat.title} {...cat} />
                  ))}
                </div>
                {/* Right: Kirchliche */}
                <div className="flex flex-col gap-8">
                  {rightCategories.map((cat) => (
                    <CategoryBlock key={cat.title} {...cat} />
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00628e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
