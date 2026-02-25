
import React from 'react';
import { Clock, Zap, MessageSquare, Globe, Phone, Bot } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Atiende 24/7 en todos tus canales',
    description: 'Los Agentes de Fenix IA trabajan las 24 horas del día, los 7 días de la semana en todos tus Canales Digitales.'
  },
  {
    icon: Zap,
    title: 'Contesta a tus clientes inmediatamente',
    description: 'Con un tiempo de respuesta menor a 5 segundos, los Agentes de Fenix IA atenderán a tus contactos inmediatamente.'
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Suena como un humano, </span>
            <span className="gradient-text">trabaja como IA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat mockup */}
        <div className="max-w-md mx-auto glass-card p-4 rounded-2xl">
          <div className="space-y-3">
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-primary/10 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-foreground">
                ¡Hola! Soy tu Agente IA de Fenix. ¿En qué puedo ayudarte hoy?
              </div>
            </div>
            <div className="flex gap-2 items-start justify-end">
              <div className="bg-muted rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-foreground">
                Quiero agendar una cita para mañana
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-primary/10 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-foreground">
                ¡Perfecto! Tengo disponibilidad mañana a las 10:00 AM, 2:00 PM y 4:30 PM. ¿Cuál prefieres?
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 border border-border rounded-full px-4 py-2">
            <span className="text-muted-foreground text-sm">Escribe un mensaje...</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold px-8 py-3 rounded-full glow-primary transition-all duration-300 hover:scale-105"
          >
            CREA TU CUENTA AHORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
