import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const READINESS_STEPS = [
  {
    title: "Invoice format review",
    body: "Tax invoice fields, TRN, dates, line items, and credit-note structure reviewed against current expectations.",
  },
  {
    title: "Accounting workflow readiness",
    body: "Customer and supplier master data, tax codes, and document storage prepared for digital exchange.",
  },
  {
    title: "Document workflow design",
    body: "Single source of truth for invoice creation, capture, and storage — connected to your finance team.",
  },
  {
    title: "Future integration direction",
    body: "Designed to connect with accredited e-invoicing service providers and your accounting software, when ready.",
  },
];

export function EInvoicingTeaser() {
  return (
    <Section bg="cream">
      <Container size="pro">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>E-Invoicing Readiness</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Prepare your business for UAE e-invoicing readiness.
            </h2>
            <p className="mt-6 text-lead text-ink-500">
              Tax invoice compliance, digital invoice workflow preparation, and
              accounting system readiness — built on top of your existing
              tools. Meraki supports readiness; we are not positioning as an
              accredited e-invoicing service provider.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/e-invoicing" variant="primary" size="md">
                Learn more
              </Button>
              <Button
                href="/marketplace#einvoicing-readiness"
                variant="ghost"
                size="md"
              >
                Request a readiness review
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {READINESS_STEPS.map((step) => (
                <li
                  key={step.title}
                  className="rounded-card bg-paper border border-border p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-bronze-50 border border-bronze-100 flex items-center justify-center text-bronze-700">
                    <Icon name="receipt" className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-base font-semibold text-ink-900">
                    {step.title}
                  </p>
                  <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">
                    {step.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
