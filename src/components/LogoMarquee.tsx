
import React from 'react';

const logos = [
  'TechCorp', 'FMDigital', 'InnovaTech', 'DataFlow', 'CloudSync',
  'NexGen', 'CyberEdge', 'SmartOps', 'AutomateX', 'AI Solutions'
];

const LogoMarquee = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Usado y recomendado por empresas de todos los tamaños
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center mx-8 md:mx-12">
              <span className="text-muted-foreground/40 text-xl md:text-2xl font-bold tracking-wider uppercase whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
