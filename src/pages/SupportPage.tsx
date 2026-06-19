import { PageHero } from '@/components/layout/PageHero'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section, SectionHeader } from '@/components/ui/Section'
import { company } from '@/content/company'

export function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="We are here when you need us"
        description="Whether you have a question about an active project or need help with a deployed application, our team responds promptly and personally."
      />

      <Section ariaLabelledBy="support-options-heading">
        <SectionHeader
          id="support-options-heading"
          title="How to get support"
          description="Reach out by email and include your project name or application for the fastest response."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Project support"
            description="For active engagements, contact your project lead directly or email us with your project reference. We maintain open communication channels throughout every engagement."
          />
          <Card
            title="Deployed applications"
            description="For applications we have deployed on your behalf, email us with a description of the issue. We prioritize production-impacting issues and aim to respond within one business day."
          />
          <Card
            title="Security monitoring"
            description="Clients under monitoring contracts receive regular security scans at a typically very low cost. If you are enrolled in a monitoring plan, security scan results and alerts are delivered on your agreed schedule."
          />
          <Card
            title="General inquiries"
            description={`For all other questions, email ${company.email}. We do not use automated ticket systems — a real engineer reads and responds to every message.`}
          />
        </div>
      </Section>

      <Section className="border-t border-navy-700/60 bg-navy-900/30">
        <div className="text-center">
          <p className="text-muted">
            Email us at{' '}
            <a href={`mailto:${company.email}`} className="text-teal-400 hover:underline">
              {company.email}
            </a>
          </p>
          <div className="mt-6">
            <Button to="/contact">Contact us</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
