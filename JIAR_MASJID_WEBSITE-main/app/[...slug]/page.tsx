import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/app/components/content-page";
import { getPageContent, slugToContentKey } from "@/data/pages";

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return Object.keys(slugToContentKey).map((path) => ({
    slug: path.replace(/^\//, "").split("/"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const contentKey = slugToContentKey[path];
  const page = contentKey ? getPageContent(contentKey) : undefined;
  if (!page) return { title: "Page Not Found" };
  return {
    title: page.title,
    description: page.description ?? page.content[0]?.slice(0, 160),
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const contentKey = slugToContentKey[path];
  const page = contentKey ? getPageContent(contentKey) : undefined;

  if (!page) notFound();

  return <ContentPage page={page} />;
}
