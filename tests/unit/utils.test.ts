import { describe, expect, it, afterEach } from "vitest";
import { asset, cn, readingTimeMinutes, slugify } from "@/lib/utils";

describe("readingTimeMinutes", () => {
  it("returns 1 for very short text", () => {
    expect(readingTimeMinutes("A short sentence about football.")).toBe(1);
  });

  it("rounds up to a whole minute and never returns less than 1", () => {
    expect(readingTimeMinutes("")).toBe(1);
    expect(readingTimeMinutes("one")).toBe(1);
  });

  it("returns roughly 2 minutes for ~440 words at the default 220wpm", () => {
    const words = Array.from({ length: 440 }, (_, i) => `word${i}`).join(" ");
    expect(readingTimeMinutes(words)).toBe(2);
  });

  it("respects a custom words-per-minute rate", () => {
    const words = Array.from({ length: 100 }, (_, i) => `word${i}`).join(" ");
    // 100 words at 50wpm => 2 minutes
    expect(readingTimeMinutes(words, 50)).toBe(2);
  });
});

describe("slugify", () => {
  it("lowercases and replaces spaces with hyphens", () => {
    expect(slugify("England Does Not Lack Talent")).toBe(
      "england-does-not-lack-talent",
    );
  });

  it("strips apostrophes rather than turning them into hyphens", () => {
    expect(slugify("England's Advantage")).toBe("englands-advantage");
    expect(slugify("England’s Advantage")).toBe("englands-advantage");
  });

  it("trims leading and trailing hyphens produced by punctuation", () => {
    expect(slugify("  --Structured Adaptability!--  ")).toBe(
      "structured-adaptability",
    );
  });

  it("collapses runs of non-alphanumeric characters into a single hyphen", () => {
    expect(slugify("Common  Language & Recognition")).toBe(
      "common-language-recognition",
    );
  });
});

describe("asset", () => {
  const originalBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    if (originalBasePath === undefined) {
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    } else {
      process.env.NEXT_PUBLIC_BASE_PATH = originalBasePath;
    }
  });

  it("returns the path unchanged when no base path is set", () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    expect(asset("/og/primary.png")).toBe("/og/primary.png");
  });

  it("prefixes a leading-slash path with the base path", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/england-made-fluent";
    expect(asset("/og/primary.png")).toBe(
      "/england-made-fluent/og/primary.png",
    );
  });

  it("adds a leading slash to a path that lacks one before prefixing", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/england-made-fluent";
    expect(asset("og/primary.png")).toBe("/england-made-fluent/og/primary.png");
  });
});

describe("cn", () => {
  it("joins truthy class values with a space", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, undefined, null, "", "b")).toBe("a b");
  });

  it("supports conditional object syntax", () => {
    expect(cn("base", { active: true, hidden: false })).toBe("base active");
  });
});
