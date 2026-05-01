import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button, ArrowRightIcon } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { DashboardMockup } from "@/components/ai/DashboardMockup";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <Section bg="paper" tone="hero" className="pt-12 pb-20 lg:pt-0 lg:pb-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-noise opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-bronze-50 blur-3xl opacity-70"
      />
      <Container size="pro" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.38fr_1fr] gap-14 lg:gap-12 items-center">
          <div>
            <Pill tone="bronze" dot>
              UAE Business Consultancy · Finance Operations
            </Pill>
            <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
              Enterprise-Level Business Support, Made Accessible to UAE Companies
            </h1>
            <p className="mt-6 text-lead text-ink-500 max-w-2xl">
              Meraki Consultants brings accounting, tax, compliance, business
              setup, cash-flow management, and AI-assisted workflows into one
              connected system — managed by one professional team.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-bronze-700">
              <span className="h-px w-8 bg-bronze-500" />
              One system. One team. One standard.
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
              <CtaCard
                href="/packages"
                primary
                title="View Packages"
                micro="Choose the package that fits your business."
              />
              <CtaCard
                href="/meraki-ai"
                title="Explore Meraki AI"
                micro="See how AI-assisted workflows support finance, tax, and compliance."
              />
              <CtaCard
                href="/contact"
                title="Speak to Our Team"
                micro="Get support, consultation, or a custom solution."
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-bronze-700" />
                UAE focused
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-bronze-700" />
                Subscriptions & one-time services
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-bronze-700" />
                AI checks · Meraki verifies
              </span>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CtaCard({
  href,
  title,
  micro,
  primary,
}: {
  href: string;
  title: string;
  micro: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        primary
          ? "group relative rounded-2xl bg-ink-900 text-paper p-5 hover:bg-ink-800 transition shadow-soft"
          : "group relative rounded-2xl border border-hairline bg-paper p-5 hover:border-ink-900 transition"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <p
          className={
            primary
              ? "text-base font-bold"
              : "text-base font-bold text-ink-900"
          }
        >
          {title}
        </p>
        <span
          className={
            primary
              ? "h-8 w-8 rounded-pill bg-bronze-500 text-paper inline-flex items-center justify-center group-hover:translate-x-0.5 transition shrink-0"
              : "h-8 w-8 rounded-pill bg-cream border border-hairline text-ink-900 inline-flex items-center justify-center group-hover:border-bronze-500 group-hover:text-bronze-700 transition shrink-0"
          }
        >
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </div>
      <p
        className={
          primary
            ? "mt-2 text-xs text-paper/70 leading-relaxed"
            : "mt-2 text-xs text-ink-500 leading-relaxed"
        }
      >
        {micro}
      </p>
    </a>
  );
}

export { Button };
