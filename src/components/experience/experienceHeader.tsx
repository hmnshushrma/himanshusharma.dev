import { ymToMonYYYY } from "../../utils/date.ts";

type Props = {
  position: string;
  company: string;
  startDate?: string;
  endDate?: string; // may be "Present"
};

export default function ExperienceHeader({ position, company, startDate, endDate }: Props) {
  const start = ymToMonYYYY(startDate);
  const end = endDate === "Present" ? "Present" : ymToMonYYYY(endDate);

  return (
    <header className="experience__header">
      <h3 className="experience__role">{position}</h3>
      <div className="experience__org">
        <span className="experience__company">{company}</span>
        <span className="experience__dates">{[start, end].filter(Boolean).join(" – ")}</span>
      </div>
    </header>
  );
}
