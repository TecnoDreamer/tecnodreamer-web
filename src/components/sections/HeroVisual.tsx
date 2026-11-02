import type { CSSProperties } from "react";
import Image from "next/image";
import logo from "../../../tecnodreamer.png";

/**
 * Arte original do herói: anéis, trilhas de circuito e nós luminosos que
 * ecoam o monograma do logo (circuitos saindo do "TD"), nas cores
 * amostradas dele. SVG inline, sem imagem de terceiros. O logo fica parado
 * no centro (sem rotação); só elementos decorativos se movem, e tudo para
 * sob prefers-reduced-motion.
 */

// Trilhas: saem do anel interno (r≈118) e terminam em um nó perto do
// anel externo, com um cotovelo de 45° como no monograma.
const TRACES = [
  "M378 260H430L452 238H492",
  "M360 320L400 360H470",
  "M142 260H92L70 282H30",
  "M160 200L120 160H52",
  "M260 142V92L282 70V30",
  "M300 372V420L278 442V492",
  "M218 145L190 117V60",
  "M205 365L170 400H110",
];

const NODES: Array<[number, number, boolean]> = [
  [492, 238, true],
  [470, 360, false],
  [30, 282, false],
  [52, 160, true],
  [282, 30, false],
  [278, 492, true],
  [190, 60, false],
  [110, 400, false],
];

const pulseStyle = (delay: number): CSSProperties => ({
  transformBox: "fill-box",
  transformOrigin: "center",
  animationDelay: `${delay}ms`,
});

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-cyan) 30%, transparent), color-mix(in srgb, var(--brand-indigo) 30%, transparent) 55%, transparent 75%)",
        }}
      />

      <svg
        viewBox="0 0 520 520"
        aria-hidden="true"
        focusable="false"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="td-trace" x1="0" y1="0" x2="520" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#28e1f7" />
            <stop offset="0.5" stopColor="#2655ad" />
            <stop offset="1" stopColor="#a935f0" />
          </linearGradient>
          <linearGradient id="td-ring" x1="0" y1="0" x2="520" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#28e1f7" />
            <stop offset="0.55" stopColor="#382dab" />
            <stop offset="1" stopColor="#a935f0" />
          </linearGradient>
        </defs>

        {/* Anel de marcações, girando bem devagar */}
        <g className="animate-orbit" style={{ transformOrigin: "260px 260px" }}>
          <circle
            cx="260"
            cy="260"
            r="236"
            fill="none"
            stroke="rgba(154,190,230,0.22)"
            strokeWidth="6"
            strokeDasharray="1 11"
          />
          <circle cx="496" cy="260" r="4" fill="#28e1f7" />
          <circle cx="496" cy="260" r="10" fill="#28e1f7" opacity="0.18" />
        </g>

        <circle cx="260" cy="260" r="196" fill="none" stroke="rgba(154,190,230,0.10)" />
        <circle
          className="animate-draw"
          cx="260"
          cy="260"
          r="196"
          fill="none"
          stroke="url(#td-ring)"
          strokeWidth="1.5"
          pathLength={1}
          strokeDasharray="0.62 1"
          transform="rotate(-120 260 260)"
          style={{ strokeDashoffset: 0 }}
        />
        <circle cx="260" cy="260" r="150" fill="none" stroke="rgba(154,190,230,0.14)" strokeDasharray="2 6" />
        <circle cx="260" cy="260" r="122" fill="rgba(5,8,15,0.65)" stroke="url(#td-ring)" strokeWidth="1" />

        {TRACES.map((d, index) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#td-trace)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray="1"
            className="animate-draw"
            style={{ animationDelay: `${300 + index * 90}ms` }}
          />
        ))}

        {NODES.map(([cx, cy, pulses], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="5.5" fill="#05080f" stroke="#28e1f7" strokeWidth="1.5" />
            {pulses && (
              <circle
                cx={cx}
                cy={cy}
                r="11"
                fill="#28e1f7"
                opacity="0.22"
                className="animate-pulse-dot"
                style={pulseStyle(index * 400)}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Logo oficial, inteiro e parado no centro */}
      <div className="absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src={logo}
          alt=""
          sizes="(min-width: 1024px) 220px, 40vw"
          loading="eager"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
