import type { University, ProfileGroup } from "../data/schema";

// Matching weights and thresholds — easy to tune
const WEIGHTS = { scholarship: 0.4, visa: 0.35, difficulty: 0.25 };
// difficulty contribution is (10 - difficulty) * weight so lower difficulty = higher score

const BAC_GROUP_A_MAX = 13;
const BAC_GROUP_B_MIN = 14;
const IELTS_GROUP_B_MIN = 6.0;

export type MatchInput = {
  bacAverage: number;       // e.g. 12
  hasEnglishCert: boolean;
  ieltsScore?: number;      // only if hasEnglishCert
  cleanerProfile: boolean;
  primaryGoal: "admission_scholarship_visa" | "stronger_university";
};

export type MatchResult = {
  university: University;
  score: number;
  reason: string;
};

export function matchUniversities(input: MatchInput, unis: University[]): MatchResult[] {
  // Determine recommended group
  const isGroupA =
    input.bacAverage <= BAC_GROUP_A_MAX ||
    !input.hasEnglishCert ||
    input.primaryGoal === "admission_scholarship_visa";
  const isGroupB =
    input.bacAverage >= BAC_GROUP_B_MIN &&
    input.hasEnglishCert &&
    (input.ieltsScore === undefined || input.ieltsScore >= IELTS_GROUP_B_MIN);
  const isGroupC = input.cleanerProfile && isGroupB && input.bacAverage >= 16;

  const targetGroups: ProfileGroup[] = [];
  if (isGroupC) targetGroups.push("C");
  if (isGroupB) targetGroups.push("B");
  if (isGroupA || !isGroupB) targetGroups.push("A");

  // Score and filter
  const results: MatchResult[] = [];
  for (const uni of unis) {
    if (!uni.group || !uni.scores) continue;
    if (!targetGroups.includes(uni.group)) continue;

    const s = uni.scores;
    const scholarshipScore = (s.scholarship ?? 0) * WEIGHTS.scholarship;
    const visaScore = (s.visa ?? 0) * WEIGHTS.visa;
    const difficultyScore = (10 - (s.difficulty ?? 10)) * WEIGHTS.difficulty;
    const totalScore = scholarshipScore + visaScore + difficultyScore;

    // Build reason line
    const groupLabel =
      uni.group === "A"
        ? "Group A (accessible)"
        : uni.group === "B"
        ? "Group B (mid-level)"
        : "Group C (selective)";
    const reasons: string[] = [groupLabel];
    if (s.scholarship !== undefined && s.scholarship >= 9) reasons.push("excellent scholarship odds");
    if (s.visa !== undefined && s.visa >= 9) reasons.push("high visa success");
    if (s.difficulty !== undefined && s.difficulty <= 3) reasons.push("easy admission");
    if (uni.status === "complete") reasons.push("full info available");

    results.push({ university: uni, score: totalScore, reason: reasons.join(" · ") });
  }

  return results.sort((a, b) => b.score - a.score);
}
