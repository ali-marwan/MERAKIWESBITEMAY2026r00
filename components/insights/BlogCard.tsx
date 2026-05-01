import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "feature";
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const isFeature = variant === "feature";
  return (
    <Link
      href={`/insights/${post.slug}`}
      className={`group flex flex-col rounded-card border border-border bg-paper p-7 hover:border-bronze-300 hover:shadow-lift transition ${
        isFeature ? "lg:p-10" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <Badge variant="bronze">{post.category}</Badge>
        <span className="text-xs text-ink-500">
          {post.readingMinutes} min read
        </span>
      </div>
      <h3
        className={
          isFeature
            ? "text-display-md text-ink-900 group-hover:text-bronze-700 transition text-balance"
            : "text-display-sm text-ink-900 group-hover:text-bronze-700 transition text-balance"
        }
      >
        {post.title}
      </h3>
      <p className="mt-3 text-body-sm text-ink-500 leading-relaxed grow">
        {post.excerpt}
      </p>
      <div className="mt-6 pt-5 border-t border-hairline flex items-center justify-between">
        <p className="text-xs text-ink-500">
          {post.author} · {formatDate(post.publishedAt)}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-700 group-hover:gap-2.5 transition-all">
          Read
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
