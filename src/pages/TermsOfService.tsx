import { motion, type Variants } from "framer-motion";
import { Scale, FileText, CheckCircle, AlertTriangle, HelpCircle, ChevronRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "acceptance",
    icon: CheckCircle,
    title: "1. Acceptance of Terms",
    content: [
      {
        heading: "Agreement",
        text: "By downloading, accessing, or using the Ziptron app, website, or EV charging stations, you agree to be bound by these Terms of Service. If you do not agree, you must not use our services.",
      },
      {
        heading: "Eligibility",
        text: "You must be at least 18 years old and capable of forming a binding contract to use our services.",
      },
    ],
  },
  {
    id: "services",
    icon: FileText,
    title: "2. Our Services",
    content: [
      {
        heading: "Charging Network",
        text: "Ziptron provides access to EV charging stations. We strive for high availability but do not guarantee uninterrupted service or compatibility with all vehicle models.",
      },
      {
        heading: "App Usage",
        text: "The Ziptron app allows you to locate stations, start/stop charging sessions, and process payments. You are responsible for keeping your account credentials secure.",
      },
    ],
  },
  {
    id: "user-obligations",
    icon: Scale,
    title: "3. User Obligations",
    content: [
      {
        heading: "Proper Usage",
        text: "You agree to use the charging stations safely and according to the instructions provided. You must not tamper with, damage, or misuse the equipment.",
      },
      {
        heading: "Parking Rules",
        text: "You must observe all local parking signs and regulations. Ziptron is not responsible for parking fines or towing fees incurred while using our stations.",
      },
    ],
  },
  {
    id: "payments",
    icon: FileText,
    title: "4. Payments & Billing",
    content: [
      {
        heading: "Fees",
        text: "Charging fees are displayed in the app before you initiate a session. Rates may vary based on location, time, and charging speed.",
      },
      {
        heading: "Billing",
        text: "You authorize Ziptron to charge your selected payment method for all fees incurred. In case of failed payments, your account may be suspended.",
      },
    ],
  },
  {
    id: "liability",
    icon: AlertTriangle,
    title: "5. Limitation of Liability",
    content: [
      {
        heading: "Disclaimer",
        text: "Services are provided 'as is' without warranties of any kind. Ziptron is not liable for indirect, incidental, or consequential damages arising from your use of the services.",
      },
      {
        heading: "Vehicle Damage",
        text: "Ziptron is not responsible for any damage to your vehicle resulting from improper use of the charging equipment or pre-existing vehicle defects.",
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12)_0%,transparent_60%)]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              <Scale className="w-4 h-4" />
              Last updated: March 25, 2026
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Terms of{" "}
              <span className="gradient-text">Service</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              These Terms of Service govern your use of the Ziptron app, website, and electric vehicle charging network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-y border-border/30 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary hover:bg-primary/10 border border-border/40 hover:border-primary/40 text-muted-foreground hover:text-primary text-sm transition-all duration-200"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                {section.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Intro card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 mb-12"
            >
              <p className="text-foreground/90 text-base leading-relaxed">
                Welcome to <span className="text-primary font-semibold">Ziptron Mobility Pvt. Ltd.</span> ("Ziptron",
                "we", "our", "us"). Please read these Terms of Service carefully before using our services. 
                By using any Ziptron service, you accept these terms in full.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  variants={itemVariants}
                  className="scroll-mt-24"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  {/* Sub-sections */}
                  <div className="space-y-4 pl-0 md:pl-15">
                    {section.content.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/20 hover:bg-secondary/50 transition-all duration-200"
                      >
                        <h3 className="text-foreground font-semibold text-base mb-2 font-display">
                          {item.heading}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 h-px bg-border/20" />
                </motion.div>
              ))}

              {/* Changes to Policy */}
              <motion.div variants={itemVariants} id="policy-changes" className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Modifications to Terms
                  </h2>
                </div>
                <div className="p-5 rounded-xl bg-secondary/30 border border-border/30">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will provide notice of significant changes 
                    through our app or via email. Your continued use of the services after changes are made constitutes 
                    your acceptance of the modified Terms.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-16 glass-card rounded-2xl p-8 md:p-10 border border-primary/30 bg-primary/5 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-5">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                Questions About Our Terms?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have any questions or concerns regarding these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="mailto:support@ziptron.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@ziptron.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
