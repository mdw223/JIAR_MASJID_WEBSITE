import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/app/components/page-shell";
import { newsPosts } from "@/data/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article>
        <Link href="/about/news" className="link-arrow link-muted">
          ← Back to news
        </Link>
        <time className="column-label tabular mt-6 block">{formatDate(post.date)}</time>
        <h1 className="mt-2">{post.title}</h1>
        {post.excerpt && <p className="lede mt-6">{post.excerpt}</p>}
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1000}
            height={1000}
            className="mt-6 w-full max-w-[520px] rounded-[var(--radius,8px)] border border-[color:var(--hairline)]"
          />
        )}
        <p className="body-secondary mt-6 max-w-[62ch]">
          Full article content will be migrated from the current website. Check back soon
          or visit{" "}
          <a href="https://ibadarrahman.org/news/" target="_blank" rel="noopener noreferrer">
            ibadarrahman.org
          </a>{" "}
          for the complete post.
        </p>
      </article>
    </PageShell>
  );
}
