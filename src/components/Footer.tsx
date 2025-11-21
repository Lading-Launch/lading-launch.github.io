import { Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t-4 border-brass relative">
      <div className="absolute top-0 left-0 right-0 h-1 rope-divider"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="w-8 h-8 text-brass" />
              <div>
                <h3 className="text-2xl font-bold">Lading & Launch</h3>
                <p className="text-sm text-primary-foreground/70">Est. 2024</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Navigating the waters of Shopify eCommerce with expertise, 
              precision, and a commitment to your success.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brass">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-brass transition-colors">New Builds</a></li>
              <li><a href="#services" className="hover:text-brass transition-colors">Maintenance</a></li>
              <li><a href="#services" className="hover:text-brass transition-colors">Components</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brass">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-brass transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-brass transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brass transition-colors">Portfolio</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-brass/30 pt-8 text-center text-primary-foreground/70">
          <p className="text-sm">
            © 2024 Lading & Launch. All rights reserved. | Charting digital commerce since the modern age.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
