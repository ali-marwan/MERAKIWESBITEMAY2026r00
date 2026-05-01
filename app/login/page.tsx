import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { LoginForm } from "@/components/layout/LoginForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Login",
  description:
    "Sign in to the Meraki Client Portal. Portal access activates with an eligible Meraki subscription — manage documents, AI workflows, and reports.",
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
              Manage your documents, AI workflows, subscriptions, and monthly
              reports in one place. Portal access activates with an eligible
              Meraki subscription.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/packages" variant="primary" size="md">
                View eligible packages
              </Button>
              <Button href="/contact?intent=portal-access" variant="ghost" size="md">
                Request access
              </Button>
              <Button href="/portal" variant="ghost" size="md">
                Preview the portal
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <LoginForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
