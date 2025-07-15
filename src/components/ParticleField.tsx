
import React, { useEffect, useRef } from 'react';

const ParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;
    
    const container = containerRef.current;
    if (!container) return;

    try {
      // Create particles
      const particles = Array.from({ length: 50 }, (_, i) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 6}s`;
      particle.style.animationDuration = `${6 + Math.random() * 4}s`;
      return particle;
    });

      particles.forEach(particle => container.appendChild(particle));

      return () => {
        particles.forEach(particle => {
          if (container.contains(particle)) {
            container.removeChild(particle);
          }
        });
      };
    } catch (error) {
      console.error('Error creating particles:', error);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleField;
