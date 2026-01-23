import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const experiences = [
  {
    title: "Senior Full-Stack Developer & Team Lead",
    period: "2020 - Present",
    description: "Leading development teams, architecting ERP solutions, and delivering enterprise-grade web applications.",
    highlights: ["Team Leadership", "ERP Development", "System Architecture"],
  },
  {
    title: "Full-Stack Developer",
    period: "2018 - 2020",
    description: "Developed complex web applications using Laravel, React, and Vue.js for various clients.",
    highlights: ["Laravel", "React", "Vue.js"],
  },
  {
    title: "Web Developer",
    period: "2016 - 2018",
    description: "Built and maintained web applications, focusing on PHP and JavaScript development.",
    highlights: ["PHP", "JavaScript", "MySQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">$</span> git log --experience
          </h2>
          <p className="text-muted-foreground">Professional journey through the years</p>
        </motion.div>

        <TerminalWindow title="experience.log">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-terminal-cyan">{exp.title}</h3>
                  <span className="text-terminal-yellow font-mono text-sm">[{exp.period}]</span>
                </div>
                
                <p className="text-muted-foreground mb-3">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded text-terminal-purple"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ExperienceSection;
