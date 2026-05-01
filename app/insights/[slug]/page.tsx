import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { BlogBody } from "@/components/insights/BlogBody";
import { BlogCard } from "@/components/insights/BlogCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { SITE, buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return buildMetadata({ title: "Article not found", noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
  });
}

export default function InsightsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    keywords: post.tags.join(", "),
    mainEntityOfPage: `${SITE.url}/insights/${post.slug}`,
  };

  return (
    <>
      <Section bg="paper" tone="default" className="pt-20 md:pt-28">
        <Container size="narrow">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-700 hover:text-bronze-600"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            All insights
          </Link>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Pill tone="bronze">{post.category}</Pill>
            <span className="text-sm text-ink-500">
              {post.readingMinutes} min read
            </span>
            <span className="text-sm text-ink-500">·</span>
            <span className="text-sm text-ink-500">{formatDate(post.publishedAt)}</span>
          </div>
          <h1 className="mt-6 text-display-lg text-ink-900 text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-lead text-ink-500">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="paper" tone="tight">
        <Container size="narrow">
          <article>
            <BlogBody body={post.body} />
          </article>

          {post.cta && (
            <div className="mt-14 rounded-card bg-cream border border-hairline p-7">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-base font-semibold text-ink-900 max-w-xl">
                  Ready to put this into practice with Meraki?
                </p>
                <Button href={post.cta.href} variant="primary" size="md">
                  {post.cta.label}
                </Button>
              </div>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-hairline text-sm text-ink-500">
            <p>
              <strong className="text-ink-700 font-semibold">Important:</strong>{" "}
              Articles on this site provide general guidance only. Final tax
              treatment, filing position, and compliance decisions may require
              professional review based on your documents and business
              circumstances.
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container size="pro">
          <h2 className="text-display-md text-ink-900 mb-10">More to read</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactCTA />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
