
import { useConversation } from '@11labs/react';
import { useState } from 'react';

export const useVoiceConversation = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log('Voice conversation connected');
      setIsConnected(true);
      setError(null);
    },
    onDisconnect: () => {
      console.log('Voice conversation disconnected');
      setIsConnected(false);
    },
    onError: (error) => {
      console.error('Voice conversation error:', error);
      setError('Error connecting to voice assistant');
      setIsConnected(false);
    },
    onMessage: (message) => {
      console.log('Voice message received:', message);
    }
  });

  const startVoiceConversation = async (agentId: string) => {
    try {
      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start the conversation with the agent ID
      await conversation.startSession({ 
        agentId: agentId 
      });
    } catch (err) {
      console.error('Failed to start voice conversation:', err);
      setError('Failed to start voice conversation. Please check microphone permissions.');
    }
  };

  const endVoiceConversation = async () => {
    try {
      await conversation.endSession();
    } catch (err) {
      console.error('Failed to end voice conversation:', err);
    }
  };

  return {
    isConnected,
    error,
    startVoiceConversation,
    endVoiceConversation,
    isSpeaking: conversation.status === 'connected' ? conversation.isSpeaking : false
  };
};
