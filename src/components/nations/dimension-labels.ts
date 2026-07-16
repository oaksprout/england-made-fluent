import type { NationDimensions } from "@/lib/types";

/** Human-readable labels for the nine research-standard dimensions, in the
 * canonical order used across `NationCard` and `NationComparison`. */
export const dimensionFields: { key: keyof NationDimensions; label: string }[] =
  [
    { key: "leagueStructure", label: "League structure" },
    { key: "federationPolicy", label: "Federation policy" },
    { key: "youthDevelopment", label: "Youth development" },
    { key: "coachEducation", label: "Coach education" },
    { key: "seniorTactics", label: "Senior national-team tactics" },
    { key: "playerQuality", label: "Player quality" },
    { key: "historicalPeriod", label: "Historical period" },
    { key: "tournamentOutcomes", label: "Tournament outcomes" },
    { key: "interpretation", label: "Interpretation" },
  ];
