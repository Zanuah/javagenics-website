import { PageHero } from '@/components/layout/PageHero'
import { Card, FeatureList } from '@/components/ui/Card'
import { Section, SectionHeader } from '@/components/ui/Section'
import { services, serviceIntro } from '@/content/services'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-stack software services for modern businesses"
        description={serviceIntro}
      />

      <Section ariaLabelledBy="services-list-heading">
        <SectionHeader
          id="services-list-heading"
          title="What we offer"
          description="Every engagement is scoped to your needs — whether you need a single application, a cloud migration, or ongoing infrastructure support."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} title={service.title} description={service.description}>
              <FeatureList items={service.highlights} />
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-navy-700/60 bg-navy-900/30" ariaLabelledBy="standards-heading">
        <SectionHeader
          id="standards-heading"
          eyebrow="Our standards"
          title="Built to protect your business"
          description="Accessibility and security are not optional add-ons — they are foundational to every project we deliver."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Accessibility compliance"
            description="All front-end web applications, GUIs, and customer-facing interfaces we build follow accessibility regulations. This protects your users and helps you avoid costly legal exposure."
          />
          <Card
            title="Security scanning & monitoring"
            description="Our applications undergo security reports and vulnerability scans. Under monitoring contracts — typically at very low cost — we provide ongoing security scans to keep your systems protected over time."
          />
        </div>
      </Section>
    </>
  )
}
