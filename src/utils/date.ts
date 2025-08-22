export function ymToMonYYYY(ym?: string) {
  if (!ym) return "";
  const [y, m] = ym.split("-").map(Number);
  if (!y || !m) return ym;
  return new Date(y, m - 1, 1).toLocaleString(undefined, { month: "short", year: "numeric" });
}
export function formatDateRange(start?: string, end?: string) {
  const startFormatted = ymToMonYYYY(start);
  const endFormatted = end === "Present" ? "Present" : ymToMonYYYY(end);
  return [startFormatted, endFormatted].filter(Boolean).join(" – ");
}