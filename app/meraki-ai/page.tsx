import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AIWorkflowMockup } from "@/components/ai/AIWorkflowMockup";
import { PortalPreviewCard } from "@/components/ai/PortalPreviewCard";
import { PackageCard } from "@/components/packages/PackageCard";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MERAKI_AI_PACKAGES } from "@/data/packages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Meraki AI",
  description:
    "UAE Finance, Tax & Compliance Workflows, Assisted by AI and Reviewed by Professionals. Capture documents, organize records, support VAT and tax checks, and prepare for e-invoicing readiness — without replacing your accounting system.",
  path: "/meraki-ai",
});

const HELPS_WITH = [
  {
    title: "Invoice & receipt intelligence",
    body: "Capture and extract data from invoices and receipts with risk flags for missing TRN, dates, or VAT issues.",
    icon: "receipt" as const,
  },
  {
    title: "VAT & tax checks",
    body: "First-pass VAT and tax classification with anomaly detection — handed off to professional review.",
    icon: "shield" as const,
  },
  {
    title: "Expense classification",
    body: "Cash-in / cash-out tracking with category suggestions that get more accurate over time.",
    icon: "manage" as const,
  },
  {
    title: "E-invoicing readiness",
    body: "Cleaner records and structured workflows that prepare your business for digital invoicing exchanges.",
    icon: "doc" as const,
  },
  {
    title: "Document organization",
    body: "Single source of truth for business records — retrievable in minutes when partners or authorities ask.",
    icon: "layers" as const,
  },
  {
    title: "Monthly summaries",
    body: "First-draft monthly summaries reviewed and refined by Meraki — faster reports, less formatting work.",
    icon: "chart" as const,
  },
];

const NOT_REPLACEMENT = [
  "Accounting software (Zoho, QuickBooks, Xero, Tally, Excel)",
  "Tax professionals or accredited e-invoicing providers",
  "Final filing decisions or legal advice",
  "Strategic finance, pricing, or financing decisions",
];

const INTEGRATIONS = [
  { name: "Zoho Books", note: "Planned integration" },
  { name: "QuickBooks", note: "Planned integration" },
  { name: "Xero", note: "Planned integration" },
  { name: "Tally", note: "Planned integration" },
  { name: "Excel / CSV", note: "Direct export" },
  { name: "Email capture", note: "Planned" },
  { name: "WhatsApp capture", note: "Planned" },
  { name: "Bank feeds", note: "Planned" },
];

export default function MerakiAIPage() {
  return (
    <>
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <Pill tone="bronze" dot>
                Meraki AI · UAE Finance Workflow
              </Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                UAE Finance, Tax & Compliance Workflows, Assisted by AI and
                Reviewed by Professionals.
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Meraki AI helps businesses capture documents, organize records,
                detect VAT and tax risks, prepare for e-invoicing readiness,
                and keep finance workflows accountant-ready — without replacing
                existing accounting systems.
              </p>
              <Pill tone="ink" className="mt-7">
                AI checks. Meraki verifies.
              </Pill>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/portal" variant="primary" size="md">
                  Explore Portal
                </Button>
                <Button
                  href="/marketplace?category=meraki-ai"
                  variant="ghost"
                  size="md"
                >
                  View AI Packages
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Speak to Our Team
                </Button>
              </div>
            </div>
            <div>
              <PortalPreviewCard />
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>What Meraki AI is</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                Not accounting software. A workflow and intelligence layer.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                Meraki AI is a UAE business finance, tax, compliance,
                invoicing, expense, and workflow assistant connected to
                Meraki&apos;s professional services. It works as the
                intelligence and review layer on top of your existing tools.
              </p>
              <p className="mt-4 text-body text-ink-500">
                Built beyond automation. Designed for compliance.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="rounded-card bg-paper border border-hairline divide-y divide-hairline">
                {[
                  {
                    h: "Intelligence layer",
                    b: "Captures, extracts, and classifies invoices, receipts, statements, and documents.",
                  },
                  {
                    h: "Workflow layer",
                    b: "Routes documents through capture, OCR, risk checks, and review queues.",
                  },
                  {
                    h: "Review layer",
                    b: "Flags items that need human attention. Meraki professionals verify.",
                  },
                  {
                    h: "Compliance readiness layer",
                    b: "Prepares records for VAT, Corporate Tax, and e-invoicing readiness — accountant-ready.",
                  },
                ].map((row, i) => (
                  <li key={row.h} className="flex items-start gap-5 p-6">
                    <span className="shrink-0 mt-0.5 h-9 w-9 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 inline-flex items-center justify-center font-bold text-sm tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-ink-900">
                        {row.h}
                      </p>
                      <p className="mt-1 text-body-sm text-ink-500 leading-relaxed">
                        {row.b}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container size="pro">
          <div className="max-w-2xl">
            <Eyebrow>What it helps with</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Six everyday outcomes for UAE SMEs.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HELPS_WITH.map((h) => (
              <FeatureCard
                key={h.title}
                icon={h.icon}
                title={h.title}
                body={h.body}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <Eyebrow>The workflow</Eyebrow>
          <h2 className="mt-4 text-display-lg text-ink-900 text-balance max-w-2xl">
            Upload. Capture. Review. Approve.
          </h2>
          <div className="mt-10">
            <AIWorkflowMockup />
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <Eyebrow>Where AI does not replace professionals</Eyebrow>
              <h2 className="mt-3 text-display-lg text-ink-900 text-balance">
                AI is a layer. People still do the judgment work.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                Tax decisions on non-standard transactions. Classification
                calls in genuinely ambiguous cases. Compliance positions on
                related-party transactions. Strategic advice on financing,
                pricing, or structure. Final review of records before filing.
              </p>
            </div>
            <div className="lg:col-span-6">
              <ul className="space-y-3">
                {NOT_REPLACEMENT.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 rounded-2xl border border-hairline bg-cream px-4 py-3.5 text-body-sm text-ink-700"
                  >
                    <Icon
                      name="dash"
                      className="h-4 w-4 mt-1 text-ink-300 shrink-0"
                    />
                    <span>
                      <strong className="text-ink-900 font-semibold">Not a replacement for:</strong>{" "}
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow>AI plans</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                Subscribe at the level your business needs.
              </h2>
            </div>
            <Button href="/marketplace?category=meraki-ai" variant="ghost" size="md">
              Browse marketplace
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {MERAKI_AI_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} compact />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container size="pro">
          <Eyebrow>Future integrations</Eyebrow>
          <h2 className="mt-4 text-display-lg text-ink-900 text-balance max-w-3xl">
            Designed to work alongside your existing systems.
          </h2>
          <p className="mt-5 text-body text-ink-500 max-w-3xl">
            Integrations below are planned or integration-ready direction. Live
            connections will be confirmed with each release. Meraki AI does not
            replace the systems below — it works alongside them.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {INTEGRATIONS.map((it) => (
              <div
                key={it.name}
                className="rounded-2xl border border-hairline bg-cream px-4 py-5"
              >
                <p className="text-base font-bold text-ink-900">{it.name}</p>
                <p className="mt-1 text-xs text-ink-500">{it.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <div className="rounded-card bg-paper border border-hairline p-8 md:p-10 max-w-4xl">
            <Eyebrow>Future Meraki app</Eyebrow>
            <h2 className="mt-3 text-display-md text-ink-900 text-balance">
              The Meraki app is coming.
            </h2>
            <p className="mt-4 text-body text-ink-500">
              Meraki will release a mobile app to bring service marketplace,
              subscriptions, AI portal, document upload, expense tracking,
              package management, reports, and support into one place. Personal
              expense tracking is a future app feature, not a homepage focus.
            </p>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        eyebrow="Get started"
        headline="Records that stay ready. Workflows your team trusts."
        primaryCta={{
          label: "View AI Packages",
          href: "/marketplace?category=meraki-ai",
        }}
        secondaryCta={{ label: "Explore Portal", href: "/portal" }}
        tertiaryCta={{ label: "Speak to Our Team", href: "/contact" }}
      />
    </>
  );
}
