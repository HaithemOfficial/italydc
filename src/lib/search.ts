import type { University } from "../data/schema";

export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // remove combining diacritical marks
    .replace(/['\-]/g, ""); // remove apostrophes and hyphens
}

function isSubsequence(query: string, target: string): boolean {
  let qi = 0;
  for (let ti = 0; ti < target.length && qi < query.length; ti++) {
    if (target[ti] === query[qi]) qi++;
  }
  return qi === query.length;
}

export function searchUniversities(query: string, unis: University[]): University[] {
  if (!query.trim()) return unis;

  const normalized = normalizeText(query.trim());

  return unis.filter(uni => {
    const fields = [
      uni.name,
      uni.shortName ?? "",
      uni.city ?? "",
      uni.region ?? "",
      uni.group ?? "",
      ...(uni.aliases ?? []),
    ].map(normalizeText);

    // Exact substring match first
    for (const field of fields) {
      if (field.includes(normalized)) return true;
    }

    // Fuzzy subsequence match for 3+ char queries
    if (normalized.length >= 3) {
      for (const field of fields) {
        if (field.length > 0 && isSubsequence(normalized, field)) return true;
      }
    }

    return false;
  });
}
