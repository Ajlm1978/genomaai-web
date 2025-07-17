
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
const CTASection = () => {
  const { t } = useTranslation('homepage');
  
  return <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          {t('cta.subtitle')}
        </p>
        <p className="text-lg text-gray-400 mb-12">
          {t('cta.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold px-12 py-6 text-xl glow-primary transition-all duration-300 hover:scale-105"
          >
            <a href="https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj" target="_blank" rel="noopener noreferrer">
              {t('hero.cta')}
            </a>
          </Button>
          
          
        </div>

        
      </div>
    </section>;
};
export default CTASection;
