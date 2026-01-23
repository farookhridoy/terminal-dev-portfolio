"use client"

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-card rounded-lg border border-border overflow-hidden border-glow ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-terminal-red" />
          <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
          <div className="w-3 h-3 rounded-full bg-terminal-green" />
        </div>
        <span className="font-mono text-sm text-muted-foreground ml-2">{title}</span>
      </div>
      {/* Terminal Content */}
      <div className="p-6 font-mono">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
