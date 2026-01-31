"use client"

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const skills = {
  backend: [
    { name: "PHP", level: 95 },
    { name: "Laravel", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "NestJS", level: 85 },
    { name: "Python", level: 85 },
    { name: "FastAPI", level: 85 },
    { name: "Bash", level: 85 },
    { name: "Shell", level: 85 },
  ],
  frontend: [
    { name: "HTML/CSS", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 90 },
    { name: "Vue.js", level: 90 },
    { name: "Bootstrap", level: 90 },
    { name: "Inertia", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "jQuery", level: 90 },
  ],
  database: [
    { name: "MySQL", level: 93 },
    { name: "SQL Server", level: 85 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "Redis", level: 85 },
    { name: "SQLite", level: 85 },
  ],
  server: [
    { name: "AWS", level: 82 },
    { name: "cPanel", level: 90 },
    { name: "GCP", level: 80 },
    { name: "Digital Ocean", level: 85 },
    { name: "Plesk", level: 88 },
    { name: "Apache", level: 90 },
    { name: "Nginx", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Linux", level: 90 },
    { name: "Windows", level: 85 },
  ],
  devOps: [
    { name: "Docker", level: 80 },
    { name: "Linux", level: 90 },
    { name: "gitHub Actions", level: 85 },

  ],
  bigdata: [
    { name: "Hadoop", level: 85 },
    { name: "Spark", level: 85 },
    { name: "Hive", level: 85 },
    { name: "HBase", level: 85 },
    { name: "Kafka", level: 85 },
    { name: "Zookeeper", level: 85 },
    { name: "Flume", level: 85 },
    { name: "Sqoop", level: 85 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Jira", level: 85 },
    { name: "Trello", level: 88 },
    { name: "Slack", level: 90 },
    { name: "PMI", level: 80 },
  ],
  methodologies: [
    { name: "Agile", level: 90 },
    { name: "Scrum", level: 85 },
    { name: "Kanban", level: 88 },
    { name: "Waterfall", level: 80 },
  ],
  softSkills: [
    { name: "Team Leadership", level: 90 },
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Problem Solving", level: 88 },
    { name: "Time Management", level: 80 },
  ],
  languages: [
    { name: "Bangla", level: 90 },
    { name: "English", level: 85 },
    { name: "Hindi", level: 88 },
  ],
  aiTools: [
    { name: "ChatGPT", level: 90 },
    { name: "Gemini", level: 85 },
    { name: "Claude", level: 88 },
    { name: "GitHub Copilot", level: 88 },
    { name: "Antigravity", level: 90 },
    { name: "Cursor", level: 90 },
    { name: "Tabnine", level: 90 },
    { name: "DeepSeek", level: 90 },
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

          <TerminalWindow title="devOps.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// DevOps Technologies"}</div>
              {skills.devOps.map((skill, index) => (
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

          <TerminalWindow title="bigdata.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Big Data Technologies"}</div>
              {skills.bigdata.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="methodologies.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Methodologies"}</div>
              {skills.methodologies.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="soft-skills.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Soft Skills"}</div>
              {skills.softSkills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="languages.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// Languages"}</div>
              {skills.languages.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="ai-tools.skills">
            <div className="space-y-4">
              <div className="text-terminal-purple mb-4">{"// AI Tools"}</div>
              {skills.aiTools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </TerminalWindow>
        </div>
      </div >
    </section >
  );
};

export default SkillsSection;
