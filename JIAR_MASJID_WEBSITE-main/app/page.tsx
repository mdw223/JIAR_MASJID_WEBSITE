import Link from "next/link";
import { PageShell } from "@/app/components/page-shell";
import { ConstructionUpdate } from "@/app/components/construction-update";
import { Hero } from "@/app/components/hero";
import { JumuahSchedule } from "@/app/components/jumuah-schedule";
import { NewsList } from "@/app/components/news-list";
import { PrayerTimesTable } from "@/app/components/prayer-times-table";
import { ServiceCards } from "@/app/components/service-cards";
import { siteConfig } from "@/app/lib/site-config";

export default function Home() {
  return (
    <PageShell bare>
      <Hero />

      {/* Prayer — the two schedules side by side on the white ground */}
      <section className="region">
        <div className="jiar-container">
          <div className="section-head">
            <span className="eyebrow">Prayer</span>
            <h2 className="mt-2">Prayer times</h2>
            <p className="section-description">
              Today&apos;s athan and iqamah times at both masjids, and this week&apos;s
              Jumu&apos;ah shifts.
            </p>
          </div>

          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(480px,1fr))]">
            <PrayerTimesTable />
            <JumuahSchedule />
          </div>

          <div className="mt-7">
            <Link href="/services/prayers" className="btn btn-outline">
              Monthly prayer timings
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements — tinted ground */}
      <section className="region region-tint">
        <div className="jiar-container">
          <div className="section-head">
            <span className="eyebrow">Announcements</span>
            <h2 className="mt-2">Latest from the jamaat</h2>
            <p className="section-description">
              Prayer time changes, events and community notices from JIAR.
            </p>
          </div>

          <NewsList limit={5} />

          <div className="mt-7">
            <Link href="/about/news" className="btn btn-outline">
              View all news →
            </Link>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="region">
        <div className="jiar-container">
          <div className="section-head">
            <span className="eyebrow">Programmes</span>
            <h2 className="mt-2">What we offer</h2>
            <p className="section-description">
              Education, funeral services, community support and the ongoing masjid
              development project.
            </p>
          </div>

          <ServiceCards />

          <div className="mt-7">
            <Link href="/events" className="btn btn-outline">
              View full calendar →
            </Link>
          </div>
        </div>
      </section>

      {/* Masjid updates and staying connected — tinted ground */}
      <section className="region region-tint">
        <div className="jiar-container">
          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            <div>
              <span className="eyebrow">Masjid updates</span>
              <h2 className="mt-2 mb-[28px]">Fayetteville St. renovation</h2>
              <ConstructionUpdate />
            </div>

            <div>
              <span className="eyebrow">Stay connected</span>
              <h2 className="mt-2 mb-[28px]">Join the community</h2>
              <div className="card">
                <p className="body-secondary">
                  Join the JIAR WhatsApp group and follow us on social media for prayer
                  time changes, event announcements and community updates.
                </p>
                <p className="body-secondary">
                  Questions? Email{" "}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Join WhatsApp
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing appeal — the one dark emphasis ground below the hero */}
      <section className="region region-dark pattern-dark">
        <div className="jiar-container">
          <span className="eyebrow eyebrow-on-dark">Support JIAR</span>
          <h2 className="mt-2 max-w-[22ch]">Our masjid, our investment</h2>
          <p className="lede mt-3 mb-0 text-[rgba(255,255,255,0.9)]">
            Your donations help us maintain our masjids, run educational programs, and
            serve those in need.
          </p>
          <div className="mt-8">
            <Link href="/donate" className="btn btn-primary btn-lg">
              Donate now
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
