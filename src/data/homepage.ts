import type { FrameworkLayer, InteropSystem, Statement } from "@/lib/types";

/**
 * Structured copy for the homepage and cross-site summary sections. Full
 * argument and evidence live in content/*.mdx and the other data files;
 * this file holds the short, list-shaped statements those pages summarise.
 */

export const argumentStatements: Statement[] = [
  {
    id: "produces-elite-players",
    text: "England produces elite individual players, in numbers few other football nations can match.",
  },
  {
    id: "strong-mentality-togetherness",
    text: "Recent England teams have shown genuinely strong mentality and togetherness, a real change from earlier tournament generations.",
  },
  {
    id: "exits-expose-limited-control",
    text: "Tournament exits still tend to expose limited collective control under pressure, not a lack of individual quality or spirit.",
  },
  {
    id: "managers-too-little-time",
    text: "International managers have too little contact time to manufacture shared tactical understanding from scratch inside a single tournament cycle.",
  },
  {
    id: "players-varied-environments",
    text: "England's players arrive from highly varied tactical environments, shaped by contrasting club systems, coaches and playing philosophies.",
  },
  {
    id: "needs-national-framework",
    text: "England needs a national framework that turns that variety into adaptability, rather than leaving it as a source of friction.",
  },
];

export const premierLeagueExposures: Statement[] = [
  {
    id: "coaches-different-traditions",
    text: "Coaches from a wide range of different national coaching traditions, each bringing distinct tactical priorities.",
  },
  {
    id: "elite-international-teammates",
    text: "Elite international teammates who bring their own countries' tactical habits and expectations into daily training.",
  },
  {
    id: "contrasting-possession-structures",
    text: "Contrasting possession structures, from patient positional build-up to direct, transition-focused approaches.",
  },
  {
    id: "different-pressing-systems",
    text: "Different pressing systems, from coordinated high pressing to more conservative mid-block approaches.",
  },
  {
    id: "varied-defensive-blocks",
    text: "Varied defensive blocks, requiring players to read and break down several distinct defensive structures across a single season.",
  },
  {
    id: "direct-transitional-football",
    text: "Direct and transitional football, played at a pace and physical intensity distinct from many continental leagues.",
  },
  {
    id: "constant-tactical-evolution",
    text: "Constant tactical evolution, as clubs continually adjust their approaches in response to each other across a season.",
  },
  {
    id: "high-intensity-diverse-opposition",
    text: "High-intensity matches against tactically diverse opposition, week to week, unlike the more predictable rhythm of many other leagues.",
  },
];

export const premierLeagueComplications: Statement[] = [
  {
    id: "specialist-club-roles",
    text: "Players often develop highly specialist roles within one club system that may not translate directly to a different national-team structure.",
  },
  {
    id: "manager-dependent-systems",
    text: "Club tactical systems are frequently manager-dependent and can change abruptly with a managerial appointment, unsettling the very exposure being described.",
  },
  {
    id: "foreign-recruitment-limits-opportunity",
    text: "Foreign recruitment at academy and first-team level can limit first-team opportunities for young English-qualified players, reducing their exposure to senior tactical environments.",
  },
  {
    id: "club-knowledge-not-automatic",
    text: "Tactical knowledge gained at club level does not automatically transfer into a shared national-team vocabulary without deliberate work to translate it.",
  },
  {
    id: "commercial-success-not-development",
    text: "The Premier League's commercial success and global popularity are not the same thing as, and do not guarantee, strong English player development.",
  },
  {
    id: "different-terminology-same-concepts",
    text: "Different clubs often use different terminology for closely related tactical concepts, which can itself be a source of confusion when players meet up nationally.",
  },
  {
    id: "limited-national-preparation-time",
    text: "Whatever exposure the league provides, the national team still has very limited preparation time to turn it into shared collective understanding.",
  },
];

export const frameworkLayers: FrameworkLayer[] = [
  {
    number: 1,
    title: "Common language",
    description:
      "A shared vocabulary for tactical concepts and match situations, so that players and coaches educated in different club systems mean the same thing when they use the same term.",
  },
  {
    number: 2,
    title: "Common recognition",
    description:
      "A shared ability to recognise the same recurring match situations as they develop, such as a high press, a chaotic passage of play or an opponent changing shape, at broadly the same moment rather than reading the game individually.",
  },
  {
    number: 3,
    title: "Common responses",
    description:
      "A shared, rehearsed menu of valid responses to each recognised situation, deliberately kept plural rather than reduced to one prescribed answer, so players can coordinate quickly without needing identical instincts.",
  },
  {
    number: 4,
    title: "Contextual freedom",
    description:
      "Within that shared language, recognition and response menu, individual players and coaches retain real freedom to choose which valid response fits the moment, the opponent and the players on the pitch.",
  },
];

export const interopSystems: InteropSystem[] = [
  {
    id: "positional-possession",
    name: "Positional-possession system",
    habit:
      "Comfort holding defined positional structure and patiently circulating the ball to manipulate opponent shape before progressing.",
    translation:
      "Translates into the shared national principle of controlled build-up: using patient circulation and positional discipline as one recognised, rehearsed way to progress the ball against an organised opponent.",
    accent: "#3B5170",
  },
  {
    id: "high-press",
    name: "High-press system",
    habit:
      "Instinctive collective reaction to press aggressively and immediately when the ball is lost or the opponent is under pressure in their own defensive third.",
    translation:
      "Translates into the shared national principle of coordinated pressing triggers: a common, rehearsed cue for when the whole unit presses together, rather than an individual reflex some players share and others do not.",
    accent: "#4F7156",
  },
  {
    id: "direct-transition",
    name: "Direct-transition system",
    habit:
      "Speed and directness in exploiting transition moments, moving the ball forward rapidly the instant possession is won rather than resetting into possession.",
    translation:
      "Translates into the shared national principle of transition responsibilities: agreed roles for who exploits a transition and who provides defensive cover for it, so directness does not come at the cost of balance.",
    accent: "#B8562E",
  },
  {
    id: "deep-block",
    name: "Deep-block system",
    habit:
      "Disciplined defensive shape and patience defending deep, absorbing pressure before looking to break at pace.",
    translation:
      "Translates into the shared national principle of defending without becoming passive: disciplined defensive organisation recognised as an active, coached skill rather than simply the absence of possession.",
    accent: "#6E6355",
  },
  {
    id: "back-three",
    name: "Back-three system",
    habit:
      "Familiarity with a three-centre-back structure, wing-backs providing width, and the specific covering responsibilities that shape creates.",
    translation:
      "Translates into the shared national principle of methods for changing shape: a rehearsed, recognisable structural option the team can move into and out of together, rather than an unfamiliar system encountered live in a match.",
    accent: "#4A6A8A",
  },
  {
    id: "midfield-diamond",
    name: "Midfield-diamond system",
    habit:
      "Central positional rotation and combination play through a narrow midfield diamond, relying on close support and quick one-touch exchanges.",
    translation:
      "Translates into the shared national principle of spacing principles: a common understanding of how central players should support and rotate around each other regardless of the specific formation on the day.",
    accent: "#C1642F",
  },
];

export const standardise: Statement[] = [
  {
    id: "shared-terminology",
    text: "Shared terminology for tactical concepts and match situations.",
  },
  {
    id: "methods-reading-situations",
    text: "Common methods for reading and recognising game situations as they develop.",
  },
  {
    id: "spacing-principles",
    text: "Shared spacing principles for how players position themselves relative to the ball and each other.",
  },
  {
    id: "pressing-triggers",
    text: "Common pressing and counter-pressing triggers, so the team presses together rather than individually.",
  },
  {
    id: "build-up-reference-points",
    text: "Shared build-up reference points for how the team begins moves from deep positions.",
  },
  {
    id: "rest-defence-principles",
    text: "Common rest-defence principles governing who covers space while others attack.",
  },
  {
    id: "transition-responsibilities",
    text: "Clear, shared transition responsibilities for moments immediately after winning or losing the ball.",
  },
  {
    id: "methods-changing-shape",
    text: "Shared methods for changing formation or shape during a match without losing collective understanding.",
  },
  {
    id: "recurring-match-state-responses",
    text: "A rehearsed menu of recurring responses to common match states, such as protecting a lead or chasing a goal.",
  },
  {
    id: "communication-between-systems",
    text: "Shared communication habits between players educated in different club systems, so on-pitch instructions are mutually understood.",
  },
];

export const doNotStandardise: Statement[] = [
  {
    id: "one-formation",
    text: "One formation, imposed regardless of opponent, personnel or match situation.",
  },
  {
    id: "one-tempo",
    text: "One fixed tempo of play, regardless of the game state or the strengths of the players selected.",
  },
  {
    id: "one-tactical-ideology",
    text: "One tactical ideology treated as the single correct way to play football.",
  },
  {
    id: "one-type-of-midfielder",
    text: "One prescribed type of midfielder, to the exclusion of other genuinely valuable profiles.",
  },
  {
    id: "one-route-to-goal",
    text: "One preferred route to goal, rather than a range of valid ways to create and finish chances.",
  },
  {
    id: "one-academy-style",
    text: "One academy playing style imposed uniformly on club youth development.",
  },
  {
    id: "one-managers-system",
    text: "One individual manager's preferred system, elevated into a permanent national template that outlasts their tenure.",
  },
  {
    id: "diluted-spain-imitation",
    text: "A diluted imitation of Spain's approach, borrowed wholesale rather than adapted to England's own players and footballing culture.",
  },
];
