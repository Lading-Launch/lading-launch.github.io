import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Hero = () => {
  return (
    <>
      <Header />
      <section className="relative bg-gradient-to-br from-primary to-anchor-dark text-primary-foreground py-24 md:py-32 pt-40 md:pt-44">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shopify apps built by the team that implements stores every week
          </h1>
          <p className="text-xl md:text-3xl text-primary-foreground/90 max-w-4xl mx-auto mb-10">
            We turned the features our clients ask for most into simple, powerful apps.<br />
            Now launching: DealSnap & Scratch & Win
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/apps"
              className="bg-brass text-anchor-dark px-10 py-5 rounded-full text-xl font-semibold hover:bg-brass/90 transition"
            >
              Explore our apps
            </Link>
            <Link
              to="/services"
              className="border-2 border-brass text-primary-foreground px-10 py-5 rounded-full text-xl font-semibold hover:bg-brass/20 transition"
            >
              Still need a custom build? →
            </Link>
          </div>
          <p className="mt-10 text-primary-foreground/70">No bloat. Real merchant results. White-glove support from the developers themselves.</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
