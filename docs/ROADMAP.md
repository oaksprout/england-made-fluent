# Roadmap

An honest account of what's built and what's still open. Nothing here is a
commitment or a timeline — it's a priority-ordered list of the work this
project's own standards (see
[docs/RESEARCH_STANDARDS.md](RESEARCH_STANDARDS.md)) say it still owes
readers.

## 1. Finish verifying all 32 sources

A research pass (July 2026) located candidate primary material for all 32
sources and corroborated exact citation details for 18 of them against
independent records — but the sandboxed environment it ran in could not
retrieve the documents themselves, so nothing is yet `verified`. Every
claim on the site therefore remains, by the site's own stated standard, a
working claim rather than a checked fact — visibly flagged as such in every
`Cite` popover and on `/sources/`. Retrieving and reading each candidate
(they are recorded in each entry's `url` and `notes`) is the top priority,
ahead of any new feature or page. See
[docs/CITATIONS.md](CITATIONS.md#the-verification-workflow-placeholder--verified)
for the verification workflow itself.

## 2. Commission or collect the datasets the sources describe

Several sources describe data that, as far as this project knows, does not
yet exist in an accessible, citable, machine-checkable form — most notably:

- **English player minutes data** (`english-player-minutes-data`) — minutes
  played by England-qualified players across Premier League clubs, broken
  down by club tactical system, to actually test claims about the range of
  tactical environments those players are developed in rather than
  asserting it impressionistically.
- **Coach nationalities data** (`pl-coach-nationalities-data`) — a
  season-by-season record of Premier League first-team and academy coaching
  staff nationalities and training backgrounds.
- **Tournament possession data** (`tournament-possession-data`) — possession
  and tactical-structure data across major tournaments, to ground
  comparative claims about playing styles in something more precise than
  received narrative.

Where such datasets already exist but are paywalled, proprietary, or simply
not yet located, that should be stated plainly in the relevant source's
`notes` rather than treated as a done task.

## 3. Case-study deep dives

The eight national case studies (`src/data/nations.ts`) and the fourteen-
entry historical timeline (`src/data/timeline.ts`) are necessarily
condensed. Dedicated long-form deep dives — one per nation, or one per
major timeline entry — would let the site show its research standards (the
nine kept-separate dimensions, explicit era contrasts, evidence vs.
interpretation) at full length rather than in summary form.

## 4. Translations

The site is English-only. Spanish, French, German, Italian, Dutch and
Portuguese translations would make sense given how much of the argument
rests on those countries' own footballing histories, and would let this
project's claims about those countries be checked by readers closest to the
source material.

## 5. An interactive "build your own game-state" tool

The twelve `GameStateModule` entries (`src/data/game-states.ts`) currently
present a fixed set of situations and valid responses. A possible future
tool would let a visitor construct their own match situation on
`PitchDiagram` and see which of the site's shared-vocabulary/shared-response
principles would apply — turning the "menu of valid responses, not one
prescribed answer" argument into something readers can test rather than
just read.

## 6. A community corrections process

Right now, corrections arrive however anyone chooses to reach the project
(see `site.author.email` in `src/config/site.ts`). A structured public
corrections process — a visible way to flag a specific claim, source, or
`supports` string as wrong, and a public log of corrections actually made —
would make the site's evidence discipline verifiable by readers rather than
just asserted, and would fit naturally alongside the source-verification
workflow in item 1.

## 7. Accessibility audit beyond automated checks

`tests/e2e/a11y.spec.ts` runs an automated `@axe-core/playwright` scan on
key pages, and the component contracts in `docs/CONTRACTS.md` bake in WCAG
2.2 AA conventions (semantic HTML, visible focus, `aria-` labelling, 44px
tap targets). Automated scans catch a real but partial subset of
accessibility issues — they don't catch things like whether reading order
actually makes sense with a screen reader, whether the tactical diagrams'
accessible descriptions are genuinely useful rather than just present, or
subtle keyboard-trap and focus-management issues in the more complex
interactive components (`GameStateDiagram`, `NationComparison`,
`SourceFilterList`). A manual audit — ideally including testing with actual
assistive technology, not just automated tooling — is still owed.

## 8. Performance budget monitoring

There is currently no automated performance budget or regression tracking
(e.g. Lighthouse CI, bundle-size limits) in `.github/workflows/ci.yml`. Given
the site's animated components (`HeroFormation`, `GameStateDiagram`,
`InteropVisual`, all using Framer Motion) and the generated OG images, a
performance budget would catch regressions before they reach production
rather than relying on manual spot-checks.
