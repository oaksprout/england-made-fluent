import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component mapping (required by @next/mdx with the App Router).
 *
 * Custom components used in content/*.mdx are registered here in Wave 2 once
 * the UI layer lands: Cite, Depth (Brief/Detailed/Evidence), Callout,
 * SectionHeading, etc. See docs/CONTRACTS.md.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
