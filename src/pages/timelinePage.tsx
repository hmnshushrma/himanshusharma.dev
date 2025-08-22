import { resume } from "../data/resume";
import Section from "../components/common/commonSection";
import VerticalTimeline from "../components/verticleTimeLine/VerticalTimeline";
export default function TimelinePage() {
  return (
    <div className="container">
      <Section title="Career Timeline">
        <VerticalTimeline items={resume.work} />
      </Section>
    </div>
  );
}