import Link from "next/link";
import { PageShell } from "@/app/components/page-shell";
import { ConstructionUpdate } from "@/app/components/construction-update";
import { Hero } from "@/app/components/hero";
import { JumuahSchedule } from "@/app/components/jumuah-schedule";
import { NewsList } from "@/app/components/news-list";
import { PrayerTimesTable } from "@/app/components/prayer-times-table";
import { Section } from "@/app/components/section";
import { ServiceCards } from "@/app/components/service-cards";

export default function Home() {
  return (
    <PageShell>
      <Hero />

      <Section id="prayer-times" title="Prayer Times" description="Daily athan and iqamah times for both masjid locations.">
        <PrayerTimesTable />
      </Section>

      <Section
        id="services"
        title="Services We Offer"
        description="Programs and services for the JIAR community."
        className="bg-muted/30"
      >
        <ServiceCards />
      </Section>

      <Section id="jumuah" title="Friday Prayer Schedule" description="Jumu'ah prayer times at both locations.">
        <JumuahSchedule />
      </Section>

      <Section
        id="news"
        title="Recent News & Updates"
        description="Latest announcements from JIAR."
        className="bg-muted/30"
      >
        <NewsList limit={5} />
        <div className="mt-6 text-center">
          <Link
            href="/about/news"
            className="inline-flex rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All News
          </Link>
        </div>
      </Section>

      <Section id="construction" title="Masjid Updates">
        <ConstructionUpdate />
      </Section>

      <section className="bg-primary py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Support Your Community</h2>
          <p className="mt-3 text-primary-foreground/80">
            Your donations help us maintain our masjids, run educational programs, and serve those in need.
          </p>
          <Link
            href="/donate"
            className="mt-6 inline-flex rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
