import { test, expect } from "@playwright/test";

test.describe("Bibliography on /sources/", () => {
  test("source-filters is visible with entries", async ({ page }) => {
    await page.goto("/sources/");
    await expect(page.getByTestId("source-filters")).toBeVisible();
    const entries = page.getByTestId("source-entry");
    await expect(entries.first()).toBeVisible();
  });

  test("every source entry's external link is https with rel=noopener", async ({
    page,
  }) => {
    await page.goto("/sources/");
    const entries = page.getByTestId("source-entry");
    const count = await entries.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const entry = entries.nth(i);
      const link = entry.locator('a[target="_blank"]').first();
      const href = await link.getAttribute("href");
      const rel = await link.getAttribute("rel");
      expect(href, `entry ${i} href`).toMatch(/^https:\/\//);
      expect(rel ?? "", `entry ${i} rel`).toContain("noopener");
    }
  });

  test("shows the unverified/placeholder badge on entries", async ({
    page,
  }) => {
    await page.goto("/sources/");
    await expect(
      page
        .getByTestId("source-filters")
        .getByText(/placeholder/i)
        .first(),
    ).toBeVisible();
  });

  test("searching reduces the number of visible entries", async ({ page }) => {
    await page.goto("/sources/");
    const entries = page.getByTestId("source-entry");
    const initialCount = await entries.count();

    const search = page.getByLabel(/^search$/i);
    await search.fill("England DNA");

    await expect(async () => {
      const filteredCount = await entries.count();
      expect(filteredCount).toBeLessThan(initialCount);
      expect(filteredCount).toBeGreaterThan(0);
    }).toPass();
  });
});
