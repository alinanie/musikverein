"use client";
import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";

const events = [
  { date: "20. Juni, Samstag",      isoDate: "2026-06-20", name: "Sonnwendfeuer" },
  { date: "27. Juni, Samstag",      isoDate: "2026-06-27", name: "Bezirksmusikfest Schenkenfelden – Marschwertung" },
  { date: "5. Juli, Sonntag",       isoDate: "2026-07-05", name: "Pfarrfest" },
  { date: "10. Juli, Freitag",      isoDate: "2026-07-10", name: "Auftakt in den Sommer – Freibadfest" },
  { date: "1. August, Samstag",     isoDate: "2026-08-01", name: "Hellmonsödter Marktfestchen" },
  {
    date: "13. September, Sonntag",
    isoDate: "2026-09-13",
    name: "Abschluss des Kindersommers & Herbstfest",
    time: "14:00 bis 18:00 Uhr",
    location: "Ort der Begegnung, Kloster Hellmonsödt, Hofstätte 25, 4202 Hellmonsödt"
  },
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

function useDaysUntil(isoDate: string): number | null {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(isoDate);
    const diff = eventDate.getTime() - today.getTime();
    setDays(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [isoDate]);

  return days;
}

export default function Upcoming() {
  return (
    <section id="veranstaltungen" className="bg-[#f0e5d4] py-16 min-[720px]:py-24">
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
              const daysUntil = useDaysUntil(event.isoDate);

              return (
                <li key={event.isoDate}>
                  <div
                    className={`flex flex-col gap-2 py-4 border-b border-[#d0dde8] ${
                      past ? "opacity-70" : ""
                    } ${!past ? "sm:pl-32" : ""}`}
                  >
                    {/* Countdown + arrow for upcoming events */}
                    {!past && daysUntil !== null && (
                      <div className="flex items-center gap-2 text-[13px]">
                        <span className={`font-semibold ${daysUntil <= 7 ? "text-[#c41e3a]" : "text-[#00628e]"}`}>
                          Nur noch {daysUntil} {daysUntil === 1 ? "Tag" : "Tage"}
                        </span>
                        <span className="text-[#00628e]">→</span>
                      </div>
                    )}

                    {/* Date and name */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
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

                    {/* Additional info */}
                    {event.time && (
                      <div className="text-[14px] text-[#575756] ml-0 sm:ml-0">
                        <p><span className="font-medium">Uhrzeit:</span> {event.time}</p>
                      </div>
                    )}
                    {event.location && (
                      <div className="text-[14px] text-[#575756]">
                        <p><span className="font-medium">Ort:</span> {event.location}</p>
                      </div>
                    )}
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
