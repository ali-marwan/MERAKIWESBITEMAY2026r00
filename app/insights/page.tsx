import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { BlogCard } from "@/components/insights/BlogCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BLOG_POSTS } from "@/data/blog";
import type { BlogCategory } from "@/lib/types";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical guidance on UAE VAT, Corporate Tax, e-invoicing readiness, accounting, business setup, cash flow, and AI-assisted finance workflows for SMEs and growing businesses.",
  path: "/insights",
});

export default function InsightsPage() {
  const featured = BLOG_POSTS[0]!;
  const rest = BLOG_POSTS.slice(1);
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

  return (
    <>
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <Container size="pro">
          <div className="max-w-3xl">
            <Pill tone="bronze">Insights</Pill>
            <h1 className="mt-6 text-display-xl text-ink-900 text-balance">
              Practical guidance for UAE businesses.
            </h1>
            <p className="mt-6 text-lead text-ink-500">
              VAT, Corporate Tax, e-invoicing readiness, accounting workflows,
              cash flow, business setup, and AI-assisted finance — written by
              the Meraki team.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <CategoryBadge key={c} category={c} />
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="cream" tone="tight">
        <Container size="pro">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <BlogCard post={featured} variant="feature" />
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {rest.slice(0, 2).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.slice(2).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA
        eyebrow="Talk to us"
        headline="Have a topic you'd like us to write about?"
        body="Tell us what's keeping you up at night about UAE finance, tax, or compliance — we'll cover it next."
        primaryCta={{ label: "Suggest a topic", href: "/contact?intent=blog" }}
        secondaryCta={{ label: "View Marketplace", href: "/marketplace" }}
        tertiaryCta={{ label: "Explore Meraki AI", href: "/meraki-ai" }}
      />
    </>
  );
}

function CategoryBadge({ category }: { category: BlogCategory }) {
  return (
    <span className="inline-flex items-center rounded-pill border border-hairline bg-cream px-3 py-1 text-xs font-semibold text-ink-700">
      {category}
    </span>
  );
}
