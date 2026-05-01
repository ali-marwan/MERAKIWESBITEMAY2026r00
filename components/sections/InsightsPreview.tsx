import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { BlogCard } from "@/components/insights/BlogCard";
import { BLOG_POSTS } from "@/data/blog";

export function InsightsPreview() {
  const latest = BLOG_POSTS.slice(0, 3);
  return (
    <Section bg="paper" tone="default">
      <Container size="pro">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Eyebrow>Insights</Eyebrow>
            <h2 className="mt-4 text-display-lg text-ink-900 text-balance">
              Practical guidance on UAE finance, tax & compliance.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-bronze-700 hover:text-bronze-600"
          >
            All insights
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
