import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { AIWorkflowMockup } from "@/components/ai/AIWorkflowMockup";

export function MerakiAIPreview() {
  return (
    <Section bg="paper" tone="default">
      <Container size="pro">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Meraki AI</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Connected finance workflows, assisted by AI.
            </h2>
            <p className="mt-6 text-lead text-ink-500">
              Capture documents, organize expenses, support VAT and tax checks,
              prepare for e-invoicing readiness, and route records for
              professional review — without replacing your accounting system.
            </p>
            <Pill tone="bronze" className="mt-6">
              AI checks. Meraki verifies.
            </Pill>
            <ul className="mt-7 space-y-3 text-body-sm text-ink-500">
              <li>· Invoice and receipt intelligence with risk flags</li>
              <li>· VAT and tax checks before posting</li>
              <li>· Accountant review queue and approval workflow</li>
              <li>· Monthly compliance summary preview</li>
              <li>· E-invoicing readiness support</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/meraki-ai" variant="primary" size="md">
                Explore Meraki AI
              </Button>
              <Button href="/marketplace?category=meraki-ai" variant="ghost" size="md">
                View AI Packages
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AIWorkflowMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
}
