import { Link } from "react-router-dom";
import logo from "@/assets/lading_launch.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t-4 border-brass relative">
      <div className="absolute top-0 left-0 right-0 h-1 rope-divider"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Lading & Launch Logo" 
                className="h-16 w-auto mb-2"
              />
              <p className="text-sm text-primary-foreground/70">Est. 2024</p>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Navigating the waters of Shopify eCommerce with expertise, 
              precision, and a commitment to your success.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brass">Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/apps" className="hover:text-brass transition-colors">Apps</Link></li>
              <li><Link to="/apps/dealsnap" className="hover:text-brass transition-colors">DealSnap</Link></li>
              <li><Link to="/apps/scratch-and-win" className="hover:text-brass transition-colors">Scratch & Win</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brass">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/services/new-builds" className="hover:text-brass transition-colors">New Builds</Link></li>
              <li><Link to="/services/maintenance" className="hover:text-brass transition-colors">Maintenance</Link></li>
              <li><Link to="/services/components" className="hover:text-brass transition-colors">Components</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brass">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-brass transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-brass transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-brass/30 pt-8 text-center text-primary-foreground/70">
          <p className="text-sm mb-4">
            © 2024 Lading & Launch. All rights reserved.
          </p>
          <p className="text-center text-primary-foreground/60 text-sm">
            Lading & Launch – Shopify apps built by a young, hands-on implementation agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
