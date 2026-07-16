# Content editing guide

This is a guide for editing England, Made Fluent without needing to be a
developer. It explains where copy actually lives, how to write in the MDX
components the site uses, how to add new structured content (sources,
timeline entries, nations, proposals), and the style rules every edit should
follow.

## Where copy lives

The site deliberately keeps three kinds of content in three different
places, so that renaming, restructuring or rewriting one does not require
touching code.

- **`src/config/site.ts`** — the site's name, tagline, thesis statements,
  share/social copy, disclaimer, and navigation labels. Edit this file for
  anything that reads like branding or a headline used in multiple places
  (e.g. the homepage `h1`, the disclaimer shown in the footer).
- **`src/data/*.ts`** — structured, repeated content: the bibliography
  (`sources.ts`), the national case studies (`nations.ts`), the historical
  timeline (`timeline.ts`), the tactical game-state modules
  (`game-states.ts`), the twelve FA proposals (`proposals.ts`), the seven
  objections (`objections.ts`), and homepage statement lists
  (`homepage.ts`). Each of these is a plain TypeScript array of objects
  matching a type in `src/lib/types.ts` — edit the array entries directly;
  do not change the shape of the types themselves without checking
  `docs/CONTRACTS.md`.
- **`content/*.mdx`** — the long-form prose pages (the case, England's
  advantage, the model, the intro essays, England DNA, the open letter,
  about, evidence, sources methodology). Edit these files directly for
  anything that reads as an argument, an essay, or connected prose rather
  than a data record.

If you are not sure which place something belongs, ask: is this a single
piece of prose someone would read top to bottom (→ `content/`), a repeated
structured record with fixed fields (→ `src/data/`), or a piece of sitewide
branding/navigation text used in several places (→ `src/config/site.ts`)?

## MDX component cheatsheet

Every file in `content/` must start with this exact export — it is not
optional, and the exact variable name `meta` matters:

```mdx
export const meta = {
  title: "Page title",
  description: "One or two sentences used for the page's meta description.",
};
```

After that, start all headings at `##` — the page template supplies its own
`<h1>`, so a `##` heading is the top level inside the MDX body.

### Citing a source

```mdx
England's tournament record includes... <Cite id="england-tournament-record" />
```

The `id` must exactly match an `id` in `src/data/sources.ts`. If the source
doesn't exist yet, add it there first (see below) — never cite an id that
does not resolve, and never invent a citation to make a sentence look more
supported than it is.

### Labelling an analytical reading

```mdx
<Callout tone="interpretation" title="Optional title">
  Our reading of what this pattern might mean, clearly marked as ours.
</Callout>
```

Use `tone="note"` for a plain aside that isn't an argument (a caveat, a
pointer to another page). Use `tone="interpretation"` for our own analytical
reading. Use `tone="contested"` only where credible people genuinely
disagree, not just where something is unverified — see
`docs/RESEARCH_STANDARDS.md`.

### The depth pattern

Use this for major analytical sections — two to four per long page, not
every paragraph:

```mdx
<DepthLayers>
  <DepthBrief>
    Two to four sentences, written for a supporter with no background, skimmable
    in a few seconds.
  </DepthBrief>
  <DepthDetailed>
    The full treatment — several paragraphs, the actual argument in full.
  </DepthDetailed>
  <DepthEvidence>
    What the evidence actually shows, its limits, and the relevant{" "}
    <Cite id="source-id" /> markers.
  </DepthEvidence>
</DepthLayers>
```

Do not use any other prop-based API for this pattern (e.g. `<Depth
brief={...}>`) — MDX handles nested JSX children far better than props
containing prose, which is why the site standardised on this slot-based
form.

### Expandable asides

```mdx
<Expandable summary="A short label for what's inside">
  Optional extra detail a reader can choose to open — a worked example, a
  methodological aside, anything worth including without lengthening the main
  flow of the page.
</Expandable>
```

### Formatting rules

- Keep paragraphs short — this is a mobile-first site, and long unbroken
  paragraphs are hard to read on a phone.
- Leave a blank line before and after every JSX block
  (`<Callout>`, `<DepthLayers>`, `<Expandable>`, and their children's
  opening/closing tags where they span multiple lines). MDX is
  whitespace-sensitive; a missing blank line between prose and a JSX block
  is the most common cause of a broken build.
- Every factual claim needs a `<Cite>`. Every analytical claim needs a
  `<Callout>` tone. If a sentence makes a claim that is neither obviously
  common knowledge nor covered by a citation or callout, it needs one of
  the two before it can be published.

## Adding a source

Add a new object to the `sources` array in `src/data/sources.ts`, matching
the `Source` type in `src/lib/types.ts`:

```ts
{
  id: "short-kebab-case-id",       // referenced by <Cite id="..." />
  title: "Descriptive title",
  organisation: "Who published it", // or `author` for books/individual work
  url: "https://real-root-domain.example",
  accessedDate: "YYYY-MM-DD",
  sourceType: "official" | "academic" | "journalism" | "data" | "book" | "interview" | "historical",
  countries: ["England"],           // or [] if not country-specific
  eras: ["2014-present"],
  supports: [
    "The specific claim this source is being used to support, written out in full",
  ],
  notes: "Exactly what a researcher needs to check before this can be marked verified.",
  verificationStatus: "placeholder", // only change to "verified" after actually checking
}
```

Rules: use the organisation's real root domain for `url`, never a guessed
deep link. Write `supports` as full claim sentences, not keywords — the
`<Cite>` popover and the sources page both show this text. Always start new
sources as `"placeholder"` unless you have personally verified the material
against the claim.

## Adding a timeline entry

Add an object to `timelineEntries` in `src/data/timeline.ts`, matching
`TimelineEntry` in `src/lib/types.ts`. It must populate all six of:
`institutionalStructure`, `developmentEnvironment`, `coachingMethodology`,
`seniorTactics`, `interpretation`, `measurableEvidence` — kept genuinely
distinct, not restating one point six times (see
`docs/RESEARCH_STANDARDS.md`). Set `contested: true` if the entry describes
a genuinely disputed causal claim. Every entry needs at least one real
`sourceIds` entry.

## Adding a nation

Add an object to `nations` in `src/data/nations.ts`, matching `Nation` in
`src/lib/types.ts`. Populate all nine `dimensions` fields (see
`docs/RESEARCH_STANDARDS.md` for what each one means and how to keep them
separate), and include at least two `eras` showing the nation's model
changing over time — never a single static snapshot. List genuine
`caveats`, not just `strengths` — a one-sided case study undermines the
whole site's credibility.

## Adding a proposal

Add an object to `proposals` in `src/data/proposals.ts`, matching
`Proposal` in `src/lib/types.ts`. Every proposal needs all of: `purpose`,
`implementation`, `owner` (who inside football would actually be
responsible), `objection` (the strongest real counter-argument, not a
token one), `response`, `successMeasure` (what would show it's working),
and `unintendedRisk` (what could plausibly go wrong even if adopted). See
`content/proposals-intro.mdx` for why all of these are mandatory.

## Style guide

- **British English** throughout: "organisation" not "organization",
  "colour" not "color", "-ise" not "-ize" endings, "football" never
  "soccer".
- **Tone**: direct, measured, intellectually confident, constructive,
  accessible to an ordinary supporter yet credible to the FA. Historically
  literate. Open about uncertainty rather than falsely definitive.
- **Forbidden**: empty motivational language ("believe in the badge," "it's
  the hope that kills you" as an explanation rather than a feeling);
  consultancy jargon ("synergy," "leverage," "unlock"); hostility toward the
  FA; blaming individual players or managers for structural outcomes;
  national stereotypes as explanations ("German efficiency," "Brazilian
  flair" used causally); treating Spain, or any single country, as the
  universal model to copy; romanticising the Premier League as automatically
  good for England; assuming tactical diversity automatically produces
  adaptability — it only does so with a deliberate interoperability layer,
  which is the site's central argument; claiming any proposal or framework
  guarantees success; single-cause explanations for multi-causal outcomes
  (tournament results especially).
- **Citations and interpretation**: never invented, always separated. See
  `docs/RESEARCH_STANDARDS.md` for the full rules — that document is the
  authority; this style guide summarises it for quick reference while
  editing.
