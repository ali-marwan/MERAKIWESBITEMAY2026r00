import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Eyebrow } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Input";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/layout/Logo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Login",
  description:
    "Meraki client portal login preview. Authentication arrives in v1 — for now, please contact our team for access.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <Section bg="cream" tone="hero">
      <Container size="narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Pill tone="bronze">Client portal</Pill>
            <h1 className="mt-6 text-display-lg text-ink-900 text-balance">
              Sign in to the Meraki Portal.
            </h1>
            <p className="mt-5 text-lead text-ink-500 max-w-xl">
              The portal is currently a frontend preview. Real authentication,
              file uploads, and subscription management arrive in v1. Please
              contact our team for access.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/portal" variant="primary" size="md">
                View portal preview
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                Request access
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <form
              className="rounded-card bg-paper border border-border shadow-soft p-7"
              action="/contact"
              method="get"
            >
              <div className="mb-6">
                <Logo />
              </div>
              <Eyebrow>Sign in (preview)</Eyebrow>
              <h2 className="mt-2 text-display-md text-ink-900">
                Welcome back.
              </h2>
              <p className="mt-2 text-body-sm text-ink-500">
                Authentication is not active yet — this form is illustrative.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    disabled
                  />
                </div>
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  fullWidth
                  disabled
                >
                  Sign in (coming soon)
                </Button>
                <p className="text-center text-xs text-ink-500">
                  <Link
                    href="/contact"
                    className="text-bronze-700 font-semibold hover:underline"
                  >
                    Contact us
                  </Link>{" "}
                  to request portal access.
                </p>
              </div>
              <p className="mt-6 pt-5 border-t border-hairline flex items-start gap-2 text-[11px] text-ink-300">
                <Icon
                  name="shield"
                  className="h-3.5 w-3.5 mt-0.5 text-bronze-700 shrink-0"
                />
                <span>
                  Production login will use secure authentication and
                  subscription-gated portal access.
                </span>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
