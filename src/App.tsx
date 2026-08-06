import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CompanyModal from "./components/CompanyModal";
import Home from "./pages/Home";
import CompaniesPage from "./pages/CompaniesPage";
import ResourcesPage from "./pages/ResourcesPage";
import KnowledgePage from "./pages/KnowledgePage";
import AboutPage from "./pages/AboutPage";
import type { BaseCompany } from "./data";

// Zero-dependency hash router — keeps to react/react-dom/lucide-react/tailwind only.
const ROUTES: Record<string, string> = {
  "": "home",
  home: "home",
  companies: "companies",
  resources: "resources",
  knowledge: "knowledge",
  about: "about",
};

function getView(): string {
  const h = window.location.hash.replace(/^#\/?/, "");
  return ROUTES[h] ?? "home";
}

export default function App() {
  const [view, setView] = useState<string>(getView);
  const [company, setCompany] = useState<BaseCompany | null>(null);

  useEffect(() => {
    const onHash = () => setView(getView());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Jump to top on every route change.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [view]);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar active={view} />

      {view === "home" && <Home />}
      {view === "companies" && <CompaniesPage onOpen={setCompany} />}
      {view === "resources" && <ResourcesPage onOpen={setCompany} />}
      {view === "knowledge" && <KnowledgePage />}
      {view === "about" && <AboutPage />}

      <Footer />

      {/* Company detail modal (max 560px / mobile 90vw) */}
      <CompanyModal company={company} onClose={() => setCompany(null)} />
    </div>
  );
}
