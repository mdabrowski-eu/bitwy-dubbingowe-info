"use client";

import { useEffect, useState } from "react";
import type { ReactElement } from "react";

type EloEntry = {
  participant_id: string;
  name: string;
  elo: number;
  elo_min: number;
  elo_max: number;
  played: number;
  wins: number;
  losses: number;
  draws: number;
};

type RankEntry = {
  entry_id: string;
  name: string;
  points: number | null;
  total_score: number | null;
};

type Jam = {
  id: string;
  name: string;
  description: string | null;
  pairing_type: "team_1v1" | "team_ffa" | "participant_1v1" | "participant_ffa";
  ranking_method: "win_loss" | "raw_score";
  scoring_source: "peer" | "expert" | "mixed";
  rankings: RankEntry[];
};

type SeriesRoundJam = {
  id: string;
  name: string;
  ranking_method: "win_loss" | "raw_score";
  pairing_type: "team_1v1" | "team_ffa" | "participant_1v1" | "participant_ffa";
};

type SeriesRankEntry = {
  entity_id: string;
  name: string;
  is_team: boolean;
  total: number | null;
  rounds: Array<number | null>;
};

type SeriesEntry = {
  id: string;
  name: string;
  description: string | null;
  jams: SeriesRoundJam[];
  rankings: SeriesRankEntry[];
};

type LoadState =
  | { kind: "loading" }
  | { kind: "error" }
  | { kind: "ready"; jams: Jam[]; elo: EloEntry[]; series: SeriesEntry[] };

function formatNumber(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function medalFor(index: number): string | null {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return null;
}

export function LiveRankings({ apiUrl }: { apiUrl: string }): ReactElement {
  const [state, setState] = useState<LoadState>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      try {
        const [jamsRes, eloRes, seriesRes] = await Promise.all([
          fetch(`${apiUrl}/public/jams`, { cache: "no-store" }),
          fetch(`${apiUrl}/public/elo-ranking`, { cache: "no-store" }),
          fetch(`${apiUrl}/public/series`, { cache: "no-store" }),
        ]);
        if (!jamsRes.ok || !eloRes.ok || !seriesRes.ok) throw new Error("API error");
        const jamsJson = (await jamsRes.json()) as { data: Jam[] };
        const eloJson = (await eloRes.json()) as { data: EloEntry[] };
        const seriesJson = (await seriesRes.json()) as { data: SeriesEntry[] };
        if (!cancelled) {
          setState({
            kind: "ready",
            jams: jamsJson.data,
            elo: eloJson.data,
            series: seriesJson.data,
          });
        }
      } catch {
        if (!cancelled) setState({ kind: "error" });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [apiUrl]);

  if (state.kind === "loading") {
    return (
      <div className="mt-14 bg-paper border-[3px] border-ink shadow-stamp p-7 md:p-9">
        <p className="font-display font-extrabold text-lg uppercase tracking-wide animate-pulse">
          Ładowanie rankingów…
        </p>
      </div>
    );
  }

  if (state.kind === "error") {
    return (
      <div className="mt-14 bg-paper border-[3px] border-ink shadow-stamp p-7 md:p-9">
        <p className="font-display font-extrabold text-lg uppercase tracking-wide">
          Nie udało się pobrać rankingów.
        </p>
        <p className="mt-2 text-base text-ink/70">
          Odśwież stronę za chwilę — dane są pobierane na żywo z systemu
          rozgrywek.
        </p>
      </div>
    );
  }

  const { jams, elo, series } = state;

  return (
    <div className="mt-14 space-y-14">
      {/* === GRAND ELO RANKING === */}
      <section>
        <SectionHeading
          kicker="wszyscy uczestnicy"
          title="Ranking ELO"
          note="Uczestnicy zakończonych starć. Rating ELO zmienia się po każdym rozstrzygniętym pojedynku."
        />
        {elo.length === 0 ? (
          <EmptyCard text="Brak rozstrzygniętych starć — ELO pojawi się po pierwszych zakończonych pojedynkach." />
        ) : (
          <div className="bg-paper border-[3px] border-ink shadow-stamp overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-[3px] border-ink bg-mint text-left">
                  <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    #
                  </th>
                  <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em]">
                    Uczestnik
                  </th>
                  <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-right">
                    ELO
                  </th>
                  <th className="hidden md:table-cell px-3 md:px-4 py-3 font-display text-xs uppercase tracking-[0.2em] text-right">
                    Kariera
                  </th>
                  <th className="hidden md:table-cell px-3 md:px-4 py-3 font-display text-xs uppercase tracking-[0.2em] text-right">
                    Starcia
                  </th>
                  <th className="hidden md:table-cell px-3 md:px-4 py-3 font-display text-xs uppercase tracking-[0.2em] text-right">
                    Bilans
                  </th>
                </tr>
              </thead>
              <tbody>
                {elo.map((entry, index) => (
                  <tr
                    key={entry.participant_id}
                    className={`border-b-2 border-ink/15 last:border-b-0 ${index < 3 ? "bg-rose/10" : ""}`}
                  >
                    <td className="px-3 md:px-4 py-3 font-display font-extrabold">
                      {medalFor(index) ?? `#${index + 1}`}
                    </td>
                    <td className="px-3 md:px-4 py-3 font-body font-semibold text-ink break-words max-w-[220px] md:max-w-none">
                      {entry.name}
                    </td>
                    <td className="px-3 md:px-4 py-3 text-right font-display font-extrabold">
                      {entry.elo}
                    </td>
                    <td className="hidden md:table-cell px-3 md:px-4 py-3 text-right text-ink/70 font-body">
                      {entry.elo_min === entry.elo_max
                        ? `${entry.elo}`
                        : `${entry.elo_min}–${entry.elo_max}`}
                    </td>
                    <td className="hidden md:table-cell px-3 md:px-4 py-3 text-right text-ink/70 font-body">
                      {entry.played}
                    </td>
                    <td className="hidden md:table-cell px-3 md:px-4 py-3 text-right font-body">
                      <span className="text-ink font-semibold">{entry.wins}</span>
                      <span className="text-ink/50"> / </span>
                      <span className="text-ink font-semibold">{entry.losses}</span>
                      <span className="text-ink/50"> / </span>
                      <span className="text-ink font-semibold">{entry.draws}</span>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-ink/50">
                        W / L / D
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* === SERIES RANKINGS === */}
      {series
        .filter((s) => s.jams.length > 0 && s.rankings.length > 0)
        .map((s, seriesIndex) => {
          const accent = seriesIndex % 2 === 0 ? "bg-sky" : "bg-mint";
          const stamp = seriesIndex % 2 === 0 ? "shadow-stamp" : "shadow-stamp-rose";
          const isTeamSeries = s.jams.some((j) => j.pairing_type.startsWith("team"));
          return (
            <section key={s.id}>
              <SectionHeading
                kicker={isTeamSeries ? "rozgrywki sezonowe — drużyny" : "rozgrywki sezonowe — uczestnicy"}
                title={s.name}
                note="Suma punktów ze wszystkich zakończonych rund. Kolumny rund pokażą się po dodaniu kolejnych rund do rozgrywek."
              />
              <div className={`bg-paper border-[3px] border-ink ${stamp} overflow-x-auto`}>
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className={`border-b-[3px] border-ink ${accent} text-left`}>
                      <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        #
                      </th>
                      <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        {isTeamSeries ? "Drużyna" : "Uczestnik"}
                      </th>
                      {s.jams.map((j, i) => (
                        <th
                          key={j.id}
                          className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.15em] text-right"
                          title={`${j.name} (${j.ranking_method === "win_loss" ? "punkty" : "suma ocen"})`}
                        >
                          R{i + 1}
                        </th>
                      ))}
                      <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-right">
                        Suma
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.rankings.map((entry, index) => (
                      <tr
                        key={entry.entity_id}
                        className={`border-b-2 border-ink/15 last:border-b-0 ${index < 3 ? "bg-rose/10" : ""}`}
                      >
                        <td className="px-3 md:px-4 py-3 font-display font-extrabold">
                          {medalFor(index) ?? `#${index + 1}`}
                        </td>
                        <td className="px-3 md:px-4 py-3 font-body font-semibold text-ink break-words max-w-[220px] md:max-w-none">
                          {entry.name}
                        </td>
                        {entry.rounds.map((value, i) => (
                          <td
                            key={`${entry.entity_id}-${s.jams[i]?.id ?? i}`}
                            className={`px-3 md:px-4 py-3 text-right font-body ${
                              value == null ? "text-ink/40" : "text-ink/75"
                            }`}
                          >
                            {value == null ? "—" : formatNumber(value)}
                          </td>
                        ))}
                        <td className="px-3 md:px-4 py-3 text-right font-display font-extrabold">
                          {entry.total == null ? "—" : formatNumber(entry.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs md:text-sm text-ink/60 font-body">
                Każda runda wnosi swój decydujący wynik (punkty za zwycięstwa
                lub suma ocen); &bdquo;—&rdquo; oznacza rundę jeszcze nierozstrzygniętą.
              </p>
            </section>
          );
        })}

      {/* === JAM RANKINGS === */}
      {jams
        .filter((jam) => jam.rankings.length > 0)
        .map((jam, jamIndex) => {
          const isTeamJam = jam.pairing_type.startsWith("team_");
          const isWinLoss = jam.ranking_method === "win_loss";
          const accent = jamIndex % 2 === 0 ? "bg-mint" : "bg-rose/70";
          const stamp = jamIndex % 2 === 0 ? "shadow-stamp-rose" : "shadow-stamp-mint";
          return (
            <section key={jam.id}>
              <SectionHeading
                kicker={isTeamJam ? "turniej drużynowy" : "turniej indywidualny"}
                title={jam.name}
                note={
                  isWinLoss
                    ? "Punkty decydują o kolejności; suma ocen to dodatkowe małe punkty."
                    : "Kolejność wg sumy ocen."
                }
              />
              <div
                className={`bg-paper border-[3px] border-ink ${stamp} overflow-x-auto`}
              >
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className={`border-b-[3px] border-ink ${accent} text-left`}>
                      <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        #
                      </th>
                      <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        {isTeamJam ? "Drużyna" : "Uczestnik"}
                      </th>
                      <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-right">
                        {isWinLoss ? "Punkty" : "Suma ocen"}
                      </th>
                      {isWinLoss && (
                        <th className="px-3 md:px-4 py-3 font-display text-[10px] md:text-xs uppercase tracking-[0.2em] text-right">
                          Małe pkt
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {jam.rankings.map((entry, index) => (
                      <tr
                        key={entry.entry_id}
                        className={`border-b-2 border-ink/15 last:border-b-0 ${index < 3 ? "bg-rose/10" : ""}`}
                      >
                        <td className="px-3 md:px-4 py-3 font-display font-extrabold">
                          {medalFor(index) ?? `#${index + 1}`}
                        </td>
                        <td className="px-3 md:px-4 py-3 font-body font-semibold text-ink break-words max-w-[260px] md:max-w-none">
                          {entry.name}
                        </td>
                        <td className="px-3 md:px-4 py-3 text-right font-display font-extrabold">
                          {isWinLoss
                            ? entry.points === null
                              ? "—"
                              : formatNumber(entry.points)
                            : entry.total_score === null
                              ? "—"
                              : formatNumber(entry.total_score)}
                        </td>
                        {isWinLoss && (
                          <td className="px-3 md:px-4 py-3 text-right text-ink/70 font-body">
                            {entry.total_score === null
                              ? "—"
                              : formatNumber(entry.total_score)}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs md:text-sm text-ink/60 font-body">
                {isTeamJam ? "Drużyny" : "Uczestnicy"}, którzy jeszcze nie
                rozegrali zakończonych starć, widnieją na końcu listy (—).
              </p>
            </section>
          );
        })}

      {jams.every((jam) => jam.rankings.length === 0) && (
        <EmptyCard text="Brak turniejów z wynikami — rankingi pojawią się po pierwszych starciach." />
      )}
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  note,
}: {
  kicker: string;
  title: string;
  note: string;
}): ReactElement {
  return (
    <div className="mb-5">
      <span className="font-display text-[11px] tracking-[0.3em] uppercase text-ink/60">
        {kicker}
      </span>
      <h2 className="mt-2 font-display font-black text-2xl md:text-4xl leading-[0.95] tracking-tight text-ink">
        {title}
      </h2>
      <p className="mt-2 text-sm md:text-base text-ink/70">{note}</p>
    </div>
  );
}

function EmptyCard({ text }: { text: string }): ReactElement {
  return (
    <div className="bg-paper border-[3px] border-dashed border-ink/40 p-7 md:p-9 text-center">
      <p className="text-base md:text-lg text-ink/60 font-body">{text}</p>
    </div>
  );
}