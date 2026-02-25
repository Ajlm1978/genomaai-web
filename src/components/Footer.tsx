
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-12">
      <div className="gradient-line" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Bienvenido Al Futuro.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/b786050e-9f4e-47ed-9196-92f840bc316b.png" 
                  alt="Fenix AI Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">FENIX AI</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Inteligencia Artificial</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fenix AI es un proveedor líder de soluciones de inteligencia artificial para automatización empresarial.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:info@fenixaiconsulting.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@fenixaiconsulting.com
              </a>
              <a href="tel:+17862337574" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +1 (786) 233-7574
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>2431 ALOMA AVE, SUITE 264, WINTER PARK, FL 32792</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link to="/terms-of-service" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Fenix AI. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Powered by Fenix AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
