# Deployment

England, Made Fluent builds to a fully static export (`out/`), so it can be
hosted anywhere that serves static files. Two paths are supported directly
by this repository — GitHub Pages and Vercel — plus a general "any static
host" section.

## GitHub Pages (`.github/workflows/deploy.yml`)

The repository ships a GitHub Actions workflow, `deploy.yml`, that builds
and deploys on every push to `main` (and can be run manually via
`workflow_dispatch`):

1. Checks out the repo, sets up pnpm and Node 22 (with pnpm's dependency
   cache), and enables GitHub Pages via `actions/configure-pages@v5`.
2. Runs `pnpm install --frozen-lockfile`.
3. Builds with two environment variables set specifically for GitHub Pages
   project hosting:
   - `BASE_PATH=/england-made-fluent` — the site is served from
     `https://<user>.github.io/england-made-fluent`, not the domain root, so
     every internal link and asset path needs this prefix. `next.config.ts`
     reads `BASE_PATH` into Next's `basePath` option and also republishes it
     as `NEXT_PUBLIC_BASE_PATH` for client-side code (see `asset()` in
     `src/lib/utils.ts`).
   - `NEXT_PUBLIC_SITE_URL=https://oaksprout.github.io/england-made-fluent`
     — the canonical absolute URL used in metadata, the sitemap, and social
     card copy.
4. Uploads `out/` as a Pages artifact (`actions/upload-pages-artifact@v3`).
5. A second job deploys that artifact with `actions/deploy-pages@v4`.

### Enabling GitHub Pages for a new fork/repo

1. In the repository's Settings → Pages, set **Source** to "GitHub
   Actions" (the `configure-pages` step in the workflow also does this
   automatically on first run, given the `pages: write` permission it
   requests).
2. If the repository name differs from `england-made-fluent`, update
   `BASE_PATH` and `NEXT_PUBLIC_SITE_URL` in `deploy.yml` to match, and
   update `site.url`'s fallback in `src/config/site.ts` for local
   consistency.
3. Push to `main` — the workflow runs automatically.

## Vercel

Vercel serves the site from the domain root, so **do not set `BASE_PATH`**
— leave it unset (the default is `""`, i.e. root-relative). Steps:

1. Import the repository into Vercel as a new project. Vercel auto-detects
   Next.js; the build command (`pnpm build`, which is
   `node scripts/generate-og.mjs && next build`) and output directory
   (`out/`, since `output: "export"` is set) both work with Vercel's static
   output handling without extra configuration.
2. Set the `NEXT_PUBLIC_SITE_URL` environment variable to the project's
   Vercel URL (e.g. `https://england-made-fluent.vercel.app`) or a custom
   domain, so metadata, the sitemap and social cards use the right
   canonical URL.
3. Leave `BASE_PATH` unset.
4. Optionally set the analytics environment variables (see
   [docs/ANALYTICS.md](ANALYTICS.md)) if you want privacy-conscious
   analytics enabled on this deployment.

## Any other static host

Because the production artifact is just `out/`, any static file host works:
run `pnpm build` with the appropriate `BASE_PATH` (empty for a root domain,
or `/sub-path` for a sub-path deployment) and `NEXT_PUBLIC_SITE_URL` set,
then upload the contents of `out/`. Locally, `pnpm serve:static` serves
`out/` on `http://localhost:3199` — this is also what the Playwright e2e
suite's `webServer` config uses (see [docs/TESTING.md](TESTING.md)).

## Environment variables

Mirrors `.env.example`. All are optional; sensible defaults apply if unset.

| Variable                        | Default (unset)                                   | Purpose                                                                                                                                                            |
| ------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`          | `https://oaksprout.github.io/england-made-fluent` | Canonical URL for metadata, sitemap, OG/social cards.                                                                                                              |
| `BASE_PATH`                     | `""` (root)                                       | Sub-path the site is served from. Set for GitHub Pages project sites, leave unset for Vercel/root domains. Also exposed to client code as `NEXT_PUBLIC_BASE_PATH`. |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | `false`                                           | Turns on the Plausible-compatible analytics script and the `/privacy/` footer link. See [docs/ANALYTICS.md](ANALYTICS.md).                                         |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`  | `""`                                              | Domain to report to when analytics are enabled.                                                                                                                    |

## CI

`.github/workflows/ci.yml` runs on every push to `main` and every pull
request: install, `format:check`, `lint`, `typecheck`, `pnpm test` (unit),
`pnpm build` (with `BASE_PATH=""`, i.e. a root-relative build, since CI
doesn't deploy anywhere), then a Playwright end-to-end run against that
build (chromium only) via `pnpm serve:static`. This is a quality gate, not a
deploy step — deployment is handled entirely by `deploy.yml` on pushes to
`main`. See [docs/TESTING.md](TESTING.md) for what the test suites cover.
