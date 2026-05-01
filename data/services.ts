import type { Service } from "@/lib/types";
import { PILLARS } from "@/data/pillars";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const ALL_SERVICES: Service[] = PILLARS.flatMap((pillar) =>
  pillar.services.map((title) => ({
    id: `${pillar.key}-${slugify(title)}`,
    slug: slugify(title),
    title,
    pillar: pillar.key,
    summary: `${title} delivered under Meraki's connected business support system. Subject to required documents and authority requirements where applicable.`,
  })),
);

export const TRUST_STRIP_LABELS = [
  "Accounting",
  "VAT & Corporate Tax",
  "Business Setup",
  "Cash Flow",
  "E-Invoicing Readiness",
  "Meraki AI",
  "Marketplace",
] as const;
