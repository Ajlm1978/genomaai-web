import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import { useTranslation } from "react-i18next";

const UseCases = () => {
  const { t } = useTranslation("homepage");

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t("useCases.title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("useCases.subtitle")}
          </p>
        </div>
      </section>

      <UseCasesSection />
      <CTASection />
    </div>
  );
};

export default UseCases;
