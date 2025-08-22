import type { ReactNode } from "react";
import './commonStyles/section.scss'
export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="resume__section" aria-labelledby={`section-${title}`}>
      <div className="container">
        <h2 id={`section-${title}`} className="resume__section-title">
          {title}
        </h2>
        <div className="resume__section-body">{children}</div>
      </div>
    </section>
  );
}
