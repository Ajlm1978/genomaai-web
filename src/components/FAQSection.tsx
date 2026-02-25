
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Por qué Fenix IA?',
    answer: 'Fenix IA ofrece la plataforma más completa de Agentes de Inteligencia Artificial que combina automatización en todos los canales digitales: WhatsApp, Redes Sociales, Llamadas Telefónicas, Correos y Páginas Web.'
  },
  {
    question: '¿Por qué es Omnicanal?',
    answer: 'Porque nuestros Agentes IA pueden operar simultáneamente en WhatsApp, Facebook, Instagram, llamadas telefónicas, correos electrónicos y páginas web, brindando una experiencia unificada a tus clientes.'
  },
  {
    question: '¿Cómo se compara Fenix IA a un equipo humano?',
    answer: 'Fenix IA trabaja 24/7 sin descanso, responde en menos de 5 segundos, maneja múltiples conversaciones simultáneamente y nunca tiene días malos. Todo esto a una fracción del costo de un equipo humano.'
  },
  {
    question: '¿Cómo puedo revisar las llamadas de Fenix IA?',
    answer: 'Todas las llamadas quedan grabadas y transcritas automáticamente dentro de nuestro CRM integrado. Puedes revisar cada interacción, escuchar las grabaciones y ver los resúmenes generados por la IA.'
  },
  {
    question: '¿Necesito tener un CRM para usar Fenix IA?',
    answer: 'No, Fenix IA incluye un CRM 100% gratuito. Sin embargo, también podemos conectarnos con tu CRM de preferencia como HubSpot, Salesforce, o cualquier otro.'
  },
  {
    question: '¿Puede Fenix IA integrarse con mi CRM?',
    answer: 'Sí, Fenix IA se integra con los principales CRMs del mercado. Nuestro equipo de soporte te ayudará con la configuración e integración completa.'
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">¿Aún no estás convencido?</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
