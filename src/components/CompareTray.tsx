import { Link } from "react-router-dom";
import type { University } from "../data/schema";
import { GitCompare, X } from "lucide-react";

interface Props {
  compareList: University[];
  onClear: () => void;
}

export default function CompareTray({ compareList, onClear }: Props) {
  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-500 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-shrink-0">
          <GitCompare className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-800 text-sm">
            Compare
            <span className="ml-1.5 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {compareList.length}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2 flex-1 flex-wrap">
          {compareList.map(uni => (
            <span
              key={uni.id}
              className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full"
            >
              {uni.shortName || uni.name}
            </span>
          ))}
          {compareList.length < 4 && (
            <span className="text-xs text-gray-400 italic">
              Add up to {4 - compareList.length} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onClear}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Clear all
          </button>
          <Link
            to="/compare"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Compare now
          </Link>
        </div>
      </div>
    </div>
  );
}
