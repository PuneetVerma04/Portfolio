import { GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { about, education } from "../data/resume";

export function About() {
  return (
    <Reveal as="section" id="about" className="px-4 py-8 sm:px-8">
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-white">About</h2>

      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        {/* Bio card with stat overlay */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-800/40 via-card to-card p-6 sm:p-8">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-spotify/20 blur-3xl"
          />
          <div className="relative space-y-4 text-[15px] leading-relaxed text-white/90">
            {about.summary.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <dl className="relative mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-2xl font-black text-spotify sm:text-3xl">{h.value}</dt>
                <dd className="mt-0.5 text-xs font-medium uppercase tracking-wide text-subdued">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Education list */}
        <div className="rounded-xl bg-card p-6">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-subdued">
            <GraduationCap size={18} className="text-spotify" />
            Education
          </h3>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.school} className="rounded-lg p-3 transition-colors hover:bg-card-hover">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-white">{e.school}</p>
                  <span className="shrink-0 rounded-full bg-spotify/15 px-2 py-0.5 text-xs font-bold text-spotify">
                    {e.score}
                  </span>
                </div>
                <p className="mt-1 text-sm text-subdued">{e.detail}</p>
                <p className="mt-0.5 text-xs text-subdued/70">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
