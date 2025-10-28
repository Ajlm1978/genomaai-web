import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send } from 'lucide-react';
import { Message } from '@/types/chat';
import { z } from 'zod';

// Validation schema for chat messages
const messageSchema = z.string()
  .trim()
  .min(1, 'Message cannot be empty')
  .max(1000, 'Message must be less than 1000 characters');

interface ChatInterfaceProps {
  isExpanded: boolean;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
  onInitialize: () => void;
}

const ChatInterface = ({ 
  isExpanded, 
  onClose, 
  messages, 
  isTyping, 
  onSendMessage, 
  onInitialize 
}: ChatInterfaceProps) => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (isExpanded) {
      onInitialize();
    }
  }, [isExpanded, onInitialize]);

  const handleSendMessage = () => {
    // Validate message using zod schema
    const validationResult = messageSchema.safeParse(inputValue);
    
    if (!validationResult.success) {
      setValidationError(validationResult.error.errors[0].message);
      return;
    }
    
    setValidationError('');
    onSendMessage(validationResult.data);
    setInputValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (validationError) setValidationError(''); // Clear error on input change
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isExpanded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="glass-card w-full max-w-md h-[600px] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Fenix AI</h3>
              <p className="text-sm text-gray-400">Rising to assist you</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
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
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                maxLength={1000}
                className={`flex-1 bg-white/5 border ${validationError ? 'border-red-500' : 'border-white/10'} rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50`}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-between items-center px-1">
              {validationError ? (
                <span className="text-xs text-red-400">{validationError}</span>
              ) : (
                <span className="text-xs text-gray-500">{inputValue.length}/1000</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
