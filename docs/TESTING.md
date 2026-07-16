# Testing

Two independent test suites cover this site: Vitest unit tests
(`tests/unit/`) for components and data integrity, and Playwright end-to-end
tests (`tests/e2e/`) that drive the built site in a real browser.

## Running the unit tests

```bash
pnpm test          # runs once (tests/unit/**/*.{test,spec}.{ts,tsx})
pnpm test:watch    # watch mode
```

These run in `jsdom` (see `vitest.config.ts`), with `vitest.setup.ts`
providing `@testing-library/jest-dom`'s matchers and jsdom polyfills
(`matchMedia`, `IntersectionObserver`, `scrollTo`) that some components rely
on. No build step or dev server is required — unit tests import components
and data modules directly (`@/components/...`, `@/data/...`), never
`src/app` pages or `content/*.mdx` rendering.

### What's covered

- **`utils.test.ts`** — `readingTimeMinutes`, `slugify`, `asset` (base-path
  prefixing), `cn`.
- **`data-integrity.test.ts`** — the most important suite. Verifies exact
  record counts (32 sources, 8 nations, 14 timeline entries, 12 game-state
  modules, 12 proposals, 7 objections, and the homepage statement-list
  counts); that every source has the required non-empty fields and a valid
  `sourceType`/`verificationStatus`; that source ids are unique; that every
  `sourceIds` reference across nations (including era-level references),
  timeline entries, game-state modules and proposals resolves via
  `getSource`; that every nation has all nine `NationDimensions` fields
  populated plus at least two eras and one caveat; that timeline entries are
  sorted by `startYear` and have all six structured fields populated; that
  every game-state module has its three explanation fields, at least three
  valid responses, and a diagram with at least two phases, each with at
  least five markers (exactly one of which is the ball) and all marker/arrow
  coordinates within the 0–100 pitch space; that every proposal has all
  eight required text fields and unique numbers 1–12; that every objection
  has an objection and an answer; and — reading `content/*.mdx` directly
  from disk as text — that every file starts with `export const meta` and
  every `<Cite id="...">` reference resolves via `getSource`.
- **`depth-layers.test.tsx`** — default panel, tab semantics
  (`role="tablist"`/`aria-selected`), click-to-switch, and keyboard
  (arrow-key) tab navigation including wraparound.
- **`cite.test.tsx`** — trigger rendering, opening the popover on focus and
  on a plain click, the placeholder/"unverified" badge, the bibliography
  link, graceful handling of an unknown source id, and a documented
  interaction quirk (see below).
- **`source-filters.test.tsx`** — default count, free-text search, source-
  type filtering, verification-status filtering, and the no-matches state.
- **`timeline.test.tsx`** — default entry count, country and category
  filtering, resetting via "All", and expanding an entry to reveal its
  "Interpretation" and "Measurable evidence" sections.
- **`nation-comparison.test.tsx`** — default two-nation selection,
  `aria-pressed` toggle semantics, adding a third nation, the max-3 rule
  (oldest selection dropped when a fourth is chosen), and deselection.

A note on `Cite`: its trigger button opens the popover on focus
(`onFocus`) and also toggles it on click (`onClick`). A real mouse click
focuses the button _before_ the click event fires, so a full simulated
mouse click (`userEvent.click`, which fires the whole pointer/focus/click
sequence) opens the popover on focus and then immediately closes it again on
the click toggle. `cite.test.tsx` documents this explicitly as its own test
rather than treating it as a guess, and uses `fireEvent.click` (which does
not simulate the focus step) to assert the "click opens it" behaviour
described in `docs/CONTRACTS.md`. If this is fixed in `Cite.tsx`, that test
will need updating.

## Running the end-to-end tests

```bash
pnpm build         # required first — e2e runs against the static export
pnpm test:e2e
```

`playwright.config.ts` points `baseURL` at `http://localhost:3199` and
configures a `webServer` that runs `pnpm serve:static` (serving `out/`)
automatically, reusing an already-running server outside CI. Two projects
run every spec: `chromium` (Desktop Chrome) and `mobile` (Pixel 7 viewport);
specs that only make sense for one form factor skip themselves on the other
via `test.skip(({ isMobile }) => ...)`.

### What's covered

- **`homepage.spec.ts`** — h1 text, presence of the contracted homepage
  section ids, hero visual, primary/secondary CTA hrefs, footer disclaimer.
- **`navigation.spec.ts`** — desktop header links navigate correctly;
  mobile nav toggle opens the panel and closes it on navigation.
- **`depth-layers.spec.ts`** — on `/the-case/`: default Brief panel, switch
  to Detailed, switch to Evidence (with a citation marker visible).
- **`timeline.spec.ts`** — on `/history/`: entries render, country filter
  reduces the count, expanding an entry reveals "Interpretation" and
  "Measurable evidence".
- **`nations.spec.ts`** — on `/football-nations/`: comparison visible,
  toggling Spain flips `aria-pressed`, selected nations' names appear in the
  comparison output.
- **`sources.spec.ts`** — on `/sources/`: entries render, every external
  link is `https://` with `rel` containing `noopener`, the placeholder badge
  is shown, search reduces the entry count.
- **`open-letter.spec.ts`** — on `/open-letter/`: the letter renders; the
  copy action either shows a confirmation or actually populates the
  clipboard with text containing "Football Association" (Chromium only,
  clipboard permissions granted via `context.grantPermissions`); print and
  share buttons are present; `page.emulateMedia({ media: "print" })` hides
  `site-header` while the letter text remains visible.
- **`reduced-motion.spec.ts`** — `page.emulateMedia({ reducedMotion:
"reduce" })`: the homepage still renders its h1 and hero visual; on
  `/the-model/`, a game-state diagram is visible and its "Next phase"
  control still changes the caption with motion disabled.
- **`metadata.spec.ts`** — `<title>` contains the site name, a canonical
  link is present, `og:image` ends with `/og/primary.png`, `/sitemap.xml`
  and `/robots.txt` respond `200` (served as static files by the export).
- **`a11y.spec.ts`** — `@axe-core/playwright`'s `AxeBuilder` scans `/`,
  `/the-case/`, `/sources/` and `/open-letter/`; the test fails only on
  violations with `impact` of `"serious"` or `"critical"`. Less severe
  findings are logged to the console (visible in CI logs / the Playwright
  report) without failing the build, so they're visible without blocking
  merges on subjective/manual-review-needed axe findings.

### Specs written against contracted structure, not yet verified in-app

Some specs assume specific page structure defined in
`docs/CONTRACTS.md`'s route list and the homepage section-id list, written
while pages were still being built by a different agent in parallel. Verify
these against the integrated app once all pages are in place:

- `homepage.spec.ts` — the exact CTA link accessible names ("Read the
  two-minute case" / "Examine the evidence", from `site.cta` in
  `src/config/site.ts`) and the full section-id list.
- `navigation.spec.ts` — the exact header link labels used for "The case",
  "Football nations" and "History" desktop navigation.
- `depth-layers.spec.ts` — that `/the-case/` renders at least one
  `DepthLayers` instance (it does, via `content/the-case.mdx`), and that its
  Evidence panel contains a `Cite`.
- `reduced-motion.spec.ts` — that `/the-model/` renders a
  `GameStateDiagram` (confirmed present as of this writing).

## Accessibility

Beyond the automated axe scan in `a11y.spec.ts`, the components follow WCAG
2.2 AA conventions throughout (semantic HTML, visible focus states, `aria-`
labelling on icon-only controls, `role="img"` + title/`aria-hidden` on SVGs,
44px minimum tap targets) — see the "Accessibility" section of
`docs/CONTRACTS.md`. Automated scans catch a meaningful subset of
accessibility issues but not all of them (e.g. logical reading order,
meaningful alt text quality, or keyboard-trap edge cases); see
`docs/ROADMAP.md` for the plan to add a manual accessibility audit.

## Writing new tests

- Unit tests should import only from `src/components`, `src/data` and
  `src/lib` — never from `src/app` or `content/`, so they don't depend on
  page-level composition that may change independently.
- Prefer `getByRole`/`getByLabelText`/`getByTestId` over CSS selectors, and
  prefer asserting on accessible names and `aria-*` state over implementation
  details like class names.
- For data-shaped tests (adding a new source, nation, timeline entry, etc.),
  extend `data-integrity.test.ts` rather than writing a bespoke test file —
  keeping every cross-reference check in one place is what makes it a
  reliable backstop against a broken `sourceIds`/`<Cite id>` reference.
- For e2e specs, use the `data-testid` values listed in `docs/CONTRACTS.md`
  wherever one exists; they're the stable contract between this test suite
  and whichever agent/person is building the page markup.
