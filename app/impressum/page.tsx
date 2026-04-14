import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Musikverein Hellmonsödt",
};

export default function Impressum() {
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

        <h1 className="text-[48px] font-bold text-[#252525] mb-12 font-[family-name:var(--font-palanquin)]">
          Impressum
        </h1>

        <div className="flex flex-col gap-10 text-[#252525]">

          {/* Angaben */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">Angaben gemäß § 25 MedienG</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Musikverein Hellmonsödt<br />
              Marktplatz 1<br />
              4202 Hellmonsödt<br />
              Österreich
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* Kontakt */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">Kontakt</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              E-Mail:{" "}
              <a href="mailto:mvhellmonsoedt@gmail.com" className="text-[#00628e] hover:underline">
                mvhellmonsoedt@gmail.com
              </a>
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* Vereinszweck */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">Vereinszweck</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Der Musikverein Hellmonsödt ist ein gemeinnütziger Verein mit dem Zweck der Pflege und Förderung der Blasmusik sowie der Musikkultur in der Gemeinde Hellmonsödt und der Region.
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">Haftungsausschluss</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den gesetzlichen Vorschriften für eigene Inhalte auf diesen Seiten verantwortlich.
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* Externe Links */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">Haftung für Links</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <hr className="border-[#e8ddd0]" />

          {/* Urheberrecht */}
          <section>
            <h2 className="text-[22px] font-bold mb-3 font-[family-name:var(--font-palanquin)]">Urheberrecht</h2>
            <p className="text-[17px] leading-relaxed text-[#575756]">
              Die durch den Betreiber dieser Seite erstellten Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
