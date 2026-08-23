"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

const HIDDEN_TRANSFORM: Record<RevealDirection, string> = {
  up: "translate-y-6",
  down: "-translate-y-6",
  left: "translate-x-6",
  right: "-translate-x-6",
  none: "",
};

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  direction?: RevealDirection;
  /** Atraso em ms, usado para stagger em listas/grades. */
  delay?: number;
  className?: string;
}

/**
 * Anima a entrada de um elemento quando ele cruza o viewport.
 * Respeita prefers-reduced-motion (renderiza direto, sem animação) e
 * dispara apenas uma vez por elemento.
 */
export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [skipAnimation] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [isVisible, setIsVisible] = useState(skipAnimation);

  useEffect(() => {
    if (skipAnimation) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [skipAnimation]);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      className={cn(
        !skipAnimation && "transition-all duration-[600ms] ease-standard",
        !skipAnimation && !isVisible && cn("opacity-0", HIDDEN_TRANSFORM[direction]),
        !skipAnimation && isVisible && "opacity-100 translate-x-0 translate-y-0",
        className
      )}
      style={!skipAnimation ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
