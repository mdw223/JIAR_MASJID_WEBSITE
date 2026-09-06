import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructionUpdate } from "@/data/navigation";

const extraLinks = [
  { label: "Fayetteville St. Masjid page", href: "/masjids/fayetteville", external: false },
];

export function ConstructionUpdate() {
  const links = [
    ...constructionUpdate.links.map((link) => ({ ...link, external: true })),
    ...extraLinks,
  ];

  return (
    <div className="card">
      <h4>{constructionUpdate.title}</h4>
      <p className="prose">{constructionUpdate.description}</p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="link-arrow inline-flex items-center gap-1.5"
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {link.label}
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
