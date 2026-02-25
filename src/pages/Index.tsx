
import React, { useState } from 'react';
import ParticleField from '@/components/ParticleField';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LogoMarquee from '@/components/LogoMarquee';
import IntegrationsSection from '@/components/IntegrationsSection';
import FeaturesSection from '@/components/FeaturesSection';
import PremiumFeaturesSection from '@/components/PremiumFeaturesSection';
import StatsSection from '@/components/StatsSection';
import UseCasesSection from '@/components/UseCasesSection';
import PricingSection from '@/components/PricingSection';
import EnterpriseCTA from '@/components/EnterpriseCTA';
import FAQSection from '@/components/FAQSection';
import AssistantSection from '@/components/AssistantSection';
import Footer from '@/components/Footer';
import WhatsAppPopup from '@/components/WhatsAppPopup';

const Index = () => {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ParticleField />
      <AnnouncementBar />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        <LogoMarquee />
        <IntegrationsSection />
        <FeaturesSection />
        <PremiumFeaturesSection />
        <StatsSection />
        <UseCasesSection />
        <PricingSection />
        <EnterpriseCTA />
        <FAQSection />
        <AssistantSection />
      </main>

      <Footer />

      {showWhatsAppPopup && (
        <WhatsAppPopup onClose={() => setShowWhatsAppPopup(false)} />
      )}
    </div>
  );
};

export default Index;
