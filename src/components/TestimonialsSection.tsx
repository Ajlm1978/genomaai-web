import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonialKeys = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"];

const TestimonialsSection = () => {
  const { t } = useTranslation("homepage");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: direction === "right" ? amount : -amount,
        behavior: "smooth",
      });
    }
  };

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

        {/* Scroll controls */}
        <div className="flex justify-end gap-3 mb-6 max-w-5xl mx-auto">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300 flex-shrink-0"
              style={{ width: "320px" }}
            >
              <Quote className="w-8 h-8 text-cyan-500/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{ fill: "#FBBC04", color: "#FBBC04" }}
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t(`testimonials.items.${key}.text`)}&rdquo;
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
