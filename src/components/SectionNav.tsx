interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
  activeSection?: string;
}

export default function SectionNav({ sections, activeSection }: Props) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex flex-wrap gap-1 py-2">
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
            activeSection === section.id
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
