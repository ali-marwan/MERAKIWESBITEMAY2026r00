"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PRIMARY_NAV, CONTACT } from "@/data/nav";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-pill border border-ink-900/15 text-ink-900 hover:bg-cream"
      >
        <Icon name="menu" className="h-5 w-5" />
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-50 xl:hidden transition-all",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-ink-900/55 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-sm bg-paper shadow-lift transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-hairline">
            <span className="text-eyebrow uppercase text-bronze-700">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-ink-900/15 text-ink-900 hover:bg-cream"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-ink-900 hover:bg-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-4 border-t border-hairline space-y-3">
            <Button href="/login" variant="ghost" size="md" fullWidth>
              Client Login
            </Button>
            <Button href="/contact" variant="primary" size="md" fullWidth>
              Speak to Our Team
            </Button>
          </div>
          <div className="px-6 pt-6 mt-6 border-t border-hairline space-y-2 pb-8 text-sm text-ink-500">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-ink-900"
            >
              <Icon name="email" className="h-4 w-4" />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.whatsappHref}
              className="flex items-center gap-2 hover:text-ink-900"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
