"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/lib/site-config";
import { TypewriterTagline } from "@/app/components/typewriter-tagline";

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnTGqQX-jf1d_pdxCJNJMp-9aA7GknNTvD6bIgymrPA4zPp6jFZkI3q6zivz20F0M1Ih0Y9DpKrVXhPdSff0arQcO5rcApk5bjAxOQrMh6d_8He8uUBu-p-f5257RIetL6SWs8m8g=s680-w680-h510-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkuM2sTyOssmSLLfmuZM7bFTd-jrcVXnTY_kRSDbtk7BTLWX9Cfd3DeNLEgJ1mAxtNW9AEijAbui7fiRrVa_Npk8HjE20gObdvrxDQeSs-9535aQhpvhpuVdNTqz-y0S2cUYMFI=s680-w680-h510-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnujkg9OX5ixhLDPHjmpNLTn6GwlV5mAMarfuK9vAHHLVcOzesm3wKvFa0IVjhgXRI0tYFPZusSInu1hInQrRTcqtmqDQUDNoJkgOUIsWPdeyhzse04Yip1dUSPpQ9V-sx60-hx=s680-w680-h510-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnd3QsOyuYx_X9MrdqK3TxxJm1EJBYNsQwenHp8XTg8B5bs6nU2el7ZQ9lAF5jw4q6XhxMNuvm-7JJ_nc4AHAxJsvLP0oSGNOwWQQITo_YnZINacOtuMX08avP7wU4swiqT1fld=s680-w680-h510-rw",
];

const SLIDE_INTERVAL_MS = 6000;

/**
 * Full-bleed banner directly under the header. The photographs crossfade
 * under one flat evergreen wash — never a gradient scrim — and the caption
 * sits in normal flow so the band grows rather than clipping on narrow
 * screens. Only the first photo loads eagerly (it's the LCP candidate); the
 * rest mount after initial load so the slideshow doesn't cost extra load
 * time, and the rotation is skipped for prefers-reduced-motion.
 */
export function Hero() {
  const [readyCount, setReadyCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setTimeout(() => setReadyCount(HERO_IMAGES.length), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (readyCount < 2) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % readyCount);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [readyCount]);

  return (
    <section className="relative w-full overflow-hidden bg-[#12442b]">
      {HERO_IMAGES.slice(0, readyCount).map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="JIAR Masjid"
          fill
          priority={index === 0}
          sizes="100vw"
          className={`scale-110 object-cover object-center blur-md transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[rgba(18,68,43,0.78)]" />
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
