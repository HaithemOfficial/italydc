import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import {
  Table2, BookOpen, FileText, Home, Menu, Map, GraduationCap,
} from "lucide-react";
import UniversityDetail from "./pages/UniversityDetail";
import UniversityTable from "./pages/UniversityTable";
import GeneralProcess from "./pages/GeneralProcess";
import Visa from "./pages/Visa";
import AfterArrival from "./pages/AfterArrival";
import Scholarships from "./pages/Scholarships";
import NotFound from "./pages/NotFound";

const MAIN_NAV = [
  { to: "/universities", icon: Table2, label: "Universities" },
  { to: "/process", icon: BookOpen, label: "Process" },
  { to: "/visa", icon: FileText, label: "Visa Guide" },
  { to: "/scholarships", icon: GraduationCap, label: "Scholarships" },
] as const;

function navClass({ isActive }: { isActive: boolean }) {
  return `relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
    isActive
      ? "bg-indigo-500/15 text-white border-l-[3px] border-indigo-400 pl-[9px]"
      : "text-slate-400 hover:text-white hover:bg-white/5 border-l-[3px] border-transparent pl-[9px]"
  }`;
}

function Sidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[220px] bg-[#0F172A] flex flex-col z-50 transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="px-4 py-5 border-b border-white/8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Map className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-none" style={{ fontFamily: "Playfair Display, serif" }}>
                El Nadjah
              </div>
              <div className="text-indigo-400 text-[10px] leading-none mt-0.5 font-medium tracking-wide">
                Study Abroad
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-3 mb-2">
            Navigation
          </p>
          <div className="space-y-0.5">
            {MAIN_NAV.map(({ to, icon: Icon, label }) => (
              <NavLink key={to} to={to} onClick={onClose} className={navClass}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* After Arrival — bottom section */}
        <div className="px-2 py-3 border-t border-white/8">
          <NavLink to="/arrival" onClick={onClose} className={navClass}>
            <Home className="w-4 h-4 flex-shrink-0" />
            <span>After Arrival</span>
          </NavLink>
          <div className="mt-3 px-3">
            <p className="text-[10px] text-slate-600 font-medium">Internal Tool</p>
            <p className="text-[10px] text-slate-600">El Nadjah Agency</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function App() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "Raleway, sans-serif" }}>
        <Sidebar
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        <div className="lg:ml-[220px] min-h-screen flex flex-col">
          {/* Mobile top bar */}
          <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-[#0F172A] text-white">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-1.5 rounded hover:bg-white/10"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="text-sm font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
              El Nadjah
            </span>
          </div>

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/universities" replace />} />
              <Route path="/universities" element={<UniversityTable />} />
              <Route path="/university/:id" element={<UniversityDetail />} />
              <Route path="/process" element={<GeneralProcess />} />
              <Route path="/visa" element={<Visa />} />
              <Route path="/arrival" element={<AfterArrival />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
