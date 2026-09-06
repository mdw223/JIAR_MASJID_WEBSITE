import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/lib/site-config";
import { TypewriterTagline } from "@/app/components/typewriter-tagline";

const HERO_IMAGE = "/images/hero-two-masjids.png";

/**
 * Full-bleed banner directly under the header. The photograph of both
 * masjids sits under one flat evergreen wash — never a gradient scrim — and
 * the caption sits in normal flow so the band grows rather than clipping on
 * narrow screens.
 */
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#12442b]">
      <Image
        src={HERO_IMAGE}
        alt="Masjid Ibad Ar-Rahman and Masjid Ibad-ur-Rahman at Salisbury"
        fill
        priority
        sizes="100vw"
        className="scale-110 object-cover object-center blur-sm"
      />
      <div className="absolute inset-0 bg-[rgba(18,68,43,0.72)]" />
      <div className="pattern-dark absolute inset-0" />
      <div className="hero-glow" aria-hidden />
      <div className="region-dark relative bg-transparent">
        <div className="jiar-container py-[clamp(36px,6vw,72px)]">
          <span className="eyebrow eyebrow-on-dark">{siteConfig.name}</span>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)]">Two masjids, one community</h1>
          <div className="mt-3">
            <TypewriterTagline />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/donate" className="btn btn-primary btn-glow btn-lg">
              Donate now
            </Link>
            <Link
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass btn-lg"
            >
              Join our community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
