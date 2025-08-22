import type { Basics } from "../../data/resume.ts"
import './commonStyles/header.scss'



function formatLocation(loc?: Basics["location"]) {
  if (!loc) return "";
  const parts = [loc.address, loc.city, loc.postalCode, loc.country]
    .filter(Boolean)
    .join(", ");
  return parts;
}

export default function Header({ basics }: { basics: Basics }) {
  const locationText = formatLocation(basics.location);

  return (
    <section className="resume__header" aria-label="Profile">
      <div className="container">
        <div className="resume__identity">
          <h1 className="resume__name">{basics.name}</h1>
          {basics.label && <p className="resume__role">{basics.label}</p>}
        </div>

        <ul className="resume__meta" aria-label="Contact">
          {basics.email && (
            <li>
              <a href={`mailto:${basics.email}`}>{basics.email}</a>
            </li>
          )}
          {basics.phone && (
            <li>
              <a href={`tel:${basics.phone}`}>{basics.phone}</a>
            </li>
          )}
          {locationText && <li>{locationText}</li>}
        </ul>
      </div>
    </section>
  );
}
