import { useTranslation } from "react-i18next";
import { Lightbulb, Zap, Target, Handshake } from "lucide-react";
import genomaHero from "../assets/genoma-hero.jpg";
import CTASection from "@/components/CTASection";

const valueIcons = [Lightbulb, Zap, Target, Handshake];
const valueKeys = ["innovation", "simplicity", "results", "partnership"];

const About = () => {
  const { t } = useTranslation("homepage");

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t("about.title")}
          </h1>
          <p className="text-cyan-400 text-lg">{t("about.subtitle")}</p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-4">{t("about.mission.title")}</h2>
            <p className="text-gray-400 leading-relaxed">{t("about.mission.text")}</p>
          </div>
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white mb-4">{t("about.story.title")}</h2>
            <p className="text-gray-400 leading-relaxed">{t("about.story.text")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t("about.values.title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={key} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 transition-all">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t(`about.values.${key}.title`)}</h3>
                  <p className="text-gray-400 text-sm">{t(`about.values.${key}.text`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 rounded-2xl blur-2xl" />
            <img
              src={genomaHero}
              alt="Genoma AI"
              className="relative w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
