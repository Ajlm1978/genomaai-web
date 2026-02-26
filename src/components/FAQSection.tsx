import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];

const FAQSection = () => {
  const { t } = useTranslation("homepage");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24" id="faq">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-gray-400 text-lg">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-3">
          {faqKeys.map((key, index) => (
            <div
              key={key}
              className="border border-white/5 rounded-xl overflow-hidden bg-white/[0.02] hover:border-cyan-500/20 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium text-sm pr-4">
                  {t(`faq.items.${key}.question`)}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-gray-400 text-sm leading-relaxed">
                  {t(`faq.items.${key}.answer`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
