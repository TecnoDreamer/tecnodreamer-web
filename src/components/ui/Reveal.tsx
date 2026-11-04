"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  direction?: RevealDirection;
  /** Atraso em ms, usado para stagger em listas/grades. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  /** Demais props (role, aria-*, etc.) são repassadas ao elemento renderizado. */
  [key: `aria-${string}`]: unknown;
  role?: string;
  id?: string;
}

/**
 * Anima a entrada de um elemento quando ele cruza o viewport, uma vez só.
 *
 * O estado escondido vive no CSS (`globals.css`, seletor `.js [data-reveal]`)
 * e só vale quando o script inline do layout marcou `<html class="js">`:
 * sem JavaScript o conteúdo aparece normalmente, e sob
 * `prefers-reduced-motion` também (a media query anula o estado escondido).
 * Assim o SSR não depende de hidratação para mostrar texto.
 */
export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      {...rest}
      data-reveal={direction}
      data-visible={isVisible ? "" : undefined}
      // O script no fim do <body> (layout) já marca data-visible no que
      // está na primeira dobra antes da hidratação.
      suppressHydrationWarning
      className={className}
      style={delay ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties) : style}
    >
      {children}
    </Component>
  );
}
