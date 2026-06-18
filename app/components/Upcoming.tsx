"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { useEffect, useState } from "react";

const featuredMeta = {
  image: "/images/freibadfest.jpg",
  note: "Nur bei Schönwetter",
  admission: "Eintritt frei ab 15:00 Uhr",
  details: [
    { label: "Wann",   value: "Freitag, 10. Juli" },
    { label: "Wo",     value: "Freibad Hellmonsödt" },
    { label: "Beginn", value: "ab 15:00 Uhr" },
    { label: "Was",    value: "Weinbar, Dämmerschoppen, DJ" },
  ],
  targetDate: new Date("2026-07-10"),
};

const events = [
  { date: "20. Juni, Samstag",      isoDate: "2026-06-20", name: "Sonnwendfeuer" },
  { date: "27. Juni, Samstag",      isoDate: "2026-06-27", name: "Bezirksmusikfest Schenkenfelden – Marschwertung" },
  { date: "5. Juli, Sonntag",       isoDate: "2026-07-05", name: "Pfarrfest" },
  { date: "10. Juli, Freitag",      isoDate: "2026-07-10", name: "Auftakt in den Sommer – Freibadfest", featured: true },
  { date: "1. August, Samstag",     isoDate: "2026-08-01", name: "Hellmonsödter Marktfestchen" },
  { date: "13. September, Sonntag", isoDate: "2026-09-13", name: "Abschluss des Kindersommers & Herbstfest" },
  { date: "20. September, Sonntag", isoDate: "2026-09-20", name: "Jubelhochzeiten" },
  { date: "27. September, Sonntag", isoDate: "2026-09-27", name: "Erntedankfest" },
  { date: "10. Oktober, Samstag",   isoDate: "2026-10-10", name: "Oktoberfest" },
  { date: "1. November, Sonntag",   isoDate: "2026-11-01", name: "Allerheiligen" },
  { date: "7. November, Samstag",   isoDate: "2026-11-07", name: "Konzertwertung" },
  { date: "21. November, Samstag",  isoDate: "2026-11-21", name: "Herbstkonzert" },
];

function isPast(isoDate: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(isoDate) < today;
}

function useCountdown(targetDate: Date) {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    calc();
    const id = setInterval(calc, 60000);
    return () => clearInterval(id);
  }, [targetDate]);
  return days;
}

export default function Upcoming() {
  const daysLeft = useCountdown(featuredMeta.targetDate);
  const countdownBg = daysLeft !== null && daysLeft <= 7 ? "#c0392b" : "#3d8a3a";

  return (
    <section className="bg-[#e6eff7] py-16 min-[720px]:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <AnimateIn>
          <div className="mb-12">
            <h2 className="text-[40px] min-[720px]:text-[48px] font-bold text-[#252525] font-[family-name:var(--font-palanquin)]">
              Unser Programm 2026
            </h2>
            <p className="text-[16px] text-[#575756] mt-2 max-w-[70ch]">
              Konzerte, musikalische Begleitung, kirchliche Feierlichkeiten und natürlich unsere Teilnahme an Bewerben. Hier sind alle aktuellen Termine des Musikvereins Hellmonsödt auf einen Blick.
            </p>
          </div>
        </AnimateIn>

        {/* Main layout: poster left, event list right */}
        <AnimateIn>
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Poster column */}
            <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0 flex flex-col gap-3">
              <Image
                src={featuredMeta.image}
                alt="Auftakt in den Sommer – Freibadfest"
                width={1414}
                height={2000}
                className="w-full h-auto rounded-2xl shadow-md"
                priority
              />
              <span className="inline-flex items-center justify-center gap-1.5 text-[13px] font-medium text-[#575756] bg-white px-3 py-1.5 rounded-full shadow-sm">
                ⛅ {featuredMeta.note}
              </span>
            </div>

            {/* Event list */}
            <div className="flex-1 min-w-0">
              <ul>
                {events.map((event) => {
                  const past = isPast(event.isoDate);
                  const featured = event.featured;

                  return (
                    <li key={event.isoDate}>
                      {/* Countdown badge above featured event */}
                      {featured && daysLeft !== null && (
                        <div className="mb-3 mt-1">
                          <span
                            className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-4 py-1.5 rounded-full"
                            style={{ background: countdownBg }}
                          >
                            {daysLeft > 0 ? `Nur noch ${daysLeft} Tage` : "Heute ist es soweit!"}
                          </span>
                        </div>
                      )}

                      {/* Event row */}
                      <div
                        className={`flex gap-4 items-baseline py-3 border-b border-[#d0dde8] ${
                          past ? "opacity-35" : ""
                        }`}
                      >
                        <span
                          className={`text-[14px] shrink-0 w-44 ${
                            featured
                              ? "text-[#cb6615] font-semibold"
                              : past
                              ? "line-through text-[#9ba8b4]"
                              : "text-[#575756]"
                          }`}
                        >
                          {event.date}
                        </span>
                        <span
                          className={`text-[15px] font-bold leading-snug ${
                            featured
                              ? "text-[#cb6615] text-[18px]"
                              : past
                              ? "line-through text-[#9ba8b4]"
                              : "text-[#252525]"
                          }`}
                        >
                          {event.name}
                        </span>
                      </div>

                      {/* Featured event detail card */}
                      {featured && (
                        <div className="bg-white rounded-2xl p-5 mt-3 mb-4 shadow-sm">
                          <table className="text-[15px] w-full mb-4">
                            <tbody>
                              {featuredMeta.details.map(({ label, value }) => (
                                <tr key={label} className="align-top">
                                  <td className="text-[#575756] pr-5 pb-3 whitespace-nowrap">{label}</td>
                                  <td className="font-bold text-[#252525] pb-3">{value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white bg-[#3d8a3a] px-3 py-1.5 rounded-full">
                            <TicketIcon />
                            {featuredMeta.admission}
                          </span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

function TicketIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      <path d="M13 5v2M13 17v2M13 11v2"/>
    </svg>
  );
}
