
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

const AIOrb = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);
  const [isAwakening, setIsAwakening] = useState(false);

  const aiResponses = [
    "Hi! I'm Fenix AI, rising from the ashes of traditional automation. I can help you discover how our AI solutions can transform your business. What industry are you in?",
    "Excellent! What's your biggest operational challenge right now? Is it manual processes, data analysis, customer support, or something else?",
    "That's a common pain point. Our AI can definitely help with that. What size is your team? This helps me recommend the best solution.",
    "Perfect! Based on what you've told me, I can see exactly how Fenix AI would benefit your organization. Would you like to schedule a personalized demo to see it in action?",
    "Great! Let me connect you with one of our specialists who can show you a tailored demo. What's the best email to reach you at?"
  ];

  useEffect(() => {
    if (isExpanded && messages.length === 0) {
      // Initial AI message
      setTimeout(() => {
        addAIMessage(aiResponses[0]);
      }, 1000);
    }
  }, [isExpanded]);

  const addAIMessage = (text: string) => {
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
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Add AI response
    setTimeout(() => {
      const nextStep = conversationStep + 1;
      if (nextStep < aiResponses.length) {
        addAIMessage(aiResponses[nextStep]);
        setConversationStep(nextStep);
      }
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handlePhoenixClick = () => {
    setIsAwakening(true);
    setTimeout(() => {
      setIsExpanded(true);
      setIsAwakening(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Phoenix Orb */}
      <div 
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 cursor-pointer ${
          isExpanded ? 'scale-0' : 'scale-100'
        } ${isAwakening ? 'animate-pulse' : ''}`}
        onClick={handlePhoenixClick}
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

      {/* Expanded Chat Interface */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="glass-card w-full max-w-md h-[600px] flex flex-col animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full phoenix-core relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div className="absolute inset-0 phoenix-particle w-1 h-1 bg-primary rounded-full animate-float top-1 left-2" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Fenix AI Phoenix</h3>
                  <p className="text-sm text-gray-400">Rising to assist you</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isAI
                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-3 rounded-lg border border-primary/30">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIOrb;
