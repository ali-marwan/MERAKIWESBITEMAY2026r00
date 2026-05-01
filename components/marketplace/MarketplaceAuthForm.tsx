"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

type Mode = "login" | "signup";

const inputClass =
  "w-full rounded-2xl border border-border bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-bronze-500 focus:ring-2 focus:ring-bronze-100 transition";

export function MarketplaceAuthForm() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set(
      "intent",
      mode === "signup" ? "marketplace-signup" : "marketplace-login",
    );
    if (email) params.set("email", email);
    if (mode === "signup") {
      if (name) params.set("name", name);
      if (company) params.set("company", company);
    }
    router.push(`/contact?${params.toString()}`);
  }

  const isLogin = mode === "login";

  return (
    <div className="rounded-card bg-paper border border-border shadow-soft p-7 md:p-8">
      <div className="flex items-center justify-between gap-4 mb-6">
        <Logo />
        <span className="rounded-pill bg-bronze-50 border border-bronze-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bronze-700">
          Marketplace
        </span>
      </div>

      <div
        role="tablist"
        aria-label="Marketplace account"
        className="grid grid-cols-2 gap-1 rounded-pill bg-cream border border-hairline p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={isLogin}
          onClick={() => setMode("login")}
          className={
            "rounded-pill px-3 py-2 text-sm font-semibold transition " +
            (isLogin
              ? "bg-paper text-ink-900 shadow-soft"
              : "text-ink-500 hover:text-ink-900")
          }
        >
          Log in
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={!isLogin}
          onClick={() => setMode("signup")}
          className={
            "rounded-pill px-3 py-2 text-sm font-semibold transition " +
            (!isLogin
              ? "bg-paper text-ink-900 shadow-soft"
              : "text-ink-500 hover:text-ink-900")
          }
        >
          Create account
        </button>
      </div>

      <p className="mt-6 text-display-sm text-ink-900">
        {isLogin
          ? "Log in to your marketplace account"
          : "Create your marketplace account"}
      </p>
      <p className="mt-2 text-body-sm text-ink-500">
        {isLogin
          ? "Access your service requests, packages, custom quotes, and subscriptions in one place."
          : "Anyone can create a Meraki marketplace account. Browse services, request packages, and manage your activity from your own dashboard."}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {!isLogin && (
          <>
            <label className="block">
              <span className="text-xs font-semibold text-ink-700">
                Full name
              </span>
              <input
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={`${inputClass} mt-1.5`}
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-ink-700">
                Company name{" "}
                <span className="font-normal text-ink-400">(optional)</span>
              </span>
              <input
                type="text"
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your business"
                className={`${inputClass} mt-1.5`}
              />
            </label>
          </>
        )}

        <label className="block">
          <span className="text-xs font-semibold text-ink-700">
            Business email
          </span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={`${inputClass} mt-1.5`}
          />
        </label>

        <label className="block">
          <span className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-700">Password</span>
            {isLogin && (
              <button
                type="button"
                onClick={() => router.push("/contact?intent=marketplace-reset")}
                className="text-xs font-semibold text-bronze-700 hover:text-bronze-600"
              >
                Forgot?
              </button>
            )}
          </span>
          <input
            type="password"
            required
            minLength={isLogin ? undefined : 8}
            autoComplete={isLogin ? "current-password" : "new-password"}
            placeholder={isLogin ? "Your password" : "At least 8 characters"}
            className={`${inputClass} mt-1.5`}
          />
        </label>

        <Button type="submit" variant="primary" size="md" fullWidth>
          {isLogin ? "Log in" : "Create account"}
        </Button>

        <p className="text-center text-xs text-ink-500">
          {isLogin ? (
            <>
              New to Meraki?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="font-semibold text-ink-900 underline decoration-bronze-500 underline-offset-4 hover:text-bronze-700"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="font-semibold text-ink-900 underline decoration-bronze-500 underline-offset-4 hover:text-bronze-700"
              >
                Log in
              </button>
            </>
          )}
        </p>
      </form>

      <p className="mt-6 pt-5 border-t border-hairline text-[11px] text-ink-500 leading-relaxed">
        Marketplace accounts are open to anyone. Self-service login and
        Stripe-ready checkout activate alongside marketplace launch — until
        then, submitting routes you to the Meraki team to set up your account.
        No real authentication is connected yet; passwords entered here are not
        stored.
      </p>
    </div>
  );
}
