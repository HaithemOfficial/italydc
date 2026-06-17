import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4 bg-[#F8F9FC]">
      <div className="text-8xl font-bold text-gray-200" style={{ fontFamily: "Playfair Display, serif" }}>
        404
      </div>
      <h1 className="text-2xl font-bold text-gray-700" style={{ fontFamily: "Playfair Display, serif" }}>
        Page not found
      </h1>
      <p className="text-gray-500 max-w-sm">
        This page doesn't exist. You may have followed a broken link or typed the URL incorrectly.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-[#0B1A33] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#13264A] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Explorer
      </Link>
    </div>
  );
}
