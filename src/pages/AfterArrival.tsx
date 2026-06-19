import { universities } from "../data/index";
import type { University } from "../data/schema";
import { Link } from "react-router-dom";
import { Home, ExternalLink } from "lucide-react";

const FIELDS: { key: keyof NonNullable<University["visaAndArrival"]>; label: string }[] = [
  { key: "financialProof", label: "Financial Proof Required" },
  { key: "accommodation", label: "Accommodation" },
  { key: "healthInsurance", label: "Health Insurance" },
  { key: "residencePermit", label: "Residence Permit" },
  { key: "taxCode", label: "Tax Code (Codice Fiscale)" },
];

const completeUnis = universities.filter(u => u.status === "complete" && u.visaAndArrival);

export default function AfterArrival() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Page header */}
      <div className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="flex items-center gap-3">
          <Home className="w-5 h-5 text-[#0B1A33]" />
          <div>
            <h1 className="text-base font-bold text-gray-900" style={{ fontFamily: "Playfair Display, serif" }}>
              After Arrival
            </h1>
            <p className="text-xs text-gray-500">What to do once you arrive in Italy — per university</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">

        {/* General intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h2 className="font-bold text-blue-900 mb-2 text-sm">General steps for all students</h2>
          <ol className="space-y-1.5 text-sm text-blue-800 list-decimal list-inside">
            <li>Request your <strong>residence permit (permesso di soggiorno)</strong> within 8 working days of arrival at the local Questura (Ufficio Stranieri) or via a Sportello Amico post office.</li>
            <li>Obtain your <strong>Codice Fiscale</strong> (Italian tax code) at the Agenzia delle Entrate — required for any contract, bank account, or enrollment step.</li>
            <li>Arrange <strong>health insurance</strong> if not already covered by a bilateral agreement between Italy and Algeria.</li>
            <li>Contact your university's International Welcome Service with your passport (with visa and entry stamp) and your DoV or CIMEA documents.</li>
            <li>Complete enrollment at the university and collect your student card.</li>
          </ol>
          <p className="text-xs text-blue-700 mt-3">
            For Algeria-specific visa requirements and document checklists, see the{" "}
            <Link to="/visa" className="underline font-semibold">Visa Guide</Link>.
          </p>
        </div>

        {/* Per-university cards */}
        {completeUnis.map(uni => {
          const va = uni.visaAndArrival!;
          return (
            <div key={uni.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1e1b4b] text-white px-5 py-4 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                    {uni.name}
                  </h2>
                  {uni.city && (
                    <p className="text-indigo-300 text-xs mt-0.5">{uni.city}, {uni.region}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/university/${uni.id}`}
                    className="text-xs text-indigo-300 hover:text-white underline"
                  >
                    View full profile
                  </Link>
                  {uni.officialWebsite && (
                    <a
                      href={uni.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white"
                      title="Official website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Fields */}
              <div className="divide-y divide-gray-100">
                {FIELDS.map(({ key, label }) => {
                  const val = va[key];
                  if (!val || typeof val !== "string") return null;
                  return (
                    <div key={key} className="px-5 py-4 grid md:grid-cols-[200px_1fr] gap-2">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide pt-0.5">{label}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{val}</p>
                    </div>
                  );
                })}
                {va.notes && (
                  <div className="px-5 py-4 bg-amber-50">
                    <p className="text-xs text-amber-800 leading-relaxed">{va.notes}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
