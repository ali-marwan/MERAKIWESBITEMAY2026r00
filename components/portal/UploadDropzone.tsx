"use client";

import { useState, type DragEvent, type ChangeEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface UploadedFile {
  name: string;
  size: number;
  status: "queued" | "processing" | "ready";
}

export function UploadDropzone() {
  const [files, setFiles] = useState<UploadedFile[]>([
    { name: "invoice-march-2841.pdf", size: 2_100_000, status: "ready" },
    { name: "receipt-supplies.jpg", size: 640_000, status: "ready" },
    { name: "bank-statement-feb.csv", size: 14_000, status: "processing" },
  ]);
  const [hover, setHover] = useState(false);

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    setHover(true);
  };
  const onDragLeave = () => setHover(false);
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setHover(false);
    addFiles(e.dataTransfer.files);
  };
  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
  };
  const addFiles = (list: FileList) => {
    // TODO: real upload — wire to Meraki AI ingestion endpoint when backend is ready.
    const incoming: UploadedFile[] = Array.from(list).map((f) => ({
      name: f.name,
      size: f.size,
      status: "queued",
    }));
    setFiles((prev) => [...incoming, ...prev]);
  };

  return (
    <div className="space-y-5">
      <label
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={cn(
          "block rounded-card border-2 border-dashed p-10 text-center cursor-pointer transition",
          hover
            ? "border-bronze-500 bg-bronze-50"
            : "border-bronze-300 bg-cream hover:border-bronze-500",
        )}
      >
        <input
          type="file"
          multiple
          className="sr-only"
          onChange={onSelect}
          accept=".pdf,.jpg,.jpeg,.png,.csv,.xlsx,.xls"
        />
        <div className="mx-auto h-12 w-12 rounded-full bg-paper border border-bronze-300 flex items-center justify-center text-bronze-700">
          <Icon name="upload" className="h-5 w-5" />
        </div>
        <p className="mt-4 text-base font-semibold text-ink-900">
          Drop invoices, receipts, or statements
        </p>
        <p className="mt-1 text-sm text-ink-500">
          PDF, image, CSV, XLSX. AI capture will run after upload.
        </p>
        <p className="mt-3 text-[11px] text-ink-300">
          Preview only — files are not stored. Production upload arrives in v1.
        </p>
      </label>

      <div className="rounded-card border border-border bg-paper">
        <div className="px-5 py-3 border-b border-hairline flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-900">Recent uploads</p>
          <span className="text-eyebrow uppercase text-ink-500">
            {files.length} files
          </span>
        </div>
        <ul className="divide-y divide-hairline">
          {files.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              className="flex items-center gap-4 px-5 py-3"
            >
              <span className="h-9 w-9 rounded-xl bg-cream border border-hairline flex items-center justify-center shrink-0 text-bronze-700">
                <Icon name="doc" className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink-900 truncate">
                  {f.name}
                </p>
                <p className="text-xs text-ink-500">{formatBytes(f.size)}</p>
              </div>
              <StatusPill status={f.status} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: UploadedFile["status"] }) {
  const map = {
    queued:
      "bg-ink-100 text-ink-500",
    processing:
      "bg-warning/10 text-warning border border-warning/20",
    ready: "bg-success/10 text-success border border-success/20",
  };
  return (
    <span
      className={cn(
        "shrink-0 inline-flex items-center text-[10px] font-bold uppercase tracking-wider rounded-pill px-2 py-1",
        map[status],
      )}
    >
      {status}
    </span>
  );
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
