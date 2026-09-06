import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

type PageShellProps = {
  children: React.ReactNode;
  /**
   * Skip the padded `.region > .jiar-container` wrapper. Used by the homepage,
   * which lays out its own regions (some of them full-bleed).
   */
  bare?: boolean;
};

/**
 * Full-width page on the white ground, with the header, main content and both
 * footer bars stacked inside it. `.jiar` carries the theme's element defaults.
 */
export function PageShell({ children, bare = false }: PageShellProps) {
  return (
    <div className="jiar flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {bare ? (
          children
        ) : (
          <div className="region">
            <div className="jiar-container">
              <div className="flex flex-col gap-[56px]">{children}</div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
