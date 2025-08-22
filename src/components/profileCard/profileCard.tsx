import type { Basics } from "../../data/resume";
import "./profileCard.scss";

function initials(name?: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map(p => p[0]?.toUpperCase() ?? "").join("");
}

function formatLocation(loc?: Basics["location"]) {
  if (!loc) return "";
  return [loc.city, loc.country].filter(Boolean).join(", ");
}

/* tiny inline icons (no library) */
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5L4 8V6l8 5 8-5z"/></svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.1-.74 0-1 .27l-1.57 1.57a15.05 15.05 0 0 1-6.6-6.6L6.23 8.6c.26-.27.36-.65.26-1A11.84 11.84 0 0 1 6 4c0-.55-.45-1-1-1H3a1 1 0 0 0-1 1C2 13.39 10.61 22 21 22a1 1 0 0 0 1-1v-2c0-.55-.45-1-1-1"/></svg>
);
const IconMap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5"/></svg>
);

export default function ProfileCard({ basics }: { basics: Basics }) {
  const loc = formatLocation(basics.location);

  return (
    <aside className="profile-card" aria-label="Profile">
      {/* decorative accent */}
      <span className="profile-card__accent" aria-hidden="true" />

      <div className="profile-card__head">
        <div className="avatar" aria-hidden="true">{initials(basics.name)}</div>
        <div className="identity">
          <h1 className="profile-card__name">{basics.name}</h1>
          {!!basics.label && <p className="profile-card__role">{basics.label}</p>}
        </div>
      </div>

      <ul className="profile-card__meta" role="list">
        {!!basics.email && (
          <li className="chip">
            <IconMail /><a href={`mailto:${basics.email}`}>{basics.email}</a>
          </li>
        )}
        {!!basics.phone && (
          <li className="chip">
            <IconPhone /><a href={`tel:${basics.phone}`}>{basics.phone}</a>
          </li>
        )}
        {!!loc && (
          <li className="chip">
            <IconMap /><span>{loc}</span>
          </li>
        )}
      </ul>
    </aside>
  );
}
