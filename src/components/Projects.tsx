import { Disc3, ExternalLink, Github, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "../data/resume";

const arts = [
  "from-indigo-500 via-purple-600 to-fuchsia-700",
  "from-emerald-500 via-teal-600 to-cyan-700",
  "from-orange-500 via-rose-600 to-red-700",
];

export function Projects() {
  return (
    <Reveal as="section" id="projects" className="px-4 py-8 sm:px-8">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-white">Featured Projects</h2>
        <span className="text-xs font-bold uppercase tracking-wider text-subdued">Album</span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="group rounded-xl bg-card p-4 transition-colors duration-300 hover:bg-card-hover"
          >
            {/* Album art */}
            <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
              <div
                className={`grid h-full w-full place-items-center bg-gradient-to-br ${arts[i % arts.length]}`}
              >
                <Disc3 size={64} className="text-white/85 transition-transform duration-700 group-hover:rotate-180" />
              </div>
              {/* Hover play button */}
              <a
                href={project.liveUrl ?? project.repoUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name}`}
                className="absolute bottom-3 right-3 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-spotify text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105"
              >
                <Play size={22} className="ml-0.5 fill-black" />
              </a>
            </div>

            {/* Title + links */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-white">{project.name}</h3>
              <div className="flex shrink-0 items-center gap-2 pt-1 text-subdued">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Source" className="hover:text-white">
                    <Github size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live" className="hover:text-white">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="mt-1 text-sm text-subdued">{project.blurb}</p>

            {/* Highlights as a tracklist */}
            <ol className="mt-4 space-y-1">
              {project.highlights.map((h, idx) => (
                <li
                  key={h}
                  className="flex gap-3 rounded-md px-2 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5"
                >
                  <span className="w-4 shrink-0 text-right text-subdued tabular-nums">{idx + 1}</span>
                  <span>{h}</span>
                </li>
              ))}
            </ol>

            {/* Tech chips */}
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-subdued"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
