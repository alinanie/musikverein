import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – Musikverein Hellmonsödt",
};

export default function Datenschutz() {
  return (
    <main className="bg-[#fff8f0] min-h-screen pt-[105px] pb-24">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#00628e] font-semibold text-[15px] mb-10 hover:underline"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-[48px] font-bold text-[#252525] mb-2 font-[family-name:var(--font-palanquin)]">
          Datenschutzerklärung
        </h1>
        <p className="text-[15px] text-[#575756] mb-12">Zuletzt aktualisiert: April 2026</p>

        <div className="flex flex-col gap-10 text-[#252525]">

          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">1. Verantwortlicher</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
            </p>
            <p className="text-[17px] leading-relaxed text-[#575756] mt-3">
              Musikverein Hellmonsödt<br />
              Marktplatz 1<br />
              4202 Hellmonsödt<br />
              E-Mail:{" "}
              <a href="mailto:mvhellmonsoedt@gmail.com" className="text-[#00628e] hover:underline">
                mvhellmonsoedt@gmail.com
              </a>
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* 2. Hosting */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">2. Hosting</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Beim Abrufen der Website werden durch Vercel automatisch sogenannte Server-Logfiles erfasst. Dazu gehören unter anderem IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs sowie die aufgerufene Seite.
            </p>
            <p className="text-[17px] leading-relaxed text-[#575756] mt-4">
              Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs gespeichert und nicht mit anderen Daten zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am stabilen Betrieb der Website).
            </p>
            <p className="text-[17px] leading-relaxed text-[#575756] mt-4">
              Weitere Informationen finden sich in der{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#00628e] hover:underline">
                Datenschutzerklärung von Vercel
              </a>.
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* 3. Keine Cookies */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">3. Keine Cookies, kein Tracking</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Diese Website verwendet keine Cookies und setzt kein Tracking oder Analytics ein. Es werden keine Nutzungsprofile erstellt und keine Daten an Drittanbieter für Werbe- oder Analysezwecke weitergegeben.
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* 4. Schriftarten */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">4. Schriftarten</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Diese Website verwendet Schriftarten (Fonts), die beim Erstellen der Website lokal eingebunden wurden. Es werden dabei keine Verbindungen zu externen Servern (z. B. Google) hergestellt.
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* 5. Kontakt per E-Mail */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">5. Kontakt per E-Mail</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten (Ihre E-Mail-Adresse sowie der Inhalt Ihrer Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* 6. Ihre Rechte */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">6. Ihre Rechte</h2>
            <p className="text-[17px] leading-relaxed text-[#575756] mb-4">
              Sie haben nach der DSGVO folgende Rechte gegenüber uns:
            </p>
            <ul className="flex flex-col gap-2 text-[17px] text-[#575756]">
              <li className="flex items-start gap-2">
                <span className="text-[#00628e] font-bold mt-0.5">–</span>
                Auskunft über Ihre gespeicherten Daten (Art. 15)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00628e] font-bold mt-0.5">–</span>
                Berichtigung unrichtiger Daten (Art. 16)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00628e] font-bold mt-0.5">–</span>
                Löschung Ihrer Daten (Art. 17)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00628e] font-bold mt-0.5">–</span>
                Einschränkung der Verarbeitung (Art. 18)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00628e] font-bold mt-0.5">–</span>
                Widerspruch gegen die Verarbeitung (Art. 21)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00628e] font-bold mt-0.5">–</span>
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </li>
            </ul>
            <p className="text-[17px] leading-relaxed text-[#575756] mt-4">
              Zuständige Aufsichtsbehörde in Österreich ist die{" "}
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#00628e] hover:underline">
                Datenschutzbehörde (www.dsb.gv.at)
              </a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
