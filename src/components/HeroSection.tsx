
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient with neural network aesthetics */}
      <div className="absolute inset-0 animated-bg" />
      
      {/* Fixed Logo watermark background */}
      <div className="fixed inset-0 flex items-center justify-center opacity-18 pointer-events-none z-0">
        <img src="/lovable-uploads/32cc264e-2fe8-4971-8b6f-f3a757df4d31.png" alt="Fenix AI Watermark" className="w-96 h-96 object-contain" style={{
        opacity: 0.18
      }} />
      </div>
      
      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
        backgroundSize: '50px 50px'
      }} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI that works</span>
            <br />
            <span className="text-white">with you,</span>
            <br />
            <span className="text-white">not for you</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Automate tasks. Personalize processes. Scale intelligently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold px-8 py-4 text-lg glow-primary transition-all duration-300 hover:scale-105"
            >
              <a href="https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj" target="_blank" rel="noopener noreferrer">
                Book your Demo now
              </a>
            </Button>
            
            
          </div>
        </div>
      </div>

      {/* Futuristic decorative elements - data streams and neural connections */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-float" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{
      animationDelay: '4s'
    }} />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-float" style={{
      animationDelay: '1s'
    }} />
      
      <div className="absolute top-1/2 left-1/4 w-px h-12 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" style={{
      animationDelay: '3s'
    }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-px bg-gradient-to-r from-secondary/40 to-transparent animate-pulse" style={{
      animationDelay: '1.5s'
    }} />
      
      <div className="absolute top-1/5 left-1/2 w-0.5 h-0.5 bg-primary rounded-full animate-phoenix-energy" />
      <div className="absolute bottom-1/5 right-1/2 w-0.5 h-0.5 bg-secondary rounded-full animate-phoenix-energy" style={{
      animationDelay: '2.5s'
    }} />
    </section>;
};
export default HeroSection;
