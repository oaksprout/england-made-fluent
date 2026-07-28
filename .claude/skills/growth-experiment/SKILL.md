---
name: growth-experiment
description: Drive one cycle of England, Made Fluent's growth experiment loop — PLAN an attempt with a written prediction, LOG the result against the Mayfield rungs, EVOLVE the loadout (revert / keep / wait) when there is enough evidence. Triggers on "plan the next growth attempt", "growth experiment", "log this post", "log the result", "should I revert the loadout", "growth plan", "growth log", "growth evolve", "what's the next growth experiment". Reads growth/.local/growth-loadout.md and growth/.local/growth-experiment-log.md; creates them on first PLAN call if absent. Implements GROWTH.md; sole sanctioned writer of new log entries.
---

# growth-experiment

Implements the cycle in [`GROWTH.md`](../../../GROWTH.md). See §2 for audience, §3 for the funnel gap, §4 for the Mayfield rungs, §5 for the five knobs, §7 for the non-negotiables. This skill is their enforcement and the only sanctioned writer of new log entries.

## When to invoke

See frontmatter triggers. Also invoke proactively if the user is about to post or send something growth-related without having defined a prediction.

## Inputs

- `growth/.local/growth-loadout.md` — current loadout.
- `growth/.local/growth-experiment-log.md` — append-only log.

Both are operator-private (gitignored). Create them on first PLAN call if absent; never overwrite a populated loadout without the user's explicit confirmation.

## Mode 1 — PLAN

1. Ask the user which **rung** to move (default to lowest-volume rung with a live mechanism — note that Subscribe has no mechanism yet per GROWTH.md §3, so it cannot be targeted until that's decided), which single **knob** is varying (one of: channel, angle, format, ask, recipient-type), and **what would count as a hit**. Reject vague predictions ("good engagement") — push back for a concrete number, comparison, or binary. Refuse co-varied attempts unless the user explicitly overrides, logging the override in the entry.
2. Append a pending entry to the log: date, loadout version, rung, knob, audience slice (beachhead / expansion, per GROWTH.md §2), prediction. Leave actuals and verdict blank; mark status `pending`.

## Mode 2 — LOG

1. Read the most recent pending entry (or ask the user which attempt). Collect actuals across the target rung and any meaningful adjacent rungs — record by rung, not as a single number. Read-rung actuals may be unavailable if analytics is still disabled (GROWTH.md §3); note that explicitly rather than guessing a number.
2. Compute the verdict:
   - `better` — actuals meet or exceed prediction AND outperform prior same-rung entries.
   - `worse` — actuals miss prediction AND underperform prior same-rung entries.
   - `inconclusive` — any other combination. **Always inconclusive if no written prediction**, regardless of how the result looks.
3. Mark status `logged`. Add ≤2 sentences on what the result implies for the loadout — without acting.

## Mode 3 — EVOLVE

1. Read recent entries filtered to the **same rung-knob pair** as the most recent logged attempt. Require **N ≥ 2** before acting; if fewer, refuse and tell the user what additional data unblocks.
2. With ≥2 attempts: consistently `worse` → propose revert (show current and prior knob values from the changelog, confirm before bumping). Consistently `better` → propose keep + ratify in changelog. Mixed or `inconclusive` → recommend wait, naming the specific attempts that would resolve.
3. When evolving, write the changelog entry on the loadout: date, version bump, knob changed, evidence cited (log entry dates), one-sentence rationale.

## Enforcement

Enforces [`GROWTH.md`](../../../GROWTH.md) §7. Skill-specific specifics:

- PLAN rejects vague predictions and refuses co-varied attempts (override flag required).
- LOG marks any no-prediction entry `inconclusive` regardless of result shape.
- EVOLVE refuses to act under N<2 or with co-varied attempts unreplicated.
- Entries record audience slice so a verdict on beachhead does not propagate to expansion, or vice versa.

## Schemas

### `growth/.local/growth-loadout.md`

```markdown
# Growth loadout — current

**Version**: v0.1
**Date**: YYYY-MM-DD

## The five knobs

**Channel** — [X, Reddit, a named newsletter, a direct DM]
**Angle** — [which part of the argument leads]
**Format** — [single post, thread, DM, comment on someone else's piece]
**Ask** — [what the reader is invited to do next]
**Recipient-type** — [named writer / journalist / podcast host, or blank for broadcast]

## Targeting

**Rung being moved**: [Read / Favorite / ... / Lead]
**Audience slice**: [beachhead / expansion]
**Hypothesis being tested**: [one sentence]

## Changelog

- v0.1 (YYYY-MM-DD): initial loadout.
```

### `growth/.local/growth-experiment-log.md`

```markdown
# Growth experiment log

Append-only. Newest first.

## Entry template

- **Date**: YYYY-MM-DD
- **Loadout version**: vX.Y
- **Attempt**: [link or artefact]
- **Audience slice**: beachhead / expansion
- **Rung targeted**: Read / Favorite / ... / Lead
- **Knob varied**: channel / angle / format / ask / recipient-type
- **Prediction**: [written before shipping]
- **Actual** (LOG mode):
  - Read: N (or "unavailable — analytics off")
  - (etc — rungs that apply)
- **Verdict**: better / worse / inconclusive
- **Notes**: [implications, no actions]
- **Status**: pending / logged

## Entries

[append above this line, newest first]
```

## What this skill does not do

- Invoke other skills.
- Pull metrics automatically — actuals are user-supplied.
- Decide what the Subscribe-rung mechanism is (GROWTH.md §3/§8) — that's a product decision the user makes, at most tested as a PLAN hypothesis.
- Draft outreach or post content itself — that's the user's call informed by the loadout's Angle/Ask, not this skill's job.
- Modify [`GROWTH.md`](../../../GROWTH.md). Canon changes are a direct edit by the user or an explicit request to update it.
