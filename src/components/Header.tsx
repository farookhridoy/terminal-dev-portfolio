import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          <a 
            href="#" 
            className="flex items-center gap-2 font-mono text-primary hover:text-glow transition-all"
            aria-label="Home - Developer Portfolio"
          >
            <Terminal className="w-6 h-6" aria-hidden="true" />
            <span className="font-bold">dev@portfolio</span>
            <span className="animate-pulse-glow" aria-hidden="true">_</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 list-none" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary" aria-hidden="true">./</span>
                  {link.label.toLowerCase()}
                </a>
              </li>
            ))}
            <li role="none">
              <a
                href="#contact"
                role="menuitem"
                className="px-4 py-2 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all"
              >
                hire_me
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
            aria-label="Mobile navigation"
          >
            <ul className="container px-4 py-4 space-y-4 list-none" role="menu">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-primary" aria-hidden="true">./</span>
                    {link.label.toLowerCase()}
                  </a>
                </li>
              ))}
              <li role="none">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground font-mono text-sm rounded"
                >
                  hire_me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
