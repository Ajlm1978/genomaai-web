
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
                  <div className="glass p-4 w-48">
                    <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                      Automation
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                      Analytics
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block text-white hover:text-primary transition-colors px-2 py-1 text-sm">
                      Integration
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-primary transition-colors px-4 py-2 text-sm font-medium">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white hover:text-primary transition-colors px-4 py-2 text-sm font-medium">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex border-white/20 text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold glow-primary"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
