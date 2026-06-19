import { HeroBackground } from '@/components/three/HeroBackground'
import { Button } from '@/components/ui/Button'
import { Card, FeatureList } from '@/components/ui/Card'
import { Section, SectionHeader } from '@/components/ui/Section'
import { company } from '@/content/company'
import { projects } from '@/content/projects'
import { services } from '@/content/services'

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-700/60">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:py-40">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-400">
            {company.name}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-cream md:text-5xl lg:text-6xl">
            Software engineered for businesses that expect more.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {company.mission}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact">Start a conversation</Button>
            <Button to="/services" variant="secondary">
              Explore our services
            </Button>
          </div>
        </div>
      </section>

      <Section ariaLabelledBy="values-heading">
        <SectionHeader
          id="values-heading"
          eyebrow="Why Java Genics"
          title="We listen first. We build exactly what you need."
          description="No sales team. No guesswork. Just experienced engineers who capture your requirements and deliver software worth far more than you pay for it."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {company.values.map((value) => (
            <Card key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-navy-700/60 bg-navy-900/30" ariaLabelledBy="services-heading">
        <SectionHeader
          id="services-heading"
          eyebrow="What we do"
          title="End-to-end software services"
          description="Agentic software, local business tools, cloud infrastructure, migration, and deployment — backed by accessibility and security best practices."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <Card key={service.title} title={service.title} description={service.description}>
              <FeatureList items={service.highlights.slice(0, 2)} />
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/services" variant="secondary">
            View all services
          </Button>
        </div>
      </Section>

      <Section ariaLabelledBy="projects-heading">
        <SectionHeader
          id="projects-heading"
          eyebrow="Our work"
          title="Building software that matters"
          description="From AI-powered education to smart home applications and enterprise automation — we ship products that create real value."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              badge={project.status}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/projects" variant="secondary">
            Learn about our projects
          </Button>
        </div>
      </Section>

      <Section className="border-t border-navy-700/60 bg-navy-900/30" ariaLabelledBy="cta-heading">
        <div className="rounded-2xl border border-navy-700 bg-navy-800/40 p-8 text-center md:p-12">
          <h2 id="cta-heading" className="text-2xl font-bold text-cream md:text-3xl">
            Ready to build something exceptional?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Send your project details to{' '}
            <a href={`mailto:${company.email}`} className="text-teal-400 hover:underline">
              {company.email}
            </a>
            . We respond personally — and we travel to meet clients when it makes a difference.
          </p>
          <div className="mt-8">
            <Button to="/contact">Contact us</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
