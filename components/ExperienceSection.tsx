"use client"

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const experiences = [
  {
    title: "Sr. Software Engineer",
    company: "Super Star Group (SSG)",
    period: "Dec 2021 - Present",
    description: "Technical Lead and ERP consultant delivering multi-module enterprise systems — SCM, Import/Export, Inventory, Production, HR & Payroll, Document Management, and Finance/Fintech (SSLCommerz-integrated) — across enterprise groups including RM Group, MBM Group, and Tru Fabric.",
    highlights: ["ERP Consulting", "Technical Leadership", "Fintech", "DevOps", "Team Leadership"],
    activities: [
      "Lead technical architecture and delivery across ERP modules: SCM, Import/Export, Inventory, Production, HR & Payroll, Document Management, and Finance",
      "Serve as ERP consultant and technical lead for multiple enterprise groups, including RM Group, MBM Group, and Tru Fabric",
      "Diagnose and rewrite slow SQL queries on tables carrying large daily transaction volumes to keep reporting and dashboards responsive",
      "Built GitHub Actions pipelines automating testing and deployment; manage AWS server infrastructure end-to-end (DevOps)",
      "Mentor and lead a development team, owning requirement gathering and UAT across all modules"
    ]
  },
  {
    title: "Sr. Web Application Developer",
    company: "Monoputo",
    period: "Jan 2020 - Aug 2021",
    description: "Project management and team leadership for multi-vendor Laravel applications with performance optimization.",
    highlights: ["Project Management", "Laravel", "Team Lead", "Cloud Management"],
    activities: [
      "Project Manager and lead the team",
      "Design and develop multi-vendor Laravel applications",
      "Developed and implemented performance improvement strategies",
      "Created plans and communicated deadlines",
      "Server management (Clouds & Share Hosting)"
    ]
  },
  {
    title: "Web Application Developer",
    company: "EASCA Solutions Limited",
    period: "Apr 2019 - Dec 2019",
    description: "Developed comprehensive management systems for various industries including garments and government sectors.",
    highlights: ["Inventory Management", "Government Projects", "Plugin Development"],
    activities: [
      "Developed Producer and Dealership, Patient, and inventory management software",
      "Managing different common modules for Garments Inventory",
      "Worked on Minerals & Archive Software for Ministry of Power Energy & Mineral Resource",
      "Designed, implemented, and monitored web pages and plugins",
      "Applied emerging technologies to update site applicability"
    ]
  },
  {
    title: "Jr. Web Application Developer",
    company: "ZINISMART Limited",
    period: "Apr 2018 - Mar 2019",
    description: "E-commerce development with focus on multi-merchant platforms and third-party integrations.",
    highlights: ["E-Commerce", "API Integration", "Payment Gateway", "Inventory Management"],
    activities: [
      "Developed multi-merchant e-commerce website",
      "Developed Attribute set module for specific product details",
      "Managing inventory management system software",
      "Built responsive layouts for different platforms",
      "Integration Courier API (e-Courier) & SMS gateway (Robi)",
      "Payment gateway integration"
    ]
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
                  <span className="text-terminal-yellow font-mono text-sm">@ {exp.company}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-terminal-orange font-mono text-sm">[{exp.period}]</span>
                </div>

                <p className="text-muted-foreground mb-3">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded text-terminal-purple"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {exp.activities && (
                  <div className="mt-3 pl-4 border-l-2 border-primary/20">
                    <p className="text-xs text-terminal-cyan mb-2 font-mono">// Key Activities:</p>
                    <ul className="space-y-1">
                      {exp.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ExperienceSection;
