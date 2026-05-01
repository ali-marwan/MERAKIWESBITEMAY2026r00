import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { Button, ArrowRightIcon } from "@/components/ui/Button";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PILLARS } from "@/data/pillars";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Every service your UAE business needs — accounting, VAT, corporate tax, e-invoicing readiness, business setup, and AI-assisted workflows — under one operating standard.",
  path: "/services",
});

const PILLAR_CATEGORY: Record<string, string> = {
  start: "business-setup",
  manage: "monthly-accounting",
  comply: "tax-compliance",
  control: "monthly-accounting",
  automate: "meraki-ai",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-noise opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-bronze-50 blur-3xl opacity-70"
        />
        <Container size="pro" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Pill tone="bronze" dot>
                Services · UAE Business Support
              </Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                Every service your UAE business needs — under one operating
                standard.
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Accounting, VAT, corporate tax, e-invoicing readiness, business
                setup, cash-flow control, and AI-assisted workflows — delivered
                as one connected system across five pillars: Start, Manage,
                Comply, Control, and Automate.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-bronze-700">
                <span className="h-px w-8 bg-bronze-500" />
                One system. One team. One standard.
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/packages" variant="primary" size="md">
                  View Packages
                </Button>
                <Button
                  href="/contact?intent=custom-quote"
                  variant="ghost"
                  size="md"
                >
                  Request Custom Quote
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Speak to Our Team
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500">
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-bronze-700" />
                  Subscriptions, one-time, and custom
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-bronze-700" />
                  AI checks · Meraki verifies
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-bronze-700" />
                  UAE focused
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <div className="rounded-card bg-paper border border-border shadow-soft p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Five connected pillars</Eyebrow>
                  <Link
                    href="#start"
                    className="text-xs font-semibold text-bronze-700 hover:text-bronze-600 inline-flex items-center gap-1.5"
                  >
                    Jump in
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <ul className="mt-5 divide-y divide-hairline">
                  {PILLARS.map((p, i) => (
                    <li key={p.key}>
                      <Link
                        href={`#${p.key}`}
                        className="group flex items-center gap-4 py-3.5 -mx-1 px-1 rounded-xl hover:bg-cream transition"
                      >
                        <span className="h-10 w-10 rounded-xl bg-cream border border-hairline text-bronze-700 inline-flex items-center justify-center shrink-0 group-hover:bg-bronze-50 group-hover:border-bronze-200 transition">
                          <Icon name={p.key} className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-ink-400">
                              0{i + 1}
                            </span>
                            <span className="text-base font-bold text-ink-900">
                              {p.title}
                            </span>
                          </div>
                          <p className="text-xs text-ink-500 leading-relaxed mt-0.5">
                            {p.tagline}
                          </p>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 text-ink-300 group-hover:text-bronze-700 group-hover:translate-x-0.5 transition shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Commercial access strip */}
      <Section bg="cream" tone="tight">
        <Container size="pro">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <Eyebrow>How to access Meraki</Eyebrow>
              <h2 className="mt-4 text-display-md text-ink-900 text-balance">
                Three ways to start. One standard of execution.
              </h2>
            </div>
            <p className="text-sm text-ink-500 max-w-md lg:text-right">
              Every Meraki service can be accessed via a monthly package, a
              one-time engagement, or a custom quote — your choice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <AccessCard
              eyebrow="Monthly support"
              title="Start a Meraki package"
              body="Subscribe to a package for ongoing accounting, tax, compliance, and AI-assisted workflow support — billed monthly."
              cta={{ label: "View Packages", href: "/packages" }}
              tone="primary"
            />
            <AccessCard
              eyebrow="One-time service"
              title="Browse the marketplace"
              body="Pick a fixed-scope task — VAT registration, audit-readiness review, invoice review — and pay per service."
              cta={{ label: "Browse Marketplace", href: "/marketplace" }}
            />
            <AccessCard
              eyebrow="Tailored scope"
              title="Request a custom quote"
              body="Multi-entity, group, or non-standard scope? Share a few details and we'll prepare a tailored proposal."
              cta={{
                label: "Request Custom Quote",
                href: "/contact?intent=custom-quote",
              }}
            />
          </div>
        </Container>
      </Section>

      {/* Pillar sections */}
      {PILLARS.map((pillar, idx) => (
        <Section
          key={pillar.key}
          bg={idx % 2 === 0 ? "paper" : "cream"}
          tone="default"
          id={pillar.key}
        >
          <Container size="pro">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-paper border border-bronze-200 text-bronze-700 flex items-center justify-center shadow-soft">
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
                    href={`/marketplace?category=${PILLAR_CATEGORY[pillar.key]}`}
                    variant="primary"
                    size="md"
                  >
                    Browse {pillar.title.toLowerCase()} services
                  </Button>
                  <Button
                    href="/contact?intent=custom-quote"
                    variant="ghost"
                    size="md"
                  >
                    Request Custom Quote
                  </Button>
                </div>

                <div className="mt-7 inline-flex items-center gap-2 rounded-pill bg-paper border border-hairline px-3 py-1.5 text-xs text-ink-500">
                  <Icon
                    name="check"
                    className="h-3.5 w-3.5 text-bronze-700"
                  />
                  Available via packages, one-time, or custom quote
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-card bg-paper border border-border shadow-soft p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-eyebrow uppercase text-ink-500">
                      Included services
                    </p>
                    <span className="text-xs text-ink-400 font-semibold">
                      {pillar.services.length} service
                      {pillar.services.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
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

      {/* Meraki AI strip */}
      <Section bg="paper" tone="tight">
        <Container size="pro">
          <div className="rounded-card bg-ink-900 text-paper border border-ink-800 overflow-hidden relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-bronze-radial opacity-80 pointer-events-none"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 items-center">
              <div className="lg:col-span-7">
                <Eyebrow className="text-bronze-300">
                  AI-assisted workflow
                </Eyebrow>
                <h2 className="mt-4 text-display-md text-paper text-balance">
                  AI checks. Meraki verifies. Your records stay ready.
                </h2>
                <p className="mt-4 text-body text-paper/75 max-w-2xl">
                  Meraki AI supports invoicing, expense classification, VAT and
                  tax checks, and e-invoicing readiness — connected to your
                  Meraki team. Built beyond automation. Designed for compliance.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    href="/meraki-ai"
                    variant="primary"
                    size="md"
                  >
                    Explore Meraki AI
                  </Button>
                  <Button
                    href="/packages"
                    variant="ink-ghost"
                    size="md"
                  >
                    View Packages
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <AIChip label="Invoice OCR" />
                  <AIChip label="Expense classification" />
                  <AIChip label="VAT checks" />
                  <AIChip label="Tax flags" />
                  <AIChip label="Accountant review" />
                  <AIChip label="E-invoicing readiness" />
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Compliance / wording */}
      <Section bg="cream" tone="tight">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Eyebrow>Important</Eyebrow>
              <h2 className="mt-3 text-display-md text-ink-900 text-balance">
                Wording matters. Compliance matters more.
              </h2>
              <p className="mt-4 text-body text-ink-500 max-w-md">
                Meraki provides support, coordination, and review. Final
                outcomes depend on documents, authority portal review, and
                applicable UAE regulations.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <NoteCard
                  title="What we do"
                  body="Support, preparation, review, and coordination across accounting, tax, compliance, and business setup."
                />
                <NoteCard
                  title="Subject to authorities"
                  body="FTA portal review, required documents, and applicable UAE regulations apply to filings and registrations."
                />
                <NoteCard
                  title="What we don't do"
                  body="We are not a legal, immigration, or visa processing firm. We do not provide legal advice."
                />
                <NoteCard
                  title="Professional review"
                  body="Final tax treatment and filing positions may require professional review based on documents and circumstances."
                />
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA />
    </>
  );
}

function AccessCard({
  eyebrow,
  title,
  body,
  cta,
  tone,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  tone?: "primary";
}) {
  return (
    <div
      className={
        tone === "primary"
          ? "relative rounded-card bg-ink-900 text-paper p-7 shadow-ink-pop overflow-hidden"
          : "relative rounded-card bg-paper border border-border p-7 shadow-soft hover:shadow-lift transition"
      }
    >
      {tone === "primary" && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-bronze-radial opacity-90 pointer-events-none"
        />
      )}
      <div className="relative">
        <p
          className={
            tone === "primary"
              ? "text-eyebrow uppercase text-bronze-300"
              : "text-eyebrow uppercase text-bronze-700"
          }
        >
          {eyebrow}
        </p>
        <h3
          className={
            tone === "primary"
              ? "mt-3 text-display-sm text-paper text-balance"
              : "mt-3 text-display-sm text-ink-900 text-balance"
          }
        >
          {title}
        </h3>
        <p
          className={
            tone === "primary"
              ? "mt-3 text-body-sm text-paper/75"
              : "mt-3 text-body-sm text-ink-500"
          }
        >
          {body}
        </p>
        <div className="mt-6">
          <Button
            href={cta.href}
            variant={tone === "primary" ? "primary" : "ghost"}
            size="sm"
            iconRight={<ArrowRightIcon className="h-4 w-4" />}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}

function AIChip({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2.5 rounded-pill bg-paper/10 border border-paper/15 px-4 py-2.5 text-sm font-medium text-paper">
      <Icon name="spark" className="h-4 w-4 text-bronze-300 shrink-0" />
      <span className="truncate">{label}</span>
    </li>
  );
}

function NoteCard({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-card bg-paper border border-hairline p-5">
      <p className="text-sm font-bold text-ink-900">{title}</p>
      <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">{body}</p>
    </li>
  );
}
