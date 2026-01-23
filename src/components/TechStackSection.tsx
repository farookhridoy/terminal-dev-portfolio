import { motion } from "framer-motion";

const technologies = [
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Nuxt.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Version Control" },
  { name: "REST API", category: "Architecture" },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-20 px-4" aria-labelledby="tech-stack-heading">
      <div className="container max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="tech-stack-heading" className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary" aria-hidden="true">$</span> ls ./tech-stack/
          </h2>
          <p className="text-muted-foreground">Technologies I work with daily</p>
        </motion.header>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 list-none" role="list" aria-label="Technology stack">
          {technologies.map((tech, index) => (
            <motion.li
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all cursor-default group"
            >
              <div className="font-mono text-sm text-primary group-hover:text-glow transition-all">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{tech.category}</div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStackSection;
