import { Card } from "@/components/ui/card";
import { Ship, Wrench, Package } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "New Site Builds",
    description: "Launch your eCommerce venture with a custom-built Shopify store. From hull to helm, we craft digital storefronts that turn browsers into buyers.",
    features: [
      "Custom theme development",
      "Product catalog setup",
      "Payment gateway integration",
      "Mobile-optimized design"
    ]
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "Keep your ship seaworthy with ongoing support and maintenance. We handle the barnacles so you can focus on the horizon.",
    features: [
      "Technical troubleshooting",
      "Performance optimization",
      "Security updates",
      "24/7 emergency support"
    ]
  },
  {
    icon: Package,
    title: "Shopify Components",
    description: "Premium components and sections ready to drop into your store. Battle-tested cargo for your digital vessel.",
    features: [
      "Plug-and-play installation",
      "Customizable styling",
      "Regular updates",
      "Documentation included"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border-2 border-brass bg-card mb-6">
            <span className="text-sm uppercase tracking-widest text-brass font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Pillars of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every successful voyage requires preparation, maintenance, and quality provisions
          </p>
        </div>
        
        <div className="rope-divider w-48 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 border-2 border-brass bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 inline-block p-4 border-2 border-brass bg-background">
                  <Icon className="w-10 h-10 text-brass" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brass mt-1">▸</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
