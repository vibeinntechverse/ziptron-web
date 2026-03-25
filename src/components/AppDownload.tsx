import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Star, Download } from "lucide-react";

export default function AppDownload() {
  return (
    <section id="app-download" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card p-8 lg:p-16 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Mobile App
              </span>
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Get the <span className="gradient-text">Ziptron App</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download our app to find charging stations, track your charging sessions,
                and manage payments all in one place. Available on Android.
              </p>

              {/* App Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="text-foreground font-semibold">4.8</span>
                  <span className="text-muted-foreground">(50k+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold">1M+</span>
                  <span className="text-muted-foreground">Downloads</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="electric" 
                  size="lg" 
                  className="gap-3"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.evecotrip.ziptronapp", "_blank")}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Google Play
                </Button>
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="w-64 h-[520px] bg-card rounded-[3rem] border-4 border-border p-3 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-b from-secondary to-card rounded-[2.5rem] overflow-hidden relative">
                      {/* Phone Screen Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <Smartphone className="w-16 h-16 text-primary mb-4" />
                        <span className="text-lg font-display font-bold text-foreground">Ziptron</span>
                        <span className="text-sm text-muted-foreground">EV Charging App</span>

                        {/* Sample UI Elements */}
                        <div className="mt-8 w-full space-y-3">
                          <div className="h-20 bg-primary/10 rounded-xl flex items-center px-4 gap-3">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg" />
                            <div className="flex-1">
                              <div className="h-3 bg-primary/30 rounded w-3/4 mb-2" />
                              <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                          </div>
                          <div className="h-16 bg-accent/10 rounded-xl" />
                          <div className="h-16 bg-muted/30 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl scale-75" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
