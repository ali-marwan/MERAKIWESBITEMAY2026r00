import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BlogCard } from "@/components/insights/BlogCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BLOG_POSTS } from "@/data/blog";
import type { BlogCategory } from "@/lib/types";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical guidance on UAE VAT, Corporate Tax, e-invoicing readiness, accounting, business setup, cash flow, compliance readiness, and AI-assisted finance workflows for SMEs and growing UAE businesses.",
  path: "/insights",
});

const PREFERRED_CATEGORY_ORDER: BlogCategory[] = [
  "UAE VAT",
  "Corporate Tax",
  "E-Invoicing",
  "Accounting",
  "Business Setup",
  "Cash Flow",
  "Compliance Readiness",
  "Meraki AI",
];

export default function InsightsPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const featured = sorted[0]!;
  const secondary = sorted.slice(1, 3);
  const rest = sorted.slice(3);
  const present = new Set(BLOG_POSTS.map((p) => p.category));
  const categories = PREFERRED_CATEGORY_ORDER.filter((c) => present.has(c));

  return (
    <>
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Pill tone="bronze">Insights</Pill>
              <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
                UAE business, tax & compliance insights.
              </h1>
              <p className="mt-6 text-lead text-ink-500 max-w-2xl">
                Practical guidance on UAE VAT, Corporate Tax, e-invoicing
                readiness, accounting workflows, cash flow, business setup, and
                AI-assisted finance — written by the Meraki team for SMEs and
                growing UAE businesses.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/packages" variant="primary" size="md">
                  View Packages
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Speak to Our Team
                </Button>
                <Button
                  href="/meraki-ai"
                  variant="ghost"
                  size="md"
                  iconLeft={<Icon name="spark" className="h-4 w-4" />}
                >
                  Explore Meraki AI
                </Button>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-card bg-cream border border-hairline p-6 md:p-7">
                <p className="text-eyebrow uppercase text-bronze-700">
                  What you&apos;ll find here
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                  {[
                    "UAE VAT guidance and invoice review",
                    "Corporate Tax readiness for SMEs",
                    "E-invoicing readiness primers",
                    "Accounting workflows and monthly close",
                    "Cash flow and 13-week views",
                    "AI-assisted finance, the honest version",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Icon
                        name="check"
                        className="h-4 w-4 mt-0.5 text-bronze-700 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-ink-500 leading-relaxed">
                  General guidance only. Final tax treatment, filing position,
                  and compliance decisions may require professional review.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <CategoryBadge key={c} category={c} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream" tone="tight">
        <Container size="pro">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-eyebrow uppercase text-bronze-700">Latest</p>
              <h2 className="mt-2 text-display-md text-ink-900">
                Featured this month
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <BlogCard post={featured} variant="feature" />
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {secondary.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          {rest.length > 0 && (
            <>
              <div className="mt-14 mb-6 flex items-end justify-between gap-6">
                <h2 className="text-display-sm text-ink-900">More to read</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        eyebrow="Talk to us"
        headline="Have a UAE finance or compliance topic you&rsquo;d like us to write about?"
        body="Tell us what's on your mind about UAE accounting, VAT, Corporate Tax, e-invoicing readiness, or AI-assisted workflows — we'll cover it next."
        primaryCta={{ label: "View Packages", href: "/packages" }}
        secondaryCta={{ label: "Speak to Our Team", href: "/contact" }}
        tertiaryCta={{ label: "Explore Meraki AI", href: "/meraki-ai" }}
      />
    </>
  );
}

function CategoryBadge({ category }: { category: BlogCategory }) {
  return (
    <span className="inline-flex items-center rounded-pill border border-hairline bg-cream px-3.5 py-1.5 text-xs font-semibold text-ink-700">
      {category}
    </span>
  );
}
