import { useEffect, useState, type RefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { profile } from "../data/resume";

export function TopBar({ scrollRef }: { scrollRef: RefObject<HTMLElement | null> }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setProgress(Math.min(el.scrollTop / 280, 1));
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 sm:px-6"
      style={{ backgroundColor: `rgba(18,18,18,${progress})` }}
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Back"
          className="grid h-8 w-8 place-items-center rounded-full bg-black/60 text-subdued"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Forward"
          className="grid h-8 w-8 place-items-center rounded-full bg-black/60 text-subdued"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-white sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-spotify" />
          Available for work
        </span>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-black transition-transform hover:scale-105"
        >
          Hire me
        </a>
        <a
          href="#contact"
          aria-label="Contact"
          className="grid h-8 w-8 place-items-center rounded-full bg-black text-sm font-bold text-white ring-1 ring-white/10"
        >
          PV
        </a>
      </div>
    </header>
  );
}
