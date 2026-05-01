export type PillarKey = "start" | "manage" | "comply" | "control" | "automate";

export interface Pillar {
  key: PillarKey;
  title: string;
  tagline: string;
  description: string;
  services: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  pillar: PillarKey;
  summary: string;
}

export type BillingCycle = "monthly" | "annual" | "one-time" | "per-filing" | "custom";

export interface Package {
  id: string;
  slug: string;
  name: string;
  category: PackageCategory;
  bestFor: string;
  priceAED: number | null;
  priceLabel: string;
  billing: BillingCycle;
  badge?: string;
  popular?: boolean;
  includes: string[];
  notIncluded?: string[];
  registrationOfferEligible?: boolean;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stripePriceId?: string;
}

export type PackageCategory =
  | "monthly-accounting"
  | "tax-compliance"
  | "business-setup"
  | "e-invoicing"
  | "meraki-ai"
  | "one-time";

export interface MarketplaceCategory {
  id: string;
  label: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  author: string;
  readingMinutes: number;
  tags: string[];
  body: string;
  cta?: { label: string; href: string };
}

export type BlogCategory =
  | "VAT"
  | "Corporate Tax"
  | "E-Invoicing"
  | "Accounting"
  | "Business Setup"
  | "Cash Flow"
  | "Meraki AI";

export interface Faq {
  q: string;
  a: string;
  category?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
