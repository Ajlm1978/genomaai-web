
import React from 'react';

interface PhoenixOrbProps {
  onClick: () => void;
  isAwakening: boolean;
  isExpanded: boolean;
}

const PhoenixOrb = ({ onClick, isAwakening, isExpanded }: PhoenixOrbProps) => {
  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 cursor-pointer ${
        isExpanded ? 'scale-0' : 'scale-100'
      } ${isAwakening ? 'animate-pulse' : ''}`}
      onClick={onClick}
    >
      <div className="relative">
        {/* Phoenix Energy Field */}
        <div className="phoenix-aura w-32 h-32 rounded-full absolute inset-0 animate-glow-pulse" />
        
        {/* Phoenix Core */}
        <div className="phoenix-core w-20 h-20 absolute top-6 left-6 animate-breathe">
          {/* Phoenix Body */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-90 relative overflow-hidden">
            {/* Energy particles */}
            <div className="absolute inset-0">
              <div className="phoenix-particle absolute top-2 left-3 w-1 h-1 bg-primary rounded-full animate-float" />
              <div className="phoenix-particle absolute top-4 right-2 w-0.5 h-0.5 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="phoenix-particle absolute bottom-3 left-2 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
              <div className="phoenix-particle absolute bottom-2 right-3 w-0.5 h-0.5 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
        
        {/* Phoenix Wings */}
        <div className={`phoenix-wings absolute inset-0 transition-all duration-300 ${isAwakening ? 'animate-phoenix-awaken' : 'animate-phoenix-idle'}`}>
          {/* Left Wing */}
          <div className="absolute top-4 left-0 w-8 h-12 bg-gradient-to-r from-primary/60 to-transparent rounded-full transform -rotate-12 origin-bottom animate-wing-flutter" />
          {/* Right Wing */}
          <div className="absolute top-4 right-0 w-8 h-12 bg-gradient-to-l from-secondary/60 to-transparent rounded-full transform rotate-12 origin-bottom animate-wing-flutter" style={{ animationDelay: '0.3s' }} />
        </div>
        
        {/* Pulsing energy ring */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-primary/30 animate-ping" />
      </div>
    </div>
  );
};

export default PhoenixOrb;
