import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { PackageCard } from "@/components/packages/PackageCard";
import {
  MONTHLY_ACCOUNTING_PACKAGES,
  MERAKI_AI_PACKAGES,
} from "@/data/packages";

export function PackagesPreview() {
  const featured = [
    ...MONTHLY_ACCOUNTING_PACKAGES,
    MERAKI_AI_PACKAGES.find((p) => p.id === "ai-business")!,
  ].slice(0, 5);

  return (
    <Section bg="cream" tone="default">
      <Container size="pro">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Eyebrow>Packages & marketplace</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Choose the level of support your business needs.
            </h2>
            <p className="mt-5 text-lead text-ink-500">
              Subscribe monthly. Add one-time services. Bundle Meraki AI. Every
              package is delivered under the same standard, by the same
              professional team.
            </p>
          </div>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bronze-700 hover:text-bronze-600"
          >
            Browse marketplace
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {featured.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} compact />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/marketplace" variant="primary" size="md">
            View Marketplace
          </Button>
          <Button href="/packages" variant="ghost" size="md">
            View Packages
          </Button>
        </div>
      </Container>
    </Section>
  );
}
