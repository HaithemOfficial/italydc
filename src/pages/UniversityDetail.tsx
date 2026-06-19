import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Globe, Copy, CheckCheck } from "lucide-react";
import { getUniversityById } from "../data/index";
import GroupBadge from "../components/GroupBadge";
import StatusPill from "../components/StatusPill";
import SectionNav from "../components/SectionNav";
import TaughtLanguageTag from "../components/TaughtLanguageTag";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programmes" },
  { id: "requirements", label: "Requirements" },
  { id: "fees", label: "Fees" },
  { id: "scholarships", label: "Scholarships" },
  { id: "deadlines", label: "Deadlines" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Admission Process" },
  { id: "notes", label: "Important Notes" },
];

function renderWithLinks(text: string): React.ReactNode {
  const urlRegex = /https?:\/\/[^\s),]+/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = urlRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const url = match[0].replace(/[.,;:]+$/, "");
    parts.push(
      <a key={match.index} href={url} target="_blank" rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800 break-all">
        {url}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

function PlaceholderSection({ website }: { website?: string }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-800">
      <p className="font-medium">
        Detailed info coming soon.{" "}
        {website && (
          <>
            Visit the{" "}
            <a href={website} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900">
              official website
            </a>{" "}
            for current requirements and deadlines.
          </>
        )}
      </p>
    </div>
  );
}

export default function UniversityDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");
  const [copied, setCopied] = useState(false);

  const uni = id ? getUniversityById(id) : undefined;

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [uni]);

  if (!uni) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-gray-700" style={{ fontFamily: "Playfair Display, serif" }}>University not found</h1>
        <button onClick={() => navigate(-1)} className="text-blue-600 underline">
          Back to Universities
        </button>
      </div>
    );
  }

  const isComplete = uni.status === "complete";

  const copyClientSummary = () => {
    const keyDeadline = uni.deadlines?.find(d => d.what.toLowerCase().includes("visa") || d.what.toLowerCase().includes("universitaly"))?.until;
    const feeRange = uni.tuitionFees?.fixedFeeByGroup?.map(f => f.total).join(" – ");

    const text = [
      `${uni.name}${uni.shortName ? ` (${uni.shortName})` : ""}`,
      `Group: ${uni.group ?? "N/A"} | City: ${uni.city ?? "N/A"}, ${uni.region ?? "N/A"}`,
      `Status: ${uni.status === "complete" ? "Full info available" : "Info coming soon"}`,
      "",
      keyDeadline ? `Key deadline: ${keyDeadline}` : "",
      feeRange ? `Fees: ${feeRange}` : "",
      uni.officialWebsite ? `Website: ${uni.officialWebsite}` : "",
    ].filter(Boolean).join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F172A] to-[#1e1b4b] text-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-indigo-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Universities
          </button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <GroupBadge group={uni.group} />
                <StatusPill status={uni.status} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                {uni.name}
              </h1>
              {uni.shortName && (
                <p className="text-indigo-300 text-sm font-medium mb-1">{uni.shortName}</p>
              )}
              {(uni.city || uni.region) && (
                <p className="text-slate-300 text-sm">
                  {[uni.city, uni.region].filter(Boolean).join(", ")}
                </p>
              )}
              {uni.summary && (
                <p className="text-slate-200 text-sm mt-3 max-w-2xl leading-relaxed">{uni.summary}</p>
              )}
            </div>

            <div className="flex-shrink-0">
              <div className="flex gap-2 flex-wrap">
                {uni.officialWebsite && (
                  <a
                    href={uni.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Official site
                  </a>
                )}
                <button
                  onClick={copyClientSummary}
                  className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  {copied ? <CheckCheck className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy summary"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky section nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <SectionNav sections={SECTIONS} activeSection={activeSection} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

        {/* 1 — Overview */}
        <section id="overview" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Overview</h2>
          {uni.summary ? (
            <p className="text-gray-700 leading-relaxed">{uni.summary}</p>
          ) : (
            <PlaceholderSection website={uni.officialWebsite} />
          )}
        </section>

        {/* 2 — Programmes */}
        <section id="programs" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Programmes</h2>
          {!isComplete || !uni.programs?.length ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">Programme Name</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">Level</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">Language</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">Test Required</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">Notes</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">Apply</th>
                  </tr>
                </thead>
                <tbody>
                  {uni.programs.map((prog, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{prog.name}</td>
                      <td className="px-4 py-3 border-b border-gray-100">
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">{prog.level}</span>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-100"><TaughtLanguageTag language={prog.taughtIn} /></td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{prog.testRequired ?? "—"}</td>
                      <td className="px-4 py-3 text-gray-500 border-b border-gray-100 text-xs max-w-xs">{prog.notes ?? "—"}</td>
                      <td className="px-4 py-3 border-b border-gray-100">
                        {prog.applicationLink ? (
                          <a href={prog.applicationLink} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">Apply →</a>
                        ) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* 3 — Requirements */}
        <section id="requirements" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Requirements</h2>
          {!isComplete ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="space-y-6">
              {uni.academicRequirements && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-800 mb-3">Academic Requirements</h3>
                  <dl className="space-y-2 text-sm">
                    {uni.academicRequirements.bachelorYearsOfSchooling && (
                      <div><dt className="font-semibold text-gray-600">Bachelor's</dt><dd className="text-gray-700 ml-4">{uni.academicRequirements.bachelorYearsOfSchooling}</dd></div>
                    )}
                    {uni.academicRequirements.masterRequirements && (
                      <div><dt className="font-semibold text-gray-600">Master's</dt><dd className="text-gray-700 ml-4">{uni.academicRequirements.masterRequirements}</dd></div>
                    )}
                    {uni.academicRequirements.gapFilling && (
                      <div>
                        <dt className="font-semibold text-gray-600">Gap-filling options</dt>
                        <ul className="ml-4 mt-1 list-disc list-outside space-y-1 text-gray-700">
                          {uni.academicRequirements.gapFilling.map((g, i) => <li key={i}>{g}</li>)}
                        </ul>
                      </div>
                    )}
                    {uni.academicRequirements.notes && (
                      <div className="bg-amber-50 border border-amber-200 rounded p-3 text-amber-800 text-xs mt-2">{uni.academicRequirements.notes}</div>
                    )}
                  </dl>
                </div>
              )}
              {uni.languageRequirements && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-800 mb-3">Language Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {uni.languageRequirements.english && (
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                          <TaughtLanguageTag language="English" /> English
                          {uni.languageRequirements.english.minLevel && <span className="text-xs text-gray-500">min {uni.languageRequirements.english.minLevel}</span>}
                        </h4>
                        {uni.languageRequirements.english.moiAccepted === true && (
                          <p className="text-xs text-green-700 bg-green-50 border border-green-200 rounded px-2 py-1 mb-2">MOI (Medium of Instruction) letter accepted</p>
                        )}
                        {uni.languageRequirements.english.moiAccepted === false && (
                          <p className="text-xs text-red-700 bg-red-50 border border-red-300 rounded px-2 py-1 mb-2 font-semibold">MOI (Medium of Instruction) letter NOT accepted — a verifiable certificate is required</p>
                        )}
                        <ul className="text-sm text-gray-700 space-y-1">
                          {uni.languageRequirements.english.acceptedCerts.map((c, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-green-500 mt-0.5">✓</span>
                              {c.name}{c.minScore && <span className="text-gray-400 ml-1">≥ {c.minScore}</span>}
                            </li>
                          ))}
                        </ul>
                        {uni.languageRequirements.english.notes && <p className="text-xs text-gray-500 mt-2 leading-relaxed">{uni.languageRequirements.english.notes}</p>}
                      </div>
                    )}
                    {uni.languageRequirements.italian && (
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                          <TaughtLanguageTag language="Italian" /> Italian
                          {uni.languageRequirements.italian.minLevel && <span className="text-xs text-gray-500">min {uni.languageRequirements.italian.minLevel}</span>}
                        </h4>
                        {uni.languageRequirements.italian.testIfNoCert && (
                          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-1 mb-2">University test available if no certificate</p>
                        )}
                        {uni.languageRequirements.italian.acceptedCerts.length > 0 ? (
                          <ul className="text-sm text-gray-700 space-y-1">
                            {uni.languageRequirements.italian.acceptedCerts.map((c, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-green-500 mt-0.5">✓</span>
                                {c.name}{c.minScore && <span className="text-gray-400 ml-1">≥ {c.minScore}</span>}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500 italic">No specific certificate list — check official website.</p>
                        )}
                        {uni.languageRequirements.italian.notes && <p className="text-xs text-gray-500 mt-2 leading-relaxed">{uni.languageRequirements.italian.notes}</p>}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 4 — Fees */}
        <section id="fees" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Tuition Fees</h2>
          {!isComplete || !uni.tuitionFees ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="space-y-4">
              {uni.tuitionFees.fixedFeeByGroup && (
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-200">Student Group</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-200">Total Fee</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-200">Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uni.tuitionFees.fixedFeeByGroup.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{row.group}</td>
                          <td className="px-4 py-3 font-bold text-green-700 border-b border-gray-100">{row.total}</td>
                          <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{row.instalments ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                {uni.tuitionFees.regionalTax && (
                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Regional Tax</p>
                    <p className="text-sm text-gray-700">{uni.tuitionFees.regionalTax}</p>
                  </div>
                )}
                {uni.tuitionFees.stampDuty && (
                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Stamp Duty</p>
                    <p className="text-sm text-gray-700">{uni.tuitionFees.stampDuty}</p>
                  </div>
                )}
              </div>
              {uni.tuitionFees.iseeOption && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-xs font-semibold text-blue-700 uppercase mb-1">ISEE Option</p>
                  <p className="text-sm text-blue-800">{uni.tuitionFees.iseeOption}</p>
                </div>
              )}
              {uni.tuitionFees.notes && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm">{renderWithLinks(uni.tuitionFees.notes)}</div>
              )}
            </div>
          )}
        </section>

        {/* 5 — Scholarships */}
        <section id="scholarships" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Scholarships</h2>
          {!isComplete || !uni.scholarships?.length ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {uni.scholarships.map((s, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="font-bold text-gray-800 mb-1 text-sm">{s.name}</h3>
                  {s.provider && <p className="text-xs text-gray-500 mb-1">{s.provider}</p>}
                  {s.type && <span className="inline-block text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded mb-2">{s.type}</span>}
                  {s.notes && <p className="text-xs text-gray-600 leading-relaxed mb-2">{renderWithLinks(s.notes)}</p>}
                  {s.link && <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">Learn more →</a>}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 6 — Deadlines */}
        <section id="deadlines" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Deadlines</h2>
          {!isComplete || !uni.deadlines?.length ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl border border-gray-200 overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-200">What</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-200">From</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-200">Until</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 border-b border-gray-200">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {uni.deadlines.map((d, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{d.what}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{d.from ?? "—"}</td>
                      <td className="px-4 py-3 border-b border-gray-100">
                        <span className={`font-semibold ${d.until && d.until !== "No deadline" ? "text-red-600" : "text-gray-600"}`}>{d.until ?? "—"}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 border-b border-gray-100 text-xs">{d.notes ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* 7 — Documents */}
        <section id="documents" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Documents</h2>
          {!isComplete || !uni.documents ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-3 text-base">For Admission</h3>
                <ul className="space-y-2">
                  {uni.documents.admission.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>{doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-3 text-base">For Enrolment</h3>
                <ul className="space-y-2">
                  {uni.documents.enrolment.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>{doc}
                    </li>
                  ))}
                </ul>
              </div>
              {uni.documents.notes && (
                <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm">{uni.documents.notes}</div>
              )}
            </div>
          )}
        </section>

        {/* 8 — Admission Process */}
        <section id="process" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Admission Process</h2>
          {!isComplete || !uni.admissionProcess ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="space-y-6">
              {uni.admissionProcess.nonEuResidingAbroad && (
                <div>
                  <h3 className="font-bold text-gray-700 mb-3 text-base">For Non-EU Students Residing Abroad</h3>
                  <div className="space-y-3">
                    {uni.admissionProcess.nonEuResidingAbroad.map((step, i) => (
                      <div key={i} className="flex gap-3 bg-white rounded-xl border border-gray-200 p-4">
                        <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{step.title}</p>
                          {step.detail && <p className="text-gray-600 text-xs mt-1 leading-relaxed">{renderWithLinks(step.detail)}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {uni.admissionProcess.euOrResidentInItaly && (
                <div>
                  <h3 className="font-bold text-gray-700 mb-3 text-base">For EU Students / Residents in Italy</h3>
                  <div className="space-y-3">
                    {uni.admissionProcess.euOrResidentInItaly.map((step, i) => (
                      <div key={i} className="flex gap-3 bg-white rounded-xl border border-gray-200 p-4">
                        <span className="flex-shrink-0 w-7 h-7 bg-gray-500 text-white text-sm font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{step.title}</p>
                          {step.detail && <p className="text-gray-600 text-xs mt-1 leading-relaxed">{renderWithLinks(step.detail)}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {uni.admissionProcess.notes && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-800 text-sm">{uni.admissionProcess.notes}</div>
              )}
            </div>
          )}
        </section>

        {/* 9 — Important Notes */}
        <section id="notes" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>Important Notes</h2>
          {!isComplete || !uni.importantNotes?.length ? (
            <PlaceholderSection website={uni.officialWebsite} />
          ) : (
            <div className="space-y-3">
              {uni.importantNotes.map((note, i) => (
                <div key={i} className="flex gap-3 bg-amber-50 border border-amber-300 rounded-xl p-4">
                  <span className="text-amber-500 flex-shrink-0 font-bold text-lg leading-none">!</span>
                  <p className="text-amber-900 text-sm leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
