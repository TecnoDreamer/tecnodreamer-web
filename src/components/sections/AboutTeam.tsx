import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, User } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/constants/company";
import { TEAM_MEMBERS } from "@/constants/team";

/** Sobre a empresa + quem está por trás dela, com links para Empresa e Equipe. */
export function AboutTeam() {
  return (
    <Section tone="background" divider aria-labelledby="sobre-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <Eyebrow index="05">Sobre</Eyebrow>
          <h2 id="sobre-title" className="mt-5 text-h2 font-semibold uppercase text-foreground">
            Sobre a TecnoDreamer
          </h2>
          <p className="mt-6 max-w-2xl text-lead text-foreground-muted">{COMPANY.about}</p>

          <blockquote className="mt-8 max-w-2xl border-l-2 border-brand-cyan pl-5 text-lg text-foreground">
            <span className="block font-mono text-micro font-medium uppercase text-foreground-muted">
              Propósito
            </span>
            <p className="mt-2">{COMPANY.purpose}</p>
          </blockquote>

          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {COMPANY.values.map((value) => (
              <li key={value} className="flex items-start gap-3 text-sm text-foreground-muted">
                <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-cyan" />
                {value}
              </li>
            ))}
          </ul>

          <ButtonLink href="/empresa" variant="outline" className="mt-10">
            Conhecer a empresa
            <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
          <Eyebrow>Equipe</Eyebrow>
          <ul className="mt-5 flex flex-col gap-4">
            {TEAM_MEMBERS.map((member) => (
              <li
                key={member.name}
                className="group relative overflow-hidden rounded-lg border border-border bg-background transition-colors duration-300 hover:border-border-strong"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-surface-2">
                  {member.photoUrl ? (
                    <Image
                      src={member.photoUrl}
                      alt={`Foto de ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 400px, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-standard group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-foreground-muted">
                      <User size={40} aria-hidden="true" />
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-h3 font-semibold text-foreground">
                    <Link href="/equipe" className="after:absolute after:inset-0">
                      {member.name}
                    </Link>
                  </h3>
                  <p className="mt-1 font-mono text-micro font-medium uppercase text-brand-cyan">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-foreground-muted">{member.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Conhecer a equipe
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
