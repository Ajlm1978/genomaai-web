
import React from 'react';
import { useTranslation } from 'react-i18next';

const integrations = [
  { name: 'ChatGPT', logo: '🤖' },
  { name: 'Gemini', logo: '💎' },
  { name: 'Claude', logo: '🧠' },
  { name: 'Perplexity', logo: '🔮' },
  { name: 'Midjourney', logo: '🎨' },
  { name: 'GitHub Copilot', logo: '👨‍💻' },
  { name: 'Hugging Face', logo: '🤗' },
  { name: 'OpenAI', logo: '⚡' }
];

const IntegrationsSection = () => {
  const { t } = useTranslation('homepage');

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className="gradient-text">{t('integrations.title')}</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          {t('integrations.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300 group-hover:animate-pulse">
                {integration.logo}
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
