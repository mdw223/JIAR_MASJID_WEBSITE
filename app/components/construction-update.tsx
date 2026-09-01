import Link from "next/link";
import { constructionUpdate } from "@/data/navigation";

export function ConstructionUpdate() {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-foreground">{constructionUpdate.title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{constructionUpdate.description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {constructionUpdate.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            {link.label} →
          </Link>
        ))}
        <Link href="/masjids/fayetteville" className="text-sm font-medium text-accent hover:underline">
          Fayetteville St. Masjid Page →
        </Link>
      </div>
    </div>
  );
}
