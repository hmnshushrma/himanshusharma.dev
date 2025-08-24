
import "./skills.scss";

type RawSkill = { category: string; details: string[] };
type SkillsProps = { skills: RawSkill[] };

type Section =
  | { title: string; items: { label: string; level?: "Expert" | "Advanced" | "Working" }[] }
  | { title: string; groups: { subtitle: string; items: { label: string; level?: "Expert" | "Advanced" | "Working" }[] }[] };

const by = (needle: string) => (s: RawSkill) =>
  s.category.toLowerCase().includes(needle);

const splitCSV = (line?: string) =>
  (line ?? "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

// tiny helper to apply a default level
const to = (labels: string[], level: "Expert" | "Advanced" | "Working" = "Advanced") =>
  labels.map(label => ({ label, level }));

function normalize(skills: RawSkill[]): Section[] {
  const fe = skills.find(by("front-end"))?.details ?? [];
  const htmlCss = skills.find(by("html/css"))?.details ?? [];
  const perf = skills.find(by("performance"))?.details ?? [];
  const testing = skills.find(by("testing"))?.details ?? [];
  const tools = skills.find(by("build tools"))?.details ?? [];
  const devops = skills.find(by("ci/cd"))?.details ?? [];
  const backend = skills.find(by("back-end"))?.details ?? [];
  const databases = skills.find(by("databases"))?.details ?? [];
  const mobile = skills.find(by("mobile"))?.details ?? [];

  // Front-end sentences → chips
  const jsLangs = splitCSV(fe[0] || "JavaScript, TypeScript");                        // JS/TS
  const frameworks = [
    ...(fe[1] ? splitCSV(fe[1]) : []),                                                // React, Angular, Vue, Redux...
    ...(fe[2] ? splitCSV(fe[2]) : []),                                                // jQuery, Vanilla JS
  ];

  // HTML/CSS → chips
  const markupStyling = [
    ...(htmlCss[0] ? splitCSV(htmlCss[0]) : []),                                      // HTML5, CSS3
    ...(htmlCss[1] ? [htmlCss[1]] : []),                                              // SASS
  ];
  const stylingFrameworks = htmlCss.slice(2).flatMap(splitCSV);                       // Bootstrap, Foundation

  // Clean labels (short & consistent)
  const rename = (x: string) =>
    x
      .replace(/\s*\(ES5\/ES6\)\s*/i, "")
      .replace(/React\.js/i, "React")
      .replace(/AngularJS/i, "AngularJS")
      .replace(/GraphQL/i, "GraphQL")
      .replace(/Vanilla JS/i, "Vanilla JS")
      .replace(/Foundation Zurb/i, "Foundation")
      .trim();

  const FE_LANG = to(markupStyling.concat(jsLangs).map(rename), "Expert");            // You’re very strong here
  const FE_FW   = to(frameworks.map(rename), "Expert");
  const FE_CSS  = to(stylingFrameworks.map(rename), "Advanced");

  const sections: Section[] = [
    {
      title: "Front-End",
      groups: [
        { subtitle: "Languages & Markup", items: FE_LANG },
        { subtitle: "Frameworks & Libraries", items: FE_FW },
        { subtitle: "Styling Frameworks", items: FE_CSS },
      ],
    },
    { title: "Performance", items: to(perf.flatMap(splitCSV).map(rename), "Advanced") },
    { title: "Testing", items: to(testing.flatMap(splitCSV).map(rename), "Advanced") },
    { title: "Tooling", items: to(tools.flatMap(splitCSV).map(rename), "Advanced") },
    { title: "CI/CD & DevOps", items: to(devops.flatMap(splitCSV).map(rename), "Working") },
    { title: "Back-End", items: to(backend.flatMap(splitCSV).map(rename), "Working") },
    { title: "Databases", items: to(databases.flatMap(splitCSV).map(rename), "Working") },
    { title: "Mobile", items: to(mobile.flatMap(splitCSV).map(rename), "Working") },
  ];

  // Strip empties
  const cleaned = sections
    .map(sec =>
      "groups" in sec
        ? { ...sec, groups: sec.groups.filter(g => g.items.length) }
        : { ...sec, items: sec.items.filter(Boolean) }
    )
    .filter(sec => ("groups" in sec ? sec.groups.length : sec.items.length));

  return cleaned;
}

export default function Skills({ skills }: SkillsProps) {
  const sections = normalize(skills);

  return (
    <div className="skills-grid">
      {sections.map((sec, idx) => (
        <section key={idx} className="skills-card">
          <h3 className="skills-card__title">{sec.title}</h3>

          {"groups" in sec ? (
            sec.groups.map((grp, gIdx) => (
              <div key={gIdx} className="skills-subgroup">
                <h4 className="skills-subtitle">{grp.subtitle}</h4>
                <ul className="skills-card__chips">
                  {grp.items.map((tag, i) => (
                    <li key={i} className={`chip ${tag.level?.toLowerCase()}`}>
                      <span className="chip-dot" />
                      {tag.label}
                      {tag.level && <span className="chip-level"> · {tag.level}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ul className="skills-card__chips">
              {sec.items.map((tag, i) => (
                <li key={i} className={`chip ${tag.level?.toLowerCase()}`}>
                  <span className="chip-dot" />
                  {tag.label}
                  {tag.level && <span className="chip-level"> · {tag.level}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
