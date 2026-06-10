import { Reveal } from "./Reveal";
import { skillGroups } from "../data/resume";

const tileColors = [
  "bg-[#1e3264]",
  "bg-[#8d67ab]",
  "bg-[#e8115b]",
  "bg-[#1db954]",
  "bg-[#dc148c]",
  "bg-[#e1118c]",
  "bg-[#477d95]",
  "bg-[#b02897]",
];

export function Skills() {
  return (
    <Reveal as="section" id="skills" className="px-4 py-8 sm:px-8">
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-white">Browse Skills</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className={`relative aspect-[1.8/1] overflow-hidden rounded-xl p-5 transition-transform duration-200 hover:scale-[1.02] ${tileColors[i % tileColors.length]}`}
          >
            <h3 className="text-xl font-extrabold tracking-tight text-white">{group.title}</h3>

            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-black/25 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* Decorative tilted card, Spotify genre-tile style */}
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-20 w-20 rotate-[25deg] rounded-md bg-black/30 shadow-xl"
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
