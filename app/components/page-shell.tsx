import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
