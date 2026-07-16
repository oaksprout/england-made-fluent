# Implementation contracts

This document is the coordination contract between parallel implementation
agents. **Do not rename these exports, props, routes, data-testids or file
paths.** If something is missing, add it in your own files without breaking
these contracts.

## Shared conventions

- British English everywhere. Tone: direct, measured, intellectually
  confident, constructive. No consultancy jargon, no anti-FA hostility, no
  national stereotypes, no claims that any framework guarantees success.
- Tailwind v4 tokens (defined in `src/app/globals.css`): colours `chalk`,
  `chalk-deep`, `red`, `red-deep`, `navy`, `navy-soft`, `grass`,
  `grass-deep`, `ink`, `ink-soft`, `ink-faint`, `line`. Fonts:
  `font-display` (Archivo), body serif is the default. Use `grass` ONLY in
  tactical diagrams.
- All types come from `src/lib/types.ts`. Import with `@/` alias.
- Client components must declare `"use client"`. Prefer server components;
  add interactivity only where the contract requires it.
- Animation: `framer-motion`, always gated by `useReducedMotion()` — when
  reduced motion is preferred, render the final/static state.
- Icons: `lucide-react` only.
- Accessibility: WCAG 2.2 AA. Semantic HTML, keyboard operability, visible
  focus (global style exists), `aria-` labels on icon-only buttons, SVGs get
  `role="img"` + `<title>`/`aria-label` or `aria-hidden` when decorative.
  Never rely on colour alone; tap targets ≥ 44px on mobile.
- Never invent citations, quotations, statistics or study findings. Factual
  claims reference source IDs from `src/data/sources.ts`. Uncertain sources
  are `verificationStatus: "placeholder"`.
- Legal: no official England crest, Three Lions mark, FA/PL/UEFA/FIFA logos,
  Nike branding, kits, match photography or player likenesses/names in
  visuals. Fictional player markers only (e.g. numbered dots).

## Routes (all statically exported, trailing slashes)

`/`, `/the-case/`, `/englands-advantage/`, `/the-model/`,
`/football-nations/`, `/history/`, `/evidence/`, `/proposals/`,
`/england-dna/`, `/about/`, `/sources/`, `/open-letter/` (print-formatted
letter page), `/privacy/` (only linked when analytics enabled).

## File ownership

| Area                              | Owner   | Paths                                                                                                                                                     |
| --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foundation (do not edit)          | lead    | root configs, `src/lib/types.ts`, `src/lib/utils.ts`, `src/config/site.ts`, `src/app/globals.css`, `src/app/layout.tsx`, `scripts/generate-og.mjs`        |
| Data layer                        | Agent A | `src/data/*.ts`                                                                                                                                           |
| Layout/UI/citation components     | Agent B | `src/components/layout/*`, `src/components/ui/*`, `src/components/citations/*`                                                                            |
| Tactical & interactive components | Agent C | `src/components/tactical/*`, `src/components/nations/*`, `src/components/timeline/*`                                                                      |
| Long-form MDX + docs prose        | Agent E | `content/*.mdx`, `docs/RESEARCH_STANDARDS.md`, `docs/CONTENT_EDITING.md`                                                                                  |
| Pages, homepage, SEO wiring       | Agent D | `src/app/**/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx`, `src/components/home/*`, `mdx-components.tsx`, structured data |
| Tests, CI, docs                   | Agent F | `tests/**`, `.github/workflows/*`, `README.md`, remaining `docs/*.md`                                                                                     |

## Data layer (Agent A) — exact exports from `src/data/`

```ts
// sources.ts
export const sources: Source[];
export function getSource(id: string): Source | undefined;

// nations.ts
export const nations: Nation[]; // spain, argentina, france, germany, italy, brazil, netherlands, croatia

// timeline.ts
export const timelineEntries: TimelineEntry[]; // ~1950 → present, sorted by startYear

// game-states.ts
export const gameStateModules: GameStateModule[]; // all 12 modules from the brief

// proposals.ts
export const proposals: Proposal[]; // the 12 FA proposals

// objections.ts
export const objections: Objection[]; // the 7 objections from the brief

// homepage.ts
export const argumentStatements: Statement[]; // the six 60-second statements
export const premierLeagueExposures: Statement[]; // what the PL exposes players to
export const premierLeagueComplications: Statement[]; // the 7 complications
export const frameworkLayers: FrameworkLayer[]; // the 4 layers of structured adaptability
export const interopSystems: InteropSystem[]; // 6 club-system backgrounds
export const standardise: Statement[]; // what the framework SHOULD standardise
export const doNotStandardise: Statement[]; // what it should NOT standardise
```

## UI components (Agent B) — exact APIs

All in `src/components/ui/` unless noted.

- `SectionHeading`: `{ id: string; kicker?: string; title: string; lede?: string }`
  — renders `<h2 id>` with anchor + `CopyLinkButton`.
- `DepthLayers` (client): `{ brief: ReactNode; detailed: ReactNode; evidence: ReactNode; defaultLayer?: "brief" }`
  — tab-style toggle labelled Brief / Detailed / Evidence.
  `data-testid="depth-layers"`; tab buttons `data-testid="depth-tab-brief"`
  etc., proper `role="tablist"` semantics, keyboard operable.
- `Expandable` (client): `{ summary: string; children }` — native
  `<details>`-based, styled.
- `CopyLinkButton` (client): `{ anchor: string; label?: string }` — copies
  `location.origin + pathname + '#' + anchor`.
- `ShareButton` (client): `{ title: string; text: string; url?: string }` —
  Web Share API with clipboard fallback, `data-testid="share-button"`.
- `ReadingTime`: `{ minutes: number }`.
- `Callout`: `{ tone?: "note" | "interpretation" | "contested"; title?: string; children }`
  — "interpretation"/"contested" tones visibly label analytical readings.
- `Card`, `Kicker`, `Prose` (typography wrapper for MDX: max-w-prose,
  heading/link/list styles).
- `src/components/layout/Header.tsx` → `Header` (client ok): sticky-but-
  unobtrusive nav using `navItems` from `@/config/site`, mobile menu with
  `data-testid="mobile-nav-toggle"` + `data-testid="mobile-nav"`. Includes
  `BrandMark` (from tactical, import `@/components/tactical/BrandMark`).
- `src/components/layout/Footer.tsx` → `Footer`: full nav, disclaimer
  (`site.disclaimer`), `data-testid="footer-disclaimer"`, privacy link only
  when `site.analytics.enabled`.
- `src/components/layout/ReadingProgress.tsx` (client) → `ReadingProgress`:
  top-of-viewport progress bar, `data-testid="reading-progress"`,
  `role="progressbar"` + aria values, hidden for reduced motion users is NOT
  required (it is not motion), but must not cause layout shift.
- `src/components/layout/TableOfContents.tsx` (client) → `TableOfContents`:
  `{ items: { id: string; label: string }[] }` — desktop sidebar + mobile
  disclosure, `data-testid="mobile-toc"`.
- `src/components/citations/Cite.tsx` (client) → `Cite`:
  `{ id: string; children?: ReactNode }` — inline footnote-style marker
  `[n]`-free: renders superscript with source short info in an accessible
  tooltip/popover on hover/focus/tap, links to `/sources/#<id>`. Marks
  placeholder sources with a visible "unverified" badge in the popover.
  `data-testid="cite"`. Reads from `@/data/sources`.
- `src/components/citations/SourceCard.tsx` → `SourceCard`: `{ source: Source }`
  — full bibliography entry: type, dates (publication + accessed), country
  tags, verification badge, external link `rel="noopener noreferrer"`.
- `src/components/citations/SourceFilters.tsx` (client) → `SourceFilterList`:
  `{ sources: Source[] }` — filterable bibliography (country, era, source
  type, verification status, free-text). `data-testid="source-filters"`,
  each rendered entry `data-testid="source-entry"` with `id={source.id}`.

## Tactical & interactive components (Agent C) — exact APIs

- `src/components/tactical/BrandMark.tsx` → `BrandMark`:
  `{ size?: number; monochrome?: boolean }` — original abstract mark:
  intersecting tactical routes + simplified off-centre St George's cross.
  Pure SVG, accessible title. Must not resemble the official crest.
- `src/components/tactical/HeroFormation.tsx` (client) → `HeroFormation` —
  animated abstract visual: player dots arrive from scattered "club system"
  clusters and settle into one coordinated shape; framer-motion, loops
  slowly; `useReducedMotion()` → render final coordinated state statically.
  `data-testid="hero-formation"`. Decorative: `aria-hidden` wrapper plus a
  visually-hidden text description.
- `src/components/tactical/PitchDiagram.tsx` → `PitchDiagram`: presentational
  SVG pitch (chalk lines on `grass`), `{ children; viewLabel: string }` —
  used as canvas by other diagrams. 0–100 coordinate space, responsive.
- `src/components/tactical/GameStateDiagram.tsx` (client) →
  `GameStateDiagram`: `{ spec: GameStateDiagramSpec }` — renders phases on
  `PitchDiagram` with step controls (Previous/Next phase buttons + caption),
  auto-advance only when motion allowed; markers = numbered neutral dots
  (england navy/red ring, opponent grey), arrows per `DiagramArrowKind`
  (pass solid, run dashed, press double-line or bold, shift dotted) with a
  visible legend. Keyboard operable. `data-testid="game-state-diagram"`.
- `src/components/tactical/InteropVisual.tsx` (client) → `InteropVisual`:
  `{ systems: InteropSystem[] }` — interactive: select a club-system
  background, see the habit → shared-principle translation visualised.
  `data-testid="interop-visual"`, selectable via buttons (`data-testid="interop-system-<id>"`).
- `src/components/nations/NationComparison.tsx` (client) →
  `NationComparison`: `{ nations: Nation[] }` — pick 2–3 nations side by
  side; desktop = columns, mobile = stacked accessible cards; dimension rows
  from `NationDimensions`; `data-testid="nation-compare"`; nation toggles
  `data-testid="nation-toggle-<id>"`.
- `src/components/nations/NationCard.tsx` → `NationCard`: `{ nation: Nation }`
  — full case-study card incl. eras, caveats, dimension breakdown via
  `Expandable` sections.
- `src/components/timeline/Timeline.tsx` (client) → `Timeline`:
  `{ entries: TimelineEntry[] }` — vertical interactive timeline with
  decade markers, filter by country + category (`data-testid="timeline-filters"`),
  each entry expandable to show the six structured aspects with labelled
  headings ("Interpretation" and "Measurable evidence" visually distinct,
  `contested` flagged). `data-testid="timeline"`, entries
  `data-testid="timeline-entry"`.

Agent C may add small shared helpers under `src/components/tactical/` only.

## MDX content (Agent E) — files in `content/`

`the-case.mdx`, `englands-advantage.mdx`, `the-model.mdx`,
`football-nations-intro.mdx`, `history-intro.mdx`, `evidence.mdx`,
`proposals-intro.mdx`, `england-dna.mdx`, `about.mdx`,
`sources-methodology.mdx`, `open-letter.mdx`.

Rules:

- Start at `##` (pages own the `<h1>`).
- Available custom components (registered globally in Wave 2 — use without
  imports): `<Cite id="source-id" />`, `<Depth brief={...}>` — NO. Use this
  exact pattern instead, since MDX props take JSX awkwardly:

  ```mdx
  <DepthLayers>
    <DepthBrief>short version…</DepthBrief>
    <DepthDetailed>full version…</DepthDetailed>
    <DepthEvidence>
      sources & caveats… <Cite id="fa-england-dna-launch" />
    </DepthEvidence>
  </DepthLayers>
  ```

  (Agent B: also export `DepthBrief`, `DepthDetailed`, `DepthEvidence` as
  simple slot wrappers, and make `DepthLayers` accept them as children.)

- Also available: `<Callout tone="interpretation">`, `<Expandable summary="…">`.
- Cite source IDs must exist in `src/data/sources.ts` (Agent A publishes the
  ID list below).
- Every factual claim needs a `<Cite>`; analytical readings sit inside
  `<Callout tone="interpretation">`.

### Canonical source IDs (Agent A must create at least these)

`fa-england-dna-launch`, `fa-england-dna-updates`, `fa-st-georges-park`,
`pl-eppp`, `pl-academy-development`, `english-player-minutes-data`,
`pl-coach-nationalities-data`, `rfef-development-method`,
`spain-la-masia-context`, `afa-coaching-structures`,
`argentina-2022-analysis`, `fff-clairefontaine`, `france-academy-system`,
`dfb-post-2000-reform`, `germany-talent-programme`, `figc-coverciano`,
`italy-tactical-culture`, `knvb-philosophy`, `netherlands-total-football`,
`brazil-development-structures`, `hns-croatia-continuity`,
`shared-mental-models-research`, `team-coordination-research`,
`transfer-of-learning-research`, `organisational-ambidexterity-research`,
`international-preparation-time`, `tournament-possession-data`,
`hungary-1950s-historical`, `england-tournament-record`.

## Pages (Agent D)

- Each route: `export const metadata` (title, description, canonical via
  `alternates.canonical`, OG images `/og/primary.png` except home which also
  registers `/og/secondary.png`).
- Homepage sections in order, each wrapped in `<section>` with `id`:
  `hero`, `argument-60-seconds`, `structural-advantage`, `no-single-model`,
  `comparative-timeline` (teaser linking to /history/), `false-choice`,
  `proposed-identity`, `interoperability`, `game-states` (3 featured modules
  - link), `england-dna` (teaser), `proposals` (condensed + link),
    `objections` (condensed), `open-letter` (teaser + actions), `closing`.
- Homepage h1 = `site.thesis.headline`.
- JSON-LD: `Organization` on layout-level + `Article` on long-form pages.
- `/open-letter/`: clean print-formatted page; actions = copy, print
  (`window.print`), native share, "download" = print dialog note. No
  signature counts.
- Sitemap lists all routes with `site.url`; robots allows all + sitemap ref.

## Tests (Agent F)

Unit (Vitest, `tests/unit/`): DepthLayers behaviour, Cite popover +
placeholder badge, SourceFilterList filtering, Timeline filtering,
NationComparison selection, reading-time util, data integrity (every
`sourceIds`/`Cite` id resolves; sources have required fields; 12 modules, 12
proposals, 8 nations; every nation has all 9 dimensions non-empty).

E2E (Playwright, `tests/e2e/`): homepage renders headline + sections;
nav works desktop + mobile; depth layers toggle; timeline filter; open
letter print CSS (`page.emulateMedia({ media: 'print' })` hides header);
reduced motion (`emulateMedia({ reducedMotion: 'reduce' })` still shows hero
content); source links have valid hrefs; metadata/OG tags present; axe scan
(via `@axe-core/playwright`) on home, /the-case/, /sources/ with no serious
violations.

CI (`.github/workflows/ci.yml`): pnpm install → format:check, lint,
typecheck, unit tests, build, playwright (chromium only, install with
`--with-deps`). Separate `deploy.yml` for GitHub Pages (provided by lead —
do not create).

## Data-testids master list

`site-header`, `mobile-nav-toggle`, `mobile-nav`, `reading-progress`,
`mobile-toc`, `depth-layers`, `depth-tab-brief`, `depth-tab-detailed`,
`depth-tab-evidence`, `share-button`, `cite`, `source-filters`,
`source-entry`, `hero-formation`, `game-state-diagram`, `interop-visual`,
`nation-compare`, `nation-toggle-<id>`, `timeline`, `timeline-filters`,
`timeline-entry`, `footer-disclaimer`, `open-letter`, `letter-copy`,
`letter-print`, `letter-share`.
