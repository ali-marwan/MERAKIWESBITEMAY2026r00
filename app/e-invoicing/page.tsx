import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ProcessStep } from "@/components/shared/ProcessStep";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "E-Invoicing Readiness",
  description:
    "UAE e-invoicing readiness support — invoice format review, master data clean-up, system and workflow preparation, document storage, and coordination with approved providers when required.",
  path: "/e-invoicing",
});

const READINESS_AREAS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "doc",
    title: "VAT invoice format",
    body: "Tax invoice fields reviewed against current expectations — TRN, supplier and customer details, line items, VAT category, VAT amount, totals, and credit-note formatting.",
  },
  {
    icon: "user",
    title: "TRN & party information",
    body: "Customer and supplier master data reviewed for complete legal names, valid TRNs where applicable, and consistent address and contact details.",
  },
  {
    icon: "calendar",
    title: "Numbering & date consistency",
    body: "Sequential invoice numbering, consistent issue dates, supply dates, and credit-note references — checked across the sample for clean audit trails.",
  },
  {
    icon: "shield",
    title: "VAT category & amount review",
    body: "Standard, zero-rated, exempt, and out-of-scope items reviewed for consistent application across line items — flagged where mapping looks off.",
  },
  {
    icon: "manage",
    title: "Customer & supplier data quality",
    body: "One clean record per party. Duplicates merged, missing fields filled, and consistent naming applied across your accounting system.",
  },
  {
    icon: "layers",
    title: "Accounting software readiness",
    body: "We review how your invoices are issued and captured today — Zoho, QuickBooks, Xero, Tally, or Excel — and the practical adjustments needed for digital exchange.",
  },
  {
    icon: "briefcase",
    title: "Document storage & audit trail",
    body: "Where invoices are stored, who can retrieve them, and how the chain of evidence is preserved from origin to archive.",
  },
  {
    icon: "chart",
    title: "Monthly compliance file",
    body: "A monthly readiness pack — invoices issued, invoices received, exceptions, and notes — kept ready so periodic reviews and audits stay calm.",
  },
  {
    icon: "globe",
    title: "Coordination with approved providers",
    body: "When the time comes to connect with an accredited e-invoicing service provider, your records, formats, and workflows are already ready to hand over.",
  },
];

const WHY_PREPARE: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "search",
    title: "Surface gaps before they cost you",
    body: "Most readiness gaps are quiet — missing TRNs, inconsistent tax codes, weak storage. Found early, they're a clean-up. Found late, they're a project.",
  },
  {
    icon: "bolt",
    title: "Avoid the last-minute rush",
    body: "Final UAE e-invoicing rules will land. Businesses that prepare early adjust calmly. Businesses that wait will be doing it under pressure.",
  },
  {
    icon: "shield",
    title: "Cleaner audits and reviews",
    body: "Tax invoice quality and audit-trail discipline pay back at every VAT and Corporate Tax checkpoint — long before any e-invoicing deadline arrives.",
  },
  {
    icon: "globe",
    title: "Integration-ready, not integration-blocked",
    body: "When you eventually connect with an accredited provider, the work is plugging in — not rebuilding. Readiness is the difference.",
  },
];

const AI_CAPABILITIES = [
  "Invoice and receipt intelligence",
  "Missing TRN, date, and VAT detail flags",
  "Document classification and tagging",
  "Cleaner records prepared for digital exchange",
  "Hands off to professional review automatically",
  "Designed to coordinate with approved providers",
];

const REVIEW_STEPS = [
  {
    title: "Sample collection",
    body: "We pull a representative sample of customer invoices, supplier invoices, credit notes, and master data from your accounting system.",
  },
  {
    title: "AI-assisted first pass",
    body: "Meraki AI extracts fields, flags missing TRNs or VAT details, and classifies invoices and supporting documents into a review queue.",
  },
  {
    title: "Professional verification",
    body: "Meraki professionals verify flagged items, assess tax invoice quality, and review formats and workflows against current expectations.",
  },
  {
    title: "Readiness report & roadmap",
    body: "You receive a clear report — what's ready, what to fix, and what to do next. With a practical roadmap, not a 50-page document.",
  },
];

const HOW_TO_START = [
  {
    title: "Request a readiness review",
    body: "Tell us about your business — license type, transaction volume, and how invoices are issued and captured today. A short conversation is enough to scope the review.",
  },
  {
    title: "Share a sample",
    body: "We agree on a representative invoice sample and a list of system or storage locations. You stay in control of what is shared and how.",
  },
  {
    title: "Receive your readiness report",
    body: "A clear written report with prioritised fixes, supporting notes, and a roadmap to get records, formats, and workflows ready.",
  },
  {
    title: "Choose the right next step",
    body: "Pick the one-off readiness package, fold it into a monthly compliance plan, or request a custom quote for multi-entity or industry-specific work.",
  },
];

const HERO_CHECKLIST = [
  { label: "VAT invoice format", status: "Reviewed" },
  { label: "TRN & party data", status: "Reviewed" },
  { label: "Numbering & dates", status: "Verified" },
  { label: "VAT category & amount", status: "Verified" },
  { label: "Document storage", status: "In review" },
  { label: "Approved provider link", status: "Planned" },
];

function StatusDot({ tone }: { tone: "success" | "warning" | "default" }) {
  const c =
    tone === "success"
      ? "bg-success"
      : tone === "warning"
        ? "bg-warning"
        : "bg-ink-300";
  return <span className={`h-1.5 w-1.5 rounded-full ${c}`} />;
}

function statusTone(status: string): "success" | "warning" | "default" {
  if (status === "Reviewed" || status === "Verified") return "success";
  if (status === "In review") return "warning";
  return "default";
}

export default function EInvoicingPage() {
  return (
    <>
      {/* HERO */}
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-bronze-radial opacity-60 pointer-events-none"
        />
        <Container size="pro" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            <div className="lg:col-span-7">
              <Pill tone="bronze" dot>
                UAE E-Invoicing · Readiness Support
              </Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                Get your business ready for UAE e-invoicing — calmly, and in
                advance.
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Meraki helps UAE businesses prepare invoices, master data,
                accounting systems, and document workflows for e-invoicing
                readiness — alongside accredited providers and your existing
                accounting software.
              </p>
              <Pill tone="ink" className="mt-7">
                AI checks. Meraki verifies. Your records stay ready.
              </Pill>
              <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Button
                  href="/marketplace#einvoicing-readiness"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Request E-Invoicing Readiness Review
                </Button>
                <Button
                  href="/packages"
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Explore Packages
                </Button>
                <Button
                  href="/contact"
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Speak to Our Team
                </Button>
              </div>
              <p className="mt-6 text-xs text-ink-500 max-w-xl leading-relaxed">
                Subject to UAE authority requirements and final e-invoicing
                implementation rules. Meraki supports readiness; we are not
                positioning Meraki as an accredited e-invoicing service
                provider, and final compliance is confirmed with accredited
                providers and tax professionals.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-card bg-paper border border-hairline shadow-soft p-6 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-500">
                      Readiness preview
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink-900">
                      Sample client · April pack
                    </p>
                  </div>
                  <span className="rounded-pill bg-bronze-50 border border-bronze-100 text-bronze-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                    Ready for handover
                  </span>
                </div>

                <ul className="mt-5 divide-y divide-hairline rounded-2xl border border-hairline bg-cream/60">
                  {HERO_CHECKLIST.map((row) => {
                    const tone = statusTone(row.status);
                    return (
                      <li
                        key={row.label}
                        className="flex items-center justify-between gap-3 px-4 py-3"
                      >
                        <span className="flex items-center gap-3 text-sm text-ink-700">
                          <Icon
                            name="check"
                            className={`h-4 w-4 ${
                              tone === "success"
                                ? "text-success"
                                : tone === "warning"
                                  ? "text-warning"
                                  : "text-ink-300"
                            }`}
                          />
                          {row.label}
                        </span>
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-ink-700">
                          <StatusDot tone={tone} />
                          {row.status}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-hairline bg-paper px-3 py-3">
                    <p className="text-[10px] uppercase tracking-wider text-ink-500 font-bold">
                      Reviewed
                    </p>
                    <p className="mt-1 text-base font-bold text-ink-900 tabular-nums">
                      4 / 6
                    </p>
                  </div>
                  <div className="rounded-xl border border-hairline bg-paper px-3 py-3">
                    <p className="text-[10px] uppercase tracking-wider text-ink-500 font-bold">
                      Open items
                    </p>
                    <p className="mt-1 text-base font-bold text-ink-900 tabular-nums">
                      1
                    </p>
                  </div>
                  <div className="rounded-xl border border-hairline bg-paper px-3 py-3">
                    <p className="text-[10px] uppercase tracking-wider text-ink-500 font-bold">
                      Verified by
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink-900">
                      Meraki
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[11px] text-ink-500 leading-relaxed">
                  Illustrative example. No live client data. Status flow shown
                  reflects how a typical readiness review is presented.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT E-INVOICING READINESS MEANS */}
      <Section bg="cream">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>What it means</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                E-invoicing readiness, explained for business owners.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                E-invoicing is structured digital invoicing — issued, exchanged,
                and stored in a defined format that systems can read. Readiness
                is the work done before any go-live: making sure your invoices,
                data, and workflows are clean enough to meet that bar.
              </p>
              <p className="mt-4 text-body text-ink-500">
                Readiness is not the platform itself. It&apos;s the preparation
                that makes adopting an accredited platform a small adjustment
                rather than a large project.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="rounded-card bg-paper border border-hairline divide-y divide-hairline">
                {[
                  {
                    h: "Format readiness",
                    b: "Tax invoices and credit notes carry the right fields, in a consistent structure, every time.",
                  },
                  {
                    h: "Data readiness",
                    b: "Customer, supplier, and tax-code records are clean, complete, and used the same way across the system.",
                  },
                  {
                    h: "System readiness",
                    b: "Your accounting software and document storage can produce, capture, and retrieve invoices in a format suited to digital exchange.",
                  },
                  {
                    h: "Process readiness",
                    b: "There is one place invoices originate, one place they are captured, and a clean audit trail from origin to archive.",
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

      {/* WHY PREPARE EARLY */}
      <Section bg="paper">
        <Container size="pro">
          <div className="max-w-2xl">
            <Eyebrow>Why prepare early</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Preparation is cheaper than catch-up.
            </h2>
            <p className="mt-5 text-body text-ink-500">
              Final UAE e-invoicing rules will keep evolving. The businesses
              that handle the change calmly are the ones that started cleaning
              up invoices, master data, and storage early — not the ones that
              waited for a deadline.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_PREPARE.map((item) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* WHAT MERAKI REVIEWS */}
      <Section bg="cream">
        <Container size="pro">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>What Meraki reviews</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                Nine practical readiness areas.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                A structured walk-through of the formats, data, systems, and
                processes that decide whether your business is ready for
                e-invoicing — or quietly drifting out of shape.
              </p>
            </div>
            <Button
              href="/marketplace#einvoicing-readiness"
              variant="ghost"
              size="md"
            >
              Request a readiness review
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {READINESS_AREAS.map((a) => (
              <FeatureCard
                key={a.title}
                icon={a.icon}
                title={a.title}
                body={a.body}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* MERAKI AI INTEGRATION */}
      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <Eyebrow>Meraki AI · Invoice intelligence</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                AI checks. Meraki verifies. Your records stay ready.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                Meraki AI helps check, organise, classify, and flag invoice and
                document issues before professional verification — so readiness
                is something records grow into, not a last-minute project.
              </p>
              <p className="mt-4 text-body text-ink-500">
                Built beyond automation. Designed for compliance.
              </p>
              <p className="mt-4 text-sm text-ink-500">
                Meraki AI is not an accredited e-invoicing service provider, not
                a replacement for accounting software, and not a substitute for
                professional review. It is the intelligence layer that supports
                them.
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
            <ul className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AI_CAPABILITIES.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-2xl bg-cream border border-hairline px-4 py-4"
                >
                  <span className="h-8 w-8 rounded-xl bg-paper border border-hairline text-bronze-700 flex items-center justify-center shrink-0">
                    <Icon name="spark" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink-900 leading-snug">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* PROFESSIONAL VERIFICATION + REVIEW PIPELINE */}
      <Section bg="ink" tone="default">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-bronze-radial opacity-70 pointer-events-none"
        />
        <Container size="pro" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow className="text-bronze-300">
                Professional verification
              </Eyebrow>
              <h2 className="mt-4 text-display-lg text-paper text-balance">
                A review pipeline run by people, supported by AI.
              </h2>
              <p className="mt-5 text-lead text-paper/80">
                AI surfaces signals. Meraki professionals make the calls. Every
                readiness review goes through a structured pipeline so nothing
                important is left to a single judgment call.
              </p>
              <p className="mt-4 text-body text-paper/70">
                You get a clean readiness report — what is ready, what to fix,
                what to monitor, and how to coordinate with an accredited
                provider when the time comes.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ol className="rounded-card border border-paper/15 bg-paper/5 backdrop-blur-sm p-6 md:p-8">
                {REVIEW_STEPS.map((s, i) => (
                  <ProcessStep
                    key={s.title}
                    index={i + 1}
                    title={s.title}
                    body={s.body}
                    variant="dark"
                    className={i === REVIEW_STEPS.length - 1 ? "pb-0" : ""}
                  />
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* BEFORE / AFTER WORKFLOW */}
      <Section bg="cream">
        <Container size="pro">
          <div className="max-w-2xl">
            <Eyebrow>Before & after</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              From scattered invoicing to readiness-ready records.
            </h2>
            <p className="mt-5 text-body text-ink-500">
              The shift is not dramatic. It is a sequence of small fixes — done
              in advance — that change how the business meets every periodic
              review and any future digital exchange.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-card border border-hairline bg-paper p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-xl bg-ink-100 border border-hairline text-ink-700 flex items-center justify-center">
                  <Icon name="dash" className="h-4 w-4" />
                </span>
                <p className="text-eyebrow uppercase text-ink-500">Before</p>
              </div>
              <p className="mt-5 text-base font-semibold text-ink-900">
                Invoicing today
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Tax invoice fields inconsistent across templates",
                  "TRNs and supplier data missing or duplicated",
                  "Invoice numbering breaks across systems",
                  "Documents scattered across email and drives",
                  "Last-minute scramble at every audit checkpoint",
                  "No clear route to connect with an approved provider",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ink-300 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-bronze-200 bg-paper p-7 md:p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 flex items-center justify-center">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <p className="text-eyebrow uppercase text-bronze-700">After</p>
              </div>
              <p className="mt-5 text-base font-semibold text-ink-900">
                Invoicing after readiness
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "One tax invoice template, applied consistently",
                  "Customers and suppliers carry clean, complete data",
                  "Sequential numbering and aligned dates across the chain",
                  "Single source of truth for issued and received invoices",
                  "Monthly compliance file ready before it is asked for",
                  "Records prepared to plug into an approved provider",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <Icon
                      name="check"
                      className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW TO START */}
      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>How to start</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                Four steps, one clear outcome.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                A readiness review is structured, time-boxed, and built around
                your business — not a generic checklist. You leave with a
                report, a roadmap, and a clear next step.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Button
                  href="/marketplace#einvoicing-readiness"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Request Readiness Review
                </Button>
                <Button
                  href="/contact?intent=custom-quote"
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Request Custom Quote
                </Button>
              </div>
            </div>
            <ol className="lg:col-span-8 rounded-card border border-hairline bg-cream p-6 md:p-8">
              {HOW_TO_START.map((s, i) => (
                <ProcessStep
                  key={s.title}
                  index={i + 1}
                  title={s.title}
                  body={s.body}
                  variant="light"
                  className={i === HOW_TO_START.length - 1 ? "pb-0" : ""}
                />
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* FEATURED PACKAGE */}
      <Section bg="cream">
        <Container size="pro">
          <div className="rounded-card bg-paper border border-hairline shadow-soft p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Starting package</Eyebrow>
              <h2 className="mt-4 text-display-md text-ink-900 text-balance">
                E-Invoicing Readiness Review — starting from AED 1,500.
              </h2>
              <p className="mt-4 text-body text-ink-500 max-w-xl">
                A one-time engagement for businesses preparing invoice formats
                and accounting workflows for UAE e-invoicing readiness. Final
                pricing depends on volume, system complexity, and number of
                entities. Terms apply.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Invoice format review",
                  "Tax invoice compliance check",
                  "Accounting system readiness review",
                  "Recommendations & next steps",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <Icon
                      name="check"
                      className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Button
                  href="/marketplace#einvoicing-readiness"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Request Readiness Review
                </Button>
                <Button
                  href="/packages"
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Explore Packages
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-card border border-hairline bg-cream p-6">
                <p className="text-eyebrow uppercase text-bronze-700">
                  Bundled with monthly compliance
                </p>
                <p className="mt-3 text-base font-semibold text-ink-900">
                  Already on a Meraki monthly package?
                </p>
                <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">
                  Readiness is folded into your existing scope. Coordination
                  with approved providers is handled when required, subject to
                  authority requirements.
                </p>
                <Button
                  href="/contact?intent=upgrade"
                  variant="ghost"
                  size="sm"
                  className="mt-5"
                >
                  Speak to Our Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* COMPLIANCE DISCLAIMER */}
      <Section bg="paper" tone="tight">
        <Container size="pro">
          <div className="rounded-card bg-cream border border-hairline p-7 md:p-9 max-w-4xl">
            <Eyebrow>Important note</Eyebrow>
            <p className="mt-4 text-body text-ink-500 leading-relaxed">
              UAE e-invoicing requirements continue to evolve. This page
              describes readiness work — invoice format review, master data
              clean-up, system and workflow preparation, document and record
              readiness, and coordination with approved providers when required.
              Meraki does not claim direct integration with UAE authority
              systems unless already implemented, does not act as an accredited
              e-invoicing service provider unless legally confirmed, and does
              not provide legal advice or guarantee of compliance.
            </p>
            <p className="mt-4 text-sm text-ink-500 leading-relaxed">
              Final position should be confirmed with accredited providers and
              tax professionals based on your business circumstances. Readiness
              outcomes are subject to required documents, authority portal
              requirements, and final UAE e-invoicing implementation rules.
              Terms apply. Professional verification required.
            </p>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        eyebrow="Ready to start?"
        headline="Run a readiness review now. Avoid the rush later."
        body="Pick a one-time readiness review, fold it into a monthly compliance plan, or speak to our team for a custom quote built around your business."
        primaryCta={{
          label: "Request E-Invoicing Readiness Review",
          href: "/marketplace#einvoicing-readiness",
        }}
        secondaryCta={{ label: "Explore Packages", href: "/packages" }}
        tertiaryCta={{ label: "Speak to Our Team", href: "/contact" }}
      />
    </>
  );
}
