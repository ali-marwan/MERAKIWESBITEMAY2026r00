import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "bronze" | "ink";
  dot?: boolean;
}

export function Pill({
  children,
  className,
  tone = "default",
  dot = false,
}: PillProps) {
  const tones = {
    default: "bg-paper border border-hairline text-ink-700",
    bronze: "bg-bronze-50 border border-bronze-100 text-bronze-700",
    ink: "bg-ink-900 text-paper",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill px-4 py-1.5 text-sm font-medium",
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-bronze-500 opacity-60 animate-ping-slow" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-bronze-500" />
        </span>
      )}
      {children}
    </span>
  );
}
