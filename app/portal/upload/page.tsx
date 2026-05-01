import { Eyebrow } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { UploadDropzone } from "@/components/portal/UploadDropzone";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portal · Upload",
  description: "Upload invoices, receipts, and statements to Meraki AI (preview).",
  path: "/portal/upload",
  noIndex: true,
});

export default function PortalUploadPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <Eyebrow>Portal · Upload</Eyebrow>
          <h1 className="mt-2 text-display-lg text-ink-900">
            Upload documents.
          </h1>
          <p className="mt-2 text-body text-ink-500 max-w-2xl">
            Drop invoices, receipts, statements, or contracts. Meraki AI will
            extract fields and route to review. Preview only — files are not
            persisted.
          </p>
        </div>
        <Pill tone="bronze" dot>
          AI capture preview
        </Pill>
      </div>
      <UploadDropzone />
      <p className="mt-8 text-xs text-ink-500 leading-relaxed max-w-3xl">
        Preview only. Files selected here are not transmitted or stored.
        Document ingestion, the Meraki AI capture pipeline, and the accountant
        review queue will activate when the portal is released to clients.
      </p>
    </div>
  );
}
