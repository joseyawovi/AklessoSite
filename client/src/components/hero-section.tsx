import { ArrowRight, Mail } from "lucide-react";
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
    <section id="accueil" className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Simple professional content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight" data-testid="text-hero-title">
                Aklesso Jonas Daou
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Président du Groupe ZENER
              </p>
            </div>
            
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>• Entrepreneur en Énergie Renouvelable</p>
              <p>• Leader du Développement Durable en Afrique</p>
              <p>• Expert en Solutions Énergétiques</p>
            </div>
            
            <blockquote className="border-l-4 border-primary pl-4 py-2">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic" data-testid="text-hero-quote">
                "L'Afrique détient les clés de son avenir énergétique."
              </p>
            </blockquote>
            
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
                data-testid="button-contact-me"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
              <Button 
                onClick={() => scrollToSection('vision')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3"
                data-testid="button-discover-vision"
              >
                En savoir plus
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Simple professional portrait */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={jonasHeroImage} 
              alt="Aklesso Jonas Daou" 
              className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-lg shadow-lg"
              data-testid="img-hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}