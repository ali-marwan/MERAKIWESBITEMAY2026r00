import { Eyebrow } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { Icon } from "@/components/ui/Icon";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portal · Reports",
  description: "Monthly summaries, compliance summaries, and management reports (preview).",
  path: "/portal/reports",
  noIndex: true,
});

const REPORTS = [
  {
    name: "Monthly summary — March 2026",
    type: "Monthly summary",
    date: "31 Mar 2026",
    status: "Available",
  },
  {
    name: "VAT Q1 — readiness summary",
    type: "Compliance summary",
    date: "28 Mar 2026",
    status: "Available",
  },
  {
    name: "Cash flow — 13-week view",
    type: "Management report",
    date: "12 Mar 2026",
    status: "Available",
  },
  {
    name: "Monthly summary — February 2026",
    type: "Monthly summary",
    date: "28 Feb 2026",
    status: "Available",
  },
  {
    name: "Corporate Tax — readiness review",
    type: "Compliance summary",
    date: "20 Feb 2026",
    status: "Archived",
  },
];

export default function PortalReportsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <Eyebrow>Portal · Reports</Eyebrow>
          <h1 className="mt-2 text-display-lg text-ink-900">
            Reports & summaries.
          </h1>
          <p className="mt-2 text-body text-ink-500 max-w-2xl">
            Monthly summaries, compliance summaries, and management reports
            prepared by Meraki for your business.
          </p>
        </div>
        <Pill tone="bronze">Preview · Demo data</Pill>
      </div>

      <div className="rounded-card bg-paper border border-border overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-cream">
            <tr>
              <th className="px-5 py-3 text-eyebrow uppercase text-ink-500">
                Report
              </th>
              <th className="px-5 py-3 text-eyebrow uppercase text-ink-500 hidden md:table-cell">
                Type
              </th>
              <th className="px-5 py-3 text-eyebrow uppercase text-ink-500 hidden sm:table-cell">
                Date
              </th>
              <th className="px-5 py-3 text-eyebrow uppercase text-ink-500 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline">
            {REPORTS.map((r) => (
              <tr key={r.name} className="hover:bg-cream/50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-xl bg-cream border border-hairline flex items-center justify-center text-bronze-700 shrink-0">
                      <Icon name="doc" className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-ink-900">
                      {r.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-ink-500 hidden md:table-cell">
                  {r.type}
                </td>
                <td className="px-5 py-4 text-sm text-ink-500 hidden sm:table-cell">
                  {r.date}
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-700 hover:text-bronze-600"
                  >
                    View
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-ink-500">
        TODO: Render real generated PDFs and connect to Meraki monthly reporting
        backend.
      </p>
    </div>
  );
}
