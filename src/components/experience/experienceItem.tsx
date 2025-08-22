import ExperienceHeader from "./experienceHeader";
import ExperienceSummary from "./experienceSummary";
import ExperienceHighlights from "./experienceHighlights";
import ExperienceStack from "./experienceStack";

type Experience = {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights?: string[];
  stack?: string[];
};

export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article className="experience">
      <ExperienceHeader
        position={item.position}
        company={item.company}
        startDate={item.startDate}
        endDate={item.endDate}
      />
      <ExperienceSummary summary={item.summary} />
      <ExperienceHighlights highlights={item.highlights} />
      <ExperienceStack stack={item.stack} />
    </article>
  );
}
