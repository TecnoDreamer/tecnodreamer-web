"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Lê `prefers-reduced-motion` sem causar mismatch de hidratação: o
 * `useSyncExternalStore` garante que o primeiro render no client bata com
 * o HTML do servidor (que não tem como conhecer a preferência do SO) e só
 * então corrige o valor de forma segura. Um `useState` com
 * `window.matchMedia` no inicializador quebraria isso — o React detecta o
 * atributo divergente na hidratação e explicitamente NÃO o corrige.
 */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

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
  /** Demais props (role, aria-*, etc.) são repassadas ao elemento renderizado. */
  [key: `aria-${string}`]: unknown;
  role?: string;
  id?: string;
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
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const skipAnimation = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

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
      {...rest}
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
