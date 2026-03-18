import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import AddToShopifyButton from "@/components/AddToShopifyButton";
import AppIcon from "@/components/AppIcon";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Hero />
      <div className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border-2 border-brass bg-card mb-6">
              <span className="text-sm uppercase tracking-widest text-brass font-semibold">
                Our Apps
              </span>
            </div>
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our First Two Apps</h2>
          </div>
          <div className="rope-divider w-48 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group border-2 border-brass bg-card/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Link to="/apps/dealsnap" className="block">
                <div className="h-64 bg-gradient-to-br from-brass to-aged-wood flex items-center justify-center p-6">
                  <AppIcon app="dealsnap" size="lg" className="!h-28 !w-28" />
                </div>
              </Link>
              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-3xl font-semibold text-foreground">DealSnap</h3>
                <p className="text-lg text-muted-foreground flex-grow">Mix & match or quantity discounts – instant AOV boosts.</p>
                <AddToShopifyButton appSlug="dealsnap" className="w-full sm:w-auto sm:min-w-[200px] justify-center" />
                <Link to="/apps/dealsnap" className="text-brass font-medium hover:underline text-center sm:text-left">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="group border-2 border-brass bg-card/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Link to="/apps/scratch-and-win" className="block">
                <div className="h-64 bg-gradient-to-br from-accent to-primary flex items-center justify-center p-6">
                  <AppIcon app="scratch-and-win" size="lg" variant="light" className="!h-28 !w-28" />
                </div>
              </Link>
              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-3xl font-semibold text-foreground">Scratch & Win</h3>
                <p className="text-lg text-muted-foreground flex-grow">Gamified scratch-off coupons for emails & repeat buys.</p>
                <AddToShopifyButton appSlug="scratch-and-win" className="w-full sm:w-auto sm:min-w-[200px] justify-center" />
                <Link to="/apps/scratch-and-win" className="text-brass font-medium hover:underline text-center sm:text-left">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
