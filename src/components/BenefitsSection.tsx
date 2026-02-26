import { useTranslation } from "react-i18next";
import { MessageSquare, Mic, Database, Code2, Clock, Building2 } from "lucide-react";

const icons = [MessageSquare, Mic, Database, Code2, Clock, Building2];
const keys = ["omnichannel", "voice", "crm", "nocode", "twentyfour", "whitelabel"];

const BenefitsSection = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative py-24" id="benefits">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <div
                key={key}
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`benefits.items.${key}.title`)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(`benefits.items.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
