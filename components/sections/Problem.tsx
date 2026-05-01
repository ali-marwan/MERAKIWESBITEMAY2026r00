import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

const RISKS = [
  {
    title: "VAT errors and missing input claims",
    body: "Records that lag turn into VAT submissions that are wrong or under-recovered. Each filing carries the cost.",
  },
  {
    title: "Corporate Tax exposure",
    body: "Without organized records and proper expense classification, decisions get made under filing-deadline pressure.",
  },
  {
    title: "Missing invoices and weak document trail",
    body: "Invoices in inboxes and WhatsApp threads are not retrievable when partners, lenders, or authorities ask.",
  },
  {
    title: "Poor reporting and cash-flow confusion",
    body: "When records lag, owners stop trusting the numbers and run the business by gut. Receivables age. Payables drift.",
  },
  {
    title: "Last-minute filing stress and penalties",
    body: "Year-end becomes a project to reconstruct records under deadline. Penalties and rework follow.",
  },
];

export function Problem() {
  return (
    <Section bg="cream">
      <Container size="pro">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>The hidden cost</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Cheap accounting can become expensive.
            </h2>
            <p className="mt-6 text-lead text-ink-500 max-w-xl">
              Many UAE businesses try to save money with weak bookkeeping or
              very low-cost accounting support. Small monthly savings can
              quietly turn into VAT issues, missing invoices, poor reports,
              cash-flow confusion, and last-minute filing stress.
            </p>
            <p className="mt-5 text-body text-ink-500 max-w-xl">
              Meraki gives UAE businesses professional accounting, tax,
              compliance, and reporting support — through structured packages,
              accessible subscriptions, and AI-assisted workflows.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="rounded-card bg-paper border border-border shadow-soft divide-y divide-hairline">
              {RISKS.map((risk, i) => (
                <li
                  key={risk.title}
                  className="flex items-start gap-5 p-6 sm:p-7"
                >
                  <span className="shrink-0 mt-0.5 h-9 w-9 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 inline-flex items-center justify-center text-sm font-bold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-ink-900">
                      {risk.title}
                    </p>
                    <p className="mt-1.5 text-body-sm text-ink-500 leading-relaxed">
                      {risk.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2.5 text-sm text-ink-500">
              <Icon name="shield" className="h-4 w-4 text-bronze-700 mt-0.5 shrink-0" />
              <span>
                Professional accounting should not be out of reach for UAE
                SMEs. The right structure costs less than the risks of weak
                bookkeeping.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
