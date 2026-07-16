import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * BASE_PATH supports GitHub Pages project hosting (e.g. "/england-made-fluent").
 * Leave unset for Vercel or root-domain deployments.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // Static export has no image optimisation server. The site uses SVG and
    // build-time generated assets only, so this costs nothing.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
