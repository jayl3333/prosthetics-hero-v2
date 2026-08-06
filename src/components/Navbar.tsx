import Logo from "./Logo";

const NAV_LINKS = [
  { key: "home", label: "首页", href: "#/" },
  { key: "companies", label: "产业公司库", href: "#/companies" },
  { key: "resources", label: "资源公司库", href: "#/resources" },
  { key: "knowledge", label: "知识库", href: "#/knowledge" },
  { key: "about", label: "关于", href: "#/about" },
];

type Props = {
  active: string;
};

export default function Navbar({ active }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 px-4 pt-4 sm:gap-3 sm:px-8 sm:pt-6">
      {/* Logo circle — warm pill token */}
      <a
        href="#/"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-soft sm:h-11 sm:w-11"
        style={{ backgroundColor: "#f3f1ee" }}
        aria-label="返回首页"
      >
        <Logo />
      </a>

      {/* Links pill */}
      <div
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 shadow-soft sm:gap-6 sm:px-6 sm:py-3"
        style={{ backgroundColor: "#f3f1ee" }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={`text-[12px] font-medium transition-colors duration-200 sm:text-[13px] ${
              active === link.key
                ? "text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
