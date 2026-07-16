/**
 * Core content types for England, Made Fluent.
 *
 * Every substantive claim on the site traces back to a `Source`. Data files in
 * `src/data/` hold structured content; MDX in `content/` holds long-form prose.
 * Layout components never hard-code copy that belongs in either place.
 */

export type SourceType =
  | "official"
  | "academic"
  | "journalism"
  | "data"
  | "book"
  | "interview"
  | "historical";

export type VerificationStatus = "verified" | "placeholder";

export type Source = {
  id: string;
  title: string;
  author?: string;
  organisation?: string;
  publicationDate?: string;
  url: string;
  accessedDate: string;
  sourceType: SourceType;
  countries?: string[];
  eras?: string[];
  /** Claim IDs or short claim descriptions this source supports. */
  supports: string[];
  notes?: string;
  verificationStatus: VerificationStatus;
};

/* ------------------------------------------------------------------ */
/* National models                                                      */
/* ------------------------------------------------------------------ */

/**
 * The nine dimensions our comparative research standards require us to keep
 * separate for every national case study. See docs/RESEARCH_STANDARDS.md.
 */
export type NationDimensions = {
  leagueStructure: string;
  federationPolicy: string;
  youthDevelopment: string;
  coachEducation: string;
  seniorTactics: string;
  playerQuality: string;
  historicalPeriod: string;
  tournamentOutcomes: string;
  interpretation: string;
};

export type NationEra = {
  id: string;
  period: string;
  title: string;
  summary: string;
  /** Explicitly labelled reading of the era, kept separate from evidence. */
  interpretation?: string;
  contested?: boolean;
  sourceIds?: string[];
};

export type Nation = {
  id: string;
  name: string;
  shortLabel: string;
  /** CSS colour used for accents in comparison UI (not a flag reproduction). */
  accent: string;
  /** One line: what this nation's model actually converted into performance. */
  headline: string;
  modelSummary: string;
  strengths: string[];
  caveats: string[];
  dimensions: NationDimensions;
  eras: NationEra[];
  sourceIds: string[];
};

/* ------------------------------------------------------------------ */
/* Historical timeline                                                  */
/* ------------------------------------------------------------------ */

export type TimelineCategory =
  "institutional" | "tactical" | "development" | "reform" | "hybrid";

export type TimelineEntry = {
  id: string;
  title: string;
  country: string;
  /** Matches Nation.id when applicable, for cross-filtering. */
  countryId?: string;
  startYear: number;
  endYear?: number;
  category: TimelineCategory;
  summary: string;
  /** The six aspects every entry must keep distinct. */
  institutionalStructure: string;
  developmentEnvironment: string;
  coachingMethodology: string;
  seniorTactics: string;
  interpretation: string;
  measurableEvidence: string;
  contested?: boolean;
  sourceIds: string[];
};

/* ------------------------------------------------------------------ */
/* Game-state modules & tactical diagrams                               */
/* ------------------------------------------------------------------ */

export type DiagramTeam = "england" | "opponent";

export type DiagramMarker = {
  /** 0–100 pitch coordinates; x runs left→right towards the opponent goal. */
  x: number;
  y: number;
  team: DiagramTeam | "ball";
  label?: string;
};

export type DiagramArrowKind = "run" | "pass" | "press" | "shift";

export type DiagramArrow = {
  from: [number, number];
  to: [number, number];
  kind: DiagramArrowKind;
  team?: DiagramTeam;
};

export type DiagramPhase = {
  caption: string;
  markers: DiagramMarker[];
  arrows: DiagramArrow[];
};

export type GameStateDiagramSpec = {
  /** Accessible description of the whole diagram for screen readers. */
  description: string;
  phases: DiagramPhase[];
};

export type GameStateResponse = {
  title: string;
  description: string;
};

export type GameStateModule = {
  id: string;
  title: string;
  supporterExplanation: string;
  coachingExplanation: string;
  whyItMatters: string;
  validResponses: GameStateResponse[];
  /** Either grounded evidence or an explicitly labelled analytical reading. */
  evidenceNote: string;
  evidenceKind: "evidence" | "analytical-interpretation";
  diagram: GameStateDiagramSpec;
  sourceIds?: string[];
};

/* ------------------------------------------------------------------ */
/* Proposals & objections                                               */
/* ------------------------------------------------------------------ */

export type Proposal = {
  id: string;
  number: number;
  title: string;
  purpose: string;
  implementation: string;
  owner: string;
  objection: string;
  response: string;
  successMeasure: string;
  unintendedRisk: string;
  sourceIds?: string[];
};

export type Objection = {
  id: string;
  objection: string;
  /** What we concede before answering — most objections are partly right. */
  concession?: string;
  answer: string;
};

/* ------------------------------------------------------------------ */
/* Homepage & shared copy                                               */
/* ------------------------------------------------------------------ */

export type Statement = {
  id: string;
  text: string;
};

export type InteropSystem = {
  id: string;
  /** e.g. "Positional-possession system" */
  name: string;
  /** The habit a player brings from this environment. */
  habit: string;
  /** How that habit translates into the shared national principle. */
  translation: string;
  accent: string;
};

export type FrameworkLayer = {
  number: 1 | 2 | 3 | 4;
  title: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
};
