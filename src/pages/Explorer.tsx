import { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import type { University, ProfileGroup, DataStatus } from "../data/schema";
import { universities } from "../data/index";
import { searchUniversities } from "../lib/search";
import SearchBar from "../components/SearchBar";
import UniversityCard from "../components/UniversityCard";
import CompareTray from "../components/CompareTray";

type SortKey = "difficulty" | "scholarship" | "visa" | "name";

interface Props {
  compareList: University[];
  onToggleCompare: (uni: University) => void;
}

interface Filters {
  group: ProfileGroup | "all";
  hasEnglish: boolean | null;
  status: DataStatus | "all";
}

const DEFAULT_FILTERS: Filters = {
  group: "all",
  hasEnglish: null,
  status: "all",
};

export default function Explorer({ compareList, onToggleCompare }: Props) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [filters, setFilters] = useState<Filters>({
    group: (searchParams.get("group") as ProfileGroup | "all") ?? "all",
    hasEnglish: null,
    status: (searchParams.get("status") as DataStatus | "all") ?? "all",
  });
  const [sortBy, setSortBy] = useState<SortKey>(
    (searchParams.get("sort") as SortKey) ?? "scholarship"
  );
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync URL params
  useEffect(() => {
    const params: Record<string, string> = {};
    if (query) params.q = query;
    if (filters.group !== "all") params.group = filters.group;
    if (filters.status !== "all") params.status = filters.status;
    if (sortBy !== "scholarship") params.sort = sortBy;
    setSearchParams(params, { replace: true });
  }, [query, filters, sortBy, setSearchParams]);

  // Keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
      e.preventDefault();
      document.querySelector<HTMLInputElement>('input[type="text"]')?.focus();
    }
    if (e.key === "Escape") {
      setQuery("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Filter and sort
  let filtered = searchUniversities(query, universities);

  if (filters.group !== "all") {
    filtered = filtered.filter(u => u.group === filters.group);
  }
  if (filters.status !== "all") {
    filtered = filtered.filter(u => u.status === filters.status);
  }
  if (filters.hasEnglish === true) {
    filtered = filtered.filter(u =>
      u.programs?.some(p => p.taughtIn === "English") || u.languageRequirements?.english
    );
  }

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "difficulty") {
      return (a.scores?.difficulty ?? 999) - (b.scores?.difficulty ?? 999);
    }
    if (sortBy === "scholarship") {
      return (b.scores?.scholarship ?? 0) - (a.scores?.scholarship ?? 0);
    }
    if (sortBy === "visa") {
      return (b.scores?.visa ?? 0) - (a.scores?.visa ?? 0);
    }
    return 0;
  });

  const hasActiveFilters =
    filters.group !== "all" || filters.status !== "all" || filters.hasEnglish !== null;

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  return (
    <div className="min-h-screen bg-[#F8F9FC]" style={{ paddingBottom: compareList.length > 0 ? "80px" : "0" }}>
      {/* Hero */}
      <div className="bg-[#0B1A33] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              El Nadjah Study Abroad Explorer
            </h1>
            <p className="text-blue-200 mb-8 text-sm">
              Italian universities · Algeria visa guide · Profile matching — internal tool for El Nadjah Agency agents
            </p>
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search universities by name, city, or group… (press / to focus)"
            />
            <p className="text-xs text-blue-300 mt-2">
              Press <kbd className="bg-blue-900 px-1.5 py-0.5 rounded text-blue-200 font-mono">/</kbd> to focus search &nbsp;·&nbsp;
              <kbd className="bg-blue-900 px-1.5 py-0.5 rounded text-blue-200 font-mono">Esc</kbd> to clear
            </p>
          </div>
        </div>
      </div>

      {/* Controls bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(v => !v)}
              className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg border transition-colors ${
                filtersOpen || hasActiveFilters
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {[filters.group !== "all", filters.status !== "all", filters.hasEnglish !== null].filter(Boolean).length}
                </span>
              )}
            </button>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortKey)}
              className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:border-blue-400"
            >
              <option value="scholarship">Scholarship odds</option>
              <option value="visa">Visa success</option>
              <option value="difficulty">Difficulty (easier first)</option>
              <option value="name">Name (A–Z)</option>
            </select>
          </div>

          <span className="text-sm text-gray-500 ml-auto">
            Showing <strong>{filtered.length}</strong> of {universities.length} universities
          </span>
        </div>

        {/* Filter panel */}
        {filtersOpen && (
          <div className="border-t border-gray-100 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Group</p>
                <div className="flex gap-2">
                  {(["all", "A", "B", "C"] as const).map(g => (
                    <button
                      key={g}
                      onClick={() => setFilters(f => ({ ...f, group: g }))}
                      className={`text-sm px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                        filters.group === g
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-200 text-gray-600 bg-white hover:bg-blue-50"
                      }`}
                    >
                      {g === "all" ? "All groups" : `Group ${g}`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Status</p>
                <div className="flex gap-2">
                  {(["all", "complete", "placeholder"] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setFilters(f => ({ ...f, status: s }))}
                      className={`text-sm px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                        filters.status === s
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-200 text-gray-600 bg-white hover:bg-blue-50"
                      }`}
                    >
                      {s === "all" ? "All" : s === "complete" ? "Full info" : "Coming soon"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Language</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilters(f => ({ ...f, hasEnglish: null }))}
                    className={`text-sm px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                      filters.hasEnglish === null
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-200 text-gray-600 bg-white hover:bg-blue-50"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilters(f => ({ ...f, hasEnglish: true }))}
                    className={`text-sm px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                      filters.hasEnglish === true
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-gray-200 text-gray-600 bg-white hover:bg-blue-50"
                    }`}
                  >
                    Has English programmes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-xl font-bold text-gray-700 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              No university matches "{query}"
            </h2>
            <p className="text-gray-500">Try a shorter term or reset your filters.</p>
            <button
              onClick={() => { setQuery(""); resetFilters(); }}
              className="mt-4 text-blue-600 underline text-sm"
            >
              Clear search and filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(uni => (
              <UniversityCard
                key={uni.id}
                university={uni}
                isInCompare={compareList.some(u => u.id === uni.id)}
                onToggleCompare={onToggleCompare}
                onClick={() => navigate(`/university/${uni.id}`)}
              />
            ))}
          </div>
        )}
      </div>

      <CompareTray compareList={compareList} onClear={() => {
        compareList.forEach(u => onToggleCompare(u));
      }} />
    </div>
  );
}
