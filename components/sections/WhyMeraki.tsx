import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon, type IconName } from "@/components/ui/Icon";

const REASONS: Array<{ title: string; body: string; icon: IconName }> = [
  {
    title: "One system",
    body: "Setup, records, compliance, reports, and AI-assisted workflows — all under one connected operating model.",
    icon: "layers",
  },
  {
    title: "One professional team",
    body: "A single team that knows your file, not three disconnected providers passing work between each other.",
    icon: "user",
  },
  {
    title: "Accessible monthly packages",
    body: "Subscriptions starting from AED 499/month — enterprise-level structure without enterprise overhead.",
    icon: "briefcase",
  },
  {
    title: "UAE-focused",
    body: "Built around UAE business realities — VAT, Corporate Tax, FTA portal, mainland and free zone setup.",
    icon: "globe",
  },
  {
    title: "AI-assisted workflows",
    body: "Documents captured, classified, and risk-checked. AI checks. Meraki verifies. Records stay ready.",
    icon: "ai",
  },
  {
    title: "Marketplace-style access",
    body: "Browse, subscribe, request — packages and one-time services in a single ecommerce-style experience.",
    icon: "cart",
  },
  {
    title: "Professional review where it matters",
    body: "AI handles the high-volume work. Our team handles the judgment calls — VAT, tax, classification, edge cases.",
    icon: "shield",
  },
  {
    title: "Built for SMEs and growing businesses",
    body: "Structured for the realities of UAE SMEs — and the moments they need to look bigger and more organized.",
    icon: "chart",
  },
];

export function WhyMeraki() {
  return (
    <Section bg="paper" tone="default">
      <Container size="pro">
        <div className="max-w-2xl mb-14">
          <Eyebrow>Why Meraki</Eyebrow>
          <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
            Premium structure. Accessible price. UAE-specific.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-card overflow-hidden border border-hairline">
          {REASONS.map((reason) => (
            <div key={reason.title} className="bg-paper p-7">
              <div className="h-10 w-10 rounded-xl bg-bronze-50 border border-bronze-100 text-bronze-700 flex items-center justify-center">
                <Icon name={reason.icon} className="h-5 w-5" />
              </div>
              <p className="mt-5 text-base font-semibold text-ink-900">
                {reason.title}
              </p>
              <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
