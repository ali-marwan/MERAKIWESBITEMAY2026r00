import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "E-Invoicing Readiness",
  description:
    "Prepare your invoice formats, accounting workflows, document records, and internal processes for UAE e-invoicing readiness — without replacing accredited e-invoicing service providers.",
  path: "/e-invoicing",
});

const CHECKLIST = [
  "Required tax invoice fields present and consistent",
  "Customer and supplier master data complete (TRN, legal name)",
  "Tax codes applied consistently across line items",
  "Credit-note format and references aligned to current standards",
  "Storage format suitable for digital exchange",
  "Single source of truth for invoice creation and capture",
  "Auditable trail from origin to storage",
];

const READINESS_PHASES = [
  {
    title: "Invoice format review",
    body: "We pull a sample of customer and supplier invoices and review against current tax invoice expectations. Output is a list of fixes by impact.",
    icon: "doc" as const,
  },
  {
    title: "Master data clean-up",
    body: "Customers, suppliers, and tax codes reviewed in your accounting system. Consistent legal names, complete TRNs, clean tax mapping.",
    icon: "manage" as const,
  },
  {
    title: "Workflow design",
    body: "Where invoices originate, how they reach customers, where supplier invoices land, and how they are captured. One source of truth, not three.",
    icon: "layers" as const,
  },
  {
    title: "Future integration direction",
    body: "Designed to connect with accredited e-invoicing service providers and your accounting software, when ready.",
    icon: "globe" as const,
  },
];

export default function EInvoicingPage() {
  return (
    <>
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <Pill tone="bronze">E-Invoicing Readiness</Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                UAE E-Invoicing Readiness for Businesses
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Prepare your invoice formats, accounting workflows, document
                records, and internal processes for structured digital
                invoicing requirements.
              </p>
              <p className="mt-4 text-sm text-ink-500 max-w-2xl">
                Meraki supports readiness. We are not positioning Meraki as an
                accredited e-invoicing service provider. We work alongside
                accredited providers and your accounting system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/marketplace#einvoicing-readiness"
                  variant="primary"
                  size="md"
                >
                  Request a readiness review
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Speak to our team
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-card bg-cream border border-hairline p-7">
                <Eyebrow>Quick readiness checklist</Eyebrow>
                <ul className="mt-5 space-y-3">
                  {CHECKLIST.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink-700"
                    >
                      <Icon
                        name="check"
                        className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <Eyebrow>How Meraki supports readiness</Eyebrow>
          <h2 className="mt-3 text-display-lg text-ink-900 text-balance max-w-3xl">
            A structured review of formats, data, and workflow.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {READINESS_PHASES.map((p) => (
              <FeatureCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                body={p.body}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <Eyebrow>AI-assisted readiness</Eyebrow>
              <h2 className="mt-3 text-display-lg text-ink-900 text-balance">
                Meraki AI helps records stay ready, not get re-readied.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                Meraki AI helps businesses review invoice data, identify
                missing tax details, classify documents, and prepare cleaner
                records for future UAE e-invoicing workflows.
              </p>
              <p className="mt-4 text-body text-ink-500">
                It is designed to support readiness and integration — not to
                replace accredited e-invoicing service providers, your
                accounting software, or tax professionals.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/meraki-ai" variant="primary" size="md">
                  Explore Meraki AI
                </Button>
                <Button
                  href="/marketplace?category=meraki-ai"
                  variant="ghost"
                  size="md"
                >
                  View AI Packages
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <ul className="space-y-3">
                {[
                  "Invoice and receipt intelligence",
                  "Missing tax detail alerts",
                  "Document classification",
                  "Cleaner records for digital exchange",
                  "Supports planned integration with accredited providers",
                  "Hands off to professional review",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 rounded-2xl bg-cream border border-hairline px-4 py-3.5"
                  >
                    <Icon
                      name="spark"
                      className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                    />
                    <span className="text-sm text-ink-700">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <div className="rounded-card bg-paper border border-hairline p-8 md:p-10 max-w-4xl">
            <Eyebrow>Important note</Eyebrow>
            <p className="mt-3 text-body text-ink-500">
              E-invoicing requirements continue to evolve. This page describes
              readiness work — invoice format review, tax invoice compliance,
              accounting workflow preparation, and integration-ready direction.
              We do not claim direct submission to authority systems, do not
              act as an accredited e-invoicing service provider, and do not
              provide legal advice. Final position should be confirmed with
              accredited providers and tax professionals based on your
              business circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        eyebrow="Ready to start?"
        headline="Run a readiness review now. Avoid the rush later."
        primaryCta={{
          label: "Request a Readiness Review",
          href: "/marketplace#einvoicing-readiness",
        }}
        secondaryCta={{ label: "Explore Meraki AI", href: "/meraki-ai" }}
        tertiaryCta={{ label: "Speak to Our Team", href: "/contact" }}
      />
    </>
  );
}
