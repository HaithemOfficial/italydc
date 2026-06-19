import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { universities } from "../data/index";
import { searchUniversities, getMatchedPrograms } from "../lib/search";
import type { University } from "../data/schema";
import GroupBadge from "../components/GroupBadge";
import StatusPill from "../components/StatusPill";
import { ExternalLink, ArrowUp, ArrowDown, ArrowUpDown, Search, RotateCcw, BookOpen } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TableFilters {
  group: "all" | "A" | "B" | "C";
  status: "all" | "complete" | "placeholder";
  hasEnglish: boolean | null;
}

type SortField = "name" | "group" | "city" | "status" | "programs" | "fee" | "deadline";
type SortDir = "asc" | "desc";

const DEFAULT_FILTERS: TableFilters = {
  group: "all",
  status: "complete",
  hasEnglish: null,
};

// ─── Data helpers ─────────────────────────────────────────────────────────────

function getFeeRange(uni: University): string {
  const groups = uni.tuitionFees?.fixedFeeByGroup;
  if (!groups || groups.length === 0) return "—";
  const amounts = groups
    .map(g => parseInt(g.total.replace(/[^0-9]/g, ""), 10))
    .filter(n => !isNaN(n));
  if (amounts.length === 0) return "—";
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  return min === max ? `€${min}` : `€${min}–${max}`;
}

/** Returns a sortable fee number (min fee), or Infinity for placeholders. */
function getFeeMin(uni: University): number {
  const groups = uni.tuitionFees?.fixedFeeByGroup;
  if (!groups || groups.length === 0) return Infinity;
  const amounts = groups
    .map(g => parseInt(g.total.replace(/[^0-9]/g, ""), 10))
    .filter(n => !isNaN(n));
  return amounts.length > 0 ? Math.min(...amounts) : Infinity;
}

function getKeyDeadline(uni: University): string {
  if (!uni.deadlines?.length) return "—";
  // Skip visa deadlines (identical across all unis). Show the university-specific application deadline.
  const nonVisa = uni.deadlines.filter(d => !d.what.toLowerCase().includes("visa"));
  const enrollment = nonVisa.find(d =>
    (d.what.toLowerCase().includes("enrol") ||
     d.what.toLowerCase().includes("application") ||
     d.what.toLowerCase().includes("pre-admission")) && d.until
  );
  const universitaly = nonVisa.find(d => d.what.toLowerCase().includes("universitaly") && d.until);
  const any = nonVisa.find(d => d.until);
  return (enrollment ?? universitaly ?? any)?.until ?? "—";
}

/** Returns a sortable deadline string (ISO-ish) for comparison. "—" entries sort last. */
function getDeadlineSortKey(uni: University): string {
  const d = getKeyDeadline(uni);
  if (d === "—") return "9999";
  // Extract year and month for rough sort: "November 30, 2026" → "2026-11"
  const months: Record<string, string> = {
    january: "01", february: "02", march: "03", april: "04",
    may: "05", june: "06", july: "07", august: "08",
    september: "09", october: "10", november: "11", december: "12",
  };
  const lower = d.toLowerCase();
  const year = lower.match(/\d{4}/)?.[0] ?? "9999";
  const month = Object.entries(months).find(([m]) => lower.includes(m))?.[1] ?? "99";
  return `${year}-${month}`;
}

// ─── Sort header ──────────────────────────────────────────────────────────────

function SortTh({
  field, label, sortField, sortDir, onSort, className = "",
}: {
  field: SortField;
  label: string;
  sortField: SortField;
  sortDir: SortDir;
  onSort: (f: SortField) => void;
  className?: string;
}) {
  const active = sortField === field;
  return (
    <th
      onClick={() => onSort(field)}
      className={`px-3 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer select-none whitespace-nowrap hover:bg-gray-100 transition-colors ${
        active ? "bg-indigo-50 text-indigo-700" : ""
      } ${className}`}
    >
      <span className="flex items-center gap-1">
        {label}
        {active ? (
          sortDir === "asc" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
        ) : (
          <ArrowUpDown className="w-3 h-3 opacity-30" />
        )}
      </span>
    </th>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function UniversityTable() {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<TableFilters>(DEFAULT_FILTERS);
  const [sortField, setSortField] = useState<SortField>("group");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  // "/" focuses search, Esc clears it
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === searchRef.current) {
        setQuery("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(d => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir(["programs"].includes(field) ? "desc" : "asc");
    }
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.group !== "all") count++;
    if (filters.status !== "all") count++;
    if (filters.hasEnglish !== null) count++;
    return count;
  }, [filters]);

  const displayed = useMemo(() => {
    let result = searchUniversities(query, universities);

    if (filters.group !== "all") result = result.filter(u => u.group === filters.group);
    if (filters.status !== "all") result = result.filter(u => u.status === filters.status);
    if (filters.hasEnglish === true) {
      result = result.filter(u =>
        u.programs?.some(p => p.taughtIn === "English") || !!u.languageRequirements?.english
      );
    }

    result = [...result].sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case "name":     cmp = a.name.localeCompare(b.name); break;
        case "group":    cmp = (a.group ?? "Z").localeCompare(b.group ?? "Z"); break;
        case "city":     cmp = (a.city ?? "").localeCompare(b.city ?? ""); break;
        case "status":   cmp = a.status.localeCompare(b.status); break;
        case "programs": cmp = (a.programs?.length ?? 0) - (b.programs?.length ?? 0); break;
        case "fee":      cmp = getFeeMin(a) - getFeeMin(b); break;
        case "deadline": cmp = getDeadlineSortKey(a).localeCompare(getDeadlineSortKey(b)); break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [query, filters, sortField, sortDir]);

  const resetAll = () => { setQuery(""); setFilters(DEFAULT_FILTERS); };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ── Page header ── */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center gap-4 flex-wrap">
        <div>
          <h1 className="text-base font-bold text-gray-900" style={{ fontFamily: "Playfair Display, serif" }}>
            Universities
          </h1>
          <p className="text-xs text-gray-500">
            All {universities.length} universities — search by name, city, group, or programme
          </p>
        </div>

        <div className="flex-1 max-w-sm ml-auto">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, city, or programme… (press / to focus)"
              className="w-full text-sm border border-gray-200 rounded-lg pl-8 pr-3 py-1.5 bg-white focus:outline-none focus:border-blue-400 placeholder:text-gray-400"
            />
          </div>
        </div>

        <span className="text-sm text-gray-500 whitespace-nowrap">
          <strong>{displayed.length}</strong> of {universities.length} shown
        </span>
      </div>

      {/* ── Filter toolbar ── */}
      <div className="bg-white border-b border-slate-200 px-6 py-2.5 flex items-center gap-3 flex-wrap">
        {/* Group chips */}
        <div className="flex items-center gap-1">
          {(["all", "A", "B", "C"] as const).map(g => (
            <button
              key={g}
              onClick={() => setFilters(f => ({ ...f, group: g }))}
              className={`text-xs px-2.5 py-1 rounded-full border font-semibold transition-colors ${
                filters.group === g
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50"
              }`}
            >
              {g === "all" ? "All groups" : `Group ${g}`}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-gray-200" />

        <select
          value={filters.status}
          onChange={e => setFilters(f => ({ ...f, status: e.target.value as TableFilters["status"] }))}
          className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:border-blue-400"
        >
          <option value="all">All statuses</option>
          <option value="complete">Full info</option>
          <option value="placeholder">Coming soon</option>
        </select>

        <button
          onClick={() => setFilters(f => ({ ...f, hasEnglish: f.hasEnglish === true ? null : true }))}
          className={`text-xs px-3 py-1.5 rounded-full border font-semibold transition-colors ${
            filters.hasEnglish === true
              ? "bg-indigo-600 text-white border-indigo-600"
              : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50"
          }`}
        >
          EN only
        </button>

        {(activeFilterCount > 0 || query) && (
          <button
            onClick={resetAll}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors ml-auto"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
            {activeFilterCount > 0 && (
              <span className="ml-0.5 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                {activeFilterCount}
              </span>
            )}
          </button>
        )}
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-20">
            <tr>
              <SortTh field="name" label="University" sortField={sortField} sortDir={sortDir} onSort={handleSort} />
              <SortTh field="city" label="Location" sortField={sortField} sortDir={sortDir} onSort={handleSort} className="w-[120px]" />
              <SortTh field="group" label="Group" sortField={sortField} sortDir={sortDir} onSort={handleSort} className="w-[76px]" />
              <SortTh field="programs" label="Programmes" sortField={sortField} sortDir={sortDir} onSort={handleSort} className="w-[110px]" />
              <SortTh field="fee" label="Fee range" sortField={sortField} sortDir={sortDir} onSort={handleSort} className="w-[110px]" />
              <SortTh field="deadline" label="App deadline" sortField={sortField} sortDir={sortDir} onSort={handleSort} className="w-[130px]" />
              <SortTh field="status" label="Status" sortField={sortField} sortDir={sortDir} onSort={handleSort} className="w-[96px]" />
              <th className="w-[52px] px-3 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Link</th>
            </tr>
          </thead>
          <tbody>
            {displayed.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-20 text-center text-gray-500">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="font-semibold text-gray-700 mb-1">No universities match</p>
                  <p className="text-sm">Try adjusting your filters or search term.</p>
                  <button onClick={resetAll} className="mt-3 text-blue-600 underline text-sm">
                    Clear all filters
                  </button>
                </td>
              </tr>
            ) : (
              displayed.map((uni, idx) => {
                const matchedPrograms = getMatchedPrograms(query, uni);
                const feeRange = getFeeRange(uni);
                const deadline = getKeyDeadline(uni);
                const programCount = uni.programs?.length ?? 0;

                return (
                  <tr
                    key={uni.id}
                    onClick={() => navigate(`/university/${uni.id}`)}
                    className={`cursor-pointer transition-colors border-b border-gray-100 group ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                    } hover:bg-indigo-50/50`}
                  >
                    {/* Name */}
                    <td className="px-3 py-2.5">
                      <div className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-700 transition-colors">
                        {uni.name}
                      </div>
                      {uni.shortName && (
                        <div className="text-xs text-gray-400 mt-0.5">{uni.shortName}</div>
                      )}
                      {/* Matched programme hint */}
                      {matchedPrograms.length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {matchedPrograms.slice(0, 2).map(p => (
                            <span
                              key={p}
                              className="inline-flex items-center gap-0.5 text-[10px] bg-blue-50 text-blue-600 border border-blue-100 rounded px-1.5 py-0.5 leading-tight"
                            >
                              <BookOpen className="w-2.5 h-2.5 flex-shrink-0" />
                              {p.length > 42 ? p.slice(0, 42) + "…" : p}
                            </span>
                          ))}
                          {matchedPrograms.length > 2 && (
                            <span className="text-[10px] text-blue-400">+{matchedPrograms.length - 2} more</span>
                          )}
                        </div>
                      )}
                    </td>

                    {/* Location */}
                    <td className="px-3 py-2.5 w-[120px]">
                      <div className="text-sm text-gray-700">{uni.city ?? "—"}</div>
                      {uni.region && <div className="text-xs text-gray-400">{uni.region}</div>}
                    </td>

                    {/* Group */}
                    <td className="px-3 py-2.5 w-[76px]">
                      <GroupBadge group={uni.group} size="sm" />
                    </td>

                    {/* Programmes count */}
                    <td className="px-3 py-2.5 w-[110px]">
                      {programCount > 0 ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-2.5 py-1">
                          <BookOpen className="w-3 h-3" />
                          {programCount} programmes
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>

                    {/* Fee range */}
                    <td className="px-3 py-2.5 w-[110px]">
                      {feeRange !== "—" ? (
                        <span className="text-sm font-medium text-gray-800">{feeRange}</span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>

                    {/* App deadline */}
                    <td className="px-3 py-2.5 w-[130px]">
                      {deadline !== "—" ? (
                        <span className="text-xs font-medium text-gray-700 leading-snug">{deadline}</span>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </td>

                    {/* Status */}
                    <td className="px-3 py-2.5 w-[96px]">
                      <StatusPill status={uni.status} />
                    </td>

                    {/* External link */}
                    <td className="px-3 py-2.5 w-[52px]" onClick={e => e.stopPropagation()}>
                      {uni.officialWebsite ? (
                        <a
                          href={uni.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Official website"
                          className="inline-flex items-center justify-center w-7 h-7 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
