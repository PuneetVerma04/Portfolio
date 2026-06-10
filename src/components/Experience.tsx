import { Clock, Hash, Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { experience } from "../data/resume";

export function Experience() {
  return (
    <Reveal as="section" id="experience" className="px-4 py-8 sm:px-8">
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-white">Experience</h2>

      {experience.map((job) => (
        <div key={`${job.org}-${job.role}`} className="mb-6 last:mb-0">
          {/* Entry header */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 px-3">
            <div>
              <h3 className="text-xl font-bold text-white">{job.role}</h3>
              <p className="text-sm font-medium text-spotify">{job.org}</p>
            </div>
            <span className="text-sm text-subdued">{job.period}</span>
          </div>

          {/* Tracklist header */}
          <div className="mt-3 grid grid-cols-[24px_1fr_auto] items-center gap-3 border-b border-white/10 px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-subdued">
            <Hash size={14} />
            <span>What I built</span>
            <Clock size={14} />
          </div>

          {/* Tracks = bullets */}
          <ol className="mt-1">
            {job.points.map((point, idx) => (
              <li
                key={point}
                className="group grid grid-cols-[24px_1fr_auto] items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-white/5"
              >
                <span className="grid place-items-center text-sm text-subdued">
                  <span className="tabular-nums group-hover:hidden">{idx + 1}</span>
                  <Play size={14} className="hidden fill-white text-white group-hover:block" />
                </span>
                <span className="text-sm text-white/85">{point}</span>
                <span className="text-xs tabular-nums text-subdued">{trackLen(idx)}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </Reveal>
  );
}

/** Decorative "track lengths" so the list reads like an album. */
function trackLen(i: number) {
  const lens = ["3:24", "4:11", "2:58", "5:02", "3:47", "4:33"];
  return lens[i % lens.length];
}
