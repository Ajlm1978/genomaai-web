import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const UseCasesSection = () => {
  const { t } = useTranslation('homepage');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const useCases = [
    {
      titleKey: 'useCases.healthcare.title',
      descriptionKey: 'useCases.healthcare.description',
      icon: '🏥',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      titleKey: 'useCases.finance.title',
      descriptionKey: 'useCases.finance.description',
      icon: '💰',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      titleKey: 'useCases.manufacturing.title',
      descriptionKey: 'useCases.manufacturing.description',
      icon: '🏭',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      titleKey: 'useCases.retail.title',
      descriptionKey: 'useCases.retail.description',
      icon: '🛍️',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      titleKey: 'useCases.logistics.title',
      descriptionKey: 'useCases.logistics.description',
      icon: '🚚',
      gradient: 'from-teal-500 to-green-400'
    },
    {
      titleKey: 'useCases.education.title',
      descriptionKey: 'useCases.education.description',
      icon: '🎓',
      gradient: 'from-indigo-500 to-blue-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.use-case-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">{t('useCases.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              data-index={index}
              className={`use-case-card glass-card group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                visibleCards.includes(index) 
                  ? 'animate-fade-in' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {t(useCase.titleKey)}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t(useCase.descriptionKey)}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;