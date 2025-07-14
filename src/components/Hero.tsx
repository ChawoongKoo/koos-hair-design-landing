import { Button } from "@/components/ui/button";
import { Scissors, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-hero-foreground px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-elegant-gold mr-2" />
          <Scissors className="w-8 h-8 text-elegant-gold" />
        </div>
        
        <h1 className="font-elegant text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          KOO'S WIGS
          <span className="block text-3xl md:text-5xl font-normal tracking-wider mt-2">
            & DESIGN
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-hero-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Premium quality wigs and professional hair services to transform your look and boost your confidence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="elegant" size="lg" className="px-8 py-6 text-lg">
            Browse Our Collection
          </Button>
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            Book Consultation
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hero-foreground/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;