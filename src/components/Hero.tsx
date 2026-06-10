import { BadgeCheck, FileDown, Github, Linkedin, Mail, Play } from "lucide-react";
import { profile, projects, certificates } from "../data/resume";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-6 pt-4 sm:px-8">
      {/* Artist-header gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[360px] bg-gradient-to-b from-spotify-dark/70 via-emerald-900/30 to-transparent"
      />

      <div className="flex flex-col items-start gap-6 pt-10 sm:flex-row sm:items-end sm:pt-16">
        {/* Avatar */}
        <div className="grid h-44 w-44 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-spotify-dark text-6xl font-black text-black shadow-2xl shadow-black/50 sm:h-52 sm:w-52">
          PV
        </div>

        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <BadgeCheck size={22} className="fill-sky-500 text-base" />
            Verified Profile
          </p>
          <h1 className="mt-2 text-5xl font-black leading-none tracking-tighter text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-white/90">{profile.tagline}</p>
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-white">
            <span className="font-bold">{profile.role}</span>
            <Dot />
            <span>{profile.location}</span>
            <Dot />
            <span className="text-subdued">
              {projects.length} featured projects · {certificates.length} certifications
            </span>
          </p>
        </div>
      </div>

      {/* Action row */}
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <a
          href="#projects"
          aria-label="Play — view projects"
          className="grid h-14 w-14 place-items-center rounded-full bg-spotify text-black shadow-lg transition-all hover:scale-105 hover:bg-spotify-hover"
        >
          <Play size={26} className="ml-0.5 fill-black" />
        </a>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-white hover:scale-105"
        >
          <FileDown size={18} />
          Resume
        </a>

        <div className="flex items-center gap-5 text-subdued">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-white">
            <Github size={24} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-white">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="text-subdued">•</span>;
}
