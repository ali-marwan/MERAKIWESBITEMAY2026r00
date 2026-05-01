"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <Section bg="paper" tone="hero">
      <Container size="narrow" className="text-center">
        <Pill tone="bronze">Something went wrong</Pill>
        <h1 className="mt-6 text-display-lg text-ink-900 text-balance">
          We hit an error rendering this page.
        </h1>
        <p className="mt-6 text-lead text-ink-500 max-w-xl mx-auto">
          Try again, or speak to our team if the issue continues.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button onClick={() => reset()} variant="primary" size="md">
            Try again
          </Button>
          <Button href="/contact" variant="ghost" size="md">
            Speak to our team
          </Button>
        </div>
      </Container>
    </Section>
  );
}
