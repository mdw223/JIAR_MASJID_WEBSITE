import Link from "next/link";
import { BookOpen, HeartHandshake, Landmark, Moon } from "lucide-react";
import { services } from "@/data/navigation";

const icons = {
  book: BookOpen,
  mosque: Landmark,
  crescent: Moon,
  heart: HeartHandshake,
} as const;

/**
 * The programme card set. Exactly one card — the one the data marks featured —
 * is inverted onto the deep green; every other card is the plain white surface.
 */
export function ServiceCards() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
      {services.map((service) => {
        const Icon = icons[service.icon as keyof typeof icons] ?? BookOpen;
        const featured = "featured" in service && service.featured;

        return (
          <Link
            key={service.id}
            href={service.href}
            className={`card card-link ${featured ? "card-invert" : ""}`}
          >
            <Icon
              size={28}
              strokeWidth={1.5}
              className={featured ? "text-[#f0a45f]" : "text-[color:var(--primary)]"}
              aria-hidden="true"
            />
            <span className="card-title">{service.title}</span>
            <span
              className={
                featured
                  ? "block text-[15.5px] leading-[1.55] text-[rgba(255,255,255,0.82)]"
                  : "body-secondary block"
              }
            >
              {service.description}
            </span>
            <span className="link-arrow block">Learn more →</span>
          </Link>
        );
      })}
    </div>
  );
}
