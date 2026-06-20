import { useState } from "react";
import { universities } from "../data/index";
import type { University, ResidencePermitProcedure } from "../data/schema";
import { Link } from "react-router-dom";
import { Home, ExternalLink, ChevronDown, AlertTriangle, BadgeEuro, ListChecks, Heart, RefreshCw } from "lucide-react";

const FIELDS: { key: keyof NonNullable<University["visaAndArrival"]>; label: string }[] = [
  { key: "financialProof", label: "Financial Proof Required" },
  { key: "accommodation", label: "Accommodation" },
  { key: "healthInsurance", label: "Health Insurance" },
  { key: "residencePermit", label: "Residence Permit" },
  { key: "taxCode", label: "Tax Code (Codice Fiscale)" },
];

const completeUnis = universities.filter(u => u.status === "complete" && u.visaAndArrival);

function ResidencePermitSection({ proc }: { proc: ResidencePermitProcedure }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"issuance" | "ssn" | "renewal">("issuance");

  return (
    <div className="border-t border-gray-100">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full px-5 py-3.5 flex items-center justify-between text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-indigo-500" />
          Residence Permit — Full Step-by-Step Procedure
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="px-5 pb-6 space-y-5">

          {/* Costs table */}
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <BadgeEuro className="w-3.5 h-3.5 text-emerald-600" />
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Costs at a glance</p>
            </div>
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-3 py-2 text-left font-semibold text-gray-500">Item</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-500">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {proc.costs.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-3 py-2 text-gray-700 font-medium">{row.item}</td>
                      <td className="px-3 py-2 text-gray-600">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-1 p-1 bg-gray-100 rounded-lg w-fit">
            {(["issuance", "ssn", "renewal"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  tab === t ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t === "issuance" ? "A) First Issuance" : t === "ssn" ? "SSN Registration" : "B) Renewal"}
              </button>
            ))}
          </div>

          {/* A) First Issuance */}
          {tab === "issuance" && (
            <div className="space-y-3">
              {proc.firstIssuanceSteps.map((s, i) => (
                <div key={i} className="rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
                    <p className="text-xs font-bold text-gray-800">{s.step}</p>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">{s.detail}</p>
                    {s.warning && (
                      <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-md px-3 py-2 mt-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800 leading-relaxed">{s.warning}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SSN Registration */}
          {tab === "ssn" && (
            <div className="rounded-lg border border-blue-200 bg-blue-50 overflow-hidden">
              <div className="px-4 py-2.5 border-b border-blue-200 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-blue-600" />
                <p className="text-xs font-bold text-blue-800">SSN — National Health Service Registration</p>
              </div>
              <ul className="px-4 py-3 space-y-2.5">
                {proc.ssnNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-200 text-blue-700 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-xs text-blue-900 leading-relaxed">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* B) Renewal */}
          {tab === "renewal" && (
            <div className="space-y-3">
              <div className="rounded-lg border border-gray-200 px-4 py-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <RefreshCw className="w-3.5 h-3.5 text-indigo-500" />
                  <p className="text-xs font-bold text-gray-700">Overview</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{proc.renewal.overview}</p>
              </div>

              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
                  <p className="text-xs font-bold text-gray-800">Prerequisites — apply at least 60 days before expiry</p>
                </div>
                <ul className="px-4 py-3 space-y-2">
                  {proc.renewal.prerequisites.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                      <p className="text-xs text-gray-600 leading-relaxed">{req}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 px-4 py-3">
                <p className="text-xs font-bold text-gray-700 mb-1.5">Documents & remaining steps</p>
                <p className="text-xs text-gray-600 leading-relaxed">{proc.renewal.documentsNote}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

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

              {/* Standard fields */}
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

                {/* Detailed residence permit procedure (UNIBO and future unis) */}
                {va.residencePermitProcedure && (
                  <ResidencePermitSection proc={va.residencePermitProcedure} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
