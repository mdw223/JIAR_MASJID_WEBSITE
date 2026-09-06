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

/** One label/value pair on its own ruled row inside a card. */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <dt className="column-label">{label}</dt>
      <dd className="text-[16.5px] font-medium text-[color:var(--ink)]">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <Section
        id="contact"
        title="Contact us"
        description="Reach out to JIAR for inquiries, services, or general questions."
      >
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(330px,1fr))]">
          <div className="card card-flush">
            <div className="card-header">
              <span className="card-title">General contact</span>
            </div>
            <dl className="row-list card-body py-0">
              <Row label="Phone">
                <a href={formatPhoneLink(siteConfig.phone)} className="tabular">
                  {formatPhoneDisplay(siteConfig.phone)}
                </a>
              </Row>
              <Row label="Email">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </Row>
              <Row label="Donations">
                <a href={`mailto:${siteConfig.donateEmail}`}>{siteConfig.donateEmail}</a>
              </Row>
            </dl>
          </div>

          {siteConfig.locations.map((location) => (
            <div key={location.id} className="card card-flush">
              <div className="card-header">
                <span className="card-title">{location.name}</span>
              </div>
              <dl className="row-list card-body py-0">
                <Row label="Address">{formatAddress(location)}</Row>
                <Row label="Phone">
                  <a href={formatPhoneLink(location.phone)} className="tabular">
                    {formatPhoneDisplay(location.phone)}
                  </a>
                </Row>
                <Row label="Directions">
                  <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    View on Google Maps →
                  </a>
                </Row>
              </dl>
            </div>
          ))}
        </div>

        <p className="body-secondary mt-8">
          Contact form coming soon. For now, please call or email us directly.
        </p>
      </Section>
    </PageShell>
  );
}
