import { test, expect } from "@playwright/test";

test.describe("Nation comparison on /football-nations/", () => {
  test("nation-compare is visible with Spain toggled by default state discoverable", async ({
    page,
  }) => {
    await page.goto("/football-nations/");
    await expect(page.getByTestId("nation-compare")).toBeVisible();
    await expect(page.getByTestId("nation-toggle-spain")).toBeVisible();
  });

  test("toggling Spain flips its aria-pressed state", async ({ page }) => {
    await page.goto("/football-nations/");
    const toggle = page.getByTestId("nation-toggle-spain");
    const before = await toggle.getAttribute("aria-pressed");
    await toggle.click();
    const after = await toggle.getAttribute("aria-pressed");
    expect(after).not.toBe(before);
  });

  test("comparison area shows the selected nations' names", async ({
    page,
  }) => {
    await page.goto("/football-nations/");
    const compare = page.getByTestId("nation-compare");
    // Ensure Spain is selected, then verify its name renders somewhere in
    // the comparison output.
    const spainToggle = compare.getByTestId("nation-toggle-spain");
    if ((await spainToggle.getAttribute("aria-pressed")) !== "true") {
      await spainToggle.click();
    }
    await expect(
      compare.getByText("Spain", { exact: true }).first(),
    ).toBeVisible();
    // "Headline" is a comparison-row label rendered only once nations are
    // selected, distinguishing this from the toggle button also saying
    // "Spain". Both the desktop table and the mobile cards render it; only
    // one is visible at a given viewport, so filter to the visible instance.
    await expect(
      compare
        .getByText(/headline/i)
        .filter({ visible: true })
        .first(),
    ).toBeVisible();
  });
});
