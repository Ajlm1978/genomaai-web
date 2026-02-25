
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useTranslation('homepage');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Radial glow behind orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)' }}
      />

      {/* Fixed logo watermark */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none z-0">
        <img 
          src="/lovable-uploads/32cc264e-2fe8-4971-8b6f-f3a757df4d31.png" 
          alt="" 
          className="w-96 h-96 object-contain" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="text-sm text-muted-foreground">
              {t('hero.badge', 'La plataforma de IA que potencia tu negocio con automatización inteligente 🧠')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-foreground">{t('hero.titlePart1', 'Transforma Tu Negocio')}</span>
            <br />
            <span className="text-foreground">{t('hero.titlePart2', 'Con ')}</span>
            <span className="gradient-text">{t('hero.titleHighlight', 'Inteligencia Artificial')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Orb */}
          <div className="flex justify-center my-12">
            <div className="relative w-24 h-24">
              <div className="hero-orb w-24 h-24 rounded-full animate-breathe" />
              <div className="hero-orb-ring absolute inset-[-12px] rounded-full animate-orb-rotate opacity-60" />
              <div className="hero-orb-ring absolute inset-[-24px] rounded-full animate-orb-rotate opacity-30" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              {/* Inner icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b786050e-9f4e-47ed-9196-92f840bc316b.png" 
                  alt="Fenix AI" 
                  className="w-12 h-12 object-contain opacity-80"
                />
              </div>
            </div>
          </div>
          
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground font-semibold px-10 py-6 text-lg rounded-full glow-primary transition-all duration-300 hover:scale-105"
          >
            <a href="https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj" target="_blank" rel="noopener noreferrer">
              {t('hero.cta')}
            </a>
          </Button>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/5 w-0.5 h-0.5 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-muted-foreground text-xs tracking-widest" style={{ writingMode: 'vertical-rl' }}>
        <span>Scroll Down</span>
        <span>↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
