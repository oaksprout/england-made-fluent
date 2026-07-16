# Citations

Every factual claim on England, Made Fluent traces back to a `Source` object
in `src/data/sources.ts`. This document is the practical, field-by-field
guide to adding and verifying one. For the broader research standards that
govern _what_ a citation may be used to claim (evidence vs. interpretation,
the contested-label policy, causation humility, and the absolute rule
against inventing anything), see
[docs/RESEARCH_STANDARDS.md](RESEARCH_STANDARDS.md) — that document is the
authority; this one is the how-to.

## The `Source` type

```ts
export type Source = {
  id: string;
  title: string;
  author?: string;
  organisation?: string;
  publicationDate?: string;
  url: string;
  accessedDate: string;
  sourceType: SourceType; // "official" | "academic" | "journalism" | "data" | "book" | "interview" | "historical"
  countries?: string[];
  eras?: string[];
  supports: string[];
  notes?: string;
  verificationStatus: VerificationStatus; // "verified" | "placeholder"
};
```

## Adding a source, field by field

Add a new object to the `sources` array in `src/data/sources.ts`:

- **`id`** — short, kebab-case, stable (other files reference it by this
  string, and it becomes the `/sources/#<id>` anchor). Once other content
  cites an id, do not rename it — add a new source instead if the meaning
  genuinely changes.
- **`title`** — a descriptive title of the actual document/dataset/page,
  not a paraphrase of the claim it supports.
- **`author`** _or_ **`organisation`** — use `author` for a named
  individual work (a book, an interview, a bylined article); use
  `organisation` for an institutional publication (the FA, the Premier
  League, a federation). Either or both may be set.
- **`publicationDate`** — when the source itself was published/released, if
  known. Omit if genuinely unknown rather than guessing.
- **`url`** — the organisation's real root domain (e.g.
  `https://www.thefa.com`), **never a guessed deep link**. A citation that
  links somewhere invented is worse than no link at all; once a researcher
  verifies the source, they should update `url` to the actual specific page
  they found.
- **`accessedDate`** — `YYYY-MM-DD`, the date the source was (or will be)
  checked.
- **`sourceType`** — one of `"official"` (federation/league/club own
  material), `"academic"`, `"journalism"`, `"data"` (statistical datasets),
  `"book"`, `"interview"`, `"historical"` (historical record/archive
  material).
- **`countries`** — ISO-ish plain country names relevant to the source
  (e.g. `["England"]`, `["Spain"]`), used for bibliography filtering. Omit
  or use `[]` if not country-specific.
- **`eras`** — free-text era labels (e.g. `["2014"]`, `["2008-2012"]`),
  also used for filtering.
- **`supports`** — an array of full claim sentences this source is being
  used to support, written out in full (not keywords). This text is shown
  directly in the `Cite` popover and on `/sources/`, so it needs to read as
  a real sentence.
- **`notes`** — exactly what a future researcher needs to check: which
  document, which date, which specific figure or wording. "Verify this" is
  not an acceptable note — write the note a researcher would actually act
  on.
- **`verificationStatus`** — always start at `"placeholder"`. Only change to
  `"verified"` once the work described below has actually been done.

## The verification workflow: placeholder → verified

1. **Locate the real, primary material** the source claims to be — the
   FA's actual England DNA launch documents, the actual RFEF development
   curriculum, the actual dataset, and so on. Do not rely on secondary
   paraphrase or memory.
2. **Check every string in `supports`** against that material. If a claim
   turns out to be wrong, imprecise, or unsupported by what you found,
   correct or remove it — do not leave a `supports` string standing that
   the source doesn't actually establish.
3. **Update `url`** to the specific page/document you actually verified
   against (still a real URL you visited, never invented), and fill in
   `publicationDate` if you can now establish it precisely.
4. **Update `notes`** to reflect what was actually checked and any caveats
   worth recording (e.g. "confirmed launch date via [specific document]; FA
   has not published a machine-readable dataset for X, so that claim
   remains unverified and has been removed from `supports`").
5. **Only then** set `verificationStatus: "verified"`.

Until that happens, every place the source is used — the `Cite` popover, the
bibliography — visibly shows an "Unverified — placeholder awaiting
verification" badge. `tests/unit/data-integrity.test.ts` also asserts every
seeded source is currently a placeholder as a reminder that none of this
site's current sourcing has been through this process yet.

## Using `<Cite>` inline

In MDX prose:

```mdx
St George's Park opened in 2012 <Cite id="fa-st-georges-park" />.
```

- `id` must exactly match an existing `id` in `src/data/sources.ts`. If the
  source doesn't exist yet, add it first, following the fields above.
- Every factual claim needs a `<Cite>`. Analytical readings (our own
  interpretation of what a pattern of facts might mean) do not get a
  `<Cite>` — they go inside `<Callout tone="interpretation">` instead. Never
  attach a citation to a sentence the source doesn't actually establish.
- `Cite` renders `children` unchanged (and does nothing else) for an unknown
  `id` rather than crashing, but it also logs a development-time warning —
  treat that warning as a bug to fix, not a safe fallback to rely on.

`Cite` links through to `/sources/#<id>` (the bibliography entry, rendered
by `SourceCard`), which shows the full record including the verification
badge, dates, country/era tags, and an external link with
`rel="noopener noreferrer"`.

## Never-invent rules (summary)

The full rules live in
[docs/RESEARCH_STANDARDS.md](RESEARCH_STANDARDS.md#the-absolute-rule-never-invent).
In short: never invent a source, a quotation, a statistic, a programme
name, or a specific date. If something is not known precisely, either find
a real source that establishes it or state the uncertainty explicitly —
never fill the gap with something that merely sounds plausible.
