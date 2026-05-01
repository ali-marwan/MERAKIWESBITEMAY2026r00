import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute -inset-8 bg-bronze-radial rounded-full blur-2xl opacity-70 pointer-events-none" />
      <div className="relative rounded-card bg-paper border border-border shadow-lift overflow-hidden">
        <div className="flex items-center justify-between border-b border-hairline px-5 py-3 bg-cream">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-100" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-100" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-100" />
          </div>
          <div className="flex items-center gap-2 text-xs text-ink-500">
            <span className="font-mono tabular-nums">meraki / dashboard</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Compliance overview</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-bronze-50 text-bronze-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
            Live
          </span>
        </div>

        <div className="p-5 sm:p-7 space-y-6">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <KpiTile label="Records ready" value="98%" delta="+2.4" tint="bronze" />
            <KpiTile label="Filing days" value="14" delta="-3" tint="ink" />
            <KpiTile label="Cash position" value="AED 482k" delta="+11" tint="success" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3 rounded-2xl border border-hairline p-4 bg-paper">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-ink-700">
                  Cash flow · last 6 months
                </p>
                <span className="text-[10px] uppercase tracking-wider text-ink-300">
                  AED
                </span>
              </div>
              <BronzeChart />
            </div>

            <div className="lg:col-span-2 rounded-2xl border border-hairline bg-paper">
              <div className="px-4 pt-3 pb-2 border-b border-hairline">
                <p className="text-xs font-semibold text-ink-700">Compliance queue</p>
              </div>
              <ul className="divide-y divide-hairline">
                <QueueRow label="VAT return Q1" status="filed" />
                <QueueRow label="CT registration" status="review" />
                <QueueRow label="Supplier review" status="draft" />
                <QueueRow label="Payroll close" status="filed" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -left-6 top-32 -rotate-2 rounded-2xl bg-paper shadow-lift border border-border p-4 max-w-[260px]">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
            <Icon name="check" className="h-4 w-4 text-success" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">VAT return ready</p>
            <p className="text-xs text-ink-500 mt-0.5">
              Reviewed by Meraki — awaiting client approval.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-4 bottom-12 rotate-2 rounded-2xl bg-ink-900 text-paper shadow-ink-pop p-4 max-w-[240px]">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-xl bg-bronze-500/15 flex items-center justify-center shrink-0">
            <Icon name="ai" className="h-4 w-4 text-bronze-300" />
          </div>
          <div>
            <p className="text-sm font-semibold">Meraki AI</p>
            <p className="text-xs text-ink-300 mt-0.5">
              3 invoices flagged for review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiTile({
  label,
  value,
  delta,
  tint,
}: {
  label: string;
  value: string;
  delta: string;
  tint: "bronze" | "ink" | "success";
}) {
  const tints = {
    bronze: "bg-bronze-50 text-bronze-700 border border-bronze-100",
    ink: "bg-ink-900 text-paper",
    success: "bg-success/10 text-success border border-success/20",
  };
  return (
    <div className="rounded-2xl border border-hairline p-3.5 bg-paper">
      <p className="text-[10px] uppercase tracking-wider text-ink-500 font-semibold">
        {label}
      </p>
      <p className="mt-1.5 text-display-sm tabular-nums text-ink-900 font-bold leading-none">
        {value}
      </p>
      <span
        className={cn(
          "mt-2 inline-flex items-center text-[10px] font-bold uppercase rounded-pill px-1.5 py-0.5",
          tints[tint],
        )}
      >
        {delta}%
      </span>
    </div>
  );
}

function QueueRow({
  label,
  status,
}: {
  label: string;
  status: "filed" | "review" | "draft";
}) {
  const styles = {
    filed: "bg-success/10 text-success border-success/20",
    review: "bg-warning/10 text-warning border-warning/20",
    draft: "bg-ink-100 text-ink-500 border-ink-100",
  };
  return (
    <li className="flex items-center justify-between gap-3 px-4 py-2.5">
      <span className="text-sm text-ink-700 truncate">{label}</span>
      <span
        className={cn(
          "shrink-0 inline-flex items-center text-[10px] font-bold uppercase tracking-wider rounded-pill px-2 py-0.5 border",
          styles[status],
        )}
      >
        {status}
      </span>
    </li>
  );
}

function BronzeChart() {
  return (
    <svg viewBox="0 0 320 110" className="w-full h-28" aria-hidden="true">
      <defs>
        <linearGradient id="bronzeFade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#D97A2C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#D97A2C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bronzeLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#9A4D11" />
          <stop offset="100%" stopColor="#D97A2C" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C30,70 50,72 70,55 C95,35 120,55 145,45 C170,35 195,30 220,40 C250,55 275,30 320,18 L320,110 L0,110 Z"
        fill="url(#bronzeFade)"
      />
      <path
        d="M0,80 C30,70 50,72 70,55 C95,35 120,55 145,45 C170,35 195,30 220,40 C250,55 275,30 320,18"
        fill="none"
        stroke="url(#bronzeLine)"
        strokeWidth="2"
      />
      {[
        [0, 80],
        [70, 55],
        [145, 45],
        [220, 40],
        [320, 18],
      ].map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="3"
          fill="#FFFFFF"
          stroke="#D97A2C"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
