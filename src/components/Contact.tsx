import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "../data/resume";

export function Contact() {
  return (
    <Reveal as="section" id="contact" className="px-4 py-8 sm:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-spotify-dark via-emerald-800 to-base p-8 sm:p-12">
        <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-spotify/30 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/70">Up next</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Let's build something.
          </h2>
          <p className="mt-4 max-w-xl text-white/90">
            I'm open to internships, full-time roles, and interesting collaborations. Email is the
            fastest way to reach me — I usually reply within a day.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-spotify px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-spotify-hover"
            >
              <Mail size={18} />
              {profile.email}
            </a>

            <div className="flex items-center gap-4 text-white">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-opacity hover:opacity-70">
                <Github size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 flex flex-col items-center justify-between gap-2 px-1 text-sm text-subdued sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Spotify-inspired · Built with React, TypeScript &amp; Tailwind CSS</p>
      </footer>
    </Reveal>
  );
}
