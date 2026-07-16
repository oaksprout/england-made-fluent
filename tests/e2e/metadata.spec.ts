import { test, expect } from "@playwright/test";

test.describe("Metadata and static SEO files", () => {
  test("home page title and canonical", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/England, Made Fluent/);
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);
    await expect(canonical).toHaveAttribute("href", /.+/);
  });

  test("og:image ends with /og/primary.png", async ({ page }) => {
    await page.goto("/");
    const ogImage = page.locator('meta[property="og:image"]');
    const content = await ogImage.first().getAttribute("content");
    expect(content).toBeTruthy();
    expect(content).toMatch(/\/og\/primary\.png$/);
  });

  test("sitemap.xml responds 200 and lists /the-case/", async ({
    request,
    baseURL,
  }) => {
    const response = await request.get(`${baseURL}/sitemap.xml`);
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain("/the-case/");
  });

  test("robots.txt responds 200", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/robots.txt`);
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body.toLowerCase()).toContain("sitemap");
  });
});
