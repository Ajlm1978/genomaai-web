
import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar py-2 px-4 text-center relative z-50">
      <div className="flex items-center justify-center gap-3 text-sm font-medium text-primary-foreground">
        <a 
          href="https://api.leadconnectorhq.com/widget/form/V75cRue7Ozu57pn6Ugqj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-semibold transition-colors"
        >
          Empieza hoy
        </a>
        <span>Automatiza y Escala tu Negocio con Agentes IA</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
