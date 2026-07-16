import { test, expect } from "@playwright/test";

test.describe("Reduced motion", () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
  });

  test("homepage still renders hero content and h1 with reduced motion", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByTestId("hero-formation")).toBeVisible();
  });

  test("game-state diagram on /the-model/ is visible and its Next control changes the caption", async ({
    page,
  }) => {
    await page.goto("/the-model/");
    const diagram = page.getByTestId("game-state-diagram").first();
    await diagram.scrollIntoViewIfNeeded();
    await expect(diagram).toBeVisible();

    const captionLocator = diagram.locator('p[aria-live="polite"]');
    const initialCaption = await captionLocator.textContent();

    const nextButton = diagram.getByRole("button", { name: /next phase/i });
    await nextButton.click();

    await expect(captionLocator).not.toHaveText(initialCaption ?? "");
  });
});
