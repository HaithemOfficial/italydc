import { Link } from "react-router-dom";
import type { University } from "../data/schema";
import GroupBadge from "../components/GroupBadge";
import { X, ArrowLeft } from "lucide-react";

interface Props {
  compareList: University[];
  onRemove: (id: string) => void;
}

function getCellValue(uni: University, field: string): string {
  if (uni.status === "placeholder") {
    const alwaysAvailable = ["group", "website"];
    if (!alwaysAvailable.includes(field)) return "coming soon";
  }
  switch (field) {
    case "group": return uni.group ?? "—";
    case "englishCert": {
      const certs = uni.languageRequirements?.english?.acceptedCerts;
      if (!certs?.length) return "—";
      const ielts = certs.find(c => c.name.toLowerCase().includes("ielts"));
      return ielts ? `IELTS ${ielts.minScore ?? "B2+"}` : `B2 (${certs[0].name})`;
    }
    case "appDeadline": {
      const nonVisa = uni.deadlines?.filter(d => !d.what.toLowerCase().includes("visa")) ?? [];
      const d = nonVisa.find(d =>
        (d.what.toLowerCase().includes("enrol") || d.what.toLowerCase().includes("application") || d.what.toLowerCase().includes("pre-admission")) && d.until
      ) ?? nonVisa.find(d => d.what.toLowerCase().includes("universitaly") && d.until)
        ?? nonVisa.find(d => d.until);
      return d?.until ?? "—";
    }
    case "fee": {
      const fees = uni.tuitionFees?.fixedFeeByGroup;
      if (!fees?.length) return "—";
      const amounts = fees.map(f => f.total);
      return amounts.length === 1 ? amounts[0] : `${amounts[0]} – ${amounts[amounts.length - 1]}`;
    }
    case "website": return uni.officialWebsite ?? "—";
    default: return "—";
  }
}

const ROWS = [
  { key: "group", label: "Profile Group" },
  { key: "englishCert", label: "English Cert (min)" },
  { key: "appDeadline", label: "Application Deadline" },
  { key: "fee", label: "Fee Range" },
  { key: "website", label: "Official Website" },
];

export default function Compare({ compareList, onRemove }: Props) {
  if (compareList.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-2xl font-bold text-gray-700" style={{ fontFamily: "Playfair Display, serif" }}>
          No universities selected
        </h1>
        <p className="text-gray-500">Use the "Compare" button on any university card to add it here.</p>
        <Link to="/" className="flex items-center gap-2 text-blue-600 underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Explorer
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="bg-[#0B1A33] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/" className="flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-4 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Explorer
          </Link>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
            University Comparison
          </h1>
          <p className="text-blue-200 text-sm mt-1">Side-by-side view of {compareList.length} universities</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="text-left px-4 py-3 bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wider w-44 border-b border-gray-200">
                Attribute
              </th>
              {compareList.map(uni => (
                <th key={uni.id} className="px-4 py-3 bg-white border-b border-gray-200 text-left min-w-[200px]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-gray-800 text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                        {uni.shortName || uni.name}
                      </p>
                      <p className="text-xs text-gray-500">{[uni.city, uni.region].filter(Boolean).join(", ")}</p>
                      <div className="mt-1">
                        <GroupBadge group={uni.group} size="sm" />
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(uni.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                      title="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, ri) => (
              <tr key={row.key} className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-3 text-sm font-medium text-gray-600 border-b border-gray-100">
                  {row.label}
                </td>
                {compareList.map(uni => {
                  const val = getCellValue(uni, row.key);
                  const isComingSoon = val === "coming soon";
                  return (
                    <td key={uni.id} className="px-4 py-3 text-sm border-b border-gray-100">
                      {row.key === "website" ? (
                        uni.officialWebsite ? (
                          <a
                            href={uni.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-xs"
                          >
                            {uni.officialWebsite}
                          </a>
                        ) : "—"
                      ) : (
                        <span className={isComingSoon ? "text-gray-400 italic" : "text-gray-800"}>
                          {val}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
