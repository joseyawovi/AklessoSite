import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Simple logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Jonas Daou</span>
          </div>
          
          {/* Simple desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
                className="text-gray-700 dark:text-gray-300 hover:text-primary text-sm font-medium transition-colors"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2"
              data-testid="nav-cta-contact"
            >
              Contact
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
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
                  className="text-gray-700 dark:text-gray-300 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}