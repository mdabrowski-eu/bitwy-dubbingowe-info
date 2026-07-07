import type { Metadata } from "next";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

const MATERIALS_URL =
  "https://drive.google.com/drive/folders/1AdkPBh7WEa2CZ-ZCT9xvtxKjyZJmErM_?usp=sharing";

const SUBMIT_URL = "https://forms.gle/Gb1kn4mWVZvC9j6fA";

const DEADLINE = "24.07";

const REGULATION_URL = "/regulamin/bitwy-aktorskie-czerwiec-2026";

type Scene = {
  number: string;
  title: string;
  accent: "rose" | "mint" | "sky";
};

const scenes: Scene[] = [
  { number: "01", title: "K-pop Demon Hunters", accent: "rose" },
  { number: "02", title: "Zwierzogród 2", accent: "mint" },
  { number: "03", title: "Which Hat Atelier", accent: "sky" },
];

type ChildrenProps = {
  children: ReactNode;
};

type SectionProps = ChildrenProps & {
  number: string;
  title: string;
};

type FormatCardProps = ChildrenProps & {
  label: string;
  title: string;
  accent: "rose" | "mint";
};

export const metadata: Metadata = {
  title: "Jak nagrywać — Bitwy Aktorskie Czerwiec 2026 — Bitwy Dubbingowe",
  description:
    "Przewodnik praktyczny po Bitwach Aktorskich Czerwiec 2026: wybór scenki i postaci, materiały, co oceniamy oraz jak oddać nagranie (wideo lub mp3).",
};

export default function PrzewodnikAktorskie(): ReactElement {
  return (
    <main className="relative z-10 flex flex-col min-h-screen">
      <PageHeader />

      <article className="px-6 md:px-10 py-14 md:py-20 max-w-[980px] mx-auto w-full">
        <Intro />

        <div className="mt-16 md:mt-24 space-y-20 md:space-y-28">
          <ScenesSection />
          <MaterialsSection />
          <JudgingSection />
          <FormatSection />
          <ReaperSection />
          <SubmitSection />
        </div>

        <FooterLinks />
      </article>

      <PageFooter />
    </main>
  );
}

function Intro(): ReactElement {
  return (
    <>
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink text-paper font-display text-[10px] md:text-xs tracking-[0.22em] uppercase">
          <span className="w-2 h-2 bg-rose rounded-full" /> przewodnik praktyczny
        </span>
      </div>

      <h1 className="font-display font-black text-4xl md:text-6xl leading-[0.9] tracking-tight text-ink">
        Jak przygotować <span className="outlined-text">nagranie</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/80 font-accent italic">
        Wybierasz scenkę, wybierasz postać, nagrywasz. Reszta to konkretne
        wskazówki — co przygotować i w jakim formacie oddać.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm md:text-base text-ink/85">
        <IntroStat value="3" label="scenki do wyboru" />
        <IntroStat value="1" label="postać do nagrania" />
        <IntroStat value="wideo / mp3" label="format oddania" />
        <IntroStat value={DEADLINE} label="termin oddania" />
      </div>
    </>
  );
}

function IntroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}): ReactElement {
  return (
    <div className="bg-paper border-[3px] border-ink shadow-stamp px-4 py-4">
      <div className="font-display font-black text-3xl md:text-4xl leading-none text-rose">
        {value}
      </div>
      <div className="mt-2 font-display text-[10px] uppercase tracking-[0.2em] text-ink/70">
        {label}
      </div>
    </div>
  );
}

function ScenesSection(): ReactElement {
  return (
    <Section number="1" title="Wybierz scenkę i postać">
      <p className="max-w-2xl">
        Do wyboru są trzy scenki. Wybierasz jedną z nich, a w niej jedną postać
        — i to właśnie ją nagrywasz. Nie musisz nagrywać całej obsady ani łączyć
        postaci z różnych scenek.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {scenes.map((scene) => (
          <SceneCard key={scene.number} scene={scene} />
        ))}
      </div>
    </Section>
  );
}

function SceneCard({ scene }: { scene: Scene }): ReactElement {
  const accentBg =
    scene.accent === "rose"
      ? "bg-rose"
      : scene.accent === "mint"
        ? "bg-mint"
        : "bg-sky";
  const accentText = scene.accent === "rose" ? "text-paper" : "text-ink";

  return (
    <article className="relative bg-paper border-[3px] border-ink shadow-stamp p-6 flex flex-col gap-4 min-h-[180px]">
      <span
        className={`inline-flex w-fit items-center px-3 py-1 ${accentBg} ${accentText} border-[2px] border-ink font-display font-extrabold text-[11px] uppercase tracking-[0.18em]`}
      >
        scenka {scene.number}
      </span>
      <h3 className="flex flex-1 items-center font-display font-black text-2xl leading-[0.95] tracking-tight text-ink">
        {scene.title}
      </h3>
      <p className="font-display text-[10px] uppercase tracking-[0.2em] text-ink/60">
        wybierz jedną postać
      </p>
    </article>
  );
}

function MaterialsSection(): ReactElement {
  return (
    <section className="relative bg-ink text-paper border-[3px] border-ink shadow-stamp-rose p-7 md:p-10">
      <span className="font-display text-[11px] tracking-[0.3em] uppercase text-paper/60">
        Materiały
      </span>
      <h2 className="mt-3 font-display font-black text-3xl md:text-4xl leading-[0.95] tracking-tight">
        Wszystko w <span className="font-accent italic font-normal text-mint">jednym</span> folderze
      </h2>
      <p className="mt-4 max-w-xl text-base md:text-lg text-paper/85 leading-relaxed">
        Scenki, obraz i pliki do nagrań znajdziesz pod jednym linkiem. Stamtąd
        pobierasz to, czego potrzebujesz do swojej postaci.
      </p>
      <a
        href={MATERIALS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-stamp mt-7 inline-flex items-center gap-3 bg-mint text-ink px-7 py-4 font-display font-extrabold uppercase tracking-wide text-base md:text-lg border-[3px] border-paper shadow-stamp"
      >
        <span>Otwórz materiały</span>
        <span aria-hidden>↗</span>
      </a>
    </section>
  );
}

function JudgingSection(): ReactElement {
  return (
    <Section number="2" title="Co oceniamy">
      <p className="max-w-2xl">
        Przede wszystkim liczą się{" "}
        <strong className="font-display font-extrabold">
          umiejętności aktorskie
        </strong>
        . Nie wymagamy miksu ani dodatkowej obróbki dźwięku — nie o to tu chodzi.
      </p>
      <p className="mt-4 max-w-2xl">
        Nagranie musi być jednak czytelne. Podstawy techniki nagraniowej —
        wyraźny głos, sensowne poziomy głośności, brak przeszkadzających szumów —
        mogą być brane pod uwagę przy ocenie.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="border-l-[3px] border-rose pl-4 py-1">
          <h3 className="font-display font-extrabold text-lg text-ink">
            Skupiasz się na
          </h3>
          <p className="mt-1">Grze aktorskiej, interpretacji i pracy głosem.</p>
        </div>
        <div className="border-l-[3px] border-ink/30 pl-4 py-1">
          <h3 className="font-display font-extrabold text-lg text-ink">
            Nie musisz robić
          </h3>
          <p className="mt-1">
            Miksu, masteringu ani efektów — wystarczy czytelne nagranie.
          </p>
        </div>
      </div>
    </Section>
  );
}

function FormatSection(): ReactElement {
  return (
    <Section number="3" title="Jak oddać nagranie">
      <p className="max-w-2xl">
        Nagranie możesz oddać na dwa sposoby. Wybierz ten, który jest dla Ciebie
        wygodniejszy.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <FormatCard label="Opcja A" title="Złożone wideo" accent="rose">
          Gotowy obraz wideo z podłożonym Twoim nagraniem. Wszystko już
          zsynchronizowane z obrazem.
        </FormatCard>
        <FormatCard label="Opcja B" title="Nagranie mp3" accent="mint">
          Sam dźwięk w formacie mp3 — bez obrazu. Wygodne, jeśli nie chcesz
          składać wideo.
        </FormatCard>
      </div>

      <div className="mt-8 relative bg-paper border-[3px] border-ink shadow-stamp p-6 md:p-7">
        <div className="absolute -top-4 left-6 px-3 py-1 bg-rose text-paper font-display text-[10px] uppercase tracking-[0.22em]">
          Ważne przy mp3
        </div>
        <p className="mt-2">
          Nagranie mp3 musi być{" "}
          <strong className="font-display font-extrabold">
            wyeksportowane od początku scenki
          </strong>
          . Innymi słowy: jeśli podłożymy Twoje mp3 pod obraz, kwestie powinny
          trafić dokładnie tam, gdzie mówi Twoja postać. Nie przycinaj ciszy na
          początku — od niej zależy synchronizacja.
        </p>
      </div>
    </Section>
  );
}

function FormatCard({
  label,
  title,
  accent,
  children,
}: FormatCardProps): ReactElement {
  const stamp = accent === "rose" ? "shadow-stamp" : "shadow-stamp-mint";
  const dot = accent === "rose" ? "bg-rose" : "bg-mint";
  return (
    <article className={`bg-paper border-[3px] border-ink ${stamp} p-6 flex flex-col gap-3`}>
      <span className="inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.22em] text-ink/60">
        <span className={`w-2 h-2 ${dot} rounded-full`} />
        {label}
      </span>
      <h3 className="font-display font-black text-2xl leading-[0.95] tracking-tight text-ink">
        {title}
      </h3>
      <p>{children}</p>
    </article>
  );
}

function ReaperSection(): ReactElement {
  return (
    <Section number="4" title="Projekt Reaper ">
      <p className="max-w-2xl">
        W materiałach znajdziesz gotowe pliki{" "}
        <strong className="font-display font-extrabold">Reapera</strong>. Możesz
        użyć ich do nagrań — obraz i ścieżki są już poukładane, więc nie musisz
        niczego ustawiać od zera.
      </p>
      <p className="mt-4 max-w-2xl">
        Reaper pozwala też wygodnie wyeksportować złożone wideo, jeśli
        zdecydujesz się oddać nagranie w tej formie.
      </p>
    </Section>
  );
}

function SubmitSection(): ReactElement {
  return (
    <Section number="5" title="Wyślij nagranie">
      <p className="max-w-2xl">
        Gotowe nagranie oddajesz przez formularz zgłoszeniowy. Wgrywasz tam swój
        plik — złożone wideo albo mp3 wyeksportowane od początku scenki.
      </p>

      <div className="mt-8 relative bg-ink text-paper border-[3px] border-ink shadow-stamp-rose p-7 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-display text-[11px] tracking-[0.3em] uppercase text-paper/60">
              Termin oddania
            </span>
            <div className="mt-2 font-display font-black text-5xl md:text-6xl leading-none text-rose">
              {DEADLINE}
            </div>
            <p className="mt-4 text-base md:text-lg text-paper/85 leading-relaxed">
              Nagrania oddane po tym terminie nie trafiają do rankingu. Nie zostawiaj wysyłki na ostatnią
              chwilę.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href={SUBMIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-stamp inline-flex items-center gap-3 bg-rose text-paper px-7 py-4 font-display font-extrabold uppercase tracking-wide text-base md:text-lg border-[3px] border-paper shadow-stamp"
            >
              <span>Wyślij nagranie</span>
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Section({ number, title, children }: SectionProps): ReactElement {
  return (
    <section>
      <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-ink mb-5">
        <span className="text-rose mr-2">{number}.</span>
        {title}
      </h2>
      <div className="text-base md:text-lg leading-relaxed text-ink/90">
        {children}
      </div>
    </section>
  );
}

function FooterLinks(): ReactElement {
  return (
    <div className="mt-20 md:mt-28 border-t-[3px] border-ink pt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
      <p className="text-base md:text-lg text-ink/80">
        Szukasz zasad turnieju, punktacji i terminów?
      </p>
      <Link
        href={REGULATION_URL}
        className="btn-stamp inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 font-display font-extrabold uppercase tracking-wide text-sm md:text-base border-[3px] border-ink shadow-stamp-rose w-fit"
      >
        <span>Czytaj regulamin</span>
        <span aria-hidden>→</span>
      </Link>
    </div>
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
      <Link
        href={REGULATION_URL}
        className="inline-flex items-center gap-2 font-display font-extrabold text-xs md:text-sm uppercase tracking-[0.18em] text-ink/80 hover:text-rose transition-colors"
      >
        <span>Regulamin →</span>
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
