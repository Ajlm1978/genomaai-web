
import React from 'react';
import { Button } from '@/components/ui/button';

const EnterpriseCTA = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto text-center glass-card p-12 glow-primary">
        <p className="text-sm text-primary font-semibold uppercase tracking-widest mb-4">¿ERES EMPRESA?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-foreground">El Futuro ya está aquí </span>
          <span className="gradient-text">Crea tu Primer Agente IA</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Cotiza una infraestructura de Agentes de IA instalada por nosotros en tu negocio.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold px-10 py-4 rounded-full glow-primary transition-all duration-300 hover:scale-105"
        >
          <a href="https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj" target="_blank" rel="noopener noreferrer">
            COTIZA AHORA
          </a>
        </Button>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
