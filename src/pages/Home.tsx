import {
  Building2,
  Layers,
  BookOpen,
  Database,
  MapPin,
  Cpu,
  Users,
  type LucideIcon,
} from "lucide-react";
import Hero from "../components/Hero";
import {
  RESOURCE_COMPANIES,
  type Dataset,
  type VenuePhoto,
  type DeviceSpec,
  type TalentProfile,
} from "../data";

type QuickEntry = {
  href: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const QUICK: QuickEntry[] = [
  {
    href: "#/companies",
    icon: Building2,
    title: "产业公司库",
    desc: "浏览全球知名具身智能企业，查看其能力标签。",
  },
  {
    href: "#/resources",
    icon: Layers,
    title: "资源公司库",
    desc: "数据、场景、设备、人力等产业资源方，一站式检索与合作对接。",
  },
  {
    href: "#/knowledge",
    icon: BookOpen,
    title: "知识库",
    desc: "公开数据集、技术论文、教程视频与社区讨论，一处汇集，随时检索。",
  },
];

// Aggregate featured datasets from resource companies
const FEATURED_DATASETS: (Dataset & { company: string; companyColor: string })[] =
  RESOURCE_COMPANIES.flatMap((c) =>
    c.datasets.map((d) => ({
      ...d,
      company: c.name,
      companyColor: c.color,
    }))
  );

// Aggregate venue photos from resource companies
const VENUE_PHOTOS: (VenuePhoto & { company: string })[] =
  RESOURCE_COMPANIES.flatMap((c) =>
    (c.venuePhotos ?? []).map((p) => ({
      ...p,
      company: c.name,
    }))
  );

// Aggregate device specs from resource companies
const FEATURED_DEVICES: (DeviceSpec & { company: string; companyColor: string })[] =
  RESOURCE_COMPANIES.flatMap((c) =>
    (c.deviceSpecs ?? []).map((d) => ({
      ...d,
      company: c.name,
      companyColor: c.color,
    }))
  );

// Aggregate talent profiles from resource companies
const FEATURED_TALENTS: (TalentProfile & { company: string; companyColor: string })[] =
  RESOURCE_COMPANIES.flatMap((c) =>
    (c.talentProfiles ?? []).map((t) => ({
      ...t,
      company: c.name,
      companyColor: c.color,
    }))
  );

export default function Home() {
  return (
    <div>
      {/* Hero screen — video background scoped here */}
      <Hero />

      {/* Quick-entry band — gives the landing real onward paths */}
      <section className="bg-cream px-6 py-14 sm:px-12 md:px-20 lg:px-28">
        <div className="mb-6">
          <span className="text-[12px] font-medium uppercase tracking-wide text-blue-500">
            快速进入
          </span>
          <h2 className="mt-2 text-[1.375rem] font-semibold tracking-tight text-gray-900 sm:text-[1.5rem]">
            选择你感兴趣的方向
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {QUICK.map((q) => {
            const Icon = q.icon;
            return (
              <a
                key={q.href}
                href={q.href}
                className="group flex flex-col gap-3 rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-card bg-blue-50 text-blue-500">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className="text-[14px] font-semibold text-gray-900">
                  {q.title}
                </span>
                <span className="text-[13px] leading-relaxed text-gray-500">
                  {q.desc}
                </span>
                <span className="mt-1 inline-block text-[13px] font-medium text-blue-500 transition-transform duration-200 group-hover:translate-x-0.5">
                  进入 →
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Classic datasets showcase */}
      <section className="bg-white px-6 py-14 sm:px-12 md:px-20 lg:px-28">
        <div className="mb-8">
          <span className="text-[12px] font-medium uppercase tracking-wide text-blue-500">
            经典数据集
          </span>
          <h2 className="mt-2 text-[1.375rem] font-semibold tracking-tight text-gray-900 sm:text-[1.5rem]">
            资源方精选数据集
          </h2>
          <p className="mt-2 text-[13px] text-gray-500">
            汇聚社区资源方提供的经典数据集，覆盖操作、场景、导航等多种类型。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DATASETS.map((ds, i) => (
            <div
              key={`${ds.name}-${i}`}
              className="group flex flex-col rounded-card border border-gray-100 bg-cream p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-card text-[13px] font-medium text-white"
                  style={{ backgroundColor: ds.companyColor }}
                >
                  <Database size={15} />
                </span>
                <span className="truncate text-[12px] text-gray-500">
                  {ds.company}
                </span>
              </div>
              <div className="text-[14px] font-semibold text-gray-900">
                {ds.name}
              </div>
              <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-gray-500">
                {ds.desc}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-600">
                  {ds.scale}
                </span>
                <span className="text-[11px] text-gray-400">{ds.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Device showcase */}
      {FEATURED_DEVICES.length > 0 && (
        <section className="bg-cream px-6 py-14 sm:px-12 md:px-20 lg:px-28">
          <div className="mb-8">
            <span className="text-[12px] font-medium uppercase tracking-wide text-blue-500">
              设备展示
            </span>
            <h2 className="mt-2 text-[1.375rem] font-semibold tracking-tight text-gray-900 sm:text-[1.5rem]">
              精选硬件设备
            </h2>
            <p className="mt-2 text-[13px] text-gray-500">
              资源方提供的机器人本体、夹爪与传感器设备，支持租赁与采购对接。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURED_DEVICES.map((dev, i) => (
              <div
                key={`${dev.name}-${i}`}
                className="group overflow-hidden rounded-card border border-gray-100 bg-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    <Cpu size={12} />
                    {dev.company}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-[14px] font-semibold text-gray-900">
                    {dev.name}
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-gray-500">
                    {dev.desc}
                  </p>
                  <div className="mt-3 rounded-card bg-cream px-3 py-2">
                    <span className="text-[11px] text-gray-400">规格参数</span>
                    <p className="mt-0.5 text-[12px] font-medium text-gray-700">
                      {dev.specs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Venue photos showcase */}
      {VENUE_PHOTOS.length > 0 && (
        <section className="bg-white px-6 py-14 sm:px-12 md:px-20 lg:px-28">
          <div className="mb-8">
            <span className="text-[12px] font-medium uppercase tracking-wide text-blue-500">
              场地展示
            </span>
            <h2 className="mt-2 text-[1.375rem] font-semibold tracking-tight text-gray-900 sm:text-[1.5rem]">
              真实测试场景一览
            </h2>
            <p className="mt-2 text-[13px] text-gray-500">
              资源方提供的真实测试场地与仿真环境，支持按需租赁与定制采集。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VENUE_PHOTOS.map((v, i) => (
              <div
                key={`${v.company}-${i}`}
                className="group overflow-hidden rounded-card border border-gray-100 bg-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={v.url}
                    alt={v.caption}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    <MapPin size={12} />
                    {v.company}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[13px] font-medium text-gray-900">
                    {v.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Talent showcase */}
      {FEATURED_TALENTS.length > 0 && (
        <section className="bg-cream px-6 py-14 sm:px-12 md:px-20 lg:px-28">
          <div className="mb-8">
            <span className="text-[12px] font-medium uppercase tracking-wide text-blue-500">
              人才资源
            </span>
            <h2 className="mt-2 text-[1.375rem] font-semibold tracking-tight text-gray-900 sm:text-[1.5rem]">
              具身智能专业人才
            </h2>
            <p className="mt-2 text-[13px] text-gray-500">
              汇聚算法、数据采集与硬件方向的具身智能专业人才，支持全职招聘与课题合作。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_TALENTS.map((t, i) => (
              <div
                key={`${t.role}-${i}`}
                className="group flex flex-col rounded-card border border-gray-100 bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-card text-white"
                    style={{ backgroundColor: t.companyColor }}
                  >
                    <Users size={15} />
                  </span>
                  <span className="truncate text-[12px] text-gray-500">
                    {t.company}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[14px] font-semibold text-gray-900">
                    {t.role}
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-600">
                    {t.count}
                  </span>
                </div>
                <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-gray-500">
                  {t.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {t.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-cream-pill px-2 py-0.5 text-[11px] text-gray-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
