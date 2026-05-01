import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingAssistant } from "@/components/layout/FloatingAssistant";
import { SITE, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Enterprise-Level Business Support, Made Accessible to UAE Companies`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  keywords: [
    "UAE accounting services",
    "Dubai accounting services",
    "VAT registration UAE",
    "Corporate Tax UAE",
    "UAE business consultancy",
    "E-invoicing UAE",
    "AI accounting assistant UAE",
    "SME accounting Dubai",
    "Business setup UAE",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — One system. One team. One standard.`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — One system. One team. One standard.`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink-900 focus:text-paper focus:px-4 focus:py-2 focus:rounded-pill"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <SiteFooter />
        <FloatingAssistant />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
