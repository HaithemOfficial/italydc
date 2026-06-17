import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Info } from "lucide-react";
import { processData } from "../data/general/process";
import SectionNav from "../components/SectionNav";

const SECTIONS = [
  { id: "groups", label: "Profile Groups" },
  { id: "ten-steps", label: "10-Step Path" },
  { id: "system", label: "Italian System" },
  { id: "recognition", label: "Qualification Recognition" },
];

export default function GeneralProcess() {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="bg-[#0B1A33] text-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <Link to="/" className="flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-4 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Explorer
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-[#C9A227]" />
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
              General Process Guide
            </h1>
          </div>
          <p className="text-blue-200 text-sm">
            Reference for El Nadjah agents — study pathways, groups, and Italian university system.
          </p>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm">
            General reference compiled from El Nadjah sources. Always confirm specifics on each university's official page — rules change frequently.
          </p>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <SectionNav sections={SECTIONS} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-14">

        {/* Profile Groups */}
        <section id="groups" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Profile Groups
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {processData.profileGroups.map(group => (
              <div
                key={group.group}
                className={`rounded-2xl border p-6 ${
                  group.group === "A"
                    ? "bg-green-50 border-green-200"
                    : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-sm font-bold px-3 py-1 rounded-full ${
                      group.group === "A"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : "bg-blue-100 text-blue-700 border border-blue-300"
                    }`}
                  >
                    {group.label}
                  </span>
                </div>
                <p className={`text-sm mb-4 leading-relaxed ${group.group === "A" ? "text-green-900" : "text-blue-900"}`}>
                  {group.description}
                </p>
                <ul className="space-y-2">
                  {group.characteristics.map((c, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${group.group === "A" ? "text-green-800" : "text-blue-800"}`}>
                      <span className="mt-0.5 flex-shrink-0">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 10 Steps */}
        <section id="ten-steps" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            The 10-Step Path to Study in Italy
          </h2>
          <div className="space-y-4">
            {processData.tenSteps.map(step => (
              <div key={step.number} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <span className="flex-shrink-0 w-9 h-9 bg-[#0B1A33] text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-800 text-sm">
            For detailed Algeria-specific visa requirements and document checklists,{" "}
            <Link to="/visa" className="underline font-semibold">
              see the Visa page →
            </Link>
          </div>
        </section>

        {/* Italian University System */}
        <section id="system" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            The Italian University System
          </h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">{processData.italianUniversitySystem.intro}</p>
          <div className="space-y-4">
            {processData.italianUniversitySystem.cycles.map(cycle => (
              <div key={cycle.cycle} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-[#0B1A33] text-white px-5 py-3">
                  <h3 className="font-bold text-base">{cycle.cycle}</h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-5 py-2 text-left font-semibold text-gray-600 border-b border-gray-100">Degree</th>
                      <th className="px-5 py-2 text-left font-semibold text-gray-600 border-b border-gray-100">Duration</th>
                      <th className="px-5 py-2 text-left font-semibold text-gray-600 border-b border-gray-100">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cycle.degrees.map((d, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-3 text-gray-800 font-medium border-b border-gray-100">{d.name}</td>
                        <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{d.duration}</td>
                        <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{d.credits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* Qualification Recognition */}
        <section id="recognition" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Foreign Qualification Recognition
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm font-medium leading-relaxed">
                {processData.foreignQualificationRecognition.legalBasis}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-3 text-sm">In practice, Italian universities require one of:</p>
              <div className="space-y-3">
                {processData.foreignQualificationRecognition.inPractice.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-800 text-xs leading-relaxed">
              {processData.foreignQualificationRecognition.note}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
