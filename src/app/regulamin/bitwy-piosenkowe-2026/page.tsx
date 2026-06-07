import type { Metadata } from "next";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

const REGISTER_GENERAL_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKo_v0afexd4sp2gNguq2SAVLF3OHItEv4gEgs0hfv6UabnQ/viewform?usp=dialog";

const REGISTER_TEAM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfUNzFCykkbJ1kY39fGWB0P_V4navsLoMf9iMd--TMVXHn3zQ/viewform?usp=dialog";

const scoringCategories = [
  {
    name: "Wokal",
    points: "10 punktów",
    description: "Technika, intonacja, barwa, interpretacja i wiele innych.",
  },
  {
    name: "Realizacja dźwięku",
    points: "10 punktów",
    description: "Między innymi balans głośności, miks i master.",
  },
  {
    name: "Tekst",
    points: "10 punktów",
    description:
      "Śpiewalność, sens i tłumaczenie. Istnienie tej kategorii sugeruje, że drużyny powinny przygotowywać własne teksty. Zwykle jest to tłumaczenie, ale może to być także tekst autorski.",
  },
  {
    name: "Realizacja obrazu",
    points: "10 punktów",
    description:
      "Zarówno ilustracje, jeśli zostały przygotowane, jak i montaż oraz animacja.",
  },
  {
    name: "Wrażenie",
    points: "20 punktów",
    description: "Czysto subiektywny odbiór projektu.",
  },
];

type RegulationSectionData = {
  number: string;
  title: string;
  content: ReactNode;
};

type SectionProps = {
  number: string;
  title: string;
  children: ReactNode;
};

type ChildrenProps = {
  children: ReactNode;
};

type IntroDetailProps = ChildrenProps & {
  label: string;
};

type ExternalLinkProps = ChildrenProps & {
  href: string;
};

type PenaltyProps = {
  title: string;
  description?: string;
  penalties: string[];
};

type AwardProps = ChildrenProps & {
  title: string;
};

const regulationSections: RegulationSectionData[] = [
  {
    number: "1",
    title: "O co tu chodzi?",
    content: (
      <div className="space-y-4">
        <p>
          Bitwy Piosenkowe to konkurs, w którym ścierają się drużyny złożone z
          jednej do siedmiu osób. W każdej rundzie drużyny są parowane i
          przygotowują dubbingowy projekt muzyczny na zadany temat.
        </p>
        <p>
          Po zakończeniu pracy nad projektami drużyny oceniają wszystkie inne
          drużyny zgodnie z rozpiską punktacji, czyli przyznają tzw. małe
          punkty. Na podstawie tej punktacji w każdej parze wyłaniany jest
          zwycięzca, który otrzymuje jeden punkt w klasyfikacji generalnej
          turnieju, czyli tzw. duży punkt.
        </p>
        <p>
          Drużyna, która po trzech rundach zdobędzie najwięcej dużych punktów,
          wygrywa turniej. Remisy na pierwszym miejscu rozstrzygane są sumą
          małych punktów ze wszystkich rund.
        </p>
      </div>
    ),
  },
  {
    number: "2",
    title: "Duch bitew",
    content: (
      <div className="space-y-4">
        <p>
          Bitwy to miejsce, w którym można poznać nowych ludzi, nauczyć się
          nowych umiejętności, rozwinąć te stare i stworzyć świetne projekty.
          Niezależnie od tego, czy zależy Ci bardziej na wygranej, czy na nauce,
          pamiętaj o najważniejszym: bądź fair i szanuj innych zawodników.
        </p>
        <p>
          Bitwy to projekt społecznościowy i będzie tak dobry, jak społeczność,
          która go tworzy.
        </p>
      </div>
    ),
  },
  {
    number: "3",
    title: "Zapisy na bitwy",
    content: (
      <div className="space-y-4">
        <p>
          Każdy uczestnik musi zarejestrować się w{" "}
          <ExternalLink href={REGISTER_GENERAL_URL}>
            ogólnym rejestrze bitwowym
          </ExternalLink>
          . Rejestr jest używany pomiędzy różnymi turniejami, więc wystarczy
          zapisać się w nim raz.
        </p>
        <p>
          Ponieważ ten turniej jest drużynowy, aby wziąć w nim udział, trzeba
          zostać{" "}
          <ExternalLink href={REGISTER_TEAM_URL}>
            zgłoszonym jako część drużyny w formularzu zgłoszeniowym
          </ExternalLink>
          . Drużynę zgłasza lider, a jej członkowie będą musieli później
          potwierdzić organizatorom faktyczną chęć udziału.
        </p>
        <p>
          Wszyscy członkowie drużyny muszą być wcześniej zarejestrowani w
          ogólnym rejestrze. W jednym turnieju można być tylko w jednej
          drużynie.
        </p>
      </div>
    ),
  },
  {
    number: "4",
    title: "Organizacja rundy",
    content: (
      <div className="space-y-7">
        <div className="space-y-3">
          <SubsectionTitle>Przed rundą</SubsectionTitle>
          <p>
            Przed każdą rundą organizatorzy publikują terminy wszystkich
            ważnych wydarzeń, przede wszystkim datę rozpoczęcia i zakończenia
            rundy. Publikują też temat obowiązujący w danej rundzie oraz
            parowanie drużyn.
          </p>
        </div>
        <div className="space-y-3">
          <SubsectionTitle>Prace nad projektami</SubsectionTitle>
          <p>
            Drużyny pracują nad projektami od momentu ogłoszenia tematu i
            parowań, aż do upłynięcia terminu oddawania projektów. Oddają
            projekt w sposób opisany przez organizatora.
          </p>
          <p>
            Drużyny muszą także oddać skrót projektu, trwający od 15 do 30
            sekund, sformatowany pod media społecznościowe: YouTube Shorts,
            Instagram Reels lub TikTok.
          </p>
        </div>
        <div className="space-y-3">
          <SubsectionTitle>Po terminie oddania projektów</SubsectionTitle>
          <p>
            Organizatorzy udostępniają wszystkim drużynom i ekspertom projekty
            oddane w danej rundzie do oceny. Wyznaczają też termin oddania ocen
            i feedbacków, zwykle około dwóch tygodni od terminu oddania
            projektów.
          </p>
        </div>
        <div className="space-y-3">
          <SubsectionTitle>Zakończenie rundy</SubsectionTitle>
          <p>
            Organizatorzy podczas streama publikują podsumowane wyniki i
            klasyfikację generalną turnieju. Stream jest też okazją dla
            reprezentantów drużyn, aby wypowiedzieć się zarówno na temat swojego
            projektu, jak i projektów innych drużyn. Udział w streamie jest
            opcjonalny.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "5",
    title: "Punktacja",
    content: (
      <div className="space-y-5">
        <p>
          Każdy projekt jest oceniany w pięciu kategoriach. Wszystkie oceny są
          subiektywne, podobnie jak interpretacja tego, co powinno być oceniane
          w każdej kategorii. Opisy kategorii celowo pozostają dość ogólne, aby
          nie wymuszać jednej interpretacji.
        </p>
        <div className="grid gap-4">
          {scoringCategories.map((category) => (
            <div
              key={category.name}
              className="border-l-[3px] border-rose pl-4 py-1"
            >
              <h3 className="font-display font-extrabold text-xl text-ink">
                {category.name}:{" "}
                <span className="text-rose">{category.points}</span>
              </h3>
              <p className="mt-1">{category.description}</p>
            </div>
          ))}
        </div>
        <p className="font-display font-extrabold text-xl text-ink">
          W sumie można zdobyć 60 punktów.
        </p>
        <p>
          Organizatorzy nie zamierzają wnikać w merytoryczność ocen, ale
          rezerwują sobie prawo do udzielenia ostrzeżenia lub usunięcia drużyny
          z turnieju, jeśli zaobserwują wyraźną złą wolę przy ocenianiu.
        </p>
      </div>
    ),
  },
  {
    number: "6",
    title: "Feedback",
    content: (
      <div className="space-y-4">
        <p>
          Oprócz punktacji każda drużyna powinna dostarczyć wyjaśnienie swojej
          oceny i feedback. Nie ma konkretnych zasad dotyczących struktury ani
          formy feedbacku, ale warto się do niego przykładać.
        </p>
        <p>
          Feedback jest uzasadnieniem oceny i może rozwiązać wiele
          nieporozumień, a także stanowi cenne źródło informacji dla drużyny o
          tym, co może poprawić.
        </p>
        <p>
          Organizatorzy nie zamierzają oceniać feedbacku, ale rezerwują sobie
          prawo do udzielenia ostrzeżenia lub usunięcia drużyny z turnieju,
          jeśli zaobserwują wyraźną złą wolę przy jego pisaniu.
        </p>
      </div>
    ),
  },
  {
    number: "7",
    title: "Małe i duże punkty",
    content: (
      <div className="space-y-4">
        <p>
          Oceny wystawiane przez drużyny, a opcjonalnie także przez ekspertów,
          to tzw. małe punkty. Służą przede wszystkim wyłonieniu zwycięzcy w
          parze i dają drużynie wymierny feedback. Mogą też służyć do
          rozstrzygania remisów w klasyfikacji generalnej oraz wyłaniania
          zwycięzców w dodatkowych kategoriach.
        </p>
        <p>
          Oceny od drużyn są uśredniane średnią ważoną tak, aby najbardziej
          skrajne oceny miały mniejsze znaczenie. Dla zainteresowanych
          matematyką szczegóły znajdują się w załączniku „Średnia ważona”.
        </p>
        <p>
          Oceny od drużyn i oceny ekspertów, jeśli eksperci są obecni, są
          następnie uśredniane zwykłą średnią arytmetyczną.
        </p>
        <p>
          W każdej parze na podstawie małych punktów wyłaniany jest zwycięzca.
          Dostaje on jeden duży punkt w klasyfikacji generalnej turnieju. W
          przypadku remisu obie drużyny z pary dostają po pół punktu.
        </p>
        <p>
          Na koniec turnieju, jeśli wystąpi remis, rozstrzyga się go sumą małych
          punktów ze wszystkich rund.
        </p>
      </div>
    ),
  },
  {
    number: "8",
    title: "Materiały niestworzone przez drużynę",
    content: (
      <div className="space-y-4">
        <p>
          Rzadko który projekt jest tworzony zupełnie od podstaw. Używanie
          gotowych materiałów jest dozwolone pod dwoma warunkami:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Drużyna, oddając projekt, notuje wszystkie użyte materiały, aby
            oceniający wiedzieli, co zostało wykonane przez nią, a co nie.
          </li>
          <li>
            Materiały nie mogły powstać specjalnie na potrzeby tej bitwy, np.
            ilustracje nie mogły zostać zamówione u artysty na potrzeby tego
            projektu.
          </li>
        </ol>
        <p>
          Używanie materiałów niestworzonych przez drużynę może prowadzić do
          obniżonej punktacji, jeśli oceniający uzna, że nie ma czego ocenić,
          np. gdy tekst został stworzony wcześniej, a więc nie ma czego ocenić w
          kategorii „tekst”.
        </p>
      </div>
    ),
  },
  {
    number: "9",
    title: "Korzystanie z generatywnego AI",
    content: (
      <div className="space-y-4">
        <p>
          Podobnie jak w przypadku korzystania z materiałów niestworzonych przez
          drużynę, użycie generatywnego AI musi zostać odnotowane przez drużynę
          oddającą projekt. Użycie AI nie jest zakazane, ale drużyny mają prawo
          ocenić je zgodnie z własnym sumieniem.
        </p>
        <p>
          Warto odnotować, że używanie algorytmów do usuwania wokalu z
          oryginalnej ścieżki nie musi być generatywnym AI, nawet jeśli używa
          modelu wpadającego pod szeroką definicję sztucznej inteligencji.
          Wszystkie wątpliwości można zgłaszać organizatorom.
        </p>
      </div>
    ),
  },
  {
    number: "10",
    title: "Przewinienia i kary",
    content: (
      <div className="space-y-7">
        <Penalty
          title="Niesportowe zachowanie, działanie w złej woli"
          description="Ostateczna ocena tego, co jest działaniem w złej woli, pozostaje w gestii organizatorów."
          penalties={["Upomnienie", "Usunięcie z turnieju"]}
        />
        <Penalty
          title="Oddanie niepełnego projektu"
          description="Główna część projektu została oddana, ale drużyna nie dostarczyła np. skrótu do mediów społecznościowych, opisu projektu, listy użytych materiałów itd."
          penalties={[
            "Kara punktowa: -10% maksymalnej liczby małych punktów za każdy typ uchybienia",
            "Dyskwalifikacja projektu",
          ]}
        />
        <Penalty
          title="Nieocenienie innych drużyn"
          penalties={[
            "Kara punktowa: -10% maksymalnej liczby małych punktów za każdą nieocenioną drużynę",
            "Usunięcie z turnieju w przypadku kolejnych naruszeń",
          ]}
        />
      </div>
    ),
  },
  {
    number: "11",
    title: "Nieoddane projekty i dzikie karty",
    content: (
      <div className="space-y-4">
        <p>
          W przypadku gdy jedna z drużyn w parze nie odda projektu, druga
          drużyna automatycznie dostaje duży punkt. Nadal dostaje oceny i
          feedback od innych drużyn.
        </p>
        <p>
          Może się też zdarzyć, że któraś drużyna nie będzie miała nikogo w
          parze. Dostaje wtedy tzw. dziką kartę i automatycznie zyskuje duży
          punkt. Musi oddać projekt, żeby go dostać. Nadal otrzymuje oceny i
          feedback od innych drużyn.
        </p>
      </div>
    ),
  },
  {
    number: "12",
    title: "Nagrody",
    content: (
      <div className="grid gap-5">
        <p>
          Nagrodami w turnieju są tytuły powiązane z rangami na serwerze Discord
          NanoKarrin.
        </p>
        <Award title="Zwycięzca Turnieju">
          Drużyna, która osiągnęła największą liczbę dużych punktów.
        </Award>
        <Award title="Czempion Jakości">
          „Nie jakoś, a jakość!” — drużyna, która osiągnęła największą liczbę
          małych punktów.
        </Award>
        <Award title="Czempion Tłumu">
          Drużyna, której promocja bitwy zyskała najwięcej wyświetleń w mediach
          społecznościowych. Liczy się jeden film z największą liczbą
          wyświetleń, nie suma wyświetleń z wielu filmów.
        </Award>
        <Award title="Czempion Feedbacku">
          Drużyna, która udzielała najlepszego, najbardziej dokładnego i
          rzetelnego feedbacku. Wybierają ją organizatorzy.
        </Award>
      </div>
    ),
  },
  {
    number: "13",
    title: "Promocja w mediach społecznościowych",
    content: (
      <div className="space-y-4">
        <p>
          Organizatorzy będą używać dostarczonych przez drużyny klipów do
          promocji bitew w mediach społecznościowych. Drużyny mogą dostarczać
          dodatkowe informacje o tym, jakie profile zalinkować i jak opisać dany
          klip.
        </p>
        <p>
          Organizatorzy zastrzegają sobie prawo do niewyemitowania klipu, jeśli
          uznają, że z jakiegoś powodu jest nieodpowiedni.
        </p>
      </div>
    ),
  },
  {
    number: "14",
    title: "Załącznik: Średnia ważona",
    content: (
      <div className="space-y-4">
        <p>
          Z zebranych ocen dla każdej ocenianej drużyny liczona jest średnia
          ważona według poniższego wzoru:
        </p>
        <Formula>średnia ważona = suma(xᵢ · wᵢ) / suma(wᵢ)</Formula>
        <p>
          Gdzie xᵢ jest oceną od jednej drużyny, a wᵢ jest wagą tej oceny. Wagę
          liczymy z poniższego wzoru:
        </p>
        <Formula>wᵢ = exp(-((xᵢ - średnia)²) / (2σ²))</Formula>
        <p>
          W praktyce oznacza to, że skrajne oceny będą miały niższą wagę, a
          oceny blisko średniej będą miały wyższą wagę.
        </p>
      </div>
    ),
  },
  {
    number: "15",
    title: "Zmiany w regulaminie",
    content: (
      <div className="space-y-4">
        <p>
          Organizatorzy zastrzegają sobie prawo do swobodnego wprowadzania zmian
          w regulaminie aż do momentu rozpoczęcia turnieju.
        </p>
        <p>
          Po rozpoczęciu turnieju organizatorzy mogą zmienić regulamin w trakcie
          jego trwania, ale tylko po uprzednim poinformowaniu uczestników o
          planowanej zmianie.
        </p>
      </div>
    ),
  },
];

export const metadata: Metadata = {
  title: "Regulamin Bitew Piosenkowych 2026 — Bitwy Dubbingowe",
  description:
    "Regulamin turnieju Bitwy Piosenkowe 2026. Format drużynowy, trzy rundy, peer to peer + eksperci.",
};

export default function RegulaminPiosenkowe(): ReactElement {
  return (
    <main className="relative z-10 flex flex-col min-h-screen">
      <PageHeader />

      <article className="px-6 md:px-10 py-14 md:py-20 max-w-[900px] mx-auto w-full">
        <Intro />

        <div className="mt-14 space-y-14 text-base md:text-lg leading-relaxed text-ink/90">
          {regulationSections.map((section) => (
            <Section
              key={section.number}
              number={section.number}
              title={section.title}
            >
              {section.content}
            </Section>
          ))}
        </div>
      </article>

      <PageFooter />
    </main>
  );
}

function Section({ number, title, children }: SectionProps): ReactElement {
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

function PageHeader(): ReactElement {
  return (
    <header className="px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-display font-extrabold text-xs md:text-sm uppercase tracking-[0.18em] text-ink/80 hover:text-rose transition-colors"
      >
        <span>← Strona główna</span>
      </Link>
    </header>
  );
}

function Intro(): ReactElement {
  return (
    <>
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose text-paper font-display text-[10px] md:text-xs tracking-[0.22em] uppercase">
          <span className="w-2 h-2 bg-paper rounded-full" /> regulamin
        </span>
      </div>

      <h1 className="font-display font-black text-4xl md:text-6xl leading-[0.9] tracking-tight text-ink">
        Regulamin Bitew <span className="outlined-text">Piosenkowych</span> 2026
      </h1>

      <p className="mt-6 text-lg md:text-xl text-ink/80 font-accent italic">
        Start w lipcu 2026 · Koniec prawdopodobnie około kwietnia 2027
      </p>

      <div className="mt-8 grid gap-3 text-sm md:text-base text-ink/85">
        <IntroDetail label="Format">
          Bitwy drużynowe, 3 rundy, 2 miesiące na wykonanie każdego projektu
        </IntroDetail>
        <IntroDetail label="Ocenianie">
          Peer to peer, czyli drużyny oceniają się nawzajem, oraz opcjonalni
          eksperci
        </IntroDetail>
      </div>
    </>
  );
}

function IntroDetail({ label, children }: IntroDetailProps): ReactElement {
  return (
    <p className="border-l-[3px] border-rose pl-4">
      <span className="font-display font-extrabold uppercase tracking-[0.12em] text-rose">
        {label}:
      </span>{" "}
      {children}
    </p>
  );
}

function ExternalLink({ href, children }: ExternalLinkProps): ReactElement {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-rose underline decoration-rose/40 underline-offset-4 hover:decoration-rose"
    >
      {children}
    </a>
  );
}

function SubsectionTitle({ children }: ChildrenProps): ReactElement {
  return (
    <h3 className="font-display font-extrabold text-xl md:text-2xl text-ink">
      {children}
    </h3>
  );
}

function Penalty({
  title,
  description,
  penalties,
}: PenaltyProps): ReactElement {
  return (
    <div className="space-y-3">
      <SubsectionTitle>{title}</SubsectionTitle>
      {description && <p>{description}</p>}
      <p className="font-semibold">Możliwe kary:</p>
      <ul className="list-disc pl-6 space-y-2">
        {penalties.map((penalty) => (
          <li key={penalty}>{penalty}</li>
        ))}
      </ul>
    </div>
  );
}

function Award({ title, children }: AwardProps): ReactElement {
  return (
    <div className="border-l-[3px] border-rose pl-4 py-1">
      <h3 className="font-display font-extrabold text-xl text-ink">{title}</h3>
      <p className="mt-1">{children}</p>
    </div>
  );
}

function Formula({ children }: ChildrenProps): ReactElement {
  return (
    <div className="overflow-x-auto border-[2px] border-ink bg-paper px-4 py-3 font-mono text-sm md:text-base text-ink shadow-[4px_4px_0_var(--color-ink)]">
      {children}
    </div>
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
