"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/layout/Logo";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Auth — once authentication is wired (Auth.js, Clerk, or custom),
    // POST email/password to the auth endpoint and route into /portal/dashboard.
    // For now, route to /contact with the email pre-filled so the team can
    // confirm portal access manually.
    setSubmitted(true);
    setTimeout(() => {
      const params = new URLSearchParams({
        intent: "portal-access",
        ...(email ? { email } : {}),
      });
      window.location.assign(`/contact?${params.toString()}`);
    }, 900);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card bg-paper border border-border shadow-soft p-7"
    >
      <div className="mb-6">
        <Logo />
      </div>
      <Eyebrow>Sign in</Eyebrow>
      <h2 className="mt-2 text-display-md text-ink-900">Welcome back.</h2>
      <p className="mt-2 text-body-sm text-ink-500">
        Portal access activates with an eligible Meraki subscription. New here?
        We&apos;ll route you to the team in one step.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <Label htmlFor="login-email" required>
            Email
          </Label>
          <Input
            id="login-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
          />
        </div>
        <div>
          <Label htmlFor="login-password">Password</Label>
          <Input
            id="login-password"
            name="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={submitted}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="md"
          fullWidth
          disabled={submitted}
        >
          {submitted ? "Routing to our team..." : "Sign in"}
        </Button>
        <p className="text-center text-xs text-ink-500">
          Don&apos;t have an account yet?{" "}
          <Link
            href="/packages"
            className="text-bronze-700 font-semibold hover:underline"
          >
            View eligible packages
          </Link>
          .
        </p>
      </div>
      <p className="mt-6 pt-5 border-t border-hairline flex items-start gap-2 text-[11px] text-ink-300">
        <Icon
          name="shield"
          className="h-3.5 w-3.5 mt-0.5 text-bronze-700 shrink-0"
        />
        <span>
          Authentication routes new sign-ins through our team while production
          login is being finalized. Subscription-gated portal access activates
          on confirmation.
        </span>
      </p>
    </form>
  );
}
