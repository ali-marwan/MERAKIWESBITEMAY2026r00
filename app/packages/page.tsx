import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { PackageCard } from "@/components/packages/PackageCard";
import { PackageComparison } from "@/components/packages/PackageComparison";
import { FAQSection } from "@/components/shared/FAQSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  MONTHLY_ACCOUNTING_PACKAGES,
  MERAKI_AI_PACKAGES,
} from "@/data/packages";
import { PACKAGES_FAQS } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Packages",
  description:
    "Compare monthly accounting, compliance, growth, and managed finance packages. AI plans starting from AED 99/month. Eligible packages include VAT and Corporate Tax registration support.",
  path: "/packages",
});

const COMPARISON_ROWS: { label: string; values: (string | boolean)[] }[] = [
  {
    label: "Monthly bookkeeping",
    values: [true, true, true, true],
  },
  {
    label: "Tax calendar reminders",
    values: [false, true, true, true],
  },
  {
    label: "VAT support",
    values: [false, true, true, true],
  },
  {
    label: "VAT & Corporate Tax registration support",
    values: ["—", "Included", "Included", "Included"],
  },
  {
    label: "Cash-flow summary",
    values: [false, false, true, true],
  },
  {
    label: "Management reports",
    values: ["—", "Basic", "Standard", "Advanced"],
  },
  {
    label: "Document control",
    values: [false, false, true, true],
  },
  {
    label: "Dedicated team support",
    values: [false, false, false, true],
  },
];

export default function PackagesPage() {
  return (
    <>
      <Section bg="paper" tone="default">
        <Container size="pro">
          <div className="max-w-3xl">
            <Pill tone="bronze">Packages</Pill>
            <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
              Choose the level of support your business needs.
            </h1>
            <p className="mt-6 text-lead text-ink-500">
              Subscribe monthly. Eligible packages include VAT and Corporate Tax
              registration support. All prices shown are starting points —
              final pricing depends on transaction volume and business
              complexity.
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="cream" tone="tight" id="monthly">
        <Container size="pro">
          <Eyebrow>Monthly accounting packages</Eyebrow>
          <h2 className="mt-3 text-display-lg text-ink-900 text-balance max-w-2xl">
            From simple bookkeeping to fully managed finance.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {MONTHLY_ACCOUNTING_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="paper" id="compare">
        <Container size="pro">
          <Eyebrow>Compare packages</Eyebrow>
          <h2 className="mt-3 text-display-lg text-ink-900 text-balance max-w-2xl">
            Pick the level of structure that matches your business stage.
          </h2>
          <div className="mt-10">
            <PackageComparison
              packages={MONTHLY_ACCOUNTING_PACKAGES}
              rows={COMPARISON_ROWS}
            />
          </div>
        </Container>
      </Section>

      <Section bg="cream" tone="default" id="meraki-ai">
        <Container size="pro">
          <Eyebrow>Meraki AI packages</Eyebrow>
          <h2 className="mt-3 text-display-lg text-ink-900 text-balance max-w-2xl">
            AI-assisted finance workflows, with optional professional review.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {MERAKI_AI_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-500 max-w-2xl">
            Meraki AI is a workflow and intelligence layer connected to our
            professional team. It is not a replacement for accounting software
            (Zoho, QuickBooks, Xero, Tally) or for tax professionals.
          </p>
        </Container>
      </Section>

      <FAQSection
        faqs={PACKAGES_FAQS}
        title="Questions about packages and onboarding."
      />
      <ContactCTA />
      <FinalCTA
        headline="Pick the package. Start under one standard."
        primaryCta={{ label: "View Marketplace", href: "/marketplace" }}
        secondaryCta={{ label: "Explore Meraki AI", href: "/meraki-ai" }}
        tertiaryCta={{ label: "Speak to Our Team", href: "/contact" }}
      />
    </>
  );
}
