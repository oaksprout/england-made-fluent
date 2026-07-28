import type { NavItem } from "@/lib/types";

/**
 * Central site configuration. All naming, taglines and share copy live here so
 * the campaign can be renamed or re-worded without touching components.
 */
export const site = {
  name: "England, Made Fluent",
  shortName: "Made Fluent",
  subtitle: "Turning football's greatest diversity into a national advantage",
  /** Canonical production URL. Override with NEXT_PUBLIC_SITE_URL. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://oaksprout.github.io/england-made-fluent",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  locale: "en-GB",

  thesis: {
    headline: "England does not lack talent. It lacks fluency.",
    supporting:
      "English players are developed inside the most tactically diverse elite league in world football. But when they come together for England, that diversity too often turns to friction.",
    identity: "Structured adaptability",
    identityDefinition:
      "The trained capacity to change shape, tempo and tactical emphasis without losing collective understanding.",
    proposition:
      "England should not industrialise one way of playing. It should industrialise the ability to play together in several ways.",
    secondary:
      "The Premier League gives England tactical diversity. The national system must turn that diversity into collective intelligence.",
    closingHeadline: "Turn England's diversity into England's advantage.",
    closingCopy:
      "The next England team should arrive at a tournament already knowing itself. That takes a shared football language, rooted in the football its players actually play, capable of turning different ideas into collective action.",
  },

  cta: {
    primary: { label: "Read the two-minute case", href: "/the-case/" },
    secondary: { label: "Examine the evidence", href: "/evidence/" },
  },

  share: {
    /** Main social preview line. */
    primaryCard: "England's diversity should be its advantage.",
    /** Secondary share card line. */
    secondaryCard: "England should industrialise adaptability.",
    shareText:
      "England does not lack talent. It lacks fluency. An independent case for turning the Premier League's tactical diversity into a national advantage.",
  },

  disclaimer:
    "England, Made Fluent is an independent project and is not affiliated with or endorsed by The Football Association or the Premier League.",

  description:
    "An independent campaign and policy argument: England's remaining limitation is collective fluency. The national system should turn the Premier League's tactical diversity into structured adaptability.",

  keywords: [
    "England national football team",
    "football policy",
    "England DNA",
    "structured adaptability",
    "tactical diversity",
    "Premier League",
    "collective fluency",
    "St George's Park",
  ],

  author: {
    name: "England, Made Fluent",
    email: "info@gtawyb.com",
  },

  analytics: {
    /** Privacy-conscious analytics, disabled by default. See docs/ANALYTICS.md. */
    enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true",
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "The case", href: "/the-case/" },
  { label: "England's advantage", href: "/englands-advantage/" },
  { label: "The model", href: "/the-model/" },
  { label: "Football nations", href: "/football-nations/" },
  { label: "History", href: "/history/" },
  { label: "Evidence", href: "/evidence/" },
  { label: "Proposals", href: "/proposals/" },
  { label: "England DNA", href: "/england-dna/" },
  { label: "About", href: "/about/" },
];

export const footerNavItems: NavItem[] = [
  ...navItems,
  { label: "Sources", href: "/sources/" },
];
