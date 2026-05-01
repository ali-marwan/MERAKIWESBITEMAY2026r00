import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

interface StatTileProps {
  icon: IconName;
  label: string;
  value: string;
  delta?: string;
  tone?: "default" | "bronze" | "ink";
}

export function StatTile({
  icon,
  label,
  value,
  delta,
  tone = "default",
}: StatTileProps) {
  const tones = {
    default: "bg-paper border border-border",
    bronze: "bg-cream border border-bronze-100",
    ink: "bg-ink-900 text-paper border border-ink-700",
  };
  const labelTones = {
    default: "text-ink-500",
    bronze: "text-bronze-700",
    ink: "text-paper/60",
  };
  return (
    <div className={cn("rounded-card p-6", tones[tone])}>
      <div className="flex items-center justify-between mb-4">
        <Icon
          name={icon}
          className={cn(
            "h-5 w-5",
            tone === "ink" ? "text-bronze-300" : "text-bronze-700",
          )}
        />
        {delta && (
          <span
            className={cn(
              "rounded-pill px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
              tone === "ink"
                ? "bg-bronze-500/15 text-bronze-300"
                : "bg-bronze-50 text-bronze-700",
            )}
          >
            {delta}
          </span>
        )}
      </div>
      <p
        className={cn(
          "text-display-sm font-bold tabular-nums leading-none",
          tone === "ink" ? "text-paper" : "text-ink-900",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-eyebrow uppercase font-semibold",
          labelTones[tone],
        )}
      >
        {label}
      </p>
    </div>
  );
}
