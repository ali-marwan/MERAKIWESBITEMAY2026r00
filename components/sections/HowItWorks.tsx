import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";

const STEPS = [
  {
    title: "Choose a package or service",
    body: "Subscribe to a monthly package, request a one-time service, or speak to our team for a custom solution.",
  },
  {
    title: "Submit business details and documents",
    body: "Trade license, contact details, and a starting set of documents. We give you a clear checklist.",
  },
  {
    title: "Meraki sets up the workflow",
    body: "Chart of accounts, document workflow, AI capture, compliance calendar, and review cadence configured.",
  },
  {
    title: "Upload records and invoices",
    body: "Documents flow into Meraki AI for capture, classification, and risk checks. Missing items are flagged.",
  },
  {
    title: "Meraki reviews and supports compliance",
    body: "Our team verifies flagged items, handles VAT and tax workflows, and prepares filings.",
  },
  {
    title: "Receive reports, summaries, and next steps",
    body: "Monthly summary, management view, compliance status, and the items that need your attention.",
  },
];

export function HowItWorks() {
  return (
    <Section bg="ink" tone="default">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink-radial pointer-events-none"
      />
      <Container size="pro" className="relative">
        <div className="max-w-2xl mb-14">
          <Eyebrow className="text-bronze-300">How it works</Eyebrow>
          <h2 className="mt-4 text-display-lg text-paper text-balance">
            Six steps from sign-up to a finance system that runs.
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10 rounded-card overflow-hidden border border-paper/10">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="bg-ink-900 p-7 hover:bg-ink-800 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="h-10 w-10 rounded-pill bg-paper/5 border border-paper/15 text-bronze-300 inline-flex items-center justify-center font-bold tabular-nums text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-paper/10" />
              </div>
              <p className="text-base font-semibold text-paper">{step.title}</p>
              <p className="mt-2 text-body-sm text-ink-300 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
