import Image from "next/image";
import { ExternalLink, User } from "lucide-react";
import type { TeamMember } from "@/types/team";

/** Card da equipe (V3): foto à esquerda no desktop, dados à direita. */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="corner-ticks grid overflow-hidden rounded-lg border border-border bg-surface md:grid-cols-[minmax(0,22rem)_1fr]">
      <div className="relative aspect-square w-full md:aspect-auto md:min-h-[22rem] border-b border-border bg-surface-2 md:border-b-0 md:border-r">
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt={`Foto de ${member.name}`}
            fill
            sizes="(min-width: 768px) 352px, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center text-foreground-muted">
            <User size={48} aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 p-6 sm:p-10">
        <div>
          <p className="font-mono text-micro font-medium uppercase text-brand-cyan">{member.role}</p>
          <h2 className="mt-3 text-h2 font-semibold uppercase text-foreground">{member.name}</h2>
        </div>
        <p className="max-w-xl text-lead text-foreground-muted">{member.description}</p>

        {member.specialties.length > 0 && (
          <div>
            <h3 className="font-mono text-micro font-medium uppercase text-foreground-muted">Especialidades</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {member.specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="rounded-full border border-border-strong px-3 py-1.5 text-sm text-foreground"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(member.linkedinUrl || member.githubUrl) && (
          <ul className="mt-auto flex flex-wrap gap-3 border-t border-border pt-6 text-sm">
            {member.linkedinUrl && (
              <li>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-foreground transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                >
                  LinkedIn
                  <ExternalLink size={14} aria-hidden="true" />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            )}
            {member.githubUrl && (
              <li>
                <a
                  href={member.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-foreground transition-colors hover:border-brand-cyan hover:text-brand-cyan"
                >
                  GitHub
                  <ExternalLink size={14} aria-hidden="true" />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            )}
          </ul>
        )}

        {member.isPlaceholder && (
          <p className="text-xs text-warning">TODO: DEFINIR COM PRODUCT OWNER</p>
        )}
      </div>
    </article>
  );
}
