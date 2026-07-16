import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const ROUTES = ["/", "/the-case/", "/sources/", "/open-letter/"];

test.describe("Accessibility (axe)", () => {
  for (const route of ROUTES) {
    test(`no serious/critical violations on ${route}`, async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).analyze();

      const serious = results.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical",
      );
      const minor = results.violations.filter(
        (v) => v.impact !== "serious" && v.impact !== "critical",
      );

      if (minor.length > 0) {
        // Non-blocking: log for visibility without failing the build.
        console.log(
          `axe: ${minor.length} non-serious violation(s) on ${route}:`,
          minor.map((v) => `${v.id} (${v.impact})`).join(", "),
        );
      }

      expect(
        serious,
        serious
          .map(
            (v) =>
              `${v.id} (${v.impact}): ${v.help} — ${v.nodes.length} node(s)`,
          )
          .join("\n"),
      ).toEqual([]);
    });
  }
});
