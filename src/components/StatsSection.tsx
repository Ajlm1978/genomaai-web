
import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Clientes Felices' },
  { value: 1200, suffix: '+', label: 'Agentes IA creados' },
  { value: 5, suffix: '+', label: 'Años de Experiencia' },
  { value: 50, suffix: '+', label: 'Empresas Felices' },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map(s => Math.round(s.value * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Desbloquea tu verdadero potencial </span>
            <span className="gradient-text">con Agentes IA</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
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

export default StatsSection;
