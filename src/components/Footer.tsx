
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-24">
      <Separator className="mb-12" />
      
      <div className="container mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/b786050e-9f4e-47ed-9196-92f840bc316b.png" 
                  alt="Fenix AI Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">FENIX AI</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Inteligencia Artificial</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with cutting-edge AI solutions and intelligent automation.
            </p>
            <div className="text-sm text-gray-400">
              <p>Winter Park, Florida, USA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <a 
                href="#services" 
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Services
              </a>
              <a 
                href="#about" 
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Legal</h4>
            <div className="space-y-2">
              <Link 
                to="/privacy-policy" 
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="block text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">
                Contact us: <br />
                <a href="mailto:info@fenixaiconsulting.com" className="text-primary hover:text-primary/80">
                  info@fenixaiconsulting.com
                </a>
                <br />
                <a href="tel:+17862337574" className="text-primary hover:text-primary/80">
                  +1 (786) 233-7574
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Fenix AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Governed by the laws of the State of Florida, USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
