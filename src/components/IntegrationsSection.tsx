import { useTranslation } from "react-i18next";

const integrations = [
  { name: "GoHighLevel", logo: "/logos/gohighlevel.svg", bg: "#00C85315" },
  { name: "Twilio", logo: "/logos/twilio.svg", bg: "#F22F4615" },
  { name: "ElevenLabs", logo: "/logos/elevenlabs.svg", bg: "#11111115" },
  { name: "OpenAI", logo: "/logos/openai.svg", bg: "#10A37F15" },
  { name: "WhatsApp", logo: "/logos/whatsapp.svg", bg: "#25D36615" },
  { name: "Zapier", logo: "/logos/zapier.svg", bg: "#FF4A0015" },
  { name: "Make", logo: "/logos/make.svg", bg: "#6D00CC15" },
  { name: "Stripe", logo: "/logos/stripe.svg", bg: "#635BFF15" },
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
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 overflow-hidden"
                style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.logo}
                  alt={item.name + " logo"}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
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
