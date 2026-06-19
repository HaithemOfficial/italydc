import { useState, useEffect, useCallback } from "react";
import {
  AlertTriangle, Info, ChevronDown, ChevronUp,
  ExternalLink, Printer, RotateCcw, Search, CheckSquare, Square,
} from "lucide-react";
import SectionNav from "../components/SectionNav";
import {
  REFERENCE_YEAR_BANNER,
  guideData,
  playbookData,
} from "../data/scholarships";

// ─── Shared banner ────────────────────────────────────────────────────────────

function RefYearBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-amber-800 text-sm">{REFERENCE_YEAR_BANNER}</p>
      </div>
    </div>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline underline-offset-2 inline-flex items-center gap-1"
    >
      {children}
      <ExternalLink className="w-3 h-3 flex-shrink-0" />
    </a>
  );
}

// ─── GUIDE TAB ────────────────────────────────────────────────────────────────

const GUIDE_SECTIONS = [
  { id: "g-layers", label: "3 Layers" },
  { id: "g-isee", label: "ISEE Parificato" },
  { id: "g-layer1", label: "Layer 1 — DSU" },
  { id: "g-layer2", label: "Layer 2 — University" },
  { id: "g-layer3", label: "Layer 3 — MAECI" },
  { id: "g-agencies", label: "Agency Directory" },
  { id: "g-links", label: "Key Links" },
  { id: "g-sources", label: "Sources" },
];

function GuideTab() {
  const [activeSection, setActiveSection] = useState("g-layers");
  const [agencySearch, setAgencySearch] = useState("");

  const filteredAgencies = guideData.regionalAgencies.filter(
    (a) =>
      a.region.toLowerCase().includes(agencySearch.toLowerCase()) ||
      a.agency.toLowerCase().includes(agencySearch.toLowerCase())
  );

  // IntersectionObserver for sticky nav sync
  useEffect(() => {
    const ids = GUIDE_SECTIONS.map((s) => s.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div>
      {/* Sticky section nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <SectionNav sections={GUIDE_SECTIONS} activeSection={activeSection} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

        {/* 3 Layers */}
        <section id="g-layers" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-1 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            The 3 Ways to Pay Less (or Study Free)
          </h2>
          <p className="text-sm text-gray-500 mb-4">Layers 1 and 2 stack for most students. Layer 3 is mainly graduate-level.</p>

          {/* Visa money callout */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800 font-medium">{guideData.visaWarning}</p>
          </div>

          <div className="space-y-4">
            {guideData.layers.map((layer) => (
              <div key={layer.num} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0B1A33] text-white text-sm font-bold flex items-center justify-center">
                    {layer.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm mb-2">{layer.source}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Run by</p>
                        <p className="text-xs text-gray-700">{layer.runBy}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Best for</p>
                        <p className="text-xs text-gray-700">{layer.bestFor}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-3 py-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Based on</p>
                        <p className="text-xs text-gray-700">{layer.basedOn}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{layer.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ISEE Parificato */}
        <section id="g-isee" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            ISEE Parificato — Universal How-To
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
            <p className="text-sm text-gray-700 mb-4">{guideData.layer1.iseeParificato.intro}</p>
            <ol className="space-y-3">
              {guideData.layer1.iseeParificato.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#D4A843] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-800 font-semibold">{guideData.layer1.iseeParificato.bottleneckWarning}</p>
          </div>
        </section>

        {/* Layer 1 detail */}
        <section id="g-layer1" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            {guideData.layer1.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">What the student gets (if "idoneo")</p>
              <ul className="space-y-2">
                {guideData.layer1.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">Income gate</p>
              <p className="text-sm text-blue-900 mb-3">{guideData.layer1.incomeGate}</p>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">Merit</p>
              <p className="text-sm text-blue-900">{guideData.layer1.meritNote}</p>
            </div>
          </div>

          {/* Timing trap */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{guideData.layer1.timingWarning}</p>
          </div>

          {/* Steps */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Steps</p>
            <ol className="space-y-3">
              {guideData.layer1.steps.map((s) => (
                <li key={s.num} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0B1A33] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {s.num}
                  </span>
                  {s.text}
                </li>
              ))}
            </ol>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Documents (regional)</p>
            <ul className="space-y-2">
              {guideData.layer1.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#D4A843] flex-shrink-0 mt-0.5">·</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Layer 2 */}
        <section id="g-layer2" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            {guideData.layer2.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4">{guideData.layer2.intro}</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {guideData.layer2.forms.map((form, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{form.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{form.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex items-start gap-2">
            <Info className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-indigo-800">{guideData.layer2.practicalNote}</p>
          </div>
        </section>

        {/* Layer 3 MAECI */}
        <section id="g-layer3" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            {guideData.layer3.title}
          </h2>
          <div className="bg-white rounded-xl border border-[#D4A843] p-5 shadow-sm">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="text-center px-4 py-3 bg-[#0B1A33] rounded-lg">
                <p className="text-2xl font-bold text-[#D4A843]">{guideData.layer3.amount}</p>
                <p className="text-xs text-gray-300 mt-0.5">{guideData.layer3.duration}</p>
              </div>
              <div className="flex-1 min-w-[200px]">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Also includes</p>
                <ul className="space-y-1">
                  {guideData.layer3.alsoIncludes.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#D4A843] flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Levels (AY 2026/27)</p>
                <p className="text-gray-700">{guideData.layer3.levels}</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Deadline</p>
                <p className="text-gray-700 font-semibold">{guideData.layer3.deadline}</p>
                <p className="text-gray-500 text-xs mt-0.5">Extra docs by {guideData.layer3.extraDocsDeadline}</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Language</p>
                <p className="text-gray-700">{guideData.layer3.language}</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Apply</p>
                <ExtLink href={guideData.layer3.applyUrl}>studyinitaly.esteri.it</ExtLink>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">{guideData.layer3.decisionNote}</p>
          </div>
        </section>

        {/* Regional Agency Directory */}
        <section id="g-agencies" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Regional Agency Directory
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Always match the exact university, not just the region. Some regions have multiple agencies by city/university.
            Master list: <ExtLink href={guideData.andisu.url}>{guideData.andisu.label}</ExtLink>
          </p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Search */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Filter by region or agency name…"
                value={agencySearch}
                onChange={(e) => setAgencySearch(e.target.value)}
                className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              {agencySearch && (
                <button onClick={() => setAgencySearch("")} className="text-xs text-gray-400 hover:text-gray-600">
                  Clear
                </button>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 text-xs uppercase tracking-wider">Region</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 text-xs uppercase tracking-wider">Agency</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 text-xs uppercase tracking-wider">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAgencies.map((agency, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100 whitespace-nowrap">{agency.region}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">
                        {agency.agency}
                        {agency.note && <span className="text-xs text-gray-400 block">{agency.note}</span>}
                      </td>
                      <td className="px-4 py-3 border-b border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {agency.links.map((link, j) => (
                            <ExtLink key={j} href={link.url}>{link.label}</ExtLink>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredAgencies.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-4 py-8 text-center text-sm text-gray-400">
                        No agencies match "{agencySearch}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Links */}
        <section id="g-links" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Key National Links
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <ul className="space-y-3">
              {guideData.keyLinks.map((link, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] flex-shrink-0" />
                  <ExtLink href={link.url}>{link.label}</ExtLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sources */}
        <section id="g-sources" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Sources — Learn More
          </h2>
          <div className="space-y-4">
            {guideData.sources.map((group, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="font-semibold text-gray-900 text-sm mb-1">{group.layer}</p>
                <p className="text-xs text-gray-500 mb-3">{group.description}</p>
                <ul className="space-y-2">
                  {group.links.map((link, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-gray-300">→</span>
                      <ExtLink href={link.url}>{link.label}</ExtLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// ─── PLAYBOOK TAB ─────────────────────────────────────────────────────────────

const PLAYBOOK_SECTIONS = [
  { id: "p-intro", label: "First Conversation" },
  { id: "p-phases", label: "Phases" },
  { id: "p-docs", label: "Master Docs" },
  { id: "p-cards", label: "Quick Cards" },
  { id: "p-maeci", label: "MAECI" },
  { id: "p-mistakes", label: "Killer Mistakes" },
  { id: "p-links", label: "Agent Links" },
  { id: "p-sources", label: "Sources" },
];

function PhaseAccordion({
  phase,
  checked,
  onToggleStep,
}: {
  phase: typeof playbookData.phases[0];
  checked: Record<string, boolean>;
  onToggleStep: (phaseId: string, idx: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const completedCount = phase.steps.filter((_, i) => checked[`${phase.id}-${i}`]).length;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm">{phase.title}</p>
          <p className="text-xs text-gray-500 mt-0.5">{phase.timing}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            completedCount === phase.steps.length
              ? "bg-green-100 text-green-700"
              : completedCount > 0
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-100 text-gray-500"
          }`}>
            {completedCount}/{phase.steps.length}
          </span>
          {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>
      {open && (
        <div className="border-t border-gray-100 px-5 py-4 space-y-3">
          {phase.steps.map((step, idx) => {
            const key = `${phase.id}-${idx}`;
            const isChecked = !!checked[key];
            return (
              <button
                key={idx}
                onClick={() => onToggleStep(phase.id, idx)}
                className={`w-full flex items-start gap-3 text-left rounded-lg px-3 py-2 transition-colors ${
                  step.warning
                    ? "bg-orange-50 hover:bg-orange-100 border border-orange-200"
                    : "hover:bg-gray-50"
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                )}
                <span className={`text-sm leading-relaxed ${
                  isChecked ? "line-through text-gray-400" : step.warning ? "text-orange-800 font-medium" : "text-gray-700"
                }`}>
                  {step.warning && (
                    <span className="inline-block mr-1 text-orange-500" aria-hidden>⚠</span>
                  )}
                  {step.text}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PlaybookTab() {
  const [activeSection, setActiveSection] = useState("p-intro");
  // checked[`${phaseId}-${stepIdx}`] = boolean
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleToggleStep = useCallback((phaseId: string, idx: number) => {
    const key = `${phaseId}-${idx}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const [docChecked, setDocChecked] = useState<Record<number, boolean>>({});

  const handlePrint = () => window.print();

  // IntersectionObserver for sticky nav sync
  useEffect(() => {
    const ids = PLAYBOOK_SECTIONS.map((s) => s.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div>
      {/* Sticky section nav + print/reset */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 py-2 flex-wrap">
            <div className="flex-1 min-w-0">
              <SectionNav sections={PLAYBOOK_SECTIONS} activeSection={activeSection} />
            </div>
            <div className="flex gap-2 flex-shrink-0 print:hidden">
              <button
                onClick={() => { setChecked({}); setDocChecked({}); }}
                className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                title="Reset all checkboxes"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 text-xs font-medium text-white bg-[#0B1A33] hover:bg-[#1E3A66] px-3 py-1.5 rounded-lg transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12 print:py-4 print:space-y-8">

        {/* First Conversation */}
        <section id="p-intro" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            First Conversation — Set Expectations
          </h2>
          <div className="bg-[#0B1A33] rounded-xl p-5 mb-4">
            <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3">Say this to every client, up front</p>
            <ol className="space-y-3">
              {playbookData.firstConversationPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#D4A843] text-[#0B1A33] text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{playbookData.trackNote}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {playbookData.tracks.map((track, i) => (
                <div key={i} className={`rounded-lg px-4 py-3 border ${i === 0 ? "bg-blue-50 border-blue-200" : "bg-purple-50 border-purple-200"}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${i === 0 ? "text-blue-600" : "text-purple-600"}`}>
                    {track.level}
                  </p>
                  <p className="text-sm text-gray-700">{track.plan}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section id="p-phases" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Client Journey — Phase by Phase
          </h2>
          {/* Per-client tracking note — for future platform integration */}
          {/* TODO: wire checked state to main management platform per-client record */}
          <p className="text-xs text-gray-400 mb-4">Checklist state is in-session only. Click to expand a phase.</p>
          <div className="space-y-3">
            {playbookData.phases.map((phase) => (
              <PhaseAccordion
                key={phase.id}
                phase={phase}
                checked={checked}
                onToggleStep={handleToggleStep}
              />
            ))}
          </div>
        </section>

        {/* Master Document Checklist */}
        <section id="p-docs" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Master Document Checklist
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-[#0B1A33] text-white px-5 py-3">
              <span className="font-semibold text-sm">Collect from the client</span>
            </div>
            <div className="divide-y divide-gray-100">
              {playbookData.masterDocuments.map((doc, i) => (
                <button
                  key={i}
                  onClick={() => setDocChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className={`w-full flex items-start gap-3 px-5 py-3.5 text-left transition-colors hover:bg-gray-50 ${
                    doc.warning ? "bg-orange-50 hover:bg-orange-100" : ""
                  }`}
                >
                  {docChecked[i] ? (
                    <CheckSquare className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Square className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${docChecked[i] ? "line-through text-gray-400" : doc.warning ? "text-orange-800 font-medium" : "text-gray-700"}`}>
                    {doc.warning && <span className="mr-1 text-orange-500" aria-hidden>⚠</span>}
                    {doc.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Cards */}
        <section id="p-cards" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Quick Cards — Current Universities
          </h2>
          <p className="text-xs text-gray-400 mb-4">Reference dates AY 2025/26 — confirm on each agency's portal.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {playbookData.quickCards.map((card, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col">
                <div className="mb-3">
                  <p className="font-bold text-gray-900 text-sm">{card.name}</p>
                  <p className="text-xs text-gray-500">{card.agency} · {card.region}</p>
                </div>
                <div className="space-y-2 flex-1">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Portal</p>
                    <ExtLink href={card.portalUrl}>{card.portalLabel}</ExtLink>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Application deadline</p>
                    <p className="text-xs text-gray-700">{card.deadline}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">ISEE/ISPE caps</p>
                    <p className="text-xs text-gray-700">{card.iseeCaps}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Benefits / notes</p>
                    <p className="text-xs text-gray-700">{card.benefits}</p>
                  </div>
                  {card.partnerCaf && (
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Partner CAF</p>
                      <p className="text-xs text-gray-700">{card.partnerCaf}</p>
                    </div>
                  )}
                </div>
                {card.extraLinks && card.extraLinks.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                    {card.extraLinks.map((link, j) => (
                      <ExtLink key={j} href={link.url}>{link.label}</ExtLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* MAECI */}
        <section id="p-maeci" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            MAECI Government Scholarship — Master's / PhD Only
          </h2>
          <div className="bg-white rounded-xl border border-[#D4A843] p-5 shadow-sm">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="text-center px-4 py-3 bg-[#0B1A33] rounded-lg">
                <p className="text-2xl font-bold text-[#D4A843]">{playbookData.maeci.amount}</p>
                <p className="text-xs text-gray-300 mt-0.5">{playbookData.maeci.duration}</p>
              </div>
              <div className="flex-1 min-w-[180px]">
                <span className="inline-block text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded mb-2">
                  {playbookData.maeci.eligibleNote}
                </span>
                <p className="text-sm text-gray-700 mb-1">{playbookData.maeci.levels}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Deadline</p>
                <p className="font-semibold text-gray-800">{playbookData.maeci.deadline}</p>
                <p className="text-xs text-gray-500">Extra docs: {playbookData.maeci.extraDocsDeadline}</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Language</p>
                <p className="text-gray-700">{playbookData.maeci.language}</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2 sm:col-span-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Apply online</p>
                <ExtLink href={playbookData.maeci.applyUrl}>{playbookData.maeci.applyUrl}</ExtLink>
                <span className="text-xs text-gray-500 ml-2">— up to 3 course choices</span>
              </div>
            </div>
          </div>
        </section>

        {/* Killer Mistakes */}
        <section id="p-mistakes" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Mistakes That Kill a Scholarship
          </h2>
          <div className="bg-white rounded-xl border border-red-200 overflow-hidden">
            <div className="bg-red-50 px-5 py-3 border-b border-red-100">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wider">Prevent these — every single one</p>
            </div>
            <div className="divide-y divide-red-50">
              {playbookData.killerMistakes.map((mistake) => (
                <div key={mistake.num} className="flex items-start gap-4 px-5 py-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-700 text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {mistake.num}
                  </span>
                  <p className="text-sm text-gray-700">{mistake.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Links */}
        <section id="p-links" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Links a DC Agent Needs
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <ul className="space-y-3">
              {playbookData.agentLinks.map((link, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] flex-shrink-0" />
                  <ExtLink href={link.url}>{link.label}</ExtLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sources */}
        <section id="p-sources" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Sources — Where to Verify
          </h2>
          <div className="space-y-4">
            {playbookData.sources.map((group, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="font-semibold text-gray-900 text-sm mb-1">{group.layer}</p>
                <p className="text-xs text-gray-500 mb-3">{group.description}</p>
                <ul className="space-y-2">
                  {group.links.map((link, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-gray-300">→</span>
                      <ExtLink href={link.url}>{link.label}</ExtLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

type Tab = "guide" | "playbook";

export default function Scholarships() {
  const [activeTab, setActiveTab] = useState<Tab>("guide");

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Page header */}
      <div className="bg-[#0B1A33] text-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
            Scholarships — Italy · Algeria
          </h1>
          <p className="text-blue-200 text-sm">
            Regional DSU (Layer 1) · University Reductions (Layer 2) · MAECI Government Scholarship (Layer 3)
          </p>
        </div>
      </div>

      {/* Reference-year banner */}
      <RefYearBanner />

      {/* Tab switcher */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex">
          {(["guide", "playbook"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-all ${
                activeTab === tab
                  ? "border-[#D4A843] text-[#0B1A33]"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
              }`}
            >
              {tab === "guide" ? "Guide" : "Agent Playbook"}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "guide" ? <GuideTab /> : <PlaybookTab />}

      {/* Print styles */}
      <style>{`
        @media print {
          aside, .print\\:hidden { display: none !important; }
          body { background: white !important; }
          .bg-\\[\\#0B1A33\\] { background: #0B1A33 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .bg-\\[\\#D4A843\\] { background: #D4A843 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .shadow-sm, .shadow { box-shadow: none !important; }
          section { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
