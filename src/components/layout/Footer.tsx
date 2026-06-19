import { Link } from 'react-router-dom'
import { company, footerLinks } from '@/content/company'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-navy-700 bg-navy-900/50">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-cream">
              Java<span className="text-teal-400">Genics</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {company.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-muted transition-colors hover:text-teal-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Contact
            </h2>
            <address className="mt-4 space-y-2 not-italic text-sm text-muted">
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-teal-400"
                >
                  {company.email}
                </a>
              </p>
              <p>{company.location}</p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy-700 pt-8 text-sm text-muted md:flex-row">
          <p>&copy; {year} {company.name}. All rights reserved.</p>
          <p>Engineered in San Antonio, Texas</p>
        </div>
      </div>
    </footer>
  )
}
