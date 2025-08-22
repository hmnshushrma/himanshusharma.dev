export default function ExperienceHighlights({
  highlights,
}: {
  highlights?: string[];
}) {
  if (!highlights?.length) return null;
  return (
    <ul className="experience__highlights">
      {highlights.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
    </ul>
  );
}
