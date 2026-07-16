import type { Metadata } from "next";
import { site } from "@/config/site";
import { Prose } from "@/components/ui/Prose";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What England, Made Fluent collects, when analytics is enabled, and what it never does: no cookies as shipped, no advertising trackers, no personal profiles.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Privacy",
    description:
      "What England, Made Fluent collects, when analytics is enabled, and what it never does.",
    images: [
      { url: "/og/primary.png", width: 1200, height: 630, alt: "Privacy" },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-red">
        {site.subtitle}
      </p>
      <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
        Privacy
      </h1>

      <Prose className="mt-8">
        {site.analytics.enabled ? (
          <Callout tone="note" title="Analytics is currently enabled">
            <p>
              This deployment of {site.name} has privacy-conscious analytics
              switched on.
            </p>
          </Callout>
        ) : (
          <Callout tone="note" title="Analytics is currently disabled">
            <p>
              This deployment of {site.name} does not run any analytics. Nothing
              beyond standard static web-server request logs is collected. The
              rest of this page describes what would be collected if analytics
              were ever enabled, so the policy is honest about intent even while
              switched off.
            </p>
          </Callout>
        )}

        <h2>What is collected when analytics is enabled</h2>
        <p>
          When enabled, this site uses a privacy-conscious, cookieless analytics
          provider to record aggregate page views and referrers — which pages
          are visited, roughly how often, and which sites sent the visitor here.
          That is the extent of it.
        </p>

        <h2>What is never collected</h2>
        <ul>
          <li>No cookies are set by this site as shipped.</li>
          <li>
            No advertising trackers, pixels or third-party marketing scripts are
            loaded.
          </li>
          <li>
            No personal profiles are built, and no data is sold or shared with
            advertisers.
          </li>
          <li>
            No attempt is made to identify individual visitors across sessions
            or devices.
          </li>
        </ul>

        <h2>Why this page exists even when analytics is off</h2>
        <p>
          Analytics is disabled by default on this project. This page exists so
          the policy is stated plainly regardless of whether a given deployment
          has switched it on — visitors should not have to guess what would
          happen if it were enabled.
        </p>

        <h2>Independence</h2>
        <p>{site.disclaimer}</p>
      </Prose>
    </div>
  );
}
