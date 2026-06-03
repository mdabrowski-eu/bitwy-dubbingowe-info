import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulamin Bitew Piosenkowych 2026 — Bitwy Dubbingowe",
  description:
    "Regulamin turnieju Bitwy Piosenkowe 2026. Format drużynowy, trzy rundy, peer to peer + eksperci.",
};

export default function RegulaminPiosenkowe() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen">
      <header className="px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display font-extrabold text-xs md:text-sm uppercase tracking-[0.18em] text-ink/80 hover:text-rose transition-colors"
        >
          <span>← Strona główna</span>
        </Link>
      </header>

      <article className="px-6 md:px-10 py-14 md:py-20 max-w-[900px] mx-auto w-full">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose text-paper font-display text-[10px] md:text-xs tracking-[0.22em] uppercase">
            <span className="w-2 h-2 bg-paper rounded-full" /> regulamin
          </span>
        </div>

        <h1 className="font-display font-black text-4xl md:text-6xl leading-[0.9] tracking-tight text-ink">
          Regulamin Bitew <span className="outlined-text">Piosenkowych</span> 2026
        </h1>

        <p className="mt-6 text-lg md:text-xl text-ink/80 font-accent italic">
          Sezon 2026 · Drużynowe · 3 rundy po 2 miesiące
        </p>

        <div className="mt-14 space-y-14 text-base md:text-lg leading-relaxed text-ink/90">
          <Section number="1" title="Postanowienia ogólne">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Bitwy Piosenkowe to turniej drużynowy organizowany w ramach Bitew Dubbingowych.
              </li>
              <li>
                Organizatorem turnieju jest grupa NanoKarrin.
              </li>
              <li>
                Turniej rozpoczyna się w drugiej połowie lipca 2026 r.
              </li>
              <li>
                Rejestracja ogólna na Bitwy Dubbingowe jest wymagana przed zapisem na turniej.
              </li>
            </ol>
          </Section>

          <Section number="2" title="Format turnieju">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Turniej składa się z 3 rund, każda trwająca 2 miesiące.
              </li>
              <li>
                Między rundami przewidziane są krótkie przerwy.
              </li>
              <li>
                Drużyna może liczyć do 7 osób.
              </li>
              <li>
                W każdej rundzie drużyny przygotowują projekt piosenkowy (dubbing piosenki).
              </li>
            </ol>
          </Section>

          <Section number="3" title="Ocenianie">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Ocenianie odbywa się w systemie peer to peer — drużyny oceniają się nawzajem.
              </li>
              <li>
                Opcjonalnie zapraszani są eksperci, których oceny mogą stanowić dodatkowy komponent punktacji.
              </li>
              <li>
                Szczegółowe kryteria oceniania zostaną opublikowane przed rozpoczęciem pierwszej rundy.
              </li>
            </ol>
          </Section>

          <Section number="4" title="Rejestracja i wymagania">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Warunkiem uczestnictwa jest rejestracja ogólna na Bitwy Dubbingowe oraz zapis na turniej Bitew Piosenkowych.
              </li>
              <li>
                Każdy uczestnik drużyny musi być zarejestrowany indywidualnie.
              </li>
              <li>
                Jedna osoba może być członkiem tylko jednej drużyny w danym sezonie.
              </li>
            </ol>
          </Section>

          <Section number="5" title="Postanowienia końcowe">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Organizator zastrzega sobie prawo do zmiany regulaminu. Zmiany będą komunikowane z odpowiednim wyprzedzeniem.
              </li>
              <li>
                W sprawach nieobjętych regulaminem decyduje organizator.
              </li>
              <li>
                Udział w turnieju oznacza akceptację niniejszego regulaminu.
              </li>
            </ol>
          </Section>
        </div>
      </article>

      <footer className="mt-auto px-6 md:px-10 py-10 border-t-[3px] border-ink bg-ink text-paper">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-display font-extrabold text-sm uppercase tracking-[0.2em]">
            Bitwy Dubbingowe · Sezon 2026
          </div>
          <div className="text-xs md:text-sm text-paper/70 font-body">
            NanoKarrin
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-ink mb-5">
        <span className="text-rose mr-2">§{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
