import type { Basics } from "../../data/resume";
import "./aboutCard.scss";

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    {" "}
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24 0-.87 0-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04 .9 1.53 2.37 1.09 2.95.84 .09-.65 .35-1.09 .64-1.34 -2.22-.25-4.56-1.11-4.56-4.95 0-1.09 .39-1.98 1.03-2.68 -.1-.25-.45-1.27 .1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02 .55 1.38 .2 2.4 .1 2.65 .64 .7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94 .36 .31 .68 .92 .68 1.86 0 1.34 0 2.41 0 2.74 0 .26 .18 .58 .69 .48A10 10 0 0 0 12 2z"
    />{" "}
  </svg>
);
const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    {" "}
    <path
      fill="currentColor"
      d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5zM5.3 8.5h3.3V20H5.3zM13 8.5h3.16v1.57h.05a3.46 3.46 0 0 1 3.11-1.71c3.33 0 3.95 2.19 3.95 5.03V20h-3.3v-4.88c0-1.16 0-2.66-1.62-2.66s-1.87 1.27-1.87 2.58V20H13z"
    />{" "}
  </svg>
);

export default function AboutCard({ basics }: { basics: Basics }) {
  const { about, aboutPrimary, aboutSecondary, links, openTo } = basics;
  const hasSplit = !!(aboutPrimary || aboutSecondary);

  return (
    <section
      className="about-card"
      aria-label="About"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h2 className="about-card__title">About Me</h2>

      {hasSplit ? (
        <div className="about-card__grid">
          {aboutPrimary && <p className="about-card__text">{aboutPrimary}</p>}
          {aboutSecondary && (
            <p className="about-card__text">{aboutSecondary}</p>
          )}
        </div>
      ) : (
        about && <p className="about-card__text">{about}</p>
      )}

      {openTo?.length ? (
        <div className="about-card__open">
          <span className="about-card__open-label">Open to:</span>
          <ul className="about-card__chips">
            {openTo.map((o, i) => (
              <li key={i} className="chip">
                {o}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ul className="about-card__links">
        {links?.github && (
          <li className="chip">
            <IconGithub />
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              GitHub
            </a>
          </li>
        )}
        {links?.linkedin && (
          <li className="chip">
            <IconLinkedIn />
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              LinkedIn
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}
