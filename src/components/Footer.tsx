import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import genomaLogo from "../assets/genoma-logo.jpg";

const Footer = () => {
  const { t } = useTranslation(["common", "homepage"]);

  return (
    <footer className="relative z-10 bg-[#060e1a] border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={genomaLogo} alt="Genoma AI" className="h-10 w-10 rounded-lg object-cover" />
              <div>
                <h3 className="text-lg font-bold">
                  <span className="text-white">GENOMA</span>{" "}
                  <span className="text-cyan-400">AI</span>
                </h3>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("homepage:footer.description")}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("homepage:footer.product")}</h4>
            <ul className="space-y-3">
              <li><Link to="/use-cases" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">{t("common:navigation.useCases")}</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">{t("common:navigation.pricing")}</Link></li>
              <li><Link to="/agencies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">{t("common:navigation.agencies")}</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("homepage:footer.company")}</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">{t("common:navigation.about")}</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">{t("common:legal.privacyPolicy")}</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">{t("common:legal.termsOfService")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("common:navigation.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@genomaai.com" className="hover:text-cyan-400 transition-colors">info@genomaai.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+17862337574" className="hover:text-cyan-400 transition-colors">+1 (786) 233-7574</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Winter Park, FL 32792, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Genoma AI. {t("common:legal.allRightsReserved")}.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              {t("common:legal.privacyPolicy")}
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              {t("common:legal.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
