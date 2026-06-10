/**
 * Single source of truth for all portfolio content.
 * Edit values here — components read from this module.
 *
 * TODO(puneet): add real repo/live URLs for the projects and DOI/proceedings
 * links for the research papers where marked.
 */

export const profile = {
  name: "Puneet Verma",
  role: "Full-Stack & Applied AI Engineer",
  tagline:
    "Full-stack engineer and applied-AI developer — I build production LLM systems (RAG pipelines, agentic workflows) on Azure and ship complete apps end to end with .NET Core and Angular.",
  location: "Bangalore, India",
  email: "verma0404puneet@gmail.com",
  linkedin: "https://www.linkedin.com/in/puneet-verma-595176259/",
  github: "https://github.com/PuneetVerma04",
  // Drop the PDF into /public to enable the Resume button.
  resumeUrl: "./Puneet-Verma-Resume.pdf",
} as const;

export const about = {
  summary: [
    "I'm a final-year Computer Science Engineering student at VIT-AP University (2022–2026, CGPA 8.50), currently a software engineer intern at hy: Tech and Consulting — where I build production LLM systems on Azure.",
    "My work spans full-stack development with .NET Core and Angular, applied AI (RAG pipelines, prompt engineering, and agentic workflows), and cloud architecture on Azure and AWS. I've led an ML team, co-authored two research papers, and shipped real systems from backend to frontend.",
  ],
  highlights: [
    { label: "CGPA", value: "8.50" },
    { label: "Research papers", value: "2" },
    { label: "Team members led", value: "9" },
    { label: "Subtasks in RAG PoC", value: "255k" },
  ],
} as const;

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["Python", "C#", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "Frameworks & Tools",
    skills: [".NET Core", "Angular", "FastAPI", "LangChain", "LangGraph", "PyTorch"],
  },
  {
    title: "AI & LLM",
    skills: [
      "RAG Pipelines",
      "Prompt Engineering",
      "LLM Orchestration",
      "Agentic AI Workflows",
      "Vector Embeddings",
    ],
  },
  {
    title: "Cloud Platforms",
    skills: ["Azure (AI Search, OpenAI, Functions, Doc Intelligence)", "AWS"],
  },
  { title: "Databases", skills: ["SQL Server", "MongoDB", "Qdrant"] },
  { title: "Developer Tools", skills: ["Git", "VS Code", "SSMS", "Postman", "Jira"] },
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  tech: string[];
  // TODO: confirm/add real repo + live URLs
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Gray Zone — Full-Stack Game Store",
    blurb:
      "A full-stack game catalog and storefront built on a clean, configuration-driven architecture.",
    highlights: [
      "RESTful APIs in ASP.NET Core with async CRUD operations and input validation",
      "Entity Framework Core with repository-style patterns and configuration-driven services",
      "Angular 21 frontend — lazy-loaded feature modules, RxJS BehaviorSubject state, Angular Material for catalog, cart, and checkout",
      "Frontend–backend integration via HttpClient with clean separation of concerns",
    ],
    tech: ["ASP.NET Core", "EF Core", "Angular 21", "RxJS", "C#", "SQL Server"],
    repoUrl: "https://github.com/PuneetVerma04",
  },
  {
    name: "RAG-Based PDF Insight Generator",
    blurb:
      "A local, privacy-friendly tool that answers questions over your PDFs using a retrieval-augmented generation pipeline.",
    highlights: [
      "RAG pipeline that chunks PDFs, embeds content, and retrieves contextually relevant sections",
      "LangGraph workflow routing that switches between full and section-wise summarization",
      "Local inference via Ollama — no data leaves the machine",
    ],
    tech: ["LangChain", "LangGraph", "Ollama", "Python", "RAG"],
    repoUrl: "https://github.com/PuneetVerma04",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern — Applied AI",
    org: "hy: Tech and Consulting, Bangalore",
    period: "Jan 2026 – Present",
    points: [
      "Owned the Therapy Grouping Azure Function: parses DOCX reports into body-part fragments, groups them across 3-month rolling windows, and calls LLMs with a strictly extractive prompt — writing grouped DOCX output to Azure Blob Storage on a 5-minute schedule.",
      "Built a Realtime Summarizer API in FastAPI with sync and SSE streaming endpoints, a 5-layer DB-driven prompt pipeline, pdfplumber-based header/footer stripping, and 3-stage HTML sanitization to keep boilerplate out of model context.",
      "Rewrote the Sorter module's prompt builder and replaced ~295 hardcoded instruction lines with a DB-driven singleton cache; built the Angular admin configuration screen (lazy-loaded module, Express + SQL).",
      "Led a RAG proof-of-concept for few-shot classification over 255k subtasks — pdfplumber + Ollama 768-d embeddings into Qdrant, with client-scoped retrieval, cold-start guards, and an 800-token context budget.",
    ],
  },
];

export type Leadership = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const leadership: Leadership[] = [
  {
    role: "Lead, Deep Learning Team",
    org: "Machine Learning Club, VIT-AP",
    period: "Sep 2024 – Aug 2025",
    points: [
      "Managed a 9-member team, oversaw 2 research-paper projects, and contributed directly to one.",
      "Built 'Minecraft Survival Showdown', a computer-vision and deep-learning project that boosted club engagement across 200+ participants.",
      "Mentored members and authored explanatory technical blogs on core deep-learning concepts.",
    ],
  },
  {
    role: "Co-Lead, Projects Team",
    org: "Machine Learning Club, VIT-AP",
    period: "Apr 2024 – Aug 2024",
    points: [
      "Co-led a 12-member team delivering 6 end-to-end ML projects.",
      "Mentored members across ML, NLP, and deep-learning domains.",
    ],
  },
];

export type Publication = {
  title: string;
  venue: string;
  // TODO: add DOI / proceedings links when available
  url?: string;
};

export const publications: Publication[] = [
  {
    title: "Evaluating YOLOv8 Models for Efficient Drone Detection in Anti-UAV Systems",
    venue: "RAIT 2025, IIT (ISM) Dhanbad, Jharkhand",
  },
  {
    title: "Enhancing Road Safety with YOLOv8: Deep Learning for Accurate Brake Light Detection",
    venue: "ACCTHPA 2025, FISAT, Kerala",
  },
];

export type Certificate = {
  name: string;
  issuer: string;
};

export const certificates: Certificate[] = [
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
  { name: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle" },
  { name: "Machine Learning Specialization", issuer: "Coursera / DeepLearning.AI" },
  { name: "Amazon Junior Software Developer", issuer: "Coursera / Amazon" },
  { name: "API Fundamentals Student Expert", issuer: "Postman" },
];

export type EducationItem = {
  school: string;
  detail: string;
  period: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    school: "VIT-AP University, Amaravati",
    detail: "B.Tech, Computer Science & Engineering",
    period: "2022 – 2026",
    score: "CGPA 8.50",
  },
  {
    school: "CBSE — Senior Secondary (Class XII)",
    detail: "Higher Secondary Education",
    period: "2022",
    score: "79%",
  },
  {
    school: "CBSE — Secondary (Class X)",
    detail: "Secondary Education",
    period: "2020",
    score: "86.9%",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;
