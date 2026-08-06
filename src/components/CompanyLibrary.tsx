import { useMemo, useState } from "react";
import { COMPANIES, RESOURCE_TYPES, type BaseCompany, type ResourceCompany } from "../data";

type Props = {
  companies?: BaseCompany[];
  mode?: "industry" | "resource";
  onOpen: (c: BaseCompany) => void;
};

export default function CompanyLibrary({
  companies = COMPANIES,
  mode = "industry",
  onOpen,
}: Props) {
  const [active, setActive] = useState("全部");

  const filters = useMemo(() => {
    if (mode === "resource") {
      return ["全部", ...RESOURCE_TYPES.map((t) => t.label)];
    }
    const set = new Set<string>();
    companies.forEach((c) => c.tags.forEach((t) => set.add(t)));
    return ["全部", ...Array.from(set)];
  }, [companies, mode]);

  const list = useMemo(() => {
    if (active === "全部") return companies;
    if (mode === "resource") {
      const type = RESOURCE_TYPES.find((t) => t.label === active)?.key;
      return (companies as ResourceCompany[]).filter((c) => c.resourceType === type);
    }
    return companies.filter((c) => c.tags.includes(active));
  }, [active, companies, mode]);

  return (
    <div className="px-6 pb-16 sm:px-12 md:px-20 lg:px-28">
      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-[12px] font-medium transition-colors duration-200 ${
              active === f
                ? "bg-blue-500 text-white"
                : "bg-cream-pill text-gray-700 hover:text-gray-900"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      {list.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <button
              key={c.id}
              onClick={() => onOpen(c)}
              className="group block rounded-card border border-gray-100 bg-white p-5 text-left shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-card text-lg font-semibold text-white"
                  style={{ backgroundColor: c.color }}
                >
                  {c.initial}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-gray-900">
                    {c.name}
                  </div>
                  <div className="text-[12px] text-gray-500">{c.tags[0]}</div>
                </div>
              </div>

              <p className="mb-4 text-[13px] leading-relaxed text-gray-500">
                {c.desc}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blue-50 px-2.5 py-1 text-[12px] font-medium text-blue-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end border-t border-gray-100 pt-3 text-[12px] text-gray-500">
                <span className="inline-block text-blue-500 transition-transform duration-200 group-hover:translate-x-0.5">
                  查看详情 →
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-card border border-dashed border-gray-300 bg-white/60 px-6 py-14 text-center">
          <div className="text-2xl">📭</div>
          <p className="mt-3 text-[14px] font-medium text-gray-900">
            暂无公司信息
          </p>
          <p className="mt-1 text-[13px] text-gray-500">
            该分类正在持续收录中，欢迎后续补充。
          </p>
        </div>
      )}
    </div>
  );
}
