import type { Metadata } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import { LiveRankings } from "./live-rankings";

const JAMS_API_URL =
  "https://vuvfr50kfk.execute-api.eu-central-1.amazonaws.com/prod";

export const metadata: Metadata = {
  title: "Rankingi — Bitwy Dubbingowe",
  description:
    "Rankingi Bitew Dubbingowych: ranking ELO uczestników oraz rankingi turniejów (drużyn i uczestników), na żywo z systemu rozgrywek.",
};

export default function RankingiPage(): ReactElement {
  return (
    <main className="relative z-10 flex flex-col min-h-screen">
      <PageHeader />

      <article className="px-6 md:px-10 py-14 md:py-20 max-w-[1100px] mx-auto w-full">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose text-paper font-display text-[10px] md:text-xs tracking-[0.22em] uppercase">
            <span className="w-2 h-2 bg-paper rounded-full" /> rankingi
          </span>
        </div>

        <h1 className="font-display font-black text-4xl md:text-6xl leading-[0.9] tracking-tight text-ink">
          Tabela <span className="outlined-text">wyników</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/80 leading-snug">
          Rankingi liczone na żywo z systemu rozgrywek: ranking ELO
          uczestników oraz wyniki poszczególnych turniejów.{" "}
          <span className="font-accent italic text-rose text-xl md:text-2xl">
            ELO rośnie tylko po zakończonych starciach.
          </span>
        </p>

        <LiveRankings apiUrl={JAMS_API_URL} />
      </article>

      <PageFooter />
    </main>
  );
}

function PageHeader(): ReactElement {
  return (
    <header className="px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between gap-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-display font-extrabold text-xs md:text-sm uppercase tracking-[0.18em] text-ink/80 hover:text-rose transition-colors"
      >
        <span>← Strona główna</span>
      </Link>
    </header>
  );
}

function PageFooter(): ReactElement {
  return (
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
  );
}