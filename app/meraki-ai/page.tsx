import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AIWorkflowMockup } from "@/components/ai/AIWorkflowMockup";
import { PortalPreviewCard } from "@/components/ai/PortalPreviewCard";
import { PackageCard } from "@/components/packages/PackageCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MERAKI_AI_PACKAGES } from "@/data/packages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Meraki AI",
  description:
    "Meraki AI is the intelligence and workflow layer for UAE finance, tax, and compliance. AI checks. Meraki verifies. Your records stay ready — built beyond automation, designed for compliance.",
  path: "/meraki-ai",
});

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Upload or connect documents",
    body: "Send invoices, receipts, statements, and supplier files to a single capture surface — portal upload today, more channels rolling out.",
    icon: "upload" as IconName,
  },
  {
    step: "02",
    title: "AI checks and organizes",
    body: "Fields are extracted, classified, and screened for missing TRN, duplicates, VAT issues, and other risk flags.",
    icon: "ai" as IconName,
  },
  {
    step: "03",
    title: "Meraki team verifies",
    body: "Flagged items are reviewed by Meraki professionals. Judgment calls and edge cases are handled by people, not models.",
    icon: "shield" as IconName,
  },
  {
    step: "04",
    title: "You receive ready records",
    body: "Cleaner records, structured workflows, and compliance-ready files — prepared for your accountant, auditor, or filing partner.",
    icon: "check" as IconName,
  },
];

const USE_CASES: Array<{ title: string; body: string; icon: IconName }> = [
  {
    title: "Customer invoice review",
    body: "Outgoing invoices checked for TRN, VAT treatment, dates, and missing details before they reach the customer.",
    icon: "receipt",
  },
  {
    title: "Supplier invoice checking",
    body: "Incoming bills screened for duplicates, missing TRN, mismatched totals, and unclear tax positions.",
    icon: "doc",
  },
  {
    title: "VAT compliance preparation",
    body: "First-pass VAT classification with anomaly flags — handed to Meraki professionals for verification.",
    icon: "shield",
  },
  {
    title: "Corporate tax file preparation",
    body: "Records organized into a clean Corporate Tax file structure, ready for accountant review and filing.",
    icon: "briefcase",
  },
  {
    title: "E-invoicing readiness",
    body: "Cleaner data and structured workflows that prepare your business for digital invoicing exchanges.",
    icon: "bolt",
  },
  {
    title: "Expense classification",
    body: "Cash-in / cash-out tracking with category suggestions — refined by Meraki review and improved over time.",
    icon: "manage",
  },
  {
    title: "Monthly document review",
    body: "Document pipelines kept current. Missing files, duplicates, and unclassified items surfaced each month.",
    icon: "calendar",
  },
  {
    title: "Management reporting support",
    body: "First-draft monthly summaries reviewed and refined by Meraki — faster reports, less formatting work.",
    icon: "chart",
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
      {/* HERO */}
      <Section bg="paper" tone="default">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Pill tone="bronze" dot>
                  Meraki AI · UAE Finance, Tax &amp; Compliance Layer
                </Pill>
                <Pill tone="ink">AI checks. Meraki verifies.</Pill>
              </div>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                AI-assisted UAE finance, tax &amp; compliance.
              </h1>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-bronze-700">
                Built beyond automation · Designed for compliance
              </p>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Meraki AI checks, organizes, and prepares your invoices,
                receipts, and records. Meraki professionals verify what
                matters — so your business stays accountant-ready,
                audit-ready, and compliance-ready, without replacing your
                accounting software.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-500">
                <Icon name="shield" className="h-4 w-4 text-bronze-700" />
                Portal access included with an eligible Meraki subscription.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact?topic=ai-demo" variant="primary" size="md">
                  Request AI Demo
                </Button>
                <Button
                  href="/marketplace?category=meraki-ai"
                  variant="ghost"
                  size="md"
                >
                  Explore Packages
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

      {/* WHAT MERAKI AI IS */}
      <Section bg="cream">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>What Meraki AI is</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                An intelligence and workflow layer — connected to Meraki
                professional services.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                Meraki AI is not accounting software and not a replacement for
                your accountant. It works as the intelligence and review layer
                on top of your existing tools, supporting business owners,
                accountants, and admin teams.
              </p>
              <p className="mt-4 text-body text-ink-500">
                One system. One team. One standard.
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

      {/* HOW IT WORKS — 4 STEPS */}
      <Section bg="paper">
        <Container size="pro">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                A four-step workflow. AI checks. People verify.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                Documents move through capture, AI review, professional
                verification, and delivery — so your records stay ready, every
                month.
              </p>
            </div>
            <Button href="/contact?topic=ai-demo" variant="ghost" size="md">
              Request AI Demo
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-card bg-paper border border-border shadow-soft p-6 hover:shadow-lift transition"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-ink-300 font-bold">
                    Step {step.step}
                  </span>
                  <span className="h-10 w-10 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 flex items-center justify-center">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-5 text-base font-semibold text-ink-900">
                  {step.title}
                </p>
                <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-500 max-w-3xl">
            Final output depends on documents provided, authority portal
            requirements, and professional verification. Meraki AI does not
            file on your behalf without professional review.
          </p>
        </Container>
      </Section>

      {/* USE CASES — 8 PRACTICAL SCENARIOS */}
      <Section bg="cream">
        <Container size="pro">
          <div className="max-w-2xl">
            <Eyebrow>What it helps with</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Eight practical use cases for UAE businesses.
            </h2>
            <p className="mt-5 text-body text-ink-500">
              Every output is reviewed before it counts. AI handles
              first-level checking; Meraki professionals verify what matters.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="rounded-card border border-border bg-paper p-6 hover:shadow-soft transition"
              >
                <div className="h-10 w-10 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 flex items-center justify-center">
                  <Icon name={u.icon} className="h-5 w-5" />
                </div>
                <p className="mt-5 text-base font-semibold text-ink-900">
                  {u.title}
                </p>
                <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CAPTURE FROM ANYWHERE */}
      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Capture from anywhere</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                Documents arrive everywhere. Capture lives in one place.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                Invoices, receipts, statements, and contracts arrive across
                email, WhatsApp, supplier portals, and paper handovers. Meraki
                AI brings them into a single capture surface so nothing is
                missed and everything is accountant-ready.
              </p>
              <p className="mt-4 text-sm text-ink-500">
                Email forwarding and WhatsApp document capture are planned
                channels — current capture is via portal upload, with email
                forwarding rolling out next.
              </p>
            </div>
            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <CaptureChannel
                icon="upload"
                title="Portal upload"
                status="Available"
                tone="success"
                body="Drop documents into the Meraki portal. AI extracts fields and routes to review."
              />
              <CaptureChannel
                icon="email"
                title="Email forwarding"
                status="Rolling out"
                tone="warning"
                body="Forward supplier invoices to a dedicated Meraki address. Captured, classified, and queued."
              />
              <CaptureChannel
                icon="whatsapp"
                title="WhatsApp capture"
                status="Planned"
                tone="default"
                body="Send a photo or PDF over WhatsApp; the document is captured into the same review queue."
              />
              <CaptureChannel
                icon="phone"
                title="Future Meraki app"
                status="Planned"
                tone="default"
                body="Mobile capture for receipts, expense logs, and on-the-go business records."
              />
            </ul>
          </div>
        </Container>
      </Section>

      {/* WORKFLOW VISUAL */}
      <Section bg="cream">
        <Container size="pro">
          <div className="max-w-2xl">
            <Eyebrow>The workflow, visualized</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Upload. Capture. Review. Approve.
            </h2>
            <p className="mt-5 text-body text-ink-500">
              A look at what moves through Meraki AI — captured documents,
              extracted fields with risk flags, and a Meraki review queue.
            </p>
          </div>
          <div className="mt-12">
            <AIWorkflowMockup />
          </div>
          <p className="mt-6 text-xs text-ink-500 max-w-3xl">
            Sample data shown for illustration only. Live integrations and
            channels will be confirmed with each release.
          </p>
        </Container>
      </Section>

      {/* AI + HUMAN VERIFICATION */}
      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>AI + human verification</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                AI is a layer. People do the judgment work.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                Tax positions on non-standard transactions. Classification calls
                in genuinely ambiguous cases. Related-party reviews. Strategic
                advice on financing, pricing, or structure. Final review of
                records before filing — these stay with Meraki professionals.
              </p>
              <ul className="mt-8 space-y-3">
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
                      <strong className="text-ink-900 font-semibold">
                        Not a replacement for:
                      </strong>{" "}
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <ComplianceReadinessCard />
            </div>
          </div>
        </Container>
      </Section>

      {/* MERAKI AI PORTAL */}
      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Meraki AI Portal</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                A separate workspace for AI-assisted finance review.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                Meraki AI Portal is a separate subscription workspace for
                AI-assisted invoice, tax, compliance, expense, and workflow
                review. Access is separate from the Marketplace Login and is
                provided to approved Meraki AI subscribers.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bronze-700">
                <span className="h-px w-8 bg-bronze-500" />
                AI checks. Meraki verifies. Your records stay ready.
              </p>
              <p className="mt-3 text-sm font-semibold text-ink-700">
                Built beyond automation. Designed for compliance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/contact?intent=meraki-ai-access"
                  variant="primary"
                  size="md"
                >
                  Request Meraki AI Access
                </Button>
                <Button
                  href="/marketplace?category=meraki-ai"
                  variant="ghost"
                  size="md"
                >
                  Explore Meraki AI Subscription
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Speak to Our Team
                </Button>
                <Button href="/packages" variant="ghost" size="md">
                  View Marketplace Packages
                </Button>
              </div>
              <p className="mt-6 text-xs text-ink-500 leading-relaxed max-w-md">
                Marketplace Login is for service purchases and package
                requests. Meraki AI Portal is for AI-assisted document,
                invoice, tax, compliance, and workflow review. Separate
                subscription required. Terms apply.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-card bg-cream border border-hairline p-7 md:p-8">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <p className="text-eyebrow uppercase text-bronze-700">
                    Inside the Meraki AI Portal
                  </p>
                  <span className="rounded-pill bg-paper border border-hairline px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-500 whitespace-nowrap">
                    Approved subscribers
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Upload invoices and documents",
                    "Review AI-flagged issues",
                    "Track invoice and document review status",
                    "Prepare VAT and Corporate Tax records",
                    "E-invoicing readiness checklist",
                    "Expense classification support",
                    "Monthly compliance file preparation",
                    "Professional verification workflow",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-2xl bg-paper border border-hairline px-4 py-3"
                    >
                      <Icon
                        name="check"
                        className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                      />
                      <span className="text-sm text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-ink-500 leading-relaxed">
                  Capabilities listed above describe the Meraki AI Portal
                  scope. Live access activates for approved Meraki AI
                  subscribers — coming soon for general availability. Subject
                  to required documents, authority portal requirements, and
                  applicable UAE regulations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* AI PLANS */}
      <Section bg="cream">
        <Container size="pro">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow>AI plans</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                Subscribe at the level your business needs.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                Each plan includes Meraki professional review. Custom volumes
                and bundles available on request.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/marketplace?category=meraki-ai" variant="primary" size="md">
                Explore Packages
              </Button>
              <Button href="/contact?topic=custom-quote" variant="ghost" size="md">
                Request Custom Quote
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {MERAKI_AI_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} compact />
            ))}
          </div>
        </Container>
      </Section>

      {/* INTEGRATIONS */}
      <Section bg="paper">
        <Container size="pro">
          <div className="max-w-3xl">
            <Eyebrow>Future integrations</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Designed to work alongside your existing systems.
            </h2>
            <p className="mt-5 text-body text-ink-500">
              The systems below are planned or integration-ready direction.
              Live connections will be confirmed with each release. Meraki AI
              does not replace these tools — it works alongside them.
            </p>
          </div>
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

      {/* FUTURE APP */}
      <Section bg="cream">
        <Container size="pro">
          <div className="rounded-card bg-paper border border-hairline p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Future Meraki app</Eyebrow>
              <h2 className="mt-3 text-display-md text-ink-900 text-balance">
                The Meraki app is coming.
              </h2>
              <p className="mt-4 text-body text-ink-500">
                Meraki will release a mobile app to bring service marketplace,
                subscriptions, AI portal, document upload, expense tracking,
                package management, reports, and support into one place.
              </p>
            </div>
            <ul className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { l: "Marketplace", i: "cart" as IconName },
                { l: "Subscriptions", i: "manage" as IconName },
                { l: "Document upload", i: "upload" as IconName },
                { l: "Reports", i: "chart" as IconName },
              ].map((f) => (
                <li
                  key={f.l}
                  className="rounded-2xl border border-hairline bg-cream px-4 py-4 flex items-center gap-3"
                >
                  <span className="h-9 w-9 rounded-xl bg-paper border border-hairline text-bronze-700 flex items-center justify-center">
                    <Icon name={f.i} className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-ink-900">
                    {f.l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        eyebrow="Get started"
        headline="AI checks. Meraki verifies. Your records stay ready."
        body="Request a demo, explore packages, or talk to our team. Whichever way you start, you start under one Meraki standard."
        primaryCta={{
          label: "Request AI Demo",
          href: "/contact?topic=ai-demo",
        }}
        secondaryCta={{ label: "Explore Packages", href: "/marketplace?category=meraki-ai" }}
        tertiaryCta={{ label: "Speak to Our Team", href: "/contact" }}
      />
    </>
  );
}

function CaptureChannel({
  icon,
  title,
  status,
  tone,
  body,
}: {
  icon: "upload" | "email" | "whatsapp" | "phone";
  title: string;
  status: string;
  tone: "success" | "warning" | "default";
  body: string;
}) {
  const toneClasses = {
    success: "bg-success/10 text-success border border-success/20",
    warning: "bg-warning/10 text-warning border border-warning/20",
    default: "bg-ink-100 text-ink-500 border border-hairline",
  };
  return (
    <li className="rounded-card bg-paper border border-hairline p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="h-10 w-10 rounded-xl bg-cream border border-hairline text-bronze-700 flex items-center justify-center shrink-0">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <span
          className={`rounded-pill px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${toneClasses[tone]}`}
        >
          {status}
        </span>
      </div>
      <p className="mt-4 text-base font-semibold text-ink-900">{title}</p>
      <p className="mt-1.5 text-body-sm text-ink-500 leading-relaxed">{body}</p>
    </li>
  );
}

function ComplianceReadinessCard() {
  const checklist: Array<{
    label: string;
    sub: string;
    status: "ready" | "review" | "pending";
  }> = [
    { label: "VAT records", sub: "Q1 file organized", status: "ready" },
    { label: "Supplier invoices", sub: "3 flagged for review", status: "review" },
    { label: "Corporate Tax file", sub: "Records being prepared", status: "pending" },
    { label: "E-invoicing readiness", sub: "Master data check", status: "review" },
    { label: "Expense classification", sub: "Categories suggested", status: "ready" },
    { label: "Monthly summary", sub: "Awaiting Meraki sign-off", status: "review" },
  ];
  const statusStyles = {
    ready: "bg-success/10 text-success border border-success/20",
    review: "bg-warning/10 text-warning border border-warning/20",
    pending: "bg-ink-100 text-ink-500 border border-hairline",
  };
  const statusLabel = {
    ready: "Ready",
    review: "In review",
    pending: "Pending",
  };
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-bronze-radial blur-3xl opacity-50 pointer-events-none" />
      <div className="relative rounded-card bg-paper border border-border shadow-soft overflow-hidden">
        <div className="border-b border-hairline px-6 py-4 bg-ink-900 text-paper flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-bronze-300 font-bold">
              Compliance readiness
            </p>
            <p className="mt-0.5 text-sm font-semibold">
              Sample dashboard view · April 2026
            </p>
          </div>
          <span className="rounded-pill bg-bronze-500/15 text-bronze-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
            Demo
          </span>
        </div>
        <ul className="divide-y divide-hairline">
          {checklist.map((c) => (
            <li
              key={c.label}
              className="flex items-center gap-4 px-6 py-4"
            >
              <span className="h-9 w-9 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 inline-flex items-center justify-center shrink-0">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink-900 truncate">
                  {c.label}
                </p>
                <p className="text-xs text-ink-500 truncate">{c.sub}</p>
              </div>
              <span
                className={`rounded-pill px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${statusStyles[c.status]}`}
              >
                {statusLabel[c.status]}
              </span>
            </li>
          ))}
        </ul>
        <div className="px-6 py-4 bg-cream border-t border-hairline flex items-center justify-between gap-3">
          <p className="text-xs text-ink-500">
            Statuses subject to required documents and Meraki professional
            review.
          </p>
          <span className="text-[10px] uppercase tracking-wider text-ink-300 font-bold">
            Sample only
          </span>
        </div>
      </div>
    </div>
  );
}
