"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const buttonClass =
  "flex h-11 w-11 items-center sm:h-9 sm:w-9 justify-center rounded-[6px] text-[color:var(--muted-foreground)] hover:bg-[color:var(--hover-tint)] hover:text-[color:var(--primary)]";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button type="button" aria-label="Toggle theme" className={buttonClass} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={buttonClass}
    >
      {isDark ? (
        <Sun size={18} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon size={18} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}
