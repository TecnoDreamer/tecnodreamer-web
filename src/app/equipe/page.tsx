import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { TEAM_MEMBERS } from "@/constants/team";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça os responsáveis pela TecnoDreamer.",
  alternates: { canonical: "/equipe" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Pessoas" title="Equipe" intro="Conheça quem está por trás da TecnoDreamer." />
      <Section tone="background">
        <ul className="flex flex-col gap-8">
          {/* Primeira dobra: sem Reveal, para não atrasar o LCP (foto). */}
          {TEAM_MEMBERS.map((member) => (
            <li key={member.name}>
              <TeamMemberCard member={member} />
            </li>
          ))}
        </ul>
      </Section>
      <FinalCta />
    </>
  );
}
