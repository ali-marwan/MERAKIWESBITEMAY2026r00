import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  bg?: "paper" | "cream" | "sand" | "ink";
  tone?: "default" | "hero" | "tight" | "footer-pre";
}

export function Section({
  bg = "paper",
  tone = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  const bgClass =
    bg === "paper"
      ? "bg-paper text-ink-700"
      : bg === "cream"
        ? "bg-cream text-ink-700"
        : bg === "sand"
          ? "bg-sand text-ink-700"
          : "bg-ink-900 text-ink-100";
  const toneClass =
    tone === "hero"
      ? "min-h-[calc(100vh-80px)] flex items-center"
      : tone === "tight"
        ? "py-8 md:py-10"
        : tone === "footer-pre"
          ? "py-12 md:py-14"
          : "py-12 md:py-16";
  return (
    <section
      className={cn("relative w-full overflow-hidden", bgClass, toneClass, className)}
      {...rest}
    >
      {children}
    </section>
  );
}
