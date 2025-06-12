
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready to <span className="gradient-text">Transform</span> Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Join thousands of companies already using Fenix AI to automate, optimize, and scale their operations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold px-12 py-6 text-xl glow-primary transition-all duration-300 hover:scale-105"
          >
            Start Your AI Journey Today
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 font-semibold px-12 py-6 text-xl transition-all duration-300 hover:scale-105"
          >
            Schedule Demo
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          No credit card required • 30-day free trial • Setup in minutes
        </p>
      </div>
    </section>
  );
};

export default CTASection;
