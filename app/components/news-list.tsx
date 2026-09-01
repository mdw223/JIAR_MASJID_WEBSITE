import Link from "next/link";
import { newsPosts } from "@/data/news";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsList({ limit }: { limit?: number }) {
  const posts = limit ? newsPosts.slice(0, limit) : newsPosts;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/about/news/${post.slug}`}
          className="group flex gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <time className="text-xs text-muted-foreground">{formatDate(post.date)}</time>
            <h3 className="mt-1 font-semibold group-hover:text-primary">{post.title}</h3>
            {post.excerpt && (
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
