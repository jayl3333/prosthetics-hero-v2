import {
  Network,
  EyeOff,
  GraduationCap,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

type PainPoint = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PAIN_POINTS: PainPoint[] = [
  {
    icon: Network,
    title: "数据稀缺，入口分散",
    body: "具身智能进入爆发期，高质量具身数据成为最稀缺的生产要素，但供给方、需求方、配套方分散，缺少统一的产业对接入口。",
  },
  {
    icon: EyeOff,
    title: "信息不透明，难背调",
    body: "数据团队、机器人公司、实验室、设备商之间信息不透明，合作前缺乏可信的资质参考与背调渠道。",
  },
  {
    icon: GraduationCap,
    title: "知识分散，入门无路",
    body: "采集方法、数据规范、质量标准等行业知识高度分散，新人缺乏系统的入门路径。",
  },
  {
    icon: Newspaper,
    title: "资讯碎片化，需聚合",
    body: "行业资讯、政策、活动更新快，从业者需要一个聚合、及时的信息源。",
  },
];

const GOALS = [
  {
    no: "01",
    body: "成为具身数据产业的信息枢纽。",
  },
  {
    no: "02",
    body: "通过结构化的公司档案与入驻体系，降低产业对接难度。",
  },
  {
    no: "03",
    body: "通过知识库与资讯聚合，建立社区的内容护城河与专业口碑。",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="关于社区"
        title="面向具身数据产业的一站式垂直信息社区"
        description="连接产业各方（数据、场景、设备、人力），沉淀行业知识与资讯。"
      />

      {/* 背景与痛点 */}
      <section className="bg-cream px-6 pb-10 pt-4 sm:px-12 md:px-20 lg:px-28">
        <h2 className="mb-6 text-[1.125rem] font-semibold tracking-tight text-gray-900 sm:text-[1.375rem]">
          背景与痛点
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PAIN_POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex flex-col gap-3 rounded-card border border-gray-100 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-card bg-blue-50 text-blue-500">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className="text-[14px] font-semibold text-gray-900">
                  {p.title}
                </span>
                <span className="text-[13px] leading-relaxed text-gray-500">
                  {p.body}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 社区目标 */}
      <section className="border-t border-gray-100 bg-white px-6 py-12 sm:px-12 md:px-20 lg:px-28">
        <h2 className="mb-6 text-[1.125rem] font-semibold tracking-tight text-gray-900 sm:text-[1.375rem]">
          社区目标
        </h2>
        <div className="flex flex-col gap-5">
          {GOALS.map((g) => (
            <div key={g.no} className="flex items-start gap-5">
              <span className="select-none text-[1.5rem] font-semibold leading-none text-blue-500">
                {g.no}
              </span>
              <p className="text-[14px] leading-relaxed text-gray-700 sm:text-[15px]">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
