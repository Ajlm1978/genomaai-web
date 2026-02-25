
import React from 'react';
import { Search, Phone, Calendar, HeadphonesIcon, Globe, Database } from 'lucide-react';

const useCases = [
  {
    icon: Search,
    title: 'AGENTE IA PROSPECTADOR',
    description: 'Instala un Agente IA que contacte a tus clientes potenciales por teléfono o WhatsApp y los prospecte y perfile para una futura oportunidad comercial.'
  },
  {
    icon: Phone,
    title: 'AGENTE IA RECEPCIONISTA',
    description: 'Instala un Agente IA que responda todas las llamadas de tu negocio y atienda a tus clientes 24/7.'
  },
  {
    icon: Calendar,
    title: 'AGENTE IA AGENDAMIENTO DE CITAS',
    description: 'Instala un Agente IA que coordina fechas, revisa la disponibilidad y agenda las citas automáticamente en tu calendario de preferencia.'
  },
  {
    icon: HeadphonesIcon,
    title: 'AGENTE IA DE ATENCIÓN AL CLIENTE',
    description: 'Déjale la carga emocional de soportar reclamos a tu Agente IA que dejará todo perfectamente registrado en tu CRM.'
  },
  {
    icon: Globe,
    title: 'CRM INTEGRADO 100% GRATIS',
    description: 'Nuestros Agentes IA dejan la transcripción de las llamadas y anotan información importante dentro del CRM integrado 100% GRATIS.'
  },
  {
    icon: Database,
    title: 'AGENTE REACTIVACIÓN DE BASE DE DATOS',
    description: 'Activa Agentes IA que contacten una por una a toda tu base de datos, ya sea por llamadas telefónicas, correo o WhatsApp.'
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Revoluciona tu Industria </span>
            <span className="gradient-text">con agentes de inteligencia artificial</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="feature-card group cursor-pointer hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
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

export default UseCasesSection;
