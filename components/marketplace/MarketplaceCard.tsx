import { Button } from "@/components/ui/Button";
import { Badge, Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { cn, formatAED } from "@/lib/utils";
import type { Package } from "@/lib/types";

interface MarketplaceCardProps {
  item: Package;
  className?: string;
}

export function MarketplaceCard({ item, className }: MarketplaceCardProps) {
  const featured = !!item.popular;
  const billingLabel =
    item.billing === "monthly"
      ? "/ month"
      : item.billing === "annual"
        ? "/ year"
        : item.billing === "per-filing"
          ? "/ filing"
          : item.billing === "custom"
            ? ""
            : "one-time";
  return (
    <article
      id={item.slug}
      className={cn(
        "flex flex-col rounded-card transition",
        featured
          ? "border-2 border-bronze-500 bg-cream shadow-bronze"
          : "border border-border bg-paper hover:shadow-lift",
        "p-7 lg:p-8",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          {item.badge && (
            <Badge
              variant={featured ? "bronze" : "outline"}
              className="mb-4"
            >
              {item.badge}
            </Badge>
          )}
          <h3 className="text-display-sm text-ink-900 font-bold">
            {item.name}
          </h3>
          <p className="mt-2 text-body-sm text-ink-500 leading-relaxed">
            {item.bestFor}
          </p>
        </div>
      </div>

      <hr className="my-6 border-hairline" />

      <div>
        {item.priceAED !== null ? (
          <p className="font-display tabular-nums text-display-sm text-ink-900">
            {formatAED(item.priceAED)}
            {billingLabel && (
              <span className="text-sm text-ink-500 font-medium ml-1.5">
                {billingLabel}
              </span>
            )}
          </p>
        ) : (
          <p className="font-display text-display-sm text-ink-900">
            {item.priceLabel}
          </p>
        )}
        <p className="text-xs text-ink-300 font-semibold uppercase tracking-wider mt-1">
          {item.priceLabel.toLowerCase().includes("starting")
            ? "Starting from"
            : item.billing === "one-time"
              ? "One-time service"
              : item.billing === "custom"
                ? "Custom quote"
                : "Subscription"}
        </p>
      </div>

      <div className="mt-6 space-y-4 grow">
        <div>
          <Eyebrow>Included</Eyebrow>
          <ul className="mt-2.5 space-y-2">
            {item.includes.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-sm text-ink-700"
              >
                <Icon
                  name="check"
                  className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        {item.notIncluded && item.notIncluded.length > 0 && (
          <div>
            <Eyebrow className="text-ink-500">Not included</Eyebrow>
            <ul className="mt-2.5 space-y-2">
              {item.notIncluded.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-sm text-ink-500"
                >
                  <Icon
                    name="dash"
                    className="h-4 w-4 mt-0.5 text-ink-300 shrink-0"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-2">
        <Button
          href={item.primaryCta.href}
          variant={featured ? "primary" : "secondary"}
          size="md"
          fullWidth
        >
          {item.primaryCta.label}
        </Button>
        {item.secondaryCta && (
          <Button
            href={item.secondaryCta.href}
            variant="ghost"
            size="sm"
            fullWidth
          >
            {item.secondaryCta.label}
          </Button>
        )}
      </div>
    </article>
  );
}
