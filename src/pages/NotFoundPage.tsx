import { Link } from 'react-router-dom'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/ui/Section'

export function NotFoundPage() {
  return (
    <>
      <PageHero
        title="Page not found"
        description="The page you are looking for does not exist or has been moved."
      />
      <Section>
        <Link
          to="/"
          className="inline-flex rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
        >
          Return home
        </Link>
      </Section>
    </>
  )
}
