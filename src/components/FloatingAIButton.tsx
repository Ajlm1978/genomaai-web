
import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingAIButton = () => {
  const handleClick = () => {
    // TODO: Connect to AI assistant functionality
    console.log('AI Assistant button clicked');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white shadow-xl glow-primary group transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <Brain className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Talk to AI Assistant
      </div>
    </div>
  );
};

export default FloatingAIButton;
