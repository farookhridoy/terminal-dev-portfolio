"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TerminalWindow from "./TerminalWindow";
import TypeWriter from "./TypeWriter";

const HeroSection = () => {
  const [showDetails, setShowDetails] = useState(false);
  const showCommand = true;

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const [particles, setParticles] = useState<{ initialX: number; initialY: number; yAnimate: (number | null)[]; duration: number }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client side after mount
    setMounted(true);

    // Use a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setParticles([...Array(20)].map(() => ({
        initialX: Math.random() * width,
        initialY: Math.random() * height,
        yAnimate: [null, Math.random() * -100, Math.random() * 100],
        duration: 3 + Math.random() * 2,
      })));
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 terminal-gradient relative overflow-hidden">
      {/* Background scanlines effect */}
      <div className="absolute inset-0 scanlines opacity-50" />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                y: particle.yAnimate,
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

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

                <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                  <div className="pl-4 border-l-2 border-primary/30 space-y-2 order-2 md:order-1">
                    <p>
                      <span className="text-terminal-purple">name:</span>{" "}
                      <span className="text-terminal-yellow">"MD. Omar Farook Hridoy"</span>
                    </p>
                    <p>
                      <span className="text-terminal-purple">title:</span>{" "}
                      <span className="text-terminal-yellow">"Software Engineer"</span>
                    </p>
                    <p>
                      <span className="text-terminal-purple">experience:</span>{" "}
                      <span className="text-terminal-orange">6+</span>{" "}
                      <span className="text-muted-foreground">// years of crafting digital solutions</span>
                    </p>
                    <p>
                      <span className="text-terminal-purple">projects:</span>{" "}
                      <span className="text-terminal-orange">100+</span>{" "}
                      <span className="text-muted-foreground">// successful deliveries</span>
                    </p>
                    <p>
                      <span className="text-terminal-purple">location:</span>{" "}
                      <span className="text-terminal-yellow">"Dhaka, Bangladesh"</span>
                    </p>
                    <p>
                      <span className="text-terminal-purple">email:</span>{" "}
                      <span className="text-terminal-cyan">"farookhridoy@gmail.com"</span>
                    </p>
                    <p>
                      <span className="text-terminal-purple">specialization:</span>{" "}
                      <span className="text-terminal-yellow">"Laravel & ERP Development"</span>
                    </p>
                  </div>

                  <div className="order-1 md:order-2 flex justify-center md:justify-end items-start">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-terminal-cyan rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200" />
                      <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-background relative">
                        <AvatarImage src="https://github.com/farookhridoy.png" alt="MD. Omar Farook Hridoy" />
                        <AvatarFallback className="bg-secondary text-2xl font-mono text-primary">OF</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6"
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-glow mb-4">
                    Building Enterprise Solutions,
                    <br />
                    <span className="text-primary">One Line at a Time</span>
                  </h1>
                  <p className="text-muted-foreground max-w-xl">
                    Laravel Developer with a proven track record across e-commerce, content management,
                    and enterprise solutions (ERP). Delivering exceptional results through innovative
                    web applications and team collaboration.
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
