import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, navLinks } from '@/content/company'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700/60 bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-cream hover:text-teal-400"
          aria-label={`${company.name} home`}
        >
          Java<span className="text-teal-400">Genics</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-navy-800 text-teal-400'
                        : 'text-muted hover:text-cream'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400 md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-cream md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-t border-navy-700 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-sm font-medium ${
                      isActive ? 'text-teal-400' : 'text-muted hover:text-cream'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg bg-teal-500 px-4 py-3 text-center text-sm font-semibold text-navy-950"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
