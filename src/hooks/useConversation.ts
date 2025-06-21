
import { useState, useCallback } from 'react';
import { Message } from '@/types/chat';

const AI_RESPONSES = [
  "Hi! I'm Fenix AI, rising from the ashes of traditional automation. I can help you discover how our AI solutions can transform your business. What industry are you in?",
  "Excellent! What's your biggest operational challenge right now? Is it manual processes, data analysis, customer support, or something else?",
  "That's a common pain point. Our AI can definitely help with that. What size is your team? This helps me recommend the best solution.",
  "Perfect! Based on what you've told me, I can see exactly how Fenix AI would benefit your organization. Would you like to schedule a personalized demo to see it in action?",
  "Great! Let me connect you with one of our specialists who can show you a tailored demo. What's the best email to reach you at?"
];

export const useConversation = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationStep, setConversationStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const addAIMessage = useCallback((text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        isAI: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000);
  }, []);

  const addUserMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Add AI response
    setTimeout(() => {
      const nextStep = conversationStep + 1;
      if (nextStep < AI_RESPONSES.length) {
        addAIMessage(AI_RESPONSES[nextStep]);
        setConversationStep(nextStep);
      }
    }, 1500);
  }, [conversationStep, addAIMessage]);

  const initializeConversation = useCallback(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        addAIMessage(AI_RESPONSES[0]);
      }, 1000);
    }
  }, [messages.length, addAIMessage]);

  return {
    messages,
    isTyping,
    addUserMessage,
    initializeConversation
  };
};
