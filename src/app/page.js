"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Terminal,
} from "lucide-react";

// Helper component
const DecryptText = ({ text }) => {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (index < i) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      i += 1 / 3; // Controls speed
      if (i > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{display}</span>;
};

export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-float-slowest"></div>
      </div>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 glass-nav"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold tracking-tighter">PV.</h1>
          <div className="hidden sm:flex gap-4 md:gap-6 text-xs sm:text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-1 rounded-full w-fit mb-4 sm:mb-6">
            <span className="px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20 inline-block">
              Open to Work • 2026 Grad
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 mb-2 sm:mb-3">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-gradient">Puneet Verma</span>
            </h1>
          </div>
          <p className="text-sm sm:text-lg md:text-xl text-blue-400 italic mb-4 sm:mb-6">
            Building Differently<span className="cursor-blink">|</span>
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-6 sm:mb-8">
            Full Stack Developer & AI/ML Engineer.{" "}
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>
            Bridging the gap between{" "}
            <span className="text-white">scalable .NET systems</span> and{" "}
            <span className="text-white">intelligent AI solutions</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="mailto:verma0404puneet@gmail.com"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              <span className="truncate">verma0404puneet@gmail.com</span>
            </a>
            <a
              href="https://github.com/PuneetVerma04"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 glass-card rounded-lg hover:bg-purple-500/10 transition-all text-sm sm:text-base"
            >
              <Github size={18} className="sm:w-5 sm:h-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/puneet-verma-595176259/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 glass-card rounded-lg hover:bg-blue-500/10 transition-all text-sm sm:text-base"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex items-center gap-2 sm:gap-3">
            <Terminal className="text-purple-400 w-6 h-6 sm:w-7 sm:h-7" />
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={<Code className="text-blue-400" />}
              title="Languages"
              skills={["Java", "C#", "Python", "JavaScript", "SQL"]}
            />
            <SkillCard
              icon={<Database className="text-purple-400" />}
              title="Frameworks"
              skills={[
                "ASP.NET Core",
                "FastAPI",
                "React",
                "TensorFlow",
                "PyTorch",
              ]}
            />
            <SkillCard
              icon={<Cloud className="text-blue-400" />}
              title="Cloud & DevOps"
              skills={[
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "GitHub Actions",
              ]}
            />
            <SkillCard
              icon={<Terminal className="text-purple-400" />}
              title="AI & LLM"
              skills={[
                "RAG Architecture",
                "LangChain",
                "LangGraph",
                "Ollama",
                "NLP",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 bg-white/0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="RAG-Based PDF Insight Generator"
              description="A local AI-powered system that chunks PDFs and retrieves context-aware summaries using LangGraph for dynamic workflow routing."
              tags={["Python", "LangChain", "Ollama", "RAG"]}
              link="https://github.com/PuneetVerma04/RAG-Based-PDF-Insight-Generator"
            />
            <ProjectCard
              title="Gray Zone Game Store"
              description="Full-stack .NET platform with RESTful APIs, Blazor components, and async CRUD operations."
              tags={["ASP.NET Core", "Blazor", "SQL Server", "C#"]}
              link="https://github.com/PuneetVerma04/Gray-Zone-Backend"
            />
            <ProjectCard
              title="EdgeLens: Vision Microservice"
              description="Industrial defect detection system achieving 99% accuracy with ResNet50, served via FastAPI and containerized with Docker."
              tags={["PyTorch", "FastAPI", "Docker", "MongoDB"]}
              link="https://github.com/PuneetVerma04/EdgeLens"
            />
            <ProjectCard
              title="End-to-End CI/CD Pipeline (Under Development)"
              description="Automated multi-service build and deployment pipeline for .NET applications using GitHub Actions and AWS EC2."
              tags={["DevOps", "GitHub Actions", "AWS", "Docker"]}
              link="https://github.com/PuneetVerma04/"
            />
          </div>
        </div>
      </section>

      {/* Experience & Research */}
      <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Work Experience */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Experience
            </h2>
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative hover-lift">
              <div className="absolute top-0 left-6 sm:left-8 -mt-3 bg-blue-500 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wide">
                Vocational Trainee
              </div>
              <h3 className="text-lg sm:text-xl font-bold mt-2">
                N.T.P.C. Ltd
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                June 2024 - July 2024 • Madhya Pradesh
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-xs sm:text-sm">
                <li>
                  Developed membership management system using ASP.NET & C#.
                </li>
                <li>
                  Built admin panels for Windows Server 2019 log analysis.
                </li>
                <li>
                  Analyzed server logs using Python & Pandas to detect failure
                  patterns.
                </li>
              </ul>
            </div>
          </div>

          {/* Research & Certs */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Research & Certs
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <a
                href="https://ieeexplore.ieee.org/document/11089241/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="glass-card p-4 sm:p-6 rounded-xl hover-lift group">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-purple-300 group-hover:text-purple-200">
                      Drone Detection with YOLOv8
                    </h3>
                    <ExternalLink
                      size={14}
                      className="text-gray-500 group-hover:text-purple-300 flex-shrink-0 sm:w-4 sm:h-4"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    Published at RAIT 2025, IIT Dhanbad
                  </p>
                </div>
              </a>
              <a
                href="https://ieeexplore.ieee.org/document/11168634"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="glass-card p-4 sm:p-6 rounded-xl hover-lift group">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-purple-300 group-hover:text-purple-200">
                      Brake Light Detection
                    </h3>
                    <ExternalLink
                      size={14}
                      className="text-gray-500 group-hover:text-purple-300 flex-shrink-0 sm:w-4 sm:h-4"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    Published at ACCTHPA 2025, Cochin
                  </p>
                </div>
              </a>

              <div className="pt-3 sm:pt-4">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-200">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <Badge name="AWS Solutions Architect" />
                  <Badge name="OCI GenAI Professional" />
                  <Badge name="Postman API Expert" />
                  <Badge name="Coursera ML Specialization" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center text-gray-500 text-xs sm:text-sm glass-nav px-4">
        <p>© 2025 Puneet Verma. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}

// Helper Components
function SkillCard({ icon, title, skills }) {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-2xl hover:bg-purple-500/5 transition-all">
      <div className="mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2 py-1 bg-purple-500/10 rounded-md text-gray-300 border border-purple-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="block">
      <div className="glass-card p-5 sm:p-8 rounded-2xl group hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
        <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
          <h3 className="text-base sm:text-xl font-bold group-hover:text-purple-400 transition-colors leading-tight">
            {title}
          </h3>
          <ExternalLink
            size={16}
            className="text-gray-500 group-hover:text-blue-400 flex-shrink-0 sm:w-[18px] sm:h-[18px] transition-colors"
          />
        </div>
        <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Badge({ name }) {
  return (
    <span className="px-2 sm:px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-[10px] sm:text-xs text-purple-300">
      {name}
    </span>
  );
}
