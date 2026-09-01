import Link from "next/link";
import { services } from "@/data/navigation";

const icons: Record<string, React.ReactNode> = {
  book: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  mosque: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    </svg>
  ),
  crescent: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  heart: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <Link
          key={service.id}
          href={service.href}
          className={`group flex flex-col rounded-xl border p-6 transition-shadow hover:shadow-md ${
            service.featured
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card"
          }`}
        >
          <div className={service.featured ? "text-white" : "text-primary"}>
            {icons[service.icon]}
          </div>
          <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
          <p className={`mt-2 flex-1 text-sm ${service.featured ? "text-white/80" : "text-muted-foreground"}`}>
            {service.description}
          </p>
          <span className={`mt-4 text-sm font-medium ${service.featured ? "text-accent" : "text-accent"}`}>
            Read More →
          </span>
        </Link>
      ))}
    </div>
  );
}
