import type { MarketplaceCategory, Package } from "@/lib/types";
import {
  MONTHLY_ACCOUNTING_PACKAGES,
  ONE_TIME_SERVICES,
  MERAKI_AI_PACKAGES,
} from "@/data/packages";

export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  {
    id: "monthly-accounting",
    label: "Monthly Accounting",
    description:
      "Recurring accounting and compliance subscriptions kept under one standard.",
  },
  {
    id: "tax-compliance",
    label: "Tax & Compliance",
    description:
      "VAT, Corporate Tax, and FTA portal support — registration, filing, and review.",
  },
  {
    id: "business-setup",
    label: "Business Setup",
    description:
      "Mainland and free zone setup support with document and PRO coordination.",
  },
  {
    id: "e-invoicing",
    label: "E-Invoicing Readiness",
    description:
      "Invoice format and accounting workflow readiness for UAE e-invoicing.",
  },
  {
    id: "meraki-ai",
    label: "Meraki AI",
    description:
      "AI-assisted document workflow plans, with optional professional review.",
  },
];

export const MARKETPLACE_ITEMS: Package[] = [
  ...MONTHLY_ACCOUNTING_PACKAGES,
  ...ONE_TIME_SERVICES,
  ...MERAKI_AI_PACKAGES,
];

export const CUSTOM_QUOTE_ITEM = {
  title: "Need something custom?",
  description:
    "Larger operations, multi-entity setups, or industry-specific finance workflows — speak to our team for a custom quote built around your business.",
  primaryCta: { label: "Request a quote", href: "/contact?intent=custom-quote" },
  secondaryCta: { label: "WhatsApp us", href: "https://wa.me/971561812928" },
};
