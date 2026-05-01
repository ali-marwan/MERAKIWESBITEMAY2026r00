import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { Package } from "@/lib/types";

interface PackageComparisonProps {
  packages: Package[];
  rows: { label: string; values: (string | boolean)[] }[];
}

export function PackageComparison({ packages, rows }: PackageComparisonProps) {
  return (
    <div className="overflow-x-auto rounded-card border border-border bg-paper shadow-soft">
      <table className="min-w-full text-left">
        <thead>
          <tr className="bg-cream">
            <th className="sticky left-0 z-10 bg-cream px-5 py-4 text-eyebrow uppercase text-ink-500 min-w-[220px]">
              Feature
            </th>
            {packages.map((pkg) => (
              <th
                key={pkg.id}
                className="px-5 py-4 text-sm font-bold text-ink-900 min-w-[180px]"
              >
                <div>
                  <p className="text-base">{pkg.name}</p>
                  <p className="text-xs text-ink-500 font-medium mt-0.5">
                    {pkg.priceLabel}
                  </p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={cn(
                "border-t border-hairline",
                i % 2 === 1 ? "bg-cream/40" : "bg-paper",
              )}
            >
              <th
                scope="row"
                className={cn(
                  "sticky left-0 z-10 px-5 py-4 text-sm text-ink-700 font-semibold",
                  i % 2 === 1 ? "bg-cream/95" : "bg-paper",
                )}
              >
                {row.label}
              </th>
              {row.values.map((value, idx) => (
                <td
                  key={`${row.label}-${idx}`}
                  className="px-5 py-4 text-sm text-ink-700"
                >
                  {typeof value === "boolean" ? (
                    value ? (
                      <Icon
                        name="check"
                        className="h-5 w-5 text-bronze-700"
                      />
                    ) : (
                      <Icon name="dash" className="h-5 w-5 text-ink-300" />
                    )
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
