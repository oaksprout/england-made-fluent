import { test, expect } from "@playwright/test";

// The open-letter page's exact action-button labels/handlers are owned by
// Agent D; this spec follows docs/CONTRACTS.md's testids
// (letter-copy/letter-print/letter-share) and the described behaviour
// (copy, print, native share, no signature counts). Verify against the
// integrated page.
test.describe("Open letter on /open-letter/", () => {
  test("open-letter section is present", async ({ page }) => {
    await page.goto("/open-letter/");
    await expect(page.getByTestId("open-letter")).toBeVisible();
  });

  test("letter-copy button copies the letter text (or shows a confirmation)", async ({
    page,
    context,
    browserName,
  }) => {
    test.skip(
      browserName !== "chromium",
      "clipboard permissions are chromium-only",
    );
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/open-letter/");

    const copyButton = page.getByTestId("letter-copy");
    await copyButton.click();

    const confirmation = page.getByText(/copied/i);
    const confirmationVisible = await confirmation
      .first()
      .isVisible()
      .catch(() => false);

    if (confirmationVisible) {
      await expect(confirmation.first()).toBeVisible();
    } else {
      const clipboardText = await page.evaluate(() =>
        navigator.clipboard.readText(),
      );
      expect(clipboardText).toContain("Football Association");
    }
  });

  test("letter-print button is present", async ({ page }) => {
    await page.goto("/open-letter/");
    await expect(page.getByTestId("letter-print")).toBeVisible();
  });

  test("letter-share button is present", async ({ page }) => {
    await page.goto("/open-letter/");
    await expect(page.getByTestId("letter-share")).toBeVisible();
  });

  test("print media hides the header but keeps the letter text", async ({
    page,
  }) => {
    await page.goto("/open-letter/");
    await expect(page.getByTestId("open-letter")).toContainText(
      "Football Association",
    );

    await page.emulateMedia({ media: "print" });
    await expect(page.getByTestId("site-header")).toBeHidden();
    await expect(page.getByTestId("open-letter")).toContainText(
      "Football Association",
    );
  });
});
