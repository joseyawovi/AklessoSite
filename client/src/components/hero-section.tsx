import { Button } from "@/components/ui/button";
import jonasHeroImage from "@assets/photos de jonas-1-jonas pour section hero_1754715375681.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-primary to-blue-900 text-white dark:from-blue-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-title">
              Aklesso Jonas Daou
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 font-light" data-testid="text-hero-subtitle">
              Entrepreneur Togolais & Président du Groupe ZENER
            </p>
            
            {/* Quote Block */}
            <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-white/10 rounded-r-lg">
              <p className="text-lg italic text-blue-50" data-testid="text-hero-quote">
                "L'Afrique détient les clés de son avenir énergétique. Notre mission est de transformer cette vision en réalité durable."
              </p>
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('vision')}
                className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                data-testid="button-discover-vision"
              >
                Découvrir ma vision
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                data-testid="button-contact-me"
              >
                Me contacter
              </Button>
            </div>
          </div>
          
          <div className="lg:text-right">
            {/* Professional photo placeholder */}
            <div className="relative inline-block">
              <img 
                src={jonasHeroImage} 
                alt="Aklesso Jonas Daou" 
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                data-testid="img-hero-photo"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary w-24 h-24 rounded-full flex items-center justify-center shadow-xl">
                <i className="fas fa-bolt text-primary text-2xl" data-testid="icon-hero-energy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}