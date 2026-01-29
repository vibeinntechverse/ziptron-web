import { motion } from "framer-motion";
import { Zap, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to charge an EV at a Ziptron station?",
    answer: "Charging time depends on your vehicle's battery capacity and the charger type. With our DC fast chargers, you can get up to 80% charge in just 30-45 minutes. AC chargers typically take 4-8 hours for a full charge, making them ideal for overnight or workplace charging.",
  },
  {
    question: "What types of EVs are compatible with Ziptron chargers?",
    answer: "Ziptron chargers support all major EV brands including Tesla, Tata, MG, Hyundai, Kia, BMW, Mercedes, and more. We offer CCS2, CHAdeMO, and Type 2 connectors to ensure compatibility with virtually every electric vehicle on the market.",
  },
  {
    question: "How do I pay for charging sessions?",
    answer: "Payment is seamless through the Ziptron Miles app. Simply scan the QR code, start charging, and pay via UPI, credit/debit cards, or your Ziptron wallet. We also offer subscription plans for frequent users with discounted rates.",
  },
  {
    question: "Can I locate nearby charging stations?",
    answer: "Yes! The Ziptron Miles app shows real-time availability of all charging stations near you. You can filter by charger type, power output, and amenities. The app also provides navigation assistance to help you reach the station.",
  },
  {
    question: "What happens if there's a power outage during charging?",
    answer: "Our stations are equipped with surge protection and graceful shutdown mechanisms. If power is interrupted, your vehicle will safely stop charging with no damage. You'll only be billed for the energy actually delivered to your vehicle.",
  },
  {
    question: "Are Ziptron charging stations available 24/7?",
    answer: "Most of our public charging stations operate 24/7. However, some locations at malls, offices, or residential complexes may have specific operating hours. Check the Ziptron Miles app for real-time availability and operating hours.",
  },
  {
    question: "How can I become a Ziptron charging partner?",
    answer: "We welcome partnerships with property owners, businesses, and fleet operators. Visit our Partner section or contact us directly. We handle installation, maintenance, and revenue sharing, making it a hassle-free investment.",
  },
  {
    question: "Is it safe to charge in the rain?",
    answer: "Absolutely! All Ziptron chargers are IP54 rated or higher, designed to operate safely in all weather conditions including rain. The connectors have multiple safety interlocks that prevent any electrical hazards.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about EV charging with Ziptron. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-6 overflow-hidden data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:text-primary">
                    <span className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-semibold">{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact-form" className="text-primary hover:underline font-semibold">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
