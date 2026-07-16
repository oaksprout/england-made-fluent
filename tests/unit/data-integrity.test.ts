import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { sources, getSource } from "@/data/sources";
import { nations } from "@/data/nations";
import { timelineEntries } from "@/data/timeline";
import { gameStateModules } from "@/data/game-states";
import { proposals } from "@/data/proposals";
import { objections } from "@/data/objections";
import {
  argumentStatements,
  premierLeagueExposures,
  premierLeagueComplications,
  frameworkLayers,
  interopSystems,
  standardise,
  doNotStandardise,
} from "@/data/homepage";
import type { SourceType, VerificationStatus } from "@/lib/types";

const SOURCE_TYPES: SourceType[] = [
  "official",
  "academic",
  "journalism",
  "data",
  "book",
  "interview",
  "historical",
];
const VERIFICATION_STATUSES: VerificationStatus[] = ["verified", "placeholder"];

const CONTENT_DIR = join(process.cwd(), "content");

function nonEmpty(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

describe("data counts", () => {
  it("has exactly 32 sources", () => {
    expect(sources).toHaveLength(32);
  });

  it("has exactly 8 nations with the contracted ids", () => {
    expect(nations).toHaveLength(8);
    expect(nations.map((n) => n.id).sort()).toEqual(
      [
        "argentina",
        "brazil",
        "croatia",
        "france",
        "germany",
        "italy",
        "netherlands",
        "spain",
      ].sort(),
    );
  });

  it("has exactly 14 timeline entries", () => {
    expect(timelineEntries).toHaveLength(14);
  });

  it("has exactly 12 game-state modules", () => {
    expect(gameStateModules).toHaveLength(12);
  });

  it("has exactly 12 proposals", () => {
    expect(proposals).toHaveLength(12);
  });

  it("has exactly 7 objections", () => {
    expect(objections).toHaveLength(7);
  });

  it("has the contracted homepage statement counts", () => {
    expect(argumentStatements).toHaveLength(6);
    expect(premierLeagueExposures).toHaveLength(8);
    expect(premierLeagueComplications).toHaveLength(7);
    expect(frameworkLayers).toHaveLength(4);
    expect(interopSystems).toHaveLength(6);
    expect(standardise).toHaveLength(10);
    expect(doNotStandardise).toHaveLength(8);
  });
});

describe("sources", () => {
  it("gives every source non-empty id/title/url/accessedDate/supports and valid enums", () => {
    for (const source of sources) {
      expect(nonEmpty(source.id), `id for ${source.title}`).toBe(true);
      expect(nonEmpty(source.title), `title for ${source.id}`).toBe(true);
      expect(nonEmpty(source.url), `url for ${source.id}`).toBe(true);
      expect(
        nonEmpty(source.accessedDate),
        `accessedDate for ${source.id}`,
      ).toBe(true);
      expect(Array.isArray(source.supports), `supports for ${source.id}`).toBe(
        true,
      );
      expect(
        source.supports.length,
        `supports non-empty for ${source.id}`,
      ).toBeGreaterThan(0);
      expect(SOURCE_TYPES, `sourceType for ${source.id}`).toContain(
        source.sourceType,
      );
      expect(
        VERIFICATION_STATUSES,
        `verificationStatus for ${source.id}`,
      ).toContain(source.verificationStatus);
    }
  });

  it("has unique source ids", () => {
    const ids = sources.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("seeds every source as an unverified placeholder", () => {
    for (const source of sources) {
      expect(source.verificationStatus).toBe("placeholder");
    }
  });

  it("resolves every source id via getSource", () => {
    for (const source of sources) {
      expect(getSource(source.id)).toEqual(source);
    }
  });

  it("returns undefined for an unknown source id", () => {
    expect(getSource("does-not-exist")).toBeUndefined();
  });
});

describe("cross-references resolve via getSource", () => {
  it("resolves every nation sourceIds entry", () => {
    for (const nation of nations) {
      for (const id of nation.sourceIds) {
        expect(getSource(id), `${nation.id} -> ${id}`).toBeDefined();
      }
      for (const era of nation.eras) {
        for (const id of era.sourceIds ?? []) {
          expect(
            getSource(id),
            `${nation.id}/${era.id} -> ${id}`,
          ).toBeDefined();
        }
      }
    }
  });

  it("resolves every timeline entry sourceIds entry", () => {
    for (const entry of timelineEntries) {
      for (const id of entry.sourceIds) {
        expect(getSource(id), `${entry.id} -> ${id}`).toBeDefined();
      }
    }
  });

  it("resolves every game-state module sourceIds entry", () => {
    for (const module_ of gameStateModules) {
      for (const id of module_.sourceIds ?? []) {
        expect(getSource(id), `${module_.id} -> ${id}`).toBeDefined();
      }
    }
  });

  it("resolves every proposal sourceIds entry", () => {
    for (const proposal of proposals) {
      for (const id of proposal.sourceIds ?? []) {
        expect(getSource(id), `${proposal.id} -> ${id}`).toBeDefined();
      }
    }
  });
});

describe("nations", () => {
  const DIMENSION_KEYS = [
    "leagueStructure",
    "federationPolicy",
    "youthDevelopment",
    "coachEducation",
    "seniorTactics",
    "playerQuality",
    "historicalPeriod",
    "tournamentOutcomes",
    "interpretation",
  ] as const;

  it("gives every nation all 9 dimension fields, non-empty", () => {
    for (const nation of nations) {
      for (const key of DIMENSION_KEYS) {
        expect(
          nonEmpty(nation.dimensions[key]),
          `${nation.id}.dimensions.${key}`,
        ).toBe(true);
      }
    }
  });

  it("gives every nation at least 2 eras", () => {
    for (const nation of nations) {
      expect(nation.eras.length, nation.id).toBeGreaterThanOrEqual(2);
    }
  });

  it("gives every nation at least 1 caveat", () => {
    for (const nation of nations) {
      expect(nation.caveats.length, nation.id).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("timeline entries", () => {
  it("is sorted by startYear ascending", () => {
    const years = timelineEntries.map((e) => e.startYear);
    const sorted = [...years].sort((a, b) => a - b);
    expect(years).toEqual(sorted);
  });

  it("gives every entry all six structured fields, non-empty", () => {
    const fields = [
      "institutionalStructure",
      "developmentEnvironment",
      "coachingMethodology",
      "seniorTactics",
      "interpretation",
      "measurableEvidence",
    ] as const;
    for (const entry of timelineEntries) {
      for (const field of fields) {
        expect(nonEmpty(entry[field]), `${entry.id}.${field}`).toBe(true);
      }
    }
  });
});

describe("game-state modules", () => {
  it("gives every module non-empty supporter/coaching/why-it-matters explanations", () => {
    for (const module_ of gameStateModules) {
      expect(nonEmpty(module_.supporterExplanation), module_.id).toBe(true);
      expect(nonEmpty(module_.coachingExplanation), module_.id).toBe(true);
      expect(nonEmpty(module_.whyItMatters), module_.id).toBe(true);
    }
  });

  it("gives every module at least 3 valid responses", () => {
    for (const module_ of gameStateModules) {
      expect(module_.validResponses.length, module_.id).toBeGreaterThanOrEqual(
        3,
      );
      for (const response of module_.validResponses) {
        expect(nonEmpty(response.title), `${module_.id} response title`).toBe(
          true,
        );
        expect(
          nonEmpty(response.description),
          `${module_.id} response description`,
        ).toBe(true);
      }
    }
  });

  it("gives every diagram at least 2 phases, each with >=5 markers, exactly one ball and a caption", () => {
    for (const module_ of gameStateModules) {
      const { diagram } = module_;
      expect(diagram.phases.length, module_.id).toBeGreaterThanOrEqual(2);
      for (const [index, phase] of diagram.phases.entries()) {
        const label = `${module_.id} phase ${index}`;
        expect(nonEmpty(phase.caption), `${label} caption`).toBe(true);
        expect(phase.markers.length, `${label} markers`).toBeGreaterThanOrEqual(
          5,
        );
        const ballMarkers = phase.markers.filter((m) => m.team === "ball");
        expect(ballMarkers.length, `${label} exactly one ball`).toBe(1);
      }
    }
  });

  it("keeps every marker coordinate within the 0-100 pitch space", () => {
    for (const module_ of gameStateModules) {
      for (const [index, phase] of module_.diagram.phases.entries()) {
        for (const marker of phase.markers) {
          expect(
            marker.x,
            `${module_.id} phase ${index} marker x`,
          ).toBeGreaterThanOrEqual(0);
          expect(
            marker.x,
            `${module_.id} phase ${index} marker x`,
          ).toBeLessThanOrEqual(100);
          expect(
            marker.y,
            `${module_.id} phase ${index} marker y`,
          ).toBeGreaterThanOrEqual(0);
          expect(
            marker.y,
            `${module_.id} phase ${index} marker y`,
          ).toBeLessThanOrEqual(100);
        }
        for (const arrow of phase.arrows) {
          for (const point of [arrow.from, arrow.to]) {
            expect(point[0]).toBeGreaterThanOrEqual(0);
            expect(point[0]).toBeLessThanOrEqual(100);
            expect(point[1]).toBeGreaterThanOrEqual(0);
            expect(point[1]).toBeLessThanOrEqual(100);
          }
        }
      }
    }
  });
});

describe("proposals", () => {
  const TEXT_FIELDS = [
    "title",
    "purpose",
    "implementation",
    "owner",
    "objection",
    "response",
    "successMeasure",
    "unintendedRisk",
  ] as const;

  it("gives every proposal all 8 text fields, non-empty", () => {
    for (const proposal of proposals) {
      for (const field of TEXT_FIELDS) {
        expect(nonEmpty(proposal[field]), `${proposal.id}.${field}`).toBe(true);
      }
    }
  });

  it("has unique numbers 1-12", () => {
    const numbers = proposals.map((p) => p.number).sort((a, b) => a - b);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});

describe("objections", () => {
  it("gives every objection a non-empty objection and answer", () => {
    for (const objection of objections) {
      expect(nonEmpty(objection.objection), objection.id).toBe(true);
      expect(nonEmpty(objection.answer), objection.id).toBe(true);
    }
  });
});

describe("MDX content", () => {
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  it("finds the expected MDX files", () => {
    expect(files.length).toBeGreaterThan(0);
  });

  it("every MDX file starts with `export const meta`", () => {
    for (const file of files) {
      const raw = readFileSync(join(CONTENT_DIR, file), "utf-8");
      expect(raw.trimStart().startsWith("export const meta"), file).toBe(true);
    }
  });

  it('every <Cite id="..." /> reference in MDX resolves via getSource', () => {
    const missing: string[] = [];
    for (const file of files) {
      const raw = readFileSync(join(CONTENT_DIR, file), "utf-8");
      const matches = raw.matchAll(/<Cite id="([^"]+)"/g);
      for (const match of matches) {
        const id = match[1]!;
        if (!getSource(id)) missing.push(`${file}: ${id}`);
      }
    }
    expect(missing).toEqual([]);
  });
});
