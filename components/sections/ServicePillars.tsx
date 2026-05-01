import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { PILLARS } from "@/data/pillars";

export function ServicePillars() {
  return (
    <Section bg="paper" tone="default">
      <Container size="pro">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Eyebrow>Five pillars</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Everything you need to start, run, and grow — under one standard.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bronze-700 hover:text-bronze-600"
          >
            View all services
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.key}
              href={`/services#${pillar.key}`}
              className="group relative rounded-card border border-border bg-paper p-7 hover:border-bronze-300 hover:shadow-lift transition"
            >
              <div className="h-12 w-12 rounded-xl bg-cream border border-hairline flex items-center justify-center text-bronze-700 group-hover:bg-bronze-50 group-hover:border-bronze-200 transition">
                <Icon name={pillar.key} className="h-6 w-6" />
              </div>
              <p className="mt-6 text-display-sm text-ink-900 font-bold">
                {pillar.title}
              </p>
              <p className="mt-1 text-sm text-bronze-700 font-semibold">
                {pillar.tagline}
              </p>
              <p className="mt-3 text-body-sm text-ink-500 leading-relaxed">
                {pillar.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 group-hover:text-bronze-700">
                Explore {pillar.title}
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
