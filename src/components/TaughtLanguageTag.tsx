import type { TaughtLanguage } from "../data/schema";

interface Props {
  language: TaughtLanguage;
}

export default function TaughtLanguageTag({ language }: Props) {
  if (language === "English") {
    return (
      <span className="inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200">
        EN
      </span>
    );
  }
  return (
    <span className="inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-700 border border-red-200">
      IT
    </span>
  );
}
