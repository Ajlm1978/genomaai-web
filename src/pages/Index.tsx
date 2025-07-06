
import React from 'react';
import ParticleField from '@/components/ParticleField';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AssistantSection from '@/components/AssistantSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Particle background */}
      <ParticleField />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <UseCasesSection />
        <TestimonialsSection />
        <AssistantSection />
        <IntegrationsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
