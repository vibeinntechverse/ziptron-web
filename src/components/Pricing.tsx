import { motion } from "framer-motion";
import { Check, Zap, Star, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Pay As You Go",
    icon: Zap,
    price: "₹15",
    unit: "/kWh",
    description: "Perfect for occasional EV users",
    features: [
      "No monthly commitment",
      "Access to all public stations",
      "Real-time station availability",
      "Pay via UPI, Cards, or Wallet",
      "Basic charging history",
    ],
    cta: "Start Charging",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Ziptron Plus",
    icon: Star,
    price: "₹499",
    unit: "/month",
    description: "Best value for daily commuters",
    features: [
      "₹12/kWh reduced rate",
      "Priority access to fast chargers",
      "Free charging credits (50 kWh)",
      "Detailed analytics & reports",
      "24/7 premium support",
      "Partner discounts & perks",
    ],
    cta: "Subscribe Now",
    variant: "electric" as const,
    popular: true,
  },
  {
    name: "Ziptron Pro",
    icon: Crown,
    price: "₹1,499",
    unit: "/month",
    description: "Unlimited freedom for power users",
    features: [
      "₹10/kWh lowest rate",
      "Unlimited fast charging access",
      "Free charging credits (200 kWh)",
      "Reserved charging slots",
      "Fleet management tools",
      "Dedicated account manager",
      "White-glove support",
    ],
    cta: "Go Pro",
    variant: "outline" as const,
    popular: false,
  },
];

const floatingFeatures = [
  "30-day money-back guarantee",
  "Cancel anytime",
  "No hidden fees",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Charging Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible plans designed for every EV owner. From occasional drivers to 
            daily commuters, we have the perfect plan for you.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card/80 border-2 border-primary/50"
                  : "bg-card/50 border border-border/50"
              } backdrop-blur-xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent to-amber-400 text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular
                      ? "bg-primary/20"
                      : "bg-secondary"
                  }`}
                >
                  <plan.icon
                    className={`w-7 h-7 ${
                      plan.popular ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.variant}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {floatingFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground text-sm"
            >
              <Check className="w-4 h-4 text-primary" />
              {feature}
            </div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-semibold text-foreground mb-1">
                Need a custom solution for your fleet?
              </h4>
              <p className="text-muted-foreground text-sm">
                Get tailored pricing for businesses with 10+ vehicles
              </p>
            </div>
            <Button variant="glow" size="lg">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
