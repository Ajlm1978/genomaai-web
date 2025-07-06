
import { useState, useCallback } from 'react';
import { useConversation as useElevenLabsConversation } from '@11labs/react';
import { Message } from '@/types/chat';

export const useConversation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Initialize ElevenLabs conversation
  const conversation = useElevenLabsConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
    },
    onMessage: (message) => {
      console.log('Message received:', message);
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message.message || '',
        isAI: message.source === 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
    }
  });

  const addUserMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
  }, []);

  const initializeConversation = useCallback(async () => {
    try {
      await conversation.startSession({
        agentId: '1749679509357x537924320321077250'
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  return {
    messages,
    isTyping: conversation.isSpeaking || isTyping,
    addUserMessage,
    initializeConversation,
    conversation
  };
};
