import { FileText, Play, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { leadership, publications } from "../data/resume";

export function Leadership() {
  return (
    <Reveal as="section" id="leadership" className="px-4 py-8 sm:px-8">
      <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
        <Users size={22} className="text-spotify" />
        Leadership &amp; Research
      </h2>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Leadership as playlists */}
        <div className="space-y-4">
          {leadership.map((role) => (
            <div key={`${role.org}-${role.role}`} className="rounded-xl bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-bold text-white">{role.role}</h3>
                <span className="text-xs text-subdued">{role.period}</span>
              </div>
              <p className="text-sm text-spotify">{role.org}</p>
              <ol className="mt-3">
                {role.points.map((p, idx) => (
                  <li
                    key={p}
                    className="group flex items-start gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-white/5"
                  >
                    <span className="mt-0.5 grid w-4 shrink-0 place-items-center text-xs text-subdued">
                      <span className="group-hover:hidden">{idx + 1}</span>
                      <Play size={12} className="hidden fill-white text-white group-hover:block" />
                    </span>
                    <span className="text-sm text-white/80">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Publications as "singles" */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 px-1 text-sm font-bold uppercase tracking-wider text-subdued">
            <FileText size={16} className="text-spotify" />
            Research Singles
          </h3>
          <div className="space-y-3">
            {publications.map((pub) => {
              const Wrapper = pub.url ? "a" : "div";
              return (
                <Wrapper
                  key={pub.title}
                  {...(pub.url ? { href: pub.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`flex items-center gap-4 rounded-xl bg-card p-4 transition-colors hover:bg-card-hover ${
                    pub.url ? "cursor-pointer" : ""
                  }`}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-pink-700 text-white">
                    <FileText size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold leading-snug text-white">{pub.title}</span>
                    <span className="mt-1 block text-sm text-subdued">{pub.venue}</span>
                  </span>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
