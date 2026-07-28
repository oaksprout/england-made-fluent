# GROWTH

**What this doc is / is not.** This is the canonical statement of how England, Made Fluent grows: the strategy (what we distribute, to whom, with what call to action) and the engine (how attempts are measured and evolved). It is not a campaign log, an asset library, or a tactical playbook — those live in [`growth/.local/`](growth/.local/) (operator-private, gitignored) and accrete as the engine runs. It derives from [PRODUCT.md](PRODUCT.md) and does not restate it.

**Origin note (2026-07-28).** This adapts the loadout-instrument engine used by a sibling project's GROWTH.md. The engine (§4–§6, the Mayfield curve) transfers as methodology. Nothing about that project's audience, channel, or CTA transfers — this document starts from this site's actual funnel, which currently has a real gap (§3).

## 1. The strategy

England, Made Fluent is an argument, not a product to install. There is nothing to sign up for and no account to create. Growth here means: getting the argument read by people positioned to spread or act on it, and converting readers into visible endorsement (shares, citations, quotes) rather than into users of anything.

The site does not ask for money, membership, or data. The honest ask at every stage is "read this and, if you find it convincing, pass it on" — not "join us."

## 2. Audience

- **Beachhead: football tactics/analysis writers and commentators.** People who already argue in public about English football's structural problems (coaching philosophy, development pathway, national-team tactics) and have an audience that trusts their judgement on this specific topic. The premise (England's limitation is systemic, not individual talent) is pre-accepted in this cluster; the fight is whether _this specific argument_ is worth their attention and their audience's.
- **Expansion: general football media and fans.** Broader sports press, mainstream football Twitter/Reddit. Requires premise-selling the beachhead does not — most of this audience has not thought about "structured adaptability" as a category at all.
- **Long-shot / not a growth target yet: FA-adjacent or journalist-with-access audiences** who could put the argument in front of people who actually set policy. This is an outcome to hope the beachhead produces (via Network/Write rungs, §4), not a channel to cold-pitch before there is public evidence the argument lands.

Single-audience evidence does not generalise (§6); log beachhead and expansion attempts separately.

## 3. The funnel and the current gap

The funnel today, in order:

1. **See the claim** — homepage headline, a shared link, a quoted line.
2. **Read** — the two-minute case, then (for the persuaded) the evidence and proposals.
3. **Share** — the existing share button (`ShareButton`, wired to `site.share.shareText`) is the only CTA beyond "keep reading."
4. **???** — there is no rung between "shared it once" and "wrote about it independently." No mailing list, no open-letter co-signature, no way for a reader who wants to do more than share to register that intent.
5. **Write / Network** — a journalist or writer citing or covering the argument, or someone with reach connecting it to people who could act on it.

**Step 4 is the open question this engine's first experiments should resolve, not assume an answer to.** Candidates — a co-signable version of the open letter, a low-friction mailing list, or deliberately nothing (some campaign sites are stronger for not asking for anything) — should be decided by evidence, not by copying what a SaaS site would do by reflex. Until decided, the Subscribe rung (§4) has no mechanism and every experiment logs it as zero by default; that is a finding, not noise.

Analytics are disabled by default on this site (see [`docs/ANALYTICS.md`](docs/ANALYTICS.md)) — as of this writing there is no Plausible account configured, so there is also no baseline Read-rung count. Until analytics is switched on, Read-rung actuals for on-site behaviour are unavailable; off-site rungs (replies, quote-posts, RTs, inbound "someone sent me this") are still loggable manually and are not blocked by this.

## 4. The engine: the model

Growth runs as a self-improving system on the **loadout-instrument engine**. A mutable **loadout** (five knobs, §5) is iterated by a single skill that forces a written prediction _before_ each attempt and a structured verdict _after_. The verdict is judged by position and movement on the **Mayfield participation curve** (Mayfield 2006, _The Power Law of Participation_):

| #   | Rung      | Site example                                                                                   | Metric                                                                   |
| --- | --------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | Read      | Opened the page from a link or post                                                            | Views (once analytics is on), or link-click count on the sharing surface |
| 2   | Favorite  | Bookmarked, liked the post that carried the link                                               | Likes on the carrying post                                               |
| 3   | Tag       | Quote-posted with their own comment                                                            | Quote-posts, mentions                                                    |
| 4   | Comment   | Replied substantively, argued a point                                                          | Replies weighted by length/substance                                     |
| 5   | Subscribe | Whatever step 4 of §3 turns out to be, once it exists                                          | Signups / co-signatures (currently: no mechanism, logs as N/A)           |
| 6   | Share     | Reposted the link to their own audience                                                        | Reposts, RTs                                                             |
| 7   | Network   | "Someone sent me this" inbound, an intro to a journalist or contact                            | Inbound mentions of referral                                             |
| 8   | Write     | Wrote about the argument on their own surface (thread, newsletter, article)                    | External posts/articles citing the site                                  |
| 9   | Lead      | Cited the argument in something with institutional reach (press piece, FA-adjacent discussion) | Confirmed citations with reach                                           |

Different loadout knobs move different rungs. Channel and Format move Read volume; Angle and Ask move Read → Comment; Recipient-type (who specifically you send it to, for direct outreach) moves Network → Write.

## 5. The loadout: five knobs

Scoped down from the sibling project's eight, because this is solo, manual posting with no automation and no team of amplifiers to track yet:

- **Channel** — where the attempt runs (X, Reddit, a specific newsletter's inbox, a direct DM to a named writer).
- **Angle** — which part of the argument leads (the England-DNA critique, the "diversity as advantage" thesis, a single evidence point, the open letter itself).
- **Format** — single post, thread, direct message, a submitted comment on someone else's piece.
- **Ask** — what the reader is invited to do next (nothing but read, share, reply, follow the "the case" link).
- **Recipient-type** — for direct outreach only: a named tactics writer, a fan-account with reach, a journalist, a podcast host. Blank for broadcast posts.

## 6. The three artifacts

- **[`growth/.local/growth-loadout.md`](growth/.local/growth-loadout.md)** — current loadout: five knobs, version tag, changelog. Operator-private.
- **[`growth/.local/growth-experiment-log.md`](growth/.local/growth-experiment-log.md)** — append-only log of attempts: predictions, actuals by rung, verdicts. Operator-private.
- **[`.claude/skills/growth-experiment/`](.claude/skills/growth-experiment/)** — the skill that drives the cycle (PLAN → LOG → EVOLVE). Committed.

## 7. Non-negotiables

- **No written prediction → the attempt logs as inconclusive.** Hindsight verdicts are how loadouts get reverted on noise.
- **One knob varies per attempt** unless explicitly overridden in the log entry.
- **At least two attempts on the same rung-knob pair before EVOLVE acts.** N=1 is a data point, not a verdict.
- **Single-audience evidence does not generalise** across beachhead and expansion (§2).
- **Verdict is funnel position + rates between rungs, not a single number.**
- **No paid promotion or automation** while the loop is unvalidated — this is a manual, honest-signal engine, not a growth-hacking one.

## 8. What is deliberately not in scope yet

- Deciding what the Subscribe-rung mechanism is (§3) — that is itself a candidate first experiment, not a decision to make in this document.
- Cold outreach to journalists or FA-adjacent contacts before the beachhead loop produces a verdict that the argument lands with tactics/analysis writers.
- Automated metrics pulls from any platform.
- Paid amplification of any kind.
