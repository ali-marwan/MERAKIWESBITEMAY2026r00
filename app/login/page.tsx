import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/layout/Logo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Portal",
  description:
    "The Meraki Client Portal is being prepared. A secure workspace for documents, Meraki AI review queues, subscriptions, and reports — available to approved clients when activated.",
  path: "/login",
  noIndex: true,
});

const PORTAL_CAPABILITIES: { icon: IconName; label: string; detail: string }[] = [
  {
    icon: "briefcase",
    label: "Package management",
    detail: "View your active Meraki subscriptions and add-on services.",
  },
  {
    icon: "upload",
    label: "Document upload",
    detail: "Send invoices, receipts, and statements securely to your file.",
  },
  {
    icon: "doc",
    label: "Invoice review status",
    detail: "Track which documents are flagged, in review, or approved.",
  },
  {
    icon: "shield",
    label: "VAT file preparation",
    detail: "See your VAT period at a glance ahead of each filing window.",
  },
  {
    icon: "calendar",
    label: "Corporate Tax tracking",
    detail: "Supporting documents and classifications kept ready for filing.",
  },
  {
    icon: "receipt",
    label: "E-invoicing readiness",
    detail: "Track your readiness checklist as UAE rules are implemented.",
  },
  {
    icon: "spark",
    label: "Meraki AI review queue",
    detail: "Items flagged by Meraki AI surface here for accountant review.",
  },
  {
    icon: "user",
    label: "Team communication",
    detail: "A single thread with your Meraki team — no inbox archaeology.",
  },
  {
    icon: "chart",
    label: "Reports & summaries",
    detail: "Monthly summaries, compliance summaries, and management reports.",
  },
];

export default function LoginPage() {
  return (
    <>
      <Section bg="cream" tone="default">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Pill tone="bronze" dot>
                Client portal · In preparation
              </Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                A secure workspace for Meraki clients — coming soon.
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                The Meraki Client Portal is being prepared. It will be a single
                place for documents, Meraki AI review queues, subscriptions,
                compliance calendars, and monthly reports. Client portal access
                will be available for approved clients when activated.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact?intent=portal-access" variant="primary" size="md">
                  Speak to Our Team
                </Button>
                <Button href="/packages" variant="ghost" size="md">
                  View Packages
                </Button>
                <Button
                  href="/contact?intent=custom-quote"
                  variant="ghost"
                  size="md"
                >
                  Request Custom Quote
                </Button>
                <Button
                  href="/meraki-ai"
                  variant="ghost"
                  size="md"
                  iconLeft={<Icon name="spark" className="h-4 w-4" />}
                >
                  Explore Meraki AI
                </Button>
              </div>
              <p className="mt-6 text-sm text-ink-500 max-w-xl">
                Already a Meraki client? Reach out to your Meraki contact and
                we&apos;ll confirm portal access as soon as it&apos;s activated
                for your account.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-card bg-paper border border-border shadow-soft p-7 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <Logo />
                  <span className="rounded-pill bg-bronze-50 border border-bronze-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-700">
                    Preview
                  </span>
                </div>
                <p className="text-display-sm text-ink-900">
                  Client portal access
                </p>
                <p className="mt-2 text-body-sm text-ink-500">
                  Sign-in is not yet active. While the portal is being prepared,
                  approved Meraki clients can request access through our team.
                </p>

                <div className="mt-5 rounded-2xl border border-hairline bg-cream p-4 flex items-start gap-3">
                  <span className="h-9 w-9 rounded-xl bg-paper border border-hairline text-bronze-700 flex items-center justify-center shrink-0">
                    <Icon name="shield" className="h-4 w-4" />
                  </span>
                  <div className="text-sm text-ink-700">
                    <p className="font-semibold text-ink-900">
                      Secure by design
                    </p>
                    <p className="mt-1 text-ink-500">
                      Authentication, role-based access, and document handling
                      are being built before any client data is moved into the
                      portal.
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-ink-700">
                  {[
                    "Documents & uploads, in one secure place",
                    "Meraki AI review queue handled by your team",
                    "Subscriptions, invoices, and reports",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Icon
                        name="check"
                        className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button
                    href="/contact?intent=portal-access"
                    variant="primary"
                    size="md"
                    fullWidth
                  >
                    Request portal access
                  </Button>
                  <Button
                    href="/portal"
                    variant="ghost"
                    size="md"
                    fullWidth
                  >
                    Preview the portal
                  </Button>
                </div>

                <p className="mt-5 pt-5 border-t border-hairline text-[11px] text-ink-500 leading-relaxed">
                  Portal capabilities below are planned features. Live
                  authentication, real document storage, and integrations
                  activate when the portal is released. No fake credentials are
                  accepted.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="paper" tone="default">
        <Container size="pro">
          <div className="max-w-3xl">
            <p className="text-eyebrow uppercase text-bronze-700">
              Planned portal capabilities
            </p>
            <h2 className="mt-3 text-display-lg text-ink-900 text-balance">
              What the Meraki portal will do for you.
            </h2>
            <p className="mt-5 text-lead text-ink-500">
              Designed for UAE businesses on Meraki packages — a secure
              workspace where documents, compliance, and the Meraki team come
              together. None of these capabilities are live yet; they&apos;re
              the roadmap we&apos;re building toward.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTAL_CAPABILITIES.map((cap) => (
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

          <div className="mt-14 rounded-card bg-cream border border-hairline p-7 md:p-9">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="max-w-2xl">
                <p className="text-eyebrow uppercase text-bronze-700">
                  Meraki AI positioning
                </p>
                <p className="mt-2 text-display-sm text-ink-900">
                  AI checks. Meraki verifies. Your records stay ready.
                </p>
                <p className="mt-3 text-body-sm text-ink-500">
                  Meraki AI is a workflow and review-assist layer connected to
                  Meraki&apos;s professional services — not a replacement for
                  accounting software or accountants. Built beyond automation.
                  Designed for compliance.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button href="/meraki-ai" variant="primary" size="md">
                  Explore Meraki AI
                </Button>
                <Button href="/packages" variant="ghost" size="md">
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
