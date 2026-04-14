import Image from "next/image";

export default function Youth() {
  return (
    <section className="relative overflow-hidden py-16" style={{ backgroundColor: "#F0AA72" }}>
      {/* Wave background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/klanghelden-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left: illustration */}
          <div className="flex-1 flex justify-center lg:justify-start max-w-[480px]">
            <Image
              src="/images/klanghelden-illustration.png"
              alt="Kinder spielen Instrumente"
              width={480}
              height={420}
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* Right: text */}
          <div className="flex-1 max-w-[520px] text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block bg-[#E8758A] text-white text-[14px] font-semibold px-5 py-1.5 rounded-full mb-5">
              Jugend
            </div>

            {/* Headline */}
            <h2 className="text-[42px] font-bold text-[#1a1a1a] leading-tight mb-5 font-[family-name:var(--font-palanquin)]">
              Klangheld:in gesucht!
            </h2>

            {/* Body */}
            <p className="text-[17px] text-[#1a1a1a] leading-relaxed mb-4">
              Du bist jung, neugierig und liebst Musik? Die Klanghelden des
              Musikvereins Hellmonsödt bieten dir die perfekte Bühne – lerne ein
              Instrument, finde neue Freunde und werde Teil unserer Musikfamilie.
            </p>

            <p className="text-[17px] text-[#1a1a1a] mb-6">
              Schreibe uns auf Instagram!
            </p>

            {/* Instagram card */}
            <a
              href="https://www.instagram.com/klanghelden_mvh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <InstagramGradientIcon />
              <div className="text-left">
                <p className="text-[11px] font-semibold text-[#888] tracking-widest uppercase">Instagram</p>
                <p className="text-[17px] font-bold text-[#1a1a1a]">@klanghelden_mvh</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function InstagramGradientIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="44" height="44" rx="12" fill="url(#ig-grad)" />
      <rect x="11" y="11" width="22" height="22" rx="6" stroke="white" strokeWidth="2.2" fill="none" />
      <circle cx="22" cy="22" r="5.5" stroke="white" strokeWidth="2.2" fill="none" />
      <circle cx="29" cy="15" r="1.4" fill="white" />
    </svg>
  );
}
