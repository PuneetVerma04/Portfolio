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
    <div className="min-h-screen font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 glass-nav"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="text-xl font-bold tracking-tighter"
          >
            PV.
          </motion.h1>
          <div className="flex gap-6 text-sm text-gray-300">
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
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            className="glass-card p-1 rounded-full w-fit mb-6"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="px-4 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20"
            >
              Open to Work • 2026 Grad
            </motion.span>
          </motion.div>
          <div className="flex items-center gap-6 mb-3">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient animate-text-flow">
                <DecryptText text="Puneet Verma" />
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-gray-500 italic mb-6"
          >
            Building Differently
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-8"
          >
            Full Stack Developer & AI/ML Engineer. <br />
            Bridging the gap between{" "}
            <span className="text-white">scalable .NET systems</span> and{" "}
            <span className="text-white">intelligent AI solutions</span>.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:verma0404puneet@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
            >
              <Mail size={20} /> verma0404puneet@gmail.com
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/PuneetVerma04"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg hover:bg-white/10 transition-all"
            >
              <Github size={20} /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/puneet-verma-595176259/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg hover:bg-white/10 transition-all"
            >
              <Linkedin size={20} /> LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Terminal className="text-purple-400" />
            </motion.div>
            Technical Arsenal
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <SkillCard
                icon={<Code className="text-blue-400" />}
                title="Languages"
                skills={["Java", "C#", "Python", "JavaScript", "SQL"]}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <SkillCard
                icon={<Database className="text-green-400" />}
                title="Frameworks"
                skills={[
                  "ASP.NET Core",
                  "FastAPI",
                  "React",
                  "TensorFlow",
                  "PyTorch",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <SkillCard
                icon={<Cloud className="text-orange-400" />}
                title="Cloud & DevOps"
                skills={[
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                  "GitHub Actions",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-white/0">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProjectCard
                title="RAG-Based PDF Insight Generator"
                description="A local AI-powered system that chunks PDFs and retrieves context-aware summaries using LangGraph for dynamic workflow routing."
                tags={["Python", "LangChain", "Ollama", "RAG"]}
                link="https://github.com/PuneetVerma04/RAG-Based-PDF-Insight-Generator"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProjectCard
                title="Gray Zone Game Store"
                description="Full-stack .NET platform with RESTful APIs, Blazor components, and async CRUD operations."
                tags={["ASP.NET Core", "Blazor", "SQL Server", "C#"]}
                link="https://github.com/PuneetVerma04/Gray-Zone-Backend"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProjectCard
                title="EdgeLens: Vision Microservice"
                description="Industrial defect detection system achieving 99% accuracy with ResNet50, served via FastAPI and containerized with Docker."
                tags={["PyTorch", "FastAPI", "Docker", "MongoDB"]}
                link="https://github.com/PuneetVerma04/EdgeLens"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProjectCard
                title="End-to-End CI/CD Pipeline (Under Development)"
                description="Automated multi-service build and deployment pipeline for .NET applications using GitHub Actions and AWS EC2."
                tags={["DevOps", "GitHub Actions", "AWS", "Docker"]}
                link="https://github.com/PuneetVerma04/"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Research */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="glass-card p-8 rounded-2xl relative hover-lift">
              <div className="absolute top-0 left-8 -mt-3 bg-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Vocational Trainee
              </div>
              <h3 className="text-xl font-bold mt-2">N.T.P.C. Ltd</h3>
              <p className="text-gray-400 text-sm mb-4">
                June 2024 - July 2024 • Madhya Pradesh
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
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
          </motion.div>

          {/* Research & Certs */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Research & Certs</h2>
            <div className="space-y-6">
              <a
                href="https://ieeexplore.ieee.org/document/11089241/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="glass-card p-6 rounded-xl hover-lift group">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200">
                      Drone Detection with YOLOv8
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-gray-500 group-hover:text-purple-300"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
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
                <div className="glass-card p-6 rounded-xl hover-lift group">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200">
                      Brake Light Detection
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-gray-500 group-hover:text-purple-300"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Published at ACCTHPA 2025, Cochin
                  </p>
                </div>
              </a>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge name="AWS Solutions Architect" />
                  <Badge name="OCI GenAI Professional" />
                  <Badge name="Postman API Expert" />
                  <Badge name="Coursera ML Specialization" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm glass-nav">
        <p>© 2025 Puneet Verma. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}

// Helper Components
function SkillCard({ icon, title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="glass-card p-8 rounded-2xl group hover:border-purple-500/50 transition-all"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <motion.div
            whileHover={{ rotate: 45, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ExternalLink
              size={18}
              className="text-gray-500 group-hover:text-white"
            />
          </motion.div>
        </div>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-xs font-medium px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.a>
  );
}

function Badge({ name }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300 cursor-pointer"
    >
      {name}
    </motion.span>
  );
}
