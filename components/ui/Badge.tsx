import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "bronze" | "ink" | "cream" | "outline" | "success" | "warning";
  children: ReactNode;
}

export function Badge({
  variant = "bronze",
  className,
  children,
  ...rest
}: BadgeProps) {
  const variants = {
    bronze: "bg-bronze-50 text-bronze-700 border border-bronze-100",
    ink: "bg-ink-900 text-paper",
    cream: "bg-cream text-ink-700 border border-hairline",
    outline: "border border-ink-900/15 text-ink-700",
    success: "bg-success/10 text-success border border-success/20",
    warning: "bg-warning/10 text-warning border border-warning/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-eyebrow uppercase text-bronze-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
