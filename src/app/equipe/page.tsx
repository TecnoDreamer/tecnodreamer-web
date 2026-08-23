import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { TEAM_MEMBERS } from "@/constants/team";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça os responsáveis pela TecnoDreamer.",
};

export default function TeamPage() {
  return (
    <Section tone="background" className="pt-16">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-semibold text-foreground">Equipe</h1>
        <p className="mt-4 text-foreground-muted">
          As informações da equipe da TecnoDreamer ainda estão sendo formalizadas. Esta página já
          está pronta para recebê-las assim que estiverem disponíveis.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  );
}
