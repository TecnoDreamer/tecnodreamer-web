import { Github, Linkedin, User } from "lucide-react";
import type { TeamMember } from "@/types/team";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col items-center gap-3 rounded-lg border border-border bg-background p-6 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface text-foreground-muted">
        <User size={32} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
      <p className="text-sm text-brand-primary-strong">{member.role}</p>
      <p className="text-sm text-foreground-muted">{member.description}</p>
      {member.specialties.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-2">
          {member.specialties.map((specialty) => (
            <li
              key={specialty}
              className="rounded-full bg-surface px-3 py-1 text-xs text-foreground-muted"
            >
              {specialty}
            </li>
          ))}
        </ul>
      )}
      {(member.linkedinUrl || member.githubUrl) && (
        <div className="flex gap-3 pt-1">
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${member.name}`}
              className="text-foreground-muted hover:text-brand-primary-strong"
            >
              <Linkedin size={18} />
            </a>
          )}
          {member.githubUrl && (
            <a
              href={member.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${member.name}`}
              className="text-foreground-muted hover:text-brand-primary-strong"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      )}
      {member.isPlaceholder && (
        <p className="text-xs text-warning">TODO: DEFINIR COM PRODUCT OWNER</p>
      )}
    </article>
  );
}
