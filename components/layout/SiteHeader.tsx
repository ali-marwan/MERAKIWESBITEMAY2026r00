"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { PRIMARY_NAV } from "@/data/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-paper/0 border-b border-transparent",
      )}
    >
      <Container size="pro">
        <div className="flex h-20 items-center justify-between gap-4 lg:gap-6">
          <Logo />
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-0.5"
          >
            {PRIMARY_NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-pill px-3 py-2 text-sm font-medium transition",
                    active
                      ? "text-ink-900 bg-cream"
                      : "text-ink-700 hover:text-ink-900 hover:bg-cream",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 -bottom-1 h-1 w-1 -translate-x-1/2 rounded-full bg-bronze-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              href="/login"
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
            >
              Marketplace Login
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Speak to Our Team
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
