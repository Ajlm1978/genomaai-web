import { useState } from "react";
import genomaLogo from "../assets/genoma-logo.jpg";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  const navLinks = [
    { to: "/", label: t("navigation.home") },
    { to: "/use-cases", label: t("navigation.useCases") },
    { to: "/pricing", label: t("navigation.pricing") },
    { to: "/agencies", label: t("navigation.agencies") },
    { to: "/about", label: t("navigation.about") },
  ];

  const contentDropdown = [
    { to: "/blog", label: "Blog" },
    { to: "/comparar", label: "Comparativas" },
    { to: "/industrias", label: "Industrias" },
    { to: "/casos-de-uso", label: "Casos de Uso" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={genomaLogo}
              alt="Genoma AI"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-wide">
                <span className="text-white">GENOMA</span>{" "}
                <span className="text-cyan-400">AI</span>
              </h1>
              <p className="text-[10px] text-cyan-400/60 uppercase tracking-[0.2em] -mt-1">
                Intelligent Automation
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.to)
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Contenido dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  contentDropdown.some(item => location.pathname.startsWith(item.to))
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Contenido <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-[#0d1f3c] border border-cyan-500/20 rounded-xl shadow-xl overflow-hidden z-50">
                  {contentDropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        location.pathname.startsWith(item.to)
                          ? "text-cyan-400 bg-cyan-500/10"
                          : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white border border-white/10 rounded-lg hover:border-cyan-500/30 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              {i18n.language === "en" ? "ES" : "EN"}
            </button>
            <Link
              to="/pricing"
              className="hidden md:inline-flex px-5 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
            >
              {t("buttons.getStarted")}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-cyan-500/10">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive(link.to)
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <p className="px-4 text-xs text-gray-500 uppercase tracking-wider mb-1">Contenido</p>
              {contentDropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-3 mt-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] rounded-lg"
            >
              {t("buttons.getStarted")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
