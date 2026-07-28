---
name: England, Made Fluent
description: Editorial policy-paper restraint carrying a football-tactical argument
colors:
  chalk: "#faf6ef"
  chalk-deep: "#f1ebdf"
  red: "#c8102e"
  red-deep: "#a00d25"
  navy: "#0c1f3d"
  navy-soft: "#1b3358"
  grass: "#3e7a4f"
  grass-deep: "#2e5c3b"
  ink: "#191a1c"
  ink-soft: "#43464b"
  ink-faint: "#63676e"
  line: "#ddd5c6"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  sm: "6px"
  md: "8px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "64px"
  section-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.full}"
    height: "48px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 16px"
  button-ghost-hover:
    textColor: "{colors.red}"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
  chip-filter-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
  card:
    backgroundColor: "{colors.chalk-deep}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: England, Made Fluent

## 1. Overview

**Creative North Star: "The Match Dossier"**

Every surface behaves like a page from a confidential briefing prepared for
the England setup: sourced, calm, and quietly certain. The ground is warm
chalk, the body is serif, sections are separated by hairline rules rather
than boxes, and the evidence apparatus (citation daggers, verification
badges, the bibliography) is visible working, not decoration. The word
"chalk" is doing double duty on purpose: it is the paper the dossier is
printed on and the line-marking on the training pitch. The tactical layer
(pitch diagrams, route lines, the off-centre-cross mark) supplies the
football identity; the editorial layer never dresses up as football.

The system explicitly rejects tabloid sports media (screaming headlines,
red-top urgency), generic SaaS marketing (gradient heroes, glassmorphism,
identical card grids), fan-meme and terrace culture (crests, kits, banter),
and any resemblance to official federation sites. Independence must be
visible at a glance, and no visual choice may imply more certainty than the
text claims: the design says "unverified" and "contested" out loud.

**Key Characteristics:**

- Paper-first: warm chalk ground, serif long-form body capped at 65ch
- Flat at rest: depth from hairline rules and tonal tints, not shadows
- Red as pulse: England red only where the argument moves
- Two voices: Archivo speaks structure, Source Serif 4 speaks argument
- Evidence rendered as UI: daggers, badges, and honest status labels
- Green quarantined to the tactical SVG canvas
- Print is a first-class surface

## 2. Colors: The Dossier Palette

A newsprint ground, one governing accent, one authority tone, and a tactical
green that never leaves the pitch.

### Primary

- **England Red** (#c8102e): the argument's pulse. Kickers, citation
  daggers, link underlines, active nav, the reading-progress bar, focus
  outlines, and one primary CTA per screen. It appears small and often, never
  large and idle.
- **Deep England Red** (#a00d25): hover state of the primary CTA; tinted at
  10% behind "placeholder" verification badges and contested callouts.

### Secondary

- **Dossier Navy** (#0c1f3d): institutional authority. Full-bleed hero,
  closing section and footer panels (chalk text on top, at 80/70/50 opacity
  steps); selected chips; blockquote rules; text selection.
- **Soft Navy** (#1b3358): secondary navy surfaces and hover tones inside
  navy panels.

### Tertiary

- **Pitch Green** (#3e7a4f) and **Mown Green** (#2e5c3b): the playing
  surface inside tactical SVG diagrams, with chalk markings on top. These two
  colours exist nowhere else: no green buttons, badges, or accents in the
  editorial chrome, ever.

### Neutral

- **Chalk** (#faf6ef): the page ground, warm like newsprint, never pure
  white.
- **Deep Chalk** (#f1ebdf): panel and card tint, code background, hover
  fills. Usually applied at 30 to 60% opacity over chalk.
- **Ink** (#191a1c): headings and emphasis. Never pure black.
- **Soft Ink** (#43464b): body prose.
- **Faint Ink** (#63676e): captions, metadata, bylines; the darkest step
  that still reads as secondary while holding 4.5:1 on both chalk grounds.
- **Hairline** (#ddd5c6): 1px rules that structure the page: section
  borders, card borders, table rules, dividers.

### Named Rules

**The Red Thread Rule.** England red stitches the argument together at small
points of movement and emphasis; it covers roughly a tenth of any screen and
never becomes a background outside the primary CTA.

**The Grass Stays on the Pitch Rule.** Green renders only inside tactical
SVGs. If green appears in editorial chrome, it is a defect.

## 3. Typography

**Display Font:** Archivo (with system-ui fallback)
**Body Font:** Source Serif 4 (with Georgia fallback)

**Character:** A grotesque with civic weight for structure, a text serif with
warmth for argument. Together they read as a well-set policy paper, not a
sports site: Archivo does the signage, Source Serif does the persuading.

### Hierarchy

- **Display** (900, clamp(2.25rem, 5vw, 3.75rem), 1.05): the hero thesis
  headline only. Black weight, tight tracking (-0.025em).
- **Headline** (700, clamp(1.875rem, 3vw, 2.25rem), 1.2): section h2s,
  paired with an anchor id and copy-link control.
- **Title** (600, 1.5rem, 1.3): h3 subsections and card titles.
- **Body** (400, 1.125rem, 1.625): Source Serif 4 in Soft Ink, max line
  length 65ch (max-w-prose). Ledes step up to the same size in a looser
  block below headings.
- **Label** (600, 0.75rem, 0.14em tracking, uppercase): the red kicker
  eyebrow above headings; also badge and callout labels at 0.12em.

### Named Rules

**The Two Voices Rule.** Archivo speaks structure: headings, kickers, nav,
buttons, badges, table headers, the numbered "01" numerals. Source Serif 4
speaks argument: body prose, ledes, notes. Neither voice borrows the other's
job.

## 4. Elevation

The dossier lies flat. Depth comes from ink on paper: hairline borders
(#ddd5c6) and Deep Chalk tints establish grouping; full-bleed navy panels
establish major structure. Exactly two elements cast shadows, both transient
overlays that genuinely float above the page: the header's "More" dropdown
(shadow-lg) and the citation popover (shadow-xl). The sticky header is
translucent chalk (85%) with a backdrop blur: a functional reading aid, not
glass decoration.

### Named Rules

**The Paper Lies Flat Rule.** Surfaces at rest never cast shadows. A shadow
is permitted only on a transient overlay that appears above the page and
disappears again.

## 5. Components

The component vocabulary is small and pill-shaped: rounded-full for anything
interactive and compact, 8px radius for panels, hairlines for structure.

### Buttons

- **Shape:** full pill (9999px), Archivo 0.875rem semibold, height 48px
  (primary CTA) or 44px (actions), colour-only transitions (~150ms
  ease-out).
- **Primary:** England Red fill, Chalk text, 24px horizontal padding; hover
  deepens to Deep England Red. One per screen region.
- **On-navy secondary:** transparent pill, 40%-chalk border, chalk text;
  hover solidifies the border and adds a 10% chalk fill.
- **Ghost action:** transparent pill, Hairline border, Dossier Navy text,
  with a 16px Lucide icon; hover turns border and text red
  (ShareButton, letter actions).
- **Focus:** 3px solid England Red outline, 2px offset, on everything.

### Chips

- **Style:** full pill, 1px border, 0.875rem text, 12x8px padding; used as
  filter toggles on the timeline, nations and interop views.
- **State:** unselected is Hairline border on transparent; selected is
  solid Dossier Navy with Chalk text. Small colour dots inside chips carry
  nation identity.

### Cards / Containers

- **Corner Style:** 8px (rounded-lg).
- **Background:** Deep Chalk at 50% over the chalk ground.
- **Shadow Strategy:** none, per The Paper Lies Flat Rule; a 1px Hairline
  border does the separating.
- **Internal Padding:** 24px.
- Cards are used sparingly, for genuinely parallel items (exposure
  statements, nation summaries); long-form argument stays unboxed prose.

### Navigation

- **Header:** sticky, translucent chalk with blur, hairline bottom border.
  Desktop links are Archivo 0.875rem medium in Soft Ink, hover to navy;
  the active page is red. Overflow sits behind a "More" dropdown (the one
  shadowed element besides popovers). Mobile is a full-width panel with
  divided rows at 44px minimum height.
- **Footer:** full-bleed Dossier Navy with chalk text stepped by opacity,
  monochrome BrandMark, and the independence disclaimer set plainly.

### The Citation Apparatus (signature)

The system's centrepiece. A red superscript dagger with a dotted underline
sits inline in prose; hover or focus opens a chalk popover (288px, 8px
radius, hairline border, shadow-xl) carrying the source title, byline,
dates, a type badge (navy pill) and an honest verification badge: red-tinted
"placeholder", navy-outlined "corroborated", navy-tinted "verified". The
same badges reappear full-size on bibliography SourceCards, which are
hairline-separated entries, not cards. Status is always written in words;
colour never carries it alone.

### Callout (signature)

A labelled aside for keeping interpretation distinct from evidence: a full
hairline frame over a tinted ground (Deep Chalk for notes and
interpretations, 5% red for contested readings), with a small tone dot
beside an uppercase Archivo label naming the tone. The label text, not the
colour, is the semantic signal. The blockquote left rule in long-form prose
is the system's single remaining side accent, kept as a print convention.

### Tactical Diagrams (signature)

SVG pitches drawn as chalk on grass: 0.5-width chalk markings at 85% opacity
over Pitch Green with subtle mow stripes, players as navy/red markers,
opponents in grey (#8b8f96). The BrandMark follows the same logic: an
off-centre St George's cross behind two tactical route lines, deliberately
reading as a coaching diagram, never as a flag, shield or crest.

## 6. Do's and Don'ts

### Do:

- **Do** keep England Red (#c8102e) at pulse points only: kickers, daggers,
  underlines, active nav, progress bar, one primary CTA. Roughly a tenth of
  any screen.
- **Do** separate the two voices: Archivo for structure, Source Serif 4 for
  argument, body capped at 65ch.
- **Do** build depth from paper: Hairline borders and Deep Chalk tints, with
  shadows reserved for the dropdown and the citation popover.
- **Do** write states in words (Verified / Corroborated / Placeholder, Note /
  Contested); colour is never the only signal.
- **Do** keep navy panels (hero, closing, footer) as the only full-bleed
  dark surfaces, with chalk text stepped at 80/70/50 opacity.
- **Do** respect print: the open letter and long-form pages must survive
  `@media print` on white ground in black ink with the chrome stripped.

### Don't:

- **Don't** use tabloid sports media devices: screaming headlines, red-top
  urgency, clickbait density.
- **Don't** import generic SaaS marketing: gradient heroes, gradient text,
  glassmorphism, identical icon-card grids, dark-mode gloss.
- **Don't** borrow fan-meme and terrace culture: crests, shields, lions, kit
  photography, banter registers.
- **Don't** imitate official federation corporate sites (FA, Premier League,
  UEFA, FIFA); independence must be visible at a glance.
- **Don't** let Pitch Green (#3e7a4f) out of the tactical SVGs. No green in
  editorial chrome.
- **Don't** use side-stripe accents. The blockquote left rule is the single
  grandfathered print convention; emphasis elsewhere uses full hairline
  frames, tints, or labels.
- **Don't** animate layout properties, bounce, or choreograph entrances.
  Colour transitions (~150ms ease-out) and the single fade-up keyframe are
  the entire motion vocabulary, all gated by prefers-reduced-motion.
- **Don't** suppress focus outlines. 3px solid red, 2px offset, everywhere.
