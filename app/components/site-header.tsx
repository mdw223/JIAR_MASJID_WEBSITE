"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Minus, Plus, X } from "lucide-react";
import { mainNavigation, type NavItem } from "@/data/navigation";
import { siteConfig } from "@/app/lib/site-config";
import { ThemeToggle } from "@/app/components/theme-toggle";

function isExternal(href?: string) {
  return Boolean(href?.startsWith("http"));
}

function externalProps(href?: string) {
  return isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/** One desktop top-level nav item plus its floating dropdown panel. */
function DesktopMenuItem({ item, alignEnd }: { item: NavItem; alignEnd?: boolean }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link href={item.href ?? "#"} className="nav-item" {...externalProps(item.href)}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="nav-item" aria-expanded={open}>
        {item.label}
        <ChevronDown className="nav-chevron" strokeWidth={2} aria-hidden="true" />
      </button>
      {open && (
        <ul className={`menu-panel ${alignEnd ? "left-auto right-0" : ""}`}>
          {item.children.map((child) =>
            child.children ? (
              <li key={child.label}>
                <span className="menu-label">{child.label}</span>
                <ul className="m-0 list-none p-0">
                  {child.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href ?? "#"}
                        className="menu-link"
                        {...externalProps(sub.href)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={child.label}>
                <Link
                  href={child.href ?? "#"}
                  className="menu-link"
                  {...externalProps(child.href)}
                >
                  {child.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      )}
    </li>
  );
}

/** Collapsible accordion row used inside the mobile drawer. */
function MobileMenuItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link href={item.href ?? "#"} onClick={onNavigate} {...externalProps(item.href)}>
        {item.label}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-between"
      >
        <span>{item.label}</span>
        {open ? (
          <Minus size={14} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Plus size={14} strokeWidth={2} aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="pl-4">
          {item.children.map((child) => (
            <MobileMenuItem key={child.label} item={child} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastIndex = mainNavigation.length - 1;

  return (
    <header className="site-header">
      <div className="jiar-container">
        <div className="topbar">
          <Link href="/" title={siteConfig.name} className="flex shrink-0 items-center">
            <Image
              src="/images/jiar-logo.png"
              alt={siteConfig.name}
              width={200}
              height={60}
              className="h-9 w-auto sm:h-[42px]"
              priority
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="nav">
              {mainNavigation.map((item, index) => (
                <DesktopMenuItem
                  key={item.label}
                  item={item}
                  alignEnd={index >= lastIndex - 1}
                />
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link href="/donate" className="btn btn-primary hidden sm:inline-flex">
              Donate now
            </Link>
            <ThemeToggle />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[6px] text-[color:var(--ink)] hover:bg-[color:var(--hover-tint)] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={20} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu size={20} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav lg:hidden">
          <div className="jiar-container">
            {mainNavigation.map((item) => (
              <MobileMenuItem
                key={item.label}
                item={item}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <Link
              href="/donate"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary mt-3 w-full sm:hidden"
            >
              Donate now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
