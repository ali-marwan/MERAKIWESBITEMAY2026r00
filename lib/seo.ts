import type { Metadata } from "next";

const SITE_NAME = "Meraki Business Consultants";
const SITE_URL = "https://meraki-consultants.com";
const DEFAULT_DESCRIPTION =
  "Enterprise-level business support, made accessible to UAE companies. Accounting, tax, compliance, business setup, cash-flow management, and AI-assisted finance workflows in one connected system.";

export const SITE = {
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
};

interface BuildMetadataInput {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  email: "support@meraki-consultants.com",
  telephone: "+971561812928",
  sameAs: ["https://instagram.com/meraki_consultants"],
};
