import type { University } from "../data/schema";
import GroupBadge from "./GroupBadge";
import ScoreMeter from "./ScoreMeter";
import StatusPill from "./StatusPill";
import { MapPin, GitCompare } from "lucide-react";

interface Props {
  university: University;
  isInCompare: boolean;
  onToggleCompare: (uni: University) => void;
  onClick: () => void;
}

export default function UniversityCard({ university, isInCompare, onToggleCompare, onClick }: Props) {
  const { name, shortName, city, region, group, scores, status, summary } = university;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative flex flex-col"
    >
      {/* Header */}
      <div className="p-4 pb-3 flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-blue-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
              {name}
            </h3>
            {shortName && (
              <span className="text-xs text-gray-400 font-medium">{shortName}</span>
            )}
          </div>
          <StatusPill status={status} />
        </div>

        {(city || region) && (
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{[city, region].filter(Boolean).join(", ")}</span>
          </div>
        )}

        {summary && (
          <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{summary}</p>
        )}

        <div className="mb-3">
          <GroupBadge group={group} size="sm" />
        </div>

        {/* Score meters */}
        <div className="space-y-1">
          <ScoreMeter
            label="Difficulty (lower = easier)"
            score={scores?.difficulty}
            type="difficulty"
            compact
          />
          <ScoreMeter
            label="Scholarship odds"
            score={scores?.scholarship}
            type="scholarship"
            compact
          />
          <ScoreMeter
            label="Visa success"
            score={scores?.visa}
            type="visa"
            compact
          />
        </div>
      </div>

      {/* Compare button */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-100">
        <button
          onClick={e => {
            e.stopPropagation();
            onToggleCompare(university);
          }}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
            isInCompare
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <GitCompare className="w-3.5 h-3.5" />
          {isInCompare ? "Added to compare" : "Compare"}
        </button>
      </div>
    </div>
  );
}
