import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { OrganizationJsonLd } from "@/components/home/OrganizationJsonLd";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.subtitle}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.author.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} — ${site.subtitle}`,
    description: site.share.primaryCard,
    images: [
      {
        url: "/og/primary.png",
        width: 1200,
        height: 630,
        alt: site.share.primaryCard,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.share.primaryCard,
    images: ["/og/primary.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { enabled, plausibleDomain } = site.analytics;

  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${sourceSerif.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ReadingProgress />
        <OrganizationJsonLd />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {enabled && plausibleDomain ? (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </body>
    </html>
  );
}
