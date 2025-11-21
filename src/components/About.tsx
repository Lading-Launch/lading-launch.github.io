import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-24 bg-muted/30 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 border-4 border-brass bg-card/95 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-6 py-2 border-2 border-brass bg-background mb-6">
                  <span className="text-sm uppercase tracking-widest text-brass font-semibold">
                    About Our Crew
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold mb-6">
                  Navigating Digital Commerce Since the Dawn of Shopify
                </h2>
                
                <div className="rope-divider w-24 mb-6"></div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Like the great shipping houses of the 1850s that connected continents and 
                  transformed commerce, <strong className="text-foreground">Lading & Launch</strong> bridges 
                  the gap between your vision and digital success.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our seasoned crew brings decades of combined experience in Shopify development, 
                  having launched hundreds of stores and navigated countless technical challenges.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're charting new waters or need a steady hand to guide your existing 
                  vessel, we're committed to ensuring your eCommerce journey is both profitable 
                  and seaworthy.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brass pl-6">
                  <h3 className="text-2xl font-bold mb-2">200+</h3>
                  <p className="text-muted-foreground">Stores Launched</p>
                </div>
                
                <div className="border-l-4 border-brass pl-6">
                  <h3 className="text-2xl font-bold mb-2">15 Years</h3>
                  <p className="text-muted-foreground">Combined Experience</p>
                </div>
                
                <div className="border-l-4 border-brass pl-6">
                  <h3 className="text-2xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Components Built</p>
                </div>
                
                <div className="border-l-4 border-brass pl-6">
                  <h3 className="text-2xl font-bold mb-2">24/7</h3>
                  <p className="text-muted-foreground">Support Available</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
