import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

const ROUTES = [
  "/",
  "/the-case/",
  "/englands-advantage/",
  "/the-model/",
  "/football-nations/",
  "/history/",
  "/evidence/",
  "/proposals/",
  "/england-dna/",
  "/about/",
  "/sources/",
  "/open-letter/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = site.analytics.enabled ? [...ROUTES, "/privacy/"] : ROUTES;

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-07-16",
  }));
}
