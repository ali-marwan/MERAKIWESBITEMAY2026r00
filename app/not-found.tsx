import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

export default function NotFound() {
  return (
    <Section bg="paper" tone="hero">
      <Container size="narrow" className="text-center">
        <Pill tone="bronze">404</Pill>
        <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
          That page is not on Meraki.
        </h1>
        <p className="mt-6 text-lead text-ink-500 max-w-xl mx-auto">
          The link may have changed or the page may not have been built yet.
          Try the home page, browse the marketplace, or speak to our team.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            Back to home
          </Button>
          <Button href="/marketplace" variant="ghost" size="md">
            Browse marketplace
          </Button>
          <Button href="/contact" variant="ghost" size="md">
            Speak to our team
          </Button>
        </div>
      </Container>
    </Section>
  );
}
