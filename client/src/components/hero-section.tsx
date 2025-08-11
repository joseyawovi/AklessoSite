import { ArrowRight, Play, Sparkles, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./particles-background";
import jonasHeroImage from "@assets/photos de jonas-1-jonas pour section hero_1754715375681.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative bg-white dark:bg-gray-900 min-h-screen flex items-center">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, #2563eb 1px, transparent 1px), radial-gradient(circle at 75% 75%, #2563eb 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm tracking-wide">PRÉSIDENT & CEO</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight" data-testid="text-hero-title">
                Aklesso Jonas <span className="text-primary">Daou</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Président du Groupe ZENER
              </p>
            </div>
            
            {/* Professional credentials */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Entrepreneur & Leader en Énergie Renouvelable</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Visionnaire du Développement Durable en Afrique</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Expert en Solutions Énergétiques Innovantes</span>
              </div>
            </div>
            
            {/* Professional quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
              <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed" data-testid="text-hero-quote">
                "L'Afrique détient les clés de son avenir énergétique. Notre mission est de transformer cette vision en réalité durable pour les générations futures."
              </p>
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('vision')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                data-testid="button-discover-vision"
              >
                <span className="flex items-center space-x-2">
                  <span>Découvrir ma Vision</span>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                data-testid="button-contact-me"
              >
                <span className="flex items-center space-x-2">
                  <span>Prendre Contact</span>
                  <Play className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
          
          {/* Professional portrait */}
          <div className="lg:text-right">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl transform rotate-3"></div>
              
              <img 
                src={jonasHeroImage} 
                alt="Aklesso Jonas Daou - Président du Groupe ZENER" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-700 bg-white"
                data-testid="img-hero-photo"
              />
              
              {/* Professional credential badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary">CEO & Président</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Groupe ZENER</p>
                </div>
              </div>
              
              {/* Achievement indicators */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="text-sm font-bold">15+</p>
                  <p className="text-xs">Années</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}