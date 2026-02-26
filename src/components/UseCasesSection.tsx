import { useTranslation } from "react-i18next";
import { UserCheck, CalendarCheck, PhoneIncoming, Headphones, RotateCcw, Send } from "lucide-react";

const useCaseData = [
  { key: "leadQualification", icon: UserCheck, color: "from-cyan-500 to-blue-500" },
  { key: "appointment", icon: CalendarCheck, color: "from-cyan-400 to-teal-500" },
  { key: "receptionist", icon: PhoneIncoming, color: "from-blue-500 to-cyan-500" },
  { key: "customerService", icon: Headphones, color: "from-teal-500 to-cyan-400" },
  { key: "reactivation", icon: RotateCcw, color: "from-cyan-500 to-blue-400" },
  { key: "followUp", icon: Send, color: "from-blue-400 to-cyan-500" },
];

const UseCasesSection = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative py-24" id="use-cases">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("useCases.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("useCases.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCaseData.map(({ key, icon: Icon, color }) => (
            <div
              key={key}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 opacity-80 group-hover:opacity-100 transition-opacity`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(`useCases.items.${key}.title`)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(`useCases.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
