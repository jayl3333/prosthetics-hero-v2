const FOOTER_LINKS = [
  { label: "产业公司库", href: "#/companies" },
  { label: "资源公司库", href: "#/resources" },
  { label: "知识库", href: "#/knowledge" },
  { label: "关于我们", href: "#/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-10 sm:px-12 md:px-20 lg:px-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-[14px] font-semibold text-gray-900">
            具身数据产业社区
          </div>
          <div className="mt-1 text-[12px] text-gray-500">
            汇聚具身数据产业力量，共建开放协作社区。
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-gray-100 pt-5 text-[12px] text-gray-500">
        © 2026 具身数据产业社区 · 数据驱动 · 开放协作
      </div>
    </footer>
  );
}
