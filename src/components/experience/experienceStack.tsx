export default function ExperienceStack({ stack }: { stack?: string[] }) {
  if (!stack?.length) return null;
  return (
    <ul className="experience__stack">
      {stack.map((t) => (
        <li key={t} className="skill-pill">{t}</li>
      ))}
    </ul>
  );
}
