import { Eyebrow } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { StatTile } from "@/components/portal/StatTile";
import { Icon } from "@/components/ui/Icon";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portal · Dashboard",
  description: "Meraki client portal dashboard preview.",
  path: "/portal/dashboard",
  noIndex: true,
});

export default function PortalDashboardPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <Eyebrow>Portal · Dashboard</Eyebrow>
          <h1 className="mt-2 text-display-lg text-ink-900">
            Welcome back, Sample LLC.
          </h1>
          <p className="mt-2 text-body text-ink-500 max-w-2xl">
            Snapshot of your records, compliance, and AI workflow status.
          </p>
        </div>
        <Pill tone="bronze" dot>
          Preview · Demo data
        </Pill>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatTile
          icon="doc"
          label="Documents this month"
          value="142"
          delta="+18"
        />
        <StatTile icon="eye" label="Pending review" value="6" delta="-2" />
        <StatTile
          icon="shield"
          label="VAT exposure"
          value="Ready"
          tone="bronze"
        />
        <StatTile
          icon="chart"
          label="Cash on hand"
          value="AED 482k"
          delta="+11%"
          tone="ink"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 rounded-card bg-paper border border-border p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-base font-semibold text-ink-900">
              Recent uploads
            </p>
            <span className="text-eyebrow uppercase text-ink-500">
              Last 7 days
            </span>
          </div>
          <ul className="divide-y divide-hairline">
            <UploadRow file="invoice-march-2841.pdf" status="ready" />
            <UploadRow file="receipt-supplies.jpg" status="ready" />
            <UploadRow file="bank-statement-feb.csv" status="processing" />
            <UploadRow file="utility-march.pdf" status="ready" />
          </ul>
        </section>

        <aside className="rounded-card bg-paper border border-border p-6">
          <p className="text-base font-semibold text-ink-900">
            Compliance calendar
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Icon name="calendar" className="h-4 w-4 text-bronze-700" />
              <div className="min-w-0">
                <p className="text-ink-900 font-semibold">VAT Q1 filing</p>
                <p className="text-xs text-ink-500">Due 28 Jul · in 14 days</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="calendar" className="h-4 w-4 text-bronze-700" />
              <div className="min-w-0">
                <p className="text-ink-900 font-semibold">CT registration</p>
                <p className="text-xs text-ink-500">Documents in review</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="calendar" className="h-4 w-4 text-bronze-700" />
              <div className="min-w-0">
                <p className="text-ink-900 font-semibold">Trade license</p>
                <p className="text-xs text-ink-500">Renews 12 Sep</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>

      <p className="mt-8 text-xs text-ink-500 leading-relaxed max-w-3xl">
        Preview only. Stats and uploads above use sample data so you can see
        how the workspace will feel. Live authentication, secure document
        storage, and Meraki AI review will activate when the portal is
        released to clients.
      </p>
    </div>
  );
}

function UploadRow({
  file,
  status,
}: {
  file: string;
  status: "ready" | "processing";
}) {
  return (
    <li className="flex items-center gap-4 py-3">
      <span className="h-9 w-9 rounded-xl bg-cream border border-hairline flex items-center justify-center shrink-0 text-bronze-700">
        <Icon name="doc" className="h-4 w-4" />
      </span>
      <p className="text-sm font-semibold text-ink-900 flex-1 truncate">
        {file}
      </p>
      <span
        className={
          status === "ready"
            ? "text-[10px] font-bold uppercase tracking-wider rounded-pill px-2 py-1 bg-success/10 text-success border border-success/20"
            : "text-[10px] font-bold uppercase tracking-wider rounded-pill px-2 py-1 bg-warning/10 text-warning border border-warning/20"
        }
      >
        {status}
      </span>
    </li>
  );
}
