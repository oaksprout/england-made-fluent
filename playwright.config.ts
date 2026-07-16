import fs from "node:fs";
import { defineConfig, devices } from "@playwright/test";

/**
 * E2E tests run against the production static export (out/), served locally.
 * Run `pnpm build` first; `pnpm test:e2e` starts the static server itself.
 *
 * Some sandboxed dev environments pre-install a Chromium at a fixed path
 * (PLAYWRIGHT_BROWSERS_PATH) that predates this Playwright version's expected
 * browser build; fall back to that binary rather than re-downloading. CI
 * installs matching browsers via `playwright install`, so it never hits this.
 */
const preinstalledChromium = "/opt/pw-browsers/chromium";
const executablePath =
  !process.env.CI && fs.existsSync(preinstalledChromium)
    ? preinstalledChromium
    : undefined;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:3199",
    trace: "on-first-retry",
    ...(executablePath ? { launchOptions: { executablePath } } : {}),
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: {
    command: "pnpm serve:static",
    url: "http://localhost:3199",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
