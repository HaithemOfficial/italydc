import type { ProfileGroup } from "../data/schema";

interface Props {
  group?: ProfileGroup;
  size?: "sm" | "md";
}

const GROUP_CONFIG = {
  A: {
    label: "Group A",
    className: "bg-green-100 text-green-700 border border-green-200",
    tooltip: "Best for weaker profiles (Bac 10–13, no IELTS). Focus: admission + scholarship + visa.",
  },
  B: {
    label: "Group B",
    className: "bg-blue-100 text-blue-700 border border-blue-200",
    tooltip: "Best for good profiles (Bac 14+, IELTS 6.0+). Stronger universities.",
  },
  C: {
    label: "Group C",
    className: "bg-purple-100 text-purple-700 border border-purple-200",
    tooltip: "For strong profiles only. More selective, limited scholarship info.",
  },
};

export default function GroupBadge({ group, size = "md" }: Props) {
  const config = group ? GROUP_CONFIG[group] : null;
  const sizeClass = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-2.5 py-1";

  if (!config) {
    return (
      <span className={`inline-flex items-center rounded-full font-semibold bg-gray-100 text-gray-500 border border-gray-200 ${sizeClass}`}>
        No group
      </span>
    );
  }

  return (
    <span
      title={config.tooltip}
      className={`inline-flex items-center rounded-full font-semibold cursor-help ${config.className} ${sizeClass}`}
    >
      {config.label}
    </span>
  );
}
