import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Anchor, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border-2 border-brass bg-card mb-6">
              <span className="text-sm uppercase tracking-widest text-brass font-semibold">
                Ready to Set Sail?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chart Your Course With Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Send a message and we'll plot the perfect route for your eCommerce journey
            </p>
          </div>
          
          <div className="rope-divider w-48 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="md:col-span-2 p-8 border-2 border-brass bg-card/95 backdrop-blur-sm">
              <form className="space-y-6" action="https://formsubmit.co/ahoy@ladingandlaunch.com" method="POST">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                      Captain's Name
                    </label>
                    <Input 
                      className="border-2 border-brass bg-background" 
                      name="name"
                      placeholder="John Silver"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                      Signal Flag (Email)
                    </label>
                    <Input 
                      type="email"
                      name="email"
                      className="border-2 border-brass bg-background" 
                      placeholder="captain@vessel.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Your Vessel's Name
                  </label>
                  <Input 
                    className="border-2 border-brass bg-background" 
                    name="company"
                    placeholder="The Trading Co."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">
                    Message in a Bottle
                  </label>
                  <Textarea 
                    className="border-2 border-brass bg-background min-h-32" 
                    name="message"
                    placeholder="Tell us about your eCommerce voyage..."
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-anchor-dark border-2 border-brass text-lg py-6"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 border-2 border-brass bg-card/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 border-2 border-brass bg-background">
                    <Anchor className="w-6 h-6 text-brass" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Harbor Master</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for consultations and emergency support
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 border-brass bg-card/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 border-2 border-brass bg-background">
                    <Mail className="w-6 h-6 text-brass" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Signal Office</h3>
                    <p className="text-sm text-muted-foreground">
                      hello@ladinglaunch.com
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 border-brass bg-card/95 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 border-2 border-brass bg-background">
                    <MapPin className="w-6 h-6 text-brass" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Port Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Operating from ports worldwide
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
