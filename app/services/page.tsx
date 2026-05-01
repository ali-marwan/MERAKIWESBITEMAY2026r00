import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PILLARS } from "@/data/pillars";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Five connected pillars across Start, Manage, Comply, Control, and Automate — accounting, tax, compliance, business setup, cash-flow, and AI-assisted workflows for UAE businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section bg="paper" tone="default">
        <Container size="pro">
          <div className="max-w-3xl">
            <Pill tone="bronze">Services</Pill>
            <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
              Five connected pillars. One standard of execution.
            </h1>
            <p className="mt-6 text-lead text-ink-500">
              Meraki is structured around five pillars — Start, Manage, Comply,
              Control, and Automate. Each pillar covers a distinct part of
              running a UAE business. Together they make a single connected
              business support system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/marketplace" variant="primary" size="md">
                Browse marketplace
              </Button>
              <Button
                href="/marketplace#tax-risk-assessment"
                variant="ghost"
                size="md"
              >
                Request Risk Assessment
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                Speak to our team
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {PILLARS.map((pillar, idx) => (
        <Section
          key={pillar.key}
          bg={idx % 2 === 0 ? "cream" : "paper"}
          tone="default"
          id={pillar.key}
        >
          <Container size="pro">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-paper border border-bronze-200 text-bronze-700 flex items-center justify-center">
                    <Icon name={pillar.key} className="h-6 w-6" />
                  </div>
                  <Eyebrow>Pillar 0{idx + 1}</Eyebrow>
                </div>
                <h2 className="mt-5 text-display-lg text-ink-900 text-balance">
                  {pillar.title}.
                </h2>
                <p className="mt-3 text-lead text-bronze-700 font-semibold">
                  {pillar.tagline}
                </p>
                <p className="mt-5 text-body text-ink-500">
                  {pillar.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    href={`/marketplace?category=${pillar.key === "automate" ? "meraki-ai" : pillar.key === "comply" ? "tax-compliance" : pillar.key === "start" ? "business-setup" : "monthly-accounting"}`}
                    variant="primary"
                    size="md"
                  >
                    Browse marketplace
                  </Button>
                  <Button
                    href="/contact?intent=services"
                    variant="ghost"
                    size="md"
                  >
                    Speak to our team
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-card bg-paper border border-border shadow-soft p-6 sm:p-8">
                  <p className="text-eyebrow uppercase text-ink-500 mb-5">
                    Included services
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {pillar.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2.5 text-body-sm text-ink-700"
                      >
                        <Icon
                          name="check"
                          className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section bg="paper" tone="default">
        <Container size="pro">
          <div className="rounded-card bg-cream border border-hairline p-8 md:p-12">
            <Eyebrow>Important</Eyebrow>
            <h2 className="mt-3 text-display-md text-ink-900 text-balance">
              Wording matters. Compliance matters more.
            </h2>
            <p className="mt-4 text-body text-ink-500 max-w-3xl">
              Meraki provides support, coordination, and review. We do not act as
              an immigration or visa processing firm and we do not provide legal
              advice. Authority approvals are subject to FTA portal review,
              required documents, and applicable UAE regulations. Final tax
              treatment, filing position, and compliance decisions may require
              professional review based on documents and business circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA />
    </>
  );
}
