import { useTranslation } from "react-i18next";

const integrations = [
  { name: "GoHighLevel", color: "#00C853" },
  { name: "Twilio", color: "#F22F46" },
  { name: "ElevenLabs", color: "#FFFFFF" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Zapier", color: "#FF4A00" },
  { name: "Make", color: "#6D00CC" },
  { name: "Stripe", color: "#635BFF" },
];

const IntegrationsSection = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative py-24" id="integrations">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("integrations.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("integrations.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-2xl font-bold"
                style={{ color: item.color, backgroundColor: `${item.color}15` }}
              >
                {item.name.charAt(0)}
              </div>
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
