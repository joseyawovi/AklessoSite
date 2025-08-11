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
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-white dark:from-blue-900 dark:to-gray-900 min-h-screen flex items-center">
      {/* Animated particles background */}
      <ParticlesBackground />
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-secondary/30 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-secondary/40 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 right-20 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
              <span className="text-secondary font-semibold text-lg tracking-wide">VISIONNAIRE AFRICAIN</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-shadow" data-testid="text-hero-title">
              <span className="gradient-text">Aklesso</span><br />
              <span className="text-white">Jonas Daou</span>
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-secondary" />
                <span className="text-lg text-blue-100">Entrepreneur Togolais</span>
              </div>
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-lg text-blue-100">Président du Groupe ZENER</span>
              </div>
            </div>
            
            {/* Quote Block */}
            <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-white/10 rounded-r-lg">
              <p className="text-lg italic text-blue-50" data-testid="text-hero-quote">
                "L'Afrique détient les clés de son avenir énergétique. Notre mission est de transformer cette vision en réalité durable."
              </p>
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('vision')}
                className="group bg-secondary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-xl"
                data-testid="button-discover-vision"
              >
                <span className="flex items-center space-x-2">
                  <span>Découvrir ma vision</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 shadow-xl"
                data-testid="button-contact-me"
              >
                <span className="flex items-center space-x-2">
                  <span>Me contacter</span>
                  <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
          
          <div className="lg:text-right animate-scale-in" style={{animationDelay: '0.5s'}}>
            <div className="relative inline-block">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-3xl blur-2xl transform scale-110"></div>
              
              <div className="relative">
                <img 
                  src={jonasHeroImage} 
                  alt="Aklesso Jonas Daou" 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                  data-testid="img-hero-photo"
                />
                
                {/* Floating icons around the image */}
                <div className="absolute -top-4 -left-4 bg-secondary w-16 h-16 rounded-full flex items-center justify-center shadow-xl animate-float z-20">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl animate-float z-20" style={{animationDelay: '1s'}}>
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                
                <div className="absolute top-10 -right-8 bg-primary/20 glass-effect w-14 h-14 rounded-full flex items-center justify-center animate-float z-20" style={{animationDelay: '3s'}}>
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}