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
    role="listitem"
  >
    <div className="flex justify-between text-sm">
      <span className="text-terminal-cyan">{name}</span>
      <span className="text-terminal-yellow" aria-label={`${level} percent proficiency`}>{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} skill level`}>
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
    <section id="skills" className="py-20 px-4" aria-labelledby="skills-heading">
      <div className="container max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary" aria-hidden="true">$</span> cat skills.json
          </h2>
          <p className="text-muted-foreground">Core competencies and technical expertise</p>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="Skills categories">
          <article aria-labelledby="backend-skills">
            <TerminalWindow title="backend.skills">
              <div className="space-y-4" role="list">
                <h3 id="backend-skills" className="text-terminal-purple mb-4">{"// Backend Technologies"}</h3>
                {skills.backend.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </TerminalWindow>
          </article>

          <article aria-labelledby="frontend-skills">
            <TerminalWindow title="frontend.skills">
              <div className="space-y-4" role="list">
                <h3 id="frontend-skills" className="text-terminal-purple mb-4">{"// Frontend Frameworks"}</h3>
                {skills.frontend.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </TerminalWindow>
          </article>

          <article aria-labelledby="other-skills">
            <TerminalWindow title="additional.skills">
              <div className="space-y-4" role="list">
                <h3 id="other-skills" className="text-terminal-purple mb-4">{"// Other Skills"}</h3>
                {skills.other.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </TerminalWindow>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
