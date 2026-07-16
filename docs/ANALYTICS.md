# Analytics

Analytics are **disabled by default** on every deployment of England, Made
Fluent. No script is loaded, no cookie is set, and no request is made to any
analytics provider unless it is explicitly switched on.

## How it's wired

`src/config/site.ts` reads two environment variables into `site.analytics`:

```ts
analytics: {
  enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
},
```

`src/app/layout.tsx` only injects the analytics script tag when both
`enabled` is `true` and `plausibleDomain` is set:

```tsx
{
  enabled && plausibleDomain ? (
    <script
      defer
      data-domain={plausibleDomain}
      src="https://plausible.io/js/script.js"
    />
  ) : null;
}
```

The `/privacy/` page (`src/app/privacy/page.tsx`) is only linked from the
footer when `site.analytics.enabled` is true (see `Footer.tsx`), and its
content adapts to whether the current deployment has analytics on or off —
it states the policy honestly either way rather than assuming one state.

## Enabling analytics

Set both of the following before building:

```bash
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.example
```

This targets a Plausible-compatible analytics endpoint (self-hosted
Plausible or the hosted service). No API key or write-side configuration
lives in this repository — `plausibleDomain` is simply the `data-domain`
attribute Plausible's script expects. Swapping in a different
cookieless/privacy-respecting provider would mean replacing the single
`<script>` tag in `layout.tsx`; nothing else in the codebase assumes
Plausible specifically.

See `.env.example` and the environment variable table in
[docs/DEPLOYMENT.md](DEPLOYMENT.md) for where to set these per deployment
target (GitHub Actions secrets/vars for `deploy.yml`, or the hosting
provider's environment variable settings for Vercel/other static hosts).

## Privacy stance

- **No cookies are set by this site as shipped.**
- **No advertising trackers, pixels or third-party marketing scripts are
  loaded**, regardless of the analytics setting.
- **No personal profiles are built**, and no data is sold or shared with
  advertisers.
- **No attempt is made to identify individual visitors** across sessions or
  devices.
- When analytics is enabled, only aggregate page views and referrers are
  recorded — which pages are visited, roughly how often, and which sites
  sent the visitor here. That is the extent of it.

This stance is a deliberate part of the site's credibility as an
independent, non-commercial campaign — see the "Legal and branding" section
of the README and [docs/LEGAL_AND_BRAND.md](LEGAL_AND_BRAND.md).

## The `/privacy/` page

`/privacy/` is a static page (not conditionally rendered content — it always
exists and is always reachable by direct URL) that explains this policy to
visitors. It is only added to primary site navigation (the footer link)
when analytics is enabled, on the basis that a page describing what
analytics collects is more relevant to surface once there is something to
describe; the underlying policy text is honest about the "currently
disabled" state too; see `src/app/privacy/page.tsx`.
