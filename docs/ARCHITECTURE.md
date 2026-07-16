# Architecture

## Static export, App Router

The site is built with Next.js 15's App Router and exported as static HTML
via `output: "export"` in `next.config.ts` (`trailingSlash: true`, so every
route resolves to `/route/index.html`). There is no Node server in
production: `pnpm build` runs `scripts/generate-og.mjs` (build-time social
card generation) and then `next build`, producing a fully static `out/`
directory that GitHub Pages, Vercel or any static host can serve directly.
Route handlers like `src/app/sitemap.ts` and `src/app/robots.ts` are
resolved at build time into `sitemap.xml` and `robots.txt` files, not served
dynamically.

Because there is no server, every page is either a React Server Component
(the default) or an explicit `"use client"` island — see
[Interactive islands](#interactive-islands) below.

## Content architecture: data vs. MDX vs. components

The site deliberately keeps three kinds of content apart so that changing
one never requires touching the others:

1. **`src/data/*.ts`** — structured, repeated records, typed against
   `src/lib/types.ts`: the bibliography (`sources.ts`), eight national case
   studies (`nations.ts`), a fourteen-entry historical timeline
   (`timeline.ts`), twelve tactical "game-state" modules (`game-states.ts`),
   twelve FA proposals (`proposals.ts`), seven objections (`objections.ts`),
   and short homepage statement lists (`homepage.ts`). These are plain
   TypeScript arrays — no database, no CMS — imported directly by the pages
   and components that render them.
2. **`content/*.mdx`** — long-form prose (the case, England's advantage, the
   model, comparative-nations and history intros, evidence, proposals intro,
   England DNA, about, sources methodology, the open letter). Each file
   starts with an `export const meta = { title, description }` used for page
   metadata, and is rendered through `mdx-components.tsx`'s global component
   map (so `<Cite>`, `<DepthLayers>`/`<DepthBrief>`/`<DepthDetailed>`/
   `<DepthEvidence>`, `<Callout>` and `<Expandable>` are available in MDX
   without per-file imports).
3. **`src/config/site.ts`** — sitewide branding and copy used in more than
   one place: the site name, the thesis headline/proposition (`site.thesis`),
   share/social copy, the independence disclaimer, and navigation labels
   (`navItems`, `footerNavItems`).

This split means a content editor changing a case study's evidence never
touches JSX, and a design change to how a case study is _rendered_ never
requires touching its content. See
[docs/CONTENT_EDITING.md](CONTENT_EDITING.md) for the editing-side view of
this same split.

## Evidence system

Every factual claim traces back to a `Source` (`src/lib/types.ts`), held in
the flat `sources` array in `src/data/sources.ts` with a `getSource(id)`
lookup. Two consumers read from it:

- **`<Cite id="source-id" />`** (`src/components/citations/Cite.tsx`) —
  used inline in MDX prose. It renders an accessible popover (opens on
  focus, and on a plain synthetic click; see the component's own tests in
  `tests/unit/cite.test.tsx` for a documented interaction quirk between the
  focus-open and click-toggle handlers) showing the source's type, title,
  publication/accessed dates, and — critically — a visible "unverified"
  badge whenever `verificationStatus === "placeholder"`. It links through to
  `/sources/#<id>`.
- **`/sources/`** (`SourceFilterList` + `SourceCard`) — the full
  bibliography, filterable by free text, source type, country, era and
  verification status, each entry anchored at `id={source.id}` so `Cite`'s
  deep links resolve.

Every source is seeded `verificationStatus: "placeholder"` — see
[docs/CITATIONS.md](CITATIONS.md) and
[docs/RESEARCH_STANDARDS.md](../docs/RESEARCH_STANDARDS.md) for the
verification discipline this is built to enforce. `tests/unit/data-
integrity.test.ts` is the mechanical backstop: it asserts every
`sourceIds`/`<Cite id>` reference across `src/data/*.ts` and `content/*.mdx`
actually resolves via `getSource`.

## Interactive islands

Most of the site is server-rendered static markup; `"use client"` is used
only where the contract requires real interactivity:

- **`DepthLayers`** — the Brief/Detailed/Evidence tabbed reading-depth
  control, used throughout the long-form pages.
- **`Cite`, `SourceFilterList`** — citation popovers and the filterable
  bibliography.
- **`Timeline`, `NationComparison`** — client-side filtering/selection over
  data passed in as props from a server component.
- **`GameStateDiagram`, `InteropVisual`, `HeroFormation`** — the tactical
  diagrams and hero visual, animated with Framer Motion and always gated by
  `useReducedMotion()` so a reduced-motion preference renders the final,
  static state instead of looping or transitioning.
- **`Header`, `ReadingProgress`, `LetterActions`, `CopyLinkButton`,
  `ShareButton`** — small UI affordances (mobile nav, scroll progress, copy/
  print/share on the open letter) that need browser APIs.

Everything else — page shells, MDX prose, `SourceCard`, `NationCard`,
`PitchDiagram` — is a plain server component.

## Design tokens

Tailwind v4 tokens are defined in `src/app/globals.css`: `chalk`/
`chalk-deep` (off-white backgrounds), `red`/`red-deep` and `navy`/
`navy-soft` (the site's two accent colours — deliberately not a copy of any
kit), `grass`/`grass-deep` (reserved for tactical diagrams only), and `ink`/
`ink-soft`/`ink-faint`/`line` for text and borders. `font-display` (Archivo)
is used for headings and UI chrome; body text defaults to a serif
(Source Serif 4) for long-form readability. Print styles live in the same
file under `@media print`, hiding `header`, `footer`, `nav` and any
`.no-print`-flagged element — this is what makes the open letter's print/
"save as PDF" action produce a clean document.

## Base-path handling

GitHub Pages project sites serve from a sub-path
(`https://<user>.github.io/england-made-fluent`), so the production build
sets `BASE_PATH=/england-made-fluent`, which `next.config.ts` reads into
`basePath` and also exposes as `NEXT_PUBLIC_BASE_PATH` for client code.
`next/link` and `next/image` handle this automatically; anything that needs
a raw asset path (rather than a route) should go through `asset()` in
`src/lib/utils.ts`, which prefixes `NEXT_PUBLIC_BASE_PATH` onto the given
path. Vercel and other root-domain deployments simply leave `BASE_PATH`
unset. See [docs/DEPLOYMENT.md](DEPLOYMENT.md).

## OG image generation

`scripts/generate-og.mjs` runs at build time (as part of `pnpm build`,
before `next build`) and renders `public/og/primary.png` and
`public/og/secondary.png` (1200×630) from inline SVG templates using
`sharp` — an abstract brand motif (intersecting tactical routes over an
off-centre, simplified St George's cross) rather than any official
imagery, plus the headline/subline copy. Because this happens at build
time, the static export ships real OG images with no runtime image
generation endpoint (which would be impossible under `output: "export"`
anyway).

## Why no external tactical-board / CMS / analytics dependencies

- **No tactical-board library** — `PitchDiagram` and `GameStateDiagram` are
  hand-built SVG on a 0–100 coordinate space. A generic pitch-diagram
  package would either look like a real broadcast graphic (a branding risk
  given the site's strict no-official-imagery rule — see
  [docs/LEGAL_AND_BRAND.md](LEGAL_AND_BRAND.md)) or pull in far more
  runtime code than twelve fixed diagrams need.
- **No CMS** — the site's whole editorial discipline (placeholder sources,
  the nine kept-separate case-study dimensions, evidence/interpretation
  separation) is enforced partly by TypeScript types and partly by
  `tests/unit/data-integrity.test.ts`. A headless CMS would move that
  content out of version control and out of reach of both the type checker
  and the test suite, for a site with a fixed, small, hand-curated set of
  pages.
- **No advertising or third-party analytics** — analytics are
  privacy-conscious and disabled by default; see
  [docs/ANALYTICS.md](ANALYTICS.md). A static export with no ad network and
  no personal-data collection also keeps the "independent, not-for-profit
  campaign" framing credible rather than commercially compromised.
