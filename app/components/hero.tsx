import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden geometric-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:py-28">
        <div className="flex-1 text-center text-white lg:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">
            Jamaat Ibad Ar-Rahman
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Allah Will Help Him Who Moves In The Way Of Allah
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            {siteConfig.tagline}. Join our community for daily prayers, Islamic education, and
            community services at our two masjid locations in Durham, NC.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Join Our Community
            </Link>
            <Link
              href="/donate"
              className="rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Donate Now
            </Link>
          </div>
        </div>
        <div className="relative h-56 w-full flex-shrink-0 overflow-hidden rounded-xl shadow-2xl sm:h-72 lg:h-80 lg:w-96">
          <Image
            src="/images/masjid-hero.jpg"
            alt="JIAR Masjid"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </div>
      </div>
    </section>
  );
}
