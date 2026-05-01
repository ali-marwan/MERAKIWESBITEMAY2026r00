import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const POINTS = [
  "VAT registration support",
  "Corporate Tax registration support",
  "Accounting setup guidance",
  "Compliance calendar setup",
  "Monthly bookkeeping package onboarding",
];

export function LeadOffer() {
  return (
    <Section bg="paper" tone="default">
      <Container size="pro">
        <div className="relative overflow-hidden rounded-card bg-ink-900 text-paper p-10 sm:p-14 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-bronze-radial opacity-80 pointer-events-none"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 max-w-2xl">
              <Eyebrow className="text-bronze-300">Onboarding offer</Eyebrow>
              <h2 className="mt-4 text-display-lg text-paper text-balance">
                Start with monthly accounting support. Get registration
                included.
              </h2>
              <p className="mt-6 text-lead text-paper/80">
                Subscribe to an eligible Meraki accounting or compliance
                package and get VAT and Corporate Tax registration support
                included as part of your onboarding.
              </p>
              <p className="mt-3 text-sm text-paper/60">
                Available with selected packages. Subject to required documents
                and authority portal requirements. Terms apply.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/packages" variant="primary" size="md">
                  View Eligible Packages
                </Button>
                <Button href="/contact" variant="ink-ghost" size="md">
                  Speak to Our Team
                </Button>
              </div>
            </div>

            <ul className="lg:col-span-5 space-y-3">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl bg-paper/5 backdrop-blur border border-paper/10 px-4 py-3"
                >
                  <span className="shrink-0 h-7 w-7 rounded-pill bg-bronze-500/15 text-bronze-300 inline-flex items-center justify-center">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-paper">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
