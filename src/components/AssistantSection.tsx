
import React, { useEffect } from 'react';

const AssistantSection = () => {
  useEffect(() => {
    const handleMicrophonePermissions = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'microphone' as PermissionName })
          .then(result => {
            if (result.state === 'granted') {
              console.log('Microphone access already granted');
            } else if (result.state === 'prompt') {
              console.log('User will be prompted for microphone access');
            }
          })
          .catch(err => {
            console.log('Microphone permission check failed:', err);
          });
      }
    };

    // Check permissions when component mounts
    handleMicrophonePermissions();
  }, []);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Meet Your <span className="gradient-text">AI Assistant</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Experience the power of conversational AI. Ask questions, get insights, and interact naturally with our advanced assistant.
        </p>

        <div className="glass-card max-w-3xl mx-auto p-8 hover:glow-primary transition-all duration-500">
          <div className="flex justify-center items-center">
            <iframe 
              src="https://iframes.ai/o/1749696865351x574001650352259100?color=4d4c50&icon=bot"
              allow="microphone"
              className="w-full h-80 md:h-96 border-none rounded-lg"
              title="AI Assistant"
            />
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Click the microphone icon to enable voice interaction
        </p>
      </div>
    </section>
  );
};

export default AssistantSection;
