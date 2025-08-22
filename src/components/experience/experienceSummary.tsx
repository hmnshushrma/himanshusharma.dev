export default function ExperienceSummary({ summary }: { summary?: string }) {
  if (!summary) return null;
  return <p className="experience__summary">{summary}</p>;
}
