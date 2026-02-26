import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Building2, Users, Check, ArrowRight } from "lucide-react";

const DualTrackSection = () => {
  const { t } = useTranslation("homepage");

  const businessFeatures = t("dualTrack.business.features", { returnObjects: true }) as string[];
  const agencyFeatures = t("dualTrack.agency.features", { returnObjects: true }) as string[];

  return (
    <section className="relative py-24" id="dual-track">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("dualTrack.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("dualTrack.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Business Track */}
          <div className="relative p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t("dualTrack.business.title")}
            </h3>
            <p className="text-gray-400 mb-6">{t("dualTrack.business.subtitle")}</p>
            <ul className="space-y-3 mb-8">
              {businessFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
            >
              {t("dualTrack.business.cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Agency Track */}
          <div className="relative p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
              WHITE LABEL
            </div>
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t("dualTrack.agency.title")}
            </h3>
            <p className="text-gray-400 mb-6">{t("dualTrack.agency.subtitle")}</p>
            <ul className="space-y-3 mb-8">
              {agencyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/agencies"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
            >
              {t("dualTrack.agency.cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualTrackSection;
