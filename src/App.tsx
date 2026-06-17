import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import type { University } from "./data/schema";
import Explorer from "./pages/Explorer";
import UniversityDetail from "./pages/UniversityDetail";
import Compare from "./pages/Compare";
import ProfileMatcher from "./pages/ProfileMatcher";
import GeneralProcess from "./pages/GeneralProcess";
import Visa from "./pages/Visa";
import NotFound from "./pages/NotFound";
import CompareTray from "./components/CompareTray";
import { GitCompare, Map, BookOpen, FileText, Target } from "lucide-react";

function NavBar({ compareCount }: { compareCount: number }) {
  return (
    <header className="bg-[#0B1A33] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 font-bold text-white hover:text-[#D9B84A] transition-colors">
            <Map className="w-5 h-5 text-[#C9A227]" />
            <span className="text-sm font-bold hidden sm:inline" style={{ fontFamily: "Playfair Display, serif" }}>
              El Nadjah Explorer
            </span>
            <span className="text-sm font-bold sm:hidden" style={{ fontFamily: "Playfair Display, serif" }}>
              EN Explorer
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-white/10 text-white" : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Map className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Explorer</span>
            </NavLink>

            <NavLink
              to="/compare"
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-colors relative ${
                  isActive ? "bg-white/10 text-white" : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Compare</span>
              {compareCount > 0 && (
                <span className="ml-0.5 bg-[#C9A227] text-[#0B1A33] text-xs font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {compareCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/match"
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-white/10 text-white" : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Target className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Profile Match</span>
            </NavLink>

            <NavLink
              to="/process"
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-white/10 text-white" : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Process</span>
            </NavLink>

            <NavLink
              to="/visa"
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-white/10 text-white" : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Visa</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [compareList, setCompareList] = useState<University[]>([]);

  const toggleCompare = (uni: University) => {
    setCompareList(prev => {
      if (prev.find(u => u.id === uni.id)) return prev.filter(u => u.id !== uni.id);
      if (prev.length >= 4) return prev;
      return [...prev, uni];
    });
  };

  const clearCompare = () => setCompareList([]);

  const removeFromCompare = (id: string) => {
    setCompareList(prev => prev.filter(u => u.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8F9FC]" style={{ fontFamily: "Raleway, sans-serif" }}>
        <NavBar compareCount={compareList.length} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Explorer
                  compareList={compareList}
                  onToggleCompare={toggleCompare}
                />
              }
            />
            <Route
              path="/university/:id"
              element={
                <UniversityDetail
                  compareList={compareList}
                  onToggleCompare={toggleCompare}
                />
              }
            />
            <Route
              path="/compare"
              element={
                <Compare
                  compareList={compareList}
                  onRemove={removeFromCompare}
                />
              }
            />
            <Route path="/match" element={<ProfileMatcher />} />
            <Route path="/process" element={<GeneralProcess />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <CompareTray compareList={compareList} onClear={clearCompare} />
      </div>
    </BrowserRouter>
  );
}
