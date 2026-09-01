import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-muted-foreground leading-relaxed">{location.description}</p>
            <ul className="mt-6 space-y-2">
              {location.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 text-primary">✓</span>
                  {h}
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href={formatPhoneLink(location.phone)} className="font-medium text-primary hover:underline">
                    {formatPhoneDisplay(location.phone)}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Directions</dt>
                <dd>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    View on Google Maps
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Prayer Times</h3>
            <PrayerTimesTable />
          </div>
        </div>
      </Section>

      <Section id="jumuah" title="Jumu'ah Schedule" className="bg-muted/30">
        <JumuahSchedule />
      </Section>

      {slug === "fayetteville" && (
        <Section id="construction" title="Renovation Update">
          <ConstructionUpdate />
        </Section>
      )}
    </PageShell>
  );
}
