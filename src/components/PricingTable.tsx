import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import AddToShopifyButton from "@/components/AddToShopifyButton";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  highlight?: "most-popular" | "lifetime";
  badge?: string;
}

interface PricingTableProps {
  appName?: string;
  appSlug?: string;
  plans?: PricingPlan[];
}

const defaultPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    period: "/mo",
    features: ["1 bundle set or campaign", "Basic templates", "Up to 100 orders/mo", "Email support"],
    cta: "Get Started Free",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$14.99",
    period: "/mo",
    features: ["Unlimited bundles/campaigns", "Advanced customization", "Up to $5K extra revenue or 1K users", "Priority live chat"],
    cta: "Install & Upgrade",
    highlight: "most-popular",
    badge: "Most Popular",
  },
  {
    id: "scale",
    name: "Scale",
    price: "$29.99",
    period: "/mo",
    features: ["Everything in Growth", "A/B testing & analytics", "Unlimited revenue/users", "Dedicated support"],
    cta: "Go Scale",
  },
  {
    id: "lifetime",
    name: "Lifetime Early Bird",
    price: "$99",
    period: " one-time",
    features: ["Lifetime access to all features", "Future updates included", "Priority support forever"],
    cta: "Claim Lifetime Deal",
    highlight: "lifetime",
    badge: "Limited Time!",
  },
];

const PricingTable = ({ appName = "App", appSlug = "", plans = defaultPlans }: PricingTableProps) => {
  const lifetimeReason = appSlug ? `lifetime-${appSlug.replace(" ", "-")}` : "lifetime-bundle";
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Simple, Transparent Pricing</h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          Get started free. Scale as you grow. Special lifetime deal for our first {appName} users!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const isPopular = plan.highlight === "most-popular";
            const isLifetime = plan.highlight === "lifetime";

            return (
              <div
                key={plan.id}
                className={`
                  rounded-3xl shadow-lg p-8 flex flex-col relative
                  ${isPopular ? "bg-primary text-primary-foreground shadow-2xl border-4 border-brass" : ""}
                  ${isLifetime ? "bg-gradient-to-br from-accent to-primary text-primary-foreground shadow-2xl" : ""}
                  ${!isPopular && !isLifetime ? "bg-card border-2 border-brass" : ""}
                `}
              >
                {plan.badge && (
                  <span
                    className={`
                      absolute top-0 font-bold text-sm px-4 py-1 rounded-b-lg
                      ${isPopular ? "right-6 bg-brass text-anchor-dark" : ""}
                      ${isLifetime ? "left-6 bg-brass text-anchor-dark" : ""}
                    `}
                  >
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-5xl font-bold mb-2">
                  {plan.price}
                  <span className="text-xl font-normal">{plan.period}</span>
                </p>
                {isLifetime && (
                  <p className="text-sm mb-4 opacity-90">(First 100 users only – for {appName})</p>
                )}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check
                        className={`h-5 w-5 shrink-0 ${
                          isPopular || isLifetime ? "text-primary-foreground" : "text-brass"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {isLifetime ? (
                  <Link
                    to={`/contact?reason=${lifetimeReason}`}
                    className="mt-auto py-4 rounded-full font-semibold transition bg-primary-foreground text-primary hover:opacity-90 text-center inline-flex items-center justify-center"
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <AddToShopifyButton
                    appSlug={appSlug}
                    className="mt-auto w-full justify-center"
                    variant={isPopular ? "light" : "default"}
                  />
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center mt-12 text-muted-foreground">
          All plans include free install on development stores. Billed monthly in USD. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingTable;
