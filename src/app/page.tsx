import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/sections/Hero";
import { InstitutionalStrip } from "@/components/sections/InstitutionalStrip";
import { EcosystemGrid } from "@/components/sections/EcosystemGrid";
import { ProductFeatureCards } from "@/components/sections/ProductFeatureCards";
import { Differentiators } from "@/components/sections/Differentiators";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <InstitutionalStrip />
      <EcosystemGrid />
      <ProductFeatureCards />
      <Differentiators />

      <Section tone="surface" divider aria-labelledby="processo-title">
        <SectionHeading
          index="04"
          eyebrow="Processo"
          id="processo-title"
          title="Como trabalhamos"
          description="Um processo simples, repetido em cada produto do portfólio — do primeiro rascunho à evolução contínua."
        />
        <ProcessTimeline />
      </Section>

      <AboutTeam />
      <FinalCta />
    </>
  );
}
