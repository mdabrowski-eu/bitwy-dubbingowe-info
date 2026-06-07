import type { Metadata } from "next";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

const REGISTER_GENERAL_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKo_v0afexd4sp2gNguq2SAVLF3OHItEv4gEgs0hfv6UabnQ/viewform?usp=dialog";

const REGISTER_ACTING_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0q-ZovSSVqRYYglSdchlKQd7u3U2DCjhvSpPGW6HtwWT5iQ/viewform?usp=dialog";

const evaluationAreas = [
  {
    name: "Dykcja i artykulacja",
    description:
      "Czy wypowiedzi są czytelne, zrozumiałe i dobrze prowadzone językowo.",
  },
  {
    name: "Gra aktorska",
    description:
      "Wiarygodność postaci, emocje, reakcje, energia i świadome prowadzenie sceny.",
  },
  {
    name: "Interpretacja",
    description:
      "Pomysł na postać, rozumienie kontekstu scenki i decyzje aktorskie.",
  },
  {
    name: "Praca głosem",
    description:
      "Tempo, intonacja, rytm, dynamika i dopasowanie głosu do postaci.",
  },
  {
    name: "Technika nagraniowa",
    description:
      "Jakość nagrania, poziomy głośności, brak przeszkadzających szumów i czytelność ścieżki.",
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
          Bitwy Aktorskie Czerwiec 2026 to indywidualny konkurs aktorski
          organizowany w ramach Bitew Dubbingowych. Turniej ma formę one-shot:
          odbywa się tylko jedna runda, bez parowania i bez dalszych etapów.
        </p>
        <p>
          Każdy uczestnik wybiera jedną z trzech gotowych scenek, a następnie
          nagrywa w niej jedną postać. Zadaniem uczestnika jest przygotowanie
          kompletnego nagrania aktorskiego w terminie wyznaczonym przez
          organizatorów.
        </p>
        <p>
          Po zakończeniu pracy nagrania oceniają inni uczestnicy oraz eksperci.
          Na podstawie zebranych małych punktów powstaje jeden ranking końcowy.
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
          nowych umiejętności, rozwinąć stare i stworzyć dobre projekty. W
          Bitwach Aktorskich najważniejsza jest praca nad aktorstwem: świadome
          granie, słuchanie feedbacku i szacunek wobec innych uczestników.
        </p>
        <p>
          Wszyscy uczestnicy powinni dążyć do uczciwej rywalizacji i życzliwości
          wobec współzawodników. Bitwy to projekt społecznościowy i będzie tak
          dobry, jak społeczność, która go tworzy.
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
          Aby wziąć udział w Bitwach Aktorskich, trzeba też zapisać się przez{" "}
          <ExternalLink href={REGISTER_ACTING_URL}>
            formularz zgłoszeniowy turnieju
          </ExternalLink>
          . Turniej jest indywidualny, więc każdy uczestnik zgłasza się osobno.
        </p>
        <p>
          W Bitwach Aktorskich biorą udział pojedynczy uczestnicy występujący
          aktorsko. Nie ma drużyn, liderów drużyn ani wspólnych zgłoszeń.
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
          <SubsectionTitle>Przed rozpoczęciem</SubsectionTitle>
          <p>
            Przed rozpoczęciem turnieju organizatorzy publikują harmonogram,
            termin oddawania nagrań oraz trzy gotowe scenki, z których można
            wybrać zadanie.
          </p>
        </div>
        <div className="space-y-3">
          <SubsectionTitle>Wybór scenki i postaci</SubsectionTitle>
          <p>
            Uczestnik wybiera jedną z trzech gotowych scenek i nagrywa jedną
            postać z tej scenki. Nie trzeba nagrywać całej obsady ani
            przygotowywać własnego dialogu.
          </p>
        </div>
        <div className="space-y-3">
          <SubsectionTitle>Nagrywanie</SubsectionTitle>
          <p>
            Nagrywanie trwa dwa tygodnie od momentu rozpoczęcia rundy. Uczestnik
            oddaje nagranie w sposób opisany przez organizatorów.
          </p>
        </div>
        <div className="space-y-3">
          <SubsectionTitle>Ocenianie i wyniki</SubsectionTitle>
          <p>
            Po terminie oddania nagrań organizatorzy udostępniają projekty
            uczestnikom i ekspertom do oceny. Wyznaczają też termin oddania ocen
            i feedbacków.
          </p>
          <p>
            Po zebraniu ocen organizatorzy publikują ranking końcowy. Ponieważ
            turniej nie ma parowania, ranking powstaje bezpośrednio na podstawie
            małych punktów.
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
          Każde nagranie otrzymuje jedną łączną ocenę punktową od 0 do 100
          punktów. Nie ma odgórnego podziału tych 100 punktów na osobne
          kategorie, aby oceniający mogli zachować elastyczność.
        </p>
        <p>
          Oceniający mogą brać pod uwagę między innymi poniższe obszary:
        </p>
        <div className="grid gap-4">
          {evaluationAreas.map((area) => (
            <div
              key={area.name}
              className="border-l-[3px] border-rose pl-4 py-1"
            >
              <h3 className="font-display font-extrabold text-xl text-ink">
                {area.name}
              </h3>
              <p className="mt-1">{area.description}</p>
            </div>
          ))}
        </div>
        <p>
          Wszystkie oceny są subiektywne, podobnie jak interpretacja tego, jaką
          wagę powinny mieć poszczególne elementy. Organizatorzy nie narzucają
          jednej metody oceniania poza skalą od 0 do 100 punktów.
        </p>
        <p>
          Organizatorzy nie zamierzają wnikać w merytoryczność ocen, ale
          rezerwują sobie prawo do udzielenia ostrzeżenia lub usunięcia
          uczestnika z turnieju, jeśli zaobserwują wyraźną złą wolę przy
          ocenianiu.
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
          Oprócz punktacji każdy oceniający powinien dostarczyć wyjaśnienie
          swojej oceny i feedback. Nie ma konkretnych zasad dotyczących
          struktury ani formy feedbacku, ale warto się do niego przykładać.
        </p>
        <p>
          Feedback jest uzasadnieniem oceny i może rozwiązać wiele
          nieporozumień, a także stanowi cenne źródło informacji dla uczestnika
          o tym, co może poprawić w swojej pracy aktorskiej i nagraniowej.
        </p>
        <p>
          Organizatorzy nie zamierzają oceniać feedbacku, ale rezerwują sobie
          prawo do udzielenia ostrzeżenia lub usunięcia uczestnika z turnieju,
          jeśli zaobserwują wyraźną złą wolę przy jego pisaniu.
        </p>
      </div>
    ),
  },
  {
    number: "7",
    title: "Małe punkty i ranking",
    content: (
      <div className="space-y-4">
        <p>
          Oceny wystawiane przez uczestników i ekspertów to tzw. małe punkty. W
          Bitwach Aktorskich nie ma parowania, zwycięstw w parach ani dużych
          punktów.
        </p>
        <p>
          Eksperci są obowiązkową częścią oceniania. Ich oceny są uwzględniane w
          wynikach razem z ocenami uczestników.
        </p>
        <p>
          Ranking końcowy powstaje na podstawie małych punktów zebranych w
          jedynej rundzie turnieju. Uczestnik z najwyższym wynikiem zajmuje
          pierwsze miejsce.
        </p>
        <p>
          W przypadku remisu organizatorzy mogą rozstrzygnąć go na podstawie
          ocen ekspertów, jakości feedbacku lub innego kryterium ogłoszonego
          przed publikacją wyników.
        </p>
      </div>
    ),
  },
  {
    number: "8",
    title: "Materiały niestworzone przez uczestnika",
    content: (
      <div className="space-y-4">
        <p>
          W Bitwach Aktorskich podstawą projektu jest nagranie własnego głosu i
          własnej interpretacji postaci. Używanie materiałów niestworzonych przez
          uczestnika jest dozwolone tylko wtedy, gdy nie zastępuje pracy, która
          ma być oceniana.
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Uczestnik, oddając projekt, powinien odnotować istotne użyte
            materiały lub narzędzia, aby oceniający wiedzieli, co zostało
            wykonane przez niego, a co nie.
          </li>
          <li>
            Materiały nie mogły powstać specjalnie po to, aby zastąpić pracę
            aktorską uczestnika w tej bitwie.
          </li>
        </ol>
        <p>
          Użycie materiałów niestworzonych przez uczestnika może prowadzić do
          obniżonej punktacji, jeśli oceniający uzna, że utrudnia to ocenę
          rzeczywistej pracy aktorskiej lub technicznej.
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
          Użycie generatywnego AI musi zostać odnotowane przez uczestnika
          oddającego projekt. Użycie AI nie jest z góry zakazane, ale nie może
          zastępować nagrania głosu, gry aktorskiej ani interpretacji
          uczestnika.
        </p>
        <p>
          Uczestnicy i eksperci mają prawo ocenić wpływ użycia AI zgodnie z
          własnym sumieniem. Wszystkie wątpliwości można zgłaszać
          organizatorom.
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
          description="Nagranie zostało oddane, ale uczestnik nie dostarczył np. wymaganych informacji, opisu projektu, listy użytych materiałów albo pliku w formacie opisanym przez organizatorów."
          penalties={[
            "Kara punktowa: -10% maksymalnej liczby małych punktów za każdy typ uchybienia",
            "Dyskwalifikacja projektu",
          ]}
        />
        <Penalty
          title="Nieocenienie innych uczestników"
          penalties={[
            "Kara punktowa: -10% maksymalnej liczby małych punktów za każdego nieocenionego uczestnika",
            "Usunięcie z turnieju w przypadku kolejnych naruszeń",
          ]}
        />
      </div>
    ),
  },
  {
    number: "11",
    title: "Nieoddane projekty",
    content: (
      <div className="space-y-4">
        <p>
          Uczestnik, który nie odda nagrania w terminie, nie otrzymuje miejsca w
          rankingu końcowym. Organizatorzy mogą dopuścić spóźnione oddanie tylko
          w wyjątkowych sytuacjach, jeśli nie zaburzy to oceniania.
        </p>
        <p>
          Ponieważ turniej nie ma parowania, brak projektu jednego uczestnika nie
          daje punktów żadnej innej osobie.
        </p>
      </div>
    ),
  },
  {
    number: "12",
    title: "Nagrody",
    content: (
      <div className="grid gap-5">
        <Award title="Zwycięzca Turnieju">
          Uczestnik, który osiągnął najwyższy wynik w rankingu końcowym.
        </Award>
        <Award title="Czempion Aktorstwa">
          Uczestnik szczególnie wyróżniający się grą aktorską, interpretacją i
          pracą głosem.
        </Award>
        <Award title="Czempion Feedbacku">
          Uczestnik, który udzielał najlepszego, najbardziej dokładnego i
          rzetelnego feedbacku. Wybierają go organizatorzy.
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
          Organizatorzy mogą używać oddanych nagrań lub ich fragmentów do
          promocji bitew w mediach społecznościowych. Uczestnicy mogą dostarczać
          dodatkowe informacje o tym, jakie profile zalinkować i jak opisać
          publikowany materiał.
        </p>
        <p>
          Organizatorzy zastrzegają sobie prawo do niewyemitowania materiału,
          jeśli uznają, że z jakiegoś powodu jest nieodpowiedni.
        </p>
      </div>
    ),
  },
  {
    number: "14",
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
  title: "Regulamin Bitew Aktorskich Czerwiec 2026 — Bitwy Dubbingowe",
  description:
    "Regulamin turnieju Bitwy Aktorskie Czerwiec 2026. One-shot dla aktorów, jedna runda, peer to peer + eksperci.",
};

export default function RegulaminAktorskie(): ReactElement {
  return (
    <main className="relative z-10 flex flex-col min-h-screen">
      <PageHeader />

      <article className="px-6 md:px-10 py-14 md:py-20 max-w-[900px] mx-auto w-full">
        <Intro />

        <div className="mt-14 space-y-14 text-base md:text-lg leading-relaxed text-ink/90">
          {regulationSections.map((section) => (
            <Section key={section.number} number={section.number} title={section.title}>
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
        Regulamin Bitew <span className="outlined-text">Aktorskich</span>
        <br />
        <span className="text-3xl md:text-5xl">Czerwiec 2026</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-ink/80 font-accent italic">
        One-shot · Indywidualnie · Jedna runda, dwa tygodnie nagrywania
      </p>

      <div className="mt-8 grid gap-3 text-sm md:text-base text-ink/85">
        <IntroDetail label="Format">
          Pojedynczy aktorzy, jedna wybrana postać z jednej z trzech gotowych
          scenek
        </IntroDetail>
        <IntroDetail label="Ocenianie">
          Peer to peer, czyli uczestnicy oceniają się nawzajem, oraz obowiązkowi
          eksperci
        </IntroDetail>
        <IntroDetail label="Wyniki">
          Ranking na podstawie małych punktów, bez parowania i bez dużych
          punktów
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
