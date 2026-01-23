"use client"

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const skills = {
  backend: [
    { name: "PHP", level: 95 },
    { name: "Laravel", level: 95 },
  ],
  frontend: [
    { name: "HTML/CSS", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Bootstrap", level: 90 },
    { name: "Inertia", level: 85 },
  ],
  database: [
    { name: "MySQL", level: 93 },
    { name: "SQL Server", level: 85 },
  ],
  server: [
    { name: "cPanel", level: 90 },
    { name: "AWS", level: 82 },
    { name: "GCP", level: 80 },
    { name: "Digital Ocean", level: 85 },
    { name: "Plesk", level: 88 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Jira", level: 85 },
    { name: "Trello", level: 88 },
    { name: "Slack", level: 90 },
    { name: "PMI", level: 80 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="space-y-2"
  >
    <div className="flex justify-between text-sm">
      <span className="text-terminal-cyan">{name}</span>
      <span className="text-terminal-yellow">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        style={{ boxShadow: "0 0 10px hsl(var(--primary) / 0.5)" }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">$</span> cat skills.json
          </h2>
          <p className="text-muted-foreground">Core competencies and technical expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TerminalWindow title="backend.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Backend Technologies"}</div>
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="frontend.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Frontend Technologies"}</div>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="database.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Database Systems"}</div>
              {skills.database.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="server.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Server & Cloud"}</div>
              {skills.server.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="tools.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Tools & Management"}</div>
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
