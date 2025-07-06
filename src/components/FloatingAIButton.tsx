
import React from 'react';
import { Brain, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVoiceConversation } from '@/hooks/useVoiceConversation';
import { useToast } from '@/hooks/use-toast';

const FloatingAIButton = () => {
  const aiAgentId = 'agent_01jx1g7q2gf3t9zcggrsnwyrv5';
  const { toast } = useToast();
  
  const { 
    isConnected, 
    error, 
    startVoiceConversation, 
    endVoiceConversation,
    isSpeaking 
  } = useVoiceConversation();

  const handleClick = async () => {
    if (isConnected) {
      await endVoiceConversation();
      toast({
        title: "Conversación finalizada",
        description: "La conversación de voz ha terminado."
      });
    } else {
      toast({
        title: "Iniciando conversación de voz",
        description: "Conectando con el asistente de voz..."
      });
      await startVoiceConversation(aiAgentId);
    }
  };

  // Show error toast if there's an error
  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive"
      });
    }
  }, [error, toast]);

  const getButtonIcon = () => {
    if (isConnected) {
      return isSpeaking ? <Mic className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" /> : <MicOff className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />;
    }
    return <Brain className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />;
  };

  const getButtonClass = () => {
    let baseClass = "w-16 h-16 rounded-full text-white shadow-xl group transition-all duration-300 hover:scale-105 animate-gentle-float";
    
    if (isConnected) {
      return `${baseClass} ${isSpeaking ? 'bg-green-500 hover:bg-green-600 animate-pulse' : 'bg-red-500 hover:bg-red-600'}`;
    }
    
    return `${baseClass} bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 glow-primary`;
  };

  const getTooltipText = () => {
    if (isConnected) {
      return isSpeaking ? "Asistente hablando... (Click para finalizar)" : "Conversación activa (Click para finalizar)";
    }
    return "Hablar con Asistente IA";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className={getButtonClass()}
      >
        {getButtonIcon()}
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {getTooltipText()}
      </div>
    </div>
  );
};

export default FloatingAIButton;
