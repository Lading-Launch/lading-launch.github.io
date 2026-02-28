import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToShopifyButton from "@/components/AddToShopifyButton";
import AppIcon from "@/components/AppIcon";

const Apps = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <section className="py-20 pt-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Our Apps</h1>
          <p className="text-2xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            Built from real client implementation pain points. Simple, fast, and designed to grow your revenue 24/7.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-2 border-brass bg-card/95 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Link to="/apps/bundle-builder" className="block">
                <div className="h-80 bg-gradient-to-br from-brass to-aged-wood flex items-center justify-center p-8">
                  <AppIcon app="bundle-builder" size="lg" className="!h-36 !w-36" />
                </div>
              </Link>
              <div className="p-10 flex flex-col gap-4">
                <h2 className="text-4xl font-semibold text-foreground">Bundle Builder</h2>
                <p className="text-xl text-muted-foreground flex-grow">Pick combinations or buy sets for automatic discounts. Perfect for increasing average order value effortlessly.</p>
                <AddToShopifyButton appSlug="bundle-builder" className="w-full sm:w-auto sm:min-w-[220px] justify-center" />
                <Link to="/apps/bundle-builder" className="text-brass font-medium text-lg hover:underline">
                  Explore Bundle Builder →
                </Link>
              </div>
            </div>

            <div className="border-2 border-brass bg-card/95 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <Link to="/apps/scratch-and-win" className="block">
                <div className="h-80 bg-gradient-to-br from-accent to-primary flex items-center justify-center p-8">
                  <AppIcon app="scratch-and-win" size="lg" variant="light" className="!h-36 !w-36" />
                </div>
              </Link>
              <div className="p-10 flex flex-col gap-4">
                <h2 className="text-4xl font-semibold text-foreground">Scratch & Win</h2>
                <p className="text-xl text-muted-foreground flex-grow">Fun, gamified scratch cards that capture emails and drive urgency & repeat purchases.</p>
                <AddToShopifyButton appSlug="scratch-and-win" className="w-full sm:w-auto sm:min-w-[220px] justify-center" />
                <Link to="/apps/scratch-and-win" className="text-brass font-medium text-lg hover:underline">
                  Explore Scratch & Win →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Apps;
