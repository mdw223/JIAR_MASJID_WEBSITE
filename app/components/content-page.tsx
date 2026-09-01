import Link from "next/link";
import { PageShell } from "@/app/components/page-shell";
import { Section } from "@/app/components/section";
import type { PageContent } from "@/data/pages";

export function ContentPage({ page }: { page: PageContent }) {
  return (
    <PageShell>
      <Section id="content" title={page.title} description={page.description}>
        <div className="prose prose-neutral max-w-3xl">
          {page.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-4 text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {page.externalUrl && (
          <Link
            href={page.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Visit Official Website
          </Link>
        )}
      </Section>
    </PageShell>
  );
}
