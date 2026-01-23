"use client"

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ERP (Procurement & Accounts Module)",
    description: "Procurements & Accounts module for Garments industries. Streamlines procurement process, manages accounts payable, and provides real-time view of financial health.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "ERP",
  },
  {
    title: "Project Management (PMD)",
    description: "Comprehensive Project Management solution with risk management, planning, grant charts, project reports, and many more features.",
    tech: ["Laravel", "JavaScript", "MySQL"],
    type: "Management",
  },
  {
    title: "HR & Recruitment",
    description: "Job & Requirement application for UK-based company. System admin can post jobs, manage recruitment procedures, and candidates can apply and take online exams virtually.",
    tech: ["Laravel", "React", "MySQL"],
    type: "HR System",
  },
  {
    title: "Loan Management Software",
    description: "Complete loan management with Branch Area, Product Management, Collection Officer Management, member registration, loan processing, disbursement, recovery, and financial accounting.",
    tech: ["Laravel", "PHP", "MySQL"],
    type: "Finance",
  },
  {
    title: "Multi-Vendor E-Commerce",
    description: "Full-featured multi-vendor e-commerce platform like Daraz/Amazon. Includes payment gateway integration, courier API, and complete vendor management.",
    tech: ["Laravel", "JavaScript", "MySQL", "Payment Gateway"],
    type: "E-Commerce",
  },
  {
    title: "Online Learning Platform",
    description: "E-learning platform with course management, student enrollment, progress tracking, and online assessments.",
    tech: ["Laravel", "React", "MySQL"],
    type: "Education",
  },
  {
    title: "School Management System",
    description: "Comprehensive school management system for student records, attendance, grading, and parent communication.",
    tech: ["Laravel", "PHP", "MySQL"],
    type: "Education",
  },
  {
    title: "Sequences (Bulk Mail Sender)",
    description: "Bulk email service platform for marketing campaigns and automated email sequences.",
    tech: ["Laravel", "PHP", "MySQL"],
    type: "SaaS",
  },
  {
    title: "SSG Agro",
    description: "Agricultural management system for Super Star Group's agro division.",
    tech: ["Laravel", "MySQL"],
    type: "Agriculture",
  },
  {
    title: "SSG Global",
    description: "Global operations management platform for Super Star Group.",
    tech: ["Laravel", "MySQL"],
    type: "Enterprise",
  },
  {
    title: "BIZZ Career (Job Portal)",
    description: "Job portal platform connecting employers with job seekers, featuring advanced search and application tracking.",
    tech: ["Laravel", "JavaScript", "MySQL"],
    type: "Job Portal",
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
