import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import TypeWriter from "./TypeWriter";

const HeroSection = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCommand, setShowCommand] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 terminal-gradient relative overflow-hidden">
      {/* Background scanlines effect */}
      <div className="absolute inset-0 scanlines opacity-50" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100, Math.random() * 100],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <TerminalWindow title="~/portfolio/about.sh">
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-start gap-2">
              <span className="text-primary">$</span>
              {showCommand && (
                <TypeWriter 
                  text="whoami --verbose" 
                  delay={80}
                  className="text-foreground"
                />
              )}
            </div>

            {showDetails && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-3 mt-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-terminal-cyan">// Output:</span>
                </div>
                
                <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                  <p>
                    <span className="text-terminal-purple">name:</span>{" "}
                    <span className="text-terminal-yellow">"Senior Full-Stack Developer"</span>
                  </p>
                  <p>
                    <span className="text-terminal-purple">experience:</span>{" "}
                    <span className="text-terminal-orange">8</span>{" "}
                    <span className="text-muted-foreground">// years of crafting digital solutions</span>
                  </p>
                  <p>
                    <span className="text-terminal-purple">projects:</span>{" "}
                    <span className="text-terminal-orange">100+</span>{" "}
                    <span className="text-muted-foreground">// successful deliveries</span>
                  </p>
                  <p>
                    <span className="text-terminal-purple">specialization:</span>{" "}
                    <span className="text-terminal-yellow">"ERP & Web Development"</span>
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6"
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-glow mb-4">
                    Building the Future,
                    <br />
                    <span className="text-primary">One Line at a Time</span>
                  </h1>
                  <p className="text-muted-foreground max-w-xl">
                    Full-stack engineer specializing in enterprise solutions, web applications,
                    and team leadership. Transforming complex business requirements into 
                    elegant, scalable software.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  >
                    ./view_projects.sh
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-all"
                  >
                    ./contact_me.sh
                  </a>
                </motion.div>
              </motion.div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default HeroSection;
