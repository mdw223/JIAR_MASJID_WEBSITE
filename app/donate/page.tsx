import type { Metadata } from "next";
import { PageShell } from "@/app/components/page-shell";
import { Section } from "@/app/components/section";
import {
  alternateDonationUrl,
  donationCategories,
  donationIntro,
} from "@/data/donation";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Jamaat Ibad Ar-Rahman through your generous donations.",
};

export default function DonatePage() {
  return (
    <PageShell>
      <Section id="donate" title="Donation" description={`${donationIntro.email}`}>
        <div className="max-w-3xl space-y-4">
          {donationIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 50)} className="text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Donation Categories</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Select a category to contribute through our secure donation portal.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {donationCategories.map((category) => (
              <a
                key={category.id}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:border-primary hover:shadow-md"
              >
                <h4 className="font-semibold group-hover:text-primary">{category.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">
                  Donate →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
          <p className="text-sm text-muted-foreground">
            You can also donate via PayPal:
          </p>
          <a
            href={alternateDonationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Donate via PayPal
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Questions? Email{" "}
          <a href={`mailto:${donationIntro.email}`} className="text-primary hover:underline">
            {donationIntro.email}
          </a>
        </p>
      </Section>
    </PageShell>
  );
}
