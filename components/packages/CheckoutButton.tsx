"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { createCheckoutSession } from "@/lib/stripe";
import type { Package } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CheckoutButtonProps {
  pkg: Package;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function CheckoutButton({
  pkg,
  variant = "primary",
  size = "md",
  fullWidth,
}: CheckoutButtonProps) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleClick = async () => {
    setBusy(true);
    setMessage(null);
    // TODO: Stripe — once /api/checkout is live, redirect to result.url instead of showing the disclaimer.
    const result = await createCheckoutSession({
      priceId: pkg.stripePriceId,
      packageSlug: pkg.slug,
    });
    setBusy(false);
    if (result.ok && result.url) {
      window.location.assign(result.url);
      return;
    }
    setMessage(result.message);
  };

  return (
    <div className="w-full">
      <Button
        onClick={handleClick}
        disabled={busy}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
      >
        {busy ? "Preparing..." : pkg.primaryCta.label}
      </Button>
      {message && (
        <p
          className={cn(
            "mt-3 flex items-start gap-2 rounded-xl bg-cream border border-hairline px-3.5 py-2.5 text-xs text-ink-700",
          )}
        >
          <Icon
            name="spark"
            className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
          />
          <span>
            {message}{" "}
            <a
              href="/contact"
              className="text-bronze-700 font-semibold hover:underline"
            >
              Speak to our team
            </a>
            .
          </span>
        </p>
      )}
    </div>
  );
}
