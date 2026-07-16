# England, Made Fluent

**England, Made Fluent** is an independent campaign and policy site. Its
argument, in three sentences: England no longer lacks talent or mentality —
recent squads have shown both — but tournament football keeps exposing
limited collective control, because players arrive at St George's Park
fluent in the very different tactical "languages" of their Premier League
clubs and international management has too little time to reconcile them
from scratch. The Premier League's tactical diversity should therefore be
treated as a structural advantage, not a coordination problem, by building a
national framework — "structured adaptability" — that gives players and
coaches a shared vocabulary, shared recognition of recurring match
situations, and a shared, rehearsed menu of valid responses, while
deliberately leaving formation, tempo and individual style unstandardised.
The site sets out that argument, twelve concrete proposals to the FA, eight
comparative national case studies, a historical timeline, twelve tactical
"game-state" modules, and an open letter — all sourced, all honest about
uncertainty, and none of it claiming a single framework guarantees a
trophy.

This is not an official Football Association, Premier League, UEFA or FIFA
project, and it does not use any of their marks, crests, kits or
photography. See [Legal & brand](docs/LEGAL_AND_BRAND.md) and the
disclaimer rendered in the site footer.

## Tech stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **TypeScript**, strict mode
- **Tailwind CSS v4**
- **MDX** (`@next/mdx`) for long-form prose, with a small set of custom
  components (`Cite`, `DepthLayers`, `Callout`, `Expandable`)
- **Framer Motion** for the small number of interactive/animated components,
  always gated by `useReducedMotion()`
- **Vitest** + **@testing-library/react** for unit tests
- **Playwright** + **@axe-core/playwright** for end-to-end and accessibility
  tests
- No CMS, no external tactical-board library, no advertising analytics — see
  [Architecture](docs/ARCHITECTURE.md) for why.

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

To build the static export used in production:

```bash
pnpm build      # generates OG images, then runs `next build`
pnpm serve:static   # serves out/ on http://localhost:3199
```

## Scripts

| Script              | What it does                                                             |
| ------------------- | ------------------------------------------------------------------------ |
| `pnpm dev`          | Run the Next.js dev server                                               |
| `pnpm build`        | Generate OG images, then build the static export to `out/`               |
| `pnpm start`        | Run `next start` (not used in production; static export instead)         |
| `pnpm serve:static` | Serve the built `out/` directory on port 3199                            |
| `pnpm generate:og`  | Regenerate `public/og/*.png` social cards from `scripts/generate-og.mjs` |
| `pnpm lint`         | ESLint (`next/core-web-vitals`, `next/typescript`)                       |
| `pnpm typecheck`    | `tsc --noEmit`                                                           |
| `pnpm format`       | Prettier, write mode                                                     |
| `pnpm format:check` | Prettier, check mode (used in CI)                                        |
| `pnpm test`         | Vitest unit tests (`tests/unit/`)                                        |
| `pnpm test:watch`   | Vitest in watch mode                                                     |
| `pnpm test:e2e`     | Playwright end-to-end tests (`tests/e2e/`) against the built site        |

## Repository structure

```
content/            Long-form MDX prose (one file per major page)
docs/                Documentation (this folder)
public/              Static assets, incl. generated OG images and favicons
scripts/             Build-time scripts (OG image generation)
src/
  app/               Next.js App Router pages, layout, sitemap, robots
  components/
    citations/       Cite, SourceCard, SourceFilterList
    home/            Homepage-only sections and structured data
    layout/          Header, Footer, ReadingProgress, TableOfContents
    letter/          Open letter action bar (copy/print/share)
    nations/         NationComparison, NationCard
    tactical/        BrandMark, HeroFormation, PitchDiagram, GameStateDiagram, InteropVisual
    timeline/         Timeline
    ui/              DepthLayers, Expandable, Callout, Card, ShareButton, etc.
  config/            site.ts — central site config, nav items, thesis copy
  data/              Structured content: sources, nations, timeline, game
                     states, proposals, objections, homepage statement lists
  lib/               types.ts, utils.ts
tests/
  unit/              Vitest unit tests
  e2e/               Playwright end-to-end tests
```

## Editing content

Copy lives in three places depending on its shape: sitewide branding/nav
text in `src/config/site.ts`, structured repeated records in `src/data/*.ts`,
and long-form prose in `content/*.mdx`. See
[docs/CONTENT_EDITING.md](docs/CONTENT_EDITING.md) for the full guide,
including the MDX component cheatsheet and the style rules every edit must
follow (British English, no invented facts, no national stereotypes as
explanations).

## Citations and evidence

Every factual claim on the site traces back to a `Source` in
`src/data/sources.ts`, referenced inline with `<Cite id="..." />`. Sources
start life as `verificationStatus: "placeholder"` and are only marked
`verified` once a human researcher has actually checked the material. See
[docs/CITATIONS.md](docs/CITATIONS.md) for how to add and verify a source,
and [docs/RESEARCH_STANDARDS.md](docs/RESEARCH_STANDARDS.md) for the
comparative-research rules (the nine case-study dimensions, era contrasts,
contested-label policy, and the absolute rule against inventing sources,
quotations or statistics).

## Testing

Unit tests (Vitest + Testing Library) cover the interactive UI components
and, most importantly, data integrity — every cross-reference between
sources, nations, timeline entries, game-state modules and proposals is
checked, along with every `<Cite id="...">` in the MDX content. End-to-end
tests (Playwright) run against the built static export and cover navigation,
the depth-layers reading pattern, the timeline and nation-comparison filters,
the open letter's print styling, reduced-motion behaviour, metadata/SEO, and
an automated accessibility scan. See
[docs/TESTING.md](docs/TESTING.md) for how to run everything and what's
covered.

## Deployment

The site is a static export (`output: "export"`) that can be hosted
anywhere that serves static files. It ships with a GitHub Pages Actions
workflow (`.github/workflows/deploy.yml`) that sets `BASE_PATH` and
`NEXT_PUBLIC_SITE_URL` for project-page hosting, and it deploys to Vercel
(or any static host) without `BASE_PATH` set. See
[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the full walkthrough and the
environment variable reference (also see `.env.example`).

## Legal and branding

This project is independent and carries no official standing. It does not
use the England crest, the Three Lions mark, FA/Premier League/UEFA/FIFA
logos, Nike branding, kit designs, match photography or player likenesses in
its visuals — only original abstract tactical motifs and fictional numbered
markers. The independence disclaimer renders in the site footer
(`footer-disclaimer`) on every page. See
[docs/LEGAL_AND_BRAND.md](docs/LEGAL_AND_BRAND.md) for the full constraint
list and licensing position.

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) — the immediate priority is verifying
all 32 placeholder sources against primary material.

## Licence

Code is MIT-licensed. Written content (the case studies, timeline, essays
and the open letter) is intended to be shared with attribution rather than
reproduced as-is elsewhere — see
[docs/LEGAL_AND_BRAND.md](docs/LEGAL_AND_BRAND.md) for the exact terms.
