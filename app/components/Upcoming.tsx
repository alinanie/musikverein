"use client";
import Image from "next/image";
import AnimateIn from "./AnimateIn";
import { useEffect, useState } from "react";

const featuredMeta = {
  image: "/images/martkfestchen.png",
  note: "Marktplatz Hellmonsödt",
  admission: "Live-Musik mit Richard Darian ab 20:30 Uhr",
  details: [
    { label: "Wann",   value: "Samstag, 1. August" },
    { label: "Wo",     value: "Marktplatz Hellmonsödt" },
    { label: "Beginn", value: "ab 17:00 Uhr" },
    { label: "Was",    value: "Essen & Trinken, Dämmerschoppen, Live-Musik" },
  ],
  targetDate: new Date("2026-08-01"),
};

const events = [
  { date: "20. Juni, Samstag",      isoDate: "2026-06-20", name: "Sonnwendfeuer" },
  { date: "27. Juni, Samstag",      isoDate: "2026-06-27", name: "Bezirksmusikfest Schenkenfelden – Marschwertung" },
  { date: "5. Juli, Sonntag",       isoDate: "2026-07-05", name: "Pfarrfest" },
  { date: "10. Juli, Freitag",      isoDate: "2026-07-10", name: "Auftakt in den Sommer – Freibadfest" },
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
  return (
    <section className="bg-[#f0e5d4] py-16 min-[720px]:py-24">
      <div className="max-w-5xl mx-auto px-6">

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

        {/* Event list */}
        <AnimateIn>
          <ul>
            {events.map((event) => {
              const past = isPast(event.isoDate);

              if (event.featured) {
                return (
                  <li key={event.isoDate}>
                    {/* Connected poster + detail cards */}
                    <div className="my-6 flex flex-col sm:flex-row items-stretch gap-0">

                      {/* Poster card */}
                      <div className="bg-white rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-bl-2xl shadow-sm sm:w-[220px] xl:w-[260px] shrink-0 flex flex-col overflow-hidden">
                        <Image
                          src={featuredMeta.image}
                          alt="Hellmonsödter Marktfestchen"
                          width={1587}
                          height={2245}
                          className="w-full h-auto"
                          priority
                        />
                        <div className="flex items-center justify-center gap-1.5 py-3 px-4 text-[13px] text-[#575756] font-medium">
                          📍 {featuredMeta.note}
                        </div>
                      </div>

                      {/* Detail card */}
                      <div className="bg-white rounded-bl-2xl rounded-br-2xl sm:rounded-bl-none sm:rounded-tr-2xl shadow-sm flex-1 p-6 flex flex-col gap-4 border-t sm:border-t-0 sm:border-l border-[#e8f0f5]">
                        {/* Countdown */}
                        {daysLeft !== null && (
                          <div>
                            <span
                              className="inline-flex items-center text-[13px] font-bold text-white px-4 py-1.5 rounded-full"
                              style={{ background: countdownBg }}
                            >
                              {daysLeft > 0 ? `Nur noch ${daysLeft} Tage` : "Heute ist es soweit!"}
                            </span>
                          </div>
                        )}

                        {/* Title */}
                        <div>
                          <p className="text-[22px] font-bold text-[#cb6615] leading-snug">
                            Hellmonsödter Marktfestchen
                          </p>
                        </div>

                        {/* Info table */}
                        <table className="text-[15px] w-full">
                          <tbody>
                            {featuredMeta.details.map(({ label, value }) => (
                              <tr key={label} className="align-top">
                                <td className="text-[#575756] pr-5 pb-3 whitespace-nowrap">{label}</td>
                                <td className="font-bold text-[#252525] pb-3">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* Admission */}
                        <span className="inline-flex items-center gap-2 self-start text-[13px] font-semibold text-white bg-[#3d8a3a] px-3 py-1.5 rounded-full">
                          <TicketIcon />
                          {featuredMeta.admission}
                        </span>
                      </div>

                    </div>
                  </li>
                );
              }

              // Normal event row
              return (
                <li key={event.isoDate}>
                  <div
                    className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3 border-b border-[#d0dde8] ${
                      past ? "opacity-70" : ""
                    }`}
                  >
                    <span
                      className={`text-[14px] sm:shrink-0 sm:w-44 ${
                        past ? "text-[#9ba8b4]" : "text-[#575756]"
                      }`}
                    >
                      {event.date}
                    </span>
                    <span
                      className={`text-[15px] font-bold leading-snug ${
                        past ? "text-[#9ba8b4]" : "text-[#252525]"
                      }`}
                    >
                      {event.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
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
