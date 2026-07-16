import { test, expect } from "@playwright/test";

// /the-case/ deliberately stays a straight-through two-minute read, so the
// depth-layer interaction is exercised on /englands-advantage/, which uses
// <DepthLayers> (with a <Cite> inside its Evidence panel) in
// content/englands-advantage.mdx.
test.describe("DepthLayers on /englands-advantage/", () => {
  test("brief panel is visible by default", async ({ page }) => {
    await page.goto("/englands-advantage/");
    const layers = page.getByTestId("depth-layers").first();
    await layers.scrollIntoViewIfNeeded();
    const briefTab = layers.getByTestId("depth-tab-brief");
    await expect(briefTab).toHaveAttribute("aria-selected", "true");
  });

  test("clicking Detailed switches the visible panel", async ({ page }) => {
    await page.goto("/englands-advantage/");
    const layers = page.getByTestId("depth-layers").first();
    await layers.scrollIntoViewIfNeeded();

    await layers.getByTestId("depth-tab-detailed").click();
    await expect(layers.getByTestId("depth-tab-detailed")).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await expect(layers.getByTestId("depth-tab-brief")).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });

  test("clicking Evidence reveals the evidence panel with a citation marker", async ({
    page,
  }) => {
    await page.goto("/englands-advantage/");
    const layers = page.getByTestId("depth-layers").first();
    await layers.scrollIntoViewIfNeeded();

    await layers.getByTestId("depth-tab-evidence").click();
    await expect(layers.getByTestId("depth-tab-evidence")).toHaveAttribute(
      "aria-selected",
      "true",
    );

    // The panel corresponding to the selected tab is the one without the
    // `hidden` attribute.
    const visiblePanel = layers.locator('[role="tabpanel"]:not([hidden])');
    await expect(visiblePanel).toBeVisible();
    await expect(visiblePanel.getByTestId("cite").first()).toBeVisible();
  });
});
