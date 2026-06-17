import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Target, ChevronRight } from "lucide-react";
import { universities } from "../data/index";
import { matchUniversities, type MatchInput, type MatchResult } from "../lib/match";
import GroupBadge from "../components/GroupBadge";
import StatusPill from "../components/StatusPill";
import ScoreMeter from "../components/ScoreMeter";

export default function ProfileMatcher() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "results">("form");
  const [form, setForm] = useState<{
    bacAverage: string;
    hasEnglishCert: boolean | null;
    ieltsScore: string;
    cleanerProfile: boolean;
    primaryGoal: MatchInput["primaryGoal"];
  }>({
    bacAverage: "",
    hasEnglishCert: null,
    ieltsScore: "",
    cleanerProfile: true,
    primaryGoal: "admission_scholarship_visa",
  });
  const [results, setResults] = useState<MatchResult[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const bac = parseFloat(form.bacAverage);
    if (isNaN(bac) || bac < 0 || bac > 20) {
      setError("Please enter a valid Bac average (0–20).");
      return;
    }
    if (form.hasEnglishCert === null) {
      setError("Please answer whether you have an English certificate.");
      return;
    }

    const input: MatchInput = {
      bacAverage: bac,
      hasEnglishCert: form.hasEnglishCert,
      ieltsScore: form.hasEnglishCert && form.ieltsScore ? parseFloat(form.ieltsScore) : undefined,
      cleanerProfile: form.cleanerProfile,
      primaryGoal: form.primaryGoal,
    };

    const matched = matchUniversities(input, universities);
    setResults(matched);
    setStep("results");
  };

  const groupedResults = {
    A: results.filter(r => r.university.group === "A"),
    B: results.filter(r => r.university.group === "B"),
    C: results.filter(r => r.university.group === "C"),
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="bg-[#0B1A33] text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-4 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Explorer
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-6 h-6 text-[#C9A227]" />
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
              Profile Matcher
            </h1>
          </div>
          <p className="text-blue-200 text-sm">
            Answer a few questions to get a personalised university recommendation for your client.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {step === "form" && (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
            {/* Q1 */}
            <div>
              <label className="block font-semibold text-gray-800 mb-1 text-sm">
                1. What is the client's Bac average? (0–20)
              </label>
              <input
                type="number"
                min="0"
                max="20"
                step="0.01"
                value={form.bacAverage}
                onChange={e => setForm(f => ({ ...f, bacAverage: e.target.value }))}
                placeholder="e.g. 13.5"
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full max-w-xs focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Q2 */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2 text-sm">
                2. Does the client have an English language certificate?
              </label>
              <div className="flex gap-3">
                {[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ].map(opt => (
                  <button
                    key={String(opt.value)}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, hasEnglishCert: opt.value }))}
                    className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      form.hasEnglishCert === opt.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-200 text-gray-600 bg-white hover:bg-blue-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q3 (conditional) */}
            {form.hasEnglishCert === true && (
              <div>
                <label className="block font-semibold text-gray-800 mb-1 text-sm">
                  3. Approximate IELTS equivalent score (optional)
                </label>
                <input
                  type="number"
                  min="0"
                  max="9"
                  step="0.5"
                  value={form.ieltsScore}
                  onChange={e => setForm(f => ({ ...f, ieltsScore: e.target.value }))}
                  placeholder="e.g. 6.0"
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full max-w-xs focus:outline-none focus:border-blue-400"
                />
                <p className="text-xs text-gray-400 mt-1">Leave blank if unknown. Group B requires IELTS 6.0+.</p>
              </div>
            )}

            {/* Q4 */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2 text-sm">
                4. Is the client's academic history clean and strong?
              </label>
              <div className="flex gap-3">
                {[
                  { value: true, label: "Yes, clean/strong" },
                  { value: false, label: "Some gaps or issues" },
                ].map(opt => (
                  <button
                    key={String(opt.value)}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, cleanerProfile: opt.value }))}
                    className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      form.cleanerProfile === opt.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-200 text-gray-600 bg-white hover:bg-blue-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q5 */}
            <div>
              <label className="block font-semibold text-gray-800 mb-2 text-sm">
                5. What is the client's primary goal?
              </label>
              <div className="space-y-2">
                {[
                  { value: "admission_scholarship_visa", label: "Smooth admission + scholarship + visa success", desc: "Prioritises accessibility and financial support" },
                  { value: "stronger_university", label: "A stronger / more prestigious university", desc: "Willing to invest more effort for a higher-ranked institution" },
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, primaryGoal: opt.value as MatchInput["primaryGoal"] }))}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                      form.primaryGoal === opt.value
                        ? "bg-blue-50 border-blue-500 text-blue-800"
                        : "border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-semibold">{opt.label}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#0B1A33] hover:bg-[#13264A] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Find matching universities
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {step === "results" && (
          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <p className="font-semibold mb-1">How the matching works</p>
              <p>Universities are scored based on three weighted factors: Scholarship odds (40%), Visa success (35%), and Admission difficulty — inverted so easier = higher score (25%). Only universities in your recommended profile group(s) are shown. Scores above 5.0/10 indicate strong matches.</p>
            </div>

            <button
              onClick={() => setStep("form")}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Modify answers
            </button>

            {(["A", "B", "C"] as const).map(group => {
              const groupResults = groupedResults[group];
              if (groupResults.length === 0) return null;
              return (
                <div key={group}>
                  <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2" style={{ fontFamily: "Playfair Display, serif" }}>
                    <GroupBadge group={group} />
                    Recommended {groupResults.length > 1 ? `(${groupResults.length} universities)` : ""}
                  </h2>
                  <div className="space-y-3">
                    {groupResults.map(result => (
                      <div
                        key={result.university.id}
                        className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 transition-colors cursor-pointer"
                        onClick={() => navigate(`/university/${result.university.id}`)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-800 text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                                {result.university.name}
                              </h3>
                              <StatusPill status={result.university.status} />
                            </div>
                            <p className="text-xs text-gray-500 mb-2">
                              {[result.university.city, result.university.region].filter(Boolean).join(", ")}
                            </p>
                            <p className="text-xs text-gray-500">{result.reason}</p>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <div className="text-2xl font-bold text-blue-600">
                              {result.score.toFixed(1)}
                            </div>
                            <div className="text-xs text-gray-400">/ 10</div>
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <ScoreMeter
                            label="Difficulty (lower = easier)"
                            score={result.university.scores?.difficulty}
                            type="difficulty"
                            compact
                          />
                          <ScoreMeter
                            label="Scholarship"
                            score={result.university.scores?.scholarship}
                            type="scholarship"
                            compact
                          />
                          <ScoreMeter
                            label="Visa success"
                            score={result.university.scores?.visa}
                            type="visa"
                            compact
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {results.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg font-medium mb-2">No matches found</p>
                <p className="text-sm">Try adjusting your criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
