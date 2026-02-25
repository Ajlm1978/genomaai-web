
import React from 'react';
import { Globe, Database, LayoutGrid } from 'lucide-react';

const PremiumFeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Con funciones premium </span>
            <span className="gradient-text">nunca antes vistas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Voice Cloning */}
          <div className="feature-card text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Clonación de Voces - Más de 12 idiomas</h3>
            <p className="text-muted-foreground leading-relaxed">
              Con más de 12 idiomas disponibles y clonación de voz podrás usar la entonación e idioma que prefieras.
            </p>
          </div>

          {/* CRM */}
          <div className="feature-card text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
              <Database className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">CRM Incluido 100% gratis</h3>
            <p className="text-muted-foreground leading-relaxed">
              Por la compra de Fenix IA, te incluimos un CRM integrado para que puedas gestionar y conectar con tus contactos.
            </p>
          </div>

          {/* +50 Apps */}
          <div className="feature-card text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <LayoutGrid className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">+50 Apps Disponibles</h3>
            <p className="text-muted-foreground leading-relaxed">
              WhatsApp, Facebook, Instagram, Llamadas Telefónicas, Email Marketing, Páginas Web, Embudos de Venta, CRM, OpenAI, Claude y más...
            </p>
            <p className="text-primary font-semibold mt-4">Todo en un sólo lugar</p>
          </div>
        </div>

        <div className="gradient-line mt-16" />

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

export default PremiumFeaturesSection;
