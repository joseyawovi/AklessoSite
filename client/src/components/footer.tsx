export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-secondary" data-testid="text-footer-logo">AJD</span>
              <span className="ml-3 text-gray-300" data-testid="text-footer-name">Aklesso Jonas Daou</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md" data-testid="text-footer-description">
              Entrepreneur togolais passionné par le développement énergétique de l'Afrique 
              et l'accompagnement de la nouvelle génération d'entrepreneurs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-navigation">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                  data-testid="footer-nav-accueil"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('biographie')}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                  data-testid="footer-nav-biographie"
                >
                  Biographie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                  data-testid="footer-nav-vision"
                >
                  Vision
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('articles')}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                  data-testid="footer-nav-articles"
                >
                  Articles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projets')}
                  className="text-gray-300 hover:text-secondary transition-colors text-left"
                  data-testid="footer-nav-projets"
                >
                  Projets
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-contact">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li data-testid="text-footer-location">Lomé, Togo</li>
              <li data-testid="text-footer-email">contact@zenergroup.com</li>
              <li data-testid="text-footer-phone">+228 XX XX XX XX</li>
            </ul>
            
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-link-linkedin">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-link-twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors" data-testid="footer-link-youtube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="text-footer-copyright">&copy; 2024 Aklesso Jonas Daou. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}