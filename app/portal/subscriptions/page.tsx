import Link from "next/link";
import { Eyebrow } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portal · Subscriptions",
  description: "Manage active Meraki subscriptions (preview).",
  path: "/portal/subscriptions",
  noIndex: true,
});

const ACTIVE = [
  {
    name: "Compliance Package",
    price: "AED 999 / month",
    nextBilling: "12 May 2026",
    status: "Active",
  },
  {
    name: "Meraki AI Business",
    price: "AED 299 / month",
    nextBilling: "12 May 2026",
    status: "Active",
  },
];

export default function PortalSubscriptionsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <Eyebrow>Portal · Subscriptions</Eyebrow>
          <h1 className="mt-2 text-display-lg text-ink-900">
            Active subscriptions.
          </h1>
          <p className="mt-2 text-body text-ink-500 max-w-2xl">
            Subscriptions tied to your Meraki account. Manage upgrades, pauses,
            and add-ons here once Stripe is live.
          </p>
        </div>
        <Pill tone="bronze">Preview · Demo data</Pill>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {ACTIVE.map((sub) => (
          <div
            key={sub.name}
            className="rounded-card bg-paper border border-border p-7"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-display-sm font-bold text-ink-900">{sub.name}</p>
              <span className="rounded-pill bg-success/10 text-success border border-success/20 text-[10px] uppercase tracking-wider font-bold px-2 py-1">
                {sub.status}
              </span>
            </div>
            <p className="text-base text-ink-700 font-semibold">{sub.price}</p>
            <p className="text-sm text-ink-500 mt-1">
              Next billing · {sub.nextBilling}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href="/contact" variant="ghost" size="sm">
                Manage subscription
              </Button>
              <Button
                href="/marketplace"
                variant="ghost"
                size="sm"
                iconLeft={<Icon name="cart" className="h-4 w-4" />}
              >
                Add services
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-card bg-cream border border-hairline p-6">
        <p className="text-eyebrow uppercase text-ink-500">Upgrade options</p>
        <p className="mt-2 text-base font-semibold text-ink-900">
          Bundle Meraki AI + Review for monthly compliance summaries.
        </p>
        <p className="mt-2 text-body-sm text-ink-500 max-w-2xl">
          Add accountant review of flagged items, VAT/tax risk notes, and a
          monthly compliance summary on top of your current subscription.
        </p>
        <div className="mt-5">
          <Link
            href="/marketplace#ai-with-review"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bronze-700 hover:text-bronze-600"
          >
            View Meraki AI + Review
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <p className="mt-6 text-xs text-ink-500">
        TODO: Stripe — connect subscription management, invoices, and payment
        method updates.
      </p>
    </div>
  );
}
