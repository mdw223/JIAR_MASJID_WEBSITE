import type { Metadata } from "next";
import { PageShell } from "@/app/components/page-shell";
import { NewsList } from "@/app/components/news-list";
import { Section } from "@/app/components/section";

export const metadata: Metadata = {
  title: "Recent News",
  description: "Latest news and announcements from Jamaat Ibad Ar-Rahman.",
};

export default function NewsPage() {
  return (
    <PageShell>
      <Section id="news" title="Recent News & Updates" description="Announcements and updates from JIAR.">
        <NewsList />
      </Section>
    </PageShell>
  );
}
