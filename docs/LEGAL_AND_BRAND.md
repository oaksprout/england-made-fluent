# Legal and branding

England, Made Fluent is an independent campaign and policy project. It is
**not affiliated with, endorsed by, or produced on behalf of** The Football
Association, the Premier League, UEFA, FIFA, Nike, or any club, federation
or commercial partner. This document sets out the constraints that follow
from that, and this project's own licensing position.

## What this project does not use

- **No official England crest**, Three Lions mark, or any FA badge or
  wordmark.
- **No Premier League, UEFA or FIFA logos**, marks, or licensed
  competition branding.
- **No Nike branding**, or any other kit manufacturer's branding.
- **No kit designs** — no reproduction, close paraphrase, or recognisable
  reference to any real team or club kit.
- **No match photography** — no photographs of real matches, players,
  stadiums or crowds.
- **No player likenesses or player names** in any visual — diagrams use
  fictional numbered markers only (see `src/data/game-states.ts`'s
  `DiagramMarker` type: `{ x, y, team: "england" | "opponent" | "ball",
label? }`, where `label` is a plain squad number, never a name).
- **No implied endorsement** — nothing on the site should read as though
  the FA, the Premier League, a federation, a club or any real person has
  reviewed, approved or contributed to it.

## What abstract visual references are allowed

The site does use original, abstract football-adjacent visuals, deliberately
designed to be unmistakably _not_ official material:

- **`BrandMark`** (`src/components/tactical/BrandMark.tsx`) — an original
  mark combining a simplified, deliberately off-centre St George's cross
  (two plain rectangles — no shield, no field, no badge outline) with two
  abstract tactical route lines (a solid curved run ending in an arrowhead,
  a dashed run ending in a dot). The component's own code comment states
  the intent explicitly: it should read as a tactical diagram first, not as
  a flag or crest.
- **`PitchDiagram`, `GameStateDiagram`, `InteropVisual`, `HeroFormation`**
  (`src/components/tactical/`) — generic, unbranded pitch outlines and
  numbered player markers on a 0–100 coordinate space, using the site's own
  navy/red/grass colour tokens rather than any real kit or competition
  colourway.
- **OG social cards** (`scripts/generate-og.mjs`) — the same abstract
  tactical-route-over-cross motif, rendered at build time, with no official
  imagery.

If a new visual is added anywhere on the site, it must follow the same
rule: original and abstract, never a reproduction or close paraphrase of
official branding, kit design or real photography.

## No implied endorsement, in copy as well as visuals

This extends to written content, not just imagery. `content/open-letter.mdx`
opens by stating plainly what the letter is and is not — "We are writing as
an independent project, not a representative body" — and the same posture
applies sitewide: proposals are framed as requests and arguments _to_ the
FA, never as statements _from_ or _on behalf of_ the FA, and no page should
suggest official involvement, review or approval.

## The disclaimer

The canonical disclaimer text lives in `src/config/site.ts`:

> "England, Made Fluent is an independent project and is not affiliated
> with or endorsed by The Football Association or the Premier League."

It renders in the site footer on every page
(`data-testid="footer-disclaimer"` in `src/components/layout/Footer.tsx`),
and is checked by both `tests/unit` (indirectly, via the `site` config it's
sourced from) and `tests/e2e/homepage.spec.ts`, which asserts the footer
contains the phrase "independent project". The open letter
(`content/open-letter.mdx`) restates the same posture in its own opening
paragraph, since that page is the one most likely to be read in isolation
(e.g. shared as a link, or printed).

## Licensing

- **Code** is MIT-licensed: the implementation (components, data-layer
  types, build scripts, configuration, tests) can be reused, forked or
  adapted freely.
- **Written content** — the argument, the case studies (`src/data/
nations.ts`), the timeline (`src/data/timeline.ts`), the proposals and
  objections, and the long-form essays in `content/*.mdx`, including the
  open letter — is intended to be shared and reused **with attribution**,
  consistent with the footer's "Content licensed for sharing with
  attribution" line (`src/components/layout/Footer.tsx`). Anyone quoting or
  redistributing this project's written argument or case studies should
  credit "England, Made Fluent" and link back to the source page, rather
  than presenting the material as their own or as official FA/Premier
  League material.
- **Sources cited by the site** (`src/data/sources.ts`) remain the property
  of their original publishers; this project only cites and links to them,
  and never reproduces substantial excerpts beyond fair-use-scale
  quotation.

## If you fork or adapt this project

Update `src/config/site.ts` (`site.name`, `site.url`, `site.disclaimer`,
`site.author`) and this document to reflect the new project's own identity
and independence status. Do not reuse the "England, Made Fluent" name,
`BrandMark`, or disclaimer wording for a project that isn't this one — and
if the fork argues a different position or targets a different federation,
make sure its own disclaimer and branding constraints are stated with the
same explicitness as this one's.
