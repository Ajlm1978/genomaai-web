import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";

const testimonialKeys = ["t1", "t2", "t3"];

const TestimonialsSection = () => {
  const { t } = useTranslation("homepage");

  return (
    <section className="relative py-24" id="testimonials">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-cyan-500/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{t(`testimonials.items.${key}.text`)}"
              </p>
              <div>
                <p className="text-white font-semibold text-sm">
                  {t(`testimonials.items.${key}.name`)}
                </p>
                <p className="text-cyan-400 text-xs">
                  {t(`testimonials.items.${key}.role`)}
                </p>
                <p className="text-gray-500 text-xs">
                  {t(`testimonials.items.${key}.company`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
