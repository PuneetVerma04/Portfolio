import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
};

/** Wraps children in a scroll-triggered rise animation (see `.reveal` in index.css). */
export function Reveal({ children, className = "", delay = 0, as = "div", id }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      id={id}
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
