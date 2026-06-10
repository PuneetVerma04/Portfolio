import {
  Award,
  Briefcase,
  Home,
  Library,
  Mail,
  Search,
  Sparkles,
  User,
  Users,
  Disc3,
  type LucideIcon,
} from "lucide-react";
import { profile } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";

type LibItem = {
  id: string;
  label: string;
  subtitle: string;
  icon: LucideIcon;
  gradient: string;
};

const library: LibItem[] = [
  { id: "about", label: "About", subtitle: "Profile · Bio", icon: User, gradient: "from-emerald-500 to-teal-700" },
  { id: "projects", label: "Projects", subtitle: "Album · 2 builds", icon: Disc3, gradient: "from-indigo-500 to-purple-700" },
  { id: "skills", label: "Skills", subtitle: "Genres · Stack", icon: Sparkles, gradient: "from-orange-500 to-rose-700" },
  { id: "experience", label: "Experience", subtitle: "Tracklist · Work", icon: Briefcase, gradient: "from-sky-500 to-blue-700" },
  { id: "leadership", label: "Leadership", subtitle: "Playlist · Research", icon: Users, gradient: "from-fuchsia-500 to-pink-700" },
  { id: "certificates", label: "Certificates", subtitle: "Collection · 5", icon: Award, gradient: "from-amber-400 to-yellow-700" },
  { id: "contact", label: "Contact", subtitle: "Single · Reach out", icon: Mail, gradient: "from-lime-500 to-green-700" },
];

export function Sidebar() {
  const active = useActiveSection(library.map((l) => l.id));

  return (
    <aside className="hidden w-[260px] shrink-0 flex-col gap-2 lg:flex xl:w-[300px]">
      {/* Top nav card */}
      <nav className="rounded-lg bg-base px-3 py-4">
        <a
          href="#top"
          className="mb-4 flex items-center gap-2.5 px-3 text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-spotify text-sm font-extrabold text-black">
            PV
          </span>
          <span className="text-[15px] font-bold tracking-tight">{profile.name}</span>
        </a>

        <a
          href="#top"
          className="flex items-center gap-4 px-3 py-2 text-[15px] font-bold text-white transition-colors hover:text-white/100"
        >
          <Home size={24} />
          Home
        </a>
        <div className="flex cursor-default items-center gap-4 px-3 py-2 text-[15px] font-bold text-subdued">
          <Search size={24} />
          Search
        </div>
      </nav>

      {/* Library card */}
      <div className="flex min-h-0 flex-1 flex-col rounded-lg bg-base">
        <div className="flex items-center justify-between px-5 pb-2 pt-4">
          <div className="flex items-center gap-3 text-[15px] font-bold text-subdued">
            <Library size={24} />
            Your Library
          </div>
        </div>

        <div className="scrollarea min-h-0 flex-1 overflow-y-auto px-2 pb-3">
          {library.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group flex items-center gap-3 rounded-md p-2 transition-colors ${
                  isActive ? "bg-card-hover" : "hover:bg-card"
                }`}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-md bg-gradient-to-br ${item.gradient} text-white shadow`}
                >
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span
                    className={`block truncate text-[15px] font-semibold ${
                      isActive ? "text-spotify" : "text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="block truncate text-[13px] text-subdued">{item.subtitle}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
