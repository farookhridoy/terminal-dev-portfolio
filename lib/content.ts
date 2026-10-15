// All portfolio content lives here so it can be edited without touching the layout.
// Moved unchanged from the previous section components.

export const experiences = [
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

export const education = [
    {
        degree: "B.Sc. in Engineering",
        institution: "Eastern University Bangladesh",
        period: "Aug 2018 - Aug 2022",
        cgpa: "3.27 out of 4.00",
        type: "Bachelor's Degree"
    },
    {
        degree: "Diploma in Engineering",
        institution: "Feni Polytechnic Institute",
        period: "Jan 2014 - Dec 2017",
        cgpa: "3.49 out of 4.00",
        type: "Diploma"
    },
];

export const projects = [
  {
    title: "Multi-Module Enterprise ERP Platform",
    description: "Technical lead and consultant on a multi-module ERP spanning SCM, Import/Export, Inventory, Production, HR & Payroll, Document Management, and Finance/Fintech (SSLCommerz-integrated) — deployed across enterprise groups including Software Shop Ltd (SSLCommerz, SSL, CGL, OIL, OTL) RM Group, MBM Group, and Tru Fabric. Rebuilt slow-running SQL queries to cut reporting latency and automated deployments with GitHub Actions on AWS.",
    tech: ["Laravel", "PHP", "MySQL", "React", "Next.js", "AWS", "GitHub Actions"],
    type: "ERP Platform",
    features: ["SCM", "Import/Export", "Inventory", "Production", "HR & Payroll", "Document Management", "Fintech", "Query Optimization", "CI/CD (GitHub Actions)"]
  },
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
    features: ["Project", "Risk Management", "Planning", "Gantt Chart", "Project Report"]
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
    features: ["Job", "Recruitment", "Exam", "Cheating Prevention", "Job Report"]
  },
  {
    title: "Training Management System",
    description: "Training Management System for any kind of industries. Streamlines training processes, manages training records, and provides real-time view of training data. and take exam virtually. cheating prevention system included.",
    tech: ["Laravel", "MySQL", "PHP"],
    type: "Training System",
    features: ["Training", "Exam", "Cheating Prevention", "Training Report"]
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

export const skills = {
  backend: [
    { name: "PHP", level: 95 },
    { name: "Laravel", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Rest API", level: 100 },
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
    { name: "GitHub Actions", level: 85 },

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

export const linkedinPosts = [
  { title: "The Laravel Request Lifecycle Explained", id: "7281906843088560128" },
  { title: "PHP-ALT and PHP-EA versions at cPanel", id: "7122785517661782016" },
  { title: "Reading a person like a book", id: "7099701593217921024" },
].map((p) => ({ ...p, url: `https://www.linkedin.com/feed/update/urn:li:share:${p.id}` }));

export const technologies = [
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

export const profile = {
  name: "MD. Omar Farook Hridoy",
  title: "ERP Technical Lead & Fintech Software Engineer",
  tagline: "Building Enterprise Solutions, One Line at a Time",
  summary: 'Technical Lead and ERP consultant delivering multi-module enterprise systems — SCM, Import/Export, Inventory, Production, HR & Payroll, Document Management, and Finance/Fintech — across enterprise groups including Software Shop Ltd (SSL Commerze, SSL, CGL, OIL, OTL) RM Group, MBM Group, and Tru Fabric, backed by hands-on DevOps and query-level engineering.',
  specialization: "ERP Consulting, Technical Leadership & DevOps",
  location: "Dhaka, Bangladesh",
  timeZone: "Asia/Dhaka",
  avatar: "https://github.com/farookhridoy.png",
  site: "https://farookhridoy.com",
  githubUser: "farookhridoy",
  current: { role: "Sr. Software Engineer", company: "Super Star Group (SSG)" },
};

export const stats = [
  { value: "8+", label: "Years experience" },
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Happy clients" },
  { value: "15+", label: "Team members led" },
];

export const socialLinks = [
  { id: "github", label: "GitHub", handle: "@farookhridoy", href: "https://github.com/farookhridoy" },
  { id: "linkedin", label: "LinkedIn", handle: "in/farookhridoy", href: "https://linkedin.com/in/farookhridoy" },
  { id: "x", label: "X", handle: "@FarookHridoy", href: "https://x.com/FarookHridoy" },
  { id: "facebook", label: "Facebook", handle: "/farookhridoy", href: "https://facebook.com/farookhridoy" },
  { id: "instagram", label: "Instagram", handle: "@farookhridoy", href: "https://instagram.com/farookhridoy" },
] as const;

// Shown when a GitHub repository has no description of its own.
export const repoFallbackDescriptions: Record<string, string> = {
  tavrix: "SSH terminal, file manager and code editor for Mac, in one window. Free and open source.",
  "terminal-dev-portfolio": "This portfolio site, built with Next.js and Tailwind CSS.",
  "approval-matrix-package": "Approval matrix package for Laravel apps.",
};
