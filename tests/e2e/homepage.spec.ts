import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("h1 states the core thesis", async ({ page }) => {
    await page.goto("/");
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toContainText("England does not lack talent");
  });

  test("all contracted sections are present", async ({ page }) => {
    await page.goto("/");
    const sectionIds = [
      "argument-60-seconds",
      "structural-advantage",
      "no-single-model",
      "proposed-identity",
      "interoperability",
      "game-states",
      "open-letter",
      "closing",
    ];
    for (const id of sectionIds) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("hero formation visual is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("hero-formation")).toBeVisible();
  });

  test("primary and secondary CTAs link to the right routes", async ({
    page,
  }) => {
    await page.goto("/");
    // The CTAs deliberately repeat in the closing section; scope to the hero.
    const hero = page.locator("#hero");
    const primary = hero.getByRole("link", { name: /two-minute case/i });
    const secondary = hero.getByRole("link", { name: /examine the evidence/i });
    await expect(primary).toHaveAttribute("href", /\/the-case\/?$/);
    await expect(secondary).toHaveAttribute("href", /\/evidence\/?$/);
  });

  test("footer disclaimer states the project is independent", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByTestId("footer-disclaimer").scrollIntoViewIfNeeded();
    await expect(page.getByTestId("footer-disclaimer")).toContainText(
      "independent project",
    );
  });
});
