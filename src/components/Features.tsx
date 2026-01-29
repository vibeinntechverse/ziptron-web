import { motion } from "framer-motion";
import { Zap, Shield, Clock, Smartphone, MapPin, CreditCard } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra-Fast Charging",
    description: "Experience lightning-fast charging with our DC fast chargers delivering up to 150kW of power.",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Extensive Network",
    description: "Access 5000+ charging points across 100+ cities. Never worry about range anxiety again.",
    color: "accent",
  },
  {
    icon: Smartphone,
    title: "Smart App Control",
    description: "Monitor charging, find stations, and pay seamlessly through our intuitive mobile app.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Industry-leading safety standards with 24/7 monitoring and certified equipment.",
    color: "accent",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our charging stations are available round the clock for your convenience.",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Multiple payment options including UPI, cards, and our Ziptron wallet.",
    color: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Ziptron
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Powering the Future of
            <span className="gradient-text"> Electric Mobility</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the best EV charging infrastructure with cutting-edge technology
            and unmatched convenience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card p-8 h-full transition-all duration-300 hover:border-primary/30 hover:bg-card/70">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border border-primary/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
