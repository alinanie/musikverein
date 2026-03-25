import Image from "next/image";

export default function Join() {
  return (
    <section id="mitmachen" className="bg-[#00628e] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: text */}
          <div className="flex-1 max-w-[600px]">
            <h2 className="text-[48px] font-bold text-white mb-6 font-[family-name:var(--font-palanquin)]">
              Wir haben noch Plätze frei!
            </h2>
            <p className="text-[18px] text-white/90 leading-relaxed mb-10">
              Egal ob Anfänger, Wiedereinsteiger oder erfahrene Musikerin – bei
              uns ist jede und jeder willkommen. Wir bieten ein motivierendes
              Umfeld, professionelle musikalische Leitung und eine unschlagbare
              Kameradschaft!
            </p>

            {/* Info cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <ClockIcon />
                  <h3 className="text-[18px] font-bold text-white">Proben jeden Freitag</h3>
                </div>
                <p className="text-[16px] text-white/80">19:30 – 21:15 Uhr · Wir freuen uns auf dich!</p>
              </div>
              <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <PinIcon />
                  <h3 className="text-[18px] font-bold text-white">Probenlokal</h3>
                </div>
                <p className="text-[16px] text-white/80">Im Obergeschoss des Gemeindeamtes Hellmonsödt</p>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="flex-1 w-full max-w-[500px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/mitmachen.jpg"
                alt="Musikverein Mitmachen"
                width={500}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.2499 2.94593C9.43889 2.45344 10.7132 2.19995 12.0002 2.19995C13.2871 2.19995 14.5615 2.45344 15.7505 2.94593C16.9395 3.43843 18.0198 4.16029 18.9298 5.0703C19.8399 5.98032 20.5617 7.06066 21.0542 8.24965C21.5467 9.43864 21.8002 10.713 21.8002 12C21.8002 13.2869 21.5467 14.5613 21.0542 15.7502C20.5617 16.9392 19.8399 18.0196 18.9298 18.9296C18.0198 19.8396 16.9395 20.5615 15.7505 21.054C14.5615 21.5465 13.2871 21.7999 12.0002 21.7999C10.7132 21.7999 9.43889 21.5465 8.2499 21.054C7.06091 20.5615 5.98056 19.8396 5.07055 18.9296C4.16053 18.0196 3.43867 16.9392 2.94618 15.7502C2.45368 14.5613 2.2002 13.2869 2.2002 12C2.2002 10.713 2.45368 9.43864 2.94618 8.24965C3.43867 7.06066 4.16053 5.98032 5.07055 5.0703C5.98056 4.16029 7.06091 3.43843 8.2499 2.94593ZM12.0002 3.79995C10.9234 3.79995 9.85706 4.01205 8.86219 4.42414C7.86732 4.83623 6.96336 5.44024 6.20192 6.20168C5.44048 6.96312 4.83647 7.86708 4.42438 8.86195C4.01229 9.85682 3.8002 10.9231 3.8002 12C3.8002 13.0768 4.01229 14.1431 4.42438 15.138C4.83647 16.1328 5.44048 17.0368 6.20192 17.7982C6.96336 18.5597 7.86732 19.1637 8.86219 19.5758C9.85706 19.9879 10.9234 20.2 12.0002 20.2C13.077 20.2 14.1433 19.9879 15.1382 19.5758C16.1331 19.1637 17.037 18.5597 17.7985 17.7982C18.5599 17.0368 19.1639 16.1328 19.576 15.138C19.9881 14.1431 20.2002 13.0768 20.2002 12C20.2002 10.9231 19.9881 9.85682 19.576 8.86195C19.1639 7.86708 18.5599 6.96312 17.7985 6.20168C17.037 5.44024 16.1331 4.83623 15.1382 4.42414C14.1433 4.01205 13.077 3.79995 12.0002 3.79995ZM12.0002 6.19995C12.442 6.19995 12.8002 6.55812 12.8002 6.99995V11.5718L15.444 13.3343C15.8116 13.5794 15.9109 14.0761 15.6658 14.4437C15.4208 14.8113 14.9241 14.9107 14.5564 14.6656L11.5564 12.6656C11.3339 12.5172 11.2002 12.2674 11.2002 12V6.99995C11.2002 6.55812 11.5584 6.19995 12.0002 6.19995Z" fill="white"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <g clipPath="url(#pin-clip)">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.249 13.41C19.044 11.8005 19.5 10.293 19.5 9C19.5 7.01088 18.7098 5.10322 17.3033 3.6967C15.8968 2.29018 13.9891 1.5 12 1.5C10.0109 1.5 8.10322 2.29018 6.6967 3.6967C5.29018 5.10322 4.5 7.01088 4.5 9C4.5 10.293 4.9575 11.8005 5.751 13.41C6.537 15.003 7.602 16.59 8.691 18.015C9.72403 19.3584 10.8286 20.6453 12 21.87L12.312 21.54C13.368 20.4147 14.3682 19.2382 15.309 18.015C16.398 16.59 17.463 15.003 18.249 13.41ZM12 24C12 24 21 15.471 21 9C21 6.61305 20.0518 4.32387 18.364 2.63604C16.6761 0.948211 14.3869 0 12 0C9.61305 0 7.32387 0.948211 5.63604 2.63604C3.94821 4.32387 3 6.61305 3 9C3 15.471 12 24 12 24Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM12 13.5C13.1935 13.5 14.3381 13.0259 15.182 12.182C16.0259 11.3381 16.5 10.1935 16.5 9C16.5 7.80653 16.0259 6.66193 15.182 5.81802C14.3381 4.97411 13.1935 4.5 12 4.5C10.8065 4.5 9.66193 4.97411 8.81802 5.81802C7.97411 6.66193 7.5 7.80653 7.5 9C7.5 10.1935 7.97411 11.3381 8.81802 12.182C9.66193 13.0259 10.8065 13.5 12 13.5Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="pin-clip">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
