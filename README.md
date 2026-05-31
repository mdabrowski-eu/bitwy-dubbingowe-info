# Bitwy Dubbingowe — strona informacyjna

Statyczna strona informacyjna o konkursie **Bitwy Dubbingowe**. Next.js (App Router) + Tailwind v4, eksportowana jako static site i hostowana na **GitHub Pages**.

## Lokalnie

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build statyczny

```bash
GITHUB_PAGES=true npm run build
# output: ./out
```

`GITHUB_PAGES=true` ustawia `basePath`/`assetPrefix` na `/bitwy-dubbingowe-info` (zgodnie z nazwą repo). Bez tej zmiennej build zakłada hosting w root.

## Deploy

Push na `main` → workflow `.github/workflows/deploy.yml` buduje i publikuje na GitHub Pages.

**Wymagania w repo na GitHubie:**

1. Settings → Pages → *Source*: **GitHub Actions**.
2. Pierwszy push na `main` uruchomi pipeline; URL pojawi się w zakładce Actions.

## Struktura

- `src/app/page.tsx` — landing page
- `src/app/layout.tsx` — fonty (Unbounded / Manrope / Instrument Serif), metadata
- `src/app/globals.css` — tokeny brandingowe, animacje, halftone, "stamp" shadow
- `public/mascot.png` — maskotka
- `copy-bitwy.md`, `branding-colors.txt` — materiały źródłowe

## Aktualizacja linków rejestracyjnych

W `src/app/page.tsx`, w tablicy `tournaments`, ustaw `registerUrl` dla danego turnieju (obecnie `null` → przycisk pokazuje "Link rejestracyjny — wkrótce").
