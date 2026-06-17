import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Info } from "lucide-react";
import { visaData } from "../data/general/visa";
import SectionNav from "../components/SectionNav";

const SECTIONS = [
  { id: "deadlines", label: "Key Deadlines" },
  { id: "financial", label: "Financial Requirements" },
  { id: "embassy", label: "Embassy & VFS Process" },
  { id: "checklist", label: "Document Checklist" },
  { id: "permit", label: "Permit of Stay" },
  { id: "fees", label: "VFS Fees" },
];

export default function Visa() {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="bg-[#0B1A33] text-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <Link to="/" className="flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-4 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Explorer
          </Link>
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
            Algeria Study Visa Guide
          </h1>
          <p className="text-blue-200 text-sm">
            Italian Embassy in Algeria · VFS Global Algeria · Permit of Stay
          </p>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm">
            Compiled from official Italian Embassy / VFS Global Algeria sources. Fees, dates, and requirements change — always confirm on the Embassy and VFS Global websites before advising a client.
          </p>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <SectionNav sections={SECTIONS} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

        {/* Key Deadlines */}
        <section id="deadlines" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Key Deadlines
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-xl border border-red-200 p-5">
              <p className="text-xs font-semibold text-red-500 uppercase mb-1">AY 2026/27</p>
              <p className="text-2xl font-bold text-red-700">{visaData.keyDeadlines.ay2627}</p>
              <p className="text-xs text-gray-500 mt-1">Visa application deadline</p>
            </div>
            <div className="bg-white rounded-xl border border-orange-200 p-5">
              <p className="text-xs font-semibold text-orange-500 uppercase mb-1">AY 2027/28</p>
              <p className="text-2xl font-bold text-orange-700">{visaData.keyDeadlines.ay2728}</p>
              <p className="text-xs text-gray-500 mt-1">Visa application deadline</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <ul className="space-y-2">
              {visaData.keyDeadlines.notes.map((note, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Financial Requirements */}
        <section id="financial" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Financial Requirements
          </h2>
          <div className="space-y-4">
            {[
              { figure: visaData.financialRequirements.figure1, color: "blue", num: 1 },
              { figure: visaData.financialRequirements.figure2, color: "indigo", num: 2 },
              { figure: visaData.financialRequirements.figure3, color: "purple", num: 3 },
            ].map(({ figure, color, num }) => (
              <div key={num} className={`bg-white rounded-xl border border-${color}-100 p-5`}>
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 bg-${color}-100 text-${color}-700 rounded-full text-xs font-bold flex items-center justify-center`}>
                    {num}
                  </span>
                  <div>
                    <p className={`text-2xl font-bold text-${color}-700 mb-1`}>{figure.amount}</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">{figure.description}</p>
                    <p className="text-xs text-gray-400 italic">Source: {figure.source}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{visaData.financialRequirements.warningNote}</p>
            </div>
          </div>
        </section>

        {/* Embassy & VFS Process */}
        <section id="embassy" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Embassy &amp; VFS Process
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <ul className="space-y-3">
              {visaData.embassyAndVfs.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#0B1A33] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Document Checklist */}
        <section id="checklist" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Document Checklist
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
            <div className="bg-[#0B1A33] text-white px-5 py-3 flex items-center justify-between">
              <span className="font-semibold">Required Documents for Study Visa</span>
              <a
                href={visaData.documentChecklist.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-200 hover:text-white underline"
              >
                Download official checklist →
              </a>
            </div>
            <div className="divide-y divide-gray-100">
              {visaData.documentChecklist.items.map(item => (
                <div key={item.num} className="flex gap-4 px-5 py-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-[#C9A227] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                    {item.detail && <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{item.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{visaData.documentChecklist.note}</p>
          </div>
        </section>

        {/* Permit of Stay */}
        <section id="permit" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Permit of Stay (Permesso di Soggiorno)
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <ul className="space-y-2">
                {visaData.permitOfStay.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm">Payments on delivery to post office</h3>
              <div className="space-y-2">
                {visaData.permitOfStay.payments.map((payment, i) => (
                  <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{payment.split(":")[0]}</span>
                    <span className="font-bold text-gray-800">{payment.split(":")[1]?.trim()}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between text-sm py-2 font-bold text-gray-900 border-t-2 border-gray-200 mt-2">
                  <span>Total</span>
                  <span>≈ €100.46</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VFS Fees */}
        <section id="fees" className="scroll-mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            VFS Global Algeria Fees
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700 text-sm">Visa Fees</h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-5 py-3 text-left font-semibold text-gray-600 border-b border-gray-100">Charge Type</th>
                    <th className="px-5 py-3 text-left font-semibold text-gray-600 border-b border-gray-100">EUR</th>
                    <th className="px-5 py-3 text-left font-semibold text-gray-600 border-b border-gray-100">DZD</th>
                  </tr>
                </thead>
                <tbody>
                  {visaData.vfsFees.visaFees.map((fee, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 text-gray-800 border-b border-gray-100">
                        {fee.chargeType}
                        {fee.chargeType === "Long Stay (Study)" && (
                          <span className="ml-2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">
                            Students
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3 font-semibold text-gray-800 border-b border-gray-100">{fee.amountEur}</td>
                      <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{fee.amountDzd !== "Free" ? `${fee.amountDzd} DZD` : "Free"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700 text-sm">VFS Global Service Charge</h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-5 py-3 text-left font-semibold text-gray-600 border-b border-gray-100">Charge Type</th>
                    <th className="px-5 py-3 text-left font-semibold text-gray-600 border-b border-gray-100">EUR</th>
                    <th className="px-5 py-3 text-left font-semibold text-gray-600 border-b border-gray-100">DZD</th>
                  </tr>
                </thead>
                <tbody>
                  {visaData.vfsFees.serviceFees.map((fee, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 text-gray-800 border-b border-gray-100">{fee.chargeType}</td>
                      <td className="px-5 py-3 font-semibold text-gray-800 border-b border-gray-100">{fee.amountEur}</td>
                      <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{fee.amountDzd} DZD</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm">Notes</h3>
              <ul className="space-y-2">
                {visaData.vfsFees.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
