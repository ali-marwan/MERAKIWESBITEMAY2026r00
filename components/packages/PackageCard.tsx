import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { formatAED } from "@/lib/utils";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
  compact?: boolean;
  highlight?: boolean;
  className?: string;
}

export function PackageCard({
  pkg,
  compact = false,
  highlight,
  className,
}: PackageCardProps) {
  const featured = highlight ?? pkg.popular;
  return (
    <div
      id={pkg.slug}
      className={cn(
        "group relative flex flex-col rounded-card transition",
        featured
          ? "bg-paper border-2 border-bronze-500 shadow-bronze ring-1 ring-bronze-500/20"
          : "bg-paper border border-border hover:shadow-lift hover:-translate-y-0.5",
        compact ? "p-7" : "p-8 lg:p-10",
        className,
      )}
    >
      {pkg.badge && (
        <Badge variant={featured ? "bronze" : "outline"} className="self-start mb-5">
          {pkg.badge}
        </Badge>
      )}

      <p className={cn("text-display-sm font-bold text-ink-900")}>{pkg.name}</p>
      <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">
        {pkg.bestFor}
      </p>

      <hr className="my-6 border-hairline" />

      <div>
        {pkg.priceAED !== null ? (
          <p className="font-display tabular-nums text-display-sm text-ink-900">
            {formatAED(pkg.priceAED)}
            <span className="text-sm font-medium text-ink-500 ml-1">
              {pkg.billing === "monthly"
                ? "/ month"
                : pkg.billing === "annual"
                  ? "/ year"
                  : pkg.billing === "per-filing"
                    ? "/ filing"
                    : ""}
            </span>
          </p>
        ) : (
          <p className="font-display text-display-sm text-ink-900">
            {pkg.priceLabel}
          </p>
        )}
        {pkg.priceAED !== null && pkg.priceLabel.toLowerCase().includes("starting") && (
          <p className="text-xs text-ink-300 font-semibold uppercase tracking-wider mt-1">
            Starting from
          </p>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-eyebrow uppercase text-ink-500 mb-2.5">Included</p>
          <ul className="space-y-2">
            {pkg.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-ink-700"
              >
                <Icon
                  name="check"
                  className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {pkg.notIncluded && pkg.notIncluded.length > 0 && (
          <div>
            <p className="text-eyebrow uppercase text-ink-500 mb-2.5">
              Not included
            </p>
            <ul className="space-y-2">
              {pkg.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-500"
                >
                  <Icon
                    name="dash"
                    className="h-4 w-4 mt-0.5 text-ink-300 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {pkg.registrationOfferEligible && (
        <div className="mt-5 rounded-xl bg-bronze-50 border border-bronze-100 px-3.5 py-2.5 text-xs text-bronze-700 font-semibold flex items-start gap-2">
          <Icon name="spark" className="h-4 w-4 mt-0.5 shrink-0" />
          <span>
            Includes VAT &amp; Corporate Tax registration support · Terms apply.
          </span>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-2">
        <Button
          href={pkg.primaryCta.href}
          variant={featured ? "primary" : "secondary"}
          size="md"
          fullWidth
        >
          {pkg.primaryCta.label}
        </Button>
        {pkg.secondaryCta && (
          <Button
            href={pkg.secondaryCta.href}
            variant="ghost"
            size="sm"
            fullWidth
          >
            {pkg.secondaryCta.label}
          </Button>
        )}
      </div>
    </div>
  );
}
