import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const Components = () => (
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Shopify Components</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium components and sections ready to drop into your store. Battle-tested cargo for your digital vessel.
          </p>
        </div>
        <div className="rope-divider w-48 mx-auto mb-16" />
        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="p-8 border-2 border-brass bg-card/95">
            <div className="flex items-start gap-6">
              <div className="p-4 border-2 border-brass bg-background shrink-0">
                <Package className="w-12 h-12 text-brass" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">What We Offer</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    Plug-and-play installation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    Customizable styling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    Regular updates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass">▸</span>
                    Documentation included
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
              Explore Components
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

export default Components;
