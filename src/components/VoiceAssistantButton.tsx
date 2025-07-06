
import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceAssistantButtonProps {
  agentId: string;
}

const VoiceAssistantButton = ({ agentId }: VoiceAssistantButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Voice Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleToggle}
          className={`
            w-14 h-14 rounded-full shadow-lg transition-all duration-300
            bg-primary hover:bg-primary/90 text-primary-foreground
            glow-primary hover:scale-110 animate-gentle-float
            ${isOpen ? 'rotate-180' : ''}
          `}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
        </Button>
      </div>

      {/* Voice Assistant Interface */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="glass-card w-full max-w-md mx-4 relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold gradient-text">Asistente de Voz</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggle}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <Mic className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <p className="text-muted-foreground mb-4">
                Habla con nuestro asistente de IA
              </p>
              <iframe
                src={`https://widget.gohighlevel.com/widget/${agentId}?mode=voice`}
                width="100%"
                height="300"
                className="rounded-lg border border-white/10"
                title="Voice Assistant"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAssistantButton;
