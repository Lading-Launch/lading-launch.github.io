import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";
import AddToShopifyButton from "@/components/AddToShopifyButton";
import AppIcon from "@/components/AppIcon";

const ScratchAndWin = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="py-20 pt-36">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-foreground">
            Scratch & Win – Turn visitors into excited buyers
          </h1>
          <p className="text-2xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            Gamified scratch-off coupons that capture emails, create urgency, and encourage sharing.
          </p>

          {/* Hero / demo section – add placeholder image or video later */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12 mb-16 text-center border-2 border-brass">
            <div className="flex justify-center mb-4">
              <AppIcon app="scratch-and-win" size="lg" />
            </div>
            <p className="text-3xl font-medium text-foreground">[Demo video or screenshot placeholder – coming soon]</p>
            <p className="mt-8 text-xl text-muted-foreground">Launching Q2 2026 – early access & beta testing available for our current clients.</p>
          </div>

          {/* Features list, CTA, cross-link to Bundle Builder */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-foreground">Key Features</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li>✅ Unlimited campaigns</li>
                <li>✅ Email capture & list building</li>
                <li>✅ Referral bonuses</li>
                <li>✅ Post-purchase triggers</li>
                <li>✅ Shareable scratch cards for viral growth</li>
              </ul>
            </div>

            <div className="text-center md:text-left space-y-4">
              <AddToShopifyButton appSlug="scratch-and-win" className="inline-flex" />
              <Link
                to="/contact"
                className="block bg-brass text-anchor-dark px-10 py-5 rounded-full text-xl font-semibold hover:bg-brass/90 transition w-fit"
              >
                Get Early Access
              </Link>
              <p className="text-sm">
                <a href="#pricing" className="text-brass underline hover:no-underline">
                  See pricing below
                </a>
              </p>
              <p className="mt-6 text-muted-foreground">
                Pairs perfectly with our{" "}
                <Link to="/apps/bundle-builder" className="text-brass underline hover:no-underline">
                  Bundle Builder
                </Link>{" "}
                app for post-purchase surprise rewards.
              </p>
            </div>
          </div>

          <p className="mt-16 text-center">
            <Link to="/apps" className="text-brass font-medium hover:underline">
              ← Back to Apps
            </Link>
          </p>
        </div>
      </div>

      <div id="pricing">
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto px-6">
          Slightly lower entry pricing than Bundle Builder – perfect as a companion app!
        </p>
        <PricingTable appName="Scratch & Win" appSlug="scratch-and-win" />
      </div>

      <Footer />
    </div>
  );
};

export default ScratchAndWin;
