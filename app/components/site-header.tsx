"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNavigation, type NavItem } from "@/data/navigation";
import { siteConfig } from "@/app/lib/site-config";
import { cn } from "@/app/lib/utils";

function NavDropdown({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    const isExternal = item.href?.startsWith("http");
    return (
      <Link
        href={item.href ?? "#"}
        className="block rounded px-3 py-2 text-sm hover:bg-muted"
        onClick={onNavigate}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded px-3 py-2 text-sm hover:bg-muted"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <svg
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="ml-3 border-l border-border pl-2">
          {item.children.map((child) => (
            <NavDropdown key={child.label} item={child} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    const isExternal = item.href?.startsWith("http");
    return (
      <Link
        href={item.href ?? "#"}
        className="rounded px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary"
      >
        {item.label}
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-lg border border-border bg-card py-2 shadow-lg">
          {item.children.map((child) =>
            child.children ? (
              <div key={child.label} className="px-2">
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {child.label}
                </p>
                {child.children.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href ?? "#"}
                    className="block rounded px-3 py-1.5 text-sm hover:bg-muted"
                    {...(sub.href?.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={child.label}
                href={child.href ?? "#"}
                className="block px-4 py-2 text-sm hover:bg-muted"
                {...(child.href?.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {child.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/jiar-logo.png"
            alt={siteConfig.name}
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 sm:inline-flex"
          >
            Donate Now
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <nav className="space-y-1">
            {mainNavigation.map((item) => (
              <NavDropdown key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
          </nav>
          <Link
            href="/donate"
            className="mt-4 block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
