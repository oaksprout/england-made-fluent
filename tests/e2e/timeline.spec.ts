import { test, expect } from "@playwright/test";

test.describe("Timeline on /history/", () => {
  test("timeline is visible with entries", async ({ page }) => {
    await page.goto("/history/");
    await expect(page.getByTestId("timeline")).toBeVisible();
    const entries = page.getByTestId("timeline-entry");
    await expect(entries.first()).toBeVisible();
  });

  test("selecting a country filter reduces the entry count", async ({
    page,
  }) => {
    await page.goto("/history/");
    const entries = page.getByTestId("timeline-entry");
    const initialCount = await entries.count();
    expect(initialCount).toBeGreaterThan(0);

    const countrySelect = page
      .getByTestId("timeline-filters")
      .getByLabel(/country/i);
    const options = await countrySelect.locator("option").allTextContents();
    const nonAllOption = options.find((o) => !/all countries/i.test(o));
    expect(nonAllOption).toBeTruthy();

    await countrySelect.selectOption({ label: nonAllOption! });
    const filteredCount = await entries.count();
    expect(filteredCount).toBeLessThan(initialCount);
    expect(filteredCount).toBeGreaterThan(0);
  });

  test("expanding an entry reveals Interpretation and Measurable evidence", async ({
    page,
  }) => {
    await page.goto("/history/");
    const firstEntry = page.getByTestId("timeline-entry").first();
    await firstEntry.getByText(/full detail/i).click();
    await expect(firstEntry.getByText(/interpretation/i).first()).toBeVisible();
    await expect(
      firstEntry.getByText(/measurable evidence/i).first(),
    ).toBeVisible();
  });
});
