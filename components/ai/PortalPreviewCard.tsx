import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function PortalPreviewCard({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 bg-bronze-radial blur-2xl opacity-70 pointer-events-none" />
      <div className="relative rounded-card bg-paper border border-border shadow-lift overflow-hidden -rotate-1">
        <div className="border-b border-hairline px-5 py-3 bg-ink-900 text-paper flex items-center justify-between">
          <span className="text-xs font-semibold">Meraki Portal · Preview</span>
          <span className="text-[10px] uppercase tracking-wider text-bronze-300">
            Demo data
          </span>
        </div>
        <div className="p-5 grid grid-cols-2 gap-3">
          <Tile label="Documents this month" value="142" trend="+18" icon="doc" />
          <Tile label="Pending review" value="6" trend="-2" icon="eye" />
          <Tile label="VAT exposure" value="Ready" trend="" icon="shield" tone="success" />
          <Tile label="Cash on hand" value="AED 482k" trend="+11%" icon="chart" />
        </div>
        <div className="px-5 pb-5">
          <div className="rounded-2xl bg-cream border border-hairline p-4">
            <p className="text-[10px] uppercase tracking-wider text-ink-300 font-bold mb-2">
              Subscription
            </p>
            <p className="text-sm font-semibold text-ink-900">
              Compliance Package · Active
            </p>
            <p className="text-xs text-ink-500 mt-1">
              Next billing AED 999 · 12 May 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tile({
  label,
  value,
  trend,
  icon,
  tone = "default",
}: {
  label: string;
  value: string;
  trend: string;
  icon: "doc" | "eye" | "shield" | "chart";
  tone?: "default" | "success";
}) {
  return (
    <div className="rounded-2xl border border-hairline p-3.5">
      <div className="flex items-center justify-between mb-2">
        <Icon name={icon} className="h-4 w-4 text-bronze-700" />
        {trend && (
          <span
            className={cn(
              "text-[10px] font-semibold rounded-pill px-1.5 py-0.5",
              tone === "success"
                ? "bg-success/10 text-success"
                : "bg-bronze-50 text-bronze-700",
            )}
          >
            {trend}
          </span>
        )}
      </div>
      <p className="text-display-sm tabular-nums text-ink-900 font-bold leading-none">
        {value}
      </p>
      <p className="text-[10px] uppercase tracking-wider text-ink-500 font-semibold mt-1.5">
        {label}
      </p>
    </div>
  );
}
