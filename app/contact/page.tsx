import type { Metadata } from "next";
import { PageShell } from "@/app/components/page-shell";
import { Section } from "@/app/components/section";
import {
  formatAddress,
  formatPhoneDisplay,
  formatPhoneLink,
  siteConfig,
} from "@/app/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jamaat Ibad Ar-Rahman.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Section id="contact" title="Contact Us" description="Reach out to JIAR for inquiries, services, or general questions.">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold">General Contact</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href={formatPhoneLink(siteConfig.phone)} className="font-medium text-primary hover:underline">
                    {formatPhoneDisplay(siteConfig.phone)}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary hover:underline">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Donations</dt>
                <dd>
                  <a href={`mailto:${siteConfig.donateEmail}`} className="font-medium text-primary hover:underline">
                    {siteConfig.donateEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {siteConfig.locations.map((location) => (
            <div key={location.id} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">{location.name}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Address</dt>
                  <dd>{formatAddress(location)}</dd>
                </div>
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
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Contact form coming soon. For now, please call or email us directly.
        </p>
      </Section>
    </PageShell>
  );
}
