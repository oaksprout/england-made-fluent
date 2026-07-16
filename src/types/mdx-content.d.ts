import type { ComponentType } from "react";

/**
 * Type declarations for importing content/*.mdx files via the `@content/*`
 * path alias (see tsconfig.json). Every file in content/ exports a `meta`
 * object (title, description) alongside its default MDX component — see
 * docs/CONTRACTS.md, "MDX content (Agent E)".
 *
 * @types/mdx already declares a generic `declare module "*.mdx"` covering
 * the default export. TypeScript does not reliably merge a second wildcard
 * declaration for that exact same pattern across files, so rather than
 * fight that, each content module is declared here individually as an
 * exact (non-wildcard) ambient module, which always takes precedence and
 * merges predictably.
 */
type MDXFileModule = {
  meta: { title: string; description: string };
  default: ComponentType<Record<string, unknown>>;
};

declare module "@content/the-case.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/englands-advantage.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/the-model.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/football-nations-intro.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/history-intro.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/evidence.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/proposals-intro.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/england-dna.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/about.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/sources-methodology.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
declare module "@content/open-letter.mdx" {
  export const meta: MDXFileModule["meta"];
  const MDXContent: MDXFileModule["default"];
  export default MDXContent;
}
