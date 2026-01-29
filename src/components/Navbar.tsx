import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, MapPin } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#pricing" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Partner", href: "#partner" },
  { name: "Contact", href: "#contact-form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Zap className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 blur-lg bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">
              ZIP<span className="text-primary">TRON</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group font-medium"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero" size="default" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              <Zap className="w-4 h-4" />
              Ziptron Miles
            </Button>
            <Button variant="outline" size="default" className="group" onClick={() => document.getElementById('app-download')?.scrollIntoView({ behavior: 'smooth' })}>
              <MapPin className="w-4 h-4 group-hover:text-primary transition-colors" />
              Locate Charger
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="hero" size="lg" className="w-full" onClick={() => { setIsOpen(false); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <Zap className="w-4 h-4" />
                  Ziptron Miles
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => { setIsOpen(false); document.getElementById('app-download')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <MapPin className="w-4 h-4" />
                  Locate Charger
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
