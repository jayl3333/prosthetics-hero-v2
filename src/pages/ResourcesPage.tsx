import { useMemo, useState } from "react";
import ApplyModal from "../components/ApplyModal";
import {
  RESOURCE_COMPANIES,
  RESOURCE_TYPES,
  type BaseCompany,
  type ResourceCompany,
} from "../data";

type Props = {
  onOpen: (c: BaseCompany) => void;
};

const TYPE_LABELS: Record<string, string> = {
  data: "数据",
  scene: "场景",
  device: "设备",
  talent: "人力",
};

export default function ResourcesPage({ onOpen }: Props) {
  const [applyOpen, setApplyOpen] = useState(false);
  const [active, setActive] = useState("全部");

  const filters = ["全部", ...RESOURCE_TYPES.map((t) => t.label)];

  const list = useMemo(() => {
    if (active === "全部") return RESOURCE_COMPANIES;
    const type = RESOURCE_TYPES.find((t) => t.label === active)?.key;
    return RESOURCE_COMPANIES.filter((c) => c.resourceType === type);
  }, [active]);

  return (
    <div className="rpg-dark-section min-h-screen">
      {/* Header */}
      <div className="relative z-10 px-6 pb-8 pt-28 sm:px-12 sm:pt-32 md:px-20 lg:px-28">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-[#d4a843]" />
          <span className="font-cormorant text-[13px] font-medium uppercase tracking-[0.2em] text-[#b8962f]">
            Resource Library
          </span>
        </div>
        <h1 className="font-serif-display mt-3 text-[1.625rem] font-semibold leading-tight text-[#1c1c1c] sm:text-[2rem]">
          资源公司库
        </h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#6b6b6b]">
          连接数据、场景、设备、人力等产业资源方。汇聚具身数据产业上下游资源能力，帮助团队快速找到合作方。
        </p>
      </div>

      {/* Filter chips + Apply button */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 pb-8 sm:px-12 md:px-20 lg:px-28">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-[12px] font-medium transition-all duration-200 ${
                active === f ? "rpg-gold-chip-active" : "rpg-gold-chip"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          onClick={() => setApplyOpen(true)}
          className="group inline-flex items-center gap-2 rounded-full border border-[#d4a843]/50 bg-[#d4a843]/5 px-5 py-2 text-[12px] font-medium text-[#b8962f] transition-all duration-200 hover:border-[#d4a843] hover:bg-[#d4a843]/10"
        >
          申请入驻
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>

      {/* Gold accent divider */}
      <div className="rpg-gold-line mx-6 sm:mx-12 md:mx-20 lg:mx-28" />

      {/* Cards grid */}
      <div className="relative z-10 px-6 py-10 sm:px-12 md:px-20 lg:px-28">
        {list.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c, idx) => {
              const rc = c as ResourceCompany;
              return (
                <button
                  key={c.id}
                  onClick={() => onOpen(c)}
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const rect = el.getBoundingClientRect();
                    el.style.setProperty(
                      "--mx",
                      `${((e.clientX - rect.left) / rect.width) * 100}%`
                    );
                    el.style.setProperty(
                      "--my",
                      `${((e.clientY - rect.top) / rect.height) * 100}%`
                    );
                  }}
                  className="rpg-gold-card rpg-fade-up group rounded-[3px] p-5 text-left"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {/* Type badge + initial */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-[3px] text-[15px] font-serif-display font-semibold"
                        style={{
                          backgroundColor: "rgba(212,168,67,0.1)",
                          color: "#b8962f",
                          border: "1px solid rgba(212,168,67,0.3)",
                        }}
                      >
                        {c.initial}
                      </span>
                      <span className="rounded-[2px] border border-[#d4a843]/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#6b6b6b]">
                        {TYPE_LABELS[rc.resourceType]}
                      </span>
                    </div>
                  </div>

                  {/* Company name */}
                  <div className="font-serif-display text-[15px] font-semibold text-[#1c1c1c]">
                    {c.name}
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-[12px] leading-relaxed text-[#6b6b6b] line-clamp-2">
                    {c.desc}
                  </p>

                  {/* Bottom row */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#d4a843]/15 pt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-[2px] bg-[#d4a843]/8 px-2 py-0.5 text-[10px] text-[#8b6f1f]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#b8962f] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      查看详情 →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="rpg-gold-card rounded-[3px] px-6 py-16 text-center">
            <p className="font-serif-display text-[15px] font-medium text-[#6b6b6b]">
              暂无公司信息
            </p>
            <p className="mt-1 text-[12px] text-[#9a9a9a]">
              该分类正在持续收录中，欢迎后续补充。
            </p>
          </div>
        )}
      </div>

      {/* Footer note */}
      <div className="relative z-10 px-6 pb-16 sm:px-12 md:px-20 lg:px-28">
        <div className="rpg-gold-card rounded-[3px] px-5 py-4 text-center">
          <p className="text-[12px] text-[#6b6b6b]">
            更多数据、场景、设备、人力资源方持续收录中，欢迎点击「申请入驻」提交。
          </p>
        </div>
      </div>

      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </div>
  );
}
