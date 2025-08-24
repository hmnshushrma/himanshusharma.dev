import { resume } from "../data/resume";
import ProfileCard from "../components/profileCard/profileCard";
import Section from "../components/common/commonSection";
import WorkTimeline from "../components/workTimeline/WorkTimeline";
import Skills from "../components/skills/skills";
import AboutCard from "../components/aboutCard/aboutCard";

export default function ResumePage() {
  return (
    <div className="resume-page container">
      <aside className="resume-aside">
        <ProfileCard basics={resume.basics} />
        {/* You can add Strengths/Interests small cards below later */}
      </aside>

      <div className="resume-content">
        <Section title="About">
          <AboutCard basics={resume.basics} />
        </Section>
        <Section title="Work Experience">
          <WorkTimeline items={resume.work} />
        </Section>
        <Section title="Skills">
          <Skills skills={resume.skills} />
        </Section>

        {/* Next: Skills grid / Education cards / Portfolio links */}
      </div>
    </div>
  );
}
