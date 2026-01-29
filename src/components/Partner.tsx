import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Handshake, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Earn attractive returns on your investment with our revenue-sharing model.",
  },
  {
    icon: Building2,
    title: "Full Support",
    description: "We handle installation, maintenance, and customer support.",
  },
  {
    icon: Handshake,
    title: "Easy Partnership",
    description: "Simple onboarding process with transparent terms and conditions.",
  },
];

export default function Partner() {
  return (
    <section id="partner" className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Franchise Opportunity
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Partner
              <br />
              <span className="gradient-accent-text">With Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Join India's fastest-growing EV charging network. Start your own EV charging 
              business with Ziptron and be part of the sustainable mobility revolution.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="xl">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-[60px]" />
              
              <h3 className="text-2xl font-display font-bold text-foreground mb-8 relative z-10">
                Why Partner with Ziptron?
              </h3>

              <div className="space-y-8 relative z-10">
                {[
                  { value: "₹5L+", label: "Monthly Revenue Potential" },
                  { value: "25%", label: "Average ROI" },
                  { value: "200+", label: "Active Franchise Partners" },
                  { value: "24/7", label: "Technical Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="text-2xl font-display font-bold text-accent">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
