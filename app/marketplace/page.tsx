import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MarketplaceFilteredGrid } from "@/components/marketplace/FilterBar";
import { CheckoutPreview } from "@/components/marketplace/CheckoutPreview";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CUSTOM_QUOTE_ITEM } from "@/data/marketplace";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketplace",
  description:
    "Browse Meraki packages and one-time services. Subscribe to monthly accounting, request VAT or e-invoicing readiness reviews, or build a custom plan with our team.",
  path: "/marketplace",
});

export default function MarketplacePage() {
  return (
    <>
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <Pill tone="bronze">Marketplace</Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                Browse packages, services, and AI plans.
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Subscribe monthly. Add one-time services. Bundle Meraki AI.
                Every item below is delivered under one standard, by one
                professional team.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ul className="grid grid-cols-2 gap-3 text-sm">
                <Stat label="Packages" value="14+" />
                <Stat label="Categories" value="5" />
                <Stat label="Currency" value="AED" />
                <Stat label="Locale" value="UAE" />
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream" tone="tight">
        <Container size="pro">
          <MarketplaceFilteredGrid />
        </Container>
      </Section>

      <Section bg="paper">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Custom solutions</Eyebrow>
              <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
                {CUSTOM_QUOTE_ITEM.title}
              </h2>
              <p className="mt-5 text-lead text-ink-500 max-w-2xl">
                {CUSTOM_QUOTE_ITEM.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  href={CUSTOM_QUOTE_ITEM.primaryCta.href}
                  variant="primary"
                  size="md"
                >
                  {CUSTOM_QUOTE_ITEM.primaryCta.label}
                </Button>
                <Button
                  href={CUSTOM_QUOTE_ITEM.secondaryCta.href}
                  variant="ghost"
                  size="md"
                  iconLeft={<Icon name="whatsapp" className="h-4 w-4" />}
                >
                  {CUSTOM_QUOTE_ITEM.secondaryCta.label}
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <CheckoutPreview />
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        primaryCta={{ label: "Browse Packages", href: "/packages" }}
        secondaryCta={{ label: "Explore Meraki AI", href: "/meraki-ai" }}
        tertiaryCta={{ label: "Speak to Our Team", href: "/contact" }}
      />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <li className="rounded-2xl border border-hairline bg-cream px-4 py-3">
      <p className="text-display-sm font-bold text-ink-900 tabular-nums leading-none">
        {value}
      </p>
      <p className="mt-2 text-eyebrow uppercase text-ink-500 font-semibold">
        {label}
      </p>
    </li>
  );
}
