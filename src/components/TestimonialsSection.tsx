
import React from 'react';
import { useTranslation } from 'react-i18next';


const TestimonialsSection = () => {
  const { t } = useTranslation('homepage');
  
  const testimonials = [
    {
      textKey: 'testimonials.testimonial1.text',
      nameKey: 'testimonials.testimonial1.name',
      companyKey: 'testimonials.testimonial1.company',
      avatar: "👩‍💼"
    },
    {
      textKey: 'testimonials.testimonial2.text',
      nameKey: 'testimonials.testimonial2.name',
      companyKey: 'testimonials.testimonial2.company',
      avatar: "👨‍💼"
    },
    {
      textKey: 'testimonials.testimonial3.text',
      nameKey: 'testimonials.testimonial3.name',
      companyKey: 'testimonials.testimonial3.company',
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">{t('testimonials.title')}</span>
          </h2>
          <p className="text-xl text-gray-300">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card group hover:glow-primary transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl mb-4">{testimonial.avatar}</div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{t(testimonial.textKey)}"
              </blockquote>
              <div className="text-white">
                <div className="font-semibold">{t(testimonial.nameKey)}</div>
                <div className="text-sm gradient-text font-medium">{t(testimonial.companyKey)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
