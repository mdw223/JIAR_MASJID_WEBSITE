import Image from "next/image";
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
            className="row-hover flex items-start gap-4 border-t border-[color:var(--hairline)] px-[clamp(16px,3.5vw,20px)] py-4 first:border-t-0"
          >
            {post.image && (
              <Image
                src={post.image}
                alt=""
                width={96}
                height={96}
                className="mt-1 h-[72px] w-[72px] shrink-0 rounded-[var(--radius,6px)] border border-[color:var(--hairline)] object-cover"
              />
            )}
            <div className="min-w-0 flex-1">
              <time className="column-label tabular">{formatDate(post.date)}</time>
              <span className="list-title mt-2 block">{post.title}</span>
              {post.excerpt && (
                <span className="body-secondary mt-1.5 block">{post.excerpt}</span>
              )}
              <span className="link-arrow mt-2 block text-[color:var(--primary)]">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
