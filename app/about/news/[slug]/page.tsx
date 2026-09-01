import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/app/components/page-shell";
import { Section } from "@/app/components/section";
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
      <Section id="post">
        <Link href="/about/news" className="text-sm text-primary hover:underline">
          ← Back to News
        </Link>
        <time className="mt-4 block text-sm text-muted-foreground">{formatDate(post.date)}</time>
        <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
        {post.excerpt && (
          <p className="mt-6 text-muted-foreground leading-relaxed">{post.excerpt}</p>
        )}
        <p className="mt-6 text-sm text-muted-foreground">
          Full article content will be migrated from the current website. Check back soon or visit{" "}
          <a
            href="https://ibadarrahman.org/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            ibadarrahman.org
          </a>{" "}
          for the complete post.
        </p>
      </Section>
    </PageShell>
  );
}
