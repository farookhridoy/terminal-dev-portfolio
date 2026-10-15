// All portfolio content lives here so it can be edited without touching the layout.
// Moved unchanged from the previous section components.

// **double asterisks** mark text to emphasise; see components/shell/Rich.tsx.
export const experiences = [
  {
    title: "Sr. Software Engineer",
    company: "Super Star Group (SSG)",
    period: "Dec 2021 – Present",
    mark: "SSG",
    description: "Technical lead and ERP consultant for **multi-module enterprise systems**: SCM, Import/Export, Inventory, Production, HR & Payroll, Document Management and Finance/Fintech (SSLCommerz-integrated). Delivered across **RM Group, MBM Group and Tru Fabric**.",
    activities: [
      "**Architecture and delivery:** own the technical design and release of every ERP module, from requirements gathering to UAT.",
      "**Query performance:** diagnose and rewrite slow SQL on tables with large daily transaction volumes, so reports and dashboards stay responsive.",
      "**DevOps:** GitHub Actions pipelines for testing and deployment, and end-to-end management of the AWS servers.",
      "**Team:** mentor and lead the development team.",
    ],
    highlights: ["ERP Consulting", "Technical Leadership", "Fintech", "DevOps", "Team Leadership"],
  },
  {
    title: "Sr. Web Application Developer",
    company: "Monoputo",
    period: "Jan 2020 – Aug 2021",
    mark: "M",
    description: "Project manager and team lead for **multi-vendor Laravel applications**, with a focus on performance.",
    activities: [
      "Designed and built multi-vendor Laravel applications and led the team.",
      "Planned work, communicated deadlines and rolled out performance improvements.",
      "Managed servers on cloud and shared hosting.",
    ],
    highlights: ["Project Management", "Laravel", "Team Lead", "Cloud Management"],
  },
  {
    title: "Web Application Developer",
    company: "EASCA Solutions Limited",
    period: "Apr 2019 – Dec 2019",
    mark: "E",
    description: "Management systems for **garments and government** clients.",
    activities: [
      "Built producer and dealership, patient and inventory management software.",
      "Worked on the **Minerals & Archive software** for the Ministry of Power, Energy & Mineral Resources.",
      "Maintained the common modules of the garments inventory system and built web pages and plugins.",
    ],
    highlights: ["Inventory Management", "Government Projects", "Plugin Development"],
  },
  {
    title: "Jr. Web Application Developer",
    company: "ZINISMART Limited",
    period: "Apr 2018 – Mar 2019",
    mark: "Z",
    description: "**Multi-merchant e-commerce** development with third-party integrations.",
    activities: [
      "Built the multi-merchant e-commerce site, an attribute-set module for product details and responsive layouts.",
      "Integrated the e-Courier API, the Robi SMS gateway and payment gateways.",
      "Maintained the inventory management software.",
    ],
    highlights: ["E-Commerce", "API Integration", "Payment Gateway", "Inventory Management"],
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
    line: "One ERP across SCM, import/export, inventory, production, HR & payroll, documents and finance, deployed for enterprise groups.",
    description: "Technical lead and consultant on a multi-module ERP spanning SCM, Import/Export, Inventory, Production, HR & Payroll, Document Management and Finance/Fintech (SSLCommerz-integrated). Deployed across enterprise groups including Software Shop Ltd (SSLCommerz, SSL, CGL, OIL, OTL), RM Group, MBM Group and Tru Fabric. Rebuilt slow-running SQL queries to cut reporting latency and automated deployments with GitHub Actions on AWS.",
    tech: ["Laravel", "PHP", "MySQL", "React", "Next.js", "AWS", "GitHub Actions"],
    type: "ERP Platform",
  },
  { title: "Supply Chain Management System", line: "Supply chain records with a real-time view, for any industry.", tech: ["Laravel", "MySQL"], type: "Supply chain" },
  { title: "Finance & Accounting System", line: "Chart of accounts, trial balance, balance sheet, income and cash flow statements.", tech: ["Laravel", "MySQL"], type: "Finance" },
  { title: "Inventory Management System", line: "Stock, transfers, adjustments and stock reports.", tech: ["Laravel", "MySQL"], type: "Inventory" },
  { title: "Assets Management System", line: "Asset records, transfers, adjustments and reports.", tech: ["Laravel", "MySQL"], type: "Assets" },
  { title: "Sales & Marketing System", line: "Sales processes and live sales data for garments industries.", tech: ["Laravel", "MySQL"], type: "Sales" },
  { title: "Production Management System", line: "Production, stock and stock transfers for garments industries.", tech: ["Laravel", "MySQL"], type: "Production" },
  { title: "Project Management (PMD)", line: "Risk management, planning, Gantt charts and project reports.", tech: ["Laravel", "JavaScript", "MySQL"], type: "Management" },
  { title: "Human Resource Management System", line: "Employee records and HR processes for garments industries.", tech: ["Laravel", "MySQL"], type: "HR" },
  { title: "CRM System", line: "Leads, bookings, follow-ups, quotations, orders, invoices and payments.", tech: ["Laravel", "MySQL"], type: "CRM" },
  { title: "HR & Recruitment", line: "Job postings, recruitment and online exams with cheating prevention, for a UK-based company.", tech: ["Laravel", "React", "MySQL"], type: "Recruitment" },
  { title: "Training Management System", line: "Training programmes and online exams with cheating prevention.", tech: ["Laravel", "MySQL"], type: "Training" },
  { title: "Loan Management Software", line: "Branches, members, loan processing, disbursement, recovery and accounting.", tech: ["Laravel", "PHP", "MySQL"], type: "Finance" },
  { title: "Multi-Vendor E-Commerce", line: "A Daraz/Amazon-style marketplace with payment gateway, courier API and vendor management.", tech: ["Laravel", "JavaScript", "MySQL"], type: "E-commerce" },
  { title: "Online Learning Platform", line: "Courses, enrolment, progress tracking and online assessments.", tech: ["Laravel", "React", "MySQL"], type: "Education" },
  { title: "School Management System", line: "Student records, attendance, grading and parent communication.", tech: ["Laravel", "MySQL"], type: "Education" },
  { title: "POS System", line: "Point of sale with stock, transfers and adjustments.", tech: ["Laravel", "MySQL", "JavaScript"], type: "Retail" },
  { title: "SSG Global", line: "Global operations management platform for Super Star Group.", tech: ["Laravel", "MySQL", "React"], type: "Enterprise" },
  { title: "BIZZ Career (Job Portal)", line: "Job portal with advanced search and application tracking.", tech: ["Laravel", "JavaScript", "MySQL"], type: "Job portal" },
];

// Products built under theLaraSoft. Screenshots are of the live sites.
export const products = [
  { name: "Dentora", line: "Dental clinic management software: appointments, patient records, dental charts, payments and invoices in one place.", tags: ["Healthcare", "SaaS"], image: "/images/products/dentora.jpg", href: "https://dentora.thelarasoft.com/" },
  { name: "LaraMeet", line: "Premium video meetings, free for everyone.", tags: ["Video meetings", "Free"], image: "/images/products/larameet.jpg", href: "https://meet.thelarasoft.com/" },
  { name: "Lara Sequence", line: "Bulk email sender for marketing campaigns and automated email sequences.", tags: ["Email", "SaaS"], image: "/images/products/lara-sequence.jpg", href: "https://sequence.thelarasoft.com/login" },
  { name: "theLaraSoft", line: "A Dhaka-based digital agency and technology solutions company. Where I am founder.", tags: ["Agency", "Founder"], image: "/images/products/larasoft.jpg", href: "https://thelarasoft.com/" },
] as const;

export const about = [
  "I'm an **ERP technical lead and fintech software engineer** in Dhaka with 8+ years of building multi-module business systems: supply chain, import/export, inventory, production, HR & payroll, document management and finance.",
  "At **Super Star Group** I lead architecture and delivery for enterprise groups including RM Group, MBM Group and Tru Fabric, and I handle the DevOps side too: GitHub Actions pipelines, AWS servers, and rewriting slow SQL on high-volume tables.",
  "I'm also the **founder of theLaraSoft**, a Dhaka-based agency that designs digital solutions. Alongside client work we build our own products: Dentora for dental clinics, LaraMeet for video meetings and Lara Sequence for bulk email.",
  "I started in 2018 as a junior web developer on e-commerce, payment and courier integrations, and grew through Laravel projects into technical leadership. I like owning a system end to end, from requirements and UAT to deployment.",
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
  founderOf: { name: "theLaraSoft", href: "https://thelarasoft.com/" },
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

// Live websites and platforms. Descriptions are taken from what each site says about itself.
export const projectCategories = ["E-commerce", "EdTech", "Corporate & real estate", "SaaS & tools"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const liveProjects: {
  name: string;
  category: ProjectCategory;
  line: string;
  tags: string[];
  image: string;
  href: string;
}[] = [
  {
    name: "Super Star Group",
    category: "Corporate & real estate",
    line: "Corporate website for Super Star Group, a leading Bangladeshi maker of lighting, cables, fans, switches and home appliances.",
    tags: ["Corporate", "Manufacturing"],
    image: "/images/projects/ssgbd.jpg",
    href: "https://ssgbd.com/",
  },
  {
    name: "Tavrix",
    category: "SaaS & tools",
    line: "Free, open-source Mac app with an SSH terminal, drag-and-drop file manager and tabbed editor in one window.",
    tags: ["Open source", "Electron"],
    image: "/images/projects/tavrix.jpg",
    href: "https://tavrix.farookhridoy.com/",
  },
  {
    name: "RacRolls",
    category: "E-commerce",
    line: "Online store for premium menswear, with panjabi, shirt and t-shirt collections, based in Dhaka.",
    tags: ["E-commerce", "Fashion"],
    image: "/images/projects/racrolls.jpg",
    href: "https://racrolls.global/",
  },
  {
    name: "HairGauge",
    category: "SaaS & tools",
    line: "The hair transplant OS for verified clinics: consultation, booking, procedure records, recovery and verification in one system.",
    tags: ["SaaS", "Healthcare"],
    image: "/images/projects/hairgauge.jpg",
    href: "https://hairgauge.com/",
  },
  {
    name: "Stride",
    category: "E-commerce",
    line: "Multi-category online shop for shoes and lifestyle products, with brands, categories, wishlist, cart and blog.",
    tags: ["E-commerce", "LaraCommerce"],
    image: "/images/projects/stride.jpg",
    href: "https://stride.thelarasoft.com/",
  },
  {
    name: "Farm Clearing Sales",
    category: "E-commerce",
    line: "Australian listings site that gathers clearing, private and dealer farm sales into one category view.",
    tags: ["Marketplace", "Australia"],
    image: "/images/projects/farmclearing.jpg",
    href: "https://farmclearingsales.com.au/",
  },
  {
    name: "Learn With TEP",
    category: "EdTech",
    line: "Online learning platform for the IT field, with course catalogue, training programmes and subscriptions.",
    tags: ["EdTech", "Courses"],
    image: "/images/projects/lwt.jpg",
    href: "https://lwt.thelarasoft.com/",
  },
  {
    name: "CyberSolveIQ",
    category: "SaaS & tools",
    line: "Cyber security specialists for SMEs: assessments, testing, training, awareness and advice, with an online store and a CyberDIY assessments portal.",
    tags: ["Cyber security", "SME"],
    image: "/images/projects/cybersolveiq.jpg",
    href: "https://cybersolveiq.com/",
  },
  {
    name: "SSG Holdings",
    category: "Corporate & real estate",
    line: "Website for SSG Holdings Limited, a Dhaka-based company under Super Star Group, showing its building projects.",
    tags: ["Corporate", "Real estate"],
    image: "/images/projects/ssgholdings.jpg",
    href: "https://www.ssgholdingsltd.com/",
  },
  {
    name: "Shah Homes",
    category: "Corporate & real estate",
    line: "Official website of Shah Homes Ltd, a real estate company that builds and hands over residential buildings.",
    tags: ["Real estate"],
    image: "/images/projects/shahhomes.jpg",
    href: "https://shahhomesltd.com/",
  },
  {
    name: "Pacific Apartments",
    category: "Corporate & real estate",
    line: "Website for a Dhaka real estate developer building residential apartments since 1996, with featured projects.",
    tags: ["Real estate"],
    image: "/images/projects/pacific.jpg",
    href: "https://pacificapartmentsltd.com/",
  },
];

// Short lists for the Resume tab.
export const topSkills = ["ERP Consulting", "Technical Leadership", "Fintech", "DevOps", "Team Leadership"];
export const aiToolsShort = ["Claude", "ChatGPT", "GitHub Copilot", "Cursor"];
export const stackShort = ["Laravel", "PHP", "JavaScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "MySQL", "AWS", "Docker", "GitHub Actions", "Git"];

// Own public repositories that are left off the Open source list (course exercises and unfinished experiments).
export const hiddenRepos = [
  "docker-assignment-1",
  "docker-assignment-2",
  "linux-assignment-01",
  "linux-assignment-02",
  "b4-devops-cp-assignment-01",
  "dockerise-app",
  "job-portal-app-d",
  "elk-project-13",
];
