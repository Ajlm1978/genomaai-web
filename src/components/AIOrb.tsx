
import React, { useState } from 'react';
import PhoenixOrb from './PhoenixOrb';
import ChatInterface from './ChatInterface';
import { useConversation } from '@/hooks/useConversation';

const AIOrb = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAwakening, setIsAwakening] = useState(false);
  const { messages, isTyping, addUserMessage, initializeConversation } = useConversation();

  const handlePhoenixClick = () => {
    setIsAwakening(true);
    setTimeout(() => {
      setIsExpanded(true);
      setIsAwakening(false);
    }, 1500);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <PhoenixOrb 
        onClick={handlePhoenixClick}
        isAwakening={isAwakening}
        isExpanded={isExpanded}
      />
      
      <ChatInterface
        isExpanded={isExpanded}
        onClose={handleClose}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={addUserMessage}
        onInitialize={initializeConversation}
      />
    </>
  );
};

export default AIOrb;
