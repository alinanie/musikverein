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

function getNextUpcomingEvent(): string | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.isoDate);
    return eventDate >= today;
  });

  if (upcomingEvents.length === 0) return null;
  return upcomingEvents[0].isoDate;
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
              const nextEvent = getNextUpcomingEvent();
              const isNextEvent = nextEvent === event.isoDate;
              const daysUntil = isNextEvent ? useDaysUntil(event.isoDate) : null;

              return (
                <li key={event.isoDate}>
                  {isNextEvent ? (
                    /* Highlighted card for next event */
                    <div className="bg-[#00628e] text-white rounded-lg p-6 mb-4">
                      <div className="flex items-center gap-2 mb-3 text-[14px]">
                        <span className="text-[18px]">→</span>
                        <span className="font-semibold">Nur noch {daysUntil} {daysUntil === 1 ? "Tag" : "Tage"}</span>
                      </div>
                      <div className="mb-3">
                        <p className="text-[13px] opacity-90 mb-1">{event.date}</p>
                        <p className="text-[20px] font-bold leading-snug">{event.name}</p>
                      </div>
                      {event.time && (
                        <p className="text-[14px] opacity-90 mb-1">{event.time}</p>
                      )}
                      {event.location && (
                        <p className="text-[14px] opacity-90">{event.location}</p>
                      )}
                    </div>
                  ) : (
                    /* Regular event row */
                    <div className="flex flex-col gap-2 py-4 border-b border-[#d0dde8]">
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

                      {event.time && (
                        <div className="text-[14px] text-[#575756]">
                          <p><span className="font-medium">Uhrzeit:</span> {event.time}</p>
                        </div>
                      )}
                      {event.location && (
                        <div className="text-[14px] text-[#575756]">
                          <p><span className="font-medium">Ort:</span> {event.location}</p>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </AnimateIn>

      </div>
    </section>
  );
}
