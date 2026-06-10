import { useEffect, useState } from "react";
import {
  Heart,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

type Track = { title: string; artist: string; dur: number };

const tracks: Track[] = [
  { title: "Building Production LLM Systems", artist: "Puneet Verma", dur: 214 },
  { title: "RAG Pipelines & Agentic Workflows", artist: "Puneet Verma", dur: 198 },
  { title: "Full-Stack with .NET & Angular", artist: "Puneet Verma", dur: 231 },
];

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function NowPlayingBar() {
  const [playing, setPlaying] = useState(!prefersReducedMotion);
  const [idx, setIdx] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const track = tracks[idx];

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= track.dur) {
          setIdx((i) => (i + 1) % tracks.length);
          return 0;
        }
        return e + 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [playing, track.dur]);

  const pct = (elapsed / track.dur) * 100;

  return (
    <div className="flex h-[72px] shrink-0 items-center justify-between gap-3 px-3 sm:px-4">
      {/* Now playing — track info */}
      <div className="flex min-w-0 items-center gap-3 sm:w-[30%]">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-gradient-to-br from-emerald-400 to-spotify-dark text-lg font-black text-black">
          PV
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{track.title}</p>
          <p className="truncate text-xs text-subdued">{track.artist}</p>
        </div>
        <Heart size={16} className="ml-1 hidden shrink-0 fill-spotify text-spotify sm:block" />
      </div>

      {/* Controls + progress */}
      <div className="flex max-w-[45%] flex-1 flex-col items-center gap-1.5">
        <div className="flex items-center gap-4 text-subdued">
          <Shuffle size={16} className="hidden text-spotify sm:block" />
          <button type="button" aria-label="Previous" className="hover:text-white">
            <SkipBack size={18} className="fill-current" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105"
          >
            {playing ? <Pause size={16} className="fill-black" /> : <Play size={16} className="ml-0.5 fill-black" />}
          </button>
          <button type="button" aria-label="Next" className="hover:text-white">
            <SkipForward size={18} className="fill-current" />
          </button>
          <Repeat size={16} className="hidden text-spotify sm:block" />
        </div>

        <div className="hidden w-full items-center gap-2 sm:flex">
          <span className="text-[11px] tabular-nums text-subdued">{fmt(elapsed)}</span>
          <div className="group relative h-1 flex-1 rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white transition-[width] duration-1000 ease-linear group-hover:bg-spotify"
              style={{ width: `${pct}%` }}
            />
            <div
              className="absolute top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-white group-hover:block"
              style={{ left: `calc(${pct}% - 6px)` }}
            />
          </div>
          <span className="text-[11px] tabular-nums text-subdued">{fmt(track.dur)}</span>
        </div>
      </div>

      {/* Equalizer + volume */}
      <div className="hidden items-center justify-end gap-3 sm:flex sm:w-[30%]">
        <div className="flex h-5 items-end gap-0.5" aria-hidden>
          {[0, 1, 2, 3].map((b) => (
            <span
              key={b}
              className="w-1 rounded-full bg-spotify"
              style={{
                height: "100%",
                animation: "eq 0.9s ease-in-out infinite",
                animationDelay: `${b * 0.15}s`,
                animationPlayState: playing ? "running" : "paused",
              }}
            />
          ))}
        </div>
        <Volume2 size={18} className="text-subdued" />
        <div className="h-1 w-24 rounded-full bg-white/20">
          <div className="h-full w-2/3 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
