import { useEffect, useState } from "react";
import type { Work } from "../../data/resume";
import { ymToMonYYYY } from "../../utils/date";
import './timelineCenter.scss'
export default function VerticalTimelineCenter({ items }: { items: Work[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // lock page scroll while modal visible; close on ESC
  useEffect(() => {
    const visible = openIdx !== null || isClosing;
    if (!visible) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, isClosing]);

  const requestOpen = (i: number) => {
    setIsClosing(false);
    setOpenIdx(i);
  };

const requestClose = () => {
  setIsClosing(true);
  // keep in sync with CSS (500ms + small buffer)
  window.setTimeout(() => {
    setOpenIdx(null);
    setIsClosing(false);
  }, 520);
};

  const active = openIdx != null ? items[openIdx] : null;

  return (
    <div className="timeline timeline--center">
      <div className="timeline__grid">
        {items.map((w, i) => {
          const start = ymToMonYYYY(w.startDate);
          const end = w.endDate === "Present" ? "Present" : ymToMonYYYY(w.endDate);
          return (
            <article
              key={`${w.company}-${w.startDate}`}
              className="timeline__card center"
              role="button"
              tabIndex={0}
              onClick={() => requestOpen(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && requestOpen(i)}
            >
              <header className="timeline__head">
                <h3 className="timeline__role">{w.position}</h3>
                <div className="timeline__meta">
                  <span className="timeline__company">{w.company}</span>
                  <span className="timeline__dates">{start} – {end}</span>
                </div>
              </header>
              {w.summary && <p className="timeline__summary">{w.summary}</p>}
            </article>
          );
        })}
      </div>

      {(active || isClosing) && (
        <div
          className={`timeline-modal ${openIdx !== null ? "is-open" : ""} ${isClosing ? "is-closing" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="tl-modal-title"
          onClick={requestClose}
        >
          <div
            className="timeline-modal__panel"
            onClick={(e) => e.stopPropagation()}
          >
            {active && (
              <>
                <header className="modal__head">
                  <h3 id="tl-modal-title" className="modal__role">{active.position}</h3>
                  <div className="modal__meta">
                    <span className="modal__company">{active.company}</span>
                    <span className="modal__dates">
                      {ymToMonYYYY(active.startDate)} – {active.endDate === "Present" ? "Present" : ymToMonYYYY(active.endDate)}
                    </span>
                  </div>
                  <button className="modal__close" onClick={requestClose} aria-label="Close">×</button>
                </header>

                {active.summary && <p className="modal__summary">{active.summary}</p>}

                {active.highlights?.length ? (
                  <ul className="modal__highlights">
                    {active.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                  </ul>
                ) : null}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
