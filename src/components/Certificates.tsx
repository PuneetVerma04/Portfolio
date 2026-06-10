import { BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { certificates } from "../data/resume";

const covers = [
  "from-amber-400 to-orange-600",
  "from-red-500 to-rose-700",
  "from-sky-400 to-blue-700",
  "from-violet-500 to-purple-700",
  "from-emerald-400 to-teal-700",
];

export function Certificates() {
  return (
    <Reveal as="section" id="certificates" className="px-4 py-8 sm:px-8">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-white">Certifications</h2>
        <span className="text-xs font-bold uppercase tracking-wider text-subdued">Collection</span>
      </div>

      {/* Horizontal card row, Spotify "Made for you" style */}
      <div className="no-scrollbar -mx-1 flex gap-4 overflow-x-auto px-1 pb-2">
        {certificates.map((cert, i) => (
          <div
            key={cert.name}
            className="group w-48 shrink-0 rounded-xl bg-card p-4 transition-colors duration-300 hover:bg-card-hover"
          >
            <div
              className={`mb-4 grid aspect-square place-items-center rounded-lg bg-gradient-to-br ${covers[i % covers.length]} shadow-lg`}
            >
              <BadgeCheck size={48} className="text-white drop-shadow" />
            </div>
            <p className="line-clamp-2 font-bold leading-snug text-white">{cert.name}</p>
            <p className="mt-1 text-sm text-subdued">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
