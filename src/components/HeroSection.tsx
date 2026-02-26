import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Powered by AI
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 text-[#0a1628] rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/17862337574?text=Hello!%20I%20want%20a%20demo%20of%20Genoma%20AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                {t("hero.ctaDemo")}
              </a>
            </div>
            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <p className="text-gray-500 text-sm">{t("hero.trusted")}</p>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 rounded-2xl blur-2xl" />
              <img
                src="/genoma-hero.jpg"
                alt="Genoma AI - Human meets AI"
                className="relative rounded-2xl shadow-2xl shadow-cyan-500/10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
