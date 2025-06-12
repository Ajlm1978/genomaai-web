
import React from 'react';
import ParticleField from '@/components/ParticleField';
import AIOrb from '@/components/AIOrb';
import HeroSection from '@/components/HeroSection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Particle background */}
      <ParticleField />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <UseCasesSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <CTASection />
      </main>

      {/* AI Orb */}
      <AIOrb />
    </div>
  );
};

export default Index;
