import { cn } from "@/lib/utils";

interface ProcessStepProps {
  index: number;
  title: string;
  body: string;
  variant?: "light" | "dark";
  className?: string;
}

export function ProcessStep({
  index,
  title,
  body,
  variant = "light",
  className,
}: ProcessStepProps) {
  const isDark = variant === "dark";
  return (
    <div className={cn("flex gap-5", className)}>
      <div className="flex flex-col items-center shrink-0">
        <span
          className={cn(
            "h-12 w-12 rounded-pill flex items-center justify-center font-bold tabular-nums text-sm",
            isDark
              ? "bg-paper/10 border border-paper/20 text-bronze-300"
              : "bg-ink-900 text-bronze-300",
          )}
        >
          {String(index).padStart(2, "0")}
        </span>
        <span
          className={cn(
            "w-px flex-1 mt-2",
            isDark ? "bg-paper/15" : "bg-hairline",
          )}
        />
      </div>
      <div className="pb-10">
        <p
          className={cn(
            "text-base font-semibold",
            isDark ? "text-paper" : "text-ink-900",
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "mt-2 text-body-sm leading-relaxed",
            isDark ? "text-ink-300" : "text-ink-500",
          )}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
