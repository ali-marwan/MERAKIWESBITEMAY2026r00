import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";

interface FinalCTAProps {
  eyebrow?: string;
  headline?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
}

export function FinalCTA({
  eyebrow = "Get started",
  headline = "Build your business on a cleaner finance and compliance system.",
  body = "Subscribe to a package, browse the marketplace, or speak to our team. Whichever way you start, you start under one standard.",
  primaryCta = { label: "View Marketplace", href: "/marketplace" },
  secondaryCta = { label: "Explore Meraki AI", href: "/meraki-ai" },
  tertiaryCta = { label: "Speak to Our Team", href: "/contact" },
}: FinalCTAProps) {
  return (
    <Section bg="ink" tone="footer-pre">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-bronze-radial opacity-90 pointer-events-none"
      />
      <Container size="pro" className="relative">
        <div className="max-w-3xl">
          <Eyebrow className="text-bronze-300">{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-display-lg text-paper text-balance">
            {headline}
          </h2>
          <p className="mt-6 text-lead text-paper/80">{body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={primaryCta.href} variant="primary" size="md">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="ink-ghost"
                size="md"
              >
                {secondaryCta.label}
              </Button>
            )}
            {tertiaryCta && (
              <Button
                href={tertiaryCta.href}
                variant="ink-ghost"
                size="md"
              >
                {tertiaryCta.label}
              </Button>
            )}
          </div>
          <p className="mt-8 text-xs text-paper/55 max-w-2xl">
            One system. One team. One standard. Services subject to required
            documents and authority requirements where applicable.
          </p>
        </div>
      </Container>
    </Section>
  );
}
