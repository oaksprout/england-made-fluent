import type { MDXComponents } from "mdx/types";
import { Children, isValidElement, type ReactNode } from "react";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { Cite } from "@/components/citations/Cite";
import { Callout } from "@/components/ui/Callout";
import { Expandable } from "@/components/ui/Expandable";
import {
  DepthLayers,
  DepthBrief,
  DepthDetailed,
  DepthEvidence,
} from "@/components/ui/DepthLayers";

/**
 * Global MDX component mapping (required by @next/mdx with the App Router).
 *
 * Registers slugified heading ids (so TableOfContents / SectionHeading deep
 * links work against prose headings), external-link handling, and every
 * custom component available to content/*.mdx without an explicit import —
 * see docs/CONTRACTS.md, "MDX content (Agent E)".
 */

/** Flattens heading children into plain text for slug generation. */
function nodeText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(nodeText).join("");
  }
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return Children.toArray(props.children).map(nodeText).join("");
  }
  return "";
}

type HeadingProps = {
  children?: ReactNode;
  id?: string;
};

function makeHeading(Tag: "h2" | "h3" | "h4") {
  function Heading({ children, id, ...props }: HeadingProps) {
    const headingId = id ?? slugify(nodeText(children));
    return (
      <Tag id={headingId} {...props}>
        {children}
      </Tag>
    );
  }
  Heading.displayName = `MDXHeading(${Tag})`;
  return Heading;
}

type MDXAnchorProps = {
  href?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

function MDXAnchor({ href = "", children, ...props }: MDXAnchorProps) {
  const isExternal = /^([a-z]+:)?\/\//i.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

const mdxComponents: MDXComponents = {
  h2: makeHeading("h2"),
  h3: makeHeading("h3"),
  h4: makeHeading("h4"),
  a: MDXAnchor,
  Cite,
  Callout,
  Expandable,
  DepthLayers,
  DepthBrief,
  DepthDetailed,
  DepthEvidence,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
