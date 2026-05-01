import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export function AIWorkflowMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute -inset-12 bg-bronze-radial rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stage
          step="01"
          title="Upload"
          subtitle="Document captured"
          icon="upload"
        >
          <div className="rounded-xl border border-dashed border-bronze-300 bg-bronze-50/40 p-3 space-y-2">
            <Row label="invoice-2841.pdf" meta="2.1 MB" status="done" />
            <Row label="receipt-march.jpg" meta="640 KB" status="done" />
            <Row label="bank-statement.csv" meta="14 KB" status="processing" />
          </div>
        </Stage>

        <Connector />

        <Stage
          step="02"
          title="OCR + Check"
          subtitle="Fields extracted"
          icon="ai"
        >
          <div className="rounded-xl bg-cream border border-hairline p-3 text-xs text-ink-700 space-y-2">
            <ExtractRow label="Supplier" value="Al Noor LLC" verified />
            <ExtractRow label="TRN" value="100214380400003" verified />
            <ExtractRow label="VAT" value="AED 152.50" />
            <ExtractRow label="Date" value="08-Mar-2026" verified />
            <ExtractRow label="Total" value="AED 3,202.50" />
            <div className="mt-2 pt-2 border-t border-hairline flex items-center gap-1.5 text-[10px] text-warning font-semibold">
              <Icon name="spark" className="h-3 w-3" />
              Missing tax invoice number — flagged
            </div>
          </div>
        </Stage>

        <Connector />

        <Stage
          step="03"
          title="Review"
          subtitle="Meraki verifies"
          icon="check"
        >
          <div className="rounded-xl bg-paper border border-hairline overflow-hidden">
            <div className="px-3 py-2 bg-ink-900 text-paper text-[10px] font-bold uppercase tracking-wider">
              Review queue · 3
            </div>
            <ul className="divide-y divide-hairline">
              <ReviewRow initials="SA" item="Invoice review" status="In review" />
              <ReviewRow initials="MK" item="VAT classification" status="Approved" />
              <ReviewRow initials="HM" item="Cash-out match" status="Pending" />
            </ul>
          </div>
        </Stage>
      </div>
    </div>
  );
}

function Stage({
  step,
  title,
  subtitle,
  icon,
  children,
}: {
  step: string;
  title: string;
  subtitle: string;
  icon: "upload" | "ai" | "check";
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card bg-paper border border-border shadow-soft p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-ink-300 font-bold">
            Step {step}
          </p>
          <p className="text-base font-semibold text-ink-900 mt-0.5">{title}</p>
          <p className="text-xs text-ink-500">{subtitle}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-cream border border-hairline flex items-center justify-center text-bronze-700 shrink-0">
          <Icon name={icon} className="h-5 w-5" />
        </div>
      </div>
      {children}
    </div>
  );
}

function Connector() {
  return (
    <div className="hidden md:flex absolute inset-y-0 items-center justify-center pointer-events-none">
      <svg className="h-6 w-12 text-bronze-300" viewBox="0 0 48 24">
        <path
          d="M2 12h44m0 0-6-5m6 5-6 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

function Row({
  label,
  meta,
  status,
}: {
  label: string;
  meta: string;
  status: "done" | "processing";
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-paper border border-hairline px-2.5 py-2">
      <Icon
        name="doc"
        className="h-3.5 w-3.5 text-bronze-700 shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-ink-900 truncate">
          {label}
        </p>
        <p className="text-[10px] text-ink-500">{meta}</p>
      </div>
      <span
        className={cn(
          "text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-pill",
          status === "done"
            ? "bg-success/10 text-success"
            : "bg-warning/10 text-warning",
        )}
      >
        {status}
      </span>
    </div>
  );
}

function ExtractRow({
  label,
  value,
  verified,
}: {
  label: string;
  value: string;
  verified?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-[11px]">
      <span className="text-ink-500">{label}</span>
      <span
        className={cn(
          "tabular-nums",
          verified
            ? "text-ink-900 underline decoration-bronze-500 decoration-2 underline-offset-2 font-semibold"
            : "text-ink-700",
        )}
      >
        {value}
      </span>
    </div>
  );
}

function ReviewRow({
  initials,
  item,
  status,
}: {
  initials: string;
  item: string;
  status: string;
}) {
  return (
    <li className="flex items-center gap-2.5 px-3 py-2">
      <span className="h-7 w-7 rounded-full bg-bronze-50 text-bronze-700 text-[10px] font-bold flex items-center justify-center border border-bronze-200">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-ink-900 truncate">{item}</p>
        <p className="text-[10px] text-ink-500">{status}</p>
      </div>
    </li>
  );
}
