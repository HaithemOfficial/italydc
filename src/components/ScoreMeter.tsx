interface Props {
  label: string;
  score?: number;
  type: "difficulty" | "scholarship" | "visa";
  compact?: boolean;
}

function getBarColor(score: number, type: "difficulty" | "scholarship" | "visa"): string {
  if (type === "difficulty") {
    // Inverted: low score = green (easier), high score = red (harder)
    if (score <= 3) return "bg-green-500";
    if (score <= 5) return "bg-yellow-400";
    if (score <= 7) return "bg-orange-400";
    return "bg-red-500";
  } else {
    // Higher = greener
    if (score >= 9) return "bg-green-500";
    if (score >= 7) return "bg-emerald-400";
    if (score >= 5) return "bg-yellow-400";
    return "bg-orange-400";
  }
}

export default function ScoreMeter({ label, score, type, compact = false }: Props) {
  if (score === undefined || score === null) {
    return (
      <div className={compact ? "mb-1" : "mb-2"}>
        <div className="flex justify-between items-center mb-0.5">
          <span className="text-xs text-gray-500 truncate pr-1">{label}</span>
          <span className="text-xs font-semibold text-gray-400">—</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full" />
      </div>
    );
  }

  const percentage = (score / 10) * 100;
  const barColor = getBarColor(score, type);

  return (
    <div className={compact ? "mb-1" : "mb-2"}>
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-xs text-gray-500 truncate pr-1">{label}</span>
        <span className="text-xs font-bold text-gray-700">{score}/10</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
