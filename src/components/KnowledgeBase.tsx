import { useMemo, useState } from "react";
import { Database, FileText, Video, MessageCircle, type LucideIcon } from "lucide-react";
import { KNOWLEDGE_CATS, KNOWLEDGE_ITEMS } from "../data";

const ICONS: Record<string, LucideIcon> = {
  dataset: Database,
  paper: FileText,
  tutorial: Video,
  discuss: MessageCircle,
};

export default function KnowledgeBase() {
  const [active, setActive] = useState<string | null>(null);

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    KNOWLEDGE_ITEMS.forEach((i) => (m[i.cat] = (m[i.cat] ?? 0) + 1));
    return m;
  }, []);

  const list = useMemo(
    () =>
      active ? KNOWLEDGE_ITEMS.filter((i) => i.cat === active) : KNOWLEDGE_ITEMS,
    [active]
  );

  return (
    <div className="px-6 pb-16 sm:px-12 md:px-20 lg:px-28">
      {/* Quick-entry cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {KNOWLEDGE_CATS.map((cat) => {
          const Icon = ICONS[cat.key] ?? FileText;
          return (
            <button
              key={cat.key}
              onClick={() => setActive(active === cat.key ? null : cat.key)}
              className={`flex flex-col items-start gap-2 rounded-card border bg-white p-5 text-left shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift ${
                active === cat.key ? "border-blue-400" : "border-gray-100"
              }`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-card bg-blue-50 text-blue-500">
                <Icon size={18} strokeWidth={2} />
              </span>
              <span className="text-[13px] font-medium text-gray-900">
                {cat.label}
              </span>
              <span className="text-[12px] text-gray-500">
                {counts[cat.key] ?? 0} 篇
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile-friendly chip filter bar */}
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActive(null)}
          className={`shrink-0 rounded-full px-4 py-2 text-[12px] font-medium transition-colors duration-200 ${
            active === null
              ? "bg-blue-500 text-white"
              : "bg-cream-pill text-gray-700 hover:text-gray-900"
          }`}
        >
          全部
        </button>
        {KNOWLEDGE_CATS.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`shrink-0 rounded-full px-4 py-2 text-[12px] font-medium transition-colors duration-200 ${
              active === cat.key
                ? "bg-blue-500 text-white"
                : "bg-cream-pill text-gray-700 hover:text-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Knowledge list */}
      <div className="overflow-hidden rounded-card border border-gray-100 bg-white shadow-soft">
        {list.map((item, idx) => {
          const cat = KNOWLEDGE_CATS.find((c) => c.key === item.cat);
          const Icon = cat ? ICONS[cat.key] ?? FileText : FileText;
          return (
            <a
              key={idx}
              href="#/"
              className="flex items-center gap-4 border-b border-gray-100 px-5 py-4 transition-colors duration-200 last:border-b-0 hover:bg-cream"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-card bg-blue-50 text-blue-500">
                <Icon size={16} strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[14px] font-medium text-gray-900">
                  {item.title}
                </div>
                <div className="mt-0.5 text-[12px] text-gray-500">
                  {item.source} · {item.date}
                </div>
              </div>
              <span className="shrink-0 text-[12px] text-gray-500">
                {item.reads.toLocaleString()} 阅读
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
