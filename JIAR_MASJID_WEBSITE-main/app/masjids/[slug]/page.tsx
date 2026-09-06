import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageShell } from "@/app/components/page-shell";
import { PrayerTimesTable } from "@/app/components/prayer-times-table";
import { Section } from "@/app/components/section";
import { JumuahSchedule } from "@/app/components/jumuah-schedule";
import { ConstructionUpdate } from "@/app/components/construction-update";
import { getLocationBySlug } from "@/data/locations";
import {
  formatAddress,
  formatPhoneDisplay,
  formatPhoneLink,
} from "@/app/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [{ slug: "parkwood" }, { slug: "fayetteville" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Masjid Not Found" };
  return {
    title: location.name,
    description: location.description,
  };
}

export default async function MasjidPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <PageShell>
      <Section id="masjid" title={location.name} description={formatAddress(location)}>
        <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <div>
            <p className="prose">{location.description}</p>

            <ul className="row-list mt-7 list-none p-0">
              {location.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    strokeWidth={2}
                    className="mt-[5px] shrink-0 text-[color:var(--primary)]"
                    aria-hidden="true"
                  />
                  <span className="body-secondary">{h}</span>
                </li>
              ))}
            </ul>

            <dl className="row-list mt-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <dt className="column-label">Phone</dt>
                <dd className="text-[16.5px] font-medium">
                  <a href={formatPhoneLink(location.phone)} className="tabular">
                    {formatPhoneDisplay(location.phone)}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <dt className="column-label">Directions</dt>
                <dd className="text-[16.5px] font-medium">
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Google Maps →
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="mb-[28px]">Prayer times</h3>
            <PrayerTimesTable />
          </div>
        </div>
      </Section>

      <Section id="jumuah" title="Jumu'ah schedule">
        <JumuahSchedule />
      </Section>

      {slug === "fayetteville" && (
        <Section id="construction" title="Renovation update">
          <ConstructionUpdate />
        </Section>
      )}
    </PageShell>
  );
}
