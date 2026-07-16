import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.describe("desktop", () => {
    test.skip(
      ({ isMobile }) => Boolean(isMobile),
      "desktop-only nav bar assertions",
    );

    const cases: { name: RegExp; url: RegExp; heading: RegExp }[] = [
      { name: /^The case$/, url: /\/the-case\/?$/, heading: /./ },
      {
        name: /^Football nations$/,
        url: /\/football-nations\/?$/,
        heading: /./,
      },
      { name: /^History$/, url: /\/history\/?$/, heading: /./ },
    ];

    for (const { name, url, heading } of cases) {
      test(`header link "${name}" navigates to the right page`, async ({
        page,
      }) => {
        await page.goto("/");
        await page
          .getByTestId("site-header")
          .getByRole("link", { name })
          .click();
        await expect(page).toHaveURL(url);
        await expect(page.getByRole("heading", { level: 1 })).toContainText(
          heading,
        );
      });
    }
  });

  test.describe("mobile", () => {
    test.skip(({ isMobile }) => !isMobile, "mobile nav panel assertions");

    test("mobile-nav-toggle opens the mobile nav panel", async ({ page }) => {
      await page.goto("/");
      const toggle = page.getByTestId("mobile-nav-toggle");
      await expect(page.getByTestId("mobile-nav")).not.toBeVisible();
      await toggle.click();
      await expect(page.getByTestId("mobile-nav")).toBeVisible();
    });

    test("clicking a link in the mobile nav navigates and closes the panel", async ({
      page,
    }) => {
      await page.goto("/");
      await page.getByTestId("mobile-nav-toggle").click();
      const panel = page.getByTestId("mobile-nav");
      await expect(panel).toBeVisible();

      await panel.getByRole("link", { name: /^The case$/ }).click();
      await expect(page).toHaveURL(/\/the-case\/?$/);
      await expect(page.getByTestId("mobile-nav")).not.toBeVisible();
    });
  });
});
