// import Header from "../components/common/commonHeader";
// import Section from "../components/common/commonSection";
// import { resume } from "../data/resume";
// import { ExperienceItem } from "../components/experience";

// export default function ResumePage() {
//   const { basics, work } = resume;
//   return (
//     <main className="resume">
//       <Header basics={basics} />
//       <Section title="Work Experience">
//         {work.map((w) => (
//           <ExperienceItem
//             key={`${w.company}-${w.startDate}`}
//             item={{ ...w, id: `${w.company}-${w.startDate}` }}
//           />
//         ))}
//       </Section>
//     </main>
//   );
// }

import { resume } from "../data/resume";
import ProfileCard from "../components/profileCard/profileCard";
import Section from "../components/common/commonSection";
import WorkTimeline from "../components/workTimeline/WorkTimeline";

export default function ResumePage() {
  return (
    <div className="resume-page container">
      <aside className="resume-aside">
        <ProfileCard basics={resume.basics} />
        {/* You can add Strengths/Interests small cards below later */}
      </aside>

      <div className="resume-content">
        <Section title="Work Experience">
          <WorkTimeline items={resume.work} />
        </Section>

        {/* Next: Skills grid / Education cards / Portfolio links */}
      </div>
    </div>
  );
}