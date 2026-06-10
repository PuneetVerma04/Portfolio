import { Award, Briefcase, Disc3, Home, User } from "lucide-react";

const items = [
  { id: "top", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Disc3 },
  { id: "experience", label: "Work", icon: Briefcase },
  { id: "certificates", label: "Certs", icon: Award },
  { id: "about", label: "About", icon: User },
];

export function MobileNav() {
  return (
    <nav className="flex items-center justify-around border-t border-white/5 bg-black px-2 py-2 lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex flex-col items-center gap-1 px-2 py-1 text-subdued transition-colors hover:text-white"
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
