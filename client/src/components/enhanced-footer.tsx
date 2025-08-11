import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Facebook, href: "#", name: "Facebook" }
  ];

  const quickLinks = [
    { name: "Biographie", href: "#biographie" },
    { name: "Vision", href: "#vision" },
    { name: "Projets", href: "#projets" },
    { name: "Médias", href: "#medias" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Professional CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Partenariat Stratégique pour l'Avenir Énergétique
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explorons ensemble les opportunités de collaboration dans le secteur énergétique africain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              data-testid="footer-cta-contact"
            >
              <span className="flex items-center space-x-2">
                <span>Initier une Collaboration</span>
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <Button 
              onClick={() => scrollToSection('newsletter')}
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              data-testid="footer-cta-newsletter"
            >
              Newsletter Professionnelle
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Aklesso Jonas Daou
              </h3>
              <p className="text-secondary font-semibold mb-4">Président du Groupe ZENER</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Entrepreneur visionnaire et leader dans le secteur énergétique africain. 
                Président du Groupe ZENER, je m'engage pour un avenir énergétique durable et accessible à tous.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="text-gray-300">contact@jonassdaou.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-gray-300">+228 XX XX XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-gray-300">Lomé, Togo</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navigation Rapide</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-secondary transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Suivez-moi</h4>
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`social-${social.name.toLowerCase()}`}
                    >
                      <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
              
              <div>
                <h5 className="text-md font-medium mb-4">Newsletter</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Recevez les dernières actualités et insights
                </p>
                <Button 
                  onClick={() => scrollToSection('newsletter')}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg"
                  data-testid="footer-newsletter-signup"
                >
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aklesso Jonas Daou. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}