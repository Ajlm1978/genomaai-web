
import React from 'react';
import ParticleField from '@/components/ParticleField';
import AIOrb from '@/components/AIOrb';
import Header from '@/components/Header';
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
      
      {/* Header */}
      <Header />
      
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
      
      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_01jx1g7q2gf3t9zcggrsnwyrv5"></elevenlabs-convai>
    </div>
  );
};

export default Index;
