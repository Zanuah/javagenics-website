import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export function Button({ to, children, variant = 'primary', external }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400'
  const styles =
    variant === 'primary'
      ? `${base} bg-teal-500 text-navy-950 hover:bg-teal-400`
      : `${base} border border-navy-700 bg-transparent text-cream hover:border-teal-500 hover:text-teal-400`

  if (external) {
    return (
      <a href={to} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  )
}
