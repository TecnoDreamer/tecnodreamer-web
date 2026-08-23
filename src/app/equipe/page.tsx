import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { Reveal } from "@/components/ui/Reveal";
import { TEAM_MEMBERS } from "@/constants/team";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça os responsáveis pela TecnoDreamer.",
};

export default function TeamPage() {
  return (
    <Section tone="background" className="pt-16">
      <Reveal className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-semibold text-foreground">Equipe</h1>
        <p className="mt-4 text-foreground-muted">
          As informações da equipe da TecnoDreamer ainda estão sendo formalizadas. Esta página já
          está pronta para recebê-las assim que estiverem disponíveis.
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member, index) => (
          <Reveal key={member.name} delay={index * 80}>
            <TeamMemberCard member={member} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
