
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-bg" />
      
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
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold px-8 py-4 text-lg glow-primary transition-all duration-300 hover:scale-105"
            >
              Talk to our AI – Book your demo now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;
