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

function matchesQuery(normalized: string, field: string): boolean {
  const nf = normalizeText(field);
  if (nf.includes(normalized)) return true;
  if (normalized.length >= 3 && nf.length > 0 && isSubsequence(normalized, nf)) return true;
  return false;
}

export function searchUniversities(query: string, unis: University[]): University[] {
  if (!query.trim()) return unis;
  const normalized = normalizeText(query.trim());

  return unis.filter(uni => {
    const coreFields = [
      uni.name,
      uni.shortName ?? "",
      uni.city ?? "",
      uni.region ?? "",
      uni.group ?? "",
      ...(uni.aliases ?? []),
    ];

    for (const field of coreFields) {
      if (matchesQuery(normalized, field)) return true;
    }

    // Also search program names
    if (uni.programs) {
      for (const p of uni.programs) {
        if (matchesQuery(normalized, p.name)) return true;
      }
    }

    return false;
  });
}

/** Returns the list of program names from `uni` that match `query`. Empty array if no query or no match. */
export function getMatchedPrograms(query: string, uni: University): string[] {
  if (!query.trim() || !uni.programs) return [];
  const normalized = normalizeText(query.trim());

  // Only return program matches — skip if the query already matches core fields
  // so we don't show noise when searching by university name
  const coreFields = [
    uni.name,
    uni.shortName ?? "",
    uni.city ?? "",
    uni.region ?? "",
    uni.group ?? "",
    ...(uni.aliases ?? []),
  ];
  const coreMatches = coreFields.some(f => matchesQuery(normalized, f));
  if (coreMatches) return [];

  return uni.programs
    .filter(p => matchesQuery(normalized, p.name))
    .map(p => p.name);
}
