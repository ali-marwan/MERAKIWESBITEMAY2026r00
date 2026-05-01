"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { PRIMARY_NAV } from "@/data/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-border"
          : "bg-paper/0 border-b border-transparent",
      )}
    >
      <Container size="pro">
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />
          <nav className="hidden xl:flex items-center gap-1">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-pill px-3.5 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 hover:bg-cream transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              href="/login"
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
            >
              Client Login
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
