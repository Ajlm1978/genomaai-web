
import React from 'react';

const integrations = [
  { name: 'OpenAI', icon: '⚡' },
  { name: 'Claude', icon: '🧠' },
  { name: 'Gemini', icon: '💎' },
  { name: 'ChatGPT', icon: '🤖' },
  { name: 'Perplexity', icon: '🔮' },
  { name: 'WhatsApp', icon: '💬' },
  { name: 'Twilio', icon: '📞' },
  { name: 'Zapier', icon: '⚙️' },
  { name: 'HubSpot', icon: '🎯' },
  { name: 'Slack', icon: '💼' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Calendly', icon: '📅' },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Nos Integramos con las Herramientas y Modelos IA más sofisticados del mercado</span>
        </h2>

        <div className="relative overflow-hidden mt-12">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...integrations, ...integrations].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 mx-6 md:mx-8">
                <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-2xl hover:border-primary/40 hover:glow-primary transition-all duration-300 cursor-pointer">
                  {item.icon}
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gradient-line mt-16 max-w-4xl mx-auto" />
    </section>
  );
};

export default IntegrationsSection;
