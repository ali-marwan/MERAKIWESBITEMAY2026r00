import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Badge";

export function CheckoutPreview() {
  return (
    <div className="rounded-card bg-paper border border-border shadow-soft p-7 lg:p-8 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <Eyebrow>Checkout preview</Eyebrow>
        <span className="text-[10px] uppercase tracking-wider bg-cream border border-hairline rounded-pill px-2 py-0.5 text-ink-500 font-bold">
          Demo
        </span>
      </div>
      <p className="mt-4 text-display-sm font-bold text-ink-900">Order summary</p>

      <ul className="mt-5 divide-y divide-hairline border-y border-hairline font-mono text-sm">
        <Row label="Compliance Package" value="AED 999" sub="/month" />
        <Row label="VAT registration support" value="Included" tag="offer" />
        <Row label="Corporate Tax registration support" value="Included" tag="offer" />
      </ul>

      <div className="mt-5 flex items-center justify-between font-mono">
        <span className="text-sm text-ink-500">Today</span>
        <span className="text-display-sm font-bold tabular-nums text-ink-900">
          AED 999
        </span>
      </div>
      <p className="text-xs text-ink-500 mt-1.5">
        Recurring monthly · cancel any time with notice.
      </p>

      <div className="mt-7">
        <Button href="/contact?intent=subscribe" variant="primary" size="md" fullWidth>
          Proceed to checkout
        </Button>
        <p className="mt-3 text-[11px] text-ink-300 leading-relaxed">
          Stripe checkout will be available soon. Until then, our team confirms
          your subscription and onboarding documents directly.
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  sub,
  tag,
}: {
  label: string;
  value: string;
  sub?: string;
  tag?: string;
}) {
  return (
    <li className="flex items-start justify-between gap-4 py-3">
      <div>
        <p className="text-ink-700">{label}</p>
        {tag && (
          <span className="inline-block mt-1 text-[10px] uppercase tracking-wider bg-bronze-50 text-bronze-700 px-1.5 py-0.5 rounded font-bold">
            {tag}
          </span>
        )}
      </div>
      <p className="text-right text-ink-900 font-semibold tabular-nums">
        {value}
        {sub && <span className="text-xs text-ink-500 ml-1">{sub}</span>}
      </p>
    </li>
  );
}
