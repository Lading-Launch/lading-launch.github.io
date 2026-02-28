import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const Maintenance = () => (
  <div className="min-h-screen relative">
    <Header />
    <main className="pt-36 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border-2 border-brass bg-card mb-6">
            <span className="text-sm uppercase tracking-widest text-brass font-semibold">
              Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Support & Maintenance</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Keep your ship seaworthy with ongoing support and maintenance. We handle the barnacles so you can focus on the horizon.
          </p>
        </div>
        <div className="rope-divider w-48 mx-auto mb-16" />
        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="p-8 border-2 border-brass bg-card/95">
            <div className="flex items-start gap-6">
              <div className="p-4 border-2 border-brass bg-background shrink-0">
                <Wrench className="w-12 h-12 text-brass" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">What We Offer</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    Technical troubleshooting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    Performance optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    Security updates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    24/7 emergency support
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-brass text-anchor-dark px-10 py-5 rounded-full text-xl font-semibold hover:bg-brass/90 transition border-2 border-brass"
            >
              Get Support
            </Link>
            <p className="mt-6">
              <Link to="/services" className="text-brass font-medium hover:underline">
                ← All Services
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Maintenance;
