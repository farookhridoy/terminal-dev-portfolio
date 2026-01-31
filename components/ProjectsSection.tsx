"use client"

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Supply Chain Management System",
    description: "Supply Chain Management System for any kind of industries. Streamlines supply chain processes, manages supply chain records, and provides real-time view of supply chain data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Supply Chain System",
    
  },
  {
    title: "Finance & Accounting System",
    description: "Finance & Accounting System for any kind of industries. Streamlines finance & accounting processes, manages finance & accounting records, and provides real-time view of finance & accounting data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Finance & Accounting System",
    features: ["COA", "Trial Balance", "Balance Sheet", "Income Statement", "Cash Flow Statement"]
  },
  {
    title: "Inventory Management System",
    description: "Inventory Management System for any kind of industries. Streamlines inventory processes, manages inventory records, and provides real-time view of inventory data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Inventory System",
    features: ["Inventory", "Stock", "Stock Transfer", "Stock Adjustment", "Stock Report"]
  },
  {
    title: "Assets Management System",
    description: "Assets Management System for any kind of industries. Streamlines assets processes, manages assets records, and provides real-time view of assets data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Assets System",
    features: ["Assets", "Stock", "Stock Transfer", "Stock Adjustment", "Stock Report"]
  },
  {
    title: "Sales & Marketing System",
    description: "Sales & Marketing System for Garments industries. Streamlines sales processes, manages sales records, and provides real-time view of sales data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Sales & Marketing System",

  },
  {
    title: "Production Management System",
    description: "Production Management System for Garments industries. Streamlines production processes, manages production records, and provides real-time view of production data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Production System",
    features: ["Production", "Stock", "Stock Transfer", "Stock Adjustment", "Stock Report"]
  },
  {
    title: "Project Management (PMD)",
    description: "Comprehensive Project Management solution with risk management, planning, grant charts, project reports, and many more features.",
    tech: ["Laravel", "JavaScript", "MySQL"],
    type: "Management",
    features: ["Project", "Risk Management", "Planning", "Grant Chart", "Project Report"]
  },
  {
    title: "Human Resource Management System",
    description: "Human Resource Management System for Garments industries. Streamlines HR processes, manages employee records, and provides real-time view of HR data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "HR System",
  },
  {
    title: "CRM System",
    description: "Customer Relationship Management System for Garments industries. Streamlines CRM processes, manages customer records, and provides real-time view of CRM data.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "CRM System",
    features: ["CRM", "Customer", "CRM Report","Lead","Booking","Followup","Quotation","Order","Invoice","Payment","Refund","Customer Feedback"]
  },

  {
    title: "HR & Recruitment",
    description: "Job & Requirement application for UK-based company. System admin can post jobs, manage recruitment procedures, and candidates can apply and take online exams virtually.",
    tech: ["Laravel", "React", "MySQL"],
    type: "HR System",
    features: ["Job", "Recruitment", "Exam", "Cheeting Prevention", "Job Report"]
  },
  {
    title: "Traning Management System",
    description: "Traning Management System for any kind of industries. Streamlines traning processes, manages traning records, and provides real-time view of traning data. and take exam virtually. cheeting prevention system included.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Traning System",
    features: ["Traning", "Exam", "Cheeting Prevention", "Traning Report"]
  },

  {
    title: "Loan Management Software",
    description: "Complete loan management with Branch Area, Product Management, Collection Officer Management, member registration, loan processing, disbursement, recovery, and financial accounting.",
    tech: ["Laravel", "PHP", "MySQL"],
    type: "Finance",
    features: ["Loan", "Member", "Disbursement", "Recovery", "Financial Accounting"]
  },
  {
    title: "Multi-Vendor E-Commerce",
    description: "Full-featured multi-vendor e-commerce platform like Daraz/Amazon. Includes payment gateway integration, courier API, and complete vendor management.",
    tech: ["Laravel", "JavaScript", "MySQL", "Payment Gateway"],
    type: "E-Commerce",
    features: ["Multi-Vendor", "E-Commerce", "Payment Gateway", "Courier API", "Vendor Management"]
  },
  {
    title: "Online Learning Platform",
    description: "E-learning platform with course management, student enrollment, progress tracking, and online assessments.",
    tech: ["Laravel", "React", "MySQL"],
    type: "Education",
    features: ["Course", "Student", "Enrollment", "Progress Tracking", "Online Assessments"]
  },
  {
    title: "School Management System",
    description: "Comprehensive school management system for student records, attendance, grading, and parent communication.",
    tech: ["Laravel", "PHP", "MySQL"],
    type: "Education",
    features: ["Student", "Attendance", "Grading", "Parent Communication"]
  },
  {
    title: "Sequences (Bulk Mail Sender)",
    description: "Bulk email service platform for marketing campaigns and automated email sequences.",
    tech: ["Laravel", "PHP", "MySQL"],
    type: "SaaS",
  },
  {
    title: "POS System",
    description: "POS System for any kind of industries. Streamlines POS processes, manages POS records, and provides real-time view of POS data.",
    tech: ["Laravel", "MySQL", "PHP", "JavaScript"],
    type: "POS System",
    features: ["POS", "Stock", "Stock Transfer", "Stock Adjustment", "Stock Report"]
  },
  {
    title: "SSG Global",
    description: "Global operations management platform for Super Star Group.",
    tech: ["Laravel", "MySQL","React"],
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

              <div className="flex flex-wrap gap-2 mt-4">
                {project.features?.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 text-xs font-mono text-terminal-green bg-secondary/50 rounded border border-primary/20"
                  >
                    {feature}
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
