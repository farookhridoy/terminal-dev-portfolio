import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const skills = {
  backend: [
    { name: "PHP/Laravel", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "MySQL", level: 92 },
  ],
  frontend: [
    { name: "React", level: 90 },
    { name: "Vue.js", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Nuxt.js", level: 85 },
  ],
  other: [
    { name: "UI/UX Design", level: 80 },
    { name: "Team Leading", level: 88 },
    { name: "ERP Development", level: 92 },
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

        <div className="grid md:grid-cols-3 gap-6">
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
              <div className="text-terminal-purple mb-4">{"// Frontend Frameworks"}</div>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="additional.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Other Skills"}</div>
              {skills.other.map((skill, index) => (
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
