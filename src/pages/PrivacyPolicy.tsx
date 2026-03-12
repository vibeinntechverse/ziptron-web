import { motion, type Variants } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Mail, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        heading: "Account Information",
        text: "When you register for a Ziptron account, we collect your name, email address, phone number, and payment details necessary to provide our EV charging services.",
      },
      {
        heading: "Location Data",
        text: "To help you find nearby charging stations, we collect your device's GPS location with your permission. You may disable location access at any time through your device settings, though this may limit certain features.",
      },
      {
        heading: "Usage Data",
        text: "We automatically collect information about your interactions with our app and charging stations, including charging session duration, energy consumed, timestamps, and station identifiers.",
      },
      {
        heading: "Device Information",
        text: "We collect device identifiers, operating system, browser type, and network information to optimize app performance and troubleshoot technical issues.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        heading: "Service Delivery",
        text: "We use your information to operate our charging network, process payments, send charging session confirmations, and provide customer support.",
      },
      {
        heading: "Personalization",
        text: "Your usage history and location data help us recommend nearby stations, suggest optimal charging times, and tailor in-app experiences to your preferences.",
      },
      {
        heading: "Safety & Security",
        text: "We analyze usage patterns to detect fraudulent transactions, unauthorized access attempts, and other security threats to protect you and our network.",
      },
      {
        heading: "Service Improvement",
        text: "Aggregated and anonymized data helps us improve station uptime, expand our network to underserved areas, and develop new features that serve the EV community better.",
      },
      {
        heading: "Communications",
        text: "We may send you transaction receipts, service updates, and promotional offers via email or push notifications. You can opt out of marketing communications at any time.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: UserCheck,
    title: "Data Sharing & Disclosure",
    content: [
      {
        heading: "Service Providers",
        text: "We share data with trusted third-party vendors who assist in payment processing, cloud hosting, analytics, and customer support. These partners are contractually bound to handle your data only as directed by Ziptron.",
      },
      {
        heading: "Charging Station Partners",
        text: "Station-level data (session initiation, duration, energy delivered) is shared with our hardware partners solely for network management and maintenance purposes.",
      },
      {
        heading: "Legal Requirements",
        text: "We may disclose your information when required by Indian law, court orders, or government authorities, or to protect the rights, property, and safety of Ziptron, our users, or the public.",
      },
      {
        heading: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the succeeding entity. We will notify you before your data becomes subject to a different privacy policy.",
      },
      {
        heading: "No Sale of Data",
        text: "Ziptron does not sell, rent, or trade your personal information to third parties for their own marketing purposes.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: [
      {
        heading: "Encryption",
        text: "All data transmitted between your device and our servers is encrypted using TLS 1.3. Payment card data is handled in compliance with PCI DSS standards and is never stored on our servers.",
      },
      {
        heading: "Access Controls",
        text: "Access to personal data within Ziptron is strictly limited to employees who need it to perform their job functions. All access is logged and audited regularly.",
      },
      {
        heading: "Data Retention",
        text: "We retain your account data for the duration of your active account and for up to 3 years after account closure to meet legal and regulatory obligations. Anonymized usage data may be retained indefinitely for analytics.",
      },
      {
        heading: "Incident Response",
        text: "In the unlikely event of a data breach, we will notify affected users and relevant authorities within 72 hours as required by applicable law, and take immediate steps to contain and remediate the incident.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: Shield,
    title: "Your Rights",
    content: [
      {
        heading: "Access & Portability",
        text: "You have the right to request a copy of the personal information Ziptron holds about you in a structured, machine-readable format at any time.",
      },
      {
        heading: "Correction",
        text: "If any information we hold about you is inaccurate or incomplete, you may request a correction through your account settings or by contacting our support team.",
      },
      {
        heading: "Deletion",
        text: "You may request deletion of your personal data. We will comply unless we are required to retain it for legal, regulatory, or fraud-prevention purposes.",
      },
      {
        heading: "Objection & Restriction",
        text: "You may object to or request restriction of how we process your data, particularly for direct marketing or profiling purposes.",
      },
      {
        heading: "Withdraw Consent",
        text: "Where processing is based on your consent (e.g., marketing emails), you may withdraw consent at any time without affecting the lawfulness of prior processing.",
      },
    ],
  },
  {
    id: "cookies",
    icon: Database,
    title: "Cookies & Tracking",
    content: [
      {
        heading: "Essential Cookies",
        text: "These cookies are necessary for the app and website to function correctly. They enable features like secure login sessions and shopping cart functionality and cannot be disabled.",
      },
      {
        heading: "Analytics Cookies",
        text: "We use analytics tools to understand how visitors interact with our website, which pages are most visited, and where improvements can be made. This data is aggregated and anonymized.",
      },
      {
        heading: "Preference Cookies",
        text: "These cookies remember your settings and preferences (e.g., language, map zoom level) to personalize your experience across visits.",
      },
      {
        heading: "Managing Cookies",
        text: "You can control cookies through your browser settings. Note that disabling certain cookies may affect functionality. Our cookie preference centre is available in the app settings.",
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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background effects */}
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
              <Shield className="w-4 h-4" />
              Last updated: March 12, 2026
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Privacy{" "}
              <span className="gradient-text">Policy</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              At Ziptron, your privacy is fundamental to everything we build. This policy explains what
              data we collect, how we use it, and the rights you have over your information.
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
                This Privacy Policy applies to all services offered by{" "}
                <span className="text-primary font-semibold">Ziptron Mobility Pvt. Ltd.</span> ("Ziptron",
                "we", "our", "us"), including our mobile application, website, and EV charging network.
                By using our services, you agree to the collection and use of information in accordance
                with this policy. If you do not agree, please discontinue use of our services.
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

              {/* Children's Privacy */}
              <motion.div variants={itemVariants} id="childrens-privacy" className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Children's Privacy
                  </h2>
                </div>
                <div className="p-5 rounded-xl bg-secondary/30 border border-border/30">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ziptron's services are not directed at individuals under the age of 18. We do not
                    knowingly collect personal information from minors. If you believe a minor has
                    provided us with personal information, please contact us immediately at{" "}
                    <a
                      href="mailto:privacy@ziptron.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      privacy@ziptron.com
                    </a>{" "}
                    and we will take steps to delete such information.
                  </p>
                </div>
                <div className="mt-8 h-px bg-border/20" />
              </motion.div>

              {/* Changes to Policy */}
              <motion.div variants={itemVariants} id="policy-changes" className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Changes to This Policy
                  </h2>
                </div>
                <div className="p-5 rounded-xl bg-secondary/30 border border-border/30">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our
                    practices, technology, or legal requirements. When we make material changes, we will
                    notify you via email or a prominent in-app notice at least 30 days before the changes
                    take effect. Continued use of our services after notification constitutes acceptance
                    of the updated policy.
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
                Questions About Your Privacy?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our Data Protection Officer is here to help. Reach out with any questions, requests, or
                concerns about how Ziptron handles your personal data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="mailto:privacy@ziptron.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  privacy@ziptron.com
                </a>
                <span className="text-muted-foreground text-sm">
                  Ziptron Mobility Pvt. Ltd., Block D Farm-24, Gurugram, Haryana 122001
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
