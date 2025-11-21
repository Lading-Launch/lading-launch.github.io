import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative nautical elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl">⚓</div>
        <div className="absolute bottom-20 right-10 text-9xl rotate-45">⚓</div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo placeholder - will be replaced with actual logo */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 border-4 border-brass bg-card/80 backdrop-blur-sm">
              <Anchor className="w-12 h-12 text-brass" />
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-none">
                  Lading & Launch
                </h1>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">
                  Est. 2024
                </p>
              </div>
            </div>
          </div>
          
          <div className="rope-divider w-32 mx-auto mb-8"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Charting Your Course in
            <br />
            <span className="text-brass">Digital Commerce</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Navigate the waters of Shopify eCommerce with an experienced crew. 
            From maiden voyage to full sail, we build, maintain, and enhance your digital storefront.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-anchor-dark text-lg px-8 py-6 border-2 border-brass shadow-lg"
            >
              Set Sail With Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-brass text-foreground hover:bg-brass hover:text-card text-lg px-8 py-6"
            >
              Explore Our Fleet
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path 
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
