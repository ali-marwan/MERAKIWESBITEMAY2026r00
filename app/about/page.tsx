import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Meraki Business Consultants gives UAE businesses access to structured finance, tax, compliance, and business support without the overhead of building a full internal finance department.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "One system",
    body: "Setup, records, compliance, reports, and AI-assisted workflows under one connected operating model — not scattered across providers.",
  },
  {
    title: "One team",
    body: "A single professional team that knows your file. The same people across accounting, tax, compliance, and AI review.",
  },
  {
    title: "One standard",
    body: "Quality of execution does not change with package size. Every client gets the same disciplined process and review.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section bg="paper" tone="default">
        <Container size="pro">
          <div className="max-w-3xl">
            <Pill tone="bronze">About Meraki</Pill>
            <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
              Enterprise-level structure. Accessible to UAE companies.
            </h1>
            <p className="mt-6 text-lead text-ink-500">
              Meraki Business Consultants was created to give UAE businesses
              access to structured finance, tax, compliance, and business
              support — without the overhead of building a full internal
              finance department.
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>Why Meraki exists</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                Most UAE SMEs are stuck between two unhelpful options.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-body text-ink-500">
              <p>
                On one side: a small accounting service that books transactions
                cheaply but leaves the owner alone with VAT, Corporate Tax,
                cash flow, and reporting questions. On the other side: a large
                firm that delivers structure but only at price points that don&apos;t
                fit a growing business.
              </p>
              <p>
                Meraki sits deliberately between the two. Structured. UAE
                focused. Accessible monthly packages. Professional review where
                accuracy matters. AI-assisted workflows for everyday capture.
                The same standard whether you subscribe at AED 499 or AED 3,500
                per month.
              </p>
              <p className="text-bronze-700 font-semibold">
                One system. One team. One standard.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="paper">
        <Container size="pro">
          <Eyebrow>Operating principles</Eyebrow>
          <h2 className="mt-4 text-display-lg text-ink-900 text-balance max-w-3xl">
            Three sentences that shape how we work.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline rounded-card overflow-hidden border border-hairline">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="bg-paper p-8">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-pill bg-ink-900 text-bronze-300 font-bold tabular-nums text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-display-sm font-bold text-ink-900">
                  {p.title}
                </p>
                <p className="mt-3 text-body-sm text-ink-500 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <Eyebrow>Where we focus</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                UAE-based. Dubai-focused. SME-shaped.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                Serving businesses across the UAE, with a strong focus on
                Dubai-based companies, entrepreneurs, SMEs, and growing
                businesses.
              </p>
            </div>
            <div className="lg:col-span-6">
              <ul className="rounded-card bg-paper border border-hairline divide-y divide-hairline">
                {[
                  {
                    h: "Mainland & free zone businesses",
                    b: "Set-up support, license coordination, and ongoing accounting under one structure.",
                  },
                  {
                    h: "Entrepreneurs and SMEs",
                    b: "Accessible monthly packages, clear onboarding, and a structured calendar — without enterprise overhead.",
                  },
                  {
                    h: "Growing businesses",
                    b: "Managed finance support when in-house finance isn't yet justified, with room to scale into more structure.",
                  },
                ].map((row) => (
                  <li key={row.h} className="flex items-start gap-4 p-6">
                    <Icon
                      name="check"
                      className="h-5 w-5 mt-0.5 text-bronze-700 shrink-0"
                    />
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

      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Eyebrow>Future ecosystem</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                A connected business support system, not a single tool.
              </h2>
              <p className="mt-5 text-lead text-ink-500">
                Public website. Marketplace. Meraki AI portal. A future Meraki
                app. The site you&apos;re reading is the first surface — over time,
                the same one-system principle will apply across web, portal,
                and mobile.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="md">
                  Speak to our team
                </Button>
                <Button href="/marketplace" variant="ghost" size="md">
                  Browse marketplace
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-2 gap-3">
                {[
                  { label: "Public website", icon: "globe" },
                  { label: "Marketplace", icon: "cart" },
                  { label: "Meraki AI portal", icon: "ai" },
                  { label: "Future Meraki app", icon: "phone" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-hairline bg-cream p-5"
                  >
                    <div className="h-10 w-10 rounded-xl bg-paper border border-hairline text-bronze-700 flex items-center justify-center">
                      <Icon
                        name={item.icon as "globe" | "cart" | "ai" | "phone"}
                        className="h-5 w-5"
                      />
                    </div>
                    <p className="mt-4 text-base font-semibold text-ink-900">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        eyebrow="Start with us"
        headline="Run your business on a structured finance and compliance system."
      />
    </>
  );
}
