# Product

## Register

brand

## Users

Three concentric audiences, all arriving in reading mode rather than task
mode:

1. **The linked-in reader.** An informed England fan or football-media reader
   who follows a shared link, reads the two-minute case, and decides whether
   the argument deserves attention. Mostly mobile, short first session.
2. **The professional sceptic.** Journalists, analysts, coaches and
   FA-adjacent people who test the sourcing before crediting the argument.
   They click citations, check the bibliography, and look for overclaiming.
3. **The deep reader.** The small group who work through the case studies,
   timeline, twelve game-state modules and the open letter end to end.
   Desktop, long sessions, likely to print or share.

Every one of them is answering the same question on arrival: is this serious?

## Product Purpose

An independent campaign and policy site making one argument: England's
tournament ceiling is set by collective tactical fluency, not talent or
mentality, and the remedy is a national framework of "structured
adaptability" that turns Premier League tactical diversity into a shared
football language. The site carries the two-minute case, the evidence, twelve
proposals to the FA, eight national case studies, a historical timeline,
twelve tactical modules and an open letter.

Success is credibility. A reader takes the argument seriously because every
claim is sourced, verification status is displayed honestly in the UI
(verified / corroborated / placeholder), and nothing overclaims. The site
must never look or feel official: it is not an FA, Premier League, UEFA or
FIFA product, and its independence has to be legible at a glance.

## Brand Personality

Restrained editorial authority: a policy paper written by someone who loves
football, not a football site straining to sound serious. Three words:
sourced, calm, committed. The surface reads as paper (warm chalk ground,
serif body, hairline rules); the tactical layer (pitch diagrams, route
lines, the off-centre-cross mark) supplies identity without costume. England
red is an accent with a pulse, not a wall colour. Patriotic in subject,
never jingoistic in tone; confident without triumphalism; honest about
uncertainty to the point of labelling its own unverified sources in the
interface.

## Anti-references

- **Tabloid sports media.** Screaming headlines, red-top urgency, clickbait
  density, ad clutter.
- **Generic SaaS marketing.** Gradient heroes, glassmorphism, identical
  feature-card grids, dark-mode-by-default gloss.
- **Fan-meme and terrace culture.** Banter registers, crest worship, kit
  aesthetics.
- **Official federation corporate sites.** FA, Premier League, UEFA or FIFA
  visual language: crests, shields, lions, kit photography. The independence
  disclaimer must be visually self-evident, not merely stated.

## Design Principles

1. **Evidence is interface.** Citations, verification badges and the
   bibliography are first-class UI. The site persuades by showing its
   working.
2. **Restraint is credibility.** An independent campaign earns authority
   through paper-like calm. Every decorative flourish spends trust.
3. **The pitch is the only place for green.** Tactical visuals illustrate
   the argument on their own canvas; the editorial chrome never dresses up
   as football.
4. **Honest about uncertainty.** The design must be able to say "unverified"
   and "contested" out loud. No visual choice may imply more certainty than
   the text claims.
5. **Independence is visible.** Visual distance from official football
   branding is a design requirement, not a legal footnote. Print is a real
   surface: the open letter must hold up on paper.

## Accessibility & Inclusion

WCAG 2.1 AA, enforced in CI via axe-core Playwright checks. Non-negotiables
already in the system: visible 3px red focus outlines (styled, never
removed); all motion gated behind prefers-reduced-motion; colour is never
the only signal (verification and callout states always carry text labels);
44px minimum touch targets on interactive controls; body and caption
contrast verified against both chalk and chalk-deep grounds.
