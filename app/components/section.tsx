import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(title || description) && (
          <div className="mb-10 max-w-2xl">
            {title && <h2 className="text-3xl font-bold tracking-tight">{title}</h2>}
            {description && (
              <p className="mt-3 text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
