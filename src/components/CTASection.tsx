import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const CTASection = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t("ctaFinal.title")}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          {t("ctaFinal.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
          >
            {t("ctaFinal.cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/17862337574?text=I%20want%20a%20demo%20of%20Genoma%20AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
          >
            <Play className="w-5 h-5" />
            {t("ctaFinal.ctaDemo")}
          </a>
        </div>
        <p className="mt-4 text-gray-500 text-sm">{t("ctaFinal.noCard")}</p>
      </div>
    </section>
  );
};

export default CTASection;
