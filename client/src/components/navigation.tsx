import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import jonasPortraitImage from "@assets/photos de jonas-4-jonas_1754715375685.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Professional logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Jonas Daou</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Groupe ZENER</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation Premium */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: 'accueil', label: 'Accueil' },
              { id: 'biographie', label: 'Biographie' },
              { id: 'vision', label: 'Vision' },
              { id: 'articles', label: 'Articles' },
              { id: 'projets', label: 'Projets' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-charcoal dark:text-gray-300 hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 group"
                data-testid={`nav-${item.id}`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
            
            {/* Professional CTA Button */}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md"
              data-testid="nav-cta-contact"
            >
              Contact
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal dark:text-gray-300 hover:text-primary focus:outline-none focus:text-primary"
              data-testid="button-mobile-menu"
            >
{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-charcoal dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-accueil"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('biographie')}
                className="text-charcoal dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-biographie"
              >
                Biographie
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className="text-charcoal dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-vision"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('articles')}
                className="text-charcoal dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-articles"
              >
                Articles
              </button>
              <button 
                onClick={() => scrollToSection('medias')}
                className="text-charcoal dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-medias"
              >
                Médias
              </button>
              <button 
                onClick={() => scrollToSection('projets')}
                className="text-charcoal dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-projets"
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-charcoal dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}