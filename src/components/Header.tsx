
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '17869484685';
    const message = 'Hola, me interesa conocer más sobre Fenix AI';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/b786050e-9f4e-47ed-9196-92f840bc316b.png" 
                alt="Fenix AI Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">FENIX AI</h1>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Inteligencia Artificial</p>
            </div>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-primary transition-colors px-4 py-2 text-sm font-medium">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-primary transition-colors text-sm font-medium">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="glass p-4 w-64 bg-background/95 backdrop-blur-md border border-white/10">
                    <div className="space-y-1">
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Sales AI Assistant
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Inventory Management AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Collections & Billing AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Social Media AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Lead Prospector AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Customer Service AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Marketing Automation AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Data Analytics AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        HR Assistant AI
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                        Financial Planning AI
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-primary transition-colors text-sm font-medium">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="glass p-4 w-80 bg-background/95 backdrop-blur-md border border-white/10">
                    <p className="text-white text-sm leading-relaxed">
                      Empowering businesses with cutting-edge AI solutions and intelligent automation.
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-primary transition-colors text-sm font-medium">
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="glass p-4 w-64 bg-background/95 backdrop-blur-md border border-white/10">
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="text-gray-400">Email:</p>
                        <a href="mailto:info@fenixaiconsulting.com" className="text-primary hover:text-primary/80">
                          info@fenixaiconsulting.com
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-400">Phone:</p>
                        <a href="tel:+17869484685" className="text-primary hover:text-primary/80">
                          +1 (786) 948-4685
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-400">Location:</p>
                        <p className="text-white">3001 Aloma Ave</p>
                        <p className="text-white">Suite 212</p>
                        <p className="text-white">Winter Park, FL 32792</p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Chat Assistant Button */}
          <div className="flex items-center">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold glow-primary"
              onClick={handleWhatsAppClick}
            >
              Chat Assistant
            </Button>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
