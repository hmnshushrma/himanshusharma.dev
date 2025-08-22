import type { Work } from "../../data/resume";
import { ymToMonYYYY } from "../../utils/date";
import './workTimeline.scss'
export default function WorkTimeline({ items }: { items: Work[] }) {
  return (
    <ol className="timeline">
      {items.map((w) => {
        const start = ymToMonYYYY(w.startDate);
        const end = w.endDate === "Present" ? "Present" : ymToMonYYYY(w.endDate);
        return (
          <li key={`${w.company}-${w.startDate}`} className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3 className="timeline__role">{w.position}</h3>
                <span className="timeline__company">{w.company}</span>
                <span className="timeline__dates">{start} – {end}</span>
              </div>

              {w.summary && <p className="timeline__summary">{w.summary}</p>}

              {w.highlights?.length ? (
                <ul className="timeline__highlights">
                  {w.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
