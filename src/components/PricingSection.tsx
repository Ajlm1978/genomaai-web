import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const businessPlans = ["starter", "pro", "business"];
const agencyPlans = ["agency", "agencyPro"];

interface PricingProps {
  showAll?: boolean;
}

const PricingSection = ({ showAll = true }: PricingProps) => {
  const { t } = useTranslation("homepage");

  const renderPlan = (key: string, isPopular = false, isAgency = false) => {
    const features = t(`pricing.plans.${key}.features`, { returnObjects: true }) as string[];
    return (
      <div
        key={key}
        className={`relative p-8 rounded-2xl border transition-all duration-300 ${
          isPopular
            ? "border-cyan-500/40 bg-gradient-to-b from-cyan-500/10 to-transparent scale-[1.02] shadow-xl shadow-cyan-500/5"
            : isAgency
            ? "border-purple-500/20 bg-white/[0.02] hover:border-purple-500/40"
            : "border-white/10 bg-white/[0.02] hover:border-cyan-500/20"
        }`}
      >
        {isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] text-xs font-bold rounded-full">
            {t("pricing.popular")}
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-1">
          {t(`pricing.plans.${key}.name`)}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {t(`pricing.plans.${key}.description`)}
        </p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{t(`pricing.plans.${key}.price`)}</span>
          <span className="text-gray-400 text-sm">{t("pricing.perMonth")}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className={`w-5 h-5 shrink-0 mt-0.5 ${isAgency ? "text-purple-400" : "text-cyan-400"}`} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/17862337574?text=I%20want%20to%20start%20with%20Genoma%20AI"
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center px-6 py-3 text-sm font-semibold rounded-xl transition-all ${
            isPopular
              ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] hover:shadow-lg hover:shadow-cyan-500/25"
              : isAgency
              ? "border border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              : "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
          }`}
        >
          {t("pricing.cta")}
        </a>
      </div>
    );
  };

  return (
    <section className="relative py-24" id="pricing">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Business Plans */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-cyan-400 text-center mb-8">
            {t("pricing.businessTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {businessPlans.map((plan) => renderPlan(plan, plan === "pro"))}
          </div>
        </div>

        {/* Agency Plans */}
        {showAll && (
          <div>
            <h3 className="text-xl font-semibold text-purple-400 text-center mb-8">
              {t("pricing.agencyTitle")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {agencyPlans.map((plan) => renderPlan(plan, false, true))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
