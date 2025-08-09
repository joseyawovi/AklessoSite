import { useState } from "react";
import { Button } from "@/components/ui/button";

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
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">AJD</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-charcoal dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-accueil"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('biographie')}
                className="text-charcoal dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-biographie"
              >
                Biographie
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className="text-charcoal dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-vision"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('articles')}
                className="text-charcoal dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-articles"
              >
                Articles
              </button>
              <button 
                onClick={() => scrollToSection('medias')}
                className="text-charcoal dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-medias"
              >
                Médias
              </button>
              <button 
                onClick={() => scrollToSection('projets')}
                className="text-charcoal dark:text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-projets"
              >
                Projets
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal dark:text-gray-300 hover:text-primary focus:outline-none focus:text-primary"
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars text-xl"></i>
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