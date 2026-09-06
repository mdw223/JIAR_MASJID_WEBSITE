import Link from "next/link";
import { newsPosts } from "@/data/news";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Announcements as one ruled list inside a single card — rows separated by
 * hairlines rather than by a box each, with the row filling on hover.
 */
export function NewsList({ limit }: { limit?: number }) {
  const posts = limit ? newsPosts.slice(0, limit) : newsPosts;

  return (
    <div className="card card-flush">
      <div className="flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/about/news/${post.slug}`}
            className="row-hover block border-t border-[color:var(--hairline)] px-5 py-[18px] first:border-t-0"
          >
            <time className="column-label tabular">{formatDate(post.date)}</time>
            <span className="list-title mt-2 block">{post.title}</span>
            {post.excerpt && (
              <span className="body-secondary mt-1.5 block">{post.excerpt}</span>
            )}
            <span className="link-arrow mt-2 block text-[color:var(--primary)]">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
