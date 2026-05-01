"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";

const QUICK_PROMPTS = [
  { label: "Help me choose a package", href: "/packages" },
  { label: "Explain Meraki AI", href: "/meraki-ai" },
  { label: "I need VAT support", href: "/services#comply" },
  { label: "Talk to a human", href: "/contact" },
];

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Open Meraki AI assistant"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-pill bg-ink-900 text-paper shadow-lift transition-all hover:bg-ink-800 group",
          open ? "h-12 w-12 justify-center" : "h-14 pl-4 pr-5",
        )}
      >
        {open ? (
          <Icon name="close" className="h-4 w-4" />
        ) : (
          <>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-bronze-400 opacity-70 animate-ping-slow" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-bronze-500" />
            </span>
            <span className="text-sm font-semibold">Ask Meraki AI</span>
          </>
        )}
      </button>

      <div
        aria-hidden={!open}
        className={cn(
          "fixed z-50 transition-all",
          "right-0 left-0 bottom-0 sm:bottom-24 sm:right-5 sm:left-auto",
          "sm:w-[380px] sm:h-[540px]",
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none",
        )}
      >
        <div className="h-[80vh] sm:h-full max-h-[640px] flex flex-col rounded-t-3xl sm:rounded-card bg-paper border border-border shadow-lift overflow-hidden">
          <div className="flex items-start justify-between gap-3 p-5 border-b border-hairline bg-cream">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-pill bg-ink-900 flex items-center justify-center">
                <Icon name="ai" className="h-5 w-5 text-bronze-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900 flex items-center gap-2">
                  Meraki AI Assistant
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-bronze-500 text-paper px-1.5 py-0.5 rounded">
                    Preview
                  </span>
                </p>
                <p className="text-xs text-ink-500">
                  Guided help for finance, tax & setup
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close assistant"
              onClick={() => setOpen(false)}
              className="sm:hidden inline-flex h-8 w-8 items-center justify-center rounded-pill border border-hairline"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hidden">
            <div className="rounded-2xl bg-cream border border-hairline p-4 text-sm text-ink-700">
              <p className="font-semibold text-ink-900 mb-1">
                Hello — I&apos;m the Meraki AI Assistant.
              </p>
              <p>
                I can help you find the right package, explain Meraki AI, or
                point you to the right service. What are you exploring?
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-eyebrow uppercase text-ink-500">
                Quick prompts
              </p>
              {QUICK_PROMPTS.map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-hairline bg-paper hover:border-bronze-500 hover:bg-bronze-50 px-4 py-3 text-sm font-medium text-ink-900 transition"
                >
                  <span>{q.label}</span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 text-ink-300 group-hover:text-bronze-700"
                  />
                </Link>
              ))}
            </div>

            <Pill tone="bronze" className="text-[11px]">
              AI checks. Meraki verifies.
            </Pill>
          </div>

          <div className="p-4 border-t border-hairline bg-paper">
            <div className="flex items-center gap-2 rounded-pill border border-hairline bg-cream px-4 py-2.5 text-sm text-ink-300 cursor-not-allowed">
              <Icon name="search" className="h-4 w-4" />
              <span>Live chat coming soon — pick a prompt above</span>
            </div>
            <p className="mt-2.5 text-[11px] text-ink-300 leading-relaxed">
              Preview only. Final tax, compliance, and filing decisions are
              handled by our team based on your documents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
