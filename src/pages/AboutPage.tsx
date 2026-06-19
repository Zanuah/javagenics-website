import { PageHero } from '@/components/layout/PageHero'
import { Card } from '@/components/ui/Card'
import { Section, SectionHeader } from '@/components/ui/Section'
import { company } from '@/content/company'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Mission-driven software, delivered with precision"
        description={company.about.intro}
      />

      <Section ariaLabelledBy="mission-heading">
        <SectionHeader
          id="mission-heading"
          eyebrow="Our mission"
          title="Software that earns your trust"
          description={company.mission}
        />
      </Section>

      <Section className="border-y border-navy-700/60 bg-navy-900/30" ariaLabelledBy="team-heading">
        <SectionHeader
          id="team-heading"
          eyebrow="Our team"
          title="Experienced engineers. No sales department."
          description={company.about.team}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title={company.ceo.name}
            description={`${company.ceo.title} — ${company.ceo.experience}. Kevin leads every engagement with a hands-on approach, ensuring technical decisions align with client goals and long-term maintainability.`}
            badge="Leadership"
          />
          <Card
            title="Developers & testers"
            description="Our extended network of developers and quality assurance professionals brings decades of combined experience across web, cloud, mobile, and enterprise systems. We scale the right expertise to each project without the overhead of a large firm."
            badge="Extended team"
          />
        </div>
      </Section>

      <Section ariaLabelledBy="process-heading">
        <SectionHeader
          id="process-heading"
          eyebrow="How we work"
          title="Agile planning. Constant communication."
          description="We maintain an open dialog with every client so we are always on the same page — from initial discovery through delivery and beyond."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.process.map((step) => (
            <article key={step.step} className="rounded-xl border border-navy-700 p-6">
              <span className="text-2xl font-bold text-teal-400">{step.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-navy-700/60 bg-navy-900/30" ariaLabelledBy="location-heading">
        <SectionHeader
          id="location-heading"
          eyebrow="Where we are"
          title="Based in San Antonio. Available wherever you are."
          description={company.about.travel}
        />
      </Section>
    </>
  )
}
