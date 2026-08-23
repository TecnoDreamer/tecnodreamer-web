"use client";

import { useEffect, useRef } from "react";

/**
 * Halo de luz que acompanha o mouse no Hero. Decorativo (aria-hidden),
 * ativo apenas em dispositivos com ponteiro fino (desktop) e desabilitado
 * sob prefers-reduced-motion — não tem função além de atmosfera visual,
 * então não há custo de UX em omiti-lo nesses casos.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const section = node?.closest("section");
    if (!node || !section) return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    function handleMove(event: MouseEvent) {
      const rect = section!.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      node!.style.setProperty("--spotlight-x", `${x}%`);
      node!.style.setProperty("--spotlight-y", `${y}%`);
    }

    section.addEventListener("mousemove", handleMove);
    return () => section.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 20%), rgba(34,211,238,0.10), transparent 70%)",
      }}
    />
  );
}
