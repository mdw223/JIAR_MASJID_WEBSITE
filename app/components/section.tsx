import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * A titled block: a serif section heading, a one-sentence description, then
 * the block body. Heading to description is 10px, description to content 30px.
 */
export function Section({ id, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={className}>
      {(title || description) && (
        <div className="section-head">
          {title && <h2>{title}</h2>}
          {description && <p className="section-description">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
