import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "@/assets/lading_launch_hero.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-brass/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Lading & Launch" className="h-12 w-auto" />
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-brass font-semibold">
                Home
              </Link>
              <Link to="/blog" className="text-foreground/80 hover:text-brass transition-colors">
                Captain's Log
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Decorative nautical elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl">⚓</div>
        <div className="absolute bottom-20 right-10 text-9xl rotate-45">⚓</div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center px-8 py-6 border-4 border-brass bg-card/80 backdrop-blur-sm shadow-lg">
              <img 
                src={logo} 
                alt="Lading & Launch Logo" 
                className="h-24 md:h-32 w-auto"
              />
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
            <ScrollLink 
              to="services"
              smooth={true}
              duration={600}
              offset={-80}
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-anchor-dark text-lg px-8 py-6 border-2 border-brass shadow-lg"
              >
                Set Sail With Us
              </Button>
            </ScrollLink>
            <ScrollLink 
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-brass text-foreground hover:bg-brass hover:text-card text-lg px-8 py-6"
              >
              Explore Our Fleet
              </Button>
            </ScrollLink>
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
