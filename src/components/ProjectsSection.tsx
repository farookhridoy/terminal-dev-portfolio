import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP System",
    description: "Full-featured ERP solution for manufacturing companies with inventory, HR, and accounting modules.",
    tech: ["Laravel", "Vue.js", "MySQL", "Redis"],
    type: "ERP",
  },
  {
    title: "E-Commerce Platform",
    description: "Scalable multi-vendor marketplace with payment integration and real-time inventory management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    type: "Web App",
  },
  {
    title: "Healthcare Management",
    description: "Patient management system with appointment scheduling, EMR, and billing integration.",
    tech: ["React", "Laravel", "MySQL"],
    type: "Healthcare",
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search, virtual tours, and CRM integration.",
    tech: ["Nuxt.js", "Node.js", "MongoDB"],
    type: "Web App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">$</span> find ./projects -type featured
          </h2>
          <p className="text-muted-foreground">Some of the notable projects I've worked on</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-terminal-yellow bg-secondary px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-terminal-cyan mb-2 group-hover:text-glow-accent transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono text-terminal-green bg-secondary/50 rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-terminal-gray">// And 96+ more projects...</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
