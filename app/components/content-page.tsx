import Link from "next/link";
import { PageShell } from "@/app/components/page-shell";
import { Section } from "@/app/components/section";
import type { PageContent } from "@/data/pages";

export function ContentPage({ page }: { page: PageContent }) {
  return (
    <PageShell>
      <Section id="content" title={page.title} description={page.description}>
        <div className="prose flex flex-col gap-4">
          {page.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        {page.externalUrl && (
          <Link
            href={page.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-7"
          >
            Visit official website →
          </Link>
        )}
      </Section>
    </PageShell>
  );
}
