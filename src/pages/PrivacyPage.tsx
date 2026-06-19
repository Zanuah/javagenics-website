import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/ui/Section'
import { company } from '@/content/company'

export function PrivacyPage() {
  const effectiveDate = 'June 19, 2026'

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Effective date: ${effectiveDate}`}
      />

      <Section>
        <div className="prose-custom max-w-3xl space-y-8 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-cream">Introduction</h2>
            <p className="mt-3 leading-relaxed">
              {company.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
              This Privacy Policy explains how we collect, use, and protect information when you
              visit our website or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Information we collect</h2>
            <p className="mt-3 leading-relaxed">
              We may collect information you voluntarily provide when you contact us, including
              your name, email address, and the content of your message. We do not use third-party
              analytics or advertising trackers on this website in iteration 1.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">How we use your information</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To communicate about projects and support requests</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Data retention</h2>
            <p className="mt-3 leading-relaxed">
              We retain contact information for as long as necessary to fulfill the purposes
              described in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Your rights</h2>
            <p className="mt-3 leading-relaxed">
              You may request access to, correction of, or deletion of your personal information
              by contacting us at{' '}
              <a href={`mailto:${company.email}`} className="text-teal-400 hover:underline">
                {company.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Contact</h2>
            <p className="mt-3 leading-relaxed">
              {company.name}<br />
              {company.location}<br />
              <a href={`mailto:${company.email}`} className="text-teal-400 hover:underline">
                {company.email}
              </a>
            </p>
          </section>
        </div>
      </Section>
    </>
  )
}
