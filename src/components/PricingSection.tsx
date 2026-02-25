
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingSection = () => {
  const [withWhatsApp, setWithWhatsApp] = useState(false);

  const plans = {
    lite: {
      name: 'Plan Lite',
      price: withWhatsApp ? 97 : 47,
      period: 'Por Mes',
      cta: 'INGRESA AHORA',
      href: 'https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj',
      popular: false,
      features: [
        { text: 'Agentes IA Ilimitados', included: true },
        { text: 'Agente IA para Redes Sociales', included: true },
        { text: 'Agente IA para WhatsApp (Extra)', included: true },
        { text: 'Webcall: Agentes IA de Voz para Webs', included: true },
        { text: 'Videollamadas Coaching diarias', included: true },
        { text: 'Costo Webcall: 0.15$ por min', included: false },
        { text: 'Comunidad Privada', included: true },
        { text: 'CRM Incluido 100% Gratis', included: true },
      ]
    },
    pro: {
      name: 'Plan Pro',
      price: withWhatsApp ? 299 : 147,
      period: 'Por Mes',
      cta: 'INGRESA AHORA',
      href: 'https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj',
      popular: true,
      features: [
        { text: 'Todo lo del Plan Lite', included: true },
        { text: 'Agentes IA para llamadas telefónicas', included: true },
        { text: 'Clonación de Voz', included: true },
        { text: 'Conexión con Twilio o Llamadas IP', included: true },
        { text: 'Agentes IA Ilimitados', included: true },
        { text: 'Costo Llamadas IA: 0.15$ por min + 0.02 por llamada', included: true },
      ]
    },
    custom: {
      name: 'Instalación Personalizada',
      price: null,
      priceLabel: 'CONSULTAR',
      period: 'Por proyecto',
      cta: 'COTIZAR',
      href: 'https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj',
      popular: false,
      features: [
        { text: 'Todo lo del Plan Pro', included: true },
        { text: 'Ingeniería de Prompts y Base de Conocimientos', included: true },
        { text: 'Infraestructura IA Completa para tu negocio', included: true },
        { text: 'Conexión con tu CRM', included: true },
        { text: 'Conexión con tu Central Telefónica', included: true },
      ]
    }
  };

  const planList = [plans.lite, plans.pro, plans.custom];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-sm text-muted-foreground">Incluye WhatsApp a tu plan</span>
        </div>
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold ${!withWhatsApp ? 'text-foreground' : 'text-muted-foreground'}`}>
            Sin WhatsApp IA
          </span>
          <button
            onClick={() => setWithWhatsApp(!withWhatsApp)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              withWhatsApp ? 'bg-primary' : 'bg-muted'
            }`}
          >
            <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-foreground transition-transform duration-300 ${
              withWhatsApp ? 'translate-x-7' : 'translate-x-0.5'
            }`} />
          </button>
          <span className={`text-sm font-semibold ${withWhatsApp ? 'text-foreground' : 'text-muted-foreground'}`}>
            Con WhatsApp IA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planList.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''} relative`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase">
                  Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground mb-4">{plan.name}</h3>
              
              <div className="mb-6">
              {plan.price !== null ? (
                  <>
                    <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                    <p className="text-muted-foreground text-sm mt-1">{plan.period}</p>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-bold gradient-text">{'priceLabel' in plan ? (plan as any).priceLabel : 'CONSULTAR'}</span>
                    <p className="text-muted-foreground text-sm mt-1">{plan.period}</p>
                  </>
                )}
              </div>

              <a 
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white glow-primary'
                    : 'border border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {plan.cta}
              </a>

              <div className="space-y-3">
                {plan.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
