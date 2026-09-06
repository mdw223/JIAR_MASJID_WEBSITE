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
      <Section
        id="donate"
        title="Donation"
        description="Support the masjids, the education programmes and the families JIAR serves."
      >
        <div className="prose flex flex-col gap-4">
          {donationIntro.paragraphs.map((p) => (
            <p key={p.slice(0, 50)}>{p}</p>
          ))}
        </div>

        <div className="mt-[56px]">
          <h3>Donation categories</h3>
          <p className="section-description">
            Select a category to contribute through our secure donation portal.
          </p>
          <div className="mt-[30px] grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(250px,100%),1fr))]">
            {donationCategories.map((category, index) => (
              <a
                key={category.id}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`card card-link ${index === 0 ? "card-invert" : ""}`}
              >
                <span className="card-title">{category.name}</span>
                <span
                  className={
                    index === 0
                      ? "block text-[15.5px] leading-[1.55] text-[rgba(255,255,255,0.82)]"
                      : "body-secondary block"
                  }
                >
                  {category.description}
                </span>
                <span className="link-arrow block">Donate →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="card mt-[56px] bg-[color:var(--muted)]">
          <span className="card-title">Prefer PayPal?</span>
          <p className="body-secondary">
            You can also give through our PayPal account.
          </p>
          <a
            href={alternateDonationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-1"
          >
            Donate via PayPal
          </a>
        </div>

        <p className="body-secondary mt-8">
          Questions? Email{" "}
          <a href={`mailto:${donationIntro.email}`}>{donationIntro.email}</a>
        </p>
      </Section>
    </PageShell>
  );
}
