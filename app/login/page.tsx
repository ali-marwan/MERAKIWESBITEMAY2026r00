import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MarketplaceAuthForm } from "@/components/marketplace/MarketplaceAuthForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketplace Login",
  description:
    "Marketplace Login is for Meraki service customers. Log in or create an account to browse services, request packages, submit one-time service requests, and manage your Meraki marketplace activity. Meraki AI Portal Login is separate.",
  path: "/login",
  noIndex: true,
});

const MARKETPLACE_CAPABILITIES: {
  icon: IconName;
  label: string;
  detail: string;
}[] = [
  {
    icon: "briefcase",
    label: "Request one-time services",
    detail:
      "Risk assessment, business setup, e-invoicing readiness reviews, and other one-time engagements.",
  },
  {
    icon: "manage",
    label: "Start monthly support packages",
    detail:
      "Subscribe to Meraki accounting, VAT, Corporate Tax, or compliance packages once your account is active.",
  },
  {
    icon: "doc",
    label: "Request custom quotes",
    detail:
      "Multi-entity, industry-specific, or custom-scope work — scoped and confirmed by our team.",
  },
  {
    icon: "calendar",
    label: "Track service requests later",
    detail:
      "View status of submitted requests, packages in flight, and one-time services from your account.",
  },
  {
    icon: "user",
    label: "Manage future subscriptions when activated",
    detail:
      "Subscription management, renewals, and add-on services activate alongside marketplace checkout.",
  },
];

const FLOW_STEPS: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Create account or log in",
    body: "Marketplace access is required before submitting service requests, purchasing packages, or starting subscriptions.",
  },
  {
    step: "02",
    title: "Choose service or package",
    body: "Browse the marketplace, choose a one-time service, monthly package, or request a custom quote.",
  },
  {
    step: "03",
    title: "Submit company details",
    body: "Provide the business information needed for your engagement so we can scope and confirm next steps.",
  },
  {
    step: "04",
    title: "Meraki reviews and confirms",
    body: "Our team reviews your request, confirms scope and pricing, and proceeds once you approve.",
  },
];

export default function LoginPage() {
  return (
    <>
      {/* HERO */}
      <Section bg="cream" tone="default">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Pill tone="bronze" dot>
                Marketplace · Account access
              </Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                Marketplace Login
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Anyone can create a Meraki marketplace account. Log in or sign
                up to browse services, request packages, submit one-time
                service requests, and manage everything from your own
                marketplace dashboard.
              </p>
              <p className="mt-5 text-body text-ink-500 max-w-2xl">
                Marketplace access is required before submitting service
                requests, purchasing packages, or starting subscriptions —
                each customer gets their own account area.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/marketplace" variant="primary" size="md">
                  Browse Marketplace
                </Button>
                <Button href="/packages" variant="ghost" size="md">
                  View Packages
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Speak to Our Team
                </Button>
                <Button href="/meraki-ai" variant="ghost" size="md">
                  Explore Meraki AI
                </Button>
              </div>
              <p className="mt-6 text-sm text-ink-500 max-w-xl">
                Self-service login and Stripe-ready checkout activate alongside
                marketplace launch. Until then, the form on the right routes
                your details to our team to set up your account.
              </p>
            </div>

            <div className="lg:col-span-5">
              <MarketplaceAuthForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT YOU CAN DO */}
      <Section bg="paper" tone="default">
        <Container size="pro">
          <div className="max-w-3xl">
            <Eyebrow>What you can do with Marketplace Login</Eyebrow>
            <h2 className="mt-3 text-display-lg text-ink-900 text-balance">
              One account for marketplace services and packages.
            </h2>
            <p className="mt-5 text-lead text-ink-500">
              Designed for UAE businesses buying Meraki services. Login or
              signup is required before submitting requests, purchasing
              packages, or starting subscriptions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKETPLACE_CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="rounded-card bg-paper border border-border p-6 hover:border-bronze-300 hover:shadow-soft transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700">
                  <Icon name={cap.icon} className="h-5 w-5" />
                </span>
                <p className="mt-5 text-base font-semibold text-ink-900">
                  {cap.label}
                </p>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* BEFORE YOU BUY */}
      <Section bg="cream" tone="default">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Before you buy or request services</Eyebrow>
              <h2 className="mt-3 text-display-lg text-ink-900 text-balance">
                Four steps from request to confirmed engagement.
              </h2>
              <p className="mt-5 text-body text-ink-500">
                The structure is the same whether you choose a one-time
                service, a monthly package, or a custom quote.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/packages" variant="primary" size="md">
                  View Packages
                </Button>
                <Button href="/marketplace" variant="ghost" size="md">
                  Browse Services
                </Button>
              </div>
            </div>
            <ol className="lg:col-span-7 rounded-card border border-hairline bg-paper p-6 md:p-8 space-y-5">
              {FLOW_STEPS.map((s) => (
                <li key={s.title} className="flex items-start gap-5">
                  <span className="text-eyebrow uppercase font-bold text-bronze-700 shrink-0 mt-1 w-10">
                    {s.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-ink-900">
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-body-sm text-ink-500 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* MERAKI AI PORTAL IS SEPARATE — short note */}
      <Section bg="paper" tone="tight">
        <Container size="pro">
          <p className="max-w-3xl text-sm text-ink-500 leading-relaxed">
            Meraki AI Portal Login access is separate and available from the{" "}
            <a
              href="/meraki-ai"
              className="font-semibold text-ink-900 underline decoration-bronze-500 underline-offset-4 hover:text-bronze-700"
            >
              Meraki AI page
            </a>{" "}
            for approved AI subscribers.
          </p>
        </Container>
      </Section>
    </>
  );
}
