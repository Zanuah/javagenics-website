import { PageHero } from '@/components/layout/PageHero'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { company } from '@/content/company'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="We respond personally to every inquiry. No sales scripts — just a direct conversation about what you need and how we can help."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-cream">Get in touch</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Send project details, questions, or partnership inquiries to our team. We aim to
              respond within one business day.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-teal-400">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-lg text-cream hover:text-teal-400"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-teal-400">
                  Location
                </dt>
                <dd className="mt-1 text-lg text-cream">{company.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-teal-400">
                  In-person meetings
                </dt>
                <dd className="mt-1 leading-relaxed text-muted">
                  We frequently travel to gather requirements in person and maintain an open
                  dialog with clients. Let us know if an on-site visit would help your project.
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-navy-700 bg-navy-900/60 p-8">
            <h2 className="text-xl font-semibold text-cream">Send a message</h2>
            <p className="mt-2 text-sm text-muted">
              Click below to open your email client with a pre-filled subject line.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const name = (form.elements.namedItem('name') as HTMLInputElement).value
                const subject = (form.elements.namedItem('subject') as HTMLInputElement).value
                const body = (form.elements.namedItem('message') as HTMLTextAreaElement).value
                const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject || `Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\n\n${body}`)}`
                window.location.href = mailto
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cream">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-navy-700 bg-navy-950 px-4 py-2.5 text-cream placeholder:text-muted focus:border-teal-500 focus:outline-none"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cream">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="mt-1 w-full rounded-lg border border-navy-700 bg-navy-950 px-4 py-2.5 text-cream placeholder:text-muted focus:border-teal-500 focus:outline-none"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cream">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-navy-700 bg-navy-950 px-4 py-2.5 text-cream placeholder:text-muted focus:border-teal-500 focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
              >
                Send via email
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button to="/support" variant="secondary">
            Need support for an existing project?
          </Button>
        </div>
      </Section>
    </>
  )
}
