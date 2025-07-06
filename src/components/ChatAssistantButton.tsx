
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatAssistantButtonProps {
  agentId: string;
}

const ChatAssistantButton = ({ agentId }: ChatAssistantButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={handleToggle}
          className={`
            w-14 h-14 rounded-full shadow-lg transition-all duration-300
            bg-secondary hover:bg-secondary/90 text-secondary-foreground
            glow-secondary hover:scale-110 animate-gentle-float
            ${isOpen ? 'rotate-180' : ''}
          `}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Assistant Interface */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-80 h-96">
          <div className="glass-card h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold gradient-text">Asistente de Chat</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleToggle}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 p-4">
              <iframe
                src={`https://widget.gohighlevel.com/widget/${agentId}?mode=chat`}
                width="100%"
                height="100%"
                className="rounded-lg border border-white/10"
                title="Chat Assistant"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistantButton;
