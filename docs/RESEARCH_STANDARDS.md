# Research standards

These are the standards that govern every comparative and historical claim
on England, Made Fluent — the national case studies (`src/data/nations.ts`),
the timeline (`src/data/timeline.ts`), and the long-form prose in
`content/*.mdx` that discusses other footballing nations or England's own
history. They exist because this site's entire value depends on readers
being able to trust how it handles evidence. Anyone adding or editing
comparative content — human or agent — should follow this document exactly,
not just its spirit.

## The absolute rule: never invent

Never invent a source, a quotation, a statistic, a programme name, a study
finding, or a specific date. If you do not know something precisely, either
find a real source that establishes it, or state the uncertainty explicitly
instead of filling the gap with something that sounds plausible. This
applies even to details that feel safe to guess — an exact founding year, a
percentage, a formation. A wrong specific is worse than an honest
generalisation.

Well-established public facts that do not require a fresh citation to state
plainly include: tournament winners and years (e.g. England won the 1966
World Cup; Argentina won the 2022 World Cup), the existence of named
institutions (St George's Park, Clairefontaine, Coverciano, the EPPP), and
similarly settled, widely known football history. Specific figures,
percentages, quotations, or characterisations of what an organisation
"says" or "found" always need a citation, and should not be stated more
precisely than the underlying source actually supports.

## Placeholder discipline

Every source in `src/data/sources.ts` starts with
`verificationStatus: "placeholder"` until a human researcher has located the
actual underlying material and checked it against the specific claim it
supports. Do not change a source to `verified` without having done that
work. Do not write prose that treats a placeholder source's `supports`
strings as confirmed fact — they are working claims to verify, not
established findings. See `content/evidence.mdx` and
`content/sources-methodology.mdx` for how this is explained to readers.

When adding a new source, write a `notes` field that tells a future
researcher exactly what to check: which document, which date, which figure,
which specific wording. A vague note ("verify this") is not acceptable —
write the note a researcher would actually need.

## The nine dimensions, kept separate

Every national case study (`Nation` in `src/lib/types.ts`) must populate all
nine `NationDimensions` fields, and they must be kept genuinely distinct
rather than restating the same point nine times:

1. **League structure** — the domestic competition landscape players
   actually develop and play inside.
2. **Federation policy** — what the national governing body has formally
   done: coach education requirements, development mandates, structural
   rules.
3. **Youth development** — how young players are actually coached day to
   day, at club and/or federation level.
4. **Coach education** — how coaches themselves are trained and qualified,
   and what the dominant methodology in that pipeline is.
5. **Senior tactics** — what the senior national team has actually done on
   the pitch, era by era.
6. **Player quality** — the standard and profile of the available player
   pool, described without stereotype.
7. **Historical period** — which era this specific account applies to; every
   nation must be covered across multiple eras, not one static description.
8. **Tournament outcomes** — the verifiable record: results, stages reached,
   dates.
9. **Interpretation** — our own explicitly labelled reading of how the other
   eight dimensions relate to each other, kept visually and structurally
   separate from the factual dimensions above it.

The discipline here is not decorative. Football commentary constantly
collapses these nine into one undifferentiated story ("Spain plays
possession football because of their culture"), which makes it impossible
to tell which structural factor is actually doing the explanatory work. Keep
them separate even when it makes the prose less tidy.

## Required era contrasts: show change over time

No nation gets a single timeless description. Every case study must show
change across at least the eras listed below, because treating a national
football culture as fixed is both inaccurate and the single most common
error in casual football writing:

- **Spain**: before its 2008–2012 dominant period versus during and after
  it — the shared positional/technical coaching emphasis did not always
  produce that level of senior success, and has not guaranteed it since.
- **France**: across playing generations, from the 1998 World Cup-winning
  cohort through to more recent squads, reflecting real change in playing
  personnel and tactical approach, not one continuous "French style."
- **Argentina**: before, during, and after its Messi-centred sides —
  Argentina's tactical identity and results changed materially across these
  periods and should not be flattened into one description.
- **Germany**: before and after the post-2000 development reform prompted
  by the Euro 2000 exit, tracked through to the present rather than frozen
  at the 2014 World Cup win.
- **Brazil**: across distinct tactical eras, explicitly rejecting the
  shorthand that Brazilian football is one unbroken "jogo bonito" tradition
  — including that celebrated attacking sides have also been tactically
  organised ones.
- **England**: before and after the 2012 opening of St George's Park and the
  2014 launch of England DNA, as the clearest domestic before/after contrast
  this site has to offer, and the one closest to its own argument — treated
  with the same causal caution as every other nation's contrasts, not more
  generously.

## Evidence versus interpretation

Keep factual claims and analytical readings visibly separate at all times.
Factual claims carry a `<Cite id="..." />` to a real source. Analytical
readings — our own account of what a pattern of facts might mean — sit
inside `<Callout tone="interpretation">`. Never let an interpretation read
as if it were a sourced fact, and never attach a citation to a sentence the
source does not actually establish.

## Contested-label policy

Some questions in football history and tactics are genuinely disputed among
serious analysts, not just uncertain due to lack of verification — for
example, how much causal credit a specific academy or reform deserves for a
subsequent tournament result. Where credible people actually disagree, use
`<Callout tone="contested">` rather than `tone="interpretation"`. Reserve
`contested` for genuine disagreement in the literature or among serious
commentators, not for every claim that merely lacks certainty — routine
uncertainty gets `interpretation` or a plain verification note, not the
`contested` label.

## No stereotype shorthand

Do not use national-character shorthand — "Brazilian flair," "German
efficiency," "Italian defending," "Dutch idealism" — as an explanation for
anything. These phrases substitute a cultural cliché for an actual
institutional or tactical account, and they are usually wrong on close
inspection (Brazil's most expressive teams were also organised; Italian
football has moved through genuinely distinct tactical eras, not one
defensive tradition). If a stereotype-shaped claim is actually true in a
specific, checkable way, say the specific true thing instead of the
shorthand.

## Causation humility

Football history rarely offers a controlled comparison. When a reform and a
subsequent result appear related, name the plausible connection but do not
assert it as proven, and note the years and generations of change that sit
between cause and effect. Prefer language like "is widely cited as a
contributor to" or "is consistent with, though it does not prove" over "led
to" or "caused," unless a source directly and specifically establishes a
causal claim.

## How tournament outcomes may and may not be used

Tournament results (winners, finalists, stages reached) may be stated as
plain fact when verified against a reliable record. They may **not** be used
as proof that a given development system, coaching methodology or tactical
approach was correct. A single-elimination tournament is a small,
high-variance sample: a strong system can lose it, and a fortunate run can
make a weaker system look vindicated. Where a tournament outcome is used to
support a broader claim about a system's quality, that use must be framed
explicitly as an interpretation, with the sample-size and variance caveat
either stated or clearly implied, never presented as if the result settles
the question.
