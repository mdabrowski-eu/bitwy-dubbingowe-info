import Image from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const REGISTER_GENERAL_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKo_v0afexd4sp2gNguq2SAVLF3OHItEv4gEgs0hfv6UabnQ/viewform?usp=dialog";

type Tournament = {
  id: string;
  title: string;
  tagline: string;
  when: string;
  duration: string;
  format: string;
  judging: string;
  registerUrl: string | null;
  accent: "rose" | "mint";
};

const tournaments: Tournament[] = [
  {
    id: "piosenkowe",
    title: "Bitwy Piosenkowe",
    tagline: "Drużynowe projekty piosenkowe — trzy rundy, pełen sezon.",
    when: "Druga połowa lipca 2026",
    duration: "3 rundy × 2 miesiące, krótkie przerwy między rundami",
    format: "Drużynowe, do 7 osób w drużynie",
    judging: "Peer to peer (drużyny) + opcjonalni eksperci",
    registerUrl: null,
    accent: "rose",
  },
  {
    id: "aktorskie",
    title: "Bitwy Aktorskie",
    tagline: "One-shot dla aktorów — dwa tygodnie na nagrania, koniec dyskusji.",
    when: "Koniec czerwca 2026",
    duration: "Jedna runda, dwa tygodnie na nagrania",
    format: "Pojedynczy uczestnicy, aktorzy",
    judging: "Peer to peer + eksperci",
    registerUrl: null,
    accent: "mint",
  },
];

const tickerWords = [
  "PIOSENKI",
  "SCENKI",
  "WOKAL",
  "AKTORSTWO",
  "ILUSTRACJA",
  "DRUŻYNY",
  "POJEDYNCZE STARCIA",
  "PEER TO PEER",
  "EKSPERCI",
];

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col">
      {/* === NAV === */}
      <header className="px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-rose animate-pulse-glove" />
          <span className="font-display font-extrabold tracking-tight text-ink text-sm md:text-base uppercase">
            Bitwy Dubbingowe
          </span>
        </div>
        <a
          href="#turnieje"
          className="hidden md:inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.18em] text-ink/80 hover:text-rose transition-colors"
        >
          <span>↓ przewiń do turniejów</span>
        </a>
      </header>

      {/* === HERO === */}
      <section className="relative px-6 md:px-10 pt-10 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: type stack */}
          <div className="lg:col-span-7 relative">
            <div className="animate-rise" style={{ animationDelay: "0.05s" }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink text-paper font-display text-[10px] md:text-xs tracking-[0.22em] uppercase">
                <span className="w-2 h-2 bg-rose rounded-full" /> sezon 2026
              </span>
            </div>

            <h1 className="mt-6 font-display font-black leading-[0.82] tracking-[-0.03em] text-ink">
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[9rem] animate-rise"
                style={{ animationDelay: "0.15s" }}
              >
                BITWY
              </span>
              <span
                className="block text-[14vw] md:text-[10vw] lg:text-[9rem] outlined-text animate-rise"
                style={{ animationDelay: "0.3s" }}
              >
                DUBBINGOWE
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg md:text-xl leading-snug text-ink/85 animate-rise"
              style={{ animationDelay: "0.5s" }}
            >
              Konkurs, w którym{" "}
              <span className="font-accent italic text-rose text-2xl md:text-3xl">
                drużyny i pojedynczy uczestnicy
              </span>{" "}
              ścierają się tworząc projekty dubbingowe. Piosenki, scenki,
              wokal, aktorstwo, ilustracja — wszystko w jednym ringu.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4 items-center animate-rise"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href={REGISTER_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-stamp inline-flex items-center gap-3 bg-rose text-paper px-7 py-4 font-display font-extrabold uppercase tracking-wide text-base md:text-lg border-[3px] border-ink shadow-stamp"
              >
                <span>Zapisz się na bitwy</span>
                <span aria-hidden className="text-xl">→</span>
              </a>
              <span className="text-sm md:text-base text-ink/70 max-w-[260px] leading-tight">
                Rejestracja ogólna — wymagana przed zapisem na konkretny turniej.
              </span>
            </div>
          </div>

          {/* Right: mascot + decorations */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* halftone disc behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full halftone opacity-50" />
            </div>
            {/* mint blob */}
            <div className="absolute -z-0 right-2 top-6 w-44 h-44 md:w-56 md:h-56 rounded-full bg-mint blur-[1px] opacity-90 mix-blend-multiply" />
            {/* spinning sticker */}
            <div className="absolute -top-6 -left-2 md:top-2 md:-left-2 z-20 animate-spin-slow">
              <SpinningSticker />
            </div>
            {/* mascot */}
            <div className="relative z-10 animate-wobble">
              <Image
                src={`${BASE_PATH}/mascot.png`}
                alt="Maskotka Bitew Dubbingowych — postać w rękawicach bokserskich"
                width={520}
                height={640}
                priority
                className="drop-shadow-[12px_14px_0_rgba(1,1,14,0.85)] select-none"
              />
            </div>
          </div>
        </div>

        {/* corner stars */}
        <span className="absolute top-24 right-8 hidden md:block text-rose text-3xl rotate-12 select-none">✦</span>
        <span className="absolute bottom-6 left-12 hidden md:block text-ink text-2xl -rotate-6 select-none">✺</span>
      </section>

      {/* === MARQUEE === */}
      <section className="relative border-y-[3px] border-ink bg-ink text-paper overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-4 font-display font-extrabold tracking-[0.12em] text-2xl md:text-3xl uppercase">
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 items-center">
              {tickerWords.map((w, j) => (
                <span key={`${i}-${j}`} className="flex items-center">
                  <span className="px-6">{w}</span>
                  <span className="text-rose">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* === O KONKURSIE === */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="font-display text-[11px] tracking-[0.3em] uppercase text-ink/60">
              ❶ O konkursie
            </span>
            <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl leading-[0.95] tracking-tight">
              Co to <span className="font-accent italic font-normal text-rose">właściwie</span> jest?
            </h2>
          </div>
          <div className="md:col-span-8 text-lg md:text-xl leading-relaxed text-ink/85 space-y-5">
            <p>
              <strong className="font-display font-extrabold">Bitwy Dubbingowe</strong> to konkurs, w którym
              biorą udział drużyny i pojedynczy uczestnicy — i ścierają się ze sobą tworząc projekty
              dubbingowe.
            </p>
            <p>
              W obrębie bitew odbywają się różne turnieje, ukierunkowane do różnych grup: drużyn
              przygotowujących projekty piosenkowe, drużyn przygotowujących projekty scenkowe i
              aktorskie, wokalistów, aktorów oraz ilustratorów.
            </p>
            <div className="pt-4 flex flex-wrap gap-2 font-display text-xs uppercase tracking-wider">
              {["piosenki", "scenki", "wokal", "aktorstwo", "ilustracja"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-paper border-[2px] border-ink rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === TURNIEJE === */}
      <section
        id="turnieje"
        className="relative px-6 md:px-10 py-20 md:py-28 bg-mint border-y-[3px] border-ink"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="font-display text-[11px] tracking-[0.3em] uppercase text-ink/70">
                ❷ Nadchodzące turnieje
              </span>
              <h2 className="mt-3 font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tight">
                Wybierz <span className="font-accent italic font-normal">swój</span> ring.
              </h2>
            </div>
            <p className="max-w-md text-base md:text-lg text-ink/80">
              Każdy turniej ma własny format, harmonogram i sposób oceniania. Najpierw rejestracja
              ogólna, potem zapis na konkretny turniej.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tournaments.map((t, idx) => (
              <TournamentCard key={t.id} tournament={t} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* === FOOTER CTA === */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.92] tracking-tight">
            Gotowy/a na <span className="outlined-text">ring</span>?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-ink/80">
            Zapisz się na bitwy ogólnie — to klucz, który otwiera wszystkie kolejne turnieje sezonu.
          </p>
          <a
            href={REGISTER_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-stamp mt-10 inline-flex items-center gap-3 bg-ink text-paper px-8 py-5 font-display font-extrabold uppercase tracking-wider text-lg md:text-xl border-[3px] border-ink shadow-stamp-rose"
          >
            <span>Rejestracja ogólna</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-10 border-t-[3px] border-ink bg-ink text-paper">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-display font-extrabold text-sm uppercase tracking-[0.2em]">
            Bitwy Dubbingowe · Sezon 2026
          </div>
          <div className="text-xs md:text-sm text-paper/70 font-body">
            Strona informacyjna · Polska scena dubbingowa
          </div>
        </div>
      </footer>
    </main>
  );
}

function TournamentCard({
  tournament,
  index,
}: {
  tournament: Tournament;
  index: number;
}) {
  const accentBg = tournament.accent === "rose" ? "bg-rose" : "bg-sky";
  const accentText = tournament.accent === "rose" ? "text-paper" : "text-ink";
  const stamp =
    tournament.accent === "rose" ? "shadow-stamp" : "shadow-stamp-rose";
  return (
    <article
      className={`relative bg-paper border-[3px] border-ink ${stamp} p-7 md:p-9 flex flex-col gap-6`}
    >
      {/* corner badge */}
      <div className="absolute -top-5 -right-5 rotate-6">
        <div
          className={`px-4 py-2 ${accentBg} ${accentText} border-[3px] border-ink font-display text-xs uppercase tracking-wider`}
        >
          turniej {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <header>
        <h3 className="font-display font-black text-3xl md:text-4xl leading-[0.95] tracking-tight">
          {tournament.title}
        </h3>
        <p className="mt-3 font-accent italic text-xl md:text-2xl text-ink/85">
          {tournament.tagline}
        </p>
      </header>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
        <Spec label="Termin" value={tournament.when} />
        <Spec label="Czas trwania" value={tournament.duration} />
        <Spec label="Format" value={tournament.format} />
        <Spec label="Ocenianie" value={tournament.judging} />
      </dl>

      <div className="mt-auto pt-2">
        {tournament.registerUrl ? (
          <a
            href={tournament.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-stamp inline-flex items-center gap-3 ${accentBg} ${accentText} px-6 py-4 font-display font-extrabold uppercase tracking-wide text-base border-[3px] border-ink shadow-stamp w-full justify-center`}
          >
            <span>Zapisz się — {tournament.title}</span>
            <span aria-hidden>→</span>
          </a>
        ) : (
          <div className="inline-flex items-center gap-3 bg-paper text-ink/70 px-6 py-4 font-display font-extrabold uppercase tracking-wide text-base border-[3px] border-dashed border-ink/40 w-full justify-center">
            <span>Link rejestracyjny — wkrótce</span>
            <span aria-hidden>···</span>
          </div>
        )}
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t-[2px] border-ink pt-2">
      <dt className="font-display text-[10px] uppercase tracking-[0.2em] text-ink/60">
        {label}
      </dt>
      <dd className="mt-1 font-body font-medium text-ink leading-snug">{value}</dd>
    </div>
  );
}

function SpinningSticker() {
  return (
    <svg
      viewBox="0 0 200 200"
      width="120"
      height="120"
      className="md:w-[150px] md:h-[150px]"
      aria-hidden
    >
      <defs>
        <path
          id="circlePath"
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
      </defs>
      <circle cx="100" cy="100" r="92" fill="#01010e" />
      <circle cx="100" cy="100" r="58" fill="#cf5284" />
      <text fill="#ffffff" fontFamily="var(--font-display), sans-serif" fontWeight="800" fontSize="18" letterSpacing="4">
        <textPath href="#circlePath" startOffset="0">
          BITWY · DUBBINGOWE · SEZON 2026 ·
        </textPath>
      </text>
      <text x="100" y="108" textAnchor="middle" fill="#ffffff" fontFamily="var(--font-display), sans-serif" fontWeight="900" fontSize="22">
        ✦
      </text>
    </svg>
  );
}
