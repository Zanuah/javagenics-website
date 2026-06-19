import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/ui/Section'
import { company } from '@/content/company'

export function TermsPage() {
  const effectiveDate = 'June 19, 2026'

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Effective date: ${effectiveDate}`}
      />

      <Section>
        <div className="max-w-3xl space-y-8 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-cream">Agreement</h2>
            <p className="mt-3 leading-relaxed">
              By accessing and using the {company.name} website, you agree to these Terms of
              Service. If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Services</h2>
            <p className="mt-3 leading-relaxed">
              {company.name} provides custom software development, cloud infrastructure support,
              migration, deployment, and related professional services. Specific terms for
              client engagements are defined in separate service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Intellectual property</h2>
            <p className="mt-3 leading-relaxed">
              All content on this website — including text, graphics, logos, and design — is
              the property of {company.name} unless otherwise noted. You may not reproduce,
              distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Disclaimer</h2>
            <p className="mt-3 leading-relaxed">
              This website is provided &quot;as is&quot; without warranties of any kind. We make
              no guarantees about the accuracy or completeness of information on this site.
              Project outcomes, timelines, and deliverables are governed by individual service
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              To the fullest extent permitted by law, {company.name} shall not be liable for
              any indirect, incidental, or consequential damages arising from your use of this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Governing law</h2>
            <p className="mt-3 leading-relaxed">
              These terms are governed by the laws of the State of Texas, United States,
              without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about these terms? Contact us at{' '}
              <a href={`mailto:${company.email}`} className="text-teal-400 hover:underline">
                {company.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  )
}
